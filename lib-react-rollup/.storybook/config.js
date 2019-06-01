import { configure } from "@storybook/react";

// Automatically import all files ending in *.stories.tsx under "./stories"
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories()
{
    req.keys().forEach(req);
}

configure(loadStories, module);
