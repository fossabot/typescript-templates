import * as React from "react";
import { create } from "react-test-renderer";

import { Button } from "../src/Button";

test("Button", () =>
{
    const tree = create(
        <Button />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test("Button with label", () =>
{
    const tree = create(
        <Button label="label" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});