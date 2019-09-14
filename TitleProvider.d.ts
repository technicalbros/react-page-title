import * as React from "react";
import { UIRouterReact } from "@uirouter/react";
import Title from "./Title";
interface TitleProviderProps {
    children: any;
    service: Title;
    onUpdate?: (title: any) => void;
    router?: UIRouterReact;
}
export default class TitleProvider extends React.Component<TitleProviderProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
