import * as React from "react";

import styles from "./Button.less";

interface ButtonProps
{
    label?: string;
}

export class Button extends React.Component<ButtonProps>
{
    public render(): React.ReactNode
    {
        // const buttonClassName = styles["default-button"];
        const buttonClassName = styles.defaultButton;

        if (buttonClassName === undefined)
        {
            window.console.warn(`Couldn't find buttonClassName from CSS Modules.`, styles);
        }

        return (<button className={buttonClassName}>{this.props.label}</button>);
    }
}