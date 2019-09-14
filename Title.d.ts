import { UIRouterReact } from "@uirouter/react";
export default class Title {
    private appName;
    private _onChange;
    private _formatTitle;
    constructor({ appName, onChange, formatter }?: {
        appName?: string;
        onChange?: (title: string) => void;
        formatter?: (title: string) => string;
    });
    setAppName(name: string): Title;
    setFormatter(formatter?: (title: string) => string): this;
    getAppName(): string;
    onChange(onChange?: (title: string) => void): () => void;
    set(title: string): this;
    hookUiRouter(router: UIRouterReact): this;
    get(): string;
}
