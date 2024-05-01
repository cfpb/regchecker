/// <reference types="react" />
import type { JSXElement } from '../../../src/types/jsxElement';
export type HeadingType = '1' | '2' | '3' | '4' | '5' | 'display' | 'eyebrow' | 'slug';
interface HeadingProperties extends React.HTMLProps<HTMLHeadingElement> {
    /** Heading type (1-5, display, eyebrow, slug) */
    type?: HeadingType;
}
export declare const Heading: ({ type, children, className, ...properties }: HeadingProperties) => JSXElement;
export {};
