import * as React from "react";
import Title from "./Title";
import TitleContext from "./TitleContext";

interface PageTitleProps {
    children: string,
    untitledText?: string
}

export default class PageTitle extends React.Component<PageTitleProps> {

    context: Title;

    state: any = {
        get untitledText() {
            return this.props.untitledText
        }
    };

    static contextType = TitleContext;

    updateTitle() {
        this.context.set(this.props.children)
    }

    componentDidUpdate(props) {
        if (this.props.children !== props.children || this.props.untitledText !== props.untitledText)
            this.updateTitle()
    }

    componentDidMount(): void {
        if (!this.context)
            throw "Please wrap outermost component in TitleProvider";
        this.updateTitle()
    }

    componentWillUnmount() {
        this.context.set(this.props.untitledText || 'UntitledText')
    }

    render(): React.ReactNode {
        return null;
    }
}
