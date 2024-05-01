/// <reference types="react" />
import type { JSXElement } from '../../types/jsxElement';
interface TaglineProperties {
    children: JSX.Element | string;
    isLarge?: boolean;
}
export declare const Tagline: ({ isLarge, children }: TaglineProperties) => JSXElement;
export {};
