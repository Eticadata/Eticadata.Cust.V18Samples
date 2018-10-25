// MAO 30/07/2014 - Funções JavaScript de Interesse genérico

function MyShell() {
    return window.top;
}

var antResources = "";
function IgLoader(pResources, pCallbak) {
    if (antResources == pResources) {
        pCallbak();
    } else {
        antResources = pResources;
        $.ig.loader({
            scriptPath: GetUrlBase() + 'Scripts/Infragistics/',
            cssPath: GetUrlBase() + 'Themes/css/Infragistics/',
            resources: pResources,
            ready: function () {
                link = document.createElement("link");
                link.href = GetUrlBase() + "Themes/css/Infragistics/structure/infragistics.eticadata.css";
                link.type = "text/css";
                link.rel = "stylesheet";
                document.getElementsByTagName("head")[0].appendChild(link);
                pCallbak();
            }
        });
    }
}

var lstLoadedScript = [];
function LoadScript(pJsFile) {
    if (lstLoadedScript.indexOf(pJsFile) == -1) {
        $.ajax({
            async: false,
            type: 'GET',
            url: pJsFile,
            data: null,
            dataType: 'script',
            success: function (s, t) {
                lstLoadedScript.push(pJsFile);
            },
            error: function (xhr, textStatus, errorThrown) {
                // Error ?
            }
        });
    }
}

function isCursorInsideDiv(pDivId, e) {
    var div = document.getElementById(pDivId);
    var intDivLeftA = GetLeft(div);
    var intDivLeftB = intDivLeftA + div.offsetWidth;
    var intDivTopA = GetTop(div);
    var intDivTopB = intDivTopA + div.offsetHeight;

    if (e.pageX >= intDivLeftA) {
        if (e.pageX <= intDivLeftB) {
            if (e.pageY >= intDivTopA) {
                if (e.pageY <= intDivTopB) {
                    return true;
                }
            }
        }
    }
    return false;
}

function getHtmlParameter(key, url) {
    var myUrl = url;
    if (!url) {
        myUrl = document.URL;
    }
    var thisURL = myUrl;
    var thisNVP = thisURL.split("?");
    if (thisNVP.length > 1) {
        var nvpArray = thisNVP[1].split("&");
        for (var i = 0; i < nvpArray.length; i++) {
            if (nvpArray[i].length > key.length + 1) {
                if (nvpArray[i].substring(0, key.length + 1) == (key + "=")) {
                    return nvpArray[i].replace((key + "="), "");
                }
            }
        }
    }
    return '';
}

function getDebugObj(printthis, niv) {
    var output = '';

    if (niv < 4) {
        if ($.isArray(printthis) || typeof (printthis) == 'object') {
            for (var i in printthis) {
                var p = getDebugObj(printthis[i], niv + 1);
                if (p != '') {
                    output += i + ' : ' + p + '\n';
                }
            }
        } else {
            output += printthis;
        }
    }
    return output;
}

function GetTop(ele) {
    if (ele.offsetParent) {
        return ele.offsetTop + GetTop(ele.offsetParent);
    } else {
        return ele.offsetTop;
    }
}

function GetLeft(ele) {
    if (ele.offsetParent) {
        return ele.offsetLeft + GetLeft(ele.offsetParent);
    } else {
        return ele.offsetLeft;
    }
}

function ajustRelativePopup(pDivIdPai, pDivIdFilho, pHeight) {
    var intHeight = $('#' + pDivIdPai).height();
    $('#' + pDivIdFilho).css('height', (intHeight - pHeight) + 'px');
}

function fadeInPopup(pIdPopup) {
    $("#" + pIdPopup).show('slide', { direction: 'right' }, 500);
    $(document).on('mousedown', function (ev) {
        if (!isCursorInsideDiv(pIdPopup, ev)) {
            closePopup(pIdPopup, true)
            $(document).off('mousedown');
        }
    });
}

function closePopup(pIdPopup, blnSlowly) {
    if (!blnSlowly)
        $("#" + pIdPopup).css('display', 'none');
    else
        $("#" + pIdPopup).hide('slide', { direction: 'right' }, 500);
}

function comboRemoveAllItems(cmb) {
    while (cmb.options.length > 0) {
        cmb.remove(0);
    }
}

