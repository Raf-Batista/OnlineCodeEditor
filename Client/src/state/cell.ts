export type CellTypes = 'javascript' | 'ruby' | 'text';

export interface Cell {
    id: string;
    type: CellTypes;
    content: string;
}