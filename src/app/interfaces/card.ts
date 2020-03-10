export interface Card {
    shape: Shape;
    color: Color;
    fill: Fill;
    quantity: number;
}

export enum Shape {
    Square = 1,
    Oval = 2,
    Wave = 3,
}

export enum Fill {
    Empty = 1,
    Striped = 2,
    Full = 3
}

export enum Color {
    Red = 1,
    Green = 2,
    Purple = 3,
}
