// Funções para suporte de Componentes Eticadata (Numericos, Combo, Custom, Datas, Horas, Textos e Grids)

// ************************************
// FUNCOES GENERICAS
// ************************************
var myCompWS = {
    hostBase: GetUrlBase(),
    EtiBase: { CopyPos: 0, PressedKey: '', HelperCurtain: '', HelperObj: '', LastFocusId: '' },
    EtiNumber: { DecimalSeparator: '', GroupSeparator: '' },
    EtiDate: { Format: '', Separator: '' },
    EtiCalendar: { SelectedDate: '', TimeType: '', TypeString: false, Calendar: '', Curtain: '', IsOpen: false, IniDate: new Date(), Year: 0, Month: 0, Meses: 0 },
    EtiCombo: { SelValidated: true, Posiciona: false, PosicionaValor: '', SelectedObj: '', HelperCurtain: '', HelperObj: '', IsOpen: false, KeyIncludeDisabled: '{"fieldname":"includedisabled","fieldvalue":1}' },
    EtiErrors: { Errors: [], FieldsWithError: '', ErrObj: '' },
    EtiGrid: { IsScrolling: false, Resizable: {}, ComponentId: '', Interval: '', InIntervalPhase: false, GridsResizeHeight: -1, GridsLoaded: [], GridsSequence: -1, HeadColWidthNums: 25, HeadColWidthSQ: 25, HeadColWidthGrps: 25, HeightCab: 30, HeightFooter: 24, HeightFilter: 25, HeightGroupArea: 24, HeightRowDefault: 24, ScrollBarDim: 17, BackColor1: '', BackColor2: '' }
}

function ApplyEtiComponents() {
    $('div[data-eti-type="number"]').each(function () { if (this.id) { $('#' + this.id).etiNumber(); }});
    $('div[data-eti-type="text"]').each(function () { if (this.id) { $('#' + this.id).etiText(); }});
    $('div[data-eti-type="date"]').each(function () { if (this.id) { $('#' + this.id).etiDate(); }});
    $('div[data-eti-type="time"]').each(function () { if (this.id) { $('#' + this.id).etiTime(); }});
    $('div[data-eti-type="combo"]').each(function () { if (this.id) { $('#' + this.id).etiCombo(); }});
    $('div[data-eti-type="custom"]').each(function () { if (this.id) { $('#' + this.id).etiCustom(); }});
    $('span[data-eti-transmodule]').each(function () { if (!this.initiated) { this.initiated = true; this.innerHTML = GetLabelText(this); }});
}

function EtiComponentSetValue(id, value) {
    $('#' + id).val(value);
    $('#' + id).trigger("update");
    $('#' + id).trigger("change", false);
}

function EtiComponentCellUpdate(id, value) {
    $('#' + id).val(value);
    $('#' + id).trigger("update", true);
}

function EtiComponentSetProperty(id, propName, propValue) {
    $('#' + id).trigger("setProperty", { name: propName.toLowerCase(), value: propValue });
}

function SetUiDisabled(pSelf) {
    if (pSelf.parentGrid) {
        if (!pSelf.parentModeQuery) {
            if (pSelf.disabled) {
                pSelf.element.css({ 'color': '#888' });
            } else {
                pSelf.element.css({ 'color': '#222' });
            }
        } else {
            pSelf.element.css({ 'color': '#222' });
        }
    } else {
        if (pSelf.disabled) {
            pSelf.element.css({ 'background-color': '#eee' });
        } else {
            pSelf.element.css({ 'background-color': '#fff' });
        }
    }
}

function hideAllEtiHelpers() {
    hideComboHelper();
    hideComponHelper();
    closeCalendar();
}

function SetCompTitle(pElem) {
    var intWidth = pElem.width();
    var strText = pElem[0].textContent;
    if (intWidth <= 10 || strText.length * 10 > intWidth) {
        pElem[0].title = strText;
    } else {
        pElem[0].title = "";
    }
}

function GetParentProps(pSelf) {
    var sValue = pSelf.element.data('eti-parentgrid');
    if (sValue) {
        pSelf.parentGrid = sValue;
    } else {
        pSelf.parentGrid = '';
    }
    sValue = pSelf.element.data('eti-parentmodquery');
    if (sValue == "Y") {
        pSelf.parentModeQuery = true;
    } else {
        pSelf.parentModeQuery = false;
    }
}

function UpdateEtiComponents() {
    $('div[data-eti-type="number"]').each(function () { if (this.id) { $('#' + this.id).trigger("update"); }});
    $('div[data-eti-type="text"]').each(function () { if (this.id) { $('#' + this.id).trigger("update"); }});
    $('div[data-eti-type="date"]').each(function () { if (this.id) { $('#' + this.id).trigger("update"); }});
    $('div[data-eti-type="time"]').each(function () { if (this.id) { $('#' + this.id).trigger("update"); }});
    $('div[data-eti-type="combo"]').each(function () { if (this.id) { $('#' + this.id).trigger("update"); }});
    $('div[data-eti-type="custom"]').each(function () { if (this.id) { $('#' + this.id).trigger("update"); }});
}

function ForceUpdateEtiComponents() {
    $('table[data-eti-type="igGrid"]').each(function () {
        if (this.id) {
            IgGridsForceUpdate('#' + this.id);
        }
    });
}

function fireValue(elem, value, text, uiChange) {
    elem.value = value;
    elem.textContent = text;
    if (elem.id && uiChange) {
        $("#" + elem.id).trigger("change", uiChange);
    }
}

function fireValueCustom(elemId, value, params) {
    if (elemId) {
        $("#" + elemId).trigger("updateCustom", value);
        if (params) {
            $("#" + elemId).trigger("updateParams", params);
        }
        $("#" + elemId).trigger("change", true);
    }
    return false;
}

function fireValueDate(objData, pValue, pTimeType, pTypeString, pAllowNulls, pIsCtb, uiChange) {
    if (IsEmptyDate(pValue, pTimeType) && pAllowNulls) {
        fireValue(objData, "", "", uiChange);
    } else {
        var validDate = GetValidDate(pValue, pTimeType, pIsCtb);
        if (validDate == -1) {
            fireValue(objData, "", pValue, uiChange);
        } else {
            if (pIsCtb) {
                fireValue(objData, validDate, pValue, uiChange);
            } else {
                if (pTimeType == "") {
                    if (!pTypeString) {
                        validDate.setHours(validDate.getHours() - validDate.getTimezoneOffset() / 60);
                    }
                }
                if (pTypeString) {
                    var sValue = GetDateFromJS(validDate);
                    fireValue(objData, sValue, pValue, uiChange);
                } else {
                    fireValue(objData, validDate, pValue, uiChange);
                }
            }
        }
    }
}

function fireValueToParent(pEditObj) {
    var pos = pEditObj.elementIn.id.indexOf("_", 7);
    if (pos != -1) {
        $("#" + pEditObj.elementIn.id.substring(7, pos)).trigger("updateCell", { cell: pEditObj.elementIn.id.substring(pos + 1), value: pEditObj.elementIn.value });
    }
}

function fireValueToParentCheck(pEditObj, pNewVal) {
    var pos = pEditObj.elementIn.id.indexOf("_", 7);
    if (pos != -1) {
        $("#" + pEditObj.elementIn.id.substring(7, pos)).trigger("updateCell", { cell: pEditObj.elementIn.id.substring(pos + 1), value: pNewVal });
    }
}

function setPointerHand(elem, value) {
    if (value == true) {
        if (elem.contentEditable != "false") {
            if (!$("#" + elem.id).is(":focus")) {
                elem.contentEditable = false;
                elem.style.cursor = 'pointer';
            }
        }
    } else {
        if (elem.contentEditable == "false") {
            elem.contentEditable = true;
            elem.style.cursor = 'default';
        }
    }
}

function getVarTextToBool(pText) {
    return (pText === "S" || pText === "s" || pText === "Y" || pText === "y" || pText === true);
}

function isGridCell(parentGrid, cellId) {
    if (parentGrid) {
        return (GetEtiGridActLin(cellId) != -1);
    }
    return false;
}

function testImmediateNavKeys(elem, kc, pIsShift, parentGrid) {
    if (!pIsShift) {
        var blnSendToGrid = true;
        if (kc == 39) {
            var iPosIni = getCursorPosition(elem, 0);
            var iPosFim = getCursorPosition(elem, 1);
            if ((iPosFim - iPosIni) != elem.textContent.length || !parentGrid) {
                return true;
            }
        } else if (kc == 37) {
            var iPosIni = getCursorPosition(elem, 0);
            var iPosFim = getCursorPosition(elem, 1);
            if ((iPosFim - iPosIni) != elem.textContent.length || !parentGrid) {
                return true;
            }
        } else if (kc == 36) {
            return true;
        } else if (kc == 35) {
            return true;
        }
        if (parentGrid && blnSendToGrid)
            SendKeyToGrid(parentGrid, kc, false);
    }
    if (kc == 9 || (pIsShift && (kc == 39 || kc == 37 || kc == 36 || kc == 35))) {
        return true;
    } else {
        return false;
    }
}

function testImmediateOperKeys(elem, kc, parentGrid) {
    if (parentGrid && (kc == 45 || kc == 46)) {
        SendKeyToGrid(parentGrid, kc, true);
        return false;
    } else {
        return true;
    }
}

function ajustaLimites(obj, divId) {
    var rect = obj.getBoundingClientRect();
    var intLeft = rect.left;
    var intTop = rect.top + window.pageYOffset;
    if (intLeft <= 0) {
        obj.style.left = '0px';
        intLeft = 0;
    }
    if (intTop <= 0) {
        obj.style.top = '0px';
        intTop = 0;
    }

    var doc = document.documentElement;
    var intScrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var intScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var intDocHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    var intDocWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var intObjHeight = document.getElementById(divId).clientHeight;
    var intObjWidth = document.getElementById(divId).clientWidth;

    var intDifHeight = (intTop + intObjHeight) - (intDocHeight + intScrollTop);
    var intDifWidth = (intLeft + intObjWidth) - (intDocWidth + intScrollLeft);

    if (intDifHeight > 0) {
        var newTop = (intTop - intDifHeight - 20);
        if (newTop >= 0) {
            obj.style.top = newTop + 'px';
        } else {
            obj.style.top = '0px';
        }
    }
    if (intDifWidth > 0) {
        var newLeft = (intLeft - intDifWidth - 20);
        if (newLeft >= 0) {
            obj.style.left = newLeft + 'px';
        } else {
            obj.style.left = '0px';
        }
    }
}

function ReplaceAll(sText, sOrigem, sDest) {
    var sRet = sText;
    if (sOrigem != '') {
        while (sRet.indexOf(sOrigem) >= 0) {
            sRet = sRet.replace(sOrigem, sDest);
        }
    }
    return sRet;
}

function setCursorPosition(elem, curPos) {
    if (elem != null) {
        try {
            var el = document.getElementById(elem.id);
            var range = document.createRange();
            var sel = window.getSelection();
            if (curPos !== undefined) {
                range.setStart(el.childNodes[0], curPos);
                range.collapse(true);
            } else {
                range.setStart(el.childNodes[0], 0);
                range.setEnd(el.childNodes[0], el.childNodes[0].textContent.length);
            }
            sel.removeAllRanges();
            sel.addRange(range);
        }
        catch (err) {
        }
    }
}

function getCursorPosition(elem, tp) {
    if (window.getSelection().rangeCount == 0) {
        return 0;
    } else {
        if (tp == 0) {
            return window.getSelection().getRangeAt(0).startOffset;
        } else {
            return window.getSelection().getRangeAt(0).endOffset;
        }
    }
}

function isEtiCompBlocked(mySelf) {
    if (mySelf.disabled || mySelf.locked) {
        return true;
    } else {
        if (mySelf.parentGrid && document.getElementById(mySelf.parentGrid).disabled) {
            return true;
        } else {
            return false;
        }
    }
}

function isKey(key, isShift, isCtrl, sKey) {
    if (isShift) {
        if (sKey == 'OPERKEYS') {
            return (key == 45 || key == 46);
        } else if (sKey == 'NAVKEYS') {
            return (key == 9 || key == 37 || key == 39 || key == 35 || key == 36);
        }
    }
    if (isCtrl) {
        if (sKey == 'COPYKEYS') {
            return (key == 67 || key == 86 || key == 88); // ctrl+c, ctrl+v, ctrl+x
        }
    }
    if (sKey == 'ESCAPE') {
        return (key == 27);
    }
    if (!isShift) {
        if (sKey == 'NUMKEYS') {
            return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105));
        } else if (sKey == 'BACKSPACE') {
            return (key == 8);
        } else if (sKey == 'DELETE') {
            return (key == 46);
        } else if (sKey == 'MAIS/MENOS') {
            return (key == 107 || key == 109 || key == 187 || key == 189);
        } else if (sKey == 'MENOS') {
            return (key == 109 || key == 189);
        } else if (sKey == 'MAIS') {
            return (key == 107 || key == 187);
        } else if (sKey == 'VIRG/PONTO') {
            return (key == 188 || key == 190 || key == 110);
        } else if (sKey == 'NAVKEYS') {
            return (key == 33 || key == 34 || key == 37 || key == 38 || key == 39 || key == 40 || key == 9 || key == 35 || key == 36);
        } else if (sKey == 'ENTER') {
            return (key == 13);
        }
    }
    if (sKey == 'ALFAKEYS') {
        if ((key == 32) || (key >= 65 && key <= 90) || (key >= 106 && key <= 107) || (key >= 109 && key <= 111) || (key >= 186 && key <= 226)) {
            return true;
        } else {
            if (isShift) {
                return (key >= 48 && key <= 57);
            } else {
                return false;
            }
        }
    }
    return false;
}

function getCharUNC(key) {
    if (key >= 48 && key <= 57) {
        return '' + (key - 48);
    } else if (key >= 96 && key <= 105) {
        return '' + (key - 96);
    } else {
        return '';
    }
}

// ************************************
// FUNCOES LABELS
// ************************************
function LabelSendCommand(pCommName, pId) {
    var pCommParam = document.getElementById(pId).value;
    MyShell().Ribbon.SendCommand('', '?', pCommName, pCommParam);
    return false;
}

function GetLabelText(t) {
    var strRet = getMsgTranslated(t.getAttribute('data-eti-transmodule'), ReplaceAll(t.innerHTML, "\n", "").trim())
    var hiperLinkCommand = t.getAttribute('data-eti-hiperlinkcommand');
    if (hiperLinkCommand) {
        var hiperLinkRef = t.getAttribute('data-eti-hiperlinkref');
        if (hiperLinkRef) {
            strRet = "<a class='LinkLabel' href='javascript:void(0);' onclick='return LabelSendCommand(\"" + hiperLinkCommand + "\", \"" + hiperLinkRef + "\");'>" + strRet + "</a>";
        }
    }

    return strRet;
}

function etiGridApplyConfigCache(cfgGrid, data) {
    var numProps = 0;
    for (var k in data.cfg) {
        numProps++;
    }

    cfgGrid.state.allColsWidth = 0;

    // Backup
    if (cfgGrid.state.backuped !== true) {
        cfgGrid.state.backuped = true
        cfgGrid.state.backup = { fv: cfgGrid.config.filterVisible, f: cfgGrid.config.filterable, hsb: cfgGrid.config.horizontalScrollBar, vsb: cfgGrid.config.verticalScrollBar, srn: cfgGrid.config.showRowNumber, fc: cfgGrid.config.frozenCols };
        for (i = 0; i < cfgGrid.cols.length; i++) {
            cfgGrid.cols[i].orderOri = i;
            cfgGrid.cols[i].tabStopOri = cfgGrid.cols[i].tabStop;
            cfgGrid.cols[i].hiddenOri = cfgGrid.cols[i].hidden;
            cfgGrid.cols[i].widthOri = cfgGrid.cols[i].width;
        }
    }

    // Generics
    if (numProps > 0) {
        cfgGrid.config.filterVisible = false;
        if (cfgGrid.config.filterable) {
            cfgGrid.config.filterVisible = data.cfg.fv;
        }
        cfgGrid.config.horizontalScrollBar = data.cfg.hsb;
        cfgGrid.config.verticalScrollBar = data.cfg.vsb;
        cfgGrid.config.frozenCols = (data.cfg.ncf ? data.cfg.ncf : 0);
        cfgGrid.config.showRowNumber = (data.cfg.srn ? true : false);
    }

    // Config
    if (data.cols.length > 0) {
        var maxOrder = 0;
        for (i = 0; i < cfgGrid.cols.length; i++) {
            for (j = 0; j < data.cols.length; j++) {
                if (cfgGrid.cols[i].key == data.cols[j].k) {
                    cfgGrid.cols[i].order = data.cols[j].o;
                    cfgGrid.cols[i].tabStop = (data.cols[j].t == 1);
                    cfgGrid.cols[i].hidden = (data.cols[j].h == 1);
                    if (cfgGrid.cols[i].order > maxOrder) {
                        maxOrder = cfgGrid.cols[i].order;
                    }
                }
            }
        }
        for (i = 0; i < cfgGrid.cols.length; i++) {
            if (!cfgGrid.cols[i].order) {
                cfgGrid.cols[i].order = maxOrder;
                maxOrder++;
            }
        }
        cfgGrid.cols = Enumerable.From(cfgGrid.cols).OrderBy(function (x) { return x.order }).ToArray();
    }

    // Widths
    if (data.wds.length > 0) {
        if (cfgGrid.config.widthMode === "%") {
            cfgGrid.config.initialWidthModeP = true;
        }
        cfgGrid.config.widthMode = 'px';
        for (i = 0; i < cfgGrid.cols.length; i++) {
            for (j = 0; j < data.wds.length; j++) {
                if (cfgGrid.cols[i].key == data.wds[j].k) {
                    cfgGrid.cols[i].width = data.wds[j].w;
                }
            }
        }
    }
}

// ************************************
// FUNCOES ETIGRID
// ************************************
function getGridCacheId(pConfigId, pConfigType) {
    var ret = "GRD" + pConfigId;
    if (pConfigType) {
        ret += "_" + pConfigType;
    }
    return ret;
}

function etiGridGetUserConfigs(cfgGrid, myCompId) {
    if (cfgGrid.config.filterable == undefined) {
        cfgGrid.config.filterable = true;
    }
    if (cfgGrid.config.filterVisible == undefined) {
        cfgGrid.config.filterVisible = cfgGrid.config.filterable;
    }
    if (cfgGrid.config.horizontalScrollBar == undefined) {
        cfgGrid.config.horizontalScrollBar = false;
    }
    if (cfgGrid.config.verticalScrollBar == undefined) {
        cfgGrid.config.verticalScrollBar = true;
    }
    if (cfgGrid.config.frozenCols == undefined) {
        cfgGrid.config.frozenCols = 0;
    }
    if (cfgGrid.config.showRowNumber == undefined) {
        cfgGrid.config.showRowNumber = (cfgGrid.editing.allow === true);
    }

    if (cfgGrid.config.id) {
        var myGridConfigs = MyShell().Cache.GetItem("EtiGridCfgs");
        if (!myGridConfigs) {
            MyShell().Cache.SetItem("EtiGridCfgs", {});
            myGridConfigs = MyShell().Cache.GetItem("EtiGridCfgs");
        }

        if (myGridConfigs[getGridCacheId(cfgGrid.config.id, cfgGrid.config.type)]) {
            etiGridApplyConfigCache(cfgGrid, myGridConfigs[getGridCacheId(cfgGrid.config.id, cfgGrid.config.type)]);
        } else {
            $.ajax({
                url: myCompWS.hostBase + "api/Data/GetGridUserConfig",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({ id: cfgGrid.config.id, type: cfgGrid.config.type }),
                cache: false,
                async: false,
                success: function (data) {
                    if (data.enumError) {
                        alert("Erro de Desenvolvimento: Valor (" + cfgGrid.config.id + ") Não existente no enumerado EtiEnums.EnumConfigEtiGrid!")
                    } else {
                        etiGridApplyConfigCache(cfgGrid, data);
                        myGridConfigs[getGridCacheId(cfgGrid.config.id, cfgGrid.config.type)] = data;
                    }
                },
                error: function (d) {
                    showErrorAjax(d);
                }
            });
        }
    }
}

function GridApplyComponents(gridId) {
    $('#' + gridId + ' div[data-eti-type="number"]').each(function () { $('#' + this.id).etiNumber(); });
    $('#' + gridId + ' div[data-eti-type="text"]').each(function () { $('#' + this.id).etiText(); });
    $('#' + gridId + ' div[data-eti-type="date"]').each(function () { $('#' + this.id).etiDate(); });
    $('#' + gridId + ' div[data-eti-type="check"]').each(function () { $('#' + this.id).etiCheck(); });
    $('#' + gridId + ' div[data-eti-type="button"]').each(function () { $('#' + this.id).etiButton(); });
    $('#' + gridId + ' div[data-eti-type="image"]').each(function () { $('#' + this.id).etiImage(); });
    $('#' + gridId + ' div[data-eti-type="time"]').each(function () { $('#' + this.id).etiTime(); });
    $('#' + gridId + ' div[data-eti-type="combo"]').each(function () { $('#' + this.id).etiCombo(); });
    $('#' + gridId + ' div[data-eti-type="custom"]').each(function () { $('#' + this.id).etiCustom(); });
}

function getGridCompParamDefValue(pPropName) {
    switch (pPropName.toLowerCase()) {
        case 'disabled': return false;
        case 'locked': return false;
        case 'minvalue': return 0;
        case 'maxvalue': return 999999999;
        case 'allownulls': return false;
        case 'decimalplaces': return 2;
        case 'decimalplacesedit': return 2;
        case 'groupseparator': return true;
        case 'zeroisempty': return false;
        case 'listtype': return "FIX";
        case 'listparam': return "1";
        case 'listparamvalues': return "";
        case 'valuecol': return 1;
        case 'displaycol': return 1;
        case 'validated': return true;
        case 'mask': return "";
        case 'maxlength': return 5;
    }
    return "";
}

function adjustGridColFunctionKey(pMyCol, pLstBindedProps) {
    for (var myKey in pMyCol.editor) {
        if (myKey != "type") {
            if (typeof pMyCol.editor[myKey] == 'function') {
                if (myKey != "click") {
                    pLstBindedProps.push({ key: pMyCol.key, property: myKey, fnc: pMyCol.editor[myKey] });
                    pMyCol.editor[myKey] = getGridCompParamDefValue(myKey);
                }
            } else if (typeof pMyCol.editor[myKey] == 'string' && pMyCol.editor[myKey].indexOf("#") == 0) {
                pLstBindedProps.push({ key: pMyCol.key, property: myKey, keyRef: pMyCol.editor[myKey].replace("#", "") });
                pMyCol.editor[myKey] = getGridCompParamDefValue(myKey);
            }
        }
    }
}

function adjustGridCols(myGrid, pRebindProps) {
    if (!myGrid.cfgGrid.state) {
        myGrid.cfgGrid.state = {};
    }
    myGrid.cfgGrid.state.summary = false;
    if (pRebindProps) {
        myGrid.lstBindedProps = [];
    }
    myGrid.cfgGrid.state.selCheckIndex = -1;
    for (var c = 0; c < myGrid.cfgGrid.cols.length; c++) {
        var myCol = myGrid.cfgGrid.cols[c];
        if (myCol.key == "etiRowSelected") {
            if (myGrid.cfgGrid.editing.multiSelection === true) {
                myGrid.cfgGrid.state.selCheckIndex = c;
            }
        }
        if (myCol.summary) {
            myGrid.cfgGrid.state.summary = true;
        }
        if (myCol.suppressed === true) {
            myCol.hidden = true;
        }
        if (myCol.hidden) {
            myCol.grouped = false;
        }
        if (myCol.width < 35) {
            if (myGrid.cfgGrid.config.widthMode != "%") {
                myCol.width = 35;
            }
        }
        if (myGrid.cfgGrid.editing.allow) {
            if (!myCol.editor) {
                myCol.editor = { type: 'text', disabled: true };
            }
            if (myCol.key == myGrid.cfgGrid.indexerKey) {
                myCol.editor.disabled = true;
            }
            if (myCol.editor.disabled === true || myCol.editor.type == "button" || myCol.editor.type == "image") {
                myCol.tabStop = false;
            }
        }
        if (pRebindProps) {
            adjustGridColFunctionKey(myCol, myGrid.lstBindedProps);
        }
    }
}

function GetEtiGridCondition(row, pTemplate) {
    return eval(pTemplate);
}

function SetEtiCss(mySelf, myCfg, myVisibility) {
    if (!mySelf.normalCss) {
        mySelf.element.css({ color: '#000', 'background-color': '', 'font-family': 'Arial', 'font-size': '10pt', 'font-weight': 'normal', 'font-style': 'normal', 'text-decoration': 'none', visibility: '' });
    }
    if (myCfg.level) {
        mySelf.normalCss = false;
        mySelf.element.css({ color: '#fff', 'background-color': '', 'font-family': 'Arial', 'font-size': '10pt', 'font-weight': 'normal', 'font-style': 'normal', 'text-decoration': 'none', visibility: myVisibility });
    } else if (myCfg.css != "") {
        mySelf.normalCss = false;
        mySelf.element.css(eval(myCfg.css));
    } else {
        mySelf.normalCss = true;
    }
}

function EtiComponentRefreshProps(pId, pBindedProps, pRow, pKey, pDisabled) {
    for (var i = 0; i < pBindedProps.length; i++) {
        if (pBindedProps[i].key == pKey) {
            var myValue
            if (pBindedProps[i].keyRef) {
                myValue = pRow[pBindedProps[i].keyRef];
            } else {
                myValue = pBindedProps[i].fnc(pRow);
            }
            if (pBindedProps[i].property.toLowerCase() == "disabled") {
                $('#' + pId).trigger("setProperty", { name: pBindedProps[i].property.toLowerCase(), value: (myValue || pDisabled) });
            } else {
                $('#' + pId).trigger("setProperty", { name: pBindedProps[i].property.toLowerCase(), value: myValue });
            }
        }
    }
}

function etiGridGetHeight(myGrid) {
    var intHeight = 0;
    intHeight += (myCompWS.EtiGrid.HeightCab);
    if (myGrid.cfgGrid.state.summary) {
        intHeight += (myCompWS.EtiGrid.HeightFooter);
    }
    if ((myGrid.cfgGrid.config.filterable === true) && (myGrid.cfgGrid.config.filterVisible === true)) {
        intHeight += (myCompWS.EtiGrid.HeightFilter);
    }
    if (myGrid.cfgGrid.config.horizontalScrollBar) {
        intHeight += myCompWS.EtiGrid.ScrollBarDim;
    }
    var rowHeight = (myGrid.cfgGrid.config.rowHeight ? myGrid.cfgGrid.config.rowHeight : myCompWS.EtiGrid.HeightRowDefault);
    intHeight += myGrid.cfgGrid.visibleRows * rowHeight;

    return intHeight + 1;
}

function etiGridGetNumRows(myGrid) {
    var intUtilArea = myGrid.element.height();

    intUtilArea -= (myCompWS.EtiGrid.HeightCab + 2);
    if (myGrid.cfgGrid.state.summary) {
        intUtilArea -= (myCompWS.EtiGrid.HeightFooter + 2);
    }
    if ((myGrid.cfgGrid.config.filterable === true) && (myGrid.cfgGrid.config.filterVisible === true)) {
        intUtilArea -= (myCompWS.EtiGrid.HeightFilter + 2);
    }
    if (myGrid.cfgGrid.config.groupable === true) {
        intUtilArea -= (myCompWS.EtiGrid.HeightGroupArea + 2);
    }
    if (myGrid.cfgGrid.config.horizontalScrollBar) {
        intUtilArea -= myCompWS.EtiGrid.ScrollBarDim;
    }

    var rowHeight = (myGrid.cfgGrid.config.rowHeight ? myGrid.cfgGrid.config.rowHeight : myCompWS.EtiGrid.HeightRowDefault);
    var intRows = parseInt(intUtilArea / rowHeight, 10);
    if (intRows <= 2) {
        intRows = 5;
    }

    return intRows;
}

function SetGridUserColors() {
    if (myCompWS.EtiGrid.BackColor1 == "") {
        if (myCompWS.EtiGrid.BackColor1 = MyShell().Environment.Config.UserInfo) {
            myCompWS.EtiGrid.BackColor1 = MyShell().Environment.Config.UserInfo.UserColors.GridBackImpar;
            myCompWS.EtiGrid.BackColor2 = MyShell().Environment.Config.UserInfo.UserColors.GridBackPar;
        } else {
            myCompWS.EtiGrid.BackColor1 = "#FFFFFF";
            myCompWS.EtiGrid.BackColor2 = "#FFFFFF";
        }
    }
}

function etiGridSetOrderConfig(pCfgGrid, pReOrder) {
    pCfgGrid.orderBy = { hasGroups: false, hasOrders: false, numOrders: 0, numGroups: 0 };
    for (var i = 0; i < pCfgGrid.cols.length; i++) {
        pCfgGrid.cols[i].grouped = false;
        if (pCfgGrid.cols[i].hidden !== true) {
            if (pCfgGrid.cols[i].orderBy) {
                if (pCfgGrid.cols[i].orderBy.type == 'asc' || pCfgGrid.cols[i].orderBy.type == 'desc') {
                    pCfgGrid.orderBy.hasOrders = true;
                    pCfgGrid.orderBy.numOrders++;
                }
                if (pCfgGrid.cols[i].orderBy.group === true) {
                    pCfgGrid.orderBy.hasGroups = true;
                    pCfgGrid.orderBy.numGroups++;
                    pCfgGrid.cols[i].grouped = true;
                }
            }
        }
    }
    if (pReOrder) {
        var hasLevelOrder = false;
        for (var l = 1; l <= pCfgGrid.orderBy.numOrders; l++) {
            hasLevelOrder = false;
            for (var i = 0; i < pCfgGrid.cols.length; i++) {
                if (pCfgGrid.cols[i].hidden !== true) {
                    if (pCfgGrid.cols[i].orderBy) {
                        if (pCfgGrid.cols[i].orderBy.type == 'asc' || pCfgGrid.cols[i].orderBy.type == 'desc') {
                            if (pCfgGrid.cols[i].orderBy.level == l) {
                                hasLevelOrder = true;
                            }
                        }
                    }
                }
            }
            if (!hasLevelOrder) {
                var reachedToOne = false;
                while (!reachedToOne) {
                    for (var i = 0; i < pCfgGrid.cols.length; i++) {
                        if (pCfgGrid.cols[i].hidden !== true) {
                            if (pCfgGrid.cols[i].orderBy) {
                                if (pCfgGrid.cols[i].orderBy.type == 'asc' || pCfgGrid.cols[i].orderBy.type == 'desc') {
                                    if (pCfgGrid.cols[i].orderBy.level > l) {
                                        pCfgGrid.cols[i].orderBy.level--;
                                        if (pCfgGrid.cols[i].orderBy.level == l) {
                                            reachedToOne = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function etiGridAllowDropCol(ev) {
    ev.preventDefault();
    return false;
}

function etiGridDragCol(ev, pGridId, pColKey) {
    ev.dataTransfer.setData("text", pGridId + "_" + pColKey);
}

function etiGridDropCol(ev, pGroupArea, pKey) {
    ev.preventDefault();
    var idOrigin = ev.dataTransfer.getData("text");
    var arrDropper = idOrigin.split("_");
    if (arrDropper.length == 2) {
        var strIdGrid = arrDropper[0];
        var strKey = arrDropper[1];
        if (pGroupArea) {
            $("#" + strIdGrid).trigger("toogleGroup", { key: strKey });
        } else {
            $("#" + strIdGrid).trigger("changeColOrder", { key1: strKey, key2: pKey });
        }
    }
    return false;
}

function etiGridOpenGroup(pGridId, pRow, pOpen) {
    $('#' + pGridId).trigger("gridExpandRow", { row: pRow, open: pOpen });
    return false;
}

function etiGridBackColor(intGroupLevel) {
    if (intGroupLevel) {
        if (intGroupLevel == 1) {
            return "#004FAE";
        } else if (intGroupLevel == 2) {
            return "#0060D5";
        } else if (intGroupLevel == 3) {
            return "#006AEC";
        } else if (intGroupLevel == 4) {
            return "#1780FF";
        } else {
            return "#4699FF";
        }
    }
}

function etiOpenSubQuery(myCompId, myRow, mySubQ) {
    $("#" + myCompId).trigger("openSubQuery", { row: myRow, subQ: mySubQ });
}

function etiCloseSubQuery(myCompId, myRow, mySubQ) {
    $("#" + myCompId).trigger("closeSubQuery", { row: myRow, subQ: mySubQ });
}

function etiPushUpSubQuery(myPopupId, myPositionate) {
    var myZIndex = 1000;
    var myTop = -1;
    var myLeft = -1;
    $('.etiGridSubQuery').each(function () {
        if (this.id != myPopupId) {
            if (this.style.zIndex >= myZIndex) {
                myZIndex = this.style.zIndex + 1;
            }
            if (parseInt(this.style.top, 10) >= myTop) {
                myTop = parseInt(this.style.top, 10) + 30;
            }
            if (parseInt(this.style.left, 10) >= myLeft) {
                myLeft = parseInt(this.style.left, 10) + 40;
            }
        }
    });
    document.getElementById(myPopupId).style.zIndex = myZIndex;
    if (myPositionate) {
        if (myTop == -1) {
            document.getElementById(myPopupId).style.top = '100px';
            document.getElementById(myPopupId).style.left = '200px';
        } else {
            document.getElementById(myPopupId).style.top = myTop + 'px';
            document.getElementById(myPopupId).style.left = myLeft + 'px';
        }
    }
}

function etiGridGetHtml(myGrid, cfgGrid, myCompId, pRebindProps) {
    var c = 0, l = 0, sIdCab = "";
    var sResizeAction = " class='etiGridTableThNoRes'";
    etiGridGetUserConfigs(cfgGrid, myCompId);

    adjustGridCols(myGrid, pRebindProps);
    cfgGrid.visibleRows = etiGridGetNumRows(myGrid);

    var myWidthCtrl = 0;
    if (cfgGrid.config.showRowNumber === true) {
        myWidthCtrl = myCompWS.EtiGrid.HeadColWidthNums;
    }
    if (myGrid.cfgGrid.subQueries.has) {
        myWidthCtrl += myGrid.cfgGrid.subQueries.num * myCompWS.EtiGrid.HeadColWidthSQ;
    }
    var myFrozenCols = (cfgGrid.config.frozenCols ? cfgGrid.config.frozenCols : 0);
    cfgGrid.config.frozenCols = myFrozenCols;

    var myWidthInfo = 0;
    var myVisibleCol = 0;

    if (cfgGrid.orderBy.hasGroups) {
        myWidthCtrl += myCompWS.EtiGrid.HeadColWidthGrps * cfgGrid.orderBy.numGroups;
    }

    for (c = 0; c < cfgGrid.cols.length; c++) {
        if (cfgGrid.cols[c].hidden !== true && cfgGrid.cols[c].grouped !== true) {
            myVisibleCol++;
            if (myVisibleCol <= myFrozenCols) {
                myWidthCtrl += cfgGrid.cols[c].width;
            } else {
                myWidthInfo += cfgGrid.cols[c].width;
            }
        }
    }
    myGrid.frozenColsWidth = myWidthCtrl + 1;
    if (cfgGrid.config.widthMode === "%") {
        myWidthInfo = myWidthInfo + "%";
    } else {
        myWidthInfo = myWidthInfo + "px";
    }

    var strGroupArea = "";
    if (cfgGrid.config.groupable) {
        strGroupArea += "<div ondrop='etiGridDropCol(event,true,\"\")' ondragover='return etiGridAllowDropCol(event)' class='etiGridTableGroupArea' style='height: " + myCompWS.EtiGrid.HeightGroupArea + "px;'>";
        if (cfgGrid.orderBy.numGroups == 0) {
            strGroupArea += "<div class='etiGridTableGroup' style='background-color: " + etiGridBackColor(1) + "'>" + getMsgTranslated('Shell', 'Arraste para aqui para agrupar') + "&nbsp;&nbsp;&nbsp;</div>";
        } else {
            var strArrow = "";
            var strRemoveGroup = "";
            for (l = 1; l <= cfgGrid.orderBy.numGroups; l++) {
                for (c = 0; c < cfgGrid.cols.length; c++) {
                    if (cfgGrid.cols[c].grouped === true) {
                        if (cfgGrid.cols[c].orderBy.level == l) {
                            strRemoveGroup = "<a href='.' onclick='return etiGridToogleGroup(\"" + myCompId + "\",\"" + cfgGrid.cols[c].key + "\");'>&nbsp;x&nbsp;</a>";
                            strArrow = "<a href='.' onclick='return etiGridToogleOrder(\"" + myCompId + "\",\"" + cfgGrid.cols[c].key + "\");'>&nbsp;<span id='ArrEtiGrdGroup" + myCompId + "_" + c + "'></span>&nbsp;</a>";
                            strGroupArea += "<div class='etiGridTableGroup' style='background-color: " + etiGridBackColor(l) + "'>" + cfgGrid.cols[c].headerText + "&nbsp;&nbsp;" + strRemoveGroup + strArrow + "&nbsp;</div>";
                        }
                    }
                }
            }
            strGroupArea += "<div class='style: both;'></div>";
        }
        strGroupArea += "</div>";
    }

    var intRowHeight = (cfgGrid.config.rowHeight ? cfgGrid.config.rowHeight : myCompWS.EtiGrid.HeightRowDefault);
    var blnShowFilter = (cfgGrid.config.filterable === true) && (cfgGrid.config.filterVisible === true);
    var strFilterInfo = "";
    var strFilterCtrl = "";
    if (blnShowFilter) {
        strFilterInfo = "<tr style='height: " + myCompWS.EtiGrid.HeightFilter + "px;'>";
        strFilterCtrl = "<tr style='height: " + myCompWS.EtiGrid.HeightFilter + "px;'>";
        if (cfgGrid.config.showRowNumber === true) {
            strFilterCtrl += "<th style='width:" + myCompWS.EtiGrid.HeadColWidthNums + "px'>&nbsp;</th>";
        }
        if (cfgGrid.orderBy.hasGroups) {
            strFilterCtrl += "<td style='background-color: #fff; width: " + (myCompWS.EtiGrid.HeadColWidthGrps * cfgGrid.orderBy.numGroups) + "px;'>&nbsp;</td>";
        }
        if (myGrid.cfgGrid.subQueries.has) {
            strFilterCtrl += "<td style='background-color: #fff; width:" + (myCompWS.EtiGrid.HeadColWidthSQ * myGrid.cfgGrid.subQueries.num) + "px'>&nbsp;</td>";
        }
    }

    var strTableCtrl = "<div id='" + myCompId + "_Ctrl' style='background-color: #f0f0f0; width:" + myWidthCtrl + "px; border: 1px solid #ccc; border-right: 0px; overflow: hidden; overflow-x: hidden; float:left;'>";
    strTableCtrl += "<table id='EtiGrd" + myCompId + "f' class='etiGridTable' style='width: 100%;'><tr style='height: " + myCompWS.EtiGrid.HeightCab + "px;'>";
    if (cfgGrid.config.showRowNumber === true) {
        strTableCtrl += "<th style='width: " + myCompWS.EtiGrid.HeadColWidthNums + "px;'>&nbsp;</th>";
    }
    if (cfgGrid.orderBy.hasGroups) {
        strTableCtrl += "<th style='width: " + (myCompWS.EtiGrid.HeadColWidthGrps * cfgGrid.orderBy.numGroups) + "px;'>&nbsp;</th>";
    }
    if (myGrid.cfgGrid.subQueries.has) {
        strTableCtrl += "<th style='width: " + (myCompWS.EtiGrid.HeadColWidthSQ * myGrid.cfgGrid.subQueries.num) + "px;'>&nbsp;</th>";
    }

    var strTableInfo = "<div id='" + myCompId + "_Cont' style='background-color: #f0f0f0; border: 1px solid #ccc; border-left: 0px; overflow-y: hidden; overflow-x: " + (cfgGrid.config.horizontalScrollBar ? "scroll" : "hidden") + "; float:left;'>";
    strTableInfo += "<table id='EtiGrd" + myCompId + "' class='etiGridTable' style='width: " + myWidthInfo + ";'><tr style='height: " + myCompWS.EtiGrid.HeightCab + "px;'>";

    var myEditor = "";
    var strThCell = "";
    myVisibleCol = 0;
    for (c = 0; c < cfgGrid.cols.length; c++) {
        if (cfgGrid.cols[c].hidden !== true && cfgGrid.cols[c].grouped !== true) {
            myVisibleCol++;
            sIdCab = "EtiGrdTh" + myCompId + "_" + c;
            if (cfgGrid.config.resizable !== false) {
                if (myVisibleCol <= myFrozenCols) {
                    sResizeAction = " class='etiGridTableThRes' onmousedown='etiGridStartResize(\"" + sIdCab + "\", true, this, event);'";
                } else {
                    sResizeAction = " class='etiGridTableThRes' onmousedown='etiGridStartResize(\"" + sIdCab + "\", false, this, event);'";
                }
            }
            strThCell = "<th id='" + sIdCab + "' style='width: " + cfgGrid.cols[c].width + (cfgGrid.config.widthMode === '%' ? '%' : 'px') + ";'>" +
                            "<div draggable='true' ondragstart='etiGridDragCol(event,\"" + myCompId + "\",\"" + cfgGrid.cols[c].key + "\")' ondrop='etiGridDropCol(event,false,\"" + cfgGrid.cols[c].key + "\")' ondragover='return etiGridAllowDropCol(event)' class='etiGridTableThTxt' id='Txt" + sIdCab + "' onclick='etiGridToogleOrder(\"" + sIdCab + "\",\"" + cfgGrid.cols[c].key + "\");' style='" + GetGridTdStyle(cfgGrid.cols[c].align) + "'>" + cfgGrid.cols[c].headerText + "</div>" +
                            "<div" + sResizeAction + "></div>" +
                            "<div class='etiGridTableThArr' id='Arr" + sIdCab + "'></div>" +
                            "<div style='clear: both;'></div>" +
                        "</th>";
            if (myVisibleCol <= myFrozenCols) {
                strTableCtrl += strThCell;
            } else {
                strTableInfo += strThCell;
            }
            if (blnShowFilter) {
                myEditor = GetGridEditor(myCompId, true, false, cfgGrid.cols[c].editor, "", intRowHeight, c, -1);
                if (myVisibleCol <= myFrozenCols) {
                    strFilterCtrl += "<td class='etiGridTableFilter'>" + myEditor + "</td>";
                } else {
                    strFilterInfo += "<td class='etiGridTableFilter'>" + myEditor + "</td>";
                }
            }
        }
    }
    strTableCtrl += "</tr>";
    strTableInfo += "</tr>";

    if (blnShowFilter) {
        strTableInfo += strFilterInfo + "</tr>";
        strTableCtrl += strFilterCtrl + "</tr>";
    }

    var intMargGroup = 1;
    if (cfgGrid.orderBy.hasGroups) {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        if (isFirefox || isEdge) {
            intMargGroup = 0;
        }
    }

    for (l = 0; l < cfgGrid.visibleRows; l++) {
        strTableCtrl += "<tr id='EtiGrdLn" + myCompId + "_" + l + "f' style='height: " + intRowHeight + "px;'>";
        strTableInfo += "<tr id='EtiGrdLn" + myCompId + "_" + l + "' style='height: " + intRowHeight + "px;'>";
        myVisibleCol = 0;

        if (cfgGrid.config.showRowNumber === true) {
            strTableCtrl += "<td class='etiGridTableSC' id='" + myCompId + "SpcColA" + l + "'>&nbsp;</td>";
        }
        if (cfgGrid.orderBy.hasGroups) {
            strTableCtrl += "<td><div id='" + myCompId + "GrpTile" + l + "' class='etiGridGroupCell' style='height:" + (intRowHeight - 1) + "px; margin-top:-" + ((intRowHeight / 2) - intMargGroup) + "px;'></div></td>";
        }
        if (myGrid.cfgGrid.subQueries.has) {
            strTableCtrl += "<td class='etiGridTableSQ' id='" + myCompId + "SbQryColA" + l + "'>&nbsp;</td>";
        }

        for (c = 0; c < cfgGrid.cols.length; c++) {
            if (!cfgGrid.cols[c].hidden && !cfgGrid.cols[c].grouped) {
                myVisibleCol++;
                myEditor = GetGridEditor(myCompId, (cfgGrid.editing.allow === true), (cfgGrid.editing.disabled === true), cfgGrid.cols[c].editor, cfgGrid.cols[c].key, intRowHeight, c, l);
                if (myVisibleCol <= myFrozenCols) {
                    strTableCtrl += "<td>" + myEditor + "</td>";
                } else {
                    strTableInfo += "<td>" + myEditor + "</td>";
                }
            }
        }
        strTableCtrl += "</tr>";
        strTableInfo += "</tr>";
    }

    if (cfgGrid.state.summary) {
        strTableCtrl += "<tr class='etiGridTableFooter' style='height: " + myCompWS.EtiGrid.HeightFooter + "px;'>";
        strTableInfo += "<tr class='etiGridTableFooter' style='height: " + myCompWS.EtiGrid.HeightFooter + "px;'>";
        if (cfgGrid.config.showRowNumber === true) {
            strTableCtrl += "<td>&nbsp;</td>";
        }
        if (cfgGrid.orderBy.hasGroups) {
            strTableCtrl += "<td>&nbsp;</td>";
        }
        if (myGrid.cfgGrid.subQueries.has) {
            strTableCtrl += "<td>&nbsp;</td>";
        }

        myVisibleCol = 0;
        for (c = 0; c < cfgGrid.cols.length; c++) {
            if (cfgGrid.cols[c].hidden !== true && cfgGrid.cols[c].grouped !== true) {
                myVisibleCol++;
                if (cfgGrid.cols[c].summary) {
                    myEditor = "<div style='float: right;'>" + GetGridEditor(myCompId, true, false, cfgGrid.cols[c].editor, "", intRowHeight, c, -2) + "</div><div style='padding: 4px 5px 0px 0px; font-size: 12pt; float: right;'>=</div><div style='clear: both;'></div>";
                } else {
                    myEditor = "&nbsp;";
                }
                if (myVisibleCol <= myFrozenCols) {
                    strTableCtrl += "<td>" + myEditor + "</td>";
                } else {
                    strTableInfo += "<td>" + myEditor + "</td>";
                }
            }
        }
        strTableCtrl += "</tr>";
        strTableInfo += "</tr>";
    }

    strTableCtrl += "</table></div>";
    strTableInfo += "</table><div id='" + myCompId + "_EmpArea' class='etiGridEmptyArea'></div></div>";

    var strTableScrl = "<div id='" + myCompId + "_scroll' style='overflow-x: none; overflow-y: scroll; float: left; border: 1px solid #ccc; border-left: 0px; height: 5px; width: 19px;' onscroll='onGridScroll(this, event);'><div id='" + myCompId + "_scrolled' style='height: 10px; width: 1px;'></div></div>";

    if (cfgGrid.config.showRowNumber === true || cfgGrid.config.frozenCols != 0 || cfgGrid.orderBy.hasGroups || myGrid.cfgGrid.subQueries.has) {
    } else {
        strTableCtrl = "<div id='" + myCompId + "_Ctrl' style='width:1px; border: 0px; border-left: 1px solid #ccc; overflow: hidden; overflow-x: hidden; float:left;'></div>";
    }

    return "<div id='" + myCompId + "_Master' class='etiGridMaster'>" + strGroupArea + strTableCtrl + strTableInfo + strTableScrl + "<div style='clear: both'></div></div>";
}

function removeSelectionVis(pSelf, pDblClick) {
    if (pSelf.parentGrid && !pSelf.parentModeQuery) {
        if (!pSelf.selectorVisible) {
            var iPosIni = getCursorPosition(pSelf.elementIn, 0);
            if (iPosIni != 0) {
                $("#" + pSelf.elementIn.id).removeClass('etiGridFieldOn');
                pSelf.selectorVisible = true;
            }
        }
        if (pDblClick) {
            setCursorPosition(pSelf.elementIn);
        }
    }
}

function GetCheckImage(pValue, pDisabled) {
    var strRet = "";
    if (pValue === true || pValue == 1) {
        strRet = "On";
    } else {
        strRet = "Off";
    }
    if (pDisabled) {
        strRet += "Disabled";
    }
    return "url('" + myCompWS.hostBase + "Imagens/EtiComponents/EtiGrid/Check" + strRet + ".png')";
}

function EtiGridAddRow(gridId, pInsFim) {
    $("#" + gridId).trigger("insertRow", { NoFim: pInsFim, activateCell: true });
}

function EtiGridSelectAll(gridId, pSelect) {
    $("#" + gridId).trigger("selectAllRows", { select: pSelect });
}

function EtiGridRemoveRow(gridId) {
    $("#" + gridId).trigger("removeActiveRow");
}

function EtiGridGetNewRow(pIndexerKey, pIndexerValue, pCols) {
    var ret = {};
    var blnIndexerFnd = false;

    for (var i = 0; i < pCols.length; i++) {
        if (pIndexerKey && pIndexerKey == pCols[i].key) {
            ret[pCols[i].key] = pIndexerValue;
            blnIndexerFnd = true;
        } else {
            if (pCols[i].default) {
                if (typeof pCols[i].default == 'function') {
                    ret[pCols[i].key] = pCols[i].default();
                } else {
                    ret[pCols[i].key] = pCols[i].default;
                }
            } else {
                if (pCols[i].editor) {
                    if (pCols[i].editor.type == "number") {
                        ret[pCols[i].key] = 0;
                    } else if (pCols[i].editor.type == "check") {
                        ret[pCols[i].key] = false;
                    } else if (pCols[i].editor.type == "date") {
                        if (pCols[i].editor.allowNulls === true) {
                            ret[pCols[i].key] = "";
                        } else {
                            var newDate = new Date();
                            newDate.setHours(0);
                            newDate.setMinutes(0);
                            newDate.setSeconds(0);
                            newDate.setMilliseconds(0);
                            ret[pCols[i].key] = newDate;
                        }
                    } else if (pCols[i].editor.type == "time") {
                        if (pCols[i].editor.allowNulls === true) {
                            ret[pCols[i].key] = "";
                        } else {
                            ret[pCols[i].key] = "00:00";
                        }
                    } else {
                        ret[pCols[i].key] = "";
                    }
                } else {
                    ret[pCols[i].key] = "";
                }
            }
        }
    }
    if (!blnIndexerFnd && pIndexerKey) {
        ret[pIndexerKey] = pIndexerValue;
    }

    return ret;
}

function etiGridStartResize(pId, pFrozenCols, t, e) {
    myCompWS.EtiGrid.Resizable.StartX = e.pageX;
    myCompWS.EtiGrid.Resizable.ColId = pId;
    myCompWS.EtiGrid.Resizable.FrozenCols = pFrozenCols;
    if (pFrozenCols) {
        var strId = pId.split("_")[0].replace("EtiGrdTh", "EtiGrd");
        myCompWS.EtiGrid.Resizable.EtiGridId = strId + "f";
        myCompWS.EtiGrid.Resizable.EtiGridCtrl = strId.replace("EtiGrd", "") + "_Ctrl";
        myCompWS.EtiGrid.Resizable.EtiGridCont = strId.replace("EtiGrd", "") + "_Cont";
        myCompWS.EtiGrid.Resizable.startGridWidthCtrl = $("#" + myCompWS.EtiGrid.Resizable.EtiGridCtrl).width();
        myCompWS.EtiGrid.Resizable.startGridWidthCont = $("#" + myCompWS.EtiGrid.Resizable.EtiGridCont).width();
    } else {
        myCompWS.EtiGrid.Resizable.EtiGridId = pId.split("_")[0].replace("EtiGrdTh", "EtiGrd");
    }
    myCompWS.EtiGrid.Resizable.startColWidth = $("#" + pId).width();
    myCompWS.EtiGrid.Resizable.startGridWidth = $("#" + myCompWS.EtiGrid.Resizable.EtiGridId).width();
    $(t).css({ 'cursor': 'col-resize' });

    document.documentElement.addEventListener('mousemove', etiGridDoDrag, false);
    document.documentElement.addEventListener('mouseup', etiGridStopDrag, false);
}

function etiGridDoDrag(e) {
    var intDif = (e.pageX - myCompWS.EtiGrid.Resizable.StartX);
    var intNewColWidth = myCompWS.EtiGrid.Resizable.startColWidth + intDif;
    var intNewGrdCtrlWidth = 0;
    var intNewGrdContWidth = 1000;
    if (myCompWS.EtiGrid.Resizable.FrozenCols) {
        intNewGrdCtrlWidth = myCompWS.EtiGrid.Resizable.startGridWidthCtrl + intDif;
        intNewGrdContWidth = myCompWS.EtiGrid.Resizable.startGridWidthCont - intDif;
    }

    if (intNewColWidth >= 35 && intNewGrdContWidth >= 100) {
        var intNewGridWidth = myCompWS.EtiGrid.Resizable.startGridWidth + intDif;
        $("#" + myCompWS.EtiGrid.Resizable.EtiGridId).width(intNewGridWidth);
        $("#" + myCompWS.EtiGrid.Resizable.ColId).width(intNewColWidth);

        if (myCompWS.EtiGrid.Resizable.FrozenCols) {
            $("#" + myCompWS.EtiGrid.Resizable.EtiGridCtrl).width(intNewGrdCtrlWidth);
            $("#" + myCompWS.EtiGrid.Resizable.EtiGridCont).width(intNewGrdContWidth);
        }
    }
}

function etiGridSetUserConfig(pCfgGrid) {
    if (pCfgGrid.config.id) {
        var myConfig = "";
        for (var i = 0; i < pCfgGrid.cols.length; i++) {
            if (i > 0)
                myConfig += ",";
            myConfig += '{"k":"' + pCfgGrid.cols[i].key + '","o":' + pCfgGrid.cols[i].order + ',"h":' + (pCfgGrid.cols[i].hidden ? "1" : "0") + ',"t":' + (pCfgGrid.cols[i].tabStop ? "1" : "0") + '}';
        }

        var blnFilterVisible = (pCfgGrid.config.filterVisible ? true : false);
        var blnHorizontalScrollBar = (pCfgGrid.config.horizontalScrollBar ? true : false);
        var blnVerticalScrollBar = (pCfgGrid.config.verticalScrollBar ? true : false);
        var blnShowRowNumber = (pCfgGrid.config.showRowNumber ? true : false);
        var intNumColsFrozen = (pCfgGrid.config.frozenCols ? pCfgGrid.config.frozenCols : 0);
        var strType = (pCfgGrid.config.type ? pCfgGrid.config.type : "");

        etiGridRemoveCfgCache(pCfgGrid.config.id, pCfgGrid.config.type);

        $.ajax({
            url: GetUrlBase() + "api/Data/SetGridUserConfig",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ id: pCfgGrid.config.id, type: strType, config: myConfig, defCols: true, filterVisible: blnFilterVisible, horizontalScrollBar: blnHorizontalScrollBar, verticalScrollBar: blnVerticalScrollBar, showRowNumber: blnShowRowNumber, numColsFrozen: intNumColsFrozen }),
            cache: false,
            success: function (data) {
                //
            },
            error: function (d) {
                //
            }
        });
    }
}

function etiGridRemoveCfgCache(pConfigId, pConfigType) {
    if (pConfigId) {
        var myGridConfigs = MyShell().Cache.GetItem("EtiGridCfgs");
        if (myGridConfigs) {
            if (myGridConfigs[getGridCacheId(pConfigId, pConfigType)]) {
                myGridConfigs[getGridCacheId(pConfigId, pConfigType)] = "";
            }
        }
    }
}

function etiGridSaveColWidths(myConfig, pCols) {
    var myConfigId = myConfig.id;
    var myConfigType = myConfig.type;
    var myColsPrefix = myCompWS.EtiGrid.Resizable.ColId.split("_")[0] + "_";
    var strConfig = "";
    var intWidth = 0;
    var intNumCol = 0, i, intIndex;
    $('[id^="' + myColsPrefix + '"]').each(
        function () {
            intWidth = $(this).width() + 1;
            intNumCol = parseInt(this.id.replace(myColsPrefix, ""), 10);

            intIndex = 0;
            for (i = 0; i < pCols.length; i++) {
                if (!pCols[i].hidden) {
                    if (intIndex == intNumCol) {
                        if (strConfig.length > 2) {
                            strConfig += ',';
                        }
                        strConfig += '{\"k\":"' + pCols[i].key + '",\"w\":' + intWidth + '}';
                    }
                }
                intIndex++;
            }
        }
    );

    if (myConfigId) {
        var blnFilterVisible = (myConfig.filterVisible ? true : false);
        var blnHorizontalScrollBar = (myConfig.horizontalScrollBar ? true : false);
        var blnVerticalScrollBar = (myConfig.verticalScrollBar ? true : false);
        var blnShowRowNumber = (myConfig.showRowNumber ? true : false);
        var intNumColsFrozen = (myConfig.frozenCols ? myConfig.frozenCols : 0);

        etiGridRemoveCfgCache(myConfigId, myConfigType);

        $.ajax({
            url: myCompWS.hostBase + "api/Data/SetGridUserConfig",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ id: myConfigId, type: myConfigType, config: strConfig, defCols: false, filterVisible: blnFilterVisible, horizontalScrollBar: blnHorizontalScrollBar, verticalScrollBar: blnVerticalScrollBar, showRowNumber: blnShowRowNumber, numColsFrozen: intNumColsFrozen }),
            cache: false,
            success: function (data) { },
            error: function (d) { }
        });
    }
}

function etiGridStopDrag(e) {
    document.documentElement.removeEventListener('mousemove', etiGridDoDrag, false);
    document.documentElement.removeEventListener('mouseup', etiGridStopDrag, false);

    var myGridId = myCompWS.EtiGrid.Resizable.ColId.split("_")[0].replace("EtiGrdTh", "");
    $("#" + myGridId).trigger("saveCols");
}

function etiGridToogleOrder(pId, pKey) {
    $("#" + pId).trigger("toogleOrder", pKey);
    return false;
}

function etiGridToogleGroup(pId, pKey) {
    $("#" + pId).trigger("toogleGroup", { key: pKey });
    return false;
}

function etiGridCheckSelected(pSelf, pRow, pValue) {
    if (pSelf.cfgGrid.editing.multiSelection === true && pSelf.cfgGrid.state.selCheckIndex != -1) {
        var intLimA = pRow;
        var intLimB = pRow;
        if (pRow == -1) {
            intLimA = 0;
            intLimB = pSelf.cfgGrid.visibleRows - 1;
        }
        for (var i = intLimA; i <= intLimB; i++) {
            $("#idGrd__" + pSelf.elementIn.id + "_" + pSelf.cfgGrid.state.selCheckIndex + "_" + i).trigger("setValue", pValue);
        }
    }
}

function etiGridRefreshScrollBar(pSelf, pCompId, pNumRows, pVisibleRows, pFrozenColsWidth, pShowVertScrollBar, pAllowAddRows) {
    var numRows = pNumRows;
    if (pAllowAddRows) {
        numRows++;
    }
    var intHeight = $("#" + pCompId + "_Cont").height();
    if (intHeight <= 0) {
        intHeight = etiGridGetHeight(pSelf);
    }
    if (pFrozenColsWidth != 0) {
        $("#" + pCompId + "_Ctrl").height(intHeight);
    }
    if (numRows > pVisibleRows && pShowVertScrollBar) {
        $("#" + pCompId + "_scroll").show();
        $("#" + pCompId + "_scroll").height(intHeight);
        $("#" + pCompId + "_scrolled").height(intHeight * numRows / pVisibleRows);
        $("#" + pCompId + "_Cont").css({ width: 'calc(100% - ' + (pFrozenColsWidth + 20) + 'px)' });
    } else {
        $("#" + pCompId + "_scroll").hide();
        if (pFrozenColsWidth != 0) {
            $("#" + pCompId + "_Cont").css({ width: 'calc(100% - ' + (pFrozenColsWidth) + 'px)' });
        } else {
            $("#" + pCompId + "_Cont").css({ width: '100%' });
        }
    }
}

function getEtiGridDefaultsMaxMin(pType, pMax, pRealObj) {
    if (pRealObj) {
        if (pMax) {
            if (pType == "number") {
                return 999999999;
            } else if (pType == "check") {
                return false;
            } else if (pType == "date") {
                return "2200-01-01T00:00:00.000Z";
            } else if (pType == "time") {
                return "99:99";
            } else {
                return "zzzzzzz";
            }
        } else {
            if (pType == "number") {
                return 0;
            } else if (pType == "check") {
                return false;
            } else if (pType == "date") {
                return "1990-01-01T00:00:00.000Z";
            } else if (pType == "time") {
                return "00:00";
            } else {
                return "";
            }
        }
    } else {
        if (pType == "number") {
            return "0";
        } else if (pType == "check") {
            return "false";
        } else if (pType == "date") {
            return "'1990-01-01T00:00:00.000Z'";
        } else if (pType == "time") {
            return "'00:00'";
        } else {
            return "''";
        }
    }
}

function SetDatesFilterVals(p) {
    if (p.fTp == "D1") {
        var dt = new Date();
        p.valA = GetDateFromJS(dt);
        p.valA = p.valA.substring(0, 10) + "T00:00:00";
        p.valB = p.valA.substring(0, 10) + "T23:59:59";
    } else if (p.fTp == "D2") {
        var dt = new Date();
        dt.setDate(dt.getDate() - 1);
        p.valA = GetDateFromJS(dt);
        p.valA = p.valA.substring(0, 10) + "T00:00:00";
        p.valB = p.valA.substring(0, 10) + "T23:59:59";
    } else if (p.fTp == "D3") {
        var dt = new Date();
        p.valA = GetDateFromJS(dt);
        p.valA = p.valA.substring(0, 8) + "00T00:00:00";
        p.valB = p.valA.substring(0, 8) + "99T23:59:59";
    } else if (p.fTp == "D4") {
        var dt = new Date();
        dt.setDate(0);
        p.valA = GetDateFromJS(dt);
        p.valA = p.valA.substring(0, 8) + "00T00:00:00";
        p.valB = p.valA.substring(0, 8) + "99T23:59:59";
    } else if (p.fTp == "D5") {
        var dt = new Date();
        p.valA = GetDateFromJS(dt);
        p.valA = p.valA.substring(0, 5) + "00-00T00:00:00";
        p.valB = p.valA.substring(0, 5) + "99-99T23:59:59";
    } else {
        if (p.fVal == "") {
            p.valA = "1972/03/03T23:10:10";
        } else {
            p.valA = GetDateFromJS(new Date(p.fVal));
            if (p.tt == "") {
                p.valA = p.valA.substring(0, 10) + "T00:00:00";
            } else {
                p.valA = p.valA.substring(0, 19);
            }
        }
    }
}

function setEtiGridFiltOrdData(t, pRefreshGrpHeaders, pRefreshSums) {
    var strFilter = "";
    var strTFilter = "";
    for (var i = 0; i < t.filters.length; i++) {
        if (t.filters[i].tp != "G1") {
            var strEditorType = '';
            var strTimeType = '';
            var strKey = t.filters[i].key;
            for (var j = 0; j < t.cfgGrid.cols.length; j++) {
                if (t.cfgGrid.cols[j].key == strKey) {
                    strEditorType = 'text';
                    if (t.cfgGrid.cols[j].editor) {
                        strEditorType = t.cfgGrid.cols[j].editor.type;
                        if (strEditorType == "date") {
                            if (t.cfgGrid.cols[j].editor.timeType) {
                                strTimeType = t.cfgGrid.cols[j].editor.timeType;
                            }
                        }
                        if (strEditorType == "combo") {
                            strEditorType = "text";
                            if (t.cfgGrid.rows.length != 0) {
                                if ((typeof t.cfgGrid.rows[0][t.cfgGrid.cols[j].key]) == "number") {
                                    strEditorType = "number";
                                }
                            }
                        }
                    }
                }
            }

            strTFilter = "";
            if (strEditorType == 'number') {
                var strVal = t.filters[i].val;
                if (strVal != "") {
                    switch (t.filters[i].tp) {
                        case 'G2': strTFilter = 'x.' + strKey + '==' + strVal; break;
                        case 'G3': strTFilter = 'x.' + strKey + '!=' + strVal; break;
                        case 'N1': strTFilter = 'x.' + strKey + '>' + strVal; break;
                        case 'N2': strTFilter = 'x.' + strKey + '>=' + strVal; break;
                        case 'N3': strTFilter = 'x.' + strKey + '<' + strVal; break;
                        case 'N4': strTFilter = 'x.' + strKey + '<=' + strVal; break;
                    }
                }

            } else if (strEditorType == 'check') {
                var strVal = t.filters[i].val.toLowerCase();
                if (strVal != "true") {
                    strVal = "false";
                }
                switch (t.filters[i].tp) {
                    case 'G2': strTFilter = 'x.' + strKey + '===' + strVal; break;
                    case 'G3': strTFilter = 'x.' + strKey + '!==' + strVal; break;
                }

            } else if (strEditorType == 'date') {
                var p = { valA: '', valB: '', fVal: t.filters[i].val, fTp: t.filters[i].tp, tt: strTimeType };
                SetDatesFilterVals(p);
                switch (t.filters[i].tp) {
                    case 'G2': strTFilter = 'x.' + strKey + '=="' + p.valA + '"'; break;
                    case 'G3': strTFilter = 'x.' + strKey + '!="' + p.valA + '"'; break;
                    case 'N1': strTFilter = 'x.' + strKey + '>"' + p.valA + '"'; break;
                    case 'N2': strTFilter = 'x.' + strKey + '>="' + p.valA + '"'; break;
                    case 'N3': strTFilter = 'x.' + strKey + '<"' + p.valA + '"'; break;
                    case 'N4': strTFilter = 'x.' + strKey + '<="' + p.valA + '"'; break;
                    case 'D1': strTFilter = 'x.' + strKey + '>="' + p.valA + '" && x.' + strKey + '<="' + p.valB + '"'; break;
                    case 'D2': strTFilter = 'x.' + strKey + '>="' + p.valA + '" && x.' + strKey + '<="' + p.valB + '"'; break;
                    case 'D3': strTFilter = 'x.' + strKey + '>="' + p.valA + '" && x.' + strKey + '<="' + p.valB + '"'; break;
                    case 'D4': strTFilter = 'x.' + strKey + '>="' + p.valA + '" && x.' + strKey + '<="' + p.valB + '"'; break;
                    case 'D5': strTFilter = 'x.' + strKey + '>="' + p.valA + '" && x.' + strKey + '<="' + p.valB + '"'; break;
                }

            } else {
                var strVal = t.filters[i].val.toUpperCase();
                switch (t.filters[i].tp) {
                    case 'G2': strTFilter = 'x.' + strKey + '.toUpperCase()=="' + strVal + '"'; break;
                    case 'G3': strTFilter = 'x.' + strKey + '.toUpperCase()!="' + strVal + '"'; break;
                    case 'N1': strTFilter = 'x.' + strKey + '.toUpperCase()>"' + strVal + '"'; break;
                    case 'N2': strTFilter = 'x.' + strKey + '.toUpperCase()>="' + strVal + '"'; break;
                    case 'N3': strTFilter = 'x.' + strKey + '.toUpperCase()<"' + strVal + '"'; break;
                    case 'N4': strTFilter = 'x.' + strKey + '.toUpperCase()<="' + strVal + '"'; break;
                    case 'S1': strTFilter = 'x.' + strKey + '.toUpperCase().indexOf("' + strVal + '")==0'; break;
                    case 'S2': strTFilter = 'x.' + strKey + '.toUpperCase().indexOf("' + strVal + '")!=-1'; break;
                    case 'S3': strTFilter = 'x.' + strKey + '.toUpperCase().indexOf("' + strVal + '")==-1'; break;
                }

            }

            if (strTFilter != "") {
                if (strFilter == "") {
                    strFilter = strTFilter;
                } else {
                    strFilter += " && " + strTFilter;
                }
            }
        }
    }

    t.visibleData = t.cfgGrid.rows;
    if (strFilter == "" && !t.cfgGrid.orderBy.hasOrders) {
        t.naturalData = true;
    } else {
        t.naturalData = false;
        var strFilterAndOrder = "Enumerable.From(t.cfgGrid.rows)";
        if (!t.cfgGrid.orderBy.hasOrders) {
            if (strFilter != "") {
                strFilterAndOrder += ".Where(function (x) { return (" + strFilter + ") })";
            }
        } else {
            if (t.cfgGrid.orderBy.hasGroups) {
                if (pRefreshGrpHeaders) {
                    var myRRows = Enumerable.From(t.cfgGrid.rows).Where(function (x) { return !!x.etiGroupLevel }).ToArray();
                    for (var k = 0; k < myRRows.length; k++) {
                        for (var i = 0; i < t.cfgGrid.cols.length; i++) {
                            if (t.cfgGrid.cols[i].orderBy) {
                                if (t.cfgGrid.cols[i].orderBy.type == 'asc' || t.cfgGrid.cols[i].orderBy.type == 'desc') {
                                    if (t.cfgGrid.cols[i].orderBy.level > myRRows[k].etiGroupLevel) {
                                        if (t.cfgGrid.cols[i].orderBy.type == 'desc') {
                                            myRRows[k][t.cfgGrid.cols[i].key] = getEtiGridDefaultsMaxMin(t.cfgGrid.cols[i].editor.type, true, true);
                                        } else {
                                            myRRows[k][t.cfgGrid.cols[i].key] = getEtiGridDefaultsMaxMin(t.cfgGrid.cols[i].editor.type, false, true);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (strFilter != "") {
                    strFilter += " && ";
                }
                strFilter += "!x.etiGroupHidden";
            }
            if (strFilter != "") {
                strFilterAndOrder += ".Where(function (x) { return (" + strFilter + ") })";
            }
        }
        if (t.cfgGrid.orderBy.hasOrders) {
            for (var l = 1; l <= t.cfgGrid.orderBy.numOrders; l++) {
                for (var i = 0; i < t.cfgGrid.cols.length; i++) {
                    if (t.cfgGrid.cols[i].hidden !== true) {
                        if (t.cfgGrid.cols[i].orderBy) {
                            if (t.cfgGrid.cols[i].orderBy.type == 'asc' || t.cfgGrid.cols[i].orderBy.type == 'desc') {
                                if (l == t.cfgGrid.cols[i].orderBy.level) {
                                    if (l == 1) {
                                        if (t.cfgGrid.cols[i].orderBy.type == 'asc') {
                                            strFilterAndOrder += ".OrderBy(function (x) { return x." + t.cfgGrid.cols[i].key + " })";
                                        } else {
                                            strFilterAndOrder += ".OrderByDescending(function (x) { return x." + t.cfgGrid.cols[i].key + " })";
                                        }
                                    } else {
                                        if (t.cfgGrid.cols[i].orderBy.type == 'asc') {
                                            strFilterAndOrder += ".ThenBy(function (x) { return x." + t.cfgGrid.cols[i].key + " })";
                                        } else {
                                            strFilterAndOrder += ".ThenByDescending(function (x) { return x." + t.cfgGrid.cols[i].key + " })";
                                        }
                                    }
                                    if (t.cfgGrid.orderBy.hasGroups) {
                                        if (l == t.cfgGrid.orderBy.numGroups) {
                                            strFilterAndOrder += ".ThenBy(function (x) { return (x.etiGroupLevel ? x.etiGroupLevel : 90) })";
                                            blnGroupoLevelMark = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        t.visibleData = eval(strFilterAndOrder + ".ToArray()");
    }

    if (t.cfgGrid.state.summary && pRefreshSums) {
        for (var j = 0; j < t.cfgGrid.cols.length; j++) {
            if (t.cfgGrid.cols[j].summary && !t.cfgGrid.cols[j].hidden && !t.cfgGrid.cols[j].grouped) {
                var strKey = t.cfgGrid.cols[j].key;
                var dblTotal = 0;
                for (var i = 0; i < t.visibleData.length; i++) {
                    dblTotal += t.visibleData[i][strKey];
                }
                EtiComponentCellUpdate("idGrdSum__" + t.elementIn.id + "_" + j, dblTotal);
            }
        }
    }
}

function showConfigEtiGridEventHandler(evt) {
    if (evt.key == 'etiGridConfig') {
        window.removeEventListener('storage', showConfigEtiGridEventHandler, false);
        var valueConfig = JSON.parse(localStorage.getItem('etiGridConfig'));
        localStorage.removeItem('etiGridConfig');
        if (valueConfig.action == "close") {
            // Just Close
        } else if (valueConfig.action == "remove") {
            etiGridRemoveCfgCache(valueConfig.cfgId, valueConfig.cfgType);
            $("#" + valueConfig.id).trigger("refreshConfig", { revomeCfg: true, newGrid: true, rebindProps: false });
        } else {
            etiGridRemoveCfgCache(valueConfig.cfgId, valueConfig.cfgType);
            $("#" + valueConfig.id).trigger("refreshConfig", { revomeCfg: false, newGrid: true, rebindProps: false });
        }
    }
}

function etiGridShowConfig(pCompId) {
    $("#" + pCompId).trigger("showConfig");
}

function setGridFilterSelectorCell(pCol, pFilterType) {
    $("#" + myCompWS.EtiGrid.ComponentId).trigger("setFilter", "IMG|" + pCol + "|" + pFilterType);
    hideComponHelper();
}

function etiGridComplFilter(pCompId, pCols, pFilters, pValueBag) {
    if (pValueBag) {
        var arrBags = pValueBag.split("|")

        if (arrBags.length == 3) {
            if (arrBags[0] == "IMG") {
                var blnFound = false;
                var intCol = parseInt(arrBags[1], 10);
                var strType = arrBags[2];
                var strKey = pCols[intCol].key;
                for (var i = 0; i < pFilters.length; i++) {
                    if (pFilters[i].key == strKey) {
                        blnFound = true;
                        pFilters[i].tp = strType;
                        if (strType == "G1") {
                            pFilters[i].val = "";
                        }
                    }
                }
                if (!blnFound) {
                    pFilters.push({ key: strKey, tp: strType, val: '' });
                }

                $("#ImgFltidGrdFlt__" + pCompId + "_" + intCol).attr("src", myCompWS.hostBase + "Imagens/EtiComponents/EtiGrid/Filter" + strType + ".png");
                if (strType == "G1") {
                    EtiComponentCellUpdate("idGrdFlt__" + pCompId + "_" + intCol, "");
                }
            } else if (arrBags[0] == "TXT") {
                var blnFound = false;
                var intCol = parseInt(arrBags[1], 10);
                var strValue = arrBags[2];
                var strKey = pCols[intCol].key;
                var strEditorType = "text";
                if (pCols[intCol].editor) {
                    strEditorType = pCols[intCol].editor.type;
                }
                var strNewType = "G2";
                var blnNewType = false;
                if (strEditorType == "text") {
                    strNewType = "S1";
                } else if (strEditorType == "number" || strEditorType == "date") {
                    strNewType = "N2";
                }
                for (var i = 0; i < pFilters.length; i++) {
                    if (pFilters[i].key == strKey) {
                        blnFound = true;
                        if (pFilters[i].val == strValue) {
                            return false;
                        }
                        pFilters[i].val = strValue;
                        if (pFilters[i].tp == "G1") {
                            pFilters[i].tp = strNewType;
                            blnNewType = true;
                        } else {
                            if (strEditorType == "number") {
                                if (strValue == "0") {
                                    pFilters[i].tp = "G1";
                                    strNewType = "G1";
                                    blnNewType = true;
                                }
                            } else {
                                if (strValue == "") {
                                    pFilters[i].tp = "G1";
                                    strNewType = "G1";
                                    blnNewType = true;
                                }
                            }
                        }
                    }
                }
                if (!blnFound) {
                    pFilters.push({ key: strKey, tp: strNewType, val: strValue });
                    blnNewType = true;
                }

                if (blnNewType) {
                    $("#ImgFltidGrdFlt__" + pCompId + "_" + intCol).attr("src", myCompWS.hostBase + "Imagens/EtiComponents/EtiGrid/Filter" + strNewType + ".png");
                }
            }
        }
    }
    return true;
}

function getGridFilterSelectorCell(pCol, pFilterType) {
    var strExpr = "";
    switch (pFilterType) {
        case 'G1': strExpr = getMsgTranslated('Shell', 'Sem filtro...'); break;
        case 'G2': strExpr = getMsgTranslated('Shell', 'Igual a...'); break;
        case 'G3': strExpr = getMsgTranslated('Shell', 'Diferente de...'); break;
        case 'N1': strExpr = getMsgTranslated('Shell', 'Maior que...'); break;
        case 'N2': strExpr = getMsgTranslated('Shell', 'Maior ou igual que...'); break;
        case 'N3': strExpr = getMsgTranslated('Shell', 'Menor que...'); break;
        case 'N4': strExpr = getMsgTranslated('Shell', 'Menor ou igual que...'); break;
        case 'S1': strExpr = getMsgTranslated('Shell', 'Começa por...'); break;
        case 'S2': strExpr = getMsgTranslated('Shell', 'Contém...'); break;
        case 'S3': strExpr = getMsgTranslated('Shell', 'Não contém...'); break;
        case 'D1': strExpr = getMsgTranslated('Shell', 'Hoje'); break;
        case 'D2': strExpr = getMsgTranslated('Shell', 'Ontem'); break;
        case 'D3': strExpr = getMsgTranslated('Shell', 'Este mês'); break;
        case 'D4': strExpr = getMsgTranslated('Shell', 'Mês passado'); break;
        case 'D5': strExpr = getMsgTranslated('Shell', 'Este ano'); break;
    }
    return "<tr onclick='setGridFilterSelectorCell(" + pCol + ", \"" + pFilterType + "\")'><td class='etiGridFilterCell1'><img src='" + myCompWS.hostBase + "Imagens/EtiComponents/EtiGrid/Filter" + pFilterType + ".png' /></td><td class='etiGridFilterCell2'>" + strExpr + "</td></tr>";
}

function getGridFilterSelectorTable(pCol, pEditorType) {
    var strRet = "<table>";
    if (pEditorType == "number" || pEditorType == "time") {
        strRet += getGridFilterSelectorCell(pCol, "G1") + getGridFilterSelectorCell(pCol, "G2") + getGridFilterSelectorCell(pCol, "G3") + getGridFilterSelectorCell(pCol, "N1") + getGridFilterSelectorCell(pCol, "N2") + getGridFilterSelectorCell(pCol, "N3") + getGridFilterSelectorCell(pCol, "N4");
    } else if (pEditorType == "date") {
        strRet += getGridFilterSelectorCell(pCol, "G1") + getGridFilterSelectorCell(pCol, "G2") + getGridFilterSelectorCell(pCol, "G3") + getGridFilterSelectorCell(pCol, "N1") + getGridFilterSelectorCell(pCol, "N2") + getGridFilterSelectorCell(pCol, "N3") + getGridFilterSelectorCell(pCol, "N4") + getGridFilterSelectorCell(pCol, "D1") + getGridFilterSelectorCell(pCol, "D2") + getGridFilterSelectorCell(pCol, "D3") + getGridFilterSelectorCell(pCol, "D4") + getGridFilterSelectorCell(pCol, "D5");
    } else if (pEditorType == "combo" || pEditorType == "custom" || pEditorType == "check") {
        strRet += getGridFilterSelectorCell(pCol, "G1") + getGridFilterSelectorCell(pCol, "G2") + getGridFilterSelectorCell(pCol, "G3");
    } else {
        strRet += getGridFilterSelectorCell(pCol, "G1") + getGridFilterSelectorCell(pCol, "G2") + getGridFilterSelectorCell(pCol, "G3") + getGridFilterSelectorCell(pCol, "N1") + getGridFilterSelectorCell(pCol, "N2") + getGridFilterSelectorCell(pCol, "N3") + getGridFilterSelectorCell(pCol, "N4") + getGridFilterSelectorCell(pCol, "S1") + getGridFilterSelectorCell(pCol, "S2") + getGridFilterSelectorCell(pCol, "S3");
    }
    strRet += "</table>";
    return strRet;
}

function hideComponHelper() {
    if (myCompWS.EtiBase.HelperObj) {
        myCompWS.EtiBase.HelperObj.style.display = 'none';
        myCompWS.EtiBase.HelperCurtain.style.display = 'none';
    }
}

function showComponHelper() {
    if (!myCompWS.EtiBase.HelperCurtain) {
        myCompWS.EtiBase.HelperCurtain = document.createElement('div');
        myCompWS.EtiBase.HelperCurtain.className = 'divEtiPopupCurt';
        myCompWS.EtiBase.HelperCurtain.onclick = hideComponHelper;
        document.body.appendChild(myCompWS.EtiBase.HelperCurtain);

        myCompWS.EtiBase.HelperObj = document.createElement('div');
        myCompWS.EtiBase.HelperObj.style.position = 'absolute';
        document.body.appendChild(myCompWS.EtiBase.HelperObj);
        myCompWS.EtiBase.HelperObj.style.zIndex = 99999;
        myCompWS.EtiBase.HelperCurtain.style.zIndex = 99998;
    } else {
        myCompWS.EtiBase.HelperObj.style.display = '';
        myCompWS.EtiBase.HelperCurtain.style.display = '';
    }
}

function hideComboHelper() {
    if (myCompWS.EtiCombo.HelperObj) {
        myCompWS.EtiCombo.IsOpen = false;
        myCompWS.EtiCombo.HelperObj.style.display = 'none';
        myCompWS.EtiCombo.HelperCurtain.style.display = 'none';
    }
}

function showComboHelper(pVisible) {
    if (!myCompWS.EtiCombo.HelperCurtain) {
        myCompWS.EtiCombo.HelperCurtain = document.createElement('div');
        myCompWS.EtiCombo.HelperCurtain.className = 'divEtiPopupCurt';
        myCompWS.EtiCombo.HelperCurtain.onclick = hideComboHelper;
        document.body.appendChild(myCompWS.EtiCombo.HelperCurtain);

        myCompWS.EtiCombo.HelperObj = document.createElement('div');
        myCompWS.EtiCombo.HelperObj.style.position = 'absolute';
        document.body.appendChild(myCompWS.EtiCombo.HelperObj);
        myCompWS.EtiCombo.IsOpen = true;
        myCompWS.EtiCombo.HelperObj.style.zIndex = 99997;
        myCompWS.EtiCombo.HelperCurtain.style.zIndex = 99996;
        if (!pVisible) {
            hideComboHelper();
        }
    } else {
        myCompWS.EtiCombo.IsOpen = true;
        myCompWS.EtiCombo.HelperObj.style.display = '';
        myCompWS.EtiCombo.HelperCurtain.style.display = '';
    }
}

function openGridFilterSelector(pCompId, pCol, pEditorType) {
    myCompWS.EtiGrid.ComponentId = pCompId;
    showComponHelper();
    var el = document.getElementById("ImgFltidGrdFlt__" + pCompId + "_" + pCol);
    myCompWS.EtiBase.HelperObj.innerHTML = '<div class="etiGridPopupMenu" id="idDivEtiGridFilterSelector">' + getGridFilterSelectorTable(pCol, pEditorType) + '</div>';
    myCompWS.EtiBase.HelperObj.style.width = '200px';
    myCompWS.EtiBase.HelperObj.style.height = 'auto';
    var rect = el.getBoundingClientRect();
    myCompWS.EtiBase.HelperObj.style.top = (rect.top + el.offsetHeight + window.pageYOffset) + 'px';
    myCompWS.EtiBase.HelperObj.style.left = rect.left + 'px';
    ajustaLimites(myCompWS.EtiBase.HelperObj, 'idDivEtiGridFilterSelector');
    return false;
}

function getGridContextMenuLn(pEnabled, pIcon, pTexto, pShortcut, pFuncName) {
    var strRet = "";
    if (pIcon) {
        strRet += "<td class='etiGridTablePopupIcon'><img src='" + myCompWS.hostBase + "Imagens/Icons/" + pIcon + "' style='height: 16px; width: 16px;' /></td>";
    } else {
        strRet += "<td class='etiGridTablePopupIcon'>&nbsp;</td>";
    }
    if (pTexto) {
        strRet += "<td class='etiGridTablePopupTxt'>" + pTexto + "</td>";
        if (pShortcut) {
            strRet += "<td class='etiGridTablePopupSC'>" + pShortcut + "</td>";
        } else {
            strRet += "<td class='etiGridTablePopupSC'>&nbsp;</td>";
        }
        if (pEnabled) {
            var strFuncName = " onclick='hideComponHelper();'";
            if (pFuncName) {
                strFuncName = " onclick='hideComponHelper(); " + pFuncName + ";'";
            }
            return "<tr class='etiGridTablePopupLn'" + strFuncName + ">" + strRet + "</tr>";
        } else {
            return "<tr class='etiGridTablePopupLnDis'>" + strRet + "</tr>";
        }
    } else {
        strRet += "<td class='etiGridTablePopupLine' colspan=2>&nbsp;</td>";
        return "<tr class='etiGridTablePopupLnEmpty'>" + strRet + "</tr>";
    }
}

function getGridContextMenuAddRow(pMenu) {
    if (pMenu.length >= 40) {
        return getGridContextMenuLn(false, "", "", "", "");
    } else {
        return "";
    }
}

function getGridContextMenu(myCompId, pHasActiveRow, pCustomPopup, pGridId, pMultiSelection, pCanEdit, pCanInsert, pCanDelete) {
    var strRet = "<table style='width: 100%;'>";

    if (pCanEdit && (pCanInsert || pCanDelete)) {
        strRet += getGridContextMenuAddRow(strRet);
        strRet += getGridContextMenuLn((pCanInsert === true && pHasActiveRow), "Geral/Comandos/Adicionar.16.png", getMsgTranslated('Admin', 'Inserir linha aqui'), "Shift+Ins", "EtiGridAddRow(\"" + myCompId + "\",false)");
        strRet += getGridContextMenuLn((pCanInsert === true), "Geral/Comandos/Adicionar.16.png", getMsgTranslated('Admin', 'Inserir linha no fim'), "", "EtiGridAddRow(\"" + myCompId + "\",true)");
        strRet += getGridContextMenuLn((pCanDelete === true && pHasActiveRow), "Geral/Comandos/Eliminar.16.png", getMsgTranslated('Admin', 'Remover linha'), "Shift+Del", "EtiGridRemoveRow(\"" + myCompId + "\")");
    }

    if (pMultiSelection) {
        strRet += getGridContextMenuAddRow(strRet);
        strRet += getGridContextMenuLn(true, "", getMsgTranslated('Admin', 'Selecionar Todas'), "", "EtiGridSelectAll(\"" + myCompId + "\",true)");
        strRet += getGridContextMenuLn(true, "", getMsgTranslated('Admin', 'Desselecionar Todas'), "", "EtiGridSelectAll(\"" + myCompId + "\",false)");
    }

    if (pCustomPopup && pCustomPopup.length > 0) {
        strRet += getGridContextMenuAddRow(strRet);
        for (var i = 0; i < pCustomPopup.length; i++) {
            if (pCustomPopup[i].text) {
                strRet += getGridContextMenuLn((pCustomPopup[i].disabled !== true), pCustomPopup[i].icon, pCustomPopup[i].text, "", pCustomPopup[i].funcName);
            } else {
                strRet += getGridContextMenuAddRow(strRet);
            }
        }
    }

    if (pGridId != undefined) {
        strRet += getGridContextMenuAddRow(strRet);
        strRet += getGridContextMenuLn(true, "Geral/Varios/ConfirmarProcessamento.16.png", getMsgTranslated('Admin', 'Configurar Grelha'), "", "etiGridShowConfig(\"" + myCompId + "\")");
    }
    strRet += "</table>";
    if (strRet.length <= 60) {
        return "";
    }
    return strRet;
}

function openGridContextMenu(pCompId, pX, pY, pHasActiveRow, pCustomPopup, pGridId, pMultiSelection, pCanEdit, pCanInsert, pCanDelete) {
    var strContextMenu = getGridContextMenu(pCompId, pHasActiveRow, pCustomPopup, pGridId, pMultiSelection, pCanEdit, pCanInsert, pCanDelete);
    if (strContextMenu) {
        myCompWS.EtiGrid.ComponentId = pCompId;
        showComponHelper();
        myCompWS.EtiBase.HelperObj.innerHTML = '<div class="etiGridPopupMenu" id="idDivEtiGridContextMenu">' + strContextMenu + '</div>';
        myCompWS.EtiBase.HelperObj.style.width = '300px';
        myCompWS.EtiBase.HelperObj.style.height = 'auto';
        myCompWS.EtiBase.HelperObj.style.top = (pY + window.pageYOffset) + 'px';
        myCompWS.EtiBase.HelperObj.style.left = pX + 'px';
        ajustaLimites(myCompWS.EtiBase.HelperObj, 'idDivEtiGridContextMenu');
    }
    return false;
}

function clearGridFilterTimeout() {
    if (myCompWS.EtiGrid.InIntervalPhase) {
        clearTimeout(myCompWS.EtiGrid.Interval);
        myCompWS.EtiGrid.InIntervalPhase = false;
    }
}

function triggerGridFilterTimeout(pCompId, pCol) {
    var myVal = $("#idGrdFlt__" + pCompId + "_" + pCol).val();
    $("#" + pCompId).trigger("setFilter", "TXT|" + pCol + "|" + myVal);
}

function setGridFilterValue(e, pCompId, pCol, pType, pIsDate) {
    var blnInitFilterTimer = false;
    var intTimerDur = 100;
    if (pType == 'change') {
        blnInitFilterTimer = (e.uiChange === true);
    } else if (pType == 'keyup') {
        var kc = e.keyCode ? e.keyCode : e.charCode;
        blnInitFilterTimer = (isKey(kc, false, false, 'NUMKEYS') || isKey(kc, false, false, 'BACKSPACE') || isKey(kc, false, false, 'DELETE') || isKey(kc, false, false, 'ALFAKEYS'));
        if (pIsDate && blnInitFilterTimer) {
            if ($("#" + e.srcElement.id).val() != "") {
                blnInitFilterTimer = true;
            } else {
                blnInitFilterTimer = (e.srcElement.textContent.indexOf("_") == -1);
            }
        }
        intTimerDur = 500;
    } else if (pType == 'click') {
        blnInitFilterTimer = true;
    }
    if (blnInitFilterTimer) {
        clearGridFilterTimeout();
        myCompWS.EtiGrid.InIntervalPhase = true;
        myCompWS.EtiGrid.Interval = setTimeout(function () {
            triggerGridFilterTimeout(pCompId, pCol);
        }, intTimerDur);
    }
}

function SendKeyToGrid(pId, pKey, pIsShift) {
    if (pId) {
        $('#' + pId).trigger("gridKeydown", { key: pKey, isShift: pIsShift });
    }
}

function SendEnterKey(pId, pGridId, pKey, pIsShift) {
    if (pGridId) {
        $('#' + pGridId).trigger("gridKeydown", { key: pKey, isShift: pIsShift });
    }
}

function ActivateCellGrid(pGridId, pId, pIgnoreSelect, pAcumSelect) {
    if (pGridId) {
        var aId = pId.split("_");
        var intRow = -1;
        if (aId[4]) {
            intRow = parseInt(aId[4], 10);
        }
        if (intRow != -1) {
            $('#' + aId[2]).trigger("activateCell", { col: parseInt(aId[3], 10), row: intRow, doFocus: false, ignoreSelect: pIgnoreSelect, acumSelect: pAcumSelect });
        }
    }
}

function onGridScroll(t, evt) {
    if (!myCompWS.EtiGrid.IsScrolling) {
        var perc = $(t).scrollTop() / (t.scrollHeight - $(t).innerHeight());
        $('#' + t.id.replace("_scroll", "")).trigger("scrollPercent", perc);
    }
    myCompWS.EtiGrid.IsScrolling = false;
}

function GetGridTdStyle(pAlign) {
    var strStyle = "";

    if (pAlign == "center") {
        strStyle += "text-align:center;";
    } else if (pAlign == "right") {
        strStyle += "text-align:right;";
    } else {
        strStyle += "text-align:left;";
    }
    return strStyle;
}

function GetGridCellId(pId, pCol, pRow) {
    if (pRow == -1) {
        return "idGrdFlt__" + pId + "_" + pCol;
    } else if (pRow == -2) {
        return "idGrdSum__" + pId + "_" + pCol;
    } else {
        return "idGrd__" + pId + "_" + pCol + "_" + pRow;
    }
}

function GetGridEditor(pId, pAllowEdit, pDisabled, pEditor, pKey, pRowHeight, pCol, pRow) {
    var strFldId = GetGridCellId(pId, pCol, pRow);
    var blnHasPicker = true;
    var sExtraProps = "";
    var strPref = "";
    var strSuf = "";
    var strExtraStyle = "";
    var strRet = "";
    var strOnEvtChange = "";
    var strParentGrid = " data-eti-parentgrid='" + pId + "'";
    var myEditorType = "text";
    if (pEditor) {
        myEditorType = pEditor.type;
    }

    if (!pAllowEdit) {
        strParentGrid += " data-eti-parentmodquery='Y'";
    }

    if (pRow == -1) {
        if (myEditorType != "button" && myEditorType != "image" && myEditorType != "custom") {
            strPref = "<div class='etiGridFilter'><a tabindex='-1' href='.' onclick='return openGridFilterSelector(\"" + pId + "\"," + pCol + ",\"" + myEditorType + "\");'><img id='ImgFlt" + strFldId + "' src='" + myCompWS.hostBase + "Imagens/EtiComponents/EtiGrid/Filter.png' /></a></div>";
            strSuf = "<div style='clear: both;'></div>"
            strExtraStyle = " style='float: left; width: calc(100% - 20px);'";
            if (myEditorType == "combo") {
                strOnEvtChange = " onchange='setGridFilterValue(event, \"" + pId + "\"," + pCol + ", \"change\", false);'";
            } else if (myEditorType == "text" || myEditorType == "number" || myEditorType == "time") {
                strOnEvtChange = " onkeyup='setGridFilterValue(event, \"" + pId + "\"," + pCol + ", \"keyup\", false);'";
            } else if (myEditorType == "date") {
                strOnEvtChange = " onkeyup='setGridFilterValue(event, \"" + pId + "\"," + pCol + ", \"keyup\", true);' onchange='setGridFilterValue(event, \"" + pId + "\"," + pCol + ", \"change\", false);'";
            } else if (myEditorType == "check") {
                strOnEvtChange = " onclick='setGridFilterValue(event, \"" + pId + "\"," + pCol + ", \"click\", false);'";
            }
        }
    }

    if ((!pAllowEdit || pDisabled || pEditor.disabled === true) && pRow != -1) {
        sExtraProps += " data-eti-disabled='Y'";
        blnHasPicker = false;
    }
    if (pEditor.locked === true && pRow != -1) {
        sExtraProps += " data-eti-locked='Y'";
    }

    if (myEditorType == "date") {
        if (pEditor.allowNulls === true || pRow == -1) {
            sExtraProps += " data-eti-allownulls='Y'";
        }
        if (pEditor.timeType) {
            sExtraProps += " data-eti-timetype='" + pEditor.timeType + "'";
        }
        if (pEditor.ctb === true) {
            sExtraProps += " data-eti-ctb='Y'";
        }
        if (!blnHasPicker) {
            sExtraProps += " data-eti-datepicker='N'";
        }
        strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='date'" + strParentGrid + sExtraProps + "></div>";

    } else if (myEditorType == "time") {
        if (pEditor.allowNulls === true) {
            sExtraProps += " data-eti-allownulls='Y'";
        }
        strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='time'" + strParentGrid + sExtraProps + "></div>";

    } else if (myEditorType == "check") {
        if (pKey === "etiRowSelected") {
            sExtraProps += " data-eti-selector='Y'";
        }
        strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridFieldCheck'" + strExtraStyle + " data-eti-type='check'" + strParentGrid + sExtraProps + "></div>";

    } else if (myEditorType == "button") {
        if (pRow != -1) {
            strRet = "<div id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='button'" + strParentGrid + sExtraProps + "></div>";
        }

    } else if (myEditorType == "image") {
        if (pRow != -1) {
            if (pEditor.imageType) {
                sExtraProps += " data-eti-imagetype='" + pEditor.imageType + "'";
            }
            strRet = "<div id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='image' data-eti-height='" + pRowHeight + "'" + strParentGrid + sExtraProps + "></div>";
        }

    } else if (myEditorType == "number") {
        if (pEditor.valueType) {
            sExtraProps += " data-eti-valueType='" + pEditor.valueType + "'";
        }
        if (pEditor.decimalPlaces) {
            sExtraProps += " data-eti-decimalplaces='" + pEditor.decimalPlaces + "'";
        }
        if (pEditor.decimalPlacesEdit) {
            sExtraProps += " data-eti-decimalplacesedit='" + pEditor.decimalPlacesEdit + "'";
        }
        if (pEditor.groupSeparator === true || pEditor.groupSeparator === false) {
            sExtraProps += " data-eti-groupseparator='" + (pEditor.groupSeparator ? "Y" : "N") + "'";
        }
        if (pEditor.zeroIsEmpty === true || pRow == -1) {
            sExtraProps += " data-eti-zeroisempty='Y'";
        }
        if (pEditor.maxValue === 0 || pEditor.maxValue) {
            sExtraProps += " data-eti-maxvalue='" + pEditor.maxValue + "'";
        }
        if (pEditor.minValue === 0 || pEditor.minValue) {
            sExtraProps += " data-eti-minvalue='" + pEditor.minValue + "'";
        }
        strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='number'" + strParentGrid + sExtraProps + "></div>";

    } else if (myEditorType == "combo") {
        sExtraProps += " data-eti-listtype='" + pEditor.listType + "'";
        sExtraProps += " data-eti-listparam='" + pEditor.listParam + "'";

        if (pEditor.listParamValues) {
            sExtraProps += " data-eti-listparamvalues='" + GetStringified(pEditor.listParamValues) + "'";
        }
        if (pEditor.maxLength) {
            sExtraProps += " data-eti-maxlength='" + pEditor.maxLength + "'";
        }
        if (pEditor.errorDesc) {
            sExtraProps += " data-eti-errordesc='" + pEditor.errorDesc + "'";
        }
        if (!blnHasPicker) {
            sExtraProps += " data-eti-combopicker='N'";
        }
        if (pEditor.allowNulls) {
            sExtraProps += " data-eti-allownulls='Y'";
        }
        if (pEditor.valueCol) {
            sExtraProps += " data-eti-valuecol='" + pEditor.valueCol + "'";
        }
        if (pEditor.displayCol) {
            sExtraProps += " data-eti-displaycol='" + pEditor.displayCol + "'";
        }
        if (pEditor.valueField) {
            sExtraProps += " data-eti-valuefield='" + pEditor.valueField + "'";
        }
        if (pEditor.displayField) {
            sExtraProps += " data-eti-displayfield='" + pEditor.displayField + "'";
        }
        if (pEditor.validated === false) {
            sExtraProps += " data-eti-validated='N'";
        }
        if (pEditor.placeholder) {
            sExtraProps += " data-eti-placeholder='" + pEditor.placeholder + "'";
        }
        strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='combo'" + strParentGrid + sExtraProps + "></div>";

    } else if (myEditorType == "custom") {
        if (pRow != -1) {
            sExtraProps += " data-eti-subtype='" + pEditor.subType + "'";
            if (pEditor.params) {
                sExtraProps += " data-eti-params='" + GetStringified(pEditor.params) + "'";
            }
            strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='custom'" + strParentGrid + sExtraProps + "></div>";
        }

    } else {
        if (pEditor && pEditor.maxLength) {
            sExtraProps += " data-eti-maxlength='" + pEditor.maxLength + "'";
        } else {
            sExtraProps += " data-eti-maxlength='30'";
        }
        if (pEditor && pEditor.click) {
            sExtraProps += " data-eti-click='" + pEditor.click + "'";
        }
        if (pEditor.align) {
            sExtraProps += " data-eti-align='" + pEditor.align + "'";
        }
        if (pEditor.mask) {
            sExtraProps += " data-eti-mask='" + pEditor.mask + "'";
        }
        if (pEditor.placeholder) {
            sExtraProps += " data-eti-placeholder='" + pEditor.placeholder + "'";
        }
        strRet = "<div" + strOnEvtChange + " id='" + strFldId + "' class='etiGridField'" + strExtraStyle + " data-eti-type='text'" + strParentGrid + sExtraProps + "></div>";
    }

    return strPref + strRet + strSuf;
}

function GetEtiGridActLin(pActiveId) {
    var intRet = -1;
    var arrCrx = pActiveId.split("__");
    if (arrCrx.length >= 2) {
        var arrCrt = arrCrx[1].split("_");
        if (arrCrt.length >= 3) {
            intRet = parseInt(arrCrt[2], 10);
            if (isNaN(intRet)) {
                intRet = -1;
            }
        }
    }
    return intRet;
}

function GetEtiGridActCol(pActiveId) {
    var intRet = 0;
    var arrCrx = pActiveId.split("__");
    if (arrCrx.length >= 2) {
        var arrCrt = arrCrx[1].split("_");
        if (arrCrt.length >= 2) {
            intRet = parseInt(arrCrt[1], 10);
        }
    }
    return intRet;
}

// ************************************
// FUNCOES NUMEROS
// ************************************
function GetNumSepDecimal() {
    if (myCompWS.EtiNumber.DecimalSeparator == '')
        SetLocalesNumero();
    return myCompWS.EtiNumber.DecimalSeparator;
}

function GetNumSepMilhares() {
    if (myCompWS.EtiNumber.GroupSeparator == '')
        SetLocalesNumero();
    return myCompWS.EtiNumber.GroupSeparator;
}

function SetLocalesNumero() {
    var myLoc = (2001.22).toLocaleString();
    myCompWS.EtiNumber.GroupSeparator = myLoc.substring(1, 2);
    if (myCompWS.EtiNumber.GroupSeparator.charCodeAt(0) > 100) {
        myCompWS.EtiNumber.GroupSeparator = " ";
    }
    myCompWS.EtiNumber.DecimalSeparator = myLoc.substring(5, 6);
}

function getContextCD(pCasasDec) {
    if (pCasasDec == "{CasasDecUnitarios}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.CasasDecUnitarios;
    } else if (pCasasDec == "{CasasDecCustosUnitarios}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.CasasDecCustosUnitarios;
    } else if (pCasasDec == "{CasasDecParciaisTotais}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.CasasDecParciaisTotais;
    } else if (pCasasDec == "{CasasDecQtdCmp}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdCmp;
    } else if (pCasasDec == "{CasasDecQtdStk}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdStk;
    } else if (pCasasDec == "{CasasDecQtdVnd}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdVnd;
    } else if (pCasasDec == "{CasasDecQtdMax}") {
        return MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdMax;
    } else {
        alert('Erro de Desenvolvimento: Tag (' + pCasasDec + ') Não suportada');
    }
}

function GetValidNumber(num) {
    var sm = GetNumSepMilhares();
    var sd = GetNumSepDecimal();
    var sNum = ReplaceAll('' + num, sm, "").replace(sd, ".");
    if (sNum == '' || sNum == '-') {
        sNum = '0';
    }
    return parseFloat(sNum);
}

function GetNumber(num, cd) {
    var fNum = GetValidNumber(num);

    if (cd != 0) {
        var sNum = '' + fNum;
        var vlr = sNum.split('.');
        var sPrtInt = vlr[0];
        var sPrtDec = vlr[1] + '0000000000000';
        fNum = parseFloat(sPrtInt + '.' + sPrtDec.substring(0, cd));
    }

    return fNum;
}

function validEditDecPlaces(pValue, pDecimalPlaces, pDecimalPlacesEdit) {
    if (pDecimalPlaces > pDecimalPlacesEdit) {
        var iPower = Math.pow(10, pDecimalPlacesEdit);
        var myRemain = Math.abs((pValue * iPower - parseInt(pValue * iPower, 10)) * 100000);
        if (myRemain > 1) {
            return false;
        }
    }
    return true;
}

function tryToGetNumber(n) {
    var sRet = '0';
    var bFirstSep = true;
    var p = '' + n;
    var ch = '';
    for (i = 0; i < p.length; i++) {
        ch = p.substring(i, i + 1);
        if (ch >= '0' && ch <= '9') {
            sRet += ch;
        } else if (ch == '.' || ch == ',') {
            if (bFirstSep) {
                bFirstSep = false;
                sRet += '.';
            }
        }
    }

    var intSignal = 1;
    if (n) {
        if (('' + n).length >= 1) {
            if (('' + n).substring(0, 1) == '-') {
                intSignal = -1;
            }
        }
    }

    return parseFloat(sRet) * intSignal;
}

function GetSepMil(pNum, pSM) {
    var strRet = "";
    var s = 0;
    for (var i = pNum.length - 1; i >= 0; i--) {
        strRet = pNum.substring(i, i + 1) + strRet;
        s++;
        if (s == 3 && i != 0) {
            s = 0;
            strRet = pSM + strRet;
        }
    }
    return strRet;
}

function FormatNumber(num, cd, usaSepMil) {
    var sm = GetNumSepMilhares();
    if (!usaSepMil)
        sm = '';
    var sd = GetNumSepDecimal();
    var isNegative = false;
    var strNum = num.toFixed(cd).replace(".", sd);
    if (num < 0) {
        isNegative = true;
        strNum = (-num).toFixed(cd).replace(".", sd);
    }

    if (cd == 0) {
        if (usaSepMil && Math.abs(num) >= 1000) {
            strNum = GetSepMil(strNum, sm);
        }
    } else {
        if (usaSepMil && Math.abs(num) >= 1000) {
            var arrSeps = strNum.split(sd);
            strNum = GetSepMil(arrSeps[0], sm) + sd + arrSeps[1];
        }
    }

    if (isNegative) {
        strNum = '-' + strNum;
    }
    return strNum;
}

// ************************************
// FUNCOES DATAs
// ************************************
function setMesAnterior() {
    myCompWS.EtiCalendar.Month--;
    if (myCompWS.EtiCalendar.Month == 0) {
        myCompWS.EtiCalendar.Month = 12;
        myCompWS.EtiCalendar.Year--;
    }
    myCompWS.EtiCalendar.Calendar.innerHTML = GetCalendarDays();
    return false;
}

function setMesSeguinte() {
    myCompWS.EtiCalendar.Month++;
    if (myCompWS.EtiCalendar.Month == 13) {
        myCompWS.EtiCalendar.Month = 1;
        myCompWS.EtiCalendar.Year++;
    }
    myCompWS.EtiCalendar.Calendar.innerHTML = GetCalendarDays();
    return false;
}

function setAnoAnterior() {
    myCompWS.EtiCalendar.Year--;
    return GetCalendarMonths();
}

function setAnoSeguinte() {
    myCompWS.EtiCalendar.Year++;
    return GetCalendarMonths();
}

function setDecAnterior() {
    myCompWS.EtiCalendar.Year = myCompWS.EtiCalendar.Year - 10;
    return GetCalendarYears();
}

function setDecSeguinte() {
    myCompWS.EtiCalendar.Year = myCompWS.EtiCalendar.Year + 10;
    return GetCalendarYears();
}

function setDayOfMonth(pDia, pMes, pAno) {
    if (myCompWS.EtiCalendar.SelectedDate) {
        var fd = GetFormatoData(myCompWS.EtiCalendar.TimeType);
        var nd = fd.replace('yyyy', getZeros(pAno, 4)).replace('MM', getZeros(pMes, 2)).replace('dd', getZeros(pDia, 2)).replace('hh', "00").replace('mm', "00").replace('ss', "00");
        fireValueDate(myCompWS.EtiCalendar.SelectedDate, nd, myCompWS.EtiCalendar.TimeType, myCompWS.EtiCalendar.TypeString, false, false, true)
        myCompWS.EtiCalendar.SelectedDate.focus();
        closeCalendar();
    }
    return false;
}

function setMonthOfYear(pMes) {
    if (myCompWS.EtiCalendar.SelectedDate) {
        myCompWS.EtiCalendar.Month = pMes;
        myCompWS.EtiCalendar.Calendar.innerHTML = GetCalendarDays();
    }
    return false;
}

function setYearOfDec(pAno) {
    myCompWS.EtiCalendar.Year = pAno;
    return GetCalendarMonths();
}

function showCalendar(el, pTimeType, pTypeString) {
    if (!myCompWS.EtiCalendar.Calendar) {
        myCompWS.EtiCalendar.Curtain = document.createElement('div');
        myCompWS.EtiCalendar.Curtain.className = 'divEtiPopupCurt';
        myCompWS.EtiCalendar.Curtain.onclick = closeCalendar;
        document.body.appendChild(myCompWS.EtiCalendar.Curtain);

        myCompWS.EtiCalendar.Calendar = document.createElement('div');
        myCompWS.EtiCalendar.Calendar.style.position = 'absolute';
        document.body.appendChild(myCompWS.EtiCalendar.Calendar);
    }
    myCompWS.EtiCalendar.Calendar.style.id = 'divEtiCalendar';
    var rect = el.getBoundingClientRect();
    myCompWS.EtiCalendar.Calendar.style.top = (rect.top + el.offsetHeight + window.pageYOffset) + 'px';
    myCompWS.EtiCalendar.Calendar.style.left = rect.left + 'px';
    myCompWS.EtiCalendar.Calendar.style.zIndex = 99999;
    myCompWS.EtiCalendar.Curtain.style.zIndex = 99998;

    var dt = GetValidDate(el.textContent);
    if (dt == -1) {
        dt = new Date();
    }
    myCompWS.EtiCalendar.IniDate = dt;
    myCompWS.EtiCalendar.Year = dt.getFullYear();
    myCompWS.EtiCalendar.Month = dt.getMonth() + 1;

    myCompWS.EtiCalendar.Calendar.innerHTML = GetCalendarDays();
    myCompWS.EtiCalendar.SelectedDate = el;
    myCompWS.EtiCalendar.TimeType = pTimeType;
    myCompWS.EtiCalendar.TypeString = pTypeString;

    if (el.textContent != "") {
        setCursorPosition(el, 0);
    }
    myCompWS.EtiCalendar.Calendar.style.display = '';
    myCompWS.EtiCalendar.Curtain.style.display = '';
    myCompWS.EtiCalendar.IsOpen = true;
    ajustaLimites(myCompWS.EtiCalendar.Calendar, 'idDivEtiCalendar');
}

function getZeros(sValor, l) {
    var sRet = '' + sValor;
    if (sRet.length > l) {
        sRet = sRet.substring(0, 4);
    } else if (sRet.length < l) {
        while (sRet.length < l)
            sRet = '0' + sRet;
    }
    return sRet;
}

function closeCalendar() {
    if (myCompWS.EtiCalendar.IsOpen) {
        myCompWS.EtiCalendar.Calendar.style.display = 'none';
        myCompWS.EtiCalendar.Curtain.style.display = 'none';
        myCompWS.EtiCalendar.IsOpen = false;
    }
}

function setCalOver(t, blnColor) {
    if (blnColor) {
        t.style.backgroundColor = '#F9AE3C';
    }
    t.style.cursor = 'pointer';
}

function setCalOut(t, blnColor) {
    if (blnColor) {
        t.style.backgroundColor = '#FFFFFF';
    }
}

function GetMesDesc(iMes) {
    if (!myCompWS.EtiCalendar.Meses) {
        myCompWS.EtiCalendar.Meses = [getMsgTranslated('Shell', 'Janeiro'), getMsgTranslated('Shell', 'Fevereiro'), getMsgTranslated('Shell', 'Março'),
                                      getMsgTranslated('Shell', 'Abril'), getMsgTranslated('Shell', 'Maio'), getMsgTranslated('Shell', 'Junho'),
                                      getMsgTranslated('Shell', 'Julho'), getMsgTranslated('Shell', 'Agosto'), getMsgTranslated('Shell', 'Setembro'),
                                      getMsgTranslated('Shell', 'Outubro'), getMsgTranslated('Shell', 'Novembro'), getMsgTranslated('Shell', 'Dezembro')];
    }
    return myCompWS.EtiCalendar.Meses[iMes - 1];
}

function GetCalendarDays() {
    var iDay = new Date(myCompWS.EtiCalendar.Year, myCompWS.EtiCalendar.Month - 1, 1);
    var tod = new Date();

    iDay.setDate(iDay.getDate() - 1);
    while (iDay.getDay() != 1) {
        iDay.setDate(iDay.getDate() - 1);
    }

    var sAntMes = '<a href="javascript:void(0)" onclick="return setMesAnterior();"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendarTopL.png" /></a>';
    var sDepMes = '<a href="javascript:void(0)" onclick="return setMesSeguinte();"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendarTopR.png" /></a>';

    var strRet = '<tr><th style="text-align: left;">' + sAntMes + '</th><th colspan=5><a href="" onclick="return GetCalendarMonths()">' + GetMesDesc(myCompWS.EtiCalendar.Month) + ' / ' + myCompWS.EtiCalendar.Year + '</a></th><th style="text-align: right;">' + sDepMes + '</th></tr>';
    strRet += '<tr>' +
                    '<td width="5%">' + getMsgTranslated('Shell', 'Seg') + '</td><td width="5%">' + getMsgTranslated('Shell', 'Ter') + '</td><td width="5%">' + getMsgTranslated('Shell', 'Qua') + '</td>' +
                    '<td width="5%">' + getMsgTranslated('Shell', 'Qui') + '</td><td width="5%">' + getMsgTranslated('Shell', 'Sex') + '</td>' +
                    '<td width="5%">' + getMsgTranslated('Shell', 'Sáb') + '</td><td width="5%">' + getMsgTranslated('Shell', 'Dom') + '</td></tr>';

    var l = 0; var c = 0;
    var iDia = 0; iMes = 0; iAno = 0;
    var sStyleToday = '';
    var blnColored = true;

    for (l = 0; l < 6; l++) {
        strRet += '<tr>';
        for (c = 0; c < 7; c++) {
            iDia = iDay.getDate();
            iMes = iDay.getMonth() + 1;
            iAno = iDay.getFullYear();
            if (iMes == myCompWS.EtiCalendar.Month) {
                sStyleToday = 'color: black;';
                blnColored = true;
                if (myCompWS.EtiCalendar.IniDate.getFullYear() == myCompWS.EtiCalendar.Year && myCompWS.EtiCalendar.IniDate.getMonth() + 1 == myCompWS.EtiCalendar.Month && myCompWS.EtiCalendar.IniDate.getDate() == iDia) {
                    sStyleToday += 'background-color: #F9AE3C;';
                    blnColored = false;
                } else if (tod.getFullYear() == myCompWS.EtiCalendar.Year && tod.getMonth() + 1 == myCompWS.EtiCalendar.Month && tod.getDate() == iDia) {
                    sStyleToday += 'border: 1px solid #F9AE3C; background-color: #EEEEEE;';
                    blnColored = false;
                }
            } else {
                sStyleToday = 'color: gray;';
            }
            strRet += '<td style="' + sStyleToday + '" onmouseover="setCalOver(this,' + blnColored + ');" onmouseout="setCalOut(this,' + blnColored + ');" onclick="return setDayOfMonth(' + iDia + ',' + iMes + ',' + iAno + ')">' + iDia + '</td>';
            iDay.setDate(iDay.getDate() + 1);
        }
        strRet += '</tr>';
    }

    return '<div class="divEtiCalendar" id="idDivEtiCalendar"><table border=0 cellspacing=0 cellpadding=0 class="tableEtiCalendar">' + strRet + '</table></div>';
}

function GetCalendarMonths() {
    var sAntAno = '<a href="javascript:void(0)" onclick="return setAnoAnterior();"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendarTopL.png" /></a>';
    var sDepAno = '<a href="javascript:void(0)" onclick="return setAnoSeguinte();"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendarTopR.png" /></a>';
    var strRet = '<tr><th style="text-align: left;">' + sAntAno + '</th><th colspan=2><a href="." onclick="return GetCalendarYears();">' + myCompWS.EtiCalendar.Year + '</a></th><th style="text-align: right;">' + sDepAno + '</th></tr>';

    var l = 0; var c = 0; var iMes = 1;
    for (l = 0; l <= 3; l++) {
        strRet += '<tr style="height: 50px;">';
        for (c = 0; c <= 3; c++) {
            sStyleToday = 'color: black;';
            blnColored = true;
            if (myCompWS.EtiCalendar.IniDate.getFullYear() == myCompWS.EtiCalendar.Year && myCompWS.EtiCalendar.IniDate.getMonth() + 1 == iMes) {
                sStyleToday += 'background-color: #F9AE3C;';
                blnColored = false;
            }
            strRet += '<td style="' + sStyleToday + '" onmouseover="setCalOver(this,true);" onmouseout="setCalOut(this,true);" onclick="return setMonthOfYear(' + iMes + ')">' + GetMesDesc(iMes) + '</td>';
            iMes++;
        }
        strRet += '</tr>';
    }

    myCompWS.EtiCalendar.Calendar.innerHTML = '<div class="divEtiCalendar" id="idDivEtiCalendar"><table border=0 cellspacing=0 cellpadding=0 class="tableEtiCalendar" width="100%">' + strRet + '</table></div>';
    return false;
}

function GetCalendarYears() {
    var sAntDec = '<a href="javascript:void(0)" onclick="return setDecAnterior();"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendarTopL.png" /></a>';
    var sDepDec = '<a href="javascript:void(0)" onclick="return setDecSeguinte();"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendarTopR.png" /></a>';

    var iAno = myCompWS.EtiCalendar.Year - 1;
    while (("" + iAno).substring(3, 4) != 0) {
        iAno--;
    }
    var strRet = '<tr><th style="text-align: left;">' + sAntDec + '</th><th colspan=2>' + iAno + ' - ' + (iAno + 9) + '</th><th style="text-align: right;">' + sDepDec + '</th></tr>';

    var l = 0; var c = 0; var i = 1;
    for (l = 0; l <= 3; l++) {
        strRet += '<tr style="height: 50px;">';
        for (c = 0; c <= 3; c++) {
            if (l == 3) {
                strRet += '<td>&nbsp;</td>';
            } else {
                if (i > 1 && i < 12) {
                    sStyleToday = 'color: black;';
                    blnColored = true;
                    if (myCompWS.EtiCalendar.IniDate.getFullYear() == iAno) {
                        sStyleToday += 'background-color: #F9AE3C;';
                        blnColored = false;
                    }
                } else {
                    sStyleToday = 'color: gray;';
                }
                strRet += '<td style="' + sStyleToday + '" onmouseover="setCalOver(this,' + blnColored + ');" onmouseout="setCalOut(this,' + blnColored + ');" onclick="return setYearOfDec(' + iAno + ')">' + iAno + '</td>';
                i++;
                iAno++;
            }
        }
        strRet += '</tr>';
    }

    myCompWS.EtiCalendar.Calendar.innerHTML = '<div class="divEtiCalendar" id="idDivEtiCalendar"><table border=0 cellspacing=0 cellpadding=0 class="tableEtiCalendar" width="100%">' + strRet + '</table></div>';
    return false;
}

function GetDataFromJS(pData) {
    var fd = GetFormatoData();
    var myData = new Date(pData);
    return fd.replace('yyyy', getZeros(myData.getFullYear(), 4))
             .replace('MM', getZeros(myData.getMonth() + 1, 2))
             .replace('dd', getZeros(myData.getDate(), 2));
}

function GetFormatoData(pTimeType) {
    if (myCompWS.EtiDate.Format == '')
        SetLocalesData();
    if (pTimeType == "hms") {
        return myCompWS.EtiDate.Format + " hh:mm:ss";
    } else if (pTimeType == "hm") {
        return myCompWS.EtiDate.Format + " hh:mm";
    } else {
        return myCompWS.EtiDate.Format;
    }
}

function GetSeparadorData() {
    if (myCompWS.EtiDate.Separator == '')
        SetLocalesData();
    return myCompWS.EtiDate.Separator;
}

function SetLocalesData() {
    var ch = String.fromCharCode(8206);
    var myLoc = ReplaceAll((new Date(2000, 12 - 1, 31)).toLocaleString(), ch, ""); // 2000.12.31 ou 2000.31.12 ou 31.12.2000 ou 12.31.2000
    if (myLoc.length < 10) {
        myLoc = "31/12/2000";
    } else {
        myLoc = myLoc.substring(0, 10);
        if (myLoc.indexOf("2000") == -1 || myLoc.indexOf("12") == -1 || myLoc.indexOf("31") == -1) {
            myLoc = "31/12/2000";
        }
    }
    var iPos = myLoc.indexOf("2000");
    if (iPos == 0) {
        myCompWS.EtiDate.Separator = myLoc.substring(4, 5);
        iPos = myLoc.indexOf("31");
        if (iPos == 8) {
            myCompWS.EtiDate.Format = "yyyy" + myCompWS.EtiDate.Separator + "MM" + myCompWS.EtiDate.Separator + "dd";
        } else {
            myCompWS.EtiDate.Format = "yyyy" + myCompWS.EtiDate.Separator + "dd" + myCompWS.EtiDate.Separator + "MM";
        }
    } else {
        myCompWS.EtiDate.Separator = myLoc.substring(iPos - 1, iPos);
        iPos = myLoc.indexOf("31");
        if (iPos == 3) {
            myCompWS.EtiDate.Format = "MM" + myCompWS.EtiDate.Separator + "dd" + myCompWS.EtiDate.Separator + "yyyy";
        } else {
            myCompWS.EtiDate.Format = "dd" + myCompWS.EtiDate.Separator + "MM" + myCompWS.EtiDate.Separator + "yyyy";
        }
    }
}

function tryToGetDate(n, pTimeType, pIsCtb) {
    var iAno = 0;
    var iMes = 0;
    var iDia = 0;
    var iHor = 0;
    var iMin = 0;
    var iSeg = 0;

    if (n instanceof Date) {
        iAno = n.getFullYear();
        iMes = n.getMonth() + 1;
        iDia = n.getDate();
        iHor = n.getHours();
        iMin = n.getMinutes();
        iSeg = n.getSeconds();
    } else {
        if (pIsCtb && n.length == 10 && n.substring(4, 5) == "-" && n.substring(7, 8) == "-") {
            iAno = parseInt(n.substring(0, 4), 10);
            iMes = parseInt(n.substring(5, 7), 10);
            iDia = parseInt(n.substring(8, 10), 10);
            iHor = 0;
            iMin = 0;
            iSeg = 0;
        } else {
            var sVal1 = '0';
            var sVal2 = '0';
            var sVal3 = '0';
            var sVal4 = '0';
            var sVal5 = '0';
            var sVal6 = '0';
            var iNdx = 1;
            var p = '' + n;
            var ch = '';
            var blnNoMore = false;
            for (i = 0; i < p.length; i++) {
                if (!blnNoMore) {
                    ch = p.substring(i, i + 1);
                    if (ch >= '0' && ch <= '9') {
                        if (iNdx == 1) { sVal1 += ch };
                        if (iNdx == 2) { sVal2 += ch };
                        if (iNdx == 3) { sVal3 += ch };
                        if (iNdx == 4) { sVal4 += ch };
                        if (iNdx == 5) { sVal5 += ch };
                        if (iNdx == 6) { sVal6 += ch };
                    } else if (ch == '/' || ch == '-' || ch == ' ' || ch == ':' || ch == 'T') {
                        iNdx++;
                    } else {
                        blnNoMore = true;
                    }
                }
            }
            var iVal1 = parseInt(sVal1, 10);
            var iVal2 = parseInt(sVal2, 10);
            var iVal3 = parseInt(sVal3, 10);

            if (iVal1 > iVal3) {
                iAno = iVal1;
                if (iVal2 > 12) {
                    iMes = iVal3;
                    iDia = iVal2;
                } else {
                    iMes = iVal2;
                    iDia = iVal3;
                }
            } else {
                iAno = iVal3;
                if (iVal2 > 12) {
                    iMes = iVal1;
                    iDia = iVal2;
                } else {
                    iMes = iVal2;
                    iDia = iVal1;
                }
            }
            iHor = parseInt(sVal4, 10);
            iMin = parseInt(sVal5, 10);
            iSeg = parseInt(sVal6, 10);
        }
    }

    var fd = GetFormatoData(pTimeType);
    fd = fd.replace('yyyy', getZeros(iAno, 4));
    fd = fd.replace('MM', getZeros(iMes, 2));
    fd = fd.replace('dd', getZeros(iDia, 2));
    fd = fd.replace('hh', getZeros(iHor, 2));
    fd = fd.replace('mm', getZeros(iMin, 2));
    fd = fd.replace('ss', getZeros(iSeg, 2));

    if (GetValidDate(fd, pTimeType, pIsCtb) == -1) {
        fd = GetFormatoData(pTimeType);
        var dt = new Date();
        fd = fd.replace('yyyy', getZeros(dt.getFullYear(), 4));
        fd = fd.replace('MM', getZeros(dt.getMonth() + 1, 2));
        fd = fd.replace('dd', getZeros(dt.getDate(), 2));
        fd = fd.replace('hh', getZeros(dt.getHours(), 2));
        fd = fd.replace('mm', getZeros(dt.getMinutes(), 2));
        fd = fd.replace('ss', getZeros(dt.getSeconds(), 2));
    }
    return fd;
}

function IsMaskInfo(pChar) {
    if (pChar == "9" || pChar == "a") {
        return true;
    } else {
        return false;
    }
}

function GetReSetInMask(pValue, pMask) {
    var arrMasks = [];
    var ch = "";
    for (var i = 0; i < pMask.length; i++) {
        ch = pMask.substring(i, i + 1);
        if (!IsMaskInfo(ch)) {
            if (arrMasks.indexOf(ch) == -1) {
                arrMasks.push(ch);
            }
        }
    }

    var info = "";
    var add = false;
    for (var i = 0; i < pValue.length; i++) {
        add = true;
        ch = pValue.substring(i, i + 1);
        for (var j = 0; j < arrMasks.length; j++) {
            if (ch == arrMasks[j]) {
                add = false;
            }
        }
        if (add) {
            info += ch;
        }
    }
    var ret = "";
    var chV = "";
    for (var i = 0; i < pMask.length; i++) {
        ch = pMask.substring(i, i + 1);
        if (IsMaskInfo(ch)) {
            if (info.length == 0) {
                ret += " ";
            } else {
                chV = info.substring(0, 1);
                if (ch == "9") {
                    if (!(chV >= "0" && chV <= "9")) {
                        chV = " ";
                    }
                }
                ret += chV;
                info = info.substring(1);
            }
        } else {
            ret += ch;
        }
    }
    return ReplaceAll(ret, "_", " ");
}

function GetMaskString(pValue, pMask) {
    var ret = "";
    var chV = "";
    var chM = "";
    for (var i = 0; i < pMask.length; i++) {
        if (i > pValue.length) {
            chV = " ";
        } else {
            chV = pValue.substring(i, i + 1);
        }
        chM = pMask.substring(i, i + 1);
        if (chM == "9") {
            if ((chV >= "0" && chV <= "9") || chV == " ") {
                ret += chV;
            } else {
                ret += chM;
            }
        } else if (chM == "a") {
            ret += chV;
        } else {
            ret += chM;
        }
    }
    return ret;
}

function FormatDate(txt, pTimeType) {
    var fd = GetFormatoData(pTimeType);
    var sd = GetSeparadorData();
    var mVal = ReplaceAll(ReplaceAll(ReplaceAll(txt, sd, ''), " ", ''), ":", '') + '_______________________';
    var mRet = '';
    var cf = ''; var cd = '';
    var ndxd = 0; ndxf = 0;
    while (ndxf < fd.length) {
        cf = fd.substring(ndxf, ndxf + 1);
        cd = mVal.substring(ndxd, ndxd + 1);

        ndxf++;
        if (cf == sd || cf == " " || cf == ":") {
            mRet += cf;
        } else {
            mRet += cd;
            ndxd++;
        }
    }
    return mRet;
}

function IsEmptyDate(pValue, pTimeType) {
    var emptyDate = GetFormatoData(pTimeType).replace("yyyy", "____").replace("MM", "__").replace("dd", "__").replace("hh", "__").replace("mm", "__").replace("ss", "__");
    return (pValue == "" || pValue == emptyDate);
}

function GetDateFromJS(pDate) {
    return getZeros(pDate.getFullYear(), 4) + "-" + getZeros(pDate.getMonth() + 1, 2) + "-" + getZeros(pDate.getDate(), 2) + "T" +
           getZeros(pDate.getHours(), 2) + ":" + getZeros(pDate.getMinutes(), 2) + ":" + getZeros(pDate.getSeconds(), 2) + ".000Z";
}

function GetImplicitDate(txt, pTimeType) {
    var ret = txt;
    var fd = GetFormatoData(pTimeType);
    var now = new Date();

    var pos = fd.indexOf("MM");
    if (pos != -1) {
        if (ret.substring(pos, pos + 2) == "__") {
            ret = ret.substring(0, pos) + getZeros(now.getMonth() + 1, 2) + ret.substring(pos + 2);
        }
    }
    pos = fd.indexOf("yyyy");
    if (pos != -1) {
        if (ret.substring(pos, pos + 4) == "____") {
            ret = ret.substring(0, pos) + getZeros(now.getFullYear(), 4) + ret.substring(pos + 4);
        }
    }
    pos = fd.indexOf("hh");
    if (pos != -1) {
        if (ret.substring(pos, pos + 2) == "__") {
            ret = ret.substring(0, pos) + "00" + ret.substring(pos + 2);
        }
    }
    pos = fd.indexOf("mm");
    if (pos != -1) {
        if (ret.substring(pos, pos + 2) == "__") {
            ret = ret.substring(0, pos) + "00" + ret.substring(pos + 2);
        }
    }
    pos = fd.indexOf("ss");
    if (pos != -1) {
        if (ret.substring(pos, pos + 2) == "__") {
            ret = ret.substring(0, pos) + "00" + ret.substring(pos + 2);
        }
    }
    if (ret.indexOf("_") == -1) {
        return ret;
    } else {
        return txt;
    }
}

function GetValidDate(txt, pTimeType, pIsCtb) {
    if (txt.indexOf("_") == -1) {
        var fd = GetFormatoData(pTimeType);
        var sDia = '0'; var sMes = '0'; var sAno = '0';
        var sHor = '0'; var sMin = '0'; var sSeg = '0';
        var cf = ''; var cd = '';
        for (var i = 0; i < txt.length; i++) {
            cf = fd.substring(i, i + 1);
            cd = txt.substring(i, i + 1);
            if (cf == 'd')
                sDia += cd;
            if (cf == 'M')
                sMes += cd;
            if (cf == 'y')
                sAno += cd;
            if (cf == 'h')
                sHor += cd;
            if (cf == 'm')
                sMin += cd;
            if (cf == 's')
                sSeg += cd;
        }

        var iAno = parseInt(sAno, 10);
        var iMes = parseInt(sMes, 10);
        var iDia = parseInt(sDia, 10);
        var iHor = parseInt(sHor, 10);
        var iMin = parseInt(sMin, 10);
        var iSeg = parseInt(sSeg, 10);
        if (iAno >= 1700 && iAno <= 2099) {
            var dt = new Date(iAno, iMes - 1, iDia, iHor, iMin, iSeg, 0);
            if ((iAno == dt.getFullYear()) && (iMes == dt.getMonth() + 1) && (iDia == dt.getDate())) {
                if (pIsCtb) {
                    return getZeros(iAno, 4) + "-" + getZeros(iMes, 2) + "-" + getZeros(iDia, 2);
                }
                return dt;
            }
            if (pIsCtb && (iMes == 0 || (iMes >= 13 && iMes <= 17)) && (iDia >= 1 && iDia <= 31)) {
                return getZeros(iAno, 4) + "-" + getZeros(iMes, 2) + "-" + getZeros(iDia, 2);
            }
        }
    }
    return -1;
}

// ************************************
// FUNCOES HORAs
// ************************************
function tryToGetTime(n) {
    var sVal1 = '0';
    var sVal2 = '0';
    var iNdx = 1;
    var p = '' + n;
    var ch = '';
    for (i = 0; i < p.length; i++) {
        ch = p.substring(i, i + 1);
        if (ch >= '0' && ch <= '9') {
            if (iNdx == 1) { sVal1 += ch };
            if (iNdx == 2) { sVal2 += ch };
        } else if (ch == ':') {
            iNdx++;
        }
    }
    var iHor = parseInt(sVal1, 10);
    var iMin = parseInt(sVal2, 10);;

    var fh = 'hh:mm';
    fh = fh.replace('hh', getZeros(iHor, 2));
    fh = fh.replace('mm', getZeros(iMin, 2));

    if (GetValidTime(fh) == -1) {
        fh = 'hh:mm';
        var dt = new Date();
        fh = fh.replace('hh', getZeros(dt.getHours(), 2));
        fh = fh.replace('mm', getZeros(dt.getMinutes(), 2));
    }
    return fh;
}

function FormatTime(txt) {
    var fh = 'hh:mm';
    var sh = ':';
    var mVal = ReplaceAll(txt, sh, '') + '_____________';
    var mRet = '';
    var cf = ''; var cd = '';
    var ndxd = 0; ndxf = 0;
    while (ndxf < 5) {
        cf = fh.substring(ndxf, ndxf + 1);
        cd = mVal.substring(ndxd, ndxd + 1);

        ndxf++;
        if (cf == sh) {
            mRet += sh;
        } else {
            mRet += cd;
            ndxd++;
        }
    }
    return mRet;
}

function IsEmptyHour(pValue) {
    var emptyHour = "__:__";
    return (pValue == "" || pValue == emptyHour);
}

function GetValidTime(txt) {
    var fd = 'hh:mm';
    var sHor = ''; var sMin = '';
    var cf = ''; var cd = '';
    for (var i = 0; i < 5; i++) {
        cf = fd.substring(i, i + 1);
        cd = txt.substring(i, i + 1);
        if (cf == 'h')
            sHor += cd;
        if (cf == 'm')
            sMin += cd;
    }

    if (sHor.indexOf(' ') == -1 && sHor.indexOf('_') == -1 && sMin.indexOf(' ') == -1 && sMin.indexOf('_') == -1) {
        var iHor = parseInt(sHor, 10);
        var iMin = parseInt(sMin, 10);
        if (iHor >= 0 && iHor <= 23) {
            if (iMin >= 0 && iMin <= 59) {
                return getZeros(iHor, 2) + ':' + getZeros(iMin, 2);
            }
        }
    }
    return -1;
}

// ************************************
// FUNCOES CUSTOMs
// ************************************
function openCustom(el, pSubTypeObj, pParams) {
    showComponHelper(true);

    pSubTypeObj.parent = el;
    myCompWS.EtiBase.HelperObj.innerHTML = '<div class="divEtiCombo" id="idDivEtiCustom" style="width: auto; height: auto;"></div>';

    pSubTypeObj.setComponentHelper(el.value, pParams, myCompWS.EtiBase.PressedKey);
    myCompWS.EtiBase.PressedKey = '';
    myCompWS.EtiBase.HelperObj.style.width = 'auto';
    myCompWS.EtiBase.HelperObj.style.height = 'auto';
    var rect = el.getBoundingClientRect();
    myCompWS.EtiBase.HelperObj.style.top = (rect.top + el.offsetHeight + window.pageYOffset) + 'px';
    myCompWS.EtiBase.HelperObj.style.left = (rect.left) + 'px';

    ajustaLimites(myCompWS.EtiBase.HelperObj, 'idDivEtiCustom');
    pSubTypeObj.setFocus();
}

// ************************************
// FUNCOES COMBOSs
// ************************************
function IsValueEqualDesc(pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay) {
    if (pColunaValor == "0") {
        if (pCampoValor == pCampoDisplay) {
            return true;
        }
    } else {
        if (pColunaValor == pColunaDisplay) {
            return true;
        }
    }
    return false;
}

function GetPressedKey(pKey, pShift) {
    if (pKey >= 65 && pKey <= 90) {
        if (pShift) {
            return String.fromCharCode(pKey).toLocaleUpperCase();
        } else {
            return String.fromCharCode(pKey).toLocaleLowerCase();
        }
    } else if ((pKey >= 48 && pKey <= 57) || (pKey >= 96 && pKey <= 105)) {
        return String.fromCharCode(pKey);
    } else {
        return "";
    }
}

function RefreshColKeys(pId, pColunaValor, pColunaDisplay, pNewColunaValor, pNewColunaDisplay) {
    if (pId != "") {
        if ((pColunaValor + "-" + pColunaDisplay) != (pNewColunaValor + "-" + pNewColunaDisplay)) {
            $("#" + pId).trigger("refreshColKeys", { colunaValor: parseInt(pNewColunaValor, 10), colunaDisplay: parseInt(pNewColunaDisplay, 10) });
        }
    }
}

function PopulateDataCache(pComboId, pTipoLista, pBaseLista, pListParam, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, pCaption, pWidth, pCallBack) {
    if (pTipoLista == 'FIX') {
        var arrValues = pBaseLista.split(";");
        var numValues = arrValues.length;
        if (numValues > 1) {
            if (arrValues[numValues - 1] == "") {
                numValues--;
            }
        }

        var myRows = [];
        var myCols = [];
        var myColValue = 1;
        var myColDisplay = 1;

        var blnTowCols = true;
        for (var i = 0; i < numValues; i++) {
            if (arrValues[i].indexOf("|") == -1) {
                blnTowCols = false;
            }
        }
        if (blnTowCols) {
            var arrLins = [];
            for (var i = 0; i < numValues; i++) {
                arrLins = arrValues[i].split("|");
                myRows.push({ c1: arrLins[0], c2: arrLins[1] })
            }
            if (IsValueEqualDesc(pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay)) {
                myCols.push({ key: "c1", headerText: getMsgTranslated("admin", "Código"), width: 20, editor: { type: "text" } });
                myCols.push({ key: "c2", headerText: getMsgTranslated("admin", "Descrição"), width: 80, editor: { type: "text" } });
                myColDisplay = 1;
            } else {
                myCols.push({ key: "c1", headerText: getMsgTranslated("admin", "Código"), hidden: true, width: 0, editor: { type: "text" } });
                myCols.push({ key: "c2", headerText: getMsgTranslated("admin", "Descrição"), width: 100, editor: { type: "text" } });
                myColDisplay = 2;
            }
        } else {
            myCols.push({ key: "c1", headerText: getMsgTranslated("admin", "Código"), width: 100, editor: { type: "text" } });
            for (var i = 0; i < numValues; i++) {
                myRows.push({ c1: arrValues[i] })
            }
        }

        if (pColunaValor != 0 && pColunaDisplay != 0) {
            myColValue = pColunaValor;
            myColDisplay = pColunaDisplay;
        }

        var data = {
            rows: myRows,
            config: { widthMode: '%', orderable: true, filterable: true, filterVisible: true, resizable: true },
            popupMenu: false,
            colunaValor: myColValue,
            colunaDisplay: myColDisplay,
            cols: myCols
        }

        MyShell().ListCaching.AddListInCache(pBaseLista, pListParam, pCacheKey, data);

        myCompWS.EtiCombo.SelColunaValor = data.colunaValor;
        myCompWS.EtiCombo.SelColunaDisplay = data.colunaDisplay;
        RefreshColKeys(pComboId, pColunaValor, pColunaDisplay, data.colunaValor, data.colunaDisplay);

        pCallBack(data);
    } else if (pTipoLista == 'SVC') {
        var svcUrl = pBaseLista;
        if (svcUrl.substring(0, 5) == "/api/") {
            svcUrl = pBaseLista.replace("/api/", myCompWS.hostBase + "api/");
        }
        $.ajax({
            url: svcUrl,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            cache: false,
            async: false,
            success: function (data) {
                if (data.colunaValor == '0' && data.colunaDisplay == '0') {
                    alert('Development Error:\n\nPar (ColunaValor, ColunaDisplay) ou (CampoValor, CampoDisplay) mal definidos!\n\nDetalhe\nTipoLista: "' + pTipoLista + '"\nBaseLista: "' + pBaseLista + '"');
                    myCompWS.EtiCombo.SelColunaValor = 1;
                    myCompWS.EtiCombo.SelColunaDisplay = 1;
                    RefreshColKeys(pComboId, pColunaValor, pColunaDisplay, 1, 1);
                } else {
                    myCompWS.EtiCombo.SelColunaValor = data.colunaValor;
                    myCompWS.EtiCombo.SelColunaDisplay = data.colunaDisplay;
                    RefreshColKeys(pComboId, pColunaValor, pColunaDisplay, data.colunaValor, data.colunaDisplay);
                }
                MyShell().ListCaching.AddListInCache(pBaseLista, pListParam, pCacheKey, data);

                pCallBack(data);
            },
            error: function (d) {
                showErrorAjax(d);
            }
        });
    } else {
        $.ajax({
            url: myCompWS.hostBase + "api/Data/GetComboValues",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ tipoLista: pTipoLista, baseLista: pBaseLista, parameters: eval(pListParam), colunaValor: pColunaValor, colunaDisplay: pColunaDisplay, campoValor: pCampoValor, campoDisplay: pCampoDisplay, caption: pCaption }),
            cache: false,
            async: false,
            success: function (data) {
                if (data.colunaValor == '0' && data.colunaDisplay == '0') {
                    alert('Development Error:\n\nPar (ColunaValor, ColunaDisplay) ou (CampoValor, CampoDisplay) mal definidos!\n\nDetalhe\nTipoLista: "' + pTipoLista + '"\nBaseLista: "' + pBaseLista + '"');
                    myCompWS.EtiCombo.SelColunaValor = 1;
                    myCompWS.EtiCombo.SelColunaDisplay = 1;
                } else {
                    myCompWS.EtiCombo.SelColunaValor = data.colunaValor;
                    myCompWS.EtiCombo.SelColunaDisplay = data.colunaDisplay;
                    RefreshColKeys(pComboId, pColunaValor, pColunaDisplay, data.colunaValor, data.colunaDisplay);
                    data.config.widthMode = 'px';

                    var intTotalWidth = 0;
                    for (var i = 0; i < data.cols.length; i++) {
                        if (!(data.cols[i].hidden === true || data.cols[i].grouped === true)) {
                            if (!data.cols[i].width) {
                                data.cols[i].width = 10;
                            }
                            intTotalWidth += data.cols[i].width;
                        }
                    }
                    if (intTotalWidth > pWidth * 1.1) {
                        data.config.horizontalScrollBar = true;
                    } else {
                        data.config.widthMode = '%';
                        var intNewTotalWidth = 0;
                        var intNewWidth = 0;
                        var lastIndex = 0;
                        for (var i = 0; i < data.cols.length; i++) {
                            if (!(data.cols[i].hidden === true || data.cols[i].grouped === true)) {
                                intNewWidth = parseInt(data.cols[i].width * (100 / intTotalWidth), 10);
                                intNewTotalWidth += intNewWidth;
                                data.cols[i].width = intNewWidth;
                                lastIndex = i;
                            }
                        }
                        if (intNewTotalWidth != 100) {
                            data.cols[lastIndex].width += (100 - intNewTotalWidth);
                        }
                    }
                }
                MyShell().ListCaching.AddListInCache(pBaseLista, pListParam, pCacheKey, data);

                pCallBack(data);
            },
            error: function (d) {
                showErrorAjax(d);
            }
        });
    }
}

function GetStringified(pValue) {
    if ((typeof pValue) == "string") {
        return pValue;
    } else {
        return JSON.stringify(pValue);
    }
}

function GetValued(pValue) {
    if (typeof pValue == 'string') {
        return eval("(" + pValue + ")");
    } else {
        return pValue;
    }
}

function GetComponentValue(pComp) {
    var myVal = pComp.getAttribute("value");
    if (myVal == null) {
        return $(pComp).val();
    } else {
        return myVal;
    }
}

function tryDisabledCaches(el, elValue, t, hasInactives, pTipoLista, pBaseLista, pListParam, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, pWidth) {
    if (!hasInactives || HasKeyDisabled(pListParam)) {
        fireValue(el, elValue, "", false);
    } else {
        var myParamWithDis = IncExclKeyDisabled(pListParam, true, false);
        var myListInCache = MyShell().ListCaching.GetListInCache(pBaseLista, myParamWithDis, t.cacheKey, false);
        if (myListInCache) {
            var myItemInCache = MyShell().ListCaching.GetItemInCache(pBaseLista, myParamWithDis, t.cacheKey, elValue);
            if (myItemInCache) {
                t.colunaValor = myItemInCache.colunaValor;
                t.colunaDisplay = myItemInCache.colunaDisplay;
                fireValue(el, myItemInCache.valorCode, myItemInCache.valorDisplay, false);
            } else {
                fireValue(el, elValue, "", false);
            }
        } else {
            PopulateDataCache(el.id, pTipoLista, pBaseLista, myParamWithDis, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, '', pWidth,
            function (data) {
                var myItemInCache = MyShell().ListCaching.GetItemInCache(pBaseLista, myParamWithDis, pCacheKey, elValue);
                if (myItemInCache) {
                    t.colunaValor = myItemInCache.colunaValor;
                    t.colunaDisplay = myItemInCache.colunaDisplay;
                    fireValue(el, myItemInCache.valorCode, myItemInCache.valorDisplay, false);
                } else {
                    fireValue(el, elValue, "", false);
                }
            });
        }
    }
}

function SetComboValue(el, elValue, t, byUser) {
    if (!elValue)
        if (elValue !== 0 && elValue !== '0')
            elValue = '';

    if (elValue === "") {
        fireValue(el, "", "", false);

    } else if (!t.comboValidated) {
        fireValue(el, elValue, elValue, false);

    } else if (!byUser && IsValueEqualDesc(t.colunaValor, t.colunaDisplay, t.campoValor, t.campoDisplay)) {
        fireValue(el, elValue, elValue, false);

    } else {
        var myBaseLista = ReplaceAll('' + t.baseLista, "'", '"');

        var myListInCache = MyShell().ListCaching.GetListInCache(myBaseLista, t.listParam, t.cacheKey, false);
        if (myListInCache) {
            var myItemInCache = MyShell().ListCaching.GetItemInCache(myBaseLista, t.listParam, t.cacheKey, elValue);
            if (myItemInCache) {
                t.colunaValor = myItemInCache.colunaValor;
                t.colunaDisplay = myItemInCache.colunaDisplay;
                fireValue(el, myItemInCache.valorCode, myItemInCache.valorDisplay, false);
            } else {
                tryDisabledCaches(el, elValue, t, myListInCache.hasInactives, t.tipoLista, myBaseLista, t.listParam, t.colunaValor, t.colunaDisplay, t.campoValor, t.campoDisplay, t.cacheKey, t.width);
            }
        } else {
            PopulateDataCache(el.id, t.tipoLista, myBaseLista, t.listParam, t.colunaValor, t.colunaDisplay, t.campoValor, t.campoDisplay, t.cacheKey, '', t.width,
                function (data) {
                    var myItemInCache = MyShell().ListCaching.GetItemInCache(myBaseLista, t.listParam, t.cacheKey, elValue);
                    if (myItemInCache) {
                        t.colunaValor = myItemInCache.colunaValor;
                        t.colunaDisplay = myItemInCache.colunaDisplay;
                        fireValue(el, myItemInCache.valorCode, myItemInCache.valorDisplay, false);
                    } else {
                        tryDisabledCaches(el, elValue, t, data.hasInactives, t.tipoLista, myBaseLista, t.listParam, t.colunaValor, t.colunaDisplay, t.campoValor, t.campoDisplay, t.cacheKey, t.width);
                    }
                });
        }
    }
}

function getComboEncode(pExpr, pEncode) {
    if (pEncode) {
        return ReplaceAll(ReplaceAll(ReplaceAll("" + pExpr, "'", "ch#39ch"), '"', "ch#34ch"), "\n", "");
    } else {
        return ReplaceAll(ReplaceAll("" + pExpr, "ch#39ch", "'"), 'ch#34ch', '"');
    }
}

function HasKeyDisabled(pListParam) {
    return (pListParam.indexOf(myCompWS.EtiCombo.KeyIncludeDisabled) != -1);
}

function IncExclKeyDisabled(pListParam, pInclude, pEncode) {
    var myKeyDis = myCompWS.EtiCombo.KeyIncludeDisabled;
    if (pEncode) {
        myKeyDis = getComboEncode(myKeyDis, true);
    }
    var strRet = pListParam;
    if (pInclude) {
        if (strRet == "") {
            strRet = "[" + myKeyDis + "]";
        } else {
            if (strRet.indexOf(myKeyDis) == -1) {
                strRet = strRet.replace("]", "") + "," + myKeyDis + "]";
            }
        }
    } else {
        if (strRet.indexOf(myKeyDis) != -1) {
            if (strRet.length > myKeyDis.length + 6) {
                strRet = strRet.replace("," + myKeyDis, "");
            } else {
                strRet = "";
            }
        }
    }
    return strRet;
}

function refreshCombo(pComboId, pTipoLista, pBaseLista, pListParam, pCaption, pWidth, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey) {
    if ($("#idEtiComboInclInactives").css('visibility') == 'visible') {
        if ($("#chkEtiComboIncDisabled").prop("checked")) {
            pListParam = IncExclKeyDisabled(pListParam, true, true);
        } else {
            pListParam = IncExclKeyDisabled(pListParam, false, true);
        }
    }

    SetComboTable(pComboId, pTipoLista, getComboEncode(pBaseLista, false), getComboEncode(pListParam, false), pCaption, pWidth, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, true);
    return false;
}

function toogleComboInactives(pComboId, pTipoLista, pBaseLista, pListParam, pCaption, pWidth, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey) {
    if ($("#chkEtiComboIncDisabled").prop("checked")) {
        pListParam = IncExclKeyDisabled(pListParam, true, true);
    } else {
        pListParam = IncExclKeyDisabled(pListParam, false, true);
    }
    SetComboTable(pComboId, pTipoLista, getComboEncode(pBaseLista, false), getComboEncode(pListParam, false), pCaption, pWidth, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, false);
    return true;
}

function openCombo(el, pPosiciona, pPosicionaValor, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, pValidated, pTipoLista, pBaseLista, pListParam, pCaption, pWidth) {
    showComboHelper(false);
    var strMyParams = "'" + el.id + "','" + pTipoLista + "','" + getComboEncode(pBaseLista, true) + "','" + getComboEncode(pListParam, true) + "','" + pCaption + "','" + pWidth + "','" + pColunaValor + "','" + pColunaDisplay + "','" + pCampoValor + "','" + pCampoDisplay + "','" + pCacheKey + "'";
    myCompWS.EtiCombo.HelperObj.innerHTML = '<div class="divEtiCombo" id="idDivEtiCombo"><div id="GrdCmbEtiPopup" style="width: ' + pWidth + 'px; height: 300px;"></div>' +
                                            '<div id="idEtiComboInclInactives" style="float: left; visibility: hidden"><label class="checkbox-label"><input id="chkEtiComboIncDisabled" type="checkbox" onclick="return toogleComboInactives(' + strMyParams + ');"><span> ' + getMsgTranslated("Admin", "Incluir Inativos") + '</span></label></div>' +
                                            '<div style="float: right; visibility: ' + (pTipoLista == 'FIX' ? 'hidden' : 'visible') + ';"><a href="." onclick="return refreshCombo(' + strMyParams + ');"><img src="' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiComboRefresh.png" /></a></div>' +
                                            '<div style="clear: both;"></div>' +
                                           '</div>';

    myCompWS.EtiCombo.HelperObj.style.id = 'divEtiCombo';
    myCompWS.EtiCombo.HelperObj.style.width = pWidth + 'px';
    myCompWS.EtiCombo.HelperObj.style.height = '300px';
    var rect = el.getBoundingClientRect();
    myCompWS.EtiCombo.HelperObj.style.top = (rect.top + el.offsetHeight + window.pageYOffset) + 'px';
    myCompWS.EtiCombo.HelperObj.style.left = (rect.left) + 'px';

    myCompWS.EtiCombo.SelectedObj = el;
    myCompWS.EtiCombo.SelColunaValor = parseInt(pColunaValor, 10);
    myCompWS.EtiCombo.SelColunaDisplay = parseInt(pColunaDisplay, 10);
    myCompWS.EtiCombo.SelValidated = pValidated;
    myCompWS.EtiCombo.Posiciona = pPosiciona;
    myCompWS.EtiCombo.PosicionaValor = pPosicionaValor;
    SetComboTable(el.id, pTipoLista, pBaseLista, pListParam, pCaption, pWidth, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, false);
}

function applyData(data) {
    showComboHelper(true);
    $("#idEtiComboInclInactives").css({ visibility: (data.showInactives ? 'visible' : 'hidden') });
    $("#GrdCmbEtiPopup").etiGrid(data);
    $("#GrdCmbEtiPopup").on("etiRowSelected", function (evt, ui) {
        if (myCompWS.EtiCombo.SelValidated) {
            var strComboValDisplay = ui.row["c" + myCompWS.EtiCombo.SelColunaDisplay];
            var strComboValValue = ui.row["c" + myCompWS.EtiCombo.SelColunaValor];
            fireValue(myCompWS.EtiCombo.SelectedObj, strComboValValue, strComboValDisplay, true);
        } else {
            var strComboValDisplay = ui.row["c" + myCompWS.EtiCombo.SelColunaDisplay];
            fireValue(myCompWS.EtiCombo.SelectedObj, strComboValDisplay, strComboValDisplay, true);
        }
        hideComboHelper();
        $(myCompWS.EtiCombo.SelectedObj).trigger("update");
        $(myCompWS.EtiCombo.SelectedObj).trigger("blur");
        myCompWS.EtiCombo.SelectedObj.focus();
    });
    $("#GrdCmbEtiPopup").on("etiGridEscaped", function (evt, ui) {
        hideComboHelper();
        myCompWS.EtiCombo.SelectedObj.focus();
    });

    ajustaLimites(myCompWS.EtiCombo.HelperObj, 'idDivEtiCombo');
    $("#GrdCmbEtiPopup").trigger("setFilterFocus", { keyToFocus: myCompWS.EtiCombo.SelColunaDisplay, PressedKey: myCompWS.EtiBase.PressedKey });
    myCompWS.EtiBase.PressedKey = '';
}

function SetComboTable(pComboId, pTipoLista, pBaseLista, pListParam, pCaption, pWidth, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, pRefresh) {
    var myBaseLista = ReplaceAll('' + pBaseLista, "'", '"');

    if (pRefresh) {
        MyShell().ListCaching.ResetListInCache(myBaseLista, pListParam, pCacheKey);
    }

    var myDataInCache = MyShell().ListCaching.GetListInCache(myBaseLista, pListParam, pCacheKey, false);
    if (myDataInCache) {
        applyData(myDataInCache);
        myCompWS.EtiCombo.SelColunaValor = myDataInCache.colunaValor;
        myCompWS.EtiCombo.SelColunaDisplay = myDataInCache.colunaDisplay;
        RefreshColKeys(pComboId, pColunaValor, pColunaDisplay, myDataInCache.colunaValor, myDataInCache.colunaDisplay);
    } else {
        PopulateDataCache(pComboId, pTipoLista, myBaseLista, pListParam, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, pCaption, pWidth,
            function (data) {
                applyData(data);
            });
    }
}

// ************************************
// FUNCOES ERRORS
// ************************************
var blnErrorsVisible = true;

function toogleErrors() {
    blnErrorsVisible = !blnErrorsVisible;
    RefreshEtiErrors();
    return false;
}

function UpdateEtiErrors(pLstErrors) {
    myCompWS.EtiErrors.Errors = pLstErrors;
    blnErrorsVisible = true;
    RefreshEtiErrors();
}

function RemoveItemsWithId(strId) {
    for (var i = myCompWS.EtiErrors.Errors.length - 1; i >= 0; i--) {
        if (myCompWS.EtiErrors.Errors[i].htmlElementIds.length != 0) {
            for (var j = 0; j < myCompWS.EtiErrors.Errors[i].htmlElementIds.length; j++) {
                if (myCompWS.EtiErrors.Errors[i].htmlElementIds[j].toLowerCase() == strId.toLowerCase()) {
                    myCompWS.EtiErrors.Errors.splice(i, 1);
                    break;
                }
            }
        }
    }

    var arrIds = myCompWS.EtiErrors.FieldsWithError.split(",");
    for (var i = 0; i < arrIds.length; i++) {
        if (arrIds[i] != "") {
            $("#" + arrIds[i]).off('change.myshellerr');
        }
    }

    myCompWS.EtiErrors.FieldsWithError = "";

    RefreshEtiErrors();
}

function AddClassError(lstIds, intTipo) {
    for (var i = 0; i < lstIds.length; i++) {
        var strId = lstIds[i];
        $("#" + strId).addClass("etiErrorFld");
        myCompWS.EtiErrors.FieldsWithError += "," + strId;
        $("#" + strId).on('change.myshellerr', function () { RemoveItemsWithId(strId) });
    }
}

function RemoveAllErrors() {
    var lins = document.getElementsByClassName("etiErrorFld");
    for (var i = lins.length - 1; i >= 0 ; i--) {
        $("#" + lins[i].id).removeClass("etiErrorFld");
    }
}

function setTabActive(jqField) {
    var jqParent = jqField.parent();
    if (jqParent.length >= 1) {
        if ((" " + jqParent[0].className + " ").indexOf(" tab-pane ") != -1) {
            if ((" " + jqParent[0].className + " ").indexOf(" active ") == -1) {
                var strTagId = jqParent[0].id;
                if (strTagId) {
                    var lst = document.getElementsByTagName("a");
                    if (lst) {
                        for (var i = 0; i < lst.length; i++) {
                            if (lst[i].hash == "#" + strTagId) {
                                lst[i].click();
                            }
                        }
                    }
                }
            }
        }

        setTabActive(jqParent);
    }
}

function setFocusToElem(pElementFoFocus) {
    if (pElementFoFocus != "") {
        setTabActive($("#" + pElementFoFocus));
        $("#" + pElementFoFocus).focus();
    }
}

function RefreshEtiErrors() {
    if (!myCompWS.EtiErrors.ErrObj) {
        myCompWS.EtiErrors.ErrObj = document.createElement('div');
        myCompWS.EtiErrors.ErrObj.className = 'etiErrorList';
        document.body.appendChild(myCompWS.EtiErrors.ErrObj);
    }

    RemoveAllErrors();
    if (myCompWS.EtiErrors.Errors.length == 0) {
        myCompWS.EtiErrors.ErrObj.innerHTML = "";
        myCompWS.EtiErrors.ErrObj.style.display = "none";
    } else {
        var intNumErrors = 0;
        var strHtml = "";
        var strImg = "";
        var blnIncluir = true;
        var strElementFoFocus = "";

        for (var i = 0; i < myCompWS.EtiErrors.Errors.length; i++) {
            blnIncluir = false;
            if (myCompWS.EtiErrors.Errors[i].type == 1) {
                blnIncluir = blnErrorsVisible;
                strImg = "<img src='" + myCompWS.hostBase + "Imagens/EtiComponents/EtiError.png'>";
                AddClassError(myCompWS.EtiErrors.Errors[i].htmlElementIds, 1);
                intNumErrors++;
            }

            if (intNumErrors > 10) {
                blnIncluir = false;
            }
            if (blnIncluir) {
                strElementFoFocus = "";
                if (myCompWS.EtiErrors.Errors[i].htmlElementIds.length >= 1) {
                    strElementFoFocus = myCompWS.EtiErrors.Errors[i].htmlElementIds[0];
                }
                strHtml += "<div class='etiErrorListLin' onclick=\"setFocusToElem('" + strElementFoFocus + "');\">" +
                    "<div class='etiErrorListLinCellA'>" + strImg + "</div>" +
                    "<div class='etiErrorListLinCellB'>" + myCompWS.EtiErrors.Errors[i].message + "</div>" +
                    "<div style='clear: both;'></div>" +
                   "</div>";
            }
        }

        strHtml = "<div>" +
                        "<div class='etiErrorListCab'>" +
                          "<button class='etiErrorListCabBtnA' type='button' onclick='return toogleErrors();'>&nbsp;&nbsp;&nbsp;&nbsp;" + intNumErrors + " " + getMsgTranslated("Admin", "Erros") + "</button>&nbsp;&nbsp;" +
                        "</div>" +
                        strHtml +
                  "</div>";

        myCompWS.EtiErrors.ErrObj.style.zIndex = 99999;
        myCompWS.EtiErrors.ErrObj.innerHTML = strHtml;
        myCompWS.EtiErrors.ErrObj.style.display = '';
    }
}

// ************************************
// FUNCOES IGGRID
// ************************************
function IgGridAddNewRow(gridId, newItem, pPrimaryKey, pFirstEditCol, pAutoGenPrimaryKey) {

    if (pAutoGenPrimaryKey) {
        var maxPrimaryKey = 1;
        var lst = $("#" + gridId).igGrid().data("igGrid").dataSource.dataView();
        for (var i = 0; i < lst.length; i++) {
            if (lst[i][pPrimaryKey] >= maxPrimaryKey) {
                maxPrimaryKey = lst[i][pPrimaryKey] + 1;
            }
        }

        newItem[pPrimaryKey] = maxPrimaryKey;
    }

    newItem.ChangedProperties = [];
    ForceUpdateEtiComponents();
    $("#" + gridId).igGridUpdating("addRow", newItem);
    $("#" + gridId).trigger('rowAdded');

    var dataView = $("#" + gridId).igGrid().data("igGrid").dataSource.dataView();
    var dsAdded = dataView[dataView.length - 1];
    if (pFirstEditCol >= 0) {
        $("#" + gridId).igGridUpdating("startEdit", dsAdded[pPrimaryKey], pFirstEditCol);
    }
}

function IgGridDeleteRow(gridId, pPrimaryKey, pAutoGenPrimaryKey) {
    var row = $("#" + gridId).igGridSelection("selectedRow");
    if (row != null) {
        ForceUpdateEtiComponents();
        var dsFiltered = $("#" + gridId).igGrid().data("igGrid").dataSource.dataView()[row.index];
        var deletedPrimaryKey = dsFiltered[pPrimaryKey];
        $("#" + gridId).igGridUpdating("deleteRow", dsFiltered[pPrimaryKey]);
        $("#" + gridId).trigger('rowRemoved');

        if (pAutoGenPrimaryKey) {
            var maxPrimaryKey = deletedPrimaryKey - 1;
            var lst = $("#" + gridId).igGrid().data("igGrid").dataSource.dataView();
            for (var i = 0; i < lst.length; i++) {
                if (lst[i][pPrimaryKey] > maxPrimaryKey) {
                    maxPrimaryKey = lst[i][pPrimaryKey];
                }
            }

            for (var k = deletedPrimaryKey + 1 ; k <= maxPrimaryKey  ; k++) {
                for (var i = 0; i < lst.length; i++) {
                    if (lst[i][pPrimaryKey] == k) {
                        $("#" + gridId).igGridUpdating("setCellValue", k, pPrimaryKey, k - 1);
                    }
                }
            }
        }
    }
}

function IgGridsForceUpdate(gridId) {
    if ($(gridId).igGrid("option", "autoCommit")) {
        var isEditing = $(gridId).igGridUpdating("isEditing");
        if (isEditing) {
            $(gridId).igGridUpdating("endEdit", true, true);
        }
    }
}

function GetColItemDefault(pKey, pDataType, pDefaultValue, pPrimaryKey) {
    if (pPrimaryKey) {
        return pKey + ': \"AUTOMATIC\", ';
    } else if (pDataType == "date") {
        var dt = new Date();
        var strDt = getZeros(dt.getFullYear(), 4) + "-" + getZeros(dt.getMonth() + 1, 2) + "-" + getZeros(dt.getDate(), 2) + "T00:00:00";
        return pKey + ': \"' + strDt + '\", ';
    } else if (pDataType == "check") {
        if ("" + pDefaultValue == "undefined") {
            return pKey + ': 0, ';
        } else {
            return pKey + ': ' + pDefaultValue + ', ';
        }
    } else if (pDataType == "number") {
        if ("" + pDefaultValue == "undefined") {
            return pKey + ': 0, ';
        } else {
            return pKey + ': ' + pDefaultValue + ', ';
        }
    } else {
        if ("" + pDefaultValue == "undefined") {
            return pKey + ': \"\", ';
        } else {
            return pKey + ': \"' + pDefaultValue + '\", ';
        }
    }
}

function GetColSettingsUpd(pKey, pDataType, pAlign, pDecimalPlaces, pEditor) {
    var ret = '';
    var strEditorOpts = '';
    var strDisabled = 'Y';

    if (pEditor && pEditor.readOnly) {
        strEditorOpts = ', editorProvider: getEtiIgEditorProvider(), editorOptions: { etieditortype: "text", disabled: "Y"';
        if (pAlign) {
            strEditorOpts += ', align: "' + pAlign + '"';
        } else {
            strEditorOpts += ', align: "left"';
        }
        strEditorOpts += '}';
    } else if (pDataType == "date") {
        strEditorOpts = ', editorProvider: getEtiIgEditorProvider(), editorOptions: { etieditortype: "date", allownulls: "' + (pEditor.allowNulls ? 'Y' : 'N') + '" }';
    } else if (pDataType == "check") {
        strEditorOpts = '';
    } else if (pDataType == "number") {
        strEditorOpts = ', editorProvider: getEtiIgEditorProvider(), editorOptions: { etieditortype: "number", ' +
                            'decimalplaces: ' + (pDecimalPlaces ? pDecimalPlaces : 0) + ', ' +
                            'groupseparator: "' + (pEditor.groupSeparator ? 'Y' : 'N') + '" , maxvalue: ' + pEditor.max + ', minvalue: ' + pEditor.min + '}';
    } else if (pEditor && pEditor.combo) {
        var sListParamValues = "";
        if (pEditor.listParamValues)
            sListParamValues = GetStringified(pEditor.listParamValues);
        strEditorOpts = ', editorProvider: getEtiIgEditorProvider(), editorOptions: { etieditortype: "combo", ' +
                            "listtype: '" + pEditor.listType + "', listparam: '" + pEditor.listParam + "', listparamvalues: '" + sListParamValues + "', " +
                            'valuecol: "' + pEditor.valueCol + '", displaycol: "' + pEditor.displayCol + '", ' +
                            'valuefield: "", displayfield: "", ' +
                            'validated: "' + (pEditor.validated ? 'Y' : 'N') + '" }';
    } else {
        strEditorOpts = ', editorProvider: getEtiIgEditorProvider(), editorOptions: { etieditortype: "text", disabled: "N"';
        if (pEditor.maxLength) {
            strEditorOpts += ', maxlength: ' + pEditor.maxLength;
        } else {
            strEditorOpts += ', maxlength: 5';
        }
        if (pAlign) {
            strEditorOpts += ', align: "' + pAlign + '"';
        } else {
            strEditorOpts += ', align: "left"';
        }
        strEditorOpts += ' }';
    }

    ret += '{ columnKey: "' + pKey + '"' + strEditorOpts + ' }, ';
    return ret;
}

function GetColSettingsFlt(pKey, pPrimaryKey, pEditor) {
    var ret = '';

    if (pPrimaryKey) {
        ret += '{columnKey: "' + pKey + '" , allowFiltering: false},';
    } else if (!IsValueEqualDesc(pEditor.valueCol, pEditor.displayCol, pEditor.valueField, pEditor.displayField)) {
        ret += '{columnKey: "' + pKey + '" , allowFiltering: false},';
    }

    return ret;
}

function GetFirstColOrder(pPrimaryKey) {
    if (pPrimaryKey == '') {
        return '';
    } else {
        return ', columnSettings: [ { columnKey: "' + pPrimaryKey + '" , currentSortDirection: "ascending" }]';
    }
}

function FormatCombo(pValue, pTipoLista, pBaseLista, pParameters, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey) {
    if (!pValue) {
        pValue = '';
    }
    if (pValue == '' || pValue == '0') {
        return "";

    } else {
        var myBaseLista = ReplaceAll('' + pBaseLista, "'", '"');

        var myListInCache = MyShell().ListCaching.GetListInCache(myBaseLista, pParameters, pCacheKey, false);
        if (myListInCache) {
            var myItemInCache = MyShell().ListCaching.GetItemInCache(myBaseLista, pParameters, pCacheKey, pValue);
            if (myItemInCache) {
                return myItemInCache.valorDisplay;
            } else {
                return "";
            }
        } else {
            var ret = "";
            PopulateDataCache("", pTipoLista, myBaseLista, pParameters, pColunaValor, pColunaDisplay, pCampoValor, pCampoDisplay, pCacheKey, '', 500,
                function (data) {
                    var myItemInCache = MyShell().ListCaching.GetItemInCache(myBaseLista, pParameters, pCacheKey, pValue);
                    ret = myItemInCache.valorDisplay;
                });
            return ret;
        }
    }
    return "";
}

function GetColData(pHeaderText, pKey, pHidden, pDataType, pDecimalPlaces, pWidth, pAlign, pEditor) {
    var sTemplate = "";
    if (pAlign) {
        if (pAlign == 'right') {
            sTemplate = ', template: "<div style=' + "'" + 'text-align: right' + "'" + '>${' + pKey + '}</div>"';

        } else if (pAlign == 'center') {
            sTemplate = ', template: "<div style=' + "'" + 'text-align: center' + "'" + '>${' + pKey + '}</div>"';
        }
    }

    var sDataType = "";
    if (pDataType == "number") {
        if (!pDecimalPlaces) {
            sDataType = ', dataType: "number"';
        } else {
            sDataType = ', dataType: "number", formatter: function (val) { return FormatNumber(val, ' + pDecimalPlaces + ', true); }';
        }

    } else if (pDataType == "date") {
        sDataType = ', dataType: "date", format: "' + GetFormatoData() + '", formatter: function (val) { if (val) return (new Date(val)).toLocaleDateString(); else return ""; }';

    } else if (pDataType == "check") {
        sDataType = ', dataType: "bool"';

    } else {
        sDataType = ', dataType: "string"';
        if (pEditor) {
            if (pEditor.combo) {
                if (pEditor.validated) {
                    if (!IsValueEqualDesc(pEditor.valueCol, pEditor.displayCol, pEditor.valueField, pEditor.displayField)) {
                        var sListParamValues = "";
                        if (pEditor.listParamValues)
                            sListParamValues = GetStringified(pEditor.listParamValues);
                        sDataType = ", dataType: 'combo', formatter: function (val) { return FormatCombo(val, '" + pEditor.listType + "', '" + pEditor.listParam + "', '" + sListParamValues + "', '" + pEditor.valueCol + "', '" + pEditor.displayCol + "', '" + pEditor.valueField + "', '" + pEditor.displayField + "', ''); }";
                    }
                }
            }
        }
    }
    var sHidden = '';
    if (pHidden) {
        sHidden = ', hidden: true';
    }

    return '{ headerText: "' + pHeaderText + '", key: "' + pKey + '"' + sDataType + sHidden + ', width: "' + pWidth + 'px"' + sTemplate + ' },';
}

!function ($) {

    // ************************************
    // COMPONENTE TEXT
    // ************************************

    var EtiText = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            dblclick: $.proxy(this.dblclick, this),
            selectstart: $.proxy(this.selectstart, this),
            change: $.proxy(this.change, this),
            update: $.proxy(this.update, this),
            drop: $.proxy(this.drop, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            paste: $.proxy(this.paste, this),
            cut: $.proxy(this.cut, this),
            blur: $.proxy(this.blur, this),
            mouseover: $.proxy(this.mouseover, this),
            mouseout: $.proxy(this.mouseout, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keyup: $.proxy(this.keyup, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));
        GetParentProps(self);

        self.maxLen = 5;
        var sMaxLen = self.element.data('eti-maxlength');
        if (sMaxLen) {
            self.maxLen = parseInt(sMaxLen, 10);
        }

        self.mask = "";
        var sMask = self.element.data('eti-mask');
        if (sMask) {
            self.mask = sMask;
        }

        self.pHolder = '';
        if (self.element.data('eti-placeholder')) {
            self.pHolder = self.element.data('eti-placeholder');
            self.element.attr('placeholder', self.pHolder);
            self.element.addClass('etiCompPlaceholder');
        }

        self.clickFn = '';
        var sClick = self.element.data('eti-click');
        if (sClick) {
            self.clickFn = sClick;
        }

        var sAlign = self.element.data('eti-align');
        if (!sAlign) {
            sAlign = 'left';
        }

        var myValue = GetComponentValue(self.elementIn);
        fireValue(element, myValue, myValue, false);

        SetUiDisabled(self);

        self.normalCss = true;
        self.css = { 'white-space': 'nowrap', overflow: 'hidden', 'text-align': sAlign };
        if (self.parentGrid) {
            self.css.height = '22px';
        }
        if (self.clickFn) {
            self.css['text-decoration'] = 'underline';
        }
        self.element.css(self.css);

        self.selectorVisible = false;
        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
        SetCompTitle(self.element);
        self.initValue = self.elementIn.textContent;
    };

    EtiText.prototype = {
        constructor: EtiText,

        change: function (e, valueBag) {
            e.uiChange = (valueBag === true);
        },

        update: function (e, parent) {
            //Não Retirar
        },

        drop: function (e, ui) {
            e.preventDefault();
        },

        dblclick: function (e) {
            var self = this;
            if (self.parentGrid) {
                removeSelectionVis(self, true);
                $("#" + self.parentGrid).trigger("griddblclick");
            }
        },

        selectstart: function (e) {
            var self = this;
            removeSelectionVis(self, false);
        },

        mouseover: function (e) {
            var self = this;
            if (self.clickFn) {
                setPointerHand(self.elementIn, true);
            }
        },

        mouseout: function (e) {
            var self = this;
            if (self.clickFn) {
                setPointerHand(self.elementIn, false);
            }
        },

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
            if (self.clickFn) {
                setPointerHand(self.elementIn, false);
                if (self.clickFn.indexOf("{") != -1 && self.clickFn.indexOf("}") != -1 && self.parentGrid) {
                    $("#" + self.parentGrid).trigger("gridLabelClick", { child: self.elementIn.id, fn: self.clickFn });
                } else {
                    eval(self.clickFn);
                }
            }
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                if (self.clickFn) {
                    setPointerHand(self.elementIn, false);
                }
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                if (self.elementIn.textContent != "") {
                    if (self.mask) {
                        setCursorPosition(self.elementIn, 0);
                    } else if (isGridCell(self.parentGrid, self.elementIn.id)) {
                        setCursorPosition(self.elementIn);
                    }
                }
            }
        },

        paste: function (e) {
            var self = this;
            if (self.disabled || self.locked) {
                e.preventDefault();
            }
        },

        cut: function (e) {
            var self = this;
            if (self.disabled || self.locked) {
                e.preventDefault();
            }
        },

        blur: function (e) {
            var self = this;
            self.selectorVisible = false;
            if (self.initValue != self.elementIn.textContent) {
                if (self.maxLen && self.elementIn.textContent.length > self.maxLen) {
                    self.elementIn.textContent = self.elementIn.textContent.substring(0, self.maxLen);
                }
                self.elementIn.value = self.elementIn.textContent;
                self.initValue = self.elementIn.textContent;
                SetCompTitle(self.element);
                $("#" + self.elementIn.id).trigger("update");
                $("#" + self.elementIn.id).trigger("change", true);
                if (self.parentGrid) {
                    fireValueToParent(self);
                }
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        SetUiDisabled(self);
                    }
                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }
                } else if (ui.name == "placeholder") {
                    if (self.pHolder != ui.value) {
                        self.pHolder = ui.value;
                        self.element.attr('placeholder', self.pHolder);
                        if (self.pHolder) {
                            if (!self.element.hasClass('etiCompPlaceholder')) {
                                self.element.addClass('etiCompPlaceholder');
                            }
                        } else {
                            if (self.element.hasClass('etiCompPlaceholder')) {
                                self.element.removeClass('etiCompPlaceholder');
                            }
                        }
                    }
                }
            }
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                self.elementIn.textContent = self.elementIn.value;
                self.initValue = self.elementIn.textContent;
                SetCompTitle(self.element);
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, '');
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.textContent = "";
            self.initValue = "";
        },

        keyup: function (e) {
            var self = this;
            if (!self.disabled && !self.locked) {
                if (self.elementIn.value != self.elementIn.textContent) {
                    self.elementIn.value = self.elementIn.textContent;
                }
            }
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;
            var iPosIni = getCursorPosition(self.elementIn, 0);
            var iPosFim = getCursorPosition(self.elementIn, 1);
            var strVal = self.elementIn.value;
            var strValIni = strVal.substring(0, iPosIni);
            var strValFim = strVal.substring(iPosFim);

            if ((!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'NUMKEYS')) || (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'ALFAKEYS'))) {
                if (self.mask) {
                    if (iPosIni < self.mask.length) {
                        if (iPosIni == iPosFim) {
                            strValFim = strValFim.substring(1);
                        }
                        var newValueA = ReplaceAll(strValIni + e.char + strValFim, "_", " ");
                        var newValueB = GetMaskString(newValueA, self.mask);
                        if (newValueA != newValueB) {
                            if (strVal == self.initValue) {
                                newValueA = newValueB;
                            }
                        }
                        if (newValueA == newValueB) {
                            fireValue(self.elementIn, newValueA, ReplaceAll(newValueA, " ", "_"), true);
                            var cursPos = iPosIni;
                            var blnCont = true;
                            while (blnCont) {
                                cursPos++;
                                if (IsMaskInfo(self.mask.substring(cursPos, cursPos + 1))) {
                                    blnCont = false;
                                }
                                if (cursPos > self.mask.length) {
                                    cursPos = self.mask.length;
                                    blnCont = false;
                                }
                            }
                            setCursorPosition(self.elementIn, cursPos);
                        }
                    }
                    return false;
                } else {
                    if ((strValIni + strValFim).length >= self.maxLen) {
                        return false;
                    } else {
                        return true;
                    }
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'BACKSPACE')) {
                if (self.mask) {
                    if (iPosIni > 0) {
                        if (IsMaskInfo(self.mask.substring(iPosIni - 1, iPosIni))) {
                            var strInfo = GetReSetInMask(strValIni.substring(0, strValIni.length - 1) + strValFim, self.mask);
                            fireValue(self.elementIn, strInfo, ReplaceAll(strInfo, " ", "_"), true);
                            var cursPos = iPosIni;
                            var blnCont = true;
                            while (blnCont) {
                                cursPos--;
                                if (cursPos == 0) {
                                    blnCont = false;
                                } else if (IsMaskInfo(self.mask.substring(cursPos - 1, cursPos))) {
                                    blnCont = false;
                                }
                            }
                            setCursorPosition(self.elementIn, cursPos);
                        }
                    }
                    return false;
                } else {
                    return true;
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'DELETE')) {
                if (self.mask) {
                    if (IsMaskInfo(self.mask.substring(iPosIni, iPosIni + 1))) {
                        var strInfo = GetReSetInMask(strValIni + strValFim.substring(1), self.mask);
                        fireValue(self.elementIn, strInfo, ReplaceAll(strInfo, " ", "_"), true);
                        setCursorPosition(self.elementIn, iPosIni);
                    }
                    return false;
                } else {
                    return true;
                }

            } else if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

            } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                fireValue(self.elementIn, self.initValue, self.initValue, false);
                setCursorPosition(self.elementIn, 0);
                SendKeyToGrid(self.parentGrid, kc, false);
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                return true;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);
            }
            return false;
        }
    };

    $.fn.etiText = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiText', (data = new EtiText(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE CHECK
    // ************************************

    var EtiCheck = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            dblclick: $.proxy(this.dblclick, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            setValue: $.proxy(this.setValue, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));
        self.selector = getVarTextToBool(self.element.data('eti-selector'));

        GetParentProps(self);

        self.normalCss = true;
        self.css = { overflow: 'hidden', 'text-align': 'center', 'background-repeat': 'no-repeat', 'background-position': 'center center' };
        if (self.parentGrid)
            self.css.height = '22px';
        self.element.css(self.css);

        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
        self.elementIn.innerHTML = "-";
    };

    EtiCheck.prototype = {
        constructor: EtiCheck,

        dblclick: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("griddblclick");
                if (!isEtiCompBlocked(self)) {
                    this.toogle();
                }
            }
        },

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey || self.selector);
            if (!isEtiCompBlocked(self)) {
                var xPosition = e.offsetX;
                var xLim = parseInt(self.elementIn.offsetWidth / 2, 10);
                if (xPosition >= (xLim - 10) && xPosition <= (xLim + 10)) {
                    this.toogle();
                }
            }
            setCursorPosition(self.elementIn);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, self.selector);
                setCursorPosition(self.elementIn);
            }
        },

        toogle: function (e) {
            var self = this;
            if (!isEtiCompBlocked(self)) {
                self.elementIn.value = !self.elementIn.value;
                fireValueToParentCheck(self, self.elementIn.value);
                self.elementIn.style.backgroundImage = GetCheckImage(self.elementIn.value, self.disabled);
                self.initValue = self.elementIn.value;
            }
            setCursorPosition(self.elementIn);
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        self.elementIn.style.backgroundImage = GetCheckImage(self.elementIn.value, self.disabled);
                    }
                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }
                }
            }
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                self.elementIn.style.backgroundImage = GetCheckImage(self.elementIn.value, self.disabled && !self.selector);
                self.initValue = self.elementIn.value;
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, 'hidden');
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.value = false;
            self.elementIn.style.backgroundImage = GetCheckImage(self.elementIn.value, self.disabled && !self.selector);
            self.initValue = false;
        },

        setValue: function (e, ui) {
            var self = this;
            self.elementIn.value = ui;
            self.elementIn.style.backgroundImage = GetCheckImage(ui, self.disabled && !self.selector);
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;

            if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

            } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'ALFAKEYS')) {
                if (kc == 32) {
                    this.toogle();
                }
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);
            }
            return false;
        }
    };

    $.fn.etiCheck = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiCheck', (data = new EtiCheck(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE BUTTON
    // ************************************

    var EtiButton = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            update: $.proxy(this.update, this),
            dblclick: $.proxy(this.dblclick, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            clickButton: $.proxy(this.clickButton, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));

        GetParentProps(self);

        self.normalCss = true;
        self.css = { overflow: 'hidden', 'text-align': 'center' };
        if (self.parentGrid)
            self.css.height = '22px';
        self.element.css(self.css);

        self.elementIn.innerHTML = "";
    };

    EtiButton.prototype = {
        constructor: EtiButton,

        dblclick: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("griddblclick");
            }
        },

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        this.update();
                    }
                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }
                }
            }
        },

        update: function (e, parent) {
            var self = this;
            var strDisabled = "";
            if (self.disabled) {
                strDisabled = " disabled";
            }
            self.elementIn.innerHTML = "<button class='etiGridFieldButton'" + strDisabled + " onclick='$(\"#" + self.elementIn.id + "\").trigger(\"clickButton\");return false;'> </button>";
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, 'hidden');
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.innerHTML = "";
        },

        clickButton: function (e) {
            var self = this;
            if (!self.disabled && !self.locked) {
                $("#" + self.parentGrid).trigger("gridButtonClick", { child: self.elementIn.id });
                self.element.focus();
            }
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;

            if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                SendKeyToGrid(self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'ALFAKEYS')) {
                if (kc == 32) {
                    self.clickButton();
                }
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);
            }
            return false;
        }
    };

    $.fn.etiButton = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiButton', (data = new EtiButton(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE IMAGE
    // ************************************

    var EtiImage = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            dblclick: $.proxy(this.dblclick, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;
        GetParentProps(self);

        var strImageType = self.element.data('eti-imagetype');
        if (strImageType == "url") {
            self.isUrl = true;
        } else {
            self.isUrl = false;
        }

        self.normalCss = true;
        self.css = { overflow: 'hidden', 'text-align': 'center', 'background-repeat': 'no-repeat', 'background-position': 'center center' };
        if (self.parentGrid)
            self.css.height = ((parseInt(self.element.data('eti-height'), 10)) - 1) + 'px';
        self.element.css(self.css);

        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
        self.elementIn.innerHTML = " ";
    };

    EtiImage.prototype = {
        constructor: EtiImage,

        dblclick: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("griddblclick");
            }
            setCursorPosition(self.elementIn);
        },

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
            setCursorPosition(self.elementIn);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                setCursorPosition(self.elementIn);
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                }
            }
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                if (self.elementIn.value) {
                    if (self.isUrl) {
                        if (self.elementIn.value.substring(0, 1) == "#") {
                            if (self.elementIn.value.substring(1, 2) == "/") {
                                self.elementIn.style.backgroundImage = "url('" + myCompWS.hostBase + self.elementIn.value.substring(2) + "')";
                            } else {
                                self.elementIn.style.backgroundImage = "url('" + myCompWS.hostBase + self.elementIn.value.substring(1) + "')";
                            }
                        } else {
                            self.elementIn.style.backgroundImage = "url('" + self.elementIn.value + "')";
                        }
                    } else {
                        self.elementIn.style.backgroundImage = "url(data:image/png;base64," + self.elementIn.value + ")";
                    }
                } else {
                    self.elementIn.style.backgroundImage = "url('')";
                }
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, 'hidden');
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.innerHTML = "";
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;

            if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                SendKeyToGrid(self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);
            }
            return false;
        }
    };

    $.fn.etiImage = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiImage', (data = new EtiImage(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE DATA
    // ************************************

    var EtiDate = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            dblclick: $.proxy(this.dblclick, this),
            selectstart: $.proxy(this.selectstart, this),
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            blur: $.proxy(this.blur, this),
            change: $.proxy(this.change, this),
            drop: $.proxy(this.drop, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            paste: $.proxy(this.paste, this),
            cut: $.proxy(this.cut, this),
            mouseout: $.proxy(this.mouseout, this),
            mouseover: $.proxy(this.mouseover, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;

        self.datePicker = true;
        var sDatePicker = self.element.data('eti-datepicker');
        if (sDatePicker == 'n' || sDatePicker == 'N') {
            self.datePicker = false;
        }

        self.allowNulls = false;
        var sAllowNulls = self.element.data('eti-allownulls');
        if (sAllowNulls) {
            self.allowNulls = (sAllowNulls.toLowerCase() == 'y');
        }

        self.timeType = "";
        var sTimeType = self.element.data('eti-timetype');
        if (sTimeType) {
            self.timeType = sTimeType.toLowerCase();
        }

        self.ctb = false;
        var sCtb = self.element.data('eti-ctb');
        if (sCtb) {
            self.ctb = (sCtb.toLowerCase() == 'y');
        }
        if (self.ctb) {
            self.timeType = '';
            self.allowNulls = false;
        }

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));

        GetParentProps(self);

        SetUiDisabled(self);

        self.normalCss = true;
        if (self.datePicker) {
            self.css = { overflow: 'hidden', 'padding-left': '5px !important', 'padding-right': '20px', 'background-image': 'url(' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCalendar.png)', 'background-repeat': 'no-repeat', 'background-position': 'right center' };
        } else {
            self.css = { overflow: 'hidden', 'padding-left': '5px !important' };
        }
        if (self.parentGrid)
            self.css.height = '22px';
        self.element.css(self.css);

        var myValue = GetComponentValue(self.elementIn);
        if (!myValue) {
            self.typeString = false;
            fireValueDate(self.elementIn, "", self.timeType, self.typeString, self.allowNulls, self.ctb, false)
        } else {
            self.typeString = !(myValue instanceof Date);
            if (self.ctb) {
                self.typeString = true;
            }
            var disp = FormatDate(tryToGetDate(myValue, self.timeType, self.ctb), self.timeType);
            fireValueDate(self.elementIn, disp, self.timeType, self.typeString, self.allowNulls, self.ctb, false)
        }

        self.initValue = self.elementIn.textContent;
        self.selectorVisible = false;
        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
    };

    EtiDate.prototype = {
        constructor: EtiDate,

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
            if (!isEtiCompBlocked(self)) {
                if (self.datePicker) {
                    if (e.offsetX >= (self.elementIn.offsetWidth - 30)) {
                        showCalendar(self.elementIn, self.timeType, self.typeString);
                    }
                }
            }
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                setPointerHand(self.elementIn, false);
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                if (self.elementIn.textContent != "") {
                    if (self.parentGrid) {
                        setCursorPosition(self.elementIn);
                    } else {
                        setCursorPosition(self.elementIn, 0);
                    }
                }
            }
        },

        mouseover: function (e) {
            var self = this;
            if (e.offsetX >= (self.elementIn.offsetWidth - 30)) {
                setPointerHand(self.elementIn, true);
            } else {
                setPointerHand(self.elementIn, false);
            }
        },

        mouseout: function (e) {
            var self = this;
            setPointerHand(self.elementIn, false);
        },

        paste: function (e) {
            var self = this;
            myCompWS.EtiBase.CopyPos = getCursorPosition(self.elementIn, 0);
            if (!self.disabled && !self.locked) {
                setTimeout(function () {
                    var strVal = self.elementIn.textContent;
                    var newValue = FormatDate(strVal, self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, true);
                    setCursorPosition(self.elementIn, myCompWS.EtiBase.CopyPos);
                }, 100);
            } else {
                e.preventDefault();
            }
        },

        cut: function (e) {
            var self = this;
            myCompWS.EtiBase.CopyPos = getCursorPosition(self.elementIn, 0);
            if (!self.disabled && !self.locked) {
                setTimeout(function () {
                    var strVal = self.elementIn.textContent;
                    var newValue = FormatDate(strVal, self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, true);
                    setCursorPosition(self.elementIn, myCompWS.EtiBase.CopyPos);
                }, 100);
            } else {
                e.preventDefault();
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        SetUiDisabled(self);
                    }
                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }
                }
            }
        },

        dblclick: function (e) {
            var self = this;
            if (self.disabled || self.locked) {
                if (self.parentGrid) {
                    $("#" + self.parentGrid).trigger("griddblclick");
                }
            } else {
                if (self.datePicker) {
                    if (!isEtiCompBlocked(self)) {
                        showCalendar(self.elementIn, self.timeType, self.typeString);
                    }
                }
            }
        },

        selectstart: function (e) {
            var self = this;
            removeSelectionVis(self, false);
        },

        change: function (e, valueBag) {
            e.uiChange = (valueBag === true);
        },

        drop: function (e, ui) {
            e.preventDefault();
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.textContent = "";
            self.initValue = "";
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                var myValue = self.elementIn.value;
                var strValue = "";
                if (myValue == "") {
                    strValue = "";
                } else {
                    self.typeString = !(myValue instanceof Date);
                    strValue = FormatDate(tryToGetDate(myValue, self.timeType, self.ctb), self.timeType);
                    if (self.timeType == "") {
                        if (!self.typeString) {
                            myValue.setHours(-myValue.getTimezoneOffset() / 60);
                            myValue.setMinutes(0);
                            myValue.setSeconds(0);
                            myValue.setMilliseconds(0);
                            self.elementIn.value = myValue;
                        }
                    } else {
                        if (!self.typeString) {
                            myValue.setHours(myValue.getHours() - myValue.getTimezoneOffset() / 60);
                            self.elementIn.value = myValue;
                        }
                    }

                }
                self.elementIn.textContent = strValue;
                self.initValue = self.elementIn.textContent;
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, '');
        },

        keydown: function (e) {
            var self = this;
            if (myCompWS.EtiCalendar.Calendar) {
                if (myCompWS.EtiCalendar.Calendar.style.display == '') {
                    closeCalendar();
                }
            }
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;
            var iPosIni = getCursorPosition(self.elementIn, 0);
            var iPosFim = getCursorPosition(self.elementIn, 1);
            var strVal = self.elementIn.textContent;
            var bSelectAll = (strVal.length == (iPosFim - iPosIni));
            var strValIni = strVal.substring(0, iPosIni);
            var strValFim = strVal.substring(iPosFim);

            if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'NUMKEYS')) {
                var fd = GetFormatoData(self.timeType);
                if (iPosIni < fd.length) {
                    if (iPosIni == iPosFim) {
                        strValFim = strValFim.substring(1);
                    }

                    var newValue = FormatDate(strValIni + getCharUNC(kc) + strValFim, self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, false);
                    var cursPos = iPosIni + 1;
                    if (fd.substring(cursPos, cursPos + 1) == GetSeparadorData() || fd.substring(cursPos, cursPos + 1) == " " || fd.substring(cursPos, cursPos + 1) == ":") {
                        cursPos++;
                    }
                    setCursorPosition(self.elementIn, cursPos);
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'BACKSPACE')) {
                if (bSelectAll) {
                    var newValue = FormatDate("", self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, false);
                    setCursorPosition(self.elementIn, 0);
                } else if (strValIni != '') {
                    var newValue = FormatDate(strValIni.substring(0, strValIni.length - 1) + strValFim, self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, false);
                    setCursorPosition(self.elementIn, iPosIni - 1);
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'DELETE')) {
                if (bSelectAll) {
                    var newValue = FormatDate("", self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, false);
                    setCursorPosition(self.elementIn, 0);
                } else if (strValFim != '') {
                    var newValue = FormatDate(strValIni + strValFim.substring(1, strValFim.length), self.timeType);
                    fireValueDate(self.elementIn, newValue, self.timeType, self.typeString, self.allowNulls, self.ctb, false);
                    setCursorPosition(self.elementIn, iPosIni);
                }

            } else if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

            } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                fireValueDate(self.elementIn, self.initValue, self.timeType, self.typeString, self.allowNulls, self.ctb, false);
                setCursorPosition(self.elementIn, 0);
                SendKeyToGrid(self.parentGrid, kc, false);
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                return true;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);
            }
            return false;
        },

        blur: function (e) {
            if (!$("#" + this.elementIn.id).is(":focus")) {
                if (!myCompWS.EtiCalendar.IsOpen) {
                    var self = this;
                    self.selectorVisible = false;
                    if (!self.disabled && !self.locked) {
                        if (self.initValue != self.elementIn.textContent) {
                            if (IsEmptyDate(self.elementIn.textContent, self.timeType) && self.allowNulls) {
                                fireValueDate(self.elementIn, "", self.timeType, self.typeString, self.allowNulls, self.ctb, true)
                                self.initValue = "";
                            } else {
                                if (self.elementIn.textContent.indexOf('_') != -1) {
                                    self.elementIn.textContent = GetImplicitDate(self.elementIn.textContent, self.timeType)
                                }
                                if (GetValidDate(self.elementIn.textContent, self.timeType, self.ctb) == -1) {
                                    alert(getMsgTranslated('Shell', 'Data inválida!'));
                                    fireValueDate(self.elementIn, self.initValue, self.timeType, self.typeString, self.allowNulls, self.ctb, true)
                                } else {
                                    self.initValue = self.elementIn.textContent;
                                    fireValueDate(self.elementIn, self.elementIn.textContent, self.timeType, self.typeString, self.allowNulls, self.ctb, true)
                                }
                            }
                            if (self.parentGrid) {
                                fireValueToParent(self);
                            }
                        }
                    }
                }
            }
        }
    };

    $.fn.etiDate = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiDate', (data = new EtiDate(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE HORA
    // ************************************

    var EtiTime = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            dblclick: $.proxy(this.dblclick, this),
            selectstart: $.proxy(this.selectstart, this),
            blur: $.proxy(this.blur, this),
            change: $.proxy(this.change, this),
            drop: $.proxy(this.drop, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            paste: $.proxy(this.paste, this),
            cut: $.proxy(this.cut, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;

        self.allowNulls = false;
        var sAllowNulls = self.element.data('eti-allownulls');
        if (sAllowNulls) {
            self.allowNulls = (sAllowNulls.toLowerCase() == 'y');
        }

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));

        GetParentProps(self);

        var myValue = GetComponentValue(self.elementIn);
        if (!myValue) {
            fireValue(element, "", "", false);
        } else {
            var val = FormatTime(tryToGetTime(myValue));
            fireValue(element, val, val, false);
        }

        SetUiDisabled(self);

        self.normalCss = true;
        self.css = { 'white-space': 'nowrap', overflow: 'hidden' };
        if (self.parentGrid)
            self.css.height = '22px';
        $(element).css(self.css);

        self.initValue = self.elementIn.textContent;
        self.selectorVisible = false;
        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
    };

    EtiTime.prototype = {
        constructor: EtiTime,

        dblclick: function (e) {
            var self = this;
            if (self.parentGrid) {
                removeSelectionVis(self, true);
                $("#" + self.parentGrid).trigger("griddblclick");
            }
        },

        selectstart: function (e) {
            var self = this;
            removeSelectionVis(self, false);
        },

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                if (self.elementIn.textContent != "") {
                    if (self.parentGrid) {
                        setCursorPosition(self.elementIn);
                    } else {
                        setCursorPosition(self.elementIn, 0);
                    }
                }
            }
        },

        paste: function (e) {
            var self = this;
            myCompWS.EtiBase.CopyPos = getCursorPosition(self.elementIn, 0);
            if (!self.disabled && !self.locked) {
                setTimeout(function () {
                    var strVal = self.elementIn.textContent;
                    var newValue = FormatTime(strVal);
                    fireValue(self.elementIn, newValue, newValue, true);
                    setCursorPosition(self.elementIn, myCompWS.EtiBase.CopyPos);
                }, 100);
            } else {
                e.preventDefault();
            }
        },

        cut: function (e) {
            var self = this;
            myCompWS.EtiBase.CopyPos = getCursorPosition(self.elementIn, 0);
            if (!self.disabled && !self.locked) {
                setTimeout(function () {
                    var strVal = self.elementIn.textContent;
                    var newValue = FormatTime(strVal);
                    fireValue(self.elementIn, newValue, newValue, true);
                    setCursorPosition(self.elementIn, myCompWS.EtiBase.CopyPos);
                }, 100);
            } else {
                e.preventDefault();
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        SetUiDisabled(self);
                    }
                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }
                }
            }
        },

        change: function (e, valueBag) {
            e.uiChange = (valueBag === true);
        },

        drop: function (e, ui) {
            e.preventDefault();
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.textContent = "";
            self.initValue = "";
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                var myValue = self.elementIn.value;
                var strValue = "";
                if (myValue == "") {
                    strValue = "";
                } else {
                    strValue = FormatTime(tryToGetTime(myValue));
                }
                self.elementIn.textContent = strValue;
                self.initValue = self.elementIn.textContent;
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, '');
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;
            var iPosIni = getCursorPosition(self.elementIn, 0);
            var iPosFim = getCursorPosition(self.elementIn, 1);
            var strVal = self.elementIn.textContent;
            var strValIni = strVal.substring(0, iPosIni);
            var strValFim = strVal.substring(iPosFim);

            if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'NUMKEYS')) {
                var fd = 'hh:mm';
                if (iPosIni < fd.length) {
                    if (iPosIni == iPosFim) {
                        strValFim = strValFim.substring(1);
                    }

                    var newValue = FormatTime(strValIni + getCharUNC(kc) + strValFim);
                    fireValue(self.elementIn, newValue, newValue, false);
                    var cursPos = iPosIni + 1;
                    if (fd.substring(cursPos, cursPos + 1) == ':') {
                        cursPos++;
                    }
                    setCursorPosition(self.elementIn, cursPos);
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'BACKSPACE')) {
                if (strValIni != '') {
                    var newValue = FormatTime(strValIni.substring(0, strValIni.length - 1) + strValFim);
                    fireValue(self.elementIn, newValue, newValue, false);
                    setCursorPosition(self.elementIn, iPosIni - 1);
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'DELETE')) {
                if (strValFim != '') {
                    var newValue = FormatTime(strValIni + strValFim.substring(1, strValFim.length));
                    fireValue(self.elementIn, newValue, newValue, false);
                    var cursPos = iPosIni;
                    setCursorPosition(self.elementIn, iPosIni);
                }

            } else if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

            } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                fireValue(self.elementIn, self.initValue, self.initValue, false);
                setCursorPosition(self.elementIn, 0);
                SendKeyToGrid(self.parentGrid, kc, false);
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                return true;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);

            }
            return false;
        },

        blur: function (e) {
            var self = this;
            self.selectorVisible = false;
            if (!self.disabled && !self.locked) {
                if (self.initValue != self.elementIn.textContent) {
                    if (IsEmptyHour(self.elementIn.textContent) && self.allowNulls) {
                        self.initValue = "";
                        fireValue(self.elementIn, "", "", true);
                    } else {
                        if (GetValidTime(self.elementIn.textContent) == -1) {
                            alert(getMsgTranslated('Shell', 'Hora inválida!'));
                            fireValue(self.elementIn, self.initValue, self.initValue, true);
                        } else {
                            self.initValue = self.elementIn.textContent;
                            fireValue(self.elementIn, self.elementIn.textContent, self.elementIn.textContent, true);
                        }
                    }
                    if (self.parentGrid) {
                        fireValueToParent(self);
                    }
                }
            }
        }
    };

    $.fn.etiTime = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiTime', (data = new EtiTime(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE NUMERO
    // ************************************
    var EtiNumber = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            dblclick: $.proxy(this.dblclick, this),
            selectstart: $.proxy(this.selectstart, this),
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            change: $.proxy(this.change, this),
            drop: $.proxy(this.drop, this),
            blur: $.proxy(this.blur, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            cleanValue: $.proxy(this.cleanValue, this),
            paste: $.proxy(this.paste, this),
            cut: $.proxy(this.cut, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            keydown: $.proxy(this.keydown, this)
        });

        self.elementIn = element;

        var sValueType = self.element.data('eti-valuetype');
        var myDefaultDecPlaces = 0;
        var myDefaultGroupSep = true;
        var myDefaultMinValue = -999999999999;
        var myDefaultMaxValue = 999999999999;
        if (sValueType) {
            sValueType = sValueType.toLowerCase();
            if (sValueType == "unitvalue") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.CasasDecUnitarios;
            } else if (sValueType == "unitcost") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.CasasDecCustosUnitarios;
            } else if (sValueType == "total") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.CasasDecParciaisTotais;
            } else if (sValueType == "qtypurchase") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdCmp;
            } else if (sValueType == "qtystock") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdStk;
            } else if (sValueType == "qtysale") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdVnd;
            } else if (sValueType == "qtymax") {
                myDefaultDecPlaces = MyShell().Environment.Config.ActiveCompanyInfo.Unidade.CasasDecQtdMax;
            } else if (sValueType == "code") {
                myDefaultDecPlaces = 0;
                myDefaultGroupSep = false;
                myDefaultMinValue = 0; myDefaultMaxValue = 999999999;
            } else if (sValueType == "integer") {
                myDefaultDecPlaces = 0;
                myDefaultMinValue = -999999999; myDefaultMaxValue = 999999999;
            }
        }

        var sCasasDec = self.element.data('eti-decimalplaces');
        if (!sCasasDec) {
            self.decimalPlaces = myDefaultDecPlaces;
        } else {
            if (("" + sCasasDec).substring(0, 1) == "{") {
                self.decimalPlaces = getContextCD(sCasasDec);
            } else {
                self.decimalPlaces = parseInt(sCasasDec, 10);
            }
        }

        var sCasasDecEdit = self.element.data('eti-decimalplacesedit');
        if (!sCasasDecEdit) {
            self.decimalPlacesEdit = self.decimalPlaces;
        } else {
            self.decimalPlacesEdit = parseInt(sCasasDecEdit, 10);
        }

        self.groupSeparator = myDefaultGroupSep;
        if (self.element.data('eti-groupseparator') == 'N' || self.element.data('eti-groupseparator') == 'n') {
            self.groupSeparator = false;
        }

        self.maxValor = myDefaultMaxValue;
        if (('' + self.element.data('eti-maxvalue')) != 'undefined') {
            self.maxValor = parseInt(self.element.data('eti-maxvalue'), 10);
        }

        self.minValor = myDefaultMinValue;
        if (('' + self.element.data('eti-minvalue')) != 'undefined') {
            self.minValor = parseInt(self.element.data('eti-minvalue'), 10);
        }

        self.zeroIsEmpty = false;
        var sZeroIsEmpty = self.element.data('eti-zeroisempty');
        if (sZeroIsEmpty) {
            self.zeroIsEmpty = (sZeroIsEmpty.toLowerCase() == 'y');
        }

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));

        GetParentProps(self);

        var myValue = GetComponentValue(self.elementIn);
        if (!myValue && self.zeroIsEmpty) {
            fireValue(element, 0, "", false);
        } else {
            var num = tryToGetNumber(myValue);
            var value = FormatNumber(num, self.decimalPlaces, self.groupSeparator);
            fireValue(element, num, value, false);
        }

        SetUiDisabled(self);

        self.initValue = self.elementIn.textContent;

        self.normalCss = true;
        self.css = { 'white-space': 'nowrap', overflow: 'hidden', 'text-align': 'right' };
        if (self.parentGrid)
            self.css.height = '22px';
        $(element).css(self.css);

        self.selectorVisible = false;
        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
    };

    EtiNumber.prototype = {
        constructor: EtiNumber,

        dblclick: function (e) {
            var self = this;
            if (self.parentGrid) {
                removeSelectionVis(self, true);
                $("#" + self.parentGrid).trigger("griddblclick");
            }
        },

        selectstart: function (e) {
            var self = this;
            removeSelectionVis(self, false);
        },

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                if (self.elementIn.textContent != "") {
                    setCursorPosition(self.elementIn);
                }
            }
        },

        paste: function (e) {
            var self = this;
            myCompWS.EtiBase.CopyPos = getCursorPosition(self.elementIn, 0);
            if (!self.disabled && !self.locked) {
                setTimeout(function () {
                    var newValue = GetNumber(self.elementIn.textContent, self.decimalPlaces);
                    fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                    setCursorPosition(self.elementIn, myCompWS.EtiBase.CopyPos);
                }, 100);
            } else {
                e.preventDefault();
            }
        },

        cut: function (e) {
            var self = this;
            myCompWS.EtiBase.CopyPos = getCursorPosition(self.elementIn, 0);
            if (!self.disabled && !self.locked) {
                setTimeout(function () {
                    var newValue = GetNumber(self.elementIn.textContent, self.decimalPlaces);
                    fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                    setCursorPosition(self.elementIn, myCompWS.EtiBase.CopyPos);
                }, 100);
            } else {
                e.preventDefault();
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        SetUiDisabled(self);
                    }

                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }

                } else if (ui.name == "minvalue") {
                    newValue = parseInt(ui.value, 10);
                    if (self.minValor != newValue) {
                        self.minValor = newValue;
                        var actValue = self.elementIn.value;
                        if (actValue < self.minValor) {
                            fireValue(self.elementIn, self.minValor, FormatNumber(self.minValor, self.decimalPlaces, self.groupSeparator), false);
                        }
                    }

                } else if (ui.name == "maxvalue") {
                    newValue = parseInt(ui.value, 10);
                    if (self.maxValor != newValue) {
                        self.maxValor = newValue;
                        var actValue = self.elementIn.value;
                        if (actValue > self.maxValor) {
                            fireValue(self.elementIn, self.maxValor, FormatNumber(self.maxValor, self.decimalPlaces, self.groupSeparator), false);
                        }
                    }

                } else if (ui.name == "decimalplaces") {
                    newValue = parseInt(ui.value, 10);
                    if (self.decimalPlaces != newValue) {
                        if (self.decimalPlaces == self.decimalPlacesEdit) {
                            self.decimalPlacesEdit = newValue;
                        }
                        self.decimalPlaces = newValue;
                        var actValue = self.elementIn.value;
                        fireValue(self.elementIn, actValue, FormatNumber(actValue, self.decimalPlaces, self.groupSeparator), false);
                    }

                } else if (ui.name == "decimalplacesedit") {
                    newValue = parseInt(ui.value, 10);
                    if (self.decimalPlacesEdit != newValue) {
                        self.decimalPlacesEdit = newValue;
                        var actValue = self.elementIn.value;
                        fireValue(self.elementIn, actValue, FormatNumber(actValue, self.decimalPlaces, self.groupSeparator), false);
                    }

                } else if (ui.name == "groupseparator") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.groupSeparator != newValue) {
                        self.groupSeparator = newValue;
                        var actValue = self.elementIn.value;
                        fireValue(self.elementIn, actValue, FormatNumber(actValue, self.decimalPlaces, self.groupSeparator), false);
                    }

                } else if (ui.name == "zeroisempty") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.zeroIsEmpty != newValue) {
                        self.zeroIsEmpty = newValue;
                        var dblValue = tryToGetNumber(self.elementIn.value);
                        if (self.zeroIsEmpty) {
                            if (dblValue == 0) {
                                fireValue(self.elementIn, dblValue, "", false);
                            }
                        } else {
                            if (dblValue == 0) {
                                fireValue(self.elementIn, dblValue, FormatNumber(dblValue, self.decimalPlaces, self.groupSeparator), false);
                            }
                        }
                    }
                }
            }
        },

        change: function (e, valueBag) {
            e.uiChange = (valueBag === true);
        },

        drop: function (e, ui) {
            e.preventDefault();
        },

        blur: function (e) {
            var self = this;
            self.selectorVisible = false;
            var dblValue = tryToGetNumber(self.elementIn.value);
            if (self.zeroIsEmpty && dblValue == 0) {
                self.elementIn.textContent = "";
            }
            if (self.initValue != self.elementIn.textContent) {
                self.initValue = self.elementIn.textContent;
                $("#" + self.elementIn.id).trigger("change", true);
                if (self.parentGrid) {
                    fireValueToParent(self);
                }
            }
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.textContent = "";
            self.initValue = "";
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                var dblValue = tryToGetNumber(self.elementIn.value);
                self.elementIn.value = dblValue;
                if (self.zeroIsEmpty && dblValue == 0) {
                    self.elementIn.textContent = "";
                } else {
                    self.elementIn.textContent = FormatNumber(dblValue, self.decimalPlaces, self.groupSeparator);
                }
                self.initValue = self.elementIn.textContent;
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, '');
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;
            var iPosIni = getCursorPosition(self.elementIn, 0);
            var iPosFim = getCursorPosition(self.elementIn, 1);
            var strVal = self.elementIn.textContent;
            var bSelectAll = (strVal.length == (iPosFim - iPosIni));
            var iPosToDir = strVal.length - iPosFim;
            var strValIni = strVal.substring(0, iPosIni);
            var strValFim = strVal.substring(iPosFim);

            if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'NUMKEYS')) {
                if (iPosIni < strVal.length || self.decimalPlaces == 0 || strVal.length == 0) {
                    var newValue = GetNumber(strValIni + getCharUNC(kc) + strValFim, self.decimalPlaces);
                    if (newValue >= self.minValor && newValue <= self.maxValor && validEditDecPlaces(newValue, self.decimalPlaces, self.decimalPlacesEdit)) {
                        fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                        var cursPos = self.elementIn.textContent.length - iPosToDir;
                        if (bSelectAll) {
                            if (self.decimalPlaces == 0) {
                                cursPos = self.elementIn.textContent.length;
                            } else {
                                cursPos = self.elementIn.textContent.length - (self.decimalPlaces + 1);
                            }
                        } else if (self.decimalPlaces > 0 && cursPos >= (self.elementIn.textContent.length - self.decimalPlaces)) {
                            cursPos++;
                        }
                        setCursorPosition(self.elementIn, cursPos);
                    }
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'BACKSPACE')) {
                if (bSelectAll) {
                    fireValue(self.elementIn, 0, FormatNumber(0, self.decimalPlaces, self.groupSeparator), false);
                    if (self.decimalPlaces == 0) {
                        setCursorPosition(self.elementIn, self.elementIn.textContent.length);
                    } else {
                        setCursorPosition(self.elementIn, self.elementIn.textContent.length - (self.decimalPlaces + 1));
                    }
                } else {
                    if (strValIni != '' && strValIni.substring(strValIni.length - 1, strValIni.length) != GetNumSepMilhares()) {
                        var newValue = GetNumber(strValIni.substring(0, strValIni.length - 1) + strValFim, self.decimalPlaces);
                        if (strValIni.substring(strValIni.length - 1, strValIni.length) == GetNumSepDecimal()) {
                            setCursorPosition(self.elementIn, self.elementIn.textContent.length - self.decimalPlaces - 1);
                        } else {
                            if (newValue >= self.minValor && newValue <= self.maxValor) {
                                fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                                var cursPos = self.elementIn.textContent.length - iPosToDir;
                                if (cursPos < 0)
                                    cursPos = 0;
                                if (self.decimalPlaces > 0 && cursPos >= (self.elementIn.textContent.length - self.decimalPlaces)) {
                                    cursPos--;
                                }
                                setCursorPosition(self.elementIn, cursPos);
                            }
                        }
                    }
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'DELETE')) {
                if (bSelectAll) {
                    fireValue(self.elementIn, 0, FormatNumber(0, self.decimalPlaces, self.groupSeparator), false);
                    if (self.decimalPlaces == 0) {
                        setCursorPosition(self.elementIn, self.elementIn.textContent.length);
                    } else {
                        setCursorPosition(self.elementIn, self.elementIn.textContent.length - (self.decimalPlaces + 1));
                    }
                } else {
                    if (strValFim != '' && strValFim.substring(0, 1) != GetNumSepMilhares()) {
                        var newValue = GetNumber(strValIni + strValFim.substring(1, strValFim.length), self.decimalPlaces);
                        if (newValue >= self.minValor && newValue <= self.maxValor) {
                            if (strValFim.substring(0, 1) == GetNumSepDecimal()) {
                                setCursorPosition(self.elementIn, self.elementIn.textContent.length - self.decimalPlaces);
                            } else {
                                fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                                var cursPos = self.elementIn.textContent.length - iPosToDir;
                                if (self.decimalPlaces > 0 && cursPos >= (self.elementIn.textContent.length - self.decimalPlaces)) {
                                    cursPos--;
                                }
                                setCursorPosition(self.elementIn, cursPos + 1);
                            }
                        }
                    }
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'MAIS/MENOS')) {
                var newValue = GetNumber(self.elementIn.textContent, self.decimalPlaces);
                if (isKey(kc, isShift, isCtrl, 'MENOS')) {
                    newValue = -newValue;
                } else {
                    if (newValue < 0) { newValue = -newValue; }
                }
                if (newValue >= self.minValor && newValue <= self.maxValor) {
                    fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                    var cursPos = self.elementIn.textContent.length - iPosToDir;
                    setCursorPosition(self.elementIn, cursPos);
                }

            } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'VIRG/PONTO')) {
                if (self.decimalPlaces > 0) {
                    setCursorPosition(self.elementIn, self.elementIn.textContent.length - self.decimalPlaces);
                }

            } else if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

            } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                var newValue = GetNumber(self.initValue, self.decimalPlaces);
                fireValue(self.elementIn, newValue, FormatNumber(newValue, self.decimalPlaces, self.groupSeparator), false);
                var cursPos = self.elementIn.textContent.length;
                if (self.decimalPlaces != 0) {
                    cursPos = self.elementIn.textContent.length - (self.decimalPlaces + 1);
                }
                setCursorPosition(self.elementIn, cursPos);
                SendKeyToGrid(self.parentGrid, kc, false);
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                return true;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);
            }
            return false;
        }
    };

    $.fn.etiNumber = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiNumber', (data = new EtiNumber(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE GRID
    // ************************************

    var EtiGrid = function (element, cfgGrid) {
        var self = this;
        self.element = $(element);
        self.element.on({
            activateCell: $.proxy(this.activateCell, this),
            toogleOrder: $.proxy(this.toogleOrder, this),
            toogleGroup: $.proxy(this.toogleGroup, this),
            openSubQuery: $.proxy(this.openSubQuery, this),
            closeSubQuery: $.proxy(this.closeSubQuery, this),
            closeAllSubQueries: $.proxy(this.closeAllSubQueries, this),
            changeColOrder: $.proxy(this.changeColOrder, this),
            saveCols: $.proxy(this.saveCols, this),
            selectAllRows: $.proxy(this.selectAllRows, this),
            insertRow: $.proxy(this.insertRow, this),
            removeActiveRow: $.proxy(this.removeActiveRow, this),
            showConfig: $.proxy(this.showConfig, this),
            refreshConfig: $.proxy(this.refreshConfig, this),
            resizeGridSize: $.proxy(this.resizeGridSize, this),
            updateGrid: $.proxy(this.updateGrid, this),
            setFilterFocus: $.proxy(this.setFilterFocus, this),
            setFilter: $.proxy(this.setFilter, this),
            scrollTo: $.proxy(this.scrollTo, this),
            scrollPercent: $.proxy(this.scrollPercent, this),
            getProperty: $.proxy(this.getProperty, this),
            setProperty: $.proxy(this.setProperty, this),
            setFocus: $.proxy(this.setFocus, this),
            setColProperty: $.proxy(this.setColProperty, this),
            gridRefreshData: $.proxy(this.gridRefreshData, this),
            gridExpandRow: $.proxy(this.gridExpandRow, this),
            appendGroupHeaders: $.proxy(this.appendGroupHeaders, this),
            updateCell: $.proxy(this.updateCell, this),
            contextmenu: $.proxy(this.contextmenu, this),
            wheel: $.proxy(this.wheel, this),
            gridButtonClick: $.proxy(this.gridButtonClick, this),
            gridLabelClick: $.proxy(this.gridLabelClick, this),
            gridKeydown: $.proxy(this.gridKeydown, this),
            gridclick: $.proxy(this.gridclick, this),
            griddblclick: $.proxy(this.griddblclick, this)
    });

        self.elementIn = element;
        this.visibleData = cfgGrid.rows;
        this.naturalData = true;
        this.cfgGrid = cfgGrid;
        this.cfgGrid.visibleRows = -1;
        SetGridUserColors();
        LoadScript(myCompWS.hostBase + "Scripts/Linq/linq.min.js");

        this.setInfoSubQueries(0, false);
        this.closeAllSubQueries();

        if (!this.cfgGrid.editing) {
            this.cfgGrid.editing = { allow: false };
        }

        if (!this.cfgGrid.config) {
            this.cfgGrid.config = {};
        }

        if (!this.cfgGrid.state) {
            this.cfgGrid.state = {};
        }

        etiGridSetOrderConfig(this.cfgGrid, false);
        if (this.cfgGrid.orderBy.hasGroups) {
            this.appendGroupHeaders(0, true);
        }

        if (cfgGrid.rows) {
            this.refreshConfig(0, { revomeCfg: false, newGrid: true, rebindProps: true });
        }
    };

    EtiGrid.prototype = {
        constructor: EtiGrid,

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name.indexOf(".selectedRow") != -1) {
                    if (self.activeRow != -1) {
                        var intColField = 0;
                        var flds = ui.name.split(".");
                        for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                            if (self.cfgGrid.cols[c].key == flds[0]) {
                                intColField = c;
                            }
                        }
                        ui.retValue = $("#" + GetGridCellId(self.elementIn.id, intColField, self.activeRow)).getProperty(flds[1]);
                    }
                } else {
                    if (ui.name == "rows") {
                        ui.retValue = self.cfgGrid.rows;

                    } else if (ui.name == "activeRow") {
                        if (self.offsetRow != undefined && self.activeRow != -1) {
                            ui.retValue = self.visibleData[self.offsetRow + self.activeRow];
                        } else {
                            ui.retValue = {};
                        }

                    } else if (ui.name == "disabled") {
                        ui.retValue = this.disabled;

                    } else if (ui.name == "selectedRows") {
                        if (self.cfgGrid.editing.allow === true) {
                            ui.retValue = [];
                        } else {
                            if (self.cfgGrid.editing.multiSelection === true) {
                                ui.retValue = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return x.etiRowSelected }).ToArray();
                            } else {
                                if (self.offsetRow != undefined && self.activeRow != -1) {
                                    ui.retValue = [self.visibleData[self.offsetRow + self.activeRow]];
                                } else {
                                    ui.retValue = [];
                                }
                            }
                        }
                    }
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "rows") {
                    var blnFirstTime = (!this.cfgGrid.rows);
                    self.cfgGrid.rows = ui.value;
                    if (this.cfgGrid.orderBy.hasGroups) {
                        this.appendGroupHeaders(0, true);
                    }
                    self.visibleData = self.cfgGrid.rows;

                    this.refreshConfig(e, { revomeCfg: false, newGrid: blnFirstTime, rebindProps: blnFirstTime });

                } else if (ui.name == "filters") {
                    for (var i = 0; i < self.filters.length; i++) {
                        if (self.filters[i].tp != "G1") {
                            for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                                if (self.cfgGrid.cols[c].key == self.filters[i].key) {
                                    self.setFilter(e, "IMG|" + c + "|G1");
                                }
                            }
                        }
                    }

                } else if (ui.name == "disabled") {
                    var blnDisabled = getVarTextToBool(ui.value);
                    var blnStateDisabled = (self.cfgGrid.editing.disabled === true);
                    if (blnStateDisabled != blnDisabled) {
                        self.cfgGrid.editing.disabled = blnDisabled;
                        if (blnDisabled) {
                            $('[id^="idGrd__' + self.elementIn.id + '_"]').trigger("setProperty", { name: "disabled", value: true });
                        } else {
                            $('[id^="idGrd__' + self.elementIn.id + '_"]').each(function () {
                                $(this).trigger("setProperty", { name: "disabled", value: !!self.cfgGrid.cols[GetEtiGridActCol(this.id)].editor.disabled });
                            });
                        }
                        this.scrollTo(e, { row: self.offsetRow, posScroll: false, actCell: true });
                    }

                } else if (ui.name == "selectedrow") {
                    for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                        if (self.cfgGrid.cols[c].key == ui.value.key) {
                            var numRow = 0;
                            var myRowNumber = 0;
                            if (ui.value.rowNumber != undefined) {
                                myRowNumber = ui.value.rowNumber;
                            } else {
                                if (ui.value.value != undefined) {
                                    var lstRows = self.cfgGrid.rows.filter(function (f) { return f[ui.value.key] == ui.value.value });
                                    if (lstRows.length == 1) {
                                        myRowNumber = self.cfgGrid.rows.indexOf(lstRows[0]);
                                    }
                                }
                            }

                            if (myRowNumber < 0 || myRowNumber > self.cfgGrid.rows.length) {
                                this.activateCell(e, { col: c, row: -1, doFocus: false });
                            } else {
                                var rowToFocus = self.cfgGrid.rows[myRowNumber];
                                for (l = 0; l < self.visibleData.length; l++) {
                                    if (self.visibleData[l] == rowToFocus) {
                                        if (numRow >= this.offsetRow && numRow < this.offsetRow + self.cfgGrid.visibleRows) {
                                            this.activateCell(e, { col: c, row: numRow - this.offsetRow, doFocus: false });
                                        } else {
                                            var newOffsetRow = numRow;
                                            if (newOffsetRow > self.visibleData.length - self.cfgGrid.visibleRows) {
                                                newOffsetRow = self.visibleData.length - self.cfgGrid.visibleRows;
                                            }
                                            if (newOffsetRow < 0) {
                                                newOffsetRow = 0;
                                            }
                                            this.scrollTo(e, { row: newOffsetRow, posScroll: true, actCell: true });
                                            this.activateCell(e, { col: c, row: numRow - this.offsetRow, doFocus: false });
                                        }
                                        break;
                                    }
                                    numRow++;
                                }
                            }
                        }
                    }

                }
            }
        },

        setFocus: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var colToFocus = -1;
                for (c = 0; c < self.cfgGrid.cols.length; c++) {
                    if (self.cfgGrid.cols[c].hidden !== true && self.cfgGrid.cols[c].grouped !== true) {
                        if (self.cfgGrid.cols[c].key == ui.key) {
                            colToFocus = c;
                        }
                    }
                }
                var rowToFocus = self.cfgGrid.rows[ui.rowNumber];
                var numRow = 0;
                for (l = 0; l < self.visibleData.length; l++) {
                    if (self.visibleData[l] == rowToFocus) {
                        if (numRow >= this.offsetRow && numRow < this.offsetRow + self.cfgGrid.visibleRows) {
                            if (colToFocus != -1) {
                                this.activateCell(e, { col: colToFocus, row: numRow - this.offsetRow });
                            }
                        } else {
                            var newOffsetRow = numRow;
                            if (newOffsetRow > self.visibleData.length - self.cfgGrid.visibleRows) {
                                newOffsetRow = self.visibleData.length - self.cfgGrid.visibleRows;
                            }
                            if (newOffsetRow < 0) {
                                newOffsetRow = 0;
                            }
                            this.scrollTo(e, { row: newOffsetRow, posScroll: true, actCell: true });
                            this.setFocus(e, ui);
                        }
                    }
                    numRow++;
                }
            }
        },

        setInfoSubQueries: function (e, ui) {
            var self = this;
            if (!self.cfgGrid.subQueries || ui) {
                var sq = { has: false };
                if (self.cfgGrid.subQueryInfo) {
                    if (self.cfgGrid.subQueryInfo.length > 0) {
                        sq = { has: true, num: self.cfgGrid.subQueryInfo.length };
                    }
                }
                self.cfgGrid.subQueries = sq;
            }
        },

        updateGrid: function (e, ui) {
            var self = this;

            var cfgGrid = ui;
            this.closeAllSubQueries();
            self.cfgGrid = cfgGrid;

            this.visibleData = cfgGrid.rows;
            this.naturalData = true;
            this.cfgGrid.visibleRows = -1;
            this.setInfoSubQueries(0, true);

            if (!this.cfgGrid.editing) {
                this.cfgGrid.editing = { allow: false };
            }

            if (!this.cfgGrid.config) {
                this.cfgGrid.config = {};
            }

            if (!this.cfgGrid.state) {
                this.cfgGrid.state = {};
            }

            etiGridSetOrderConfig(this.cfgGrid, false);
            if (this.cfgGrid.orderBy.hasGroups) {
                this.appendGroupHeaders(0, true);
            }

            if (!cfgGrid.rows) {
                cfgGrid.rows = [];
            }
            self.visibleData = cfgGrid.rows;
            this.refreshConfig(0, { revomeCfg: false, newGrid: true, rebindProps: true });
        },

        setColProperty: function (e, ui) {
            var self = this;

            var blnHasChanges = false;
            var myNewEditor;
            for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                if (self.cfgGrid.cols[i].key == ui.key) {
                    for (myColConfig in ui.config) {
                        if (myColConfig != "key") {
                            if (myColConfig == "editor") {
                                for (myColConfigEd in ui.config.editor) {
                                    if (myColConfigEd != "type") {
                                        if (!self.lstBindedProps) {
                                            self.lstBindedProps = [];
                                        }
                                        for (var k = 0; k < self.lstBindedProps.length; k++) {
                                            if (self.lstBindedProps[k].key == ui.key && self.lstBindedProps[k].property == myColConfigEd) {
                                                self.lstBindedProps.splice(k, 1);
                                                k = self.lstBindedProps.length + 1;
                                            }
                                        }

                                        if (typeof ui.config.editor[myColConfigEd] == 'function') {
                                            self.lstBindedProps.push({ key: ui.key, property: myColConfigEd, fnc: ui.config.editor[myColConfigEd] });
                                            self.cfgGrid.cols[i].editor[myColConfigEd] = getGridCompParamDefValue(myColConfigEd);
                                        } else if (typeof ui.config.editor[myColConfigEd] == 'string' && ui.config.editor[myColConfigEd].indexOf("#") == 0) {
                                            self.lstBindedProps.push({ key: ui.key, property: myColConfigEd, keyRef: ui.config.editor[myColConfigEd].replace("#", "") });
                                            self.cfgGrid.cols[i].editor[myColConfigEd] = getGridCompParamDefValue(myColConfigEd);
                                        } else {
                                            myNewEditor = ui.config.editor[myColConfigEd];
                                            if (self.cfgGrid.cols[i].editor[myColConfigEd] != myNewEditor) {
                                                self.cfgGrid.cols[i].editor[myColConfigEd] = myNewEditor;
                                                blnHasChanges = true;
                                            }
                                        }
                                    }
                                }
                            } else {
                                myNewEditor = ui.config[myColConfig];
                                if (self.cfgGrid.cols[i][myColConfig] != myNewEditor) {
                                    self.cfgGrid.cols[i][myColConfig] = myNewEditor;
                                    blnHasChanges = true;
                                }
                            }
                        }
                    }
                }
            }

            if (self.cfgGrid.rows && blnHasChanges) {
                clearTimeout(self.cfgGrid.state.IntervalToRefreshGrid);
                self.cfgGrid.state.IntervalToRefreshGrid = setTimeout(function () {
                    self.refreshConfig(e, { revomeCfg: false, newGrid: true, rebindProps: false });
                }, 50);
            }
        },

        updateCell: function (e, ui) {
            var self = this;
            if (self.cfgGrid.editing.disabled !== true) {
                var arrCols = ui.cell.split("_");
                if (arrCols.length == 2) {
                    var row = parseInt(arrCols[1], 10);
                    var col = parseInt(arrCols[0], 10);
                    var bCanUpdate = true;
                    var bNewScroll = false;
                    if (self.visibleData.length <= (row + this.offsetRow)) {
                        if (self.cfgGrid.editing.allRowsMode === true) {
                            var targetRow = (row + this.offsetRow) - self.visibleData.length + 1;
                            for (var i = 1; i <= targetRow; i++) {
                                this.insertRow(e, { NoFim: true, activateCell: false });
                            }
                            bNewScroll = true;
                        } else {
                            if (self.visibleData.length == (row + this.offsetRow)) {
                                this.insertRow(e, { NoFim: true, activateCell: false });
                                bNewScroll = true;
                            } else {
                                bCanUpdate = false;
                            }
                        }
                    }
                    if (bCanUpdate) {
                        var oldValue = "";
                        if (this.cfgGrid.cols[col].af === true) {
                            if (!self.visibleData[row + this.offsetRow]["AdittionalFields"]) {
                                self.visibleData[row + this.offsetRow]["AdittionalFields"] = {};
                            }
                            oldValue = self.visibleData[row + this.offsetRow]["AdittionalFields"][this.cfgGrid.cols[col].key.substring(17)];
                        } else {
                            oldValue = self.visibleData[row + this.offsetRow][this.cfgGrid.cols[col].key];
                        }
                        if (oldValue !== ui.value) {
                            var rowNumber = row + self.offsetRow;
                            if (!self.naturalData) {
                                rowNumber = self.cfgGrid.rows.indexOf(self.visibleData[rowNumber]);
                            }
                            if (this.cfgGrid.cols[col].af === true) {
                                self.visibleData[row + this.offsetRow]["AdittionalFields"][this.cfgGrid.cols[col].key.substring(17)] = ui.value;
                            } else {
                                self.visibleData[row + this.offsetRow][this.cfgGrid.cols[col].key] = ui.value;
                            }
                            if (self.cfgGrid.etiViewModel) {
                                if (self.visibleData[row + this.offsetRow].ChangedProperties) {
                                    if (self.visibleData[row + this.offsetRow].ChangedProperties.indexOf(this.cfgGrid.cols[col].key) == -1) {
                                        self.visibleData[row + this.offsetRow].ChangedProperties.push(this.cfgGrid.cols[col].key);
                                    }
                                }
                            }
                            $("#" + self.elementIn.id).trigger("etiCellChanged", { key: this.cfgGrid.cols[col].key, rowNumber: rowNumber, oldValue: oldValue, newValue: ui.value, row: this.cfgGrid.rows[rowNumber] });
                            if (self.cfgGrid.etiViewModel) {
                                self.cfgGrid.etiViewModel.SetEditState(true);
                            }
                        }
                    }
                    if (bNewScroll) {
                        this.scrollTo(e, { row: self.offsetRow, posScroll: true, actCell: true });
                    }
                }
            }
        },

        contextmenu: function (e, ui) {
            var self = this;
            if (e.button == 2) {
                if (self.cfgGrid.popupMenu !== false && this.cfgGrid.editing.disabled !== true) {
                    openGridContextMenu(self.elementIn.id, e.clientX, e.clientY, (self.activeRow != -1), self.cfgGrid.customPopup, self.cfgGrid.config.id, self.cfgGrid.editing.multiSelection, self.cfgGrid.editing.allow, self.cfgGrid.editing.add, self.cfgGrid.editing.remove);
                }
                e.preventDefault();
                return false;
            }
        },

        showConfig: function (e) {
            var self = this;
            window.addEventListener('storage', showConfigEtiGridEventHandler, false);
            MyShell().Dialog.ShowHtmlDialog('#/Client/Generic/ModalDialogs/EtiGrid/ConfigGrid.html', 600, 500, JSON.stringify({ cols: self.cfgGrid.cols, id: self.elementIn.id, configId: self.cfgGrid.config.id, configType: self.cfgGrid.config.type, filterable: self.cfgGrid.config.filterable, filterVisible: self.cfgGrid.config.filterVisible, horizontalScrollBar: self.cfgGrid.config.horizontalScrollBar, verticalScrollBar: self.cfgGrid.config.verticalScrollBar, frozenCols: self.cfgGrid.config.frozenCols, showRowNumber: self.cfgGrid.config.showRowNumber }));
        },

        resizeGridSize: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var myNewNumRows = etiGridGetNumRows(self);
                if (self.cfgGrid.visibleRows != myNewNumRows) {
                    self.cfgGrid.visibleRows = myNewNumRows;
                    if (self.cfgGrid.rows) {
                        this.refreshConfig(e, { revomeCfg: false, newGrid: true, rebindProps: false });
                    }
                }
                if (ui.allGrids) {
                    myCompWS.EtiGrid.GridsSequence += 1;
                    if (myCompWS.EtiGrid.GridsSequence < myCompWS.EtiGrid.GridsLoaded.length) {
                        $("#" + myCompWS.EtiGrid.GridsLoaded[myCompWS.EtiGrid.GridsSequence]).trigger("resizeGridSize", { allGrids: true });
                    } else {
                        myCompWS.EtiGrid.GridsSequence = -1;
                    }
                }
            }
        },

        refreshConfig: function (e, ui) {
            var self = this;

            this.closeAllSubQueries();
            if (ui.revomeCfg === true) {
                if (self.cfgGrid.config.initialWidthModeP) {
                    self.cfgGrid.config.widthMode = "%";
                }
                self.cfgGrid.config.filterVisible = (self.cfgGrid.state.backup.fv === true);
                self.cfgGrid.config.filterable = (self.cfgGrid.state.backup.f === true);
                self.cfgGrid.config.horizontalScrollBar = (self.cfgGrid.state.backup.hsb === true);
                self.cfgGrid.config.verticalScrollBar = (self.cfgGrid.state.backup.vsb === true);
                self.cfgGrid.config.showRowNumber = (self.cfgGrid.state.backup.srn === true);
                self.cfgGrid.config.frozenCols = (self.cfgGrid.state.backup.fc ? self.cfgGrid.state.backup.fc : 0);

                for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                    self.cfgGrid.cols[i].order = self.cfgGrid.cols[i].orderOri;
                    self.cfgGrid.cols[i].tabStop = self.cfgGrid.cols[i].tabStopOri;
                    self.cfgGrid.cols[i].hidden = self.cfgGrid.cols[i].hiddenOri;
                    self.cfgGrid.cols[i].width = self.cfgGrid.cols[i].widthOri;
                }
                self.cfgGrid.cols = Enumerable.From(self.cfgGrid.cols).OrderBy(function (x) { return x.order }).ToArray();
            }

            if (ui.newGrid === true) {
                self.elementIn.innerHTML = etiGridGetHtml(self, self.cfgGrid, self.elementIn.id, ui.rebindProps);
                if (myCompWS.EtiGrid.GridsResizeHeight == -1) {
                    myCompWS.EtiGrid.GridsResizeHeight = $(window).height();
                    $(window).on('resize', function (e) {
                        var windowHeight = $(window).height();
                        if (myCompWS.EtiGrid.GridsResizeHeight != windowHeight) {
                            myCompWS.EtiGrid.GridsResizeHeight = windowHeight;
                            if (myCompWS.EtiGrid.GridsSequence == -1 && myCompWS.EtiGrid.GridsLoaded.length > 0) {
                                myCompWS.EtiGrid.GridsSequence = 0;
                                $("#" + myCompWS.EtiGrid.GridsLoaded[0]).trigger("resizeGridSize", { allGrids: true });
                            }
                        }
                    });
                }
                if (myCompWS.EtiGrid.GridsLoaded.indexOf(self.elementIn.id) == -1) {
                    myCompWS.EtiGrid.GridsLoaded.push(self.elementIn.id);
                }
            }
            etiGridRefreshScrollBar(self, self.elementIn.id, self.visibleData.length, self.cfgGrid.visibleRows, self.frozenColsWidth, self.cfgGrid.config.verticalScrollBar, (self.cfgGrid.editing.add === true));

            GridApplyComponents(self.elementIn.id);

            this.activateCell(0, { col: -1, row: -1 });

            this.filters = [];

            this.toogleOrder(0, "");
        },

        scrollPercent: function (e, perc) {
            var self = this;
            var maxRowOffset = this.visibleData.length - this.cfgGrid.visibleRows;
            if (self.cfgGrid.editing.allow === true) {
                if (self.cfgGrid.editing.add === true) {
                    maxRowOffset++;
                }
            }
            var row = parseInt(maxRowOffset * perc, 10);
            if (row < 0)
                row = 0;
            if (row > maxRowOffset)
                row = maxRowOffset;

            if (row != self.offsetRow) {
                this.scrollTo(e, { row: row, posScroll: false, actCell: true });
            }
        },

        toogleOrder: function (e, key) {
            var self = this;
            if (self.cfgGrid.config.orderable === true || self.cfgGrid.config.groupable === true || self.cfgGrid.orderBy.hasGroups === true) {
                var blnOldHasOrders = self.cfgGrid.orderBy.hasOrders;
                if (key != "") {
                    var blnIsGroup = false;
                    for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                        if (self.cfgGrid.cols[c].key == key) {
                            if (self.cfgGrid.cols[c].orderBy) {
                                blnIsGroup = self.cfgGrid.cols[c].orderBy.group;
                            }
                        }
                    }
                    for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                        if (self.cfgGrid.cols[c].key != key) {
                            if (!blnIsGroup) {
                                if (self.cfgGrid.cols[c].orderBy) {
                                    if (!self.cfgGrid.cols[c].orderBy.group) {
                                        if (self.cfgGrid.cols[c].orderBy.type == 'asc' || self.cfgGrid.cols[c].orderBy.type == 'desc') {
                                            self.cfgGrid.cols[c].orderBy.type = '';
                                            self.cfgGrid.cols[c].orderBy.level = 0;
                                        }
                                    }
                                }
                            }
                        } else {
                            if (self.cfgGrid.cols[c].orderBy) {
                                if (self.cfgGrid.cols[c].orderBy.group) {
                                    if (self.cfgGrid.cols[c].orderBy.type == 'asc') {
                                        self.cfgGrid.cols[c].orderBy.type = 'desc';
                                    } else {
                                        self.cfgGrid.cols[c].orderBy.type = 'asc';
                                    }
                                } else {
                                    if (self.cfgGrid.cols[c].orderBy.type == 'asc') {
                                        self.cfgGrid.cols[c].orderBy.type = 'desc';
                                        self.cfgGrid.cols[c].orderBy.level = self.cfgGrid.orderBy.numGroups + 1;
                                    } else if (self.cfgGrid.cols[c].orderBy.type == 'desc') {
                                        self.cfgGrid.cols[c].orderBy.type = '';
                                        self.cfgGrid.cols[c].orderBy.level = 0;
                                    } else {
                                        self.cfgGrid.cols[c].orderBy.type = 'asc';
                                        self.cfgGrid.cols[c].orderBy.level = self.cfgGrid.orderBy.numGroups + 1;
                                    }
                                }
                            } else {
                                self.cfgGrid.cols[c].orderBy = { type: 'asc', level: self.cfgGrid.orderBy.numGroups + 1, group: false };
                            }
                        }
                    }
                    etiGridSetOrderConfig(self.cfgGrid, true);
                }

                setEtiGridFiltOrdData(this, true, (key == ""));

                if (self.cfgGrid.orderBy.hasOrders || blnOldHasOrders) {
                    for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                        if (self.cfgGrid.cols[c].hidden !== true) {
                            if (self.cfgGrid.cols[c].grouped) {
                                $("#ArrEtiGrdGroup" + self.elementIn.id + "_" + c).html("");
                                if (self.cfgGrid.cols[c].orderBy) {
                                    if (self.cfgGrid.cols[c].orderBy.type == 'asc') {
                                        $("#ArrEtiGrdGroup" + self.elementIn.id + "_" + c).html("&uarr;");
                                    }
                                    if (self.cfgGrid.cols[c].orderBy.type == 'desc') {
                                        $("#ArrEtiGrdGroup" + self.elementIn.id + "_" + c).html("&darr;");
                                    }
                                }
                            } else {
                                $("#ArrEtiGrdTh" + self.elementIn.id + "_" + c).html("");
                                if (self.cfgGrid.cols[c].orderBy) {
                                    if (self.cfgGrid.cols[c].orderBy.type == 'asc') {
                                        $("#ArrEtiGrdTh" + self.elementIn.id + "_" + c).html("&uarr;");
                                    }
                                    if (self.cfgGrid.cols[c].orderBy.type == 'desc') {
                                        $("#ArrEtiGrdTh" + self.elementIn.id + "_" + c).html("&darr;");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.scrollTo(e, { row: 0, posScroll: true, actCell: true });
        },

        toogleGroup: function (e, ui) {
            var self = this;
            var sKey = ui.key;
            if (self.cfgGrid.config.groupable !== false) {
                var intNumColsDisp = 0;
                var blnNothingToDo = false;
                for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                    if (self.cfgGrid.cols[c].hidden !== true && !self.cfgGrid.cols[c].grouped) {
                        intNumColsDisp++;
                    }
                }
                var newMaxLevel = self.cfgGrid.orderBy.numOrders + 1;
                for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                    if (self.cfgGrid.cols[c].key == sKey) {
                        var isRemoveGroup = false;
                        if (self.cfgGrid.cols[c].orderBy) {
                            if (self.cfgGrid.cols[c].orderBy.group) {
                                isRemoveGroup = true;
                                self.cfgGrid.cols[c].orderBy.type = '';
                                self.cfgGrid.cols[c].orderBy.group = false;
                                self.cfgGrid.cols[c].orderBy.level = 0;
                            }
                        }
                        if (!isRemoveGroup) {
                            if (intNumColsDisp > 1) {
                                self.cfgGrid.cols[c].orderBy = { type: 'asc', level: newMaxLevel++, group: true };
                                for (var c1 = 0; c1 < self.cfgGrid.cols.length; c1++) {
                                    if (self.cfgGrid.cols[c1].orderBy) {
                                        if (!self.cfgGrid.cols[c1].orderBy.group) {
                                            self.cfgGrid.cols[c1].orderBy.level = newMaxLevel++;
                                        }
                                    }
                                }
                            } else {
                                blnNothingToDo = true;
                            }
                        }
                    }
                }
                if (!blnNothingToDo) {
                    etiGridSetOrderConfig(self.cfgGrid, true);
                    this.appendGroupHeaders(0, false);
                    this.refreshConfig(0, { revomeCfg: false, newGrid: true, rebindProps: true });
                }
            }
        },

        changeColOrder: function (e, ui) {
            var self = this;
            var intOrderKey1 = -1;
            var intOrderKey2 = -1;
            var blnNothingToDo = true;
            var intOrder = 0;
            for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                intOrder++;
                if (!self.cfgGrid.cols[c].order) {
                    self.cfgGrid.cols[c].order = intOrder;
                }
                if (self.cfgGrid.cols[c].key == ui.key1) {
                    intOrderKey1 = self.cfgGrid.cols[c].order;
                }
                if (self.cfgGrid.cols[c].key == ui.key2) {
                    intOrderKey2 = self.cfgGrid.cols[c].order;
                }
            }
            if (intOrderKey1 >= 0 && intOrderKey2 >= 0) {
                if (intOrderKey1 != intOrderKey2) {
                    blnNothingToDo = false;
                    if (intOrderKey1 < intOrderKey2) {
                        for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                            if (self.cfgGrid.cols[c].order >= intOrderKey1 && self.cfgGrid.cols[c].order <= intOrderKey2) {
                                if (self.cfgGrid.cols[c].key == ui.key1) {
                                    self.cfgGrid.cols[c].order = intOrderKey2;
                                } else {
                                    self.cfgGrid.cols[c].order--;
                                }
                            }
                        }
                    } else {
                        for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                            if (self.cfgGrid.cols[c].order >= intOrderKey2 && self.cfgGrid.cols[c].order <= intOrderKey1) {
                                if (self.cfgGrid.cols[c].key == ui.key1) {
                                    self.cfgGrid.cols[c].order = intOrderKey2;
                                } else {
                                    self.cfgGrid.cols[c].order++;
                                }
                            }
                        }
                    }
                }
            }
            if (!blnNothingToDo) {
                etiGridSetUserConfig(self.cfgGrid);
                self.cfgGrid.cols = Enumerable.From(self.cfgGrid.cols).OrderBy(function (x) { return x.order }).ToArray();
                this.refreshConfig(0, { revomeCfg: false, newGrid: true, rebindProps: true });
            }
        },

        setFilterFocus: function (e, ui) {
            var self = this;
            if (ui.PressedKey != '' && ui.keyToFocus !== 0) {
                $("#idGrdFlt__" + self.elementIn.id + "_" + (ui.keyToFocus - 1)).focus();
                EtiComponentCellUpdate("idGrdFlt__" + self.elementIn.id + "_" + (ui.keyToFocus - 1), ui.PressedKey);
                self.setFilter(e, "TXT|" + (ui.keyToFocus - 1) + "|" + ui.PressedKey);
            } else {
                $("#idGrdFlt__" + self.elementIn.id + "_" + (ui.keyToFocus - 1)).focus();
                if (myCompWS.EtiCombo.Posiciona && myCompWS.EtiCombo.SelValidated && myCompWS.EtiCombo.PosicionaValor) {
                    var myKey = self.cfgGrid.cols[myCompWS.EtiCombo.SelColunaValor - 1].key;
                    var lstRows = self.cfgGrid.rows.filter(function (f) { return f[myKey] == myCompWS.EtiCombo.PosicionaValor });
                    if (lstRows.length >= 1) {
                        var rowNumber = self.cfgGrid.rows.indexOf(lstRows[0]);
                        if (rowNumber >= 0) {
                            this.setProperty(e, { name: 'selectedrow', value: { key: myKey, rowNumber: rowNumber } });
                        }
                    }
                }
            }
            myCompWS.EtiCombo.Posiciona = false;
            myCompWS.EtiCombo.PosicionaValor = '';
        },

        setFilter: function (e, ui) {
            var self = this;
            if (etiGridComplFilter(self.elementIn.id, self.cfgGrid.cols, self.filters, ui)) {
                setEtiGridFiltOrdData(this, true, true);
                etiGridRefreshScrollBar(self, self.elementIn.id, self.visibleData.length, self.cfgGrid.visibleRows, self.frozenColsWidth, self.cfgGrid.config.verticalScrollBar, (self.cfgGrid.editing.add === true));
                this.scrollTo(e, { row: 0, posScroll: true, actCell: true });
            }
        },

        saveCols: function (e, key) {
            var self = this;
            self.cfgGrid.state.allColsWidth = 0;
            etiGridSaveColWidths(this.cfgGrid.config, this.cfgGrid.cols);
        },

        selectAllRows: function (e, ui) {
            var self = this;
            for (var i = 0; i < self.cfgGrid.rows.length; i++) {
                self.cfgGrid.rows[i].etiRowSelected = ui.select;
            }
            this.scrollTo(e, { row: self.offsetRow, posScroll: false, actCell: true });
        },

        insertRow: function (e, ui) {
            var self = this;
            if (self.cfgGrid.editing.add === true && this.cfgGrid.editing.disabled !== true) {
                var myIndexerValue = -1;
                var originalIndex = -1;
                var blnInsFim = false || ui.NoFim;
                if (self.activeRow == -1 || self.cfgGrid.rows.length == 0) {
                    blnInsFim = true;
                }
                if (self.cfgGrid.indexerKey) {
                    if (blnInsFim) {
                        myIndexerValue = -1;
                        for (var l = 0; l < self.cfgGrid.rows.length; l++) {
                            if (self.cfgGrid.rows[l][self.cfgGrid.indexerKey] >= myIndexerValue) {
                                myIndexerValue = self.cfgGrid.rows[l][self.cfgGrid.indexerKey] + 1;
                            }
                        }
                    } else {
                        if (self.activeRow + self.offsetRow >= self.visibleData.length) {
                            return;
                        }
                        myIndexerValue = self.visibleData[self.activeRow + self.offsetRow][self.cfgGrid.indexerKey];
                        if (!self.naturalData) {
                            originalIndex = self.cfgGrid.rows.indexOf(self.visibleData[self.activeRow + self.offsetRow]);
                        }
                        var strExpr = "x['" + self.cfgGrid.indexerKey + "']>=" + myIndexerValue;
                        var myLRows = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return eval(strExpr) }).ToArray();
                        for (var l = 0; l < myLRows.length; l++) {
                            myLRows[l][self.cfgGrid.indexerKey]++;
                        }
                    }
                    if (myIndexerValue == -1) {
                        myIndexerValue = 1;
                    }
                }
                var myNewRow = EtiGridGetNewRow(self.cfgGrid.indexerKey, myIndexerValue, self.cfgGrid.cols);
                if (blnInsFim) {
                    self.visibleData.push(myNewRow);
                    if (!self.naturalData) {
                        self.cfgGrid.rows.push(myNewRow);
                    }
                } else {
                    self.visibleData.splice(self.activeRow + self.offsetRow, 0, myNewRow);
                    if (!self.naturalData) {
                        if (originalIndex != -1) {
                            self.cfgGrid.rows.splice(originalIndex, 0, myNewRow);
                        }
                    }
                }
                $("#" + self.elementIn.id).trigger("etiRowAdded", { row: myNewRow });
                var numDataRows = self.visibleData.length;
                if (ui.activateCell) {
                    var firstColAll = -1;
                    for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                        if (self.cfgGrid.cols[i].hidden || self.cfgGrid.cols[i].grouped) {
                        } else {
                            if (self.cfgGrid.cols[i].tabStop !== false) {
                                if (firstColAll == -1) {
                                    firstColAll = i;
                                }
                            }
                        }
                    }

                    if (blnInsFim) {
                        if (numDataRows <= self.cfgGrid.visibleRows) {
                            this.scrollTo(e, { row: self.offsetRow, posScroll: true, actCell: true });
                            this.activateCell(e, { col: firstColAll, row: self.visibleData.length - 1 });
                        } else {
                            this.scrollTo(e, { row: self.visibleData.length - self.cfgGrid.visibleRows, posScroll: true, actCell: true });
                            this.activateCell(e, { col: firstColAll, row: self.cfgGrid.visibleRows - 1 });
                        }
                    } else {
                        this.scrollTo(e, { row: self.offsetRow, posScroll: true, actCell: true });
                        this.activateCell(e, { col: firstColAll, row: self.activeRow });
                    }
                }
                etiGridRefreshScrollBar(self, self.elementIn.id, self.visibleData.length, self.cfgGrid.visibleRows, self.frozenColsWidth, self.cfgGrid.config.verticalScrollBar, (self.cfgGrid.editing.add === true));
                if (self.cfgGrid.etiViewModel) {
                    self.cfgGrid.etiViewModel.SetEditState(true);
                }
            }
        },

        removeActiveRow: function (e) {
            var self = this;
            if (self.cfgGrid.editing.remove === true && this.cfgGrid.editing.disabled !== true) {
                if (self.activeRow != -1) {
                    if (self.visibleData.length > 0) {
                        var myIndexerValue = 0;
                        if (self.cfgGrid.indexerKey) {
                            myIndexerValue = self.visibleData[self.activeRow + self.offsetRow][self.cfgGrid.indexerKey];
                        }
                        var originalIndex = -1;
                        if (!self.naturalData) {
                            originalIndex = self.cfgGrid.rows.indexOf(self.visibleData[self.activeRow + self.offsetRow]);
                        }
                        var blnCanRemove = true;
                        if (self.cfgGrid.editing.canRemove) {
                            blnCanRemove = self.cfgGrid.editing.canRemove(self.visibleData[self.activeRow + self.offsetRow]);
                        }
                        if (blnCanRemove) {
                            var deletedRow = self.visibleData[self.activeRow + self.offsetRow];
                            $("#" + self.elementIn.id).trigger("etiRowDeleting", { row: deletedRow });
                            self.visibleData.splice(self.activeRow + self.offsetRow, 1);
                            if (originalIndex != -1) {
                                self.cfgGrid.rows.splice(originalIndex, 1);
                            }
                            $("#" + self.elementIn.id).trigger("etiRowDeleted", { row: deletedRow });
                            if (self.cfgGrid.indexerKey) {
                                var strExpr = "x['" + self.cfgGrid.indexerKey + "']>" + myIndexerValue;
                                var myLRows = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return eval(strExpr) }).ToArray();
                                for (var l = 0; l < myLRows.length; l++) {
                                    myLRows[l][self.cfgGrid.indexerKey]--;
                                }
                            }
                            var numDataRows = self.visibleData.length;
                            if (numDataRows < (self.offsetRow + self.cfgGrid.visibleRows)) {
                                if (self.offsetRow == 0) {
                                    this.scrollTo(e, { row: self.offsetRow, posScroll: true, actCell: true });
                                    if (self.activeRow >= numDataRows) {
                                        this.activateCell(e, { col: self.activeCol, row: self.activeRow - 1 });
                                    } else {
                                        this.activateCell(e, { col: self.activeCol, row: self.activeRow });
                                    }
                                } else {
                                    this.scrollTo(e, { row: self.offsetRow - 1, posScroll: true, actCell: true });
                                    this.activateCell(e, { col: self.activeCol, row: self.activeRow });
                                }
                            } else {
                                this.scrollTo(e, { row: self.offsetRow, posScroll: true, actCell: true });
                                this.activateCell(e, { col: self.activeCol, row: self.activeRow });
                            }
                            etiGridRefreshScrollBar(self, self.elementIn.id, self.visibleData.length, self.cfgGrid.visibleRows, self.frozenColsWidth, self.cfgGrid.config.verticalScrollBar, (self.cfgGrid.editing.add === true));
                            if (self.cfgGrid.etiViewModel) {
                                self.cfgGrid.etiViewModel.SetEditState(true);
                            }
                        }
                    }
                }
            }
        },

        gridRefreshData: function (e) {
            var self = this;
            this.scrollTo(e, { row: self.offsetRow, posScroll: false, actCell: true });
            etiGridRefreshScrollBar(self, self.elementIn.id, self.visibleData.length, self.cfgGrid.visibleRows, self.frozenColsWidth, self.cfgGrid.config.verticalScrollBar, (self.cfgGrid.editing.add === true));
            if (this.activeRow != undefined) {
                if (this.activeRow != -1) {
                    if ((this.activeRow + this.offsetRow) > self.visibleData.length) {
                        this.activeRow = -1;
                        this.offsetRow = 0;
                    }
                }
            }
            this.activateCell(0, { col: this.activeCol, row: this.activeRow, doFocus: true });
        },

        appendGroupHeaders: function (e, pInicio) {
            var self = this;

            var l = 0, k = 0, i = 0;
            if (!pInicio) {
                var heads = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return x.etiGroupLevel }).ToArray();
                for (k = 0; k < heads.length; k++) {
                    var index = self.cfgGrid.rows.indexOf(heads[k]);
                    self.cfgGrid.rows.splice(index, 1);
                }
            }

            var sVar1 = "";
            var sVar2 = "";
            for (l = self.cfgGrid.orderBy.numGroups; l >= 1; l--) {
                sVar1 = "";
                sVar2 = "";
                for (i = 0; i < self.cfgGrid.cols.length; i++) {
                    if (self.cfgGrid.cols[i].hidden !== true) {
                        if (sVar2 != "") {
                            sVar2 += ", ";
                        }
                        if (self.cfgGrid.cols[i].grouped) {
                            if (self.cfgGrid.cols[i].orderBy.level <= l) {
                                if (sVar1 != "") {
                                    sVar1 += "+'|'+";
                                }
                                sVar1 += "x." + self.cfgGrid.cols[i].key;
                                sVar2 += self.cfgGrid.cols[i].key + ": x." + self.cfgGrid.cols[i].key;
                            } else {
                                sVar2 += self.cfgGrid.cols[i].key + ": " + getEtiGridDefaultsMaxMin(self.cfgGrid.cols[i].editor.type, false, false);
                            }
                        } else {
                            sVar2 += self.cfgGrid.cols[i].key + ": " + getEtiGridDefaultsMaxMin(self.cfgGrid.cols[i].editor.type, false, false);
                        }
                    }
                }
                var levelDistict = eval("Enumerable.From(self.cfgGrid.rows).Distinct(function (x) { return " + sVar1 + "; }).Select(function (x) { return { " + sVar2 + ", etiGroupLevel: " + l + " } }).ToArray()");
                for (k = 0; k < levelDistict.length; k++) {
                    self.cfgGrid.rows.push(levelDistict[k]);
                }
            }
        },

        gridExpandRow: function (e, ui) {
            var self = this;
            self.visibleData[ui.row].etiGroupClosed = !ui.open;

            var l = 0, i = 0;
            var strFilter = "x.etiGroupLevel!=" + self.visibleData[ui.row].etiGroupLevel;
            for (l = 1; l <= self.visibleData[ui.row].etiGroupLevel; l++) {
                for (i = 0; i < self.cfgGrid.cols.length; i++) {
                    if (self.cfgGrid.cols[i].grouped) {
                        if (l == self.cfgGrid.cols[i].orderBy.level) {
                            strFilter += " && x['" + self.cfgGrid.cols[i].key + "']=='" + self.visibleData[ui.row][self.cfgGrid.cols[i].key] + "'";
                        }
                    }
                }
            }

            var myRRows = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return eval(strFilter) }).ToArray();
            for (i = 0; i < myRRows.length; i++) {
                myRRows[i].etiGroupHidden = !ui.open;
                if (myRRows[i].etiGroupLevel) {
                    myRRows[i].etiGroupClosed = !ui.open;
                }
            }

            setEtiGridFiltOrdData(this, false, false);
            etiGridRefreshScrollBar(self, self.elementIn.id, self.visibleData.length, self.cfgGrid.visibleRows, self.frozenColsWidth, self.cfgGrid.config.verticalScrollBar, (self.cfgGrid.editing.add === true));

            var intNewOffsetRow = self.offsetRow;
            if (intNewOffsetRow > self.visibleData.length - self.cfgGrid.visibleRows) {
                intNewOffsetRow = self.visibleData.length - self.cfgGrid.visibleRows;
            }
            if (intNewOffsetRow < 0) {
                intNewOffsetRow = 0;
            }
            this.scrollTo(e, { row: intNewOffsetRow, posScroll: true, actCell: true });
        },

        getAllColsWidth: function () {
            var self = this;
            var blnFixAllColsWidth = true;
            if (!self.cfgGrid.state.allColsWidth) {
                var numGroups = 0;
                var intWidth = 0;
                var intRealWidth = 0;
                var blnPerc = (self.cfgGrid.config.widthMode == "%");
                var intMaxWidth = $("#" + self.elementIn.id).width() - 6;
                for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                    if (self.cfgGrid.cols[i].grouped) {
                        numGroups += 1;
                    } else if (!self.cfgGrid.cols[i].hidden) {
                        intRealWidth = $("#idGrd__" + self.elementIn.id + "_" + i + "_0").width();
                        if (intRealWidth == 0) {
                            blnFixAllColsWidth = false;
                            if (blnPerc) {
                                intRealWidth = parseInt(intMaxWidth * self.cfgGrid.cols[i].width / 100, 10) - 20;
                            } else {
                                intRealWidth = self.cfgGrid.cols[i].width - 7;
                            }
                        }
                        intWidth += intRealWidth + 6;
                    }
                }
                if (self.cfgGrid.config.verticalScrollBar) {
                    intMaxWidth -= $("#" + self.elementIn.id + "_scroll").width();
                }
                intWidth += (myCompWS.EtiGrid.HeadColWidthGrps * numGroups + 3);
                if (intWidth > intMaxWidth) {
                    intWidth = intMaxWidth;
                }
                self.cfgGrid.state.allColsWidth = intWidth;
            }
            var intAllColsWidth = self.cfgGrid.state.allColsWidth;
            if (!blnFixAllColsWidth) {
                self.cfgGrid.state.allColsWidth = 0;
            }
            return intAllColsWidth;
        },

        scrollTo: function (e, ui) {
            var row = ui.row;
            var self = this;
            var antOffset = 0;
            if (this.offsetRow) {
                antOffset = this.offsetRow;
            }
            this.offsetRow = row;
            var blnPar = ((row / 2) == parseInt(row / 2));
            var intGroupLevel = 0;
            var sElemId = "";
            var blnGroupTotals = false;

            var numRowsData = self.visibleData.length;
            var numRowsHidden = 0;
            var numRowsVisible = 0;
            if (self.cfgGrid.editing.allRowsMode === true) {
                numRowsVisible = self.cfgGrid.visibleRows;
            } else {
                if (self.cfgGrid.editing.add === true) {
                    numRowsVisible = numRowsData + 1;
                } else {
                    numRowsVisible = numRowsData;
                }
            }

            var blnBindedProps = (self.lstBindedProps.length > 0);
            var blnAllRowsModeAct = false;
            if (self.cfgGrid.editing.allRowsMode === true) {
                if (self.cfgGrid.editing.allRowsKeys) {
                    if (self.cfgGrid.editing.allRowsKeys.length > 0) {
                        blnAllRowsModeAct = true;
                    }
                }
            }
            for (var l = 0; l < self.cfgGrid.visibleRows; l++) {
                var hasRowNumbers = (self.cfgGrid.config.showRowNumber === true);
                if (l < numRowsVisible) {
                    if (hasRowNumbers) {
                        $("#" + self.elementIn.id + "SpcColA" + l).html(this.offsetRow + l + 1);
                    }
                    if (self.cfgGrid.subQueries.has) {
                        var strSqInfo = "";
                        for (var q = 1; q <= self.cfgGrid.subQueries.num; q++) {
                            var sDetName = "cdet" + q;
                            if (self.visibleData[l + row][sDetName]) {
                                if (self.visibleData[l + row][sDetName].length > 0) {
                                    strSqInfo += "<span class='etiGridTableSQSp'><a href='javascript:etiOpenSubQuery(\"" + self.elementIn.id + "\", " + (l + row) + "," + q + ");'>+</a></span>";
                                } else {
                                    strSqInfo += "<span class='etiGridTableSQSp'></span>";
                                }
                            } else {
                                strSqInfo += "<span class='etiGridTableSQSp'></span>";
                            }
                        }
                        $("#" + self.elementIn.id + "SbQryColA" + l).html(strSqInfo);
                    }
                    intGroupLevel = 0
                    if (self.cfgGrid.orderBy.hasGroups) {
                        intGroupLevel = self.visibleData[l + row].etiGroupLevel;
                    }
                    if (intGroupLevel) {
                        var strValue = "";
                        for (c = 0; c < self.cfgGrid.cols.length; c++) {
                            if (self.cfgGrid.cols[c].grouped === true) {
                                if (self.cfgGrid.cols[c].orderBy.level == intGroupLevel) {
                                    strValue = self.visibleData[l + row][self.cfgGrid.cols[c].key];
                                }
                            }
                        }
                        $("#" + self.elementIn.id + "GrpTile" + l).css({ display: 'block', 'max-width': self.getAllColsWidth() + 'px', background: etiGridBackColor(intGroupLevel) });
                        if (self.visibleData[l + row].etiGroupClosed) {
                            strValue = "&nbsp;<a href='.' onclick='return etiGridOpenGroup(" + '"' + self.elementIn.id + '"' + "," + (l + row) + ", true);'>&nbsp;<span class='etiGridTableGroupPnt'>&#9658;</span>&nbsp;</a> " + strValue;
                        } else {
                            strValue = "&nbsp;<a href='.' onclick='return etiGridOpenGroup(" + '"' + self.elementIn.id + '"' + "," + (l + row) + ", false);'>&nbsp;<span class='etiGridTableGroupPnt'>&#9660;</span>&nbsp;</a> " + strValue;
                        }
                        for (var i = 1; i < intGroupLevel; i++) {
                            strValue = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + strValue;
                        }
                        $("#" + self.elementIn.id + "GrpTile" + l).html(strValue);
                    } else {
                        if (self.cfgGrid.orderBy.hasGroups) {
                            $("#" + self.elementIn.id + "GrpTile" + l).css({ display: 'none' });
                            $("#" + self.elementIn.id + "GrpTile" + l).html("");
                        }
                    }
                    var blnIsMultiSelected = false;
                    if (self.cfgGrid.editing.allow !== true && self.cfgGrid.editing.multiSelection === true) {
                        blnIsMultiSelected = !!self.visibleData[l + row].etiRowSelected;
                    }
                    if (intGroupLevel) {
                        $("#EtiGrdLn" + self.elementIn.id + "_" + l).css({ display: 'table-row', background: etiGridBackColor(intGroupLevel) });
                        if (self.cfgGrid.config.frozenCols > 0 || hasRowNumbers || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                            $("#EtiGrdLn" + self.elementIn.id + "_" + l + "f").css({ display: 'table-row', background: etiGridBackColor(intGroupLevel) });
                        }
                    } else {
                        if (blnIsMultiSelected) {
                            $("#EtiGrdLn" + self.elementIn.id + "_" + l).css({ display: 'table-row', background: 'linear-gradient(#F6991F, #FBB752)' });
                            if (self.cfgGrid.config.frozenCols > 0 || hasRowNumbers || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                                $("#EtiGrdLn" + self.elementIn.id + "_" + l + "f").css({ display: 'table-row', background: 'linear-gradient(#F6991F, #FBB752)' });
                            }
                        } else {
                            $("#EtiGrdLn" + self.elementIn.id + "_" + l).css({ display: 'table-row', background: (blnPar ? myCompWS.EtiGrid.BackColor1 : myCompWS.EtiGrid.BackColor2) });
                            if (self.cfgGrid.config.frozenCols > 0 || hasRowNumbers || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                                $("#EtiGrdLn" + self.elementIn.id + "_" + l + "f").css({ display: 'table-row', background: (blnPar ? myCompWS.EtiGrid.BackColor1 : myCompWS.EtiGrid.BackColor2) });
                            }
                        }
                    }
                    blnPar = !blnPar;
                } else {
                    numRowsHidden++;
                    $("#EtiGrdLn" + self.elementIn.id + "_" + l).css({ display: 'none' });
                    if (self.cfgGrid.config.frozenCols > 0 || hasRowNumbers || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                        $("#EtiGrdLn" + self.elementIn.id + "_" + l + "f").css({ display: 'none' });
                    }
                }
                if (l + row < numRowsData) {
                    intGroupLevel = 0
                    if (self.cfgGrid.orderBy.hasGroups) {
                        intGroupLevel = self.visibleData[l + row].etiGroupLevel;
                    }
                    for (var c = 0; c < self.cfgGrid.cols.length; c++) {
                        if (self.cfgGrid.cols[c].hidden !== true && self.cfgGrid.cols[c].grouped !== true) {
                            sElemId = GetGridCellId(self.elementIn.id, c, l);
                            if (blnBindedProps) {
                                EtiComponentRefreshProps(sElemId, self.lstBindedProps, self.visibleData[l + row], this.cfgGrid.cols[c].key, (self.cfgGrid.editing.disabled === true));
                            }
                            if (intGroupLevel) {
                                blnGroupTotals = false;
                                if (self.cfgGrid.config.groupTotals) {
                                    if (self.cfgGrid.cols[c].summary) {
                                        blnGroupTotals = true;
                                    }
                                }
                                if (blnGroupTotals) {
                                    if (!self.visibleData[l + row].etiGroupCalc) {
                                        if (self.cfgGrid.state.summary) {
                                            for (var cc = 0; cc < self.cfgGrid.cols.length; cc++) {
                                                if (self.cfgGrid.cols[cc].summary && !self.cfgGrid.cols[cc].hidden && !self.cfgGrid.cols[cc].grouped) {
                                                    var strKey = self.cfgGrid.cols[cc].key;
                                                    var dblTotal = 0;
                                                    var strExpr = "!x.etiGroupLevel";
                                                    for (var lvl = 1; lvl <= self.visibleData[l + row].etiGroupLevel; lvl++) {
                                                        for (var ccc = 0; ccc < self.cfgGrid.cols.length; ccc++) {
                                                            if (self.cfgGrid.cols[ccc].grouped) {
                                                                if (self.cfgGrid.cols[ccc].orderBy.level == lvl) {
                                                                    strExpr += " && x." + self.cfgGrid.cols[ccc].key + "=='" + self.visibleData[l + row][self.cfgGrid.cols[ccc].key] + "'";
                                                                }
                                                            }
                                                        }
                                                    }
                                                    var myRRows = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return eval(strExpr) }).ToArray();
                                                    for (var ll = 0; ll < myRRows.length; ll++) {
                                                        dblTotal += myRRows[ll][strKey];
                                                    }
                                                    self.visibleData[l + row][this.cfgGrid.cols[cc].key] = dblTotal;
                                                }
                                            }
                                        }
                                        self.visibleData[l + row].etiGroupCalc = true;
                                    }
                                    EtiComponentCellUpdate(sElemId, self.visibleData[l + row][this.cfgGrid.cols[c].key]);
                                } else {
                                    $('#' + sElemId)[0].textContent = ' ';
                                }
                            } else {
                                if (this.cfgGrid.cols[c].af === true) {
                                    if (!self.visibleData[l + row]["AdittionalFields"]) {
                                        self.visibleData[l + row]["AdittionalFields"] = {};
                                    }
                                    EtiComponentCellUpdate(sElemId, self.visibleData[l + row]["AdittionalFields"][this.cfgGrid.cols[c].key.substring(17)]);
                                } else {
                                    EtiComponentCellUpdate(sElemId, self.visibleData[l + row][this.cfgGrid.cols[c].key]);
                                }
                            }
                            if (blnAllRowsModeAct) {
                                $("#" + sElemId).setProperty("locked", false);
                            }
                            if (this.cfgGrid.cols[c].template) {
                                $("#" + sElemId).trigger("setCss", { css: GetEtiGridCondition(self.visibleData[l + row], this.cfgGrid.cols[c].template), level: intGroupLevel });
                            } else {
                                $("#" + sElemId).trigger("setCss", { css: "", level: intGroupLevel });
                            }
                        }
                    }
                } else {
                    for (c = 0; c < self.cfgGrid.cols.length; c++) {
                        if (self.cfgGrid.cols[c].hidden !== true && self.cfgGrid.cols[c].grouped !== true) {
                            sElemId = GetGridCellId(self.elementIn.id, c, l);
                            $("#" + sElemId).trigger("cleanValue");
                            if (blnBindedProps) {
                                var myNewRow = EtiGridGetNewRow(self.cfgGrid.indexerKey, 0, self.cfgGrid.cols);
                                EtiComponentRefreshProps(sElemId, self.lstBindedProps, myNewRow, this.cfgGrid.cols[c].key, (self.cfgGrid.editing.disabled === true));
                            }
                            if (blnAllRowsModeAct) {
                                var blnAllRowsKey = (self.cfgGrid.editing.allRowsKeys.indexOf(this.cfgGrid.cols[c].key) != -1);
                                $("#" + sElemId).setProperty("locked", !blnAllRowsKey);
                            }
                        }
                    }
                }
            }
            if (numRowsHidden == 0) {
                $("#" + self.elementIn.id + "_EmpArea").css({ display: 'none' });
            } else {
                var intRowHeight = (self.cfgGrid.config.rowHeight ? self.cfgGrid.config.rowHeight : myCompWS.EtiGrid.HeightRowDefault);
                $("#" + self.elementIn.id + "_EmpArea").css({ display: '', width: '100px', height: (numRowsHidden * intRowHeight) + 'px' });
            }
            if (ui.posScroll) {
                var newScrollTop = this.offsetRow * 34.8;
                if ($("#" + self.elementIn.id + "_scroll").scrollTop() != newScrollTop) {
                    myCompWS.EtiGrid.IsScrolling = true;
                    $("#" + self.elementIn.id + "_scroll").scrollTop(newScrollTop);
                }
            } else {
                if (ui.actCell) {
                    if (this.activeRow != -1) {
                        if (this.activeRow != undefined) {
                            var newActiveRow = (this.activeRow + antOffset - this.offsetRow);
                            if (newActiveRow < 0)
                                newActiveRow = -1;
                            if (newActiveRow > this.cfgGrid.visibleRows)
                                newActiveRow = -1;
                            this.activateCell(0, { col: this.activeCol, row: newActiveRow, ignoreSelect: true });
                        } else {
                            this.activateCell(0, { col: -1, row: -1, ignoreSelect: true });
                        }
                    }
                }
            }
        },

        closeSubQuery: function (e, ui) {
            var self = this;
            if (self.cfgGrid.subQueries.popups) {
                for (var s = 0; s < self.cfgGrid.subQueries.popups.length; s++) {
                    if (self.cfgGrid.subQueries.popups[s].row == ui.row && self.cfgGrid.subQueries.popups[s].subQ == ui.subQ) {
                        self.cfgGrid.subQueries.popups[s].isOpen = false;
                        document.getElementById(self.elementIn.id + "SubQry" + ui.row + "Z" + ui.subQ).style.display = 'none';
                    }
                }
            }
        },

        openSubQuery: function (e, ui) {
            var self = this;

            var blnNewDiv = true;
            if (self.cfgGrid.subQueries.popups) {
                for (var s = 0; s < self.cfgGrid.subQueries.popups.length; s++) {
                    if (self.cfgGrid.subQueries.popups[s].row == ui.row && self.cfgGrid.subQueries.popups[s].subQ == ui.subQ) {
                        blnNewDiv = false;
                        if (self.cfgGrid.subQueries.popups[s].isOpen) {
                            document.getElementById(self.elementIn.id + "SubQry" + ui.row + "Z" + ui.subQ).style.display = 'none';
                        }
                        self.cfgGrid.subQueries.popups[s].isOpen = true;
                        document.getElementById(self.elementIn.id + "SubQry" + ui.row + "Z" + ui.subQ).style.display = '';
                        etiPushUpSubQuery(self.elementIn.id + "SubQry" + ui.row + "Z" + ui.subQ, false);
                    }
                }
            } else {
                self.cfgGrid.subQueries.popups = [];
            }
            if (blnNewDiv) {
                var divId = self.elementIn.id + "SubQry" + ui.row + "Z" + ui.subQ;
                self.cfgGrid.subQueries.popups.push({ isOpen: true, row: ui.row, subQ: ui.subQ, id: divId });

                var newSQ = document.createElement("div");
                newSQ.className = "etiGridSubQuery";
                newSQ.id = divId;
                var strCloseWindow = "<a href='javascript:etiCloseSubQuery(\"" + self.elementIn.id + "\", " + ui.row + ", " + ui.subQ + ");'><img src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Varios/FecharAplicacao.16.png' /></a>";
                newSQ.innerHTML = "<div class='etiGridSubQueryTitle'>" +
                                    "<div class='etiGridSubQueryTitleA'>" + self.cfgGrid.subQueryInfo[ui.subQ - 1].features.title + "</div>" +
                                    "<div class='etiGridSubQueryTitleB'>" + strCloseWindow + "</div>" +
                                    "<div style='clear: both;'></div>" +
                                  "</div>" +
                                  "<div class='etiGridSubQueryTitleC' id='GRD" + divId + "'> </div>";
                $("body").append(newSQ);

                var myRows = self.visibleData[ui.row]["cdet" + ui.subQ];
                var myCols = self.cfgGrid.subQueryInfo[ui.subQ - 1].cols;
                var mySubQueryInfo = self.cfgGrid.subQueryInfo[ui.subQ - 1].subQueryInfo;
                var myConfig = { widthMode: self.cfgGrid.subQueryInfo[ui.subQ - 1].features.tpMedidaCols };
                $("#GRD" + divId).etiGrid({
                    cols: myCols,
                    rows: myRows,
                    config: myConfig,
                    subQueryInfo: mySubQueryInfo
                });

                $("#" + divId).draggable({ stack: '.etiGridSubQuery' });
                etiPushUpSubQuery(divId, true);
            }
        },

        closeAllSubQueries: function (e) {
            var self = this;
            if (self.cfgGrid.subQueries.popups) {
                for (var s = 0; s < self.cfgGrid.subQueries.popups.length; s++) {
                    self.cfgGrid.subQueries.popups[s].isOpen = false;
                    $("#GRD" + self.cfgGrid.subQueries.popups[s].id).trigger("closeAllSubQueries");
                    document.getElementById(self.cfgGrid.subQueries.popups[s].id).style.display = 'none';
                }
            }
        },

        activateCell: function (e, ui) {
            var self = this;
            if (self.cfgGrid.editing.disabled !== true) {
                var intGroupLevel = 0
                var blnRowPaint = true;
                var blnUnselect = false;
                var blnRowSelect = false;
                var blnRowSelector = false;
                if (ui.ignoreSelect === true) {
                    if (self.cfgGrid.editing.multiSelection === true) {
                        blnRowPaint = false;
                    }
                } else if (ui.ignoreSelect === false) {
                    blnRowSelect = true;
                }
                if (this.activeRow != undefined && this.offsetRow != undefined) {
                    if (this.activeRow != -1 && ui.row != -1) {
                        var blnPar = false;
                        if (self.cfgGrid.editing.allow !== true && self.cfgGrid.editing.multiSelection === true) {
                            if (blnRowPaint) {
                                if (!ui.acumSelect) {
                                    var myRRows = Enumerable.From(self.cfgGrid.rows).Where(function (x) { return x.etiRowSelected }).ToArray();
                                    if (myRRows.length > 0) {
                                        for (var i = 0; i < myRRows.length; i++) {
                                            myRRows[i].etiRowSelected = false;
                                        }
                                        etiGridCheckSelected(self, -1, false);
                                    }
                                    blnPar = false;
                                    for (var l = 0; l < self.cfgGrid.visibleRows; l++) {
                                        blnPar = (((l + this.offsetRow) / 2) == parseInt((l + this.offsetRow) / 2));
                                        $("#EtiGrdLn" + self.elementIn.id + "_" + l).css({ background: (blnPar ? myCompWS.EtiGrid.BackColor1 : myCompWS.EtiGrid.BackColor2) });
                                        if (self.cfgGrid.config.frozenCols > 0 || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                                            $("#EtiGrdLn" + self.elementIn.id + "_" + l + "f").css({ background: (blnPar ? myCompWS.EtiGrid.BackColor1 : myCompWS.EtiGrid.BackColor2) });
                                        }
                                    }
                                }
                                if (self.visibleData[this.activeRow + this.offsetRow].etiRowSelected === true) {
                                    self.visibleData[this.activeRow + this.offsetRow].etiRowSelected = false;
                                    etiGridCheckSelected(self, this.activeRow, false);
                                    blnUnselect = true;
                                } else {
                                    self.visibleData[this.activeRow + this.offsetRow].etiRowSelected = true;
                                    etiGridCheckSelected(self, this.activeRow, true);
                                }
                            }
                        }
                        if (self.cfgGrid.orderBy.hasGroups) {
                            intGroupLevel = self.visibleData[this.activeRow + this.offsetRow].etiGroupLevel;
                        }
                        if (!intGroupLevel) {
                            blnRowSelector = true;
                            if (self.cfgGrid.editing.allow === true) {
                                $("#idGrd__" + self.elementIn.id + "_" + this.activeCol + "_" + this.activeRow).css({ 'border': 0 });
                                if (self.cfgGrid.state.lastActiveRow == this.activeRow && self.cfgGrid.state.lastActiveCol == this.activeCol) {
                                    self.cfgGrid.state.lastActiveRow = -1;
                                    self.cfgGrid.state.lastActiveCol = -1;
                                }
                                blnRowSelector = (self.cfgGrid.editing.rowSelector === true);
                            }
                            if (blnRowSelector) {
                                if (blnRowPaint) {
                                    blnPar = (((this.activeRow + this.offsetRow) / 2) == parseInt((this.activeRow + this.offsetRow) / 2));
                                    $("#EtiGrdLn" + self.elementIn.id + "_" + this.activeRow).css({ background: (blnPar ? myCompWS.EtiGrid.BackColor1 : myCompWS.EtiGrid.BackColor2) });
                                    if (self.cfgGrid.config.frozenCols > 0 || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                                        $("#EtiGrdLn" + self.elementIn.id + "_" + this.activeRow + "f").css({ background: (blnPar ? myCompWS.EtiGrid.BackColor1 : myCompWS.EtiGrid.BackColor2) });
                                    }
                                }
                            }
                        }
                        $("#idGrd__" + self.elementIn.id + "_" + this.activeCol + "_" + this.activeRow).removeClass('etiGridFieldOn');
                    }
                }

                this.activeRow = ui.row;
                this.activeCol = ui.col;
                if (this.activeRow != -1) {
                    var blnSelfFocus = true;
                    if (ui.doFocus === false) {
                        blnSelfFocus = false;
                    }
                    if (blnSelfFocus) {
                        $("#idGrd__" + self.elementIn.id + "_" + this.activeCol + "_" + this.activeRow).focus();
                    }
                    blnRowSelector = true;
                    if (self.cfgGrid.editing.allow === true) {
                        if (self.cfgGrid.state.lastActiveRow != undefined && self.cfgGrid.state.lastActiveCol != undefined) {
                            if (self.cfgGrid.state.lastActiveRow != this.activeRow || self.cfgGrid.state.lastActiveCol != this.activeCol) {
                                if (self.cfgGrid.state.lastActiveRow != -1 && self.cfgGrid.state.lastActiveCol != -1) {
                                    $("#idGrd__" + self.elementIn.id + "_" + self.cfgGrid.state.lastActiveCol + "_" + self.cfgGrid.state.lastActiveRow).css({ 'border': 0 });
                                    self.cfgGrid.state.lastActiveRow = -1;
                                    self.cfgGrid.state.lastActiveCol = -1;
                                }
                            }
                        }
                        $("#idGrd__" + self.elementIn.id + "_" + this.activeCol + "_" + this.activeRow).css({ 'border': '1px solid #000' });
                        self.cfgGrid.state.lastActiveCol = this.activeCol;
                        self.cfgGrid.state.lastActiveRow = this.activeRow;
                        blnRowSelector = (self.cfgGrid.editing.rowSelector === true);
                    }
                    if (blnRowSelector) {
                        if (blnRowPaint && !blnUnselect) {
                            if (self.cfgGrid.orderBy.hasGroups) {
                                intGroupLevel = self.visibleData[this.activeRow + this.offsetRow].etiGroupLevel;
                            }
                            if (!intGroupLevel) {
                                $("#EtiGrdLn" + self.elementIn.id + "_" + this.activeRow).css({ background: 'linear-gradient(#F6991F, #FBB752)' });
                                if (self.cfgGrid.config.frozenCols > 0 || self.cfgGrid.orderBy.hasGroups || self.cfgGrid.subQueries.has) {
                                    $("#EtiGrdLn" + self.elementIn.id + "_" + this.activeRow + "f").css({ background: 'linear-gradient(#F6991F, #FBB752)' });
                                }
                            }
                        }
                    }
                    $("#idGrd__" + self.elementIn.id + "_" + this.activeCol + "_" + this.activeRow).addClass('etiGridFieldOn');
                    if (blnRowSelect) {
                        $("#" + self.elementIn.id).trigger("etiRowSelected", { key: this.cfgGrid.cols[this.activeCol].key, row: self.visibleData[this.activeRow + this.offsetRow] });
                    }

                    var myIsNewRow = true;
                    var myRow = self.visibleData[this.activeRow + this.offsetRow];
                    if (self.lastCellSelected) {
                        if (self.lastCellSelected.row == myRow) {
                            myIsNewRow = false;
                        }
                    }
                    self.lastCellSelected = { key: this.cfgGrid.cols[this.activeCol].key, row: myRow, rowNumber: self.cfgGrid.rows.indexOf(myRow), isNewRow: myIsNewRow };
                    $("#" + self.elementIn.id).trigger("etiCellSelected", self.lastCellSelected);
                }
            }
        },

        griddblclick: function (e) {
            var self = this;
            if (e.target == self.element[0]) {
                var activeId = document.activeElement.id;
                var actLin = GetEtiGridActLin(activeId);
                var actCol = GetEtiGridActCol(activeId);
                if (actLin != -1) {
                    $("#" + self.elementIn.id).trigger("etiDblClick", { key: this.cfgGrid.cols[actCol].key, row: self.visibleData[self.offsetRow + actLin] });
                }
            }
        },

        gridclick: function (e) {
            var self = this;
            if (e.target == self.element[0]) {
                var activeId = document.activeElement.id;
                var actLin = GetEtiGridActLin(activeId);
                var actCol = GetEtiGridActCol(activeId);
                if (actLin != -1) {
                    $("#" + self.elementIn.id).trigger("etiClick", { key: this.cfgGrid.cols[actCol].key, row: self.visibleData[self.offsetRow + actLin] });
                }
            }
        },

        gridButtonClick: function (e, ui) {
            var self = this;
            if (self.cfgGrid.editing.disabled !== true) {
                var actLin = GetEtiGridActLin(ui.child);
                var actCol = GetEtiGridActCol(ui.child);
                if (actLin != -1) {
                    if (self.cfgGrid.cols[actCol].editor.click) {
                        self.cfgGrid.cols[actCol].editor.click(self.visibleData[self.offsetRow + actLin])
                    }
                }
            }
        },

        gridLabelClick: function (e, ui) {
            var self = this;
            if (self.cfgGrid.editing.disabled !== true) {
                var actLin = GetEtiGridActLin(ui.child);
                var actCol = GetEtiGridActCol(ui.child);
                if (actLin != -1) {
                    if (ui.fn) {
                        var strFn = ui.fn;
                        for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                            if (!self.visibleData[self.offsetRow + actLin][self.cfgGrid.cols[i].key] && self.cfgGrid.cols[i].editor.type == 'text') {
                                strFn = strFn.replace("{" + self.cfgGrid.cols[i].key + "}", '');
                            } else {
                                strFn = strFn.replace("{" + self.cfgGrid.cols[i].key + "}", self.visibleData[self.offsetRow + actLin][self.cfgGrid.cols[i].key]);
                            }
                        }
                        eval(strFn);
                    }
                }
            }
        },

        wheel: function (e, ui) {
            e.preventDefault();
            var self = this;
            if (e.originalEvent.deltaY != 0) {
                var myWheelStep = 3;
                if (e.originalEvent.deltaY > 0) {
                    var intNewOffsetRow = self.offsetRow + myWheelStep;
                    var maxOffsetRow = self.visibleData.length - self.cfgGrid.visibleRows;
                    if (self.cfgGrid.editing.add === true) {
                        maxOffsetRow++;
                    }
                    if (intNewOffsetRow > maxOffsetRow) {
                        intNewOffsetRow = maxOffsetRow;
                    }
                    if (intNewOffsetRow < 0) {
                        intNewOffsetRow = 0;
                    }
                    if (intNewOffsetRow != self.offsetRow) {
                        if (self.activeRow >= myWheelStep) {
                            this.activateCell(e, { col: self.activeCol, row: self.activeRow - myWheelStep, ignoreSelect: true });
                        } else {
                            this.activateCell(e, { col: self.activeCol, row: -1, ignoreSelect: true });
                        }
                        this.scrollTo(e, { row: intNewOffsetRow, posScroll: true, actCell: true });
                    }
                } else {
                    var intNewOffsetRow = self.offsetRow - myWheelStep;
                    if (intNewOffsetRow < 0) {
                        intNewOffsetRow = 0;
                    }
                    if (intNewOffsetRow != self.offsetRow) {
                        if (self.activeRow >= 0 && self.activeRow < self.cfgGrid.visibleRows - myWheelStep) {
                            this.activateCell(e, { col: self.activeCol, row: self.activeRow + myWheelStep, ignoreSelect: true });
                        } else {
                            this.activateCell(e, { col: self.activeCol, row: -1, ignoreSelect: true });
                        }
                        this.scrollTo(e, { row: intNewOffsetRow, posScroll: true, actCell: true });
                    }
                }
            }
        },

        gridKeydown: function (e, ui) {
            var self = this;
            var isShift = ui.isShift;
            var kc = ui.key;

            if (isKey(kc, isShift, false, 'ENTER')) {
                if (this.cfgGrid.editing.allow === true && this.cfgGrid.editing.disabled !== true) {
                    var activeId = document.activeElement.id;
                    var actLin = GetEtiGridActLin(activeId);
                    var actCol = GetEtiGridActCol(activeId);
                    var firstColAll = -1;
                    var firstColSeq = -1;
                    for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                        if (self.cfgGrid.cols[i].hidden || self.cfgGrid.cols[i].grouped) {
                        } else {
                            if (self.cfgGrid.cols[i].tabStop !== false) {
                                if (firstColAll == -1) {
                                    firstColAll = i;
                                }
                                if (firstColSeq == -1 && i > actCol) {
                                    firstColSeq = i;
                                }
                            }
                        }
                    }
                    if (firstColSeq != -1) {
                        this.activateCell(e, { col: firstColSeq, row: actLin });
                    } else if (firstColAll != -1) {
                        var rowEnd = (self.cfgGrid.editing.add === true ? 1 : 0);
                        if ((actLin + 1) < self.visibleData.length + rowEnd) {
                            if ((actLin + 1) < self.cfgGrid.visibleRows) {
                                this.activateCell(e, { col: firstColAll, row: actLin + 1 });
                            } else {
                                if (self.offsetRow + self.cfgGrid.visibleRows + 1 <= self.visibleData.length + rowEnd) {
                                    this.activateCell(e, { col: firstColAll, row: actLin });
                                    setTimeout(function () {
                                        self.scrollTo(e, { row: self.offsetRow + 1, posScroll: true, actCell: true });
                                    }, 100);
                                } else {
                                    this.activateCell(e, { col: firstColAll, row: actLin });
                                }
                            }
                        } else {
                            this.activateCell(e, { col: firstColAll, row: actLin });
                        }
                    }
                } else {
                    var activeId = document.activeElement.id;
                    var actLin = GetEtiGridActLin(activeId);
                    var actCol = GetEtiGridActCol(activeId);
                    if (actLin != -1) {
                        if (self.cfgGrid.editing.allow !== true) {
                            $("#" + self.elementIn.id).trigger("etiRowSelected", { key: this.cfgGrid.cols[actCol].key, row: self.visibleData[self.offsetRow + actLin] });
                        }

                    }
                }

            } else if (isKey(kc, isShift, false, 'ESCAPE')) {
                $("#" + self.elementIn.id).trigger("etiGridEscaped");

            } else if (isKey(kc, isShift, false, 'OPERKEYS')) {
                if (kc == 45) {
                    self.insertRow(e, { NoFim: false, activateCell: true });

                } else if (kc == 46) {
                    self.removeActiveRow();

                }

            } else if (isKey(kc, isShift, false, 'NAVKEYS')) {
                var activeId = document.activeElement.id;
                if (kc == 40) { // DOWN
                    var actLin = GetEtiGridActLin(activeId);
                    var actCol = GetEtiGridActCol(activeId);
                    if (actLin == -1) {
                        this.activateCell(e, { col: actCol, row: 0 });
                    } else {
                        if ((actLin + 1) <= this.cfgGrid.visibleRows) {
                            if ((actLin + 1) < this.cfgGrid.visibleRows) {
                                this.activateCell(e, { col: actCol, row: (actLin + 1) });
                            } else {
                                var extraOffset = 0;
                                if (this.cfgGrid.editing.add == true) {
                                    extraOffset = -1;
                                }
                                if ((self.offsetRow + extraOffset) < (this.visibleData.length - this.cfgGrid.visibleRows)) {
                                    this.scrollTo(e, { row: self.offsetRow + 1, posScroll: true, actCell: true });
                                    this.activateCell(e, { col: actCol, row: actLin });
                                }
                            }
                        }
                    }

                } else if (kc == 39) { // RIGHT
                    if (self.cfgGrid.editing.allow) {
                        var actLin = GetEtiGridActLin(activeId);
                        if (actLin >= 0) {
                            var actCol = GetEtiGridActCol(activeId);
                            var firstColAll = -1;
                            var firstColSeq = -1;
                            for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                                if (self.cfgGrid.cols[i].hidden || self.cfgGrid.cols[i].grouped) {
                                } else {
                                    if (firstColAll == -1) {
                                        firstColAll = i;
                                    }
                                    if (firstColSeq == -1 && i > actCol) {
                                        firstColSeq = i;
                                    }
                                }
                            }
                            if (firstColSeq != -1) {
                                this.activateCell(e, { col: firstColSeq, row: actLin });
                            } else if (firstColAll != -1) {
                                if ((actLin + 1) < self.visibleData.length) {
                                    if ((actLin + 1) < self.cfgGrid.visibleRows) {
                                        this.activateCell(e, { col: firstColAll, row: (actLin + 1) });
                                    } else {
                                        if (self.offsetRow + self.cfgGrid.visibleRows + 1 <= self.visibleData.length) {
                                            this.activateCell(e, { col: firstColAll, row: actLin });
                                            this.scrollTo(e, { row: self.offsetRow + 1, posScroll: true, actCell: true });
                                        }
                                    }
                                }
                            }
                        }
                    }

                } else if (kc == 38) { // UP
                    var actLin = GetEtiGridActLin(activeId);
                    var actCol = GetEtiGridActCol(activeId);
                    if (actLin >= 0) {
                        if (actLin > 0) {
                            this.activateCell(e, { col: actCol, row: (actLin - 1) });
                        } else {
                            if (self.offsetRow > 0) {
                                this.scrollTo(e, { row: self.offsetRow - 1, posScroll: true, actCell: true });
                                this.activateCell(e, { col: actCol, row: actLin });
                            }
                        }
                    }

                } else if (kc == 37) { // LEFT
                    if (self.cfgGrid.editing.allow) {
                        var actLin = GetEtiGridActLin(activeId);
                        if (actLin >= 0) {
                            var actCol = GetEtiGridActCol(activeId);
                            var lastColAll = -1;
                            var lastColSeq = -1;
                            for (var i = 0; i < self.cfgGrid.cols.length; i++) {
                                if (self.cfgGrid.cols[i].hidden || self.cfgGrid.cols[i].grouped) {
                                } else {
                                    lastColAll = i;
                                    if (i < actCol) {
                                        lastColSeq = i;
                                    }
                                }
                            }
                            if (lastColSeq != -1) {
                                this.activateCell(e, { col: lastColSeq, row: actLin });
                            } else if (lastColAll != -1) {
                                if (actLin >= 0) {
                                    if (actLin > 0) {
                                        this.activateCell(e, { col: lastColAll, row: (actLin - 1) });
                                    } else {
                                        if (self.offsetRow > 0) {
                                            this.activateCell(e, { col: lastColAll, row: actLin });
                                            this.scrollTo(e, { row: self.offsetRow - 1, posScroll: true, actCell: true });
                                        }
                                    }
                                }
                            }
                        }
                    }

                } else if (kc == 33) {//PAGE UP
                    var actLin = GetEtiGridActLin(activeId);
                    if (actLin >= 0) {
                        var actCol = GetEtiGridActCol(activeId);
                        var intNewOffsetRow = self.offsetRow - self.cfgGrid.visibleRows;
                        if (intNewOffsetRow < 0) {
                            intNewOffsetRow = 0;
                        }
                        if (intNewOffsetRow != self.offsetRow) {
                            this.activateCell(e, { col: actCol, row: actLin });
                            this.scrollTo(e, { row: intNewOffsetRow, posScroll: true, actCell: true });
                        }
                    }

                } else if (kc == 34) {//PAGE DOWN
                    var actLin = GetEtiGridActLin(activeId);
                    if (actLin >= 0) {
                        var actCol = GetEtiGridActCol(activeId);
                        var intNewOffsetRow = self.offsetRow + self.cfgGrid.visibleRows;
                        if (intNewOffsetRow > self.visibleData.length - self.cfgGrid.visibleRows) {
                            intNewOffsetRow = self.visibleData.length - self.cfgGrid.visibleRows;
                        }
                        if (intNewOffsetRow < 0) {
                            intNewOffsetRow = 0;
                        }
                        if (intNewOffsetRow != self.offsetRow) {
                            this.activateCell(e, { col: actCol, row: actLin });
                            this.scrollTo(e, { row: intNewOffsetRow, posScroll: true, actCell: true });
                        }
                    }

                }
            }
            return false;
        }
    };

    $.fn.setProperty = function (pProperty, pPropValue) {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("setProperty", { name: pProperty.toLowerCase(), value: pPropValue });
        }
    };

    $.fn.getProperty = function (pProperty) {
        if (this.length == 1) {
            var ui = { name: pProperty };
            $('#' + this[0].id).trigger("getProperty", ui);
            return ui.retValue;
        }
    };

    $.fn.setFocus = function (pKey, pRowNumber) {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("setFocus", { key: pKey, rowNumber: pRowNumber });
        }
    };

    $.fn.setColProperty = function (pKey, pColConfig) {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("setColProperty", { key: pKey, config: pColConfig });
        }
    };

    $.fn.refreshData = function () {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("gridRefreshData");
        }
    };

    $.fn.resizeGrid = function () {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("resizeGridSize", { allGrids: false });
        }
    };

    $.fn.etiGrid = function (cfgGrid) {
        return this.each(function () {
            if (this.id.indexOf("_") != -1) {
                alert("Id de Componente não suportado " + this.id);
            } else {
                if (this.initialized) {
                    $('#' + this.id).trigger("updateGrid", cfgGrid);
                } else {
                    this.initialized = true;
                    var $this = $(this)
                    $this.data('etiGrid', (data = new EtiGrid(this, cfgGrid)));
                }
            }
        });
    };

    // ************************************
    // COMPONENTE IGGRID
    // ************************************

    var EtiIgGrid = function (element, cfgGrid) {
        var self = this;
        self.element = $(element);
        self.element.on({
            keydown: $.proxy(this.keydown, this)
        });

        var el;
        var strColSettingsUpd = '';
        var strColSettingsFlt = '';
        var strPrimaryKey = '';
        var blnAutoGenPrimaryKey = false;
        var intFirstEditCol = -1;
        var intWidth = 0;

        var strNewItemDefault = '{';
        var strColumns = 'autoGenerateColumns: false, renderCheckboxes: true, ';
        strColumns += 'columns: [';
        for (var i = 0; i < cfgGrid.cols.length; i++) {
            el = cfgGrid.cols[i];
            strColumns += GetColData(el.headerText, el.key, el.hidden, el.dataType, el.decimalPlaces, el.width, el.align, el.editor);
            strColSettingsUpd += GetColSettingsUpd(el.key, el.dataType, el.align, el.decimalPlaces, el.editor);
            strColSettingsFlt += GetColSettingsFlt(el.key, el.primaryKey, el.editor);
            strNewItemDefault += GetColItemDefault(el.key, el.dataType, el.defaultValue, el.primaryKey);
            if (!el.hidden) {
                intWidth += el.width;
            }

            if (el.primaryKey) {
                strPrimaryKey = el.key;
            }
            if (el.autoGenerated) {
                blnAutoGenPrimaryKey = true;
            }
            if (intFirstEditCol == -1 && !el.primaryKey && !el.hidden) {
                intFirstEditCol = i;
            }
        }
        strColumns += ']';
        strNewItemDefault += '}';

        var strEditMode = '';
        var strEditCell = '';
        if (cfgGrid.allowEdit) {
            strEditMode = ' autoCommit: true, ';
            strEditCell = 'editMode: "cell", excelNavigationMode: true, ';
        } else {
            strEditCell = 'editMode: "none", excelNavigationMode: false, ';
        }

        if (cfgGrid.width) {
            intWidth = cfgGrid.width;
        }

        if (strColSettingsFlt != '') {
            strColSettingsFlt = ', columnSettings: [' + strColSettingsFlt + ']';
        }

        var multipleSelection = false;
        if (cfgGrid.multipleSelection) {
            multipleSelection = cfgGrid.multipleSelection;
        }

        var strFeatures = ''
        strFeatures += 'features: [';
        strFeatures += ' {name: "Selection", mode: "row", multipleSelection: ' + multipleSelection + ', activation: true },';
        strFeatures += ' {name: "Filtering", type: "local"' + strColSettingsFlt + ' }, ';

        var bBinded = false;
        var sType = self.element.data('eti-binded');
        if (sType) {
            bBinded = true;
        }

        var strEditCellEnded = '';
        var strRemoveAction = '';
        if (cfgGrid.editCellEnded) {
            strEditCellEnded = 'editCellEnded: function (evt, ui) { ' + cfgGrid.editCellEnded + ' }, ';
            strRemoveAction = cfgGrid.editCellEnded + ';';
            if (strRemoveAction.startsWith('vm.GridEditCellEnded')) {
                strRemoveAction = 'vm.SetEditState(true);';
            }
        }

        strFeatures += ' {name: "Updating", horizontalMoveOnEnter: true, ' + strEditCell +
                                'enableAddRow: false, enableDeleteRow: false, ' +
                                'startEditTriggers: "dblclick,click,enter", ' +
                                strEditCellEnded +
                                'columnSettings: [' + strColSettingsUpd + ']},';

        strFeatures += ' {name: "Sorting", type: "local"' + GetFirstColOrder(strPrimaryKey) + '}, ';
        strFeatures += ' {name: "Resizing" }, ';
        strFeatures += '],';

        var strIgGrid = '';

        var intOffsetWidth = 0;
        if (cfgGrid.height) {
            strIgGrid += 'height: "' + cfgGrid.height + 'px", ';
            intOffsetWidth = 16;
        }

        if (strPrimaryKey != '') {
            strIgGrid += 'primaryKey: "' + strPrimaryKey + '", ';
        }

        if (cfgGrid.dataSource) {
            strIgGrid += 'dataSource: ' + cfgGrid.dataSource + ',';
        }

        strIgGrid += strEditMode;
        strIgGrid += strFeatures;
        strIgGrid += strColumns;

        if (bBinded) {
            self.element.attr("data-bind", "igGrid: {" + strIgGrid + "}");
            $("#" + element.id).wrap("<div id='" + element.id + "Contain' class='igGridContainer' style='width: " + (intWidth + intOffsetWidth + 1) + "px; overflow: hidden;'></div>");
        } else {
            $("#" + element.id).igGrid(eval("({" + strIgGrid + "})"));
            $("#" + element.id + "_container").wrap("<div id='" + element.id + "Contain' class='igGridContainer' style='width: " + (intWidth + intOffsetWidth + 1) + "px; overflow: hidden;'></div>");
        }

        //Commands eliminar, inserir ...
        if (cfgGrid.allowAddRows || cfgGrid.allowRemoveRows) {
            var strHtml = "<div class='etiIgGridCommand' style='width: " + (intWidth + intOffsetWidth + 1) + "px;'>";
            if (cfgGrid.allowAddRows)
                strHtml += "<a href='javascript:void(0);' id='" + element.id + "InsLin' onclick='IgGridAddNewRow(\"" + element.id + "\", " + strNewItemDefault + ", \"" + strPrimaryKey + "\"," + intFirstEditCol + ", " + blnAutoGenPrimaryKey + ")'><img src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Adicionar.16.png' style='margin: 5px; border: 0px;' alt='" + getMsgTranslated('Admin', 'Inserir Linha') + "' /></a>"
            if (cfgGrid.allowRemoveRows)
                strHtml += "<a href='javascript:void(0);' id='" + element.id + "RemLin' onclick='IgGridDeleteRow(\"" + element.id + "\", \"" + strPrimaryKey + "\", " + blnAutoGenPrimaryKey + "); " + strRemoveAction + "'><img src='" + myCompWS.hostBase + "Imagens/Icons/Geral/Comandos/Eliminar.16.png' style='margin: 5px; border: 0px;' alt='" + getMsgTranslated('Admin', 'Remover Linha') + "' /></a>"
            strHtml += "</div>";

            $("#" + element.id + 'Contain').after(strHtml);
        }
    };

    EtiIgGrid.prototype = {
        constructor: EtiIgGrid,

        keydown: function (e) {
            var self = this;
            var isShift = !!e.shiftKey;
            if (isShift) {
                if (e.which == 45) {
                    var btn = document.getElementById(self.element[0].id + 'InsLin');
                    if (btn) {
                        btn.click();
                    }
                }
                if (e.which == 46) {
                    var btn = document.getElementById(self.element[0].id + 'RemLin');
                    if (btn) {
                        btn.click();
                    }
                }
            }
        }
    };

    $.fn.etiIgGrid = function (cfgGrid) {
        return this.each(function () {
            if (this.initialized) {
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiIgGrid', (data = new EtiIgGrid(this, cfgGrid)));
            }
        });
    };
    $.fn.etiIgGridEnabled = function (pEnabled) {
        if (pEnabled) {
            $(this.selector).igGridUpdating("option", "editMode", "cell").igGridUpdating("option", "excelNavigationMode", true);
            if (document.getElementById(this[0].id + "InsLin")) {
                document.getElementById(this[0].id + "InsLin").style.visibility = 'visible';
            }
            if (document.getElementById(this[0].id + "RemLin")) {
                document.getElementById(this[0].id + "RemLin").style.visibility = 'visible';
            }
        } else {
            $(this.selector).igGridUpdating("option", "editMode", "none").igGridUpdating("option", "excelNavigationMode", false);
            if (document.getElementById(this[0].id + "InsLin")) {
                document.getElementById(this[0].id + "InsLin").style.visibility = 'hidden';
            }
            if (document.getElementById(this[0].id + "RemLin")) {
                document.getElementById(this[0].id + "RemLin").style.visibility = 'hidden';
            }
        }
    };


    // ************************************
    // COMPONENTE COMBO
    // ************************************
    var EtiCombo = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            change: $.proxy(this.change, this),
            drop: $.proxy(this.drop, this),
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            dblclick: $.proxy(this.dblclick, this),
            blur: $.proxy(this.blur, this),
            keydown: $.proxy(this.keydown, this),
            setProperty: $.proxy(this.setProperty, this),
            getProperty: $.proxy(this.getProperty, this),
            update: $.proxy(this.update, this),
            setCss: $.proxy(this.setCss, this),
            paste: $.proxy(this.paste, this),
            cut: $.proxy(this.cut, this),
            refreshColKeys: $.proxy(this.refreshColKeys, this),
            mouseout: $.proxy(this.mouseout, this),
            mouseover: $.proxy(this.mouseover, this),
            cleanValue: $.proxy(this.cleanValue, this)
        });

        self.elementIn = element;

        var sTipoLista = self.element.data('eti-listtype');
        if (!sTipoLista) {
            self.tipoLista = "FIX";
        } else {
            self.tipoLista = sTipoLista.toUpperCase();
        }

        var sBaseLista = self.element.data('eti-listparam');
        if (!sBaseLista) {
            self.baseLista = '-';
        } else {
            self.baseLista = sBaseLista;
        }

        var sListParam = self.element.data('eti-listparamvalues');
        if (!sListParam) {
            self.listParam = '';
        } else {
            self.listParam = GetStringified(sListParam);
        }

        var sCaption = self.element.data('eti-caption');
        if (!sCaption) {
            self.caption = '';
        } else {
            self.caption = sCaption;
        }

        var sWidth = self.element.data('eti-width');
        if (!sWidth) {
            self.width = 500;
        } else {
            self.width = parseInt(sWidth, 10);
        }

        var sColValor = self.element.data('eti-valuecol');
        if (!sColValor) {
            self.colunaValor = '0';
        } else {
            self.colunaValor = sColValor;
        }

        var sColDisplay = self.element.data('eti-displaycol');
        if (!sColDisplay) {
            self.colunaDisplay = '0';
        } else {
            self.colunaDisplay = sColDisplay;
        }

        var sCmpValor = self.element.data('eti-valuefield');
        if (!sCmpValor) {
            self.campoValor = '';
        } else {
            self.campoValor = sCmpValor;
        }

        var sCmpDisplay = self.element.data('eti-displayfield');
        if (!sCmpDisplay) {
            self.campoDisplay = '';
        } else {
            self.campoDisplay = sCmpDisplay;
        }

        var sCmbValidada = self.element.data('eti-validated');
        if (!sCmbValidada) {
            self.comboValidated = true;
        } else {
            self.comboValidated = ((sCmbValidada == 'Y' || sCmbValidada == 'y') ? true : false);
        }

        if (!self.comboValidated) {
            self.maxLen = 50;
            var sMaxLen = self.element.data('eti-maxlength');
            if (sMaxLen) {
                self.maxLen = parseInt(sMaxLen, 10);
            }
        }

        var sErrorDesc = self.element.data('eti-errordesc');
        if (sErrorDesc) {
            self.errorDesc = sErrorDesc;
        }

        self.comboPicker = true;
        var sComboPicker = self.element.data('eti-combopicker');
        if (sComboPicker == 'n' || sComboPicker == 'N') {
            self.comboPicker = false;
        }

        self.allowNulls = true;
        var sAllowNulls = self.element.data('eti-allownulls');
        if (sAllowNulls) {
            self.allowNulls = (sAllowNulls.toLowerCase() == 'y');
        }

        self.pHolder = '';
        if (self.element.data('eti-placeholder')) {
            self.pHolder = self.element.data('eti-placeholder');
            self.element.attr('placeholder', self.pHolder);
            self.element.addClass('etiCompPlaceholder');
        }

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));

        GetParentProps(self);

        if (self.colunaValor == "0" && self.campoValor == "") {
            self.colunaValor = '1';
        }
        if (self.colunaDisplay == "0" && self.campoDisplay == "") {
            self.colunaDisplay = '1';
        }

        self.cacheKey = self.colunaValor + "" + self.colunaDisplay;

        var myValue = GetComponentValue(self.elementIn);
        if (myValue) {
            element.value = myValue;
        }
        SetComboValue(element, myValue, self, false);

        SetUiDisabled(self);

        self.normalCss = true;
        if (self.comboPicker) {
            self.css = { 'white-space': 'nowrap', overflow: 'hidden', 'background-image': 'url(' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCombo.png)', 'background-repeat': 'no-repeat', 'background-position': 'right center' };
        } else {
            self.css = { 'white-space': 'nowrap', overflow: 'hidden' };
        }
        if (self.parentGrid)
            self.css.height = '22px';
        $(element).css(self.css);

        self.userWritable = (IsValueEqualDesc(self.colunaValor, self.colunaDisplay, self.campoValor, self.campoDisplay) || !self.comboValidated);
        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
        SetCompTitle(self.element);
        self.initValue = self.elementIn.textContent;
    };

    EtiCombo.prototype = {
        constructor: EtiCombo,

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
            if (!isEtiCompBlocked(self)) {
                var xPosition = e.offsetX;
                var xLim = self.elementIn.offsetWidth - 16;
                if (xPosition >= xLim) {
                    if (self.comboPicker) {
                        openCombo(self.elementIn, true, self.elementIn.value, self.colunaValor, self.colunaDisplay, self.campoValor, self.campoDisplay, self.cacheKey, self.comboValidated, self.tipoLista, self.baseLista, self.listParam, self.caption, self.width);
                    }
                }
            }
        },

        mouseover: function (e) {
            var self = this;
            if (e.offsetX >= (self.elementIn.offsetWidth - 16)) {
                setPointerHand(self.elementIn, true);
            } else {
                setPointerHand(self.elementIn, false);
            }
        },

        mouseout: function (e) {
            var self = this;
            setPointerHand(self.elementIn, false);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                setPointerHand(self.elementIn, false);
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                if (self.elementIn.textContent != "") {
                    if (self.parentGrid) {
                        setCursorPosition(self.elementIn);
                    } else {
                        setCursorPosition(self.elementIn, 0);
                    }
                }
            }
        },

        paste: function (e) {
            var self = this;
            if (self.userWritable) {
                if (self.disabled || self.locked) {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
            }
        },

        cut: function (e) {
            var self = this;
            if (self.userWritable) {
                if (self.disabled || self.locked) {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
            }
        },

        refreshColKeys: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                self.colunaValor = ui.colunaValor;
                self.colunaDisplay = ui.colunaDisplay;
            }
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "rows") {
                    var myListInCache = MyShell().ListCaching.GetListInCache(self.baseLista, self.listParam, self.cacheKey, false);
                    if (myListInCache) {
                        ui.retValue = myListInCache.rows;
                    } else {
                        PopulateDataCache(self.elementIn.id, self.tipoLista, self.baseLista, self.listParam, self.colunaValor, self.colunaDisplay, self.campoValor, self.campoDisplay, self.cacheKey, '', 500,
                            function (data) {
                                myListInCache = MyShell().ListCaching.GetListInCache(self.baseLista, self.listParam, self.cacheKey, false);
                                ui.retValue = myListInCache.rows;
                            });
                    }

                } else if (ui.name == "disabled") {
                    ui.retValue = this.disabled;

                } else if (ui.name == "selectedRow") {
                    var myValue = $("#" + self.elementIn.id).val();
                    ui.retValue = {};
                    if ($("#" + self.elementIn.id).val() != "") {
                        var myListInCache = MyShell().ListCaching.GetListInCache(self.baseLista, self.listParam, self.cacheKey, false);
                        if (myListInCache) {
                            var strCodeKey = "c" + parseInt(self.colunaValor, 10);
                            for (var i = 0; i < myListInCache.rows.length; i++) {
                                if (myListInCache.rows[i][strCodeKey] == myValue) {
                                    ui.retValue = myListInCache.rows[i];
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        SetUiDisabled(self);
                    }

                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }

                } else if (ui.name == "listtype") {
                    newValue = ui.value.toUpperCase();
                    if (self.tipoLista != newValue) {
                        self.tipoLista = newValue;
                        if (self.elementIn.value) {
                            $("#" + self.elementIn.id).trigger("update");
                        } else {
                            fireValue(self.elementIn, "", "", false);
                        }
                    }

                } else if (ui.name == "listparam") {
                    newValue = (!ui.value ? '-' : ui.value);
                    if (self.baseLista != newValue) {
                        self.baseLista = newValue;
                        if (self.elementIn.value) {
                            $("#" + self.elementIn.id).trigger("update");
                        } else {
                            fireValue(self.elementIn, "", "", false);
                        }
                    }

                } else if (ui.name == "displaycol") {
                    newValue = ui.value;
                    if (self.colunaDisplay != newValue) {
                        self.colunaDisplay = newValue;
                        self.cacheKey = self.colunaValor + "" + self.colunaDisplay;
                        if (self.elementIn.value) {
                            $("#" + self.elementIn.id).trigger("update");
                        } else {
                            fireValue(self.elementIn, "", "", false);
                        }
                    }

                } else if (ui.name == "valuecol") {
                    newValue = ui.value;
                    if (self.colunaValor != newValue) {
                        self.colunaValor = newValue;
                        self.cacheKey = self.colunaValor + "" + self.colunaDisplay;
                        if (self.elementIn.value) {
                            $("#" + self.elementIn.id).trigger("update");
                        } else {
                            fireValue(self.elementIn, "", "", false);
                        }
                    }

                } else if (ui.name == "placeholder") {
                    if (self.pHolder != ui.value) {
                        self.pHolder = ui.value;
                        self.element.attr('placeholder', self.pHolder);
                        if (self.pHolder) {
                            if (!self.element.hasClass('etiCompPlaceholder')) {
                                self.element.addClass('etiCompPlaceholder');
                            }
                        } else {
                            if (self.element.hasClass('etiCompPlaceholder')) {
                                self.element.removeClass('etiCompPlaceholder');
                            }
                        }
                    }

                } else if (ui.name == "caption") {
                    self.caption = ui.value;

                } else if (ui.name == "width") {
                    self.width = parseInt(ui.value, 10);

                } else if (ui.name == "validated") {
                    newValue = (ui.value == 'Y' || ui.value == 'S');
                    if (self.comboValidated != newValue) {
                        self.comboValidated = newValue;
                        if (self.comboValidated) {
                            if (self.elementIn.value) {
                                $("#" + self.elementIn.id).trigger("update");
                            } else {
                                fireValue(self.elementIn, "", "", false);
                            }
                        }
                    }

                } else if (ui.name == "listparamvalues") {
                    var sListParam = ui.value;
                    if (!sListParam) {
                        newValue = '';
                    } else {
                        newValue = GetStringified(sListParam);
                    }
                    if (self.listParam != newValue) {
                        self.listParam = newValue;
                        if (self.elementIn.value) {
                            $("#" + self.elementIn.id).trigger("update");
                        } else {
                            fireValue(self.elementIn, "", "", false);
                        }
                    }
                }
            }
        },

        dblclick: function (e) {
            var self = this;
            if (self.disabled || self.locked) {
                if (self.parentGrid) {
                    $("#" + self.parentGrid).trigger("griddblclick");
                }
            } else {
                if (self.userWritable) {
                    myCompWS.EtiBase.PressedKey = self.elementIn.textContent;
                }
                if (!isEtiCompBlocked(self)) {
                    openCombo(self.elementIn, true, self.elementIn.value, self.colunaValor, self.colunaDisplay, self.campoValor, self.campoDisplay, self.cacheKey, self.comboValidated, self.tipoLista, self.baseLista, self.listParam, self.caption, self.width);
                }
            }
        },

        change: function (e, ui) {
            e.uiChange = (ui === true);
        },

        drop: function (e, ui) {
            e.preventDefault();
        },

        blur: function (e) {
            var self = this;
            if (!myCompWS.EtiCombo.IsOpen) {
                if (self.initValue != self.elementIn.textContent) {
                    var blnInvalid = false;
                    if (IsValueEqualDesc(self.colunaValor, self.colunaDisplay, self.campoValor, self.campoDisplay)) {
                        if (!self.validated && self.maxLen && self.elementIn.textContent.length > self.maxLen) {
                            self.elementIn.textContent = self.elementIn.textContent.substring(0, self.maxLen);
                        }
                        SetComboValue(self.elementIn, self.elementIn.textContent, self, true);
                        if (self.elementIn.value != "" && self.elementIn.textContent == "") {
                            if (self.errorDesc) {
                                alert(self.errorDesc);
                            } else {
                                alert(getMsgTranslated('Shell', 'Valor inválido!'));
                            }
                            blnInvalid = true;
                            SetComboValue(self.elementIn, self.initValue, self, true);
                            self.element.focus();
                        }
                    }
                    if (self.initValue != self.elementIn.textContent && !blnInvalid) {
                        self.initValue = self.elementIn.textContent;
                        $("#" + self.elementIn.id).trigger("change", true);
                        if (self.parentGrid) {
                            fireValueToParent(self);
                        }
                    }
                }
            }
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.textContent = "";
            self.initValue = "";
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                SetComboValue(self.elementIn, self.elementIn.value, self, false);
                self.initValue = self.elementIn.textContent;
                SetCompTitle(self.element);
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, '');
        },

        keydown: function (e) {
            var self = this;
            if (self.comboValidated) {
                var kc = e.keyCode ? e.keyCode : e.charCode;
                var isShift = !!e.shiftKey;
                var isCtrl = !!e.ctrlKey;

                if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'BACKSPACE')) {
                    if (!self.allowNulls) {
                        return false;
                    } else if (self.userWritable) {
                        return !self.disabled && !self.locked;
                    } else {
                        fireValue(self.elementIn, "", "", true);
                        fireValueToParent(self);
                    }

                } else if (!self.disabled && !self.locked && isKey(kc, isShift, isCtrl, 'DELETE')) {
                    if (!self.allowNulls) {
                        return false;
                    } else if (self.userWritable) {
                        return !self.disabled && !self.locked;
                    } else {
                        fireValue(self.elementIn, "", "", true);
                        fireValueToParent(self);
                    }

                } else if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                    SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);
                    return false;

                } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                    return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

                } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                    fireValue(self.elementIn, self.initValue, self.initValue, false);
                    setCursorPosition(self.elementIn, 0);
                    SendKeyToGrid(self.parentGrid, kc, false);
                    return false;

                } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                    return self.userWritable;

                } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                    return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);

                } else {
                    if (!self.disabled && !self.locked && kc != 16 && kc != 17) {
                        if (!self.userWritable || (isKey(kc, isShift, isCtrl, 'MAIS'))) {
                            if (self.userWritable) {
                                myCompWS.EtiBase.PressedKey = self.elementIn.textContent;
                            } else {
                                myCompWS.EtiBase.PressedKey = GetPressedKey(kc, isShift);
                            }
                            openCombo(self.elementIn, false, '', self.colunaValor, self.colunaDisplay, self.campoValor, self.campoDisplay, self.cacheKey, self.comboValidated, self.tipoLista, self.baseLista, self.listParam, self.caption, self.width);
                        } else {
                            return true;
                        }
                    }
                    return false;
                }
            } else {
                var kc = e.keyCode ? e.keyCode : e.charCode;
                var isShift = !!e.shiftKey;
                var isCtrl = !!e.ctrlKey;

                if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                    SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);
                    return false;

                } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                    return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

                } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                    fireValue(self.elementIn, self.initValue, self.initValue, false);
                    setCursorPosition(self.elementIn, 0);
                    SendKeyToGrid(self.parentGrid, kc, false);
                    return false;

                } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                    return true;

                } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                    return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);

                } else {
                    return !self.disabled && !self.locked;
                }
            }
        }
    };

    $.fn.etiCombo = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiCombo', (data = new EtiCombo(this)));
            }
        });
    };

    // ************************************
    // COMPONENTE CUSTOM
    // ************************************
    var EtiCustom = function (element) {
        var self = this;
        self.element = $(element);
        self.element.on({
            change: $.proxy(this.change, this),
            drop: $.proxy(this.drop, this),
            click: $.proxy(this.click, this),
            focus: $.proxy(this.focus, this),
            dblclick: $.proxy(this.dblclick, this),
            keydown: $.proxy(this.keydown, this),
            setProperty: $.proxy(this.setProperty, this),
            getProperty: $.proxy(this.getProperty, this),
            update: $.proxy(this.update, this),
            updateCustom: $.proxy(this.updateCustom, this),
            updateParams: $.proxy(this.updateParams, this),
            setCss: $.proxy(this.setCss, this),
            paste: $.proxy(this.paste, this),
            cut: $.proxy(this.cut, this),
            mouseout: $.proxy(this.mouseout, this),
            mouseover: $.proxy(this.mouseover, this),
            cleanValue: $.proxy(this.cleanValue, this)
        });

        self.elementIn = element;

        var sSubType = self.element.data('eti-subtype');
        switch (sSubType.toLowerCase()) {
            case 'colorreader':
                LoadScript(myCompWS.hostBase + "Scripts/EtiComponents/custom/colorReader.js");
                self.subTypeObj = myHelperColorReader; break;
            case 'fontreader':
                LoadScript(myCompWS.hostBase + "Scripts/EtiComponents/custom/fontReader.js");
                self.subTypeObj = myHelperFontReader; break;
            case 'measurereader':
                LoadScript(myCompWS.hostBase + "Scripts/EtiComponents/custom/measureReader.js");
                self.subTypeObj = myHelperMeasureReader; break;
            case 'paxreader':
                LoadScript(myCompWS.hostBase + "Scripts/EtiComponents/custom/paxReader.js");
                self.subTypeObj = myHelperPaxReader; break;
        }

        var sParams = self.element.data('eti-params');
        if (sParams) {
            self.params = GetValued(sParams);
        } else {
            self.params = "";
        }

        self.disabled = getVarTextToBool(self.element.data('eti-disabled'));
        self.locked = getVarTextToBool(self.element.data('eti-locked'));

        GetParentProps(self);

        var myValue = GetComponentValue(self.elementIn);
        if (myValue) {
            element.value = myValue;
            self.subTypeObj.setDisplayValue(self.elementIn, myValue, self.params);
        }

        if (self.subTypeObj.disabledBehavior) {
            SetUiDisabled(self);
        }

        self.normalCss = true;
        self.css = { 'text-align': self.subTypeObj.editorAlign, 'white-space': 'nowrap', overflow: 'hidden' };
        if (self.subTypeObj.hasPicker) {
            self.css['background-image'] = 'url(' + myCompWS.hostBase + 'Imagens/EtiComponents/EtiCombo.png)';
            self.css['background-repeat'] = 'no-repeat';
            self.css['background-position'] = 'right center';
        }
        if (self.parentGrid)
            self.css.height = '22px';
        $(element).css(self.css);

        self.elementIn.contentEditable = true;
        self.elementIn.spellcheck = false;
    };

    EtiCustom.prototype = {
        constructor: EtiCustom,

        click: function (e) {
            var self = this;
            if (self.parentGrid) {
                $("#" + self.parentGrid).trigger("gridclick");
            }
            ActivateCellGrid(self.parentGrid, self.elementIn.id, false, e.ctrlKey);
            if (self.subTypeObj.hasPicker) {
                if (!isEtiCompBlocked(self)) {
                    var xPosition = e.offsetX;
                    var xLim = self.elementIn.offsetWidth - 16;
                    if (xPosition >= xLim) {
                        openCustom(self.elementIn, self.subTypeObj, self.params);
                    }
                }
            }
        },

        mouseover: function (e) {
            var self = this;
            if (e.offsetX >= (self.elementIn.offsetWidth - 16)) {
                setPointerHand(self.elementIn, true);
            } else {
                setPointerHand(self.elementIn, false);
            }
        },

        mouseout: function (e) {
            var self = this;
            setPointerHand(self.elementIn, false);
        },

        focus: function (e) {
            var self = this;
            if (myCompWS.LastFocusId != self.elementIn.id) {
                myCompWS.LastFocusId = self.elementIn.id;
                setPointerHand(self.elementIn, false);
                ActivateCellGrid(self.parentGrid, self.elementIn.id, true, false);
                if (self.elementIn.textContent != "") {
                    if (self.parentGrid) {
                        setCursorPosition(self.elementIn);
                    } else {
                        setCursorPosition(self.elementIn, 0);
                    }
                }
            }
        },

        paste: function (e) {
            e.preventDefault();
        },

        cut: function (e) {
            e.preventDefault();
        },

        getProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                if (ui.name == "disabled") {
                    ui.retValue = this.disabled;
                }
            }
        },

        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == "disabled") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.disabled != newValue) {
                        self.disabled = newValue;
                        if (self.subTypeObj.disabledBehavior) {
                            SetUiDisabled(self);
                        }
                    }

                } else if (ui.name == "locked") {
                    newValue = getVarTextToBool(ui.value);
                    if (self.locked != newValue) {
                        self.locked = newValue;
                    }
                }
            }
        },

        dblclick: function (e) {
            var self = this;
            if (self.disabled || self.locked) {
                if (self.parentGrid) {
                    $("#" + self.parentGrid).trigger("griddblclick");
                }
            } else {
                if (!isEtiCompBlocked(self)) {
                    openCustom(self.elementIn, self.subTypeObj, self.params);
                }
            }
        },

        change: function (e, ui) {
            e.uiChange = (ui === true);
        },

        drop: function (e, ui) {
            e.preventDefault();
        },

        cleanValue: function (e) {
            var self = this;
            self.elementIn.textContent = "";
        },

        updateCustom: function (e, ui) {
            var self = this;
            self.elementIn.value = ui;
            self.subTypeObj.setDisplayValue(self.elementIn, ui, self.params);
            hideComponHelper();
            if (self.parentGrid) {
                fireValueToParent(self);
            }
            self.element.focus();
            this.change(e, true);
        },

        updateParams: function (e, ui) {
            var self = this;
            self.params = ui;
        },

        update: function (e, parent) {
            var self = this;
            if (!self.parentGrid || parent) {
                self.subTypeObj.setDisplayValue(self.elementIn, self.elementIn.value, self.params);
            }
        },

        setCss: function (e, ui) {
            var self = this;
            SetEtiCss(self, ui, '');
        },

        keydown: function (e) {
            var self = this;
            var kc = e.keyCode ? e.keyCode : e.charCode;
            var isShift = !!e.shiftKey;
            var isCtrl = !!e.ctrlKey;

            if (isKey(kc, isShift, isCtrl, 'ENTER')) {
                SendEnterKey(self.elementIn.id, self.parentGrid, kc, false);
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'NAVKEYS')) {
                return testImmediateNavKeys(self.elementIn, kc, isShift, self.parentGrid);

            } else if (isKey(kc, isShift, isCtrl, 'ESCAPE')) {
                setCursorPosition(self.elementIn, 0);
                SendKeyToGrid(self.parentGrid, kc, false);
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'COPYKEYS')) {
                return false;

            } else if (isKey(kc, isShift, isCtrl, 'OPERKEYS')) {
                return testImmediateOperKeys(self.elementIn, kc, self.parentGrid);

            } else {
                if (!self.disabled && !self.locked && kc != 16 && kc != 17) {
                    myCompWS.EtiBase.PressedKey = GetPressedKey(kc, isShift);
                    openCustom(self.elementIn, self.subTypeObj, self.params);
                }
                return false;
            }
        }
    };

    $.fn.etiCustom = function () {
        return this.each(function () {
            if (this.initialized) {
                $('#' + this.id).trigger("update");
            } else {
                this.initialized = true;
                var $this = $(this)
                $this.data('etiCustom', (data = new EtiCustom(this)));
            }
        });
    };

    function UnbindModalCloseButtons(element) {
        var closes = $(element).find('.closeModal');
        for (var i = 0, len = closes.length; i < len; i++) {
            $(closes[i]).unbind('click.modal');
        }
    }

    $.fn.showModal = function () {
        var myElement = this;
        MyShell().Ribbon.SetEnabled(false);
        myElement.closes = [];
        var modalContent = $(myElement).find('.eti-modal-content');
        if (!$(modalContent[0].children[0]).hasClass('close-button')) {
            $(modalContent[0]).prepend('<span class="close-button closeModal">&times;</span>');
        }
        $(myElement).css('display', 'block');
        myElement.closes = $(myElement).find('.closeModal');
        var closes = myElement.closes;
        for (var i = 0, len = closes.length; i < len; i++) {
            $(closes[i]).bind('click.modal', function (evt) {
                $(myElement).closeModal();
            });
        }
    };

    $.fn.closeModal = function () {
        var myElement = this;
        $(myElement).trigger('modalClosing');
        UnbindModalCloseButtons(myElement);
        MyShell().Ribbon.SetEnabled(true);
        $(myElement).css('display', 'none');
    };

}(window.jQuery);

// Infragistics Editor Providers
var etiIgEditorProvider;
function getEtiIgEditorProvider() {

    if (!etiIgEditorProvider) {
        etiIgEditorProvider = $.ig.EditorProviderDefault.extend({
            createEditor: function (updating, key, columnSetting, tabIndex, format, dataType, cellValue, element) {
                var v, o = {};
                if (columnSetting) {
                    o = columnSetting.editorOptions
                }

                if (element) {
                    v = element
                } else {
                    v = $("<div />");
                }

                if (o.id) {
                    v.attr("id", o.id)
                } else {
                    v.attr("id", updating.element[0].id + "-" + key)
                }

                if (o) {
                    this.options = o;
                    if (o.etieditortype === "number") {
                        v.data('eti-decimalplaces', o.decimalplaces);
                        v.data('eti-groupseparator', o.groupseparator);
                        v.data('eti-maxvalue', o.maxvalue);
                        v.data('eti-minvalue', o.minvalue);
                        v.etiNumber();
                    } else if (o.etieditortype === "date") {
                        v.data('eti-allownulls', o.allownulls);
                        v.etiDate();
                    } else if (o.etieditortype === "text") {
                        v.data('eti-disabled', o.disabled);
                        v.data('eti-maxlength', o.maxlength);
                        v.data('eti-align', o.align);
                        v.etiText();
                    } else if (o.etieditortype === "combo") {
                        v.data('eti-listtype', o.listtype);
                        v.data('eti-listparam', o.listparam);
                        v.data('eti-caption', o.caption);
                        v.data('eti-width', o.width);
                        v.data('eti-valuecol', o.valuecol);
                        v.data('eti-displaycol', o.displaycol);
                        v.data('eti-valuefield', o.valuefield);
                        v.data('eti-displayfield', o.displayfield);
                        v.data('eti-validated', o.validated);
                        v.data('eti-listparamvalues', o.listparamvalues);
                        v.etiCombo();
                    }
                }
                v.change(function () {
                    updating._notifyChanged()
                });

                v.keydown(function (e, ui) {
                    //updating._13 = o.textMode && !o.hideEnterKey;
                    updating._notifyEditorKey(e, key);
                });

                this.etiJQueryElement = v;

                return v
            },
            attachErrorEvents: function (errorShowing, errorShown, errorHidden) {
            },
            getValue: function () {
                this.etiJQueryElement.trigger("change");
                return this.etiJQueryElement[0].value
            },
            setValue: function (val) {
                this.etiJQueryElement[0].value = val;
                this.etiJQueryElement.trigger("update");
                this.etiJQueryElement[0].focus();
                return true
            },
            setSize: function (width, height) {
                this.etiJQueryElement[0].className = "etiGridControl";
                this.etiJQueryElement[0].style.width = width + "px";
                this.etiJQueryElement[0].style.height = height + "px"
            },
            setFocus: function () {
                this.etiJQueryElement[0].focus()
            },
            removeFromParent: function () {
            },
            destroy: function () {
                if (this.etiJQueryElement[0].element) {
                    this.etiJQueryElement[0].element.destroy()
                }
            },
            validator: function () {
                return null
            },
            validate: function (noLabel) {
                return true
            },
            isValid: function () {
                return true
            }
        });
    }
    return new etiIgEditorProvider();
}

//INICIO scroll Tabs
$(function () {
    var hidWidth;
    var scrollBarWidths = 40;

    var widthOfList = function () {
        var itemsWidth = 0;
        $('.list li').each(function () {
            var itemWidth = $(this).outerWidth();
            itemsWidth += itemWidth;
        });
        return itemsWidth;
    };

    var AjustWidthCalc = function () {
        var itemsWidth = 0;
        var itemsWidthAux = getLeftPosi();

        $('.list li').each(function () {
            var itemWidth = $(this).outerWidth();
            if (itemsWidthAux + itemWidth > $('.wrapper').outerWidth()) {
                if (itemsWidth + itemWidth > $('.wrapper').outerWidth()) {
                } else {
                    itemsWidth += itemWidth;
                }
            } else {
                itemsWidthAux += itemWidth;
            }
        });
        return -itemsWidth;
    };

    var widthOfHidden = function () {
        var res = (($('.wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
        if (res < -$('.wrapper').outerWidth()) {
            return res = AjustWidthCalc();
        } else {
            $('.scroller-right').fadeOut('slow');
            return res;
        }
    };

    var getLeftPosi = function () {
        if ($('.list').position()) {
            return $('.list').position().left;
        } else {
            return 0;
        }
    };

    var reAdjust = function () {
        if ($('.wrapper')) {
            $('.scroller-left').show();
            $('.scroller-right').show();

            if (($('.wrapper').outerWidth()) < widthOfList()) {
                $('.scroller-right').show();
            } else {
                $('.scroller-right').hide();
            }

            if (getLeftPosi() < 0) {
                $('.scroller-left').show();
            } else {
                $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
                $('.scroller-left').hide();
            }
        }
    }

    reAdjust();

    $(window).on('resize', function (e) {
        reAdjust();
    });

    var animating = false;
    $('.scroller-right').click(function () {
        if (animating == false) {
            animating = true;
            $('.scroller-left').fadeIn('slow');
            var res = widthOfHidden();

            $('.list').animate({ left: "+=" + res + "px" }, 'slow', function () {
                animating = false;
            });
        }
    });

    $('.scroller-left').click(function () {
        if (animating == false) {
            animating = true;
            $('.scroller-right').fadeIn('slow');
            $('.scroller-left').fadeOut('slow');

            $('.list').animate({ left: "-=" + (getLeftPosi() - 5) + "px" }, 'slow', function () {
                animating = false;
            });
        }
    });
});
//FIM Scroll Tabs

if (typeof (ko) != "undefined") {
    //custom binding para utilizarmos em componentes - exemplo: data-bind="disableComponent: true" || data-bind="disableComponent: function() { return true; }"
    ko.bindingHandlers.disableEtiComponent = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element Set up any initial state, event handlers, etc. here
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = typeof valueAccessor() === "function" ? valueAccessor()() : valueAccessor();
            if ($(element).data("eti-type")) {
                $(element).setProperty('disabled', value);
            } else {
                $(element).prop('disabled', value);
            }
        }
    };
}

//EtiProgress
$(function () {
    var EtiProgress = function (element, conf) {
        var self = this;

        $('#' + element.id).css("background-color", "rgba(0,0,0,0.2)");
        $('#' + element.id).css("width", "100%");
        $('#' + element.id).css("height", "100%");
        $('#' + element.id).css("border-radius", "6px");
        var n = 0;
        var min = 0;
        var max = 100;
        if (conf && conf.now)
            n = parseInt(conf.now);

        if (conf && conf.minval) {
            $('#' + element.id).attr("eti-min-val", conf.minval);
            min = parseInt(conf.minval);
        }

        if (conf && conf.maxval) {
            $('#' + element.id).attr("eti-max-val", conf.maxval);
            max = parseInt(conf.maxval);
        }

        if (conf && conf.message)
            $('#' + element.id).attr("eti-message", conf.message);

        var html = "<div id='api_progress_internal_" + element.id + "' class='etiProgress'></div>";

        $('#' + element.id).html(html);

        var tot = max - min;
        var res = (n * 100) / max;
        if (res <= 100) {
            $("#api_progress_internal_" + element.id).css("width", res + "%");
            $('#' + element.id).attr("eti-now", n);
        }
        $('#' + element.id).on({
            setMessage: $.proxy(this.setMessage, this),
            setNow: $.proxy(this.setNow, this),
            setMin: $.proxy(this.setMin, this),
            setMax: $.proxy(this.setMax, this),
        });
    }
    $.fn.etiProgressBar = function (e) {
        var args = arguments;

        if (e === "setMessage" || e === "setNow" || e === "setMin" || e === "setMax") {
            return $(this.selector).trigger(e, args);
        }

        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiProgressBar', (data = new EtiProgress(this, args[0])));
            }
        });
    };
    EtiProgress.prototype = {
        constructor: EtiProgress,
        setNow: function (e) {
            var args = arguments;
            if (args[2] != null && args[2] != undefined) {
                var n = parseInt(args[2]);
                var min = $(e.currentTarget).attr("eti-min-val");
                var max = $(e.currentTarget).attr("eti-max-val");

                var tot = max - min;
                var res = Math.round((n * 100) / max);

                if (res <= 100) {
                    $(e.currentTarget).attr("eti-now", res);
                    $("#api_progress_internal_" + e.currentTarget.id).css("width", res + "%");
                    var msg = $(e.currentTarget).attr("eti-message");
                    if (msg) {
                        msg = msg.format(res + "%", n);
                        $("#api_progress_internal_" + e.currentTarget.id).text(msg);
                    }
                }

            }
        },
        getNow: function (e) {
            return $(e.currentTarget).attr("eti-now", args[2]);
        },
        setMessage: function (e) {
            var args = arguments;
            if (args[2] != null && args[2]) {
                $(e.currentTarget).attr("eti-message", args[2]);
            }
        },
        setMin: function (e) {
            var args = arguments;
            if (args[2] != null && args[2]) {
                $(e.currentTarget).attr("eti-min-val", args[2]);
            }
        },
        setMax: function (e) {
            var args = arguments;
            if (args[2] != null && args[2]) {
                $(e.currentTarget).attr("eti-max-val", args[2]);
            }
        },

    };
});