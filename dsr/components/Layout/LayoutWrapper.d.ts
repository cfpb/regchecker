/// <reference types="react" />
/**
 * ~ Usage ~
 *
 * <Layout.Main>
 *  <Hero />
 *  <Layout.Wrapper>
 *    <Layout.Content>
 *      Main Content
 *    </Layout.Content>
 *    <Layout.Sidebar>
 *      Sidebar Content
 *    </Layout.Sidebar>
 *  </Layout.Wrapper>
 * </Layout.Main>
 */
interface LayoutWrapperProperties {
    children: JSX.Element | JSX.Element[] | string;
}
export declare const LayoutWrapper: ({ children, ...properties }: LayoutWrapperProperties & React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
export {};
