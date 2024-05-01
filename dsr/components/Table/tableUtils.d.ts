/// <reference types="react" />
import type { TableProperties } from './Table';
export declare const buildColumnHeaders: (columns: TableProperties['columns']) => JSX.Element | null;
export declare const buildRows: (rows: TableProperties['rows'], columns: TableProperties['columns']) => JSX.Element | null;
