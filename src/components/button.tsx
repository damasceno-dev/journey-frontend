import {ComponentProps, ReactNode} from "react";

const variants = {
    base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2 transition duration-400",
    bgColor: {
        default: "bg-lime-300 text-lime-950 hover:bg-lime-400",
        secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
    },

    size: {
        default: "py-2",
        full: "w-full h-11"
    }
}
interface ButtonProps extends ComponentProps<"button"> {
    children: ReactNode;
    bgColor?: "default" | "secondary";
    size?: "default" | "full";
    
}

export function Button({ children, bgColor = variants.bgColor.default, size = variants.size.default, ...rest }: ButtonProps) {
    
    let bgColorApplied, sizeApplied;
    
    if (bgColor == "secondary") {
        bgColorApplied = variants.bgColor.secondary
    } else {
        bgColorApplied = variants.bgColor.default
    }
    
    if (size == "full") {
        sizeApplied = variants.size.full
    } else {
        sizeApplied = variants.size.default
    }
    
    return (
        <button {...rest} className={`${variants.base} ${bgColorApplied} ${sizeApplied}`}>
            {children}
        </button>
    )
}