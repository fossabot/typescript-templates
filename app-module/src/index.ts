import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button as RollupButton } from "@adriangodong/lib-react-rollup";
import { Button as WebpackButton } from "@adriangodong/lib-react-webpack";
import { SampleClass, sub } from "@adriangodong/lib-rollup-umd";

const cls = new SampleClass();
cls.helloWorld();

const subCls = new sub.SampleClass();
subCls.helloWorld();

ReactDOM.render(
    React.createElement(RollupButton, { label: "Hello world from Rollup!" }),
    document.getElementById("reactRollupRoot")
);

ReactDOM.render(
    React.createElement(WebpackButton, { label: "Hello world from Webpack!" }),
    document.getElementById("reactWebpackRoot")
);