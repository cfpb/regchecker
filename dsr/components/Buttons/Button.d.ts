import type { ButtonHTMLAttributes } from 'react';
interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button contents
     */
    label: string;
    /**
     * What is the button's appearance?
     */
    appearance?: 'primary' | 'secondary' | 'warning';
    /**
     * How large should the button be?
     */
    size?: 'default' | 'full';
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button should be styled as a link?
     */
    asLink?: boolean;
    /**
     * Name of icon to display left of button text
     */
    iconLeft?: string;
    /**
     * Name of icon to display right of button text
     */
    iconRight?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare function Button({ appearance, asLink, size, label, className, iconLeft, iconRight, ...properties }: ButtonProperties): JSX.Element;
export {};
