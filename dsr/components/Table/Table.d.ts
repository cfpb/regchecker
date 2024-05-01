import { type ReactNode } from 'react';
import { type WidthPercent } from '../../types/WidthPercent';
export interface TableColumnConfiguration {
    header: string;
    alignRight?: boolean | undefined;
    width?: WidthPercent;
}
export type TableColumn = TableColumnConfiguration | string;
export interface TableProperties {
    caption?: ReactNode;
    columns: TableColumn[];
    rows: ReactNode[][];
    isResponsive?: boolean;
    isDirectory?: boolean;
    isScrollableHorizontal?: boolean;
    isStriped?: boolean;
    isPaginated?: boolean;
    startPage?: number;
    perPage?: number;
    className?: string;
}
/**
 * Tables allow for the presentation of many data points grouped together in a visual way. They serve a unique purpose of allowing easy organization or comparison of more complex data than a chart or graph. They can be read either vertically (by columns) or horizontally (by rows).
 *
 * Source: https://cfpb.github.io/design-system/components/tables
 */
export declare const Table: ({ caption, columns, rows, isResponsive, isDirectory, isScrollableHorizontal, isStriped, isPaginated, startPage, perPage, className, ...others }: React.HTMLProps<HTMLTableElement> & TableProperties) => React.ReactElement;
export default Table;
