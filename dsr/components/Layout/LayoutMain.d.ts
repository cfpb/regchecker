/// <reference types="react" />
interface LayoutMainProperties {
    bleedbar?: boolean;
    children: JSX.Element | JSX.Element[];
    classes?: string;
    id?: string;
    layout?: '1-3' | '2-1';
}
export declare const LayoutMain: ({ children, classes, id, layout, bleedbar }: LayoutMainProperties) => JSX.Element;
export {};
