import type { Position } from "./types";

type GetNeuronPositions = {
    layers: number[];
    svgWidth: number;
    svgHeight: number;
    nodeRadius: number;
};

export function getNeuronPositions({
    layers,
    svgWidth,
    svgHeight,
}: GetNeuronPositions): Position[][] {
    const layerWidth = svgWidth / layers.length;
    const startX = layerWidth / 2;

    const positions = layers.map((neuronCount, layerIndex) => {
        const x = startX + layerIndex * layerWidth;
        const padding = svgHeight / (neuronCount + 1);

        return Array.from({ length: neuronCount }, (_, i) => ({
            x,
            y: padding * (i + 1),
            layer: layerIndex,
            index: i,
        }));
    });

    return positions;
}
