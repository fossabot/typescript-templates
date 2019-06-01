import * as React from "react";
import "./Button.less";

interface ButtonProps
{
    label?: string;
}

export class Button extends React.Component<ButtonProps>
{
    public render(): React.ReactNode
    {
        return (<button className="default-button">{this.props.label}</button>);
    }
}