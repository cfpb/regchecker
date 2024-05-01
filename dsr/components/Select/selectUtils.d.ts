/// <reference types="react" />
import type { SelectOption } from './Select';
export declare const buildOptions: (options: SelectOption[], defaultOptionLabel: string) => JSX.Element[];
export declare const findOptionByValue: (options: SelectOption[], value: string) => SelectOption | undefined;
