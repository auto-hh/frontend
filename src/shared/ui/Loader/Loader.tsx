import { Connections } from "./Connections";
import { getNeuronPositions, Neurons } from "./Neurons";
import s from "./Loader.module.css";
import type { Position } from "./types";
import { Defs } from "./Defs";

export function Loader() {
    const layers = [8, 5, 4, 3];
    const nodeRadius = 32;
    const svgWidth = window.innerWidth * 0.75;
    const svgHeight = window.innerHeight * 1.5;

    const positions: Position[][] = getNeuronPositions({
        layers,
        svgWidth,
        svgHeight,
        nodeRadius,
    });

    return (
        <div className={s.container}>
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className={s.svg}>
                <Defs />
                <Neurons positions={positions} nodeRadius={nodeRadius} />
                <Connections positions={positions} />
            </svg>
        </div>
    );
}
