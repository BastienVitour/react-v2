export default interface TableProps {
    columns: string[];
    data: any[];
    elementsPerPage?: number;
    class?: string;
    style?: Record<string, string>
}