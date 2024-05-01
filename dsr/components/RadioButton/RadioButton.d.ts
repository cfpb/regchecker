import type React from 'react';
import type { ReactNode } from 'react';
interface RadioProperties {
    id: string;
    label: ReactNode;
    className?: string;
    helperText?: string;
    inputRef?: React.RefObject<HTMLInputElement> | string | ((instance: HTMLInputElement | null) => void) | null | undefined;
    disabled?: boolean;
    isLarge?: boolean;
    name?: string;
    labelClassName: string;
    labelInline: boolean /** Removes/Adds 'label__heading' class to the Label * */;
}
export declare const RadioButton: ({ id, name, helperText, className, disabled, isLarge, labelClassName, labelInline, label, inputRef }: JSX.IntrinsicElements['input'] & RadioProperties) => React.ReactElement;
export default RadioButton;