function showError(pError, pDescription) {
    MyShell().Dialog.showError(pError, pDescription);
}

function showErrorAjax(pError) {
    if (pError.status == 401) {
        window.top.location.href = GetUrlBase();
    } else if (pError.status == 200) {
        MyShell().Dialog.showError("Erro", "O Serviço respondeu correctamente, mas não foi possível desserializar a resposta do mesmo!");
    } else {
        var myError = pError.responseJSON;
        var myErrorTit = "";
        var myErrorDesc = "";
        var myErrorType = "";

        if (myError) {
            myErrorTit = "";
            myErrorDesc = "";
            if (myError.ExceptionMessage) {
                myErrorTit = myError.ExceptionMessage;
            } else {
                myErrorTit = pError.statusText;
            }
            if (myError.StackTrace) {
                myErrorDesc = myError.StackTrace.replace("\n", "<br/>");
            } else {
                myErrorDesc = pError.responseText.replace("\n", "<br/>");
            }
            myErrorType = "";
            if (myError.ExceptionType) {
                myErrorType = myError.ExceptionType;
            }
        } else {
            myErrorTit = getMsgTranslated("generic", "Erro");
            myErrorDesc = pError.responseText;
            myErrorType = "";
        }

        if (myErrorType == "System.UnauthorizedAccessException") {
            MyShell().Dialog.showMessageBox(0, 0, "error", "ERP eticadata", getMsgTranslated("generic", "Não está autorizado a efetuar essa operação!"), getMsgTranslated("generic", "Ok"));

        } else if (myErrorType == "System.Data.DBConcurrencyException") {
            MyShell().Dialog.showMessageBox(0, 0, "error", "ERP eticadata", getMsgTranslated("generic", "O Registo foi Alterado por outro Utilizador!") + "<br/>" + getMsgTranslated("generic", "Recarregue o registo, e grave novamente!"), getMsgTranslated("generic", "Ok"));

        } else if (myErrorType == "Eticadata.ERP.EtiErro" && (myErrorTit.toLowerCase().indexOf("reference constraint") > 0 || myErrorTit.toLowerCase().indexOf("delete") > 0)) {
            MyShell().Dialog.showMessageBox(0, 0, "error", "ERP eticadata", getMsgTranslated("generic", "O Registo está referenciado noutra Tabela!"), getMsgTranslated("generic", "Ok"));

        } else if (myErrorType == "Eticadata.ERP.EtiErro" && myErrorTit.toLowerCase().indexOf("violation of primary key") > 0) {
            MyShell().Dialog.showMessageBox(0, 0, "error", "ERP eticadata", getMsgTranslated("generic", "Já existe um registo com essa Chave!"), getMsgTranslated("generic", "Ok"));

        } else if (myErrorTit == "Unprocessable Entity") {
            MyShell().Dialog.showMessageBox(0, 0, "error", "ERP eticadata", getMsgTranslated("generic", "Não foi possível eliminar o registo,<br/>pois o mesmo está referenciado noutra tabela!"), getMsgTranslated("generic", "Ok"));

        } else {
            MyShell().Dialog.showError(myErrorTit, myErrorDesc);
        }
    }
}

function comboAddItem(cmb, sValue, sText, pPosicao) {
    var option = document.createElement('option');
    option.text = sText;
    option.value = sValue;
    if (pPosicao)
        cmb.add(option, cmb.options.length);
    else
        cmb.add(option, 0);
}

function RetiraFromUrlBase(pBase, pRetira) {
    var ret = pBase;
    var pos = ret.toLowerCase().indexOf(pRetira);
    if (pos != -1) {
        ret = ret.substring(0, pos);
    }
    return ret;
}

var myUrlBase = "";
function GetUrlBase() {
    if (myUrlBase == "") {
        myUrlBase = location.href;
        myUrlBase = RetiraFromUrlBase(myUrlBase, 'default.html');
        myUrlBase = RetiraFromUrlBase(myUrlBase, 'client');
        myUrlBase = RetiraFromUrlBase(myUrlBase, 'widgets');
        myUrlBase = RetiraFromUrlBase(myUrlBase, '?');
    }
    return myUrlBase;
}

