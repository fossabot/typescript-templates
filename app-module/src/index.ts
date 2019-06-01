import { SampleClass, sub } from "@adriangodong/lib-rollup-umd";

const cls = new SampleClass();
cls.helloWorld();

const subCls = new sub.SampleClass();
subCls.helloWorld();
