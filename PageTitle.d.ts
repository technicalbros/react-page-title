import * as React from "react";
import Title from "./Title";
interface PageTitleProps {
    children: string;
    untitledText?: string;
}
export default class PageTitle extends React.Component<PageTitleProps> {
    context: Title;
    state: any;
    static contextType: React.Context<Title>;
    updateTitle(): void;
    componentDidUpdate(props: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export {};
