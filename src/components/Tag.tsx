import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={twMerge(
                "inline-flex items-center gap-2 px-3 py-1 border border-lime-400 rounded-full uppercase text-lime-400 text-sm",
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span>{children}</span>
        </div>
    );
}
