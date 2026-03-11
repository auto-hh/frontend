export type Position = {
    x: number;
    y: number;
    layer: number;
    index: number;
};

export type Edge = {
    from: Position;
    to: Position;
};
