import { ReactElement } from "react";

export default interface CarouselProps {
    children: ReactElement[];
    pagination?: boolean;
    autoplay?: boolean;
    autoplayTimer?: number;
    class?: string;
    style?: Record<string, string>
}