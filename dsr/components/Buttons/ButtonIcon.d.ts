/// <reference types="react" />
interface ButtonIconProperties extends React.HTMLProps<HTMLSpanElement> {
    name?: string;
    isLeft?: boolean;
    isRight?: boolean;
}
/**
 * Display an icon within a Button
 */
export declare const ButtonIcon: ({ name, isLeft, isRight, className, ...properties }: ButtonIconProperties) => React.ReactNode;
export {};
