import * as React from "react";
import { UIRouterReact } from "@uirouter/react";
import Title from "./Title";
export default class TitleProvider extends React.Component {
    props: {
        children: any;
        service: Title;
        onUpdate?: (title: any) => void;
        router?: UIRouterReact;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
