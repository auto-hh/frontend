import type { Edge, Position } from "./types";
import s from "./Loader.module.css";

type GetConnections = {
    positions: Position[][];
};

function getConnections({ positions }: GetConnections): Edge[] {
    const edges: Edge[] = [];

    for (let i = 0; i < positions.length - 1; i++) {
        for (const from of positions[i]) {
            for (const to of positions[i + 1]) {
                if (Math.random() < 0.5) {
                    edges.push({ from, to });
                }
            }
        }
    }

    return edges;
}

type ConnectionProps = {
    positions: Position[][];
};

export function Connections({ positions }: ConnectionProps) {
    const connections = getConnections({ positions });

    return (
        <g className={s.connections}>
            {connections.map((conn, i) => (
                <line
                    key={i}
                    x1={conn.from.x}
                    y1={conn.from.y}
                    x2={conn.to.x}
                    y2={conn.to.y}
                    className={s.connection}
                    markerEnd="url(#arrowhead)"
                    style={{ animationDelay: `${i * 0.02}s` }}
                />
            ))}
        </g>
    );
}
