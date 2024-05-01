import type { OnChangeValue, PropsValue } from 'react-select';
import type { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
export interface SelectOption {
    value: string;
    label: string;
}
export interface DropdownProperties extends StateManagerProps {
    error?: boolean | string;
    id: string;
    isDisabled?: boolean;
    isMulti?: boolean;
    label?: string;
    labelClearAll: string;
    onSelect: (event: OnChangeValue<SelectOption, boolean>) => void;
    options: SelectOption[];
    pillAlign?: 'bottom' | 'hide' | 'top';
    showClearAllSelectedButton?: boolean;
    value?: PropsValue<SelectOption>;
    withCheckbox?: boolean;
}