function GetIFrameKey(pFrameId) {
    return pFrameId.replace("idIFrameKey", "");
}

function getMsgTranslatedTag(pModule, pExpr, pReplace1, pReplace2, pReplace3, pReplace4, pReplace5) {
    return MyShell().Translate.getMsgTag(pModule, pExpr, pReplace1, pReplace2, pReplace3, pReplace4, pReplace5);
}

function getMsgTranslated(pModule, pExpr) {
    return MyShell().Translate.getMsg(pModule, pExpr);
}

function GetGUID() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

function destroyDocIFrames() {
    var strIds = "";
    var numIFrames = 0;
    $("iframe").each(function () {
        numIFrames++;
        if (numIFrames > 1) {
            strIds += ",";
        }
        strIds += $(this)[0].id;
    });
    if (numIFrames == 1) {
        destroyIFrame(strIds);
    } else if (numIFrames > 1) {
        var arrIds = strIds.split(",");
        for (var i = 0; i < arrIds.length; i++) {
            destroyIFrame(arrIds[i]);
        }
    }
}

function destroyIFrame(sIFrameId) {
    if ($("#" + sIFrameId).length != 0) {
        var isEtiPage = false;
        if ($("#" + sIFrameId)[0].src.length >= myUrlBase.length) {
            if ($("#" + sIFrameId)[0].src.substring(0, myUrlBase.length) == myUrlBase) {
                try {
                    $("#" + sIFrameId)[0].contentWindow.destroyDocIFrames();
                    isEtiPage = true;
                }
                catch (e) {
                }
            }
        }
        $("#" + sIFrameId)[0].src = "about:blank";
        if (isEtiPage) {
            $("#" + sIFrameId)[0].contentWindow.document.write('');
        }
        $("#" + sIFrameId)[0].contentWindow.close();
        $("#" + sIFrameId).remove();
        if (typeof CollectGarbage == "function") {
            CollectGarbage();
        }
    }
}

function GetComboAdiar(pId) {
    var sMinutos = getMsgTranslated("Generic", "minutos");
    var sHora = getMsgTranslated("Generic", "hora");
    var sHoras = getMsgTranslated("Generic", "horas");
    var sDia = getMsgTranslated("Generic", "dia");
    var sDias = getMsgTranslated("Generic", "dias");
    return "<select id='" + pId + "'>" +
             "<option value='5M'>5 " + sMinutos + "</option>" +
             "<option value='10M'>10 " + sMinutos + "</option>" +
             "<option value='15M'>15 " + sMinutos + "</option>" +
             "<option value='1H'>1 " + sHora + "</option>" +
             "<option value='2H'>2 " + sHoras + "</option>" +
             "<option value='4H'>4 " + sHoras + "</option>" +
             "<option value='8H'>8 " + sHoras + "</option>" +
             "<option value='12H'>12 " + sHoras + "</option>" +
             "<option value='1D'>1 " + sDia + "</option>" +
             "<option value='2D'>2 " + sDias + "</option>" +
             "<option value='3D'>3 " + sDias + "</option>" +
             "<option value='4D'>4 " + sDias + "</option>" +
             "<option value='8D'>8 " + sDias + "</option>" +
             "<option value='15D'>15 " + sDias + "</option>" +
           "</select>";
}

//HELP & ATALHOS

// Internet Explorer
if ("onhelp" in window) {
    window.onhelp = function () {
        CallHelp();
        return false;
    }
}

document.onkeydown = function (evt) {
    evt = evt || window.event;

    if (evt.keyCode === 116) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.returnValue = false;
        return false;
    }

    if ((evt.keyCode === 76 || evt.keyCode === 78 || evt.keyCode === 79 || evt.keyCode === 87 || evt.keyCode === 83) && evt.ctrlKey) {
        if (MyShell().Environment) {
            if (MyShell().Environment.Config.IsSaas) {
                evt.preventDefault();
                evt.stopPropagation();
                evt.returnValue = false;

                alert(getMsgTranslated("Generic", "Não é possivel executar este atalho!"));

                return false;
            }
        }
    }

    if (!("onhelp" in window)) {
        if (evt.keyCode == 112) {  // F1 was pressed
            CallHelp();
            return false;
        }
    }
}

