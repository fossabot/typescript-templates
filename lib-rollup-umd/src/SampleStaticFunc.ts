import { SampleClass } from "./SampleClass";

export const SampleStaticFunc = (function (): SampleClass
{
    const that: SampleClass = { helloWorld: () => {} };

    that.helloWorld = function (): void
    {
        window.console.log(`SampleStaticFunc`, `helloWorld`);
    }

    return that;
});
