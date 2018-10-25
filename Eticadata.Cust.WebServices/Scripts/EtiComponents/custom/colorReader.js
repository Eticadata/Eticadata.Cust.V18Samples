var myHelperColorReader = {
    disabledBehavior: false,
    editorAlign: 'left',
    hasPicker: true,

    setFocus: function () {
    },

    setDisplayValue: function (pComponent, pValue, pParams) {
        pComponent.textContent = "";
        pComponent.style.backgroundColor = this._normColor(pValue);
    },

    _normColor: function (pValue) {
        if (!pValue) {
            return "#FFFFFF";
        } else {
            if (pValue.length > 0 && pValue.substring(0, 1) == "#") {
                if (pValue.length == 9) {
                    return "#" + pValue.substring(3);
                } else {
                    return pValue;
                }
            } else {
                return "#" + pValue
            }
        }
    },

    _cor: function (pValue) {
        return "<div style='background-color: #" + pValue + ";' class='etiCustomColor' onclick='myHelperColorReader._setCor(\"" + pValue + "\");'></div>";
    },

    _setCor: function (pValue) {
        document.getElementById("idColorCustom").style.backgroundColor = "#" + pValue;
        $('#bntFntOk').click();
    },

    setComponentHelper: function (pValue, pParams, pPressedKey) {
        var elId = this.parent.id;
        var strBreak = "<div style='clear: both;'></div>";
        strRet = "<b><i>" + 































("admin", "Paleta de Cores") + "</i></b><br/>";
        strRet += this._cor("FFFFFF") + this._cor("000000") + this._cor("EEECE1") + this._cor("1F497D") + this._cor("4F81BD") + this._cor("C0504D") + this._cor("9BBB59") + this._cor("8064A2") + this._cor("4BACC6") + this._cor("F79646") + strBreak;
        strRet += "<div style='height: 5px;'></div>";
        strRet += this._cor("F2F2F2") + this._cor("808080") + this._cor("DDD9C3") + this._cor("C6D9F1") + this._cor("DCE6F2") + this._cor("F2DCDB") + this._cor("EBF1DE") + this._cor("E6E0EC") + this._cor("DBEEF4") + this._cor("FDEADA") + strBreak;
        strRet += this._cor("D9D9D9") + this._cor("595959") + this._cor("C4BD97") + this._cor("8EB4E3") + this._cor("B9CDE5") + this._cor("E6B9B8") + this._cor("D7E4BD") + this._cor("CCC1DA") + this._cor("B7DEE8") + this._cor("FCD5B5") + strBreak;
        strRet += this._cor("BFBFBF") + this._cor("404040") + this._cor("948A54") + this._cor("558ED5") + this._cor("95B3D7") + this._cor("D99694") + this._cor("C3D69B") + this._cor("B3A2C7") + this._cor("93CDDD") + this._cor("FAC090") + strBreak;
        strRet += this._cor("A6A6A6") + this._cor("262626") + this._cor("4A452A") + this._cor("17375E") + this._cor("376092") + this._cor("953735") + this._cor("77933C") + this._cor("604A7B") + this._cor("31859C") + this._cor("E46C0A") + strBreak;
        strRet += this._cor("808080") + this._cor("0D0D0D") + this._cor("1E1C11") + this._cor("10243F") + this._cor("254061") + this._cor("632523") + this._cor("4F6228") + this._cor("403152") + this._cor("215968") + this._cor("984807") + strBreak;

        strRet += "<br/><b><i>" + getMsgTranslated("admin", "Cores Standard") + "</i></b><br/>";
        strRet += this._cor("C00000") + this._cor("FF0000") + this._cor("FFC000") + this._cor("FFFF00") + this._cor("92D050") + this._cor("00B050") + this._cor("00B0F0") + this._cor("0070C0") + this._cor("002060") + this._cor("7030A0") + strBreak;

        var strButtons = "<a href='javascript:void(0);' id='bntFntOk'><img class='etiCommandPopupBtn' src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Aplicar.32.png'></a>" +
                         "<a href='javascript:hideComponHelper();'><img class='etiCommandPopupBtn' src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Cancelar.32.png'></a>";

        strRet += "<br/><b><i>" + getMsgTranslated("admin", "Cor Actual") + "</i></b><br/>";
        strRet += "<div id='idColorCustom' class='etiCustomColor' style='background-color: " + this._normColor(pValue) + "; width: 236px;'></div>";
        strRet += "<div style='border-bottom: 1px solid grey; height: 1px; margin: 30px 0px 5px 0px;'></div>";
        strRet += "<div style='padding: 0px 10px 0px 10px; text-align: right;'>" + strButtons + "</div>";

        $("#idDivEtiCustom").html(strRet);

        $('#bntFntOk').click(function () {
            var arrColors = document.getElementById("idColorCustom").style.backgroundColor.replace("rgb", "").replace(")", "").replace("(", "").split(",");
            var r = parseInt(arrColors[0], 10);
            var g = parseInt(arrColors[1], 10);
            var b = parseInt(arrColors[2], 10);
            var strColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            fireValueCustom(elId, strColor);
        });
    }
}
