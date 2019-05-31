import { SampleClass } from "./SampleClass";

export const SampleFunc = function (this: SampleClass): void
{
    this.helloWorld = function (): void
    {
        window.console.log(`SampleFunc`, `helloWorld`);
    }
};
