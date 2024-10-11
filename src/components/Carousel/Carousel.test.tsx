import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Carousel from "./Carousel";
import CarouselProps from './carouselProps';

describe("Carousel component", () => {
    const carouselProps: CarouselProps = {
        pagination: true,
        class: "carousel-custom-class",
        children: [
            <p>Slide 1</p>,
            <b>Slide 2</b>,
            <em>Slide 3</em>
        ]
    };

    it("Renders carousel", () => {
        const { container } = render(
            <Carousel 
                pagination={carouselProps.pagination} 
                class={carouselProps.class} 
            >
                {carouselProps.children}
            </Carousel>
        );
    
        expect(container.firstChild).toHaveClass("carousel-custom-class");
        expect(screen.getByText("Slide 1").parentElement).toHaveClass("active");
        expect(screen.getByText("Slide 2").parentElement).not.toHaveClass("active");
    });

    it("Handles page slide", () => {

        render(
            <Carousel 
                pagination={carouselProps.pagination} 
                class={carouselProps.class} 
            >
                {carouselProps.children}
            </Carousel>
        );

        const buttonNext = screen.getByTestId("carousel-button-next");
        const buttonPrev = screen.getByTestId("carousel-button-prev");

        fireEvent.click(buttonNext);
        expect(screen.getByText("Slide 1").parentElement).not.toHaveClass("active");
        expect(screen.getByText("Slide 2").parentElement).toHaveClass("active");

        fireEvent.click(buttonPrev);
        expect(screen.getByText("Slide 1").parentElement).toHaveClass("active");
        expect(screen.getByText("Slide 2").parentElement).not.toHaveClass("active");
    });

    it("Handles auto page slide", async () => {

        render(
            <Carousel 
                pagination={carouselProps.pagination} 
                class={carouselProps.class}
                autoplay={true}
            >
                {carouselProps.children}
            </Carousel>
        );

        await waitFor(() => {
            expect(screen.getByText("Slide 1").parentElement).not.toHaveClass("active");
            expect(screen.getByText("Slide 2").parentElement).toHaveClass("active");
        });
    });

    it("Handles pagination", () => {

        render(
            <Carousel 
                pagination={carouselProps.pagination} 
                class={carouselProps.class}
                autoplay={true}
            >
                {carouselProps.children}
            </Carousel>
        );

        const pagination = screen.getByTestId("carousel-pagination");

        fireEvent.click(pagination.lastChild!);
        expect(screen.getByText("Slide 1").parentElement).not.toHaveClass("active");
        expect(screen.getByText("Slide 3").parentElement).toHaveClass("active");

        fireEvent.click(pagination.firstChild!);
        expect(screen.getByText("Slide 1").parentElement).toHaveClass("active");
        expect(screen.getByText("Slide 3").parentElement).not.toHaveClass("active");
    });
    
});