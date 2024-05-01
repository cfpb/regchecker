/// <reference types="react" />
import type { User } from '../Navbar/Navbar';
interface PageHeaderProperties {
    links?: JSX.Element[];
    user?: User;
}
export default function PageHeader({ links, user }: PageHeaderProperties): JSX.Element;
export {};
