import type { ReactEventHandler, Ref } from 'react';
import type { PropsValue } from 'react-select';
import type { SelectOption } from './Dropdown.types';
/**
 * Event Handlers
 */
export declare function onCloser(index: number, onChange: (result: PropsValue<SelectOption>) => void, selected?: PropsValue<SelectOption>): ReactEventHandler<HTMLButtonElement>;
/**
 * Components
 */
interface DropdownPillProperties {
    value: string;
    onClose: ReactEventHandler<HTMLButtonElement>;
}
export declare const DropdownPill: ({ value, onClose }: DropdownPillProperties) => JSX.Element;
interface DropdownPillsProperties {
    isMulti?: boolean;
    labelClearAll?: string;
    onChange: (event: PropsValue<SelectOption>) => void;
    pillAlign?: 'bottom' | 'top';
    selected: PropsValue<SelectOption>;
    selectRef: Ref<any>;
    showClearAllSelectedButton?: boolean;
}
export declare const DropdownPills: ({ isMulti, labelClearAll, onChange, pillAlign, selected, selectRef, showClearAllSelectedButton }: DropdownPillsProperties) => JSX.Element | null;
export {};
