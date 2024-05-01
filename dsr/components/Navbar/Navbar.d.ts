/// <reference types="react" />
export declare function CfpbLogo(): JSX.Element;
interface NavbarProperties {
    links?: JSX.Element[];
    user?: User;
}
export interface User {
    name?: string;
    loginHref?: string;
    logoutHref?: string;
}
export default function Navbar({ links, user }: NavbarProperties): JSX.Element;
export declare const ExampleLinks: JSX.Element[];
export {};
