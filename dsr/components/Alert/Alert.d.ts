/// <reference types="react" />
import type { HeadingLevel } from '../../types/headingLevel';
import type { AlertFieldLevelType } from './AlertFieldLevel';
import type { AlertLinkProperties } from './AlertLink';
export declare const iconByType: Record<string, {
    name: string;
    withBg: boolean;
}>;
export type AlertType = 'error' | 'info' | 'loading' | 'success' | 'warning';
interface AlertProperties {
    status?: AlertFieldLevelType | AlertType;
    message?: React.ReactNode;
    headingLevel?: HeadingLevel;
    children?: React.ReactNode;
    links?: AlertLinkProperties[];
    isVisible?: boolean;
    isFieldLevel?: boolean;
    showIcon?: boolean;
}
/**
 * Alerts draw a user’s attention to a change in the status of a form or page. Form-level alerts reflect a user or system action and appear below the form title. Field-level alerts appear inline with input fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting a form. *
 *
 * Source: https://cfpb.github.io/design-system/components/alerts
 *
 */
export declare const Alert: ({ children, className, headingLevel, links, message, status, isVisible, isFieldLevel, showIcon, ...properties }: AlertProperties & React.HTMLAttributes<HTMLDivElement>) => React.ReactElement | null;
export default Alert;
