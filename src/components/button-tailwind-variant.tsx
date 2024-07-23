import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

// Problems with tailwind-variant:
// 1 - defaultVariants throw type error
// 2 - Variant types are not recognized as properties (Although, they work)

const buttonVariants = tv({
    base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2',

    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },
    //
    // defaultVariants: {
    //     variant: 'primary',
    //     size: 'default'
    // }
})

type ButtonVariantsTypes = VariantProps<typeof buttonVariants>;

interface ButtonProps extends ComponentProps<'button'>, ButtonVariantsTypes {
    children: ReactNode
}

export function TailWindVariantButton({ children, variant, size, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={buttonVariants({ variant,size })}>
            {children}
        </button>
    )
}