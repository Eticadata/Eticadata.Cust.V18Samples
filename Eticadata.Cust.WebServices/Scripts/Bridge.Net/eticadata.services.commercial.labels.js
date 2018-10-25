(function (globals) {
    "use strict";

    Bridge.define('Eticadata.Services.Commercial.Labels.LabelField', {
        Type: 0,
        FontBold: false,
        GdiCharSet: 0,
        FontItalic: false,
        FontName: null,
        FontSize: 0,
        FontStrikeout: false,
        FontUnderline: false,
        FontWeight: 0,
        FontColor: Bridge.Long(0),
        Alignment: 0,
        Orientation: 0,
        Border: 0,
        Text: null,
        NumLinePrice: 0,
        Barcode: 0,
        PositionTop: 0,
        PositionLeft: 0,
        SizeHeight: 0,
        SizeWidth: 0,
        LetterSpacing: 0,
        FillTextChar: null,
        LineSpacing: 0,
        Indent: 0,
        Separator: 0,
        SeparatorChar: null,
        SeparatorSpacing: 0,
        Separator2: 0,
        Separator2Char: null,
        Separator2Spacing: 0,
        AmountInWords: 0,
        ImageData: null,
        IsDate: false,
        IsNumeric: false,
        Format: null,
        sourceDPI: 96,
        targetDPI: 72,
        GetPositionTop: function () {
            return this.PositionTop * (this.targetDPI / this.sourceDPI);
        },
        GetPositionLeft: function () {
            return this.PositionLeft * (this.targetDPI / this.sourceDPI);
        },
        GetSizeWidth: function () {
            return this.SizeWidth * (this.targetDPI / this.sourceDPI);
        },
        GetSizeHeight: function () {
            return this.SizeHeight * (this.targetDPI / this.sourceDPI);
        }
    });
    
    
    
    Bridge.init();
})(this);
