import {UIRouterReact} from "@uirouter/react";
import * as _ from "lodash";

export class Title {

    appName = "React App";

    formatTitle: (title: string) => string = title => `${title} | ${this.appName}`

    constructor({appName}) {
        this.setAppName(appName)
    }

    setAppName(name): Title {
        this.appName = name;
        return this;
    }

    set(title): Title {
        document.title = this.formatTitle(title);
        return this;
    }

    hookUiRouter(router: UIRouterReact) {
        router.transitionService.onSuccess({}, transition => {
            const state = transition.to();
            const title = _.get(state, "data.title", 'Untitled');
            this.set(title)
        })
    }

    get(): string {
        return document.title;
    }
}
