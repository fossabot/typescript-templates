import { SampleClass, SampleFunc, SampleStaticFunc, sub } from "../src/index";

test("SampleClass", () =>
{
    const cls = new SampleClass();

    cls.helloWorld();
});

test("SampleFunc", () =>
{
    // @ts-ignore: TS7009: 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.
    const func = new SampleFunc();

    func.helloWorld();
});

test("SampleStaticFunc", () =>
{
    const func = SampleStaticFunc();

    func.helloWorld();
});

test("sub.SampleClass", () =>
{
    const subcls = new sub.SampleClass();

    subcls.helloWorld();
});