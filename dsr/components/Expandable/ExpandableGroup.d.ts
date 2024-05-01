import type { ReactElement } from 'react';
import React from 'react';
import type { ExpandableProperties } from './Expandable';
export interface ExpandableGroupProperties extends React.HTMLAttributes<HTMLDivElement> {
    groupId: string;
    accordion?: boolean;
    children?: ReactElement<ExpandableProperties>[];
}
export declare const ExpandableGroup: React.FC<ExpandableGroupProperties>;
export default ExpandableGroup;
