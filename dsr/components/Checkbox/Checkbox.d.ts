import type { ChangeEvent, ReactElement, ReactNode, RefObject } from 'react';
export interface CheckboxProperties {
    /** Unique identifier for this checkbox */
    id: string;
    /** Text that appears next to the checkbox for clarification of purpose */
    label: ReactNode;
    /** Additional CSS classes applied to the checkbox's wrapper element */
    className?: string;
    /** Is checkboxed checked? */
    checked?: boolean;
    /** Additional text to further clarify purpose of checkbox */
    helperText?: ReactNode;
    /** Additional CSS classes that will be applied to checkbox input element */
    inputClassName?: string;
    /** Additional CSS classes that will be applied to checkbox label element */
    labelClassName?: string;
    /** React Ref to be enable direct access and control of the input element */
    inputRef?: RefObject<HTMLInputElement> | string | ((instance: HTMLInputElement | null) => void) | null | undefined;
    /** Apply the "Large" styles for this element? */
    isLarge?: boolean;
    /** A name for this checkbox's value that can be referenced in javascript */
    labelInline?: boolean;
    /** Removes/Adds 'label__heading' class to the Label * */
    name?: string;
    /** Is this checkbox disabled? */
    disabled?: boolean;
    /** An event handler function that will be called when the checkbox's value is changed  */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** Border status */
    status?: 'error' | 'success' | 'warning';
}
export declare const Checkbox: ({ id, label, className, inputClassName, labelClassName, checked, helperText, inputRef, disabled, isLarge, labelInline, name, onChange, status, ...properties }: CheckboxProperties & JSX.IntrinsicElements['input']) => ReactElement;
export default Checkbox;
