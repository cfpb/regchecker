/// <reference types="react" />
import type { JSXElement } from '../../../src/types/jsxElement';
export type AlertFieldLevelType = 'error' | 'info' | 'success' | 'warning';
export declare enum AlertFieldLevelClass {
    'info' = "__info",
    'error' = "__error",
    'success' = "__success",
    'warning' = "__warning"
}
export declare const MapTypeToIconName: {
    info: string;
    error: string;
    success: string;
    warning: string;
};
export interface AlertFieldLevelProperties extends React.HTMLAttributes<HTMLDivElement> {
    status?: AlertFieldLevelType;
    message: React.ReactNode;
    isVisible?: boolean;
}
export declare const AlertFieldLevel: ({ status, message, isVisible, ...properties }: AlertFieldLevelProperties) => JSXElement;
