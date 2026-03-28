import s from "./Loader.module.scss";

const cubes = Array.from({ length: 3 }, (_, h) =>
    Array.from({ length: 3 }, (_, w) =>
        Array.from({ length: 3 }, (_, l) => ({
            h: h + 1,
            w: w + 1,
            l: l + 1,
        })),
    ),
).flat(2);

export const Loader = () => {
    return (
        <div className={s.container}>
            {cubes.map(({ h, w, l }) => (
                <div
                    key={`h${h}w${w}l${l}`}
                    className={`${s.cube} ${s[`h${h}`]} ${s[`w${w}`]} ${s[`l${l}`]}`}
                >
                    <div className={s.faceTop} />
                    <div className={s.faceLeft} />
                    <div className={s.faceRight} />
                </div>
            ))}
        </div>
    );
};
