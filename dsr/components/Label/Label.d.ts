/// <reference types="react" />
interface LabelProperties {
    children: React.ReactNode;
    inline?: boolean;
    htmlFor: string;
    className?: string;
}
export declare const Label: ({ children, inline, htmlFor, className, ...other }: JSX.IntrinsicElements['label'] & LabelProperties) => React.ReactElement | null;
export default Label;
