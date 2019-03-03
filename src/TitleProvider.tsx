import * as React from "react";
import {UIRouterReact} from "@uirouter/react";
import Title from "./Title";
import TitleContext from "./TitleContext";

export default class TitleProvider extends React.Component {

    props: {
        children: any,
        service: Title,
        onUpdate?: (title) => void,
        router?: UIRouterReact
    }

    componentDidMount(): void {
        if (this.props.router) {
            this.props.service.hookUiRouter(this.props.router)
        }
    }

    render() {
        const $title = this.props.service;
        return <TitleContext.Provider value={$title}>{this.props.children}</TitleContext.Provider>
    }

}
