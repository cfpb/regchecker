/// <reference types="react" />
import type { GroupBase, Props } from 'react-select';
import type { DropdownProperties } from './Dropdown.types';
/**
 * A dropdown input component that supports multi-select.
 *
 * Passing the `value` prop makes the dropdown a controlled component.
 * @returns JSX.Element
 */
export declare function Dropdown<OptionType, IsMulti extends boolean = false, GroupType extends GroupBase<OptionType> = GroupBase<OptionType>>({ error, id, isMulti, label, labelClearAll, onSelect, options, pillAlign, value, withCheckbox, isClearable, // Show/Hide react-select X in select input that clears all selections
showClearAllSelectedButton, className, ...properties }: DropdownProperties & Props<OptionType, IsMulti, GroupType>): JSX.Element;
export default Dropdown;
