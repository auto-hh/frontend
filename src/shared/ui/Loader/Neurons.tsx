import type { Position } from "./types";
import s from "./Loader.module.css";

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
