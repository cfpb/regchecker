/// <reference types="react" />
interface GridRowProperties {
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
}
export declare function GridRow({ children, className, ...properties }: GridRowProperties): JSX.Element;
export {};
