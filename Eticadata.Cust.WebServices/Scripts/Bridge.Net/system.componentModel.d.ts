/// <reference path="./bridge.d.ts" />

declare module System.ComponentModel {
    export interface DescriptionAttribute extends Bridge.Attribute {
        text: string;
    }
    export interface DescriptionAttributeFunc extends Function {
        prototype: DescriptionAttribute;
        new (text: string): DescriptionAttribute;
    }
    var DescriptionAttribute: DescriptionAttributeFunc;
}