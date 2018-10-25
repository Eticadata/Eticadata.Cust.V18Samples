/// <reference path="./bridge.d.ts" />

declare module Eticadata.Lib {
    export interface Common {
    }
    export interface CommonFunc extends Function {
        prototype: Common;
        new (): Common;
        EmailAddressCheck(emailAddress: string, multiple: boolean): boolean;
    }
    var Common: CommonFunc;

}
