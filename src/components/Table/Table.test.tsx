import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react";
import Table from "./Table";
import TableProps from './tableProps';

describe("Table component", () => {

    const TableProps: TableProps = {
        columns: ["Id", "Name", "Age"],
        data:  [
            { Id: 1, Name: "John", "Age": 30 },
            { Id: 2, Name: "Bob", "Age": 20 },
            { Id: 3, Name: "William", "Age": 40 },
        ],
        elementsPerPage: 2,
        class: "custom-table-class"
    };

    it("Renders table header and data", () => {
        render(
            <Table 
                columns={TableProps.columns}
                data={TableProps.data}
                elementsPerPage={TableProps.elementsPerPage}
                class={TableProps.class}
            />
        );

        TableProps.columns.forEach(column => {
            expect(screen.getByText(column)).toBeInTheDocument();
        });

        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("30")).toBeInTheDocument();
    });

    it("Sorts data by column", () => {
        render(
            <Table 
                columns={TableProps.columns}
                data={TableProps.data}
                elementsPerPage={TableProps.elementsPerPage}
                class={TableProps.class}
            />
        );

        fireEvent.click(screen.getByText("Age"));

        const rows = screen.getAllByRole("row");
        expect(rows[1]).toHaveTextContent("Bob");
        expect(rows[2]).toHaveTextContent("John");

        fireEvent.click(screen.getByText("Age"));

        expect(rows[1]).toHaveTextContent("William");
        expect(rows[2]).toHaveTextContent("John");
    });

    it("Handles pagination", () => {
        render(
            <Table 
                columns={TableProps.columns}
                data={TableProps.data}
                elementsPerPage={TableProps.elementsPerPage}
                class={TableProps.class}
            />
        );

        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.queryByText("William")).not.toBeInTheDocument();

        const nextPageButton = screen.getByText("»");
        fireEvent.click(nextPageButton);

        expect(screen.getByText("William")).toBeInTheDocument();
        expect(screen.queryByText("John")).not.toBeInTheDocument();
    });

    it("Handle row selection", () => {
        render(
            <Table 
                columns={TableProps.columns}
                data={TableProps.data}
                elementsPerPage={TableProps.elementsPerPage}
                class={TableProps.class}
            />
        );

        const firstRow = screen.getAllByRole("row")[1];
        fireEvent.click(firstRow.firstChild!);

        expect(firstRow).toHaveClass("row-selected");
    });

    it("Handle cell selection", () => {
        render(
            <Table 
                columns={TableProps.columns}
                data={TableProps.data}
                elementsPerPage={TableProps.elementsPerPage}
                class={TableProps.class}
            />
        );

        const firstRow = screen.getAllByRole("cell")[1];
        fireEvent.click(firstRow);

        expect(firstRow).toHaveClass("cell-selected");
    });
});