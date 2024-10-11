import TableProps from "./tableProps";
import "./table.scss";
import { useState } from "react";
import Button from "../Button/Button";

export default function Table({ ...props }: TableProps) {

    const [sortColumn, setSortColumn] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [data, setData] = useState<any[]>(props.data);
    const [page, setPage] = useState<number>(1);
    const [elementsPerPage, setElementsPerPage] = useState<number>(props.elementsPerPage ? props.elementsPerPage : 10);

    const handleSort = (column: string) => {
        console.log(column);
        const initialData = [...props.data];
        
        setSortColumn(column);
        switch (sortOrder) {
            case "":
                setSortOrder("asc");
                setData(initialData.sort((a, b) => {
                    if(typeof a[column] === "number" && typeof b[column] === "number") {
                        return a[column] - b[column];
                    }
                    else {
                        return a[column].toString().localeCompare(b[column].toString())
                    }
                }));
                break;
            case "asc": 
                setSortOrder("desc");
                setData(initialData.sort((a, b) => {
                    if (typeof a[column] === 'number' && typeof b[column] === 'number') {
                        return b[column] - a[column];
                    } 
                    else {
                        return b[column].toString().localeCompare(a[column].toString());
                    }
                }));
                break;
            case "desc":
                setSortColumn("");
                setSortOrder("");
                setData(initialData);
                break;
            default:
                setSortOrder("");
                setData(initialData);
                break;
            }
    }

    const handlePagination = (pageNumber: number, numberOfElements: number, dataToPage?: any[]) => {

        const maxPageNumber = Math.ceil(props.data.length / (elementsPerPage ? elementsPerPage : 10));

        let initialData;

        if(!dataToPage) {
            initialData = data;
        }
        else {
            initialData = dataToPage;
        }

        if(pageNumber <= maxPageNumber && pageNumber > 0) {
            setPage(pageNumber);
            setElementsPerPage(numberOfElements);
        }
        
    }

    const handleCellSelect = (e: any) => {
        e.target.classList.toggle("cell-selected")
    }

    const handleRowSelect = (e: any) => {
        e.target.closest("tr").classList.toggle("row-selected");
    }

    return(

        <table className="table-main">
            <thead>
                <tr>
                    <th>Select row</th>
                    {props.columns.map((column: string) => {
                        return(
                            <th className="table-header-cell" onClick={() => handleSort(column)}>
                                <div className="table-header-cell-content">
                                    <span>{column}</span>
                                    {
                                        sortColumn === column ?
                                        sortOrder === "asc" ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="12px" viewBox="0 0 24 24"><path d="M21,21H3L12,3Z"/></svg>
                                        :
                                        sortOrder === "desc" &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="12px" viewBox="0 0 24 24" transform="rotate(180)"><path d="M21,21H3L12,3Z"/></svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
                                    }
                                </div>
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    data.slice(((page-1)*elementsPerPage), page*elementsPerPage).map((item: any) => {
                        return(
                            <tr>
                                <td onClick={handleRowSelect}></td>
                                {
                                    props.columns.map((key: string) => {
                                        return(
                                            <td onClick={handleCellSelect}>{item[key]}</td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={props.columns.length}>
                        <div className="table-footer-content">
                            <div className="pagination">
                                <Button size="sm" onClick={() => handlePagination(page-1, elementsPerPage)} class="page">&laquo;</Button>
                                {
                                    Array.from(Array(Math.ceil(props.data.length / (elementsPerPage ? elementsPerPage : 10))), (_, index) => {
                                        return(
                                            <Button size="sm" onClick={() => handlePagination(index+1, elementsPerPage)} variant={page === index+1 ? "success" : "secondary"}>{(index+1).toString()}</Button>
                                        );
                                    })
                                }
                                <Button size="sm" onClick={() => handlePagination(page+1, elementsPerPage)} class="page">&raquo;</Button>
                            </div>
                            <div className="pagination-params">
                                <Button onClick={() => handlePagination(page, 10)} variant={elementsPerPage === 10 ? "success" : "secondary"} size="sm">10</Button>
                                <Button onClick={() => handlePagination(page, 25)} variant={elementsPerPage === 25 ? "success" : "secondary"} size="sm">25</Button>
                                <Button onClick={() => handlePagination(page, 50)} variant={elementsPerPage === 50 ? "success" : "secondary"} size="sm">50</Button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>

    );

}