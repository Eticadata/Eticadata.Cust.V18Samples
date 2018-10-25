/// <reference path="./bridge.d.ts" />

declare module Eticadata {
    export interface ArrayExtensions {
    }
    export interface ArrayExtensionsFunc extends Function {
        prototype: ArrayExtensions;
        new (): ArrayExtensions;
        ToList<T>(T: {prototype: T}, target: T[]): Bridge.IEnumerable$1<T>;
        Add<T>(T: {prototype: T}, array: T[], append: T): void;
        Remove<T>(T: {prototype: T}, array: T[], remove: T): void;
    }
    var ArrayExtensions: ArrayExtensionsFunc;

    export interface Eti {
    }
    export interface EtiFunc extends Function {
        prototype: Eti;
        new (): Eti;
        GetEnumList<T>(T: {prototype: T}): string;
        GetTranslateKey(module: string, window: string, key: string, defText: string): string;
    }
    var Eti: EtiFunc;

    export interface EtiContext {
    }
    export interface EtiContextFunc extends Function {
        prototype: EtiContext;
        new (): EtiContext;
        getSuite(): Eticadata.SuiteInfo;
        getEmpresa(): Eticadata.EmpresaInfo;
        GetWebUri(path: string): Eticadata.Uri;
    }
    var EtiContext: EtiContextFunc;

    export interface EtiVersion {
    }
    export interface EtiVersionFunc extends Function {
        prototype: EtiVersion;
        new (): EtiVersion;
        Version: string;
        Company: string;
        Product: string;
        Copyright: string;
        AssemblyVersion: string;
        MasterVersion: string;
    }
    var EtiVersion: EtiVersionFunc;

    export interface MoedaBaseInfo {
        Abreviatura: string;
    }
    export interface MoedaBaseInfoFunc extends Function {
        prototype: MoedaBaseInfo;
        new (): MoedaBaseInfo;
    }
    var MoedaBaseInfo: MoedaBaseInfoFunc;

    export interface SuiteInfo {
        CodigoICAOPaisReferencia: string;
        DataHotelaria: Date;
        HoraCheckIn: number;
        HoraCheckOut: number;
        DiaLateCheckin: number;
        HoraLateCheckIn: number;
        PermiteCheckOutComContas: boolean;
    }
    export interface SuiteInfoFunc extends Function {
        prototype: SuiteInfo;
        new (): SuiteInfo;
    }
    var SuiteInfo: SuiteInfoFunc;

    export interface Uri {
        AbsoluteUri: string;
        RelativePath: string;
    }
    export interface UriFunc extends Function {
        prototype: Uri;
        new (path: string): Uri;
    }
    var Uri: UriFunc;

    export interface EnumGuid extends Bridge.Attribute {
        Guid: Bridge.Guid;
    }
    export interface EnumGuidFunc extends Function {
        prototype: EnumGuid;
        new (guid: string): EnumGuid;
    }
    var EnumGuid: EnumGuidFunc;

    export interface Entity {
        ChangedProperties: string[];
        IsNew: boolean;
    }
    export interface EntityFunc extends Function {
        prototype: Entity;
        new (): Entity;
    }
    var Entity: EntityFunc;

    export interface EmpresaInfo {
        MoedaBase: Eticadata.MoedaBaseInfo;
    }
    export interface EmpresaInfoFunc extends Function {
        prototype: EmpresaInfo;
        new (): EmpresaInfo;
    }
    var EmpresaInfo: EmpresaInfoFunc;

    export interface DescriptionTranslatorAttribute extends Bridge.Attribute {
        Module: string;
        View: string;
        Key: string;
        FallBack: string;
    }
    export interface DescriptionTranslatorAttributeFunc extends Function {
        prototype: DescriptionTranslatorAttribute;
        $constructor: {
            new (): DescriptionTranslatorAttribute
        };
        constructor$1: {
            new (module: string, view: string, key: string, fallBack: string): DescriptionTranslatorAttribute
        };
    }
    var DescriptionTranslatorAttribute: DescriptionTranslatorAttributeFunc;

}
