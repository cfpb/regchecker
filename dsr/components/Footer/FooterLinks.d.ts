/// <reference types="react" />
import type { JSXElement } from '../../types/jsxElement';
interface WrapperProperties {
    children: JSX.Element[];
}
/**
 * Wrapper for Footer Navigation Links
 */
export declare const NavLinks: ({ children }: WrapperProperties) => JSXElement;
/**
 * Wrapper for Social Navigation Links
 */
export declare const SocialLinks: ({ children }: WrapperProperties) => JSXElement;
/**
 * Wrapper for column of Footer Links
 */
export declare const FooterLinksColumn: ({ children }: WrapperProperties) => JSXElement;
export {};
