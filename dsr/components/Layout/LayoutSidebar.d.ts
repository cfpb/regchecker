/// <reference types="react" />
interface LayoutSidebarProperties {
    children: JSX.Element | JSX.Element[] | string;
    flushBottom?: boolean;
    flushTopOnSmall?: boolean;
    flushAllOnSmall?: boolean;
}
export declare const LayoutSidebar: ({ children, flushBottom, flushTopOnSmall, flushAllOnSmall, ...properties }: LayoutSidebarProperties & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
export {};
