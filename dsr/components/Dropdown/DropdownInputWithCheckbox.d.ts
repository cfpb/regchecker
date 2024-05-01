import type { ReactElement, ReactNode } from 'react';
interface TypeCheckboxInput {
    children: ReactNode;
    innerProps: JSX.IntrinsicElements['div'];
    isDisabled: boolean;
    isFocused: boolean;
    isSelected: boolean;
}
declare const CheckboxInputOption: ({ children, innerProps, isDisabled, isFocused, isSelected, ...rest }: TypeCheckboxInput) => ReactElement;
export default CheckboxInputOption;
