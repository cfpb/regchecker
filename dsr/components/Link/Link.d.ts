/// <reference types="react" />
import type { JSXElement } from '../../types/jsxElement';
export interface LinkProperties extends React.HTMLProps<HTMLAnchorElement> {
    children?: React.ReactNode;
    hasIcon?: boolean;
    href?: string;
    isJump?: boolean;
    isJumpLeft?: boolean;
    isRouterLink?: boolean;
    noWrap?: boolean;
    ref?: React.Ref<HTMLAnchorElement>;
    type?: 'default' | 'destructive' | 'list';
}
/**
 * Links are navigational elements that connect users to other locations, either on the current page or to a different page or site. In contrast, <a href="https://cfpb.github.io/design-system/components/buttons">buttons</a> are used to signal important actions.
 *
 * Source: https://cfpb.github.io/design-system/components/links
 */
export default function Link({ children, hasIcon, href, isJump, isJumpLeft, isRouterLink, noWrap, type, ...others }: LinkProperties): JSXElement;
export declare const LinkText: ({ children, ...others }: React.HTMLProps<HTMLSpanElement>) => JSX.Element;
export declare const ListLink: (properties: LinkProperties) => JSXElement;
export declare const DestructiveLink: (properties: LinkProperties) => JSXElement;
