import * as React from "react";
import {Context} from "react";
import Title from "./Title";

const TitleContext: Context<Title> = React.createContext(new Title({
    appName: "React App"
}))

export default TitleContext;
