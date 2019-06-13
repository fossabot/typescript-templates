import * as React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "../src/Button";

storiesOf("Button", module)
    .add("without any props", () => (
        <Button />
    ))
    .add("with props label", () => (
        <Button label="Click me" />
    ));
