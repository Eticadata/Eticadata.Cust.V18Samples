/// <reference path="./bridge.d.ts" />

declare module Eticadata.Services.Commercial.Labels {
    export interface LabelField {
        Type: number;
        FontBold: boolean;
        GdiCharSet: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontStrikeout: boolean;
        FontUnderline: boolean;
        FontWeight: number;
        FontColor: number;
        Alignment: number;
        Orientation: number;
        Border: number;
        Text: string;
        NumLinePrice: number;
        Barcode: number;
        PositionTop: number;
        PositionLeft: number;
        SizeHeight: number;
        SizeWidth: number;
        LetterSpacing: number;
        FillTextChar: string;
        LineSpacing: number;
        Indent: number;
        Separator: number;
        SeparatorChar: string;
        SeparatorSpacing: number;
        Separator2: number;
        Separator2Char: string;
        Separator2Spacing: number;
        AmountInWords: number;
        ImageData: string;
        IsDate: boolean;
        IsNumeric: boolean;
        Format: string;
        GetPositionTop(): number;
        GetPositionLeft(): number;
        GetSizeWidth(): number;
        GetSizeHeight(): number;
    }
    export interface LabelFieldFunc extends Function {
        prototype: LabelField;
        new (): LabelField;
    }
    var LabelField: LabelFieldFunc;

}
