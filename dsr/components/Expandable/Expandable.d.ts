import type React from 'react';
import type { ReactNode } from 'react';
export interface ExpandableProperties extends React.HTMLAttributes<HTMLDivElement> {
    header: string;
    children: ReactNode;
    inAccordion?: boolean;
    openOnLoad?: boolean;
}
export declare const Expandable: React.FC<ExpandableProperties>;
export default Expandable;
