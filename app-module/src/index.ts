import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button } from "@adriangodong/lib-react-rollup";
import { SampleClass, sub } from "@adriangodong/lib-rollup-umd";

const cls = new SampleClass();
cls.helloWorld();

const subCls = new sub.SampleClass();
subCls.helloWorld();

ReactDOM.render(
    React.createElement(Button, { label: "Hello world!" }),
    document.getElementById("reactRoot")
);