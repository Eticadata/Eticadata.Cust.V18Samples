/// <reference path="./bridge.d.ts" />/// <reference path="./eticadata.d.ts" />

declare module Eticadata.Services.Admin.Backstage.EditRibbon {
    export interface TreeRibbonItem {
        Id: number;
        Desc: string;
        Icon: string;
        Inactive: boolean;
        Entity: Object;
        IsTab: boolean;
        IsGroup: boolean;
        IsItem: boolean;
        IsMoved: boolean;
        Items: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem[];
        ItemsDeleted: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem[];
        IndexID: number[];
    }
    export interface TreeRibbonItemFunc extends Function {
        prototype: TreeRibbonItem;
        $constructor: {
            new (): TreeRibbonItem
        };
        constructor$1: {
            new (index: number[], newIndex: number): TreeRibbonItem
        };
    }
    var TreeRibbonItem: TreeRibbonItemFunc;

    export enum EtiRibbonTabGroupType {
        PlaceHolder = 0,
        Button = 1,
        ToggleButton = 2,
        RadioButton = 3,
        Menu = 4,
        ButtonAndMenu = 5,
        Gallery = 6,
        Separator = 7,
        TextBlock = 8,
        Strip = 9
    }

    export interface RibbonGroup extends Eticadata.Entity {
        Id: number;
        Order: number;
        Header: string;
        HeaderTranslated: string;
        CommandName: string;
        Inactive: boolean;
        Items: Eticadata.Services.Admin.Backstage.EditRibbon.RibbonItem[];
    }
    export interface RibbonGroupFunc extends Function {
        prototype: RibbonGroup;
        new (): RibbonGroup;
    }
    var RibbonGroup: RibbonGroupFunc;

    export interface RibbonItem extends Eticadata.Entity {
        Login: string;
        CodGrupo: number;
        Id: number;
        IdGroup: number;
        Order: number;
        Header: string;
        HeaderTranslated: string;
        ImagePath: string;
        Type: number;
        Size: number;
        IdParent: number;
        CommandName: string;
        CommandParameter: string;
        Separator: boolean;
        GenericEntity: boolean;
        Inactive: boolean;
        SubItems: Eticadata.Services.Admin.Backstage.EditRibbon.RibbonItem[];
    }
    export interface RibbonItemFunc extends Function {
        prototype: RibbonItem;
        new (): RibbonItem;
    }
    var RibbonItem: RibbonItemFunc;

    export interface RibbonTab extends Eticadata.Entity {
        Login: string;
        CodGrupo: number;
        Id: number;
        Order: number;
        Header: string;
        HeaderTranslated: string;
        Inactive: boolean;
        Groups: Eticadata.Services.Admin.Backstage.EditRibbon.RibbonGroup[];
    }
    export interface RibbonTabFunc extends Function {
        prototype: RibbonTab;
        new (): RibbonTab;
    }
    var RibbonTab: RibbonTabFunc;

    export interface RibbonInfo {
        Login: string;
        CodGroup: number;
        DescGroup: string;
        Tabs: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem[];
        TabsDeleted: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem[];
        NextIdTab: number;
        NextIdGroup: number;
        NextIdItem: number;
        AddTab(): void;
        AddGroup(activeNode: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem): Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes[];
        AddItem(activeNode: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, isMenu: boolean, type: Eticadata.Services.Admin.Backstage.EditRibbon.EtiRibbonTabGroupType): Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes[];
        CanDeleteItem(activeNode: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem): Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes[];
        DeleteItem(activeNode: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem): Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem;
        GetParent(activeNode: Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem): Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem;
    }
    export interface RibbonInfoFunc extends Function {
        prototype: RibbonInfo;
        new (): RibbonInfo;
    }
    var RibbonInfo: RibbonInfoFunc;

    export interface ValidationCodes {
        Type: Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType;
        Code: string;
        Info: Object[];
    }
    export interface ValidationCodesFunc extends Function {
        prototype: ValidationCodes;
        constructor: {
            new (description: string): ValidationCodes
        };
        constructor$1: {
            new (description: string, type: Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType): ValidationCodes
        };
        constructor$2: {
            new (description: string, type: Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType, info: Object[]): ValidationCodes
        };
    }
    var ValidationCodes: ValidationCodesFunc;

    export enum ValidationMessageType {
        Warning = 0,
        Error = 1,
        Question = 2
    }

}
