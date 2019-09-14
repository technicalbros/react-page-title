import * as React from "react";
import {UIRouterReact} from "@uirouter/react";
import Title from "./Title";
import TitleContext from "./TitleContext";

interface TitleProviderProps {
    children: any,
    service: Title,
    onUpdate?: (title) => void,
    router?: UIRouterReact
}

export default class TitleProvider extends React.Component<TitleProviderProps> {

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
