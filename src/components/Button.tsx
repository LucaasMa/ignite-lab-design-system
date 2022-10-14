import {clsx} from 'clsx';
import {Slot} from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean;
    className?: string
}

export function Button({children, asChild, className, ...props}: ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',//py = paddind vertical, px - padding horizontal, 4 e 3 por ser multiplicado por 4
            className
            )}
            {...props}
            >{children}</Comp>
    )
}