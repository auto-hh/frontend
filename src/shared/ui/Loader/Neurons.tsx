import type { Position } from "./types";
import s from "./Loader.module.css";

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

interface NeuronsProps {
    positions: Position[][];
    nodeRadius: number;
}

export function Neurons({ positions, nodeRadius }: NeuronsProps) {
    return (
        <>
            {positions.map((layer, layerIndex) => (
                <g key={layerIndex} className={s.layer}>
                    {layer.map((neuron: Position, neuronIndex: number) => (
                        <g key={neuronIndex}>
                            {/* Внешнее кольцо */}
                            <circle
                                cx={neuron.x}
                                cy={neuron.y}
                                r={nodeRadius}
                                className={s.neuronRing}
                                style={{
                                    animationDelay: `${(layerIndex + neuronIndex) * 0.1}s`,
                                }}
                            />
                            {/* Внутренний круг */}
                            <circle
                                cx={neuron.x}
                                cy={neuron.y}
                                r={nodeRadius}
                                className={s.neuron}
                                style={{
                                    animationDelay: `${(layerIndex + neuronIndex) * 0.1}s`,
                                }}
                            />
                        </g>
                    ))}
                </g>
            ))}
        </>
    );
}
