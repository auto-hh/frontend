import s from "./Loader.module.css";

export function Defs() {
    return (
        <defs>
            {/* Маркер стрелки */}
            <marker
                id="arrowhead"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
            >
                <polygon points="0 0, 6 3, 0 6" className={s.arrow} />
            </marker>

            {/* Свечение */}
            <filter
                id="neuralGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
            >
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    );
}
