import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root className="h-6 w-6 border-2 border-blue rounded-md flex items-center justify-center" {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className="h-5 w-5 text-blue" /> 
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}