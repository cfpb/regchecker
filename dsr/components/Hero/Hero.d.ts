/// <reference types="react" />
import type { HeadingLevel } from '../../types/headingLevel';
interface HeroProperties extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string;
    heading?: React.ReactNode;
    headingLevel?: HeadingLevel;
    image?: string;
    imageAltText?: string;
    imageIsPhoto?: boolean;
    is5050?: boolean;
    isJumbo?: boolean;
    isKnockout?: boolean;
    subheading?: React.ReactNode;
    subheadingLevel?: HeadingLevel | 'p';
    textColor?: string;
}
/**
 * https://cfpb.github.io/design-system/patterns/heroes
 */
export default function Hero({ backgroundColor, heading, headingLevel, image, imageAltText, imageIsPhoto, is5050, isJumbo, isKnockout, subheading, subheadingLevel, textColor, className, ...properties }: HeroProperties): JSX.Element;
export {};
