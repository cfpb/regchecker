/// <reference types="react" />
interface FooterProperties extends React.HTMLProps<HTMLElement> {
    navLinks?: JSX.Element[];
    socialLinks?: JSX.Element[];
    linksCol1?: JSX.Element[];
    linksCol2?: JSX.Element[];
    linksCol3?: JSX.Element[];
}
/**
 * Simply define the anchor elements for each section to compose your Footer
 */
export default function Footer({ navLinks, socialLinks, linksCol1, linksCol2, linksCol3, className, ...properties }: FooterProperties): JSX.Element;
export {};
