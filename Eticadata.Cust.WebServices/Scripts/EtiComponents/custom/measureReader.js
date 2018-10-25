var myHelperMeasureReader = {
    disabledBehavior: true,
    editorAlign: 'right',
    hasPicker: false,

    setFocus: function () {
        $("#idMeasureQtd").focus();
        if (this.pressedKey) {
            setTimeout(function () {
                setCursorPosition(document.getElementById("idMeasureQtd"), 1);
            }, 100);
        }
    },

    setDisplayValue: function (pComponent, pValue, pParams) {
        pComponent.textContent = FormatNumber(pValue, pParams.ncd, true);
    },

    setComponentHelper: function (pValue, pParams, pPressedKey) {
        var self = this;
        var elId = this.parent.id;
        var strRet = "<div style='line-height: 200%; width: 580px;'>";

        this.ncd = pParams.ncd;
        this.nMeasures = pParams.nMeasures;
        strDisableMed2 = (pParams.nMeasures <= 1 ? " data-eti-disabled='Y'" : "");
        strDisableMed3 = (pParams.nMeasures <= 2 ? " data-eti-disabled='Y'" : "");

        this.pressedKey = pPressedKey;
        strRet += "<b><i>" + getMsgTranslated("admin", "Medidas") + "</i></b><br/>";
        strRet += "<div class='etiCustomMeasure'><span class='etiCustomLabel'>" + getMsgTranslated("admin", "Qtd.") + "</span><br/><div id='idMeasureQtd' style='width: 80px;' class='form-control' data-eti-type='number'></div></div>";
        strRet += "<div class='etiCustomMeasure'><span class='etiCustomLabel'>" + getMsgTranslated("admin", "Med. 1") + "</span><br/><div id='idMeasureMed1' style='width: 80px;' class='form-control' data-eti-type='number'></div></div>";
        strRet += "<div class='etiCustomMeasure'><span class='etiCustomLabel'>" + getMsgTranslated("admin", "Med. 2") + "</span><br/><div id='idMeasureMed2' style='width: 80px;' class='form-control' data-eti-type='number'" + strDisableMed2 + " data-eti-zeroisempty='Y'></div></div>";
        strRet += "<div class='etiCustomMeasure'><span class='etiCustomLabel'>" + getMsgTranslated("admin", "Med. 3") + "</span><br/><div id='idMeasureMed3' style='width: 80px;' class='form-control' data-eti-type='number'" + strDisableMed3 + " data-eti-zeroisempty='Y'></div></div>";
        strRet += "<div class='etiCustomMeasure'><span class='etiCustomLabel'>" + getMsgTranslated("admin", "Qtd. Total") + "</span><br/><div id='idMeasureTotal' style='width: 140px; background-color: #eee; text-align: right; white-space: nowrap; overflow: hidden;' class='form-control'></div></div>";
        strRet += "<div style='clear: both;'></div>";

        strRet += "<div class='etiCustomMeasureBox'>";
        strRet += "<div class='etiCustomFormBox'><span class='etiCustomLabel'>" + getMsgTranslated("admin", "Fórmula") + ": <b>" + getMsgTranslated("admin", "Qtd.") + "</b> x </span></div>";
        strRet += "<div class='etiCustomFormBox'><div id='idMeasureFormula' data-eti-enterstop='N' style='width: 388px;' class='form-control' data-eti-type='text' data-eti-maxlength='100'></div></div>";
        strRet += "<div class='etiCustomFormBox'><button id='idMeasureFormulaBtn' data-eti-enterstop='N' style='height: 22px; width: 25px; padding: 0px;'>...</button></div>";
        strRet += "<div style='clear: both;'></div>";
        strRet += "</div>";

        var strButtons = "<a href='javascript:void(0);' id='bntFntOk'><img class='etiCommandPopupBtn' src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Aplicar.32.png'></a>" +
                         "<a href='javascript:hideComponHelper();'><img class='etiCommandPopupBtn' src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Cancelar.32.png'></a>";
        strRet += "<div style='padding: 5px 10px 0px 10px; text-align: right;'>" + strButtons + "</div>";

        strRet += "</div>";
        $("#idDivEtiCustom").html(strRet);

        GridApplyComponents("idDivEtiCustom");

        $("#idMeasureQtd").setProperty("decimalPlaces", pParams.ncd);
        $("#idMeasureMed1").setProperty("decimalPlaces", pParams.ncd);
        $("#idMeasureMed2").setProperty("decimalPlaces", pParams.ncd);
        $("#idMeasureMed3").setProperty("decimalPlaces", pParams.ncd);

        if (pPressedKey) {
            EtiComponentSetValue("idMeasureQtd", parseInt(pPressedKey, 10));
        } else {
            EtiComponentSetValue("idMeasureQtd", pParams.qty);
        }
        EtiComponentSetValue("idMeasureMed1", pParams.m1);
        if (pParams.nMeasures < 2) {
            pParams.m2 = 0;
        }
        if (pParams.nMeasures < 3) {
            pParams.m3 = 0;
        }
        EtiComponentSetValue("idMeasureMed2", pParams.m2);
        EtiComponentSetValue("idMeasureMed3", pParams.m3);
        EtiComponentSetValue("idMeasureFormula", pParams.frm);
        this._setTotal();

        $('#idMeasureQtd').keyup(function () { self._setTotal(); });
        $('#idMeasureMed1').keyup(function () { self._setTotal(); });
        $('#idMeasureMed2').keyup(function () { self._setTotal(); });
        $('#idMeasureMed3').keyup(function () { self._setTotal(); });
        $('#idMeasureFormula').keyup(function () { self._setTotal(); });
        $('#idMeasureFormulaBtn').click(function () { self._showFormulaCalc(); });

        $('#bntFntOk').click(function () {
            var myQty = $("#idMeasureQtd").val();
            var myM1 = $("#idMeasureMed1").val();
            var myM2 = $("#idMeasureMed2").val();
            var myM3 = $("#idMeasureMed3").val();
            var myFormula = $("#idMeasureFormula").val();
            var myTotal = self._GetMeasureFormula(myQty, myM1, myM2, myM3, myFormula);
            if (isNaN(myTotal)) {
                alert(getMsgTranslated("admin", "A fórmula introduzida apresenta erros!"));
            } else {
                var objRet = { qty: myQty, nMeasures: self.nMeasures, ncd: self.ncd, m1: myM1, m2: myM2, m3: myM3, frm: myFormula };
                fireValueCustom(elId, myTotal, objRet);
            }
        });
    },

    _fromFormulaCalc: function (evt) {
        if (evt.key == 'etiMeasureReader') {
            window.removeEventListener('storage', this._fromFormulaCalc, false);
            var valueConfig = JSON.parse(localStorage.getItem('etiMeasureReader'));
            localStorage.removeItem('etiMeasureReader');
            if (valueConfig.action == "close") {
                // Just Close
            } else {
                EtiComponentSetValue("idMeasureQtd", valueConfig.qty);
                EtiComponentSetValue("idMeasureMed1", valueConfig.m1);
                EtiComponentSetValue("idMeasureMed2", valueConfig.m2);
                EtiComponentSetValue("idMeasureMed3", valueConfig.m3);
                EtiComponentSetValue("idMeasureFormula", valueConfig.frm);
                myHelperMeasureReader._setTotal();
            }
        }
    },

    _showFormulaCalc: function () {
        window.addEventListener('storage', this._fromFormulaCalc, false);
        var myQty = $("#idMeasureQtd").val();
        var myM1 = $("#idMeasureMed1").val();
        var myM2 = $("#idMeasureMed2").val();
        var myM3 = $("#idMeasureMed3").val();
        var myFormula = $("#idMeasureFormula").val();
        var params = { qty: myQty, nMeasures: this.nMeasures, ncd: this.ncd, m1: myM1, m2: myM2, m3: myM3, frm: myFormula };
        MyShell().Dialog.ShowHtmlDialog('#/Client/Generic/ModalDialogs/MeasureReader/MeasureReader.html', 545, 370, JSON.stringify(params));
    },

    _setTotal: function () {
        var myQty = $("#idMeasureQtd").val();
        var myM1 = $("#idMeasureMed1").val();
        var myM2 = $("#idMeasureMed2").val();
        var myM3 = $("#idMeasureMed3").val();
        var myFormula = $("#idMeasureFormula").val();
        var myTotal = this._GetMeasureFormula(myQty, myM1, myM2, myM3, myFormula);
        if (isNaN(myTotal)) {
            document.getElementById("idMeasureTotal").textContent = getMsgTranslated("admin", "ERRO") + "!";
        } else {
            document.getElementById("idMeasureTotal").textContent = FormatNumber(myTotal, this.ncd, true);
        }
    },

    _GetMeasureNewVal: function (pVal, pM1, pM2, pM3) {
        var dblSubs = 0;
        if (pVal.substring(0, 2) == "m1" || pVal.substring(0, 2) == "m2" || pVal.substring(0, 2) == "m3") {
            if (pVal.substring(0, 2) == "m1") {
                pVal = pVal.replace("m1", "mm");
                dblSubs = pM1;
            }
            if (pVal.substring(0, 2) == "m2") {
                pVal = pVal.replace("m2", "mm");
                dblSubs = pM2;
            }
            if (pVal.substring(0, 2) == "m3") {
                pVal = pVal.replace("m3", "mm");
                dblSubs = pM3;
            }
            if (dblSubs == 0) {
                if (pVal.indexOf("#") == -1) {
                    return "0";
                } else {
                    var arrSubs = pVal.split("#");
                    return arrSubs[1];
                }
            } else {
                return dblSubs + "";
            }
        } else {
            return pVal;
        }
    },

    _GetMeasureFormula: function (pQty, pM1, pM2, pM3, pFormula) {
        var strMyFormula = (pFormula ? pFormula : "(M1#1)*(m2#1)*(M3#1)");
        strMyFormula = strMyFormula.replace(",", ".").toLowerCase();
        strMyFormula = strMyFormula.replace(/\s+/g, " ");
        while (strMyFormula.indexOf("# ") != -1) {
            strMyFormula = strMyFormula.replace("# ", "#");
        }
        while (strMyFormula.indexOf(" #") != -1) {
            strMyFormula = strMyFormula.replace(" #", "#");
        }

        var strMyParams = strMyFormula.replace(/\(|\)|^|\+|-|\*|\//g, ' ');
        while (strMyParams.indexOf("  ") != -1) {
            strMyParams = strMyParams.replace("  ", " ");
        }

        var strNewVal = "";
        var arrParams = strMyParams.split(" ");
        for (var i = 0; i < arrParams.length; i++) {
            if (arrParams[i].length >= 2) {
                if (arrParams[i].substring(0, 1) == "m") {
                    strNewVal = this._GetMeasureNewVal(arrParams[i], pM1, pM2, pM3);
                    strMyFormula = strMyFormula.replace(arrParams[i], strNewVal);
                }
            }
        }

        var dblRet;
        try {
            dblRet = eval("(" + strMyFormula + ")");
            dblRet = dblRet * pQty;
        } catch (err) {
            dblRet = NaN;
        }

        return dblRet;
    }
}
