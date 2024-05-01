import type { GroupBase, OptionsOrGroups, PropsValue } from 'react-select';
import type { SelectOption } from './Dropdown.types';
export declare const MockOptions: {
    value: string;
    label: string;
}[];
/**
 * For multi-select, hides already selected options.
 *
 * @param options Available options
 * @param selected Selected options
 * @param isMulti Is a multi-select component?
 * @param showAllOptions Force all options to be displayed for selection
 * @returns A list of selectable options
 */
export declare const filterOptions: (options: PropsValue<SelectOption>, value: PropsValue<SelectOption>, isMulti: boolean, showAllOptions: boolean) => OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
export declare const onSelectInputFocus: (event: React.ChangeEvent<HTMLInputElement>) => void;
