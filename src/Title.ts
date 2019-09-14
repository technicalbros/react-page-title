import * as _ from "lodash";
import {UIRouterReact} from "@uirouter/react";

export default class Title {

    private appName = "React App";
    private _onChange: ((title: string) => void)[] = [];
    private _formatTitle: (title: string) => string;

    constructor({appName, onChange, formatter}: { appName?: string, onChange?: (title: string) => void, formatter?: (title: string) => string } = {}) {
        this.setAppName(appName);
        this.onChange(onChange);
        this.setFormatter(formatter)
    }

    setAppName(name: string): Title {
        this.appName = name;
        return this;
    }

    setFormatter(formatter: (title: string) => string = title => `${title} | ${this.appName}`) {
        this._formatTitle = formatter;
        return this;
    }

    getAppName() {
        return this.appName;
    }

    onChange(onChange: (title: string) => void = () => null): () => void {
        this._onChange.push(onChange);
        return () => {
            _.pull(this._onChange, onChange);
        }
    }

    set(title: string): this {
        document.title = this._formatTitle(title);
        this._onChange.forEach(callback => callback(title));
        return this;
    }

    hookUiRouter(router: UIRouterReact): this {
        router.transitionService.onSuccess({}, transition => {
            const state = transition.to();
            const title = _.get(state, "data.title", 'Untitled');
            if (title !== false)
                this.set(title || '')
        });
        return this;
    }

    get(): string {
        return document.title;
    }
}
