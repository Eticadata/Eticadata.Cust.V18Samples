var myHelperFontReader = {
    disabledBehavior: true,
    editorAlign: 'left',
    hasPicker: true,

    setFocus: function () {
    },

    setDisplayValue: function (pComponent, pValue, pParams) {
        var sText = "";
        if (pValue) {
            var myValue = GetValued(pValue);
            if (myValue.font) {
                sText += myValue.font;
            } else {
                sText += "Arial";
            }
            if (myValue.size) {
                sText += ", " + myValue.size;
            }
            if (myValue.bold) {
                sText += ", Bold";
            }
            if (myValue.italic) {
                sText += ", Italic";
            }
            if (myValue.strikeout) {
                sText += ", Strikeout";
            }
            if (myValue.underline) {
                sText += ", Underline";
            }
        }
        pComponent.textContent = sText;
    },

    setComponentHelper: function (pValue, pParams, pPressedKey) {
        var arrFonts = "Arial,Arial Black,Arial Narrow,Arial Rounded MT Bold,Avant Garde,Baskerville,Big Caslon,Bodoni MT,Book Antiqua,Brush Script MT,Calibri,Calisto MT,Cambria,Candara,Century Gothic,Consolas,Courier New,Didot,Franklin Gothic Medium,Futura,Garamond,Geneva,Georgia,Gill Sans,Goudy Old Style,Helvetica,Lucida Bright,Lucida Console,Lucida Grande,Lucida Sans Typewriter,Optima,Palatino,Papyrus,Perpetua,Rockwell,Rockwell Extra Bold,Script,Segoe UI,Tahoma,Times New Roman,Trebuchet MS,Verdana".split(",");
        var strFonts = "<select id='idHelperFonts' size=10 style='width: 250px;'>";
        var strSelected = "";
        for (var i = 0; i < arrFonts.length; i++) {
            strSelected = "";
            if (arrFonts[i] == pValue.font) {
                strSelected = " selected";
            }
            strFonts += "<option" + strSelected + ">" + arrFonts[i] + "</option>";
        }
        strFonts += "</select>";

        var arrSizes = "8,9,10,11,12,14,16,18,20,22,24,28".split(",");
        var strSizes = "<select id='idHelperSizes' size=10 style='width: 140px;'>";
        for (var i = 0; i < arrSizes.length; i++) {
            strSelected = "";
            if (arrSizes[i] == pValue.size) {
                strSelected = " selected";
            }
            strSizes += "<option" + strSelected + ">" + arrSizes[i] + "</option>";
        }
        strSizes += "</select>";

        strChecks = "" +
            "<div class='etiCustomCheckCont'><input type='checkbox' id='chkFntBold'" + (pValue.bold ? " checked" : "") + "></div>" +
            "<div class='etiCustomTextCont'><label for='chkFntBold'>Bold</label></div>" +
            "<div class='etiCustomCheckCont'><input type='checkbox' id='chkFntItalic'" + (pValue.italic ? " checked" : "") + "></div>" +
            "<div class='etiCustomTextCont'><label for='chkFntItalic'>Italic</label></div>" +
            "<div class='etiCustomCheckCont'><input type='checkbox' id='chkFntUnderline'" + (pValue.underline ? " checked" : "") + "></div>" +
            "<div class='etiCustomTextCont'><label for='chkFntUnderline'>Underline</label></div>" +
            "<div class='etiCustomCheckCont'><input type='checkbox' id='chkFntStrikeout'" + (pValue.strikeout ? " checked" : "") + "></div>" +
            "<div class='etiCustomTextCont'><label for='chkFntStrikeout'>Strikeout</label></div>" +
            "<div  style='clear: both; border-bottom: 1px solid gray; height: 1px; margin-bottom: 5px'></div>";

        var elId = this.parent.id;
        var strButtons = "<a href='javascript:void(0);' id='bntFntOk'><img class='etiCommandPopupBtn' src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Aplicar.32.png'></a>" +
                         "<a href='javascript:hideComponHelper();'><img class='etiCommandPopupBtn' src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Cancelar.32.png'></a>";
        
        var strRet = "<div style='width: 410px;'>" +
                      "<div style='float: left; padding: 5px; line-height: 200%;'><b><i>" + getMsgTranslated("admin", "Fontes") + "</i></b><br/>" + strFonts + "</div>" +
                      "<div style='float: left; padding: 5px; line-height: 200%;'><b><i>" + getMsgTranslated("admin", "Tamanhos") + "</i></b><br/>" + strSizes + "</div>" +
                      "<div style='clear: both; padding: 5px;'>" + strChecks + "</div>" +
                      "<div style='padding: 0px 10px 0px 10px; text-align: right;'>" + strButtons + "</div>" +
                     "</div>";
        $("#idDivEtiCustom").html(strRet);

        $('#bntFntOk').click(function () {
            var strFont = $("#idHelperFonts").val();
            var strSize = $("#idHelperSizes").val();
            var strBold = ($("#chkFntBold").prop("checked") + "").toLowerCase();
            var strItalic = ($("#chkFntItalic").prop("checked") + "").toLowerCase();
            var strUnderline = ($("#chkFntUnderline").prop("checked") + "").toLowerCase();
            var strStrikeout = ($("#chkFntStrikeout").prop("checked") + "").toLowerCase();

            var strRet = "{";
            strRet += "font: '" + (strFont ? strFont : "Arial") + "', ";
            strRet += "size: " + (strSize ? strSize : "10") + ", ";
            strRet += "bold: " + strBold + ", ";
            strRet += "italic: " + strItalic + ", ";
            strRet += "strikeout: " + strStrikeout + ", ";
            strRet += "underline: " + strUnderline;
            strRet += "}";
            fireValueCustom(elId, GetValued(strRet));
        });
    }
}
