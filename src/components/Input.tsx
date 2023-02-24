import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center h-12 gap-3 py-4 outline-2 outline-blue w-full" >
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className="w-6 h-6 text-blue">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input type="text" className="rounded-sm bg-transparent text-black px-1 placeholder-yellow outline-blue w-full" 
        {...props}
        />
    )
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
    Root: TextInputRoot, 
    Icon: TextInputIcon,
    Input: TextInputInput
}