/// <reference types="react" />
interface LayoutContentProperties {
    children: JSX.Element | JSX.Element[] | string;
    flushAllOnSmall?: boolean;
    flushBottom?: boolean;
    flushTopOnSmall?: boolean;
    narrow?: boolean;
}
export declare const LayoutContent: ({ children, flushBottom, flushTopOnSmall, flushAllOnSmall, narrow, ...properties }: LayoutContentProperties & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
export {};
