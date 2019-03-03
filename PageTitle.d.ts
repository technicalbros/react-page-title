import * as React from "react";
import Title from "./Title";
export default class PageTitle extends React.Component {
    props: {
        children: string;
        untitledText?: string;
    };
    context: Title;
    state: any;
    static contextType: React.Context<Title>;
    updateTitle(): void;
    componentDidUpdate(props: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