function IsEtiTabStop(pCtrl) {
    if (pCtrl.disabled) {
        return false;
    }
    var strEnterNoStop = pCtrl.getAttribute("data-eti-enterstop");
    if (strEnterNoStop) {
        if (strEnterNoStop.toLowerCase() == "n") {
            return false;
        }
    }
    if (pCtrl.tagName == "DIV") {
        if (pCtrl.getAttribute("data-eti-type")) {
            if (pCtrl.getAttribute("data-eti-parentgrid")) {
                return false;
            }
            if ($(pCtrl).getProperty("disabled") == true) {
                return false;
            }
        }
        return true;
    }
    if (pCtrl.tagName == "A") {
        if (typeof ($) != 'undefined') {
            if ($(pCtrl).has("IMG").length == 1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }
    } else {
        return true;
    }
}

function SetFocusToNextElement(activeControl) {
    var lst = document.querySelectorAll("[contenteditable],button,input,a,textarea,select");

    if (lst.length != 0) {
        var myIndex = -1;
        if (activeControl) {
            for (var i = 0; i < lst.length; i++) {
                if (lst[i] == activeControl) {
                    myIndex = i;
                    break;
                }
            }
        }

        var intLoops = 0;
        while (intLoops <= 1) {
            myIndex++;
            if (myIndex >= lst.length) {
                myIndex = 0;
                intLoops++;
            }
            if (IsEtiTabStop(lst[myIndex])) {
                lst[myIndex].focus();
                break;
            }
        }
    }
}

setTimeout(SetFocusToNextElement, 200);

document.onkeyup = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode === 13) {
        var activeControl = document.activeElement;
        if (activeControl) {
            if (activeControl.length > 1) {
                if (activeControl[0].parentElement) {
                    activeControl = activeControl[0].parentElement;
                }
            }
            var goToNextCtrl = true;
            if (activeControl.tagName == "DIV") {
                if (activeControl.getAttribute("data-eti-parentgrid")) {
                    goToNextCtrl = false;
                }
            }
            if (activeControl.tagName == "A" || activeControl.tagName == "BUTTON" || activeControl.tagName == "TEXTAREA" || activeControl.tagName == "BODY") {
                goToNextCtrl = false;
            }
            if (goToNextCtrl) {
                SetFocusToNextElement(activeControl);
            }
        }
    }
}

function CallHelp() {
    var id = window.document.getElementsByTagName("title")['0'].id
    if (id) {
        if (id > 0) {
            if (MyShell().Environment.Config.ActiveCompanyInfo.IsSaas) {
                MyShell().Ribbon.SendCommand(MyShell().getMsgTranslated('Generic', 'Help'), 'JS', '#/Help/Help.aspx?lang=' + MyShell().myActiveLang + "&id=" + id, "");
            } else {
                window.open(MyShell().myUrlBase + "Help/Help.aspx?lang=" + MyShell().myActiveLang + "&id=" + id, "_blank");
            }
        }
    } else {
        if (MyShell().Environment.Config.ActiveCompanyInfo.IsSaas) {
            MyShell().Ribbon.SendCommand(MyShell().getMsgTranslated('Generic', 'Help'), 'JS', '#/Help/Help.aspx?lang=' + MyShell().myActiveLang, "");
        } else {
            window.open(MyShell().myUrlBase + "Help/Help.aspx?lang=" + MyShell().myActiveLang, "_blank");
        }
    }
}

function BuildHandlersSaasMode(frame) {
    if (MyShell().Environment) {
        if (MyShell().Environment.Config.IsSaas) {
            var myIframe = frame;
            myIframe.content.contentDocument.addEventListener('keydown', document.onkeydown, false);
            $(myIframe.content.contentDocument).find('a').each(function (e) {
                var attr = $(this).attr('href')
                if (attr) {
                    if (attr.toLowerCase().indexOf("https://") == 0 || attr.toLowerCase().indexOf("http://") == 0 || attr.toLowerCase().indexOf("www") == 0 || attr.toLowerCase().indexOf("mailto") == 0) {
                        $(this).attr("disabled", "disabled");
                    }
                }
            });
        }
    }
}