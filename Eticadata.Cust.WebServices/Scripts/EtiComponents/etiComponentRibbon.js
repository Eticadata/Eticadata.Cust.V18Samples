//MAO 29/07/2014 Funções para suporte de Componente Eticadata (Ribbon)

// ************************************
// FUNCOES GENERICAS
// ************************************
var myIsInInterop = false;
var mySilverLightTabKey = "";
var myIFrameLoading = false;
var myBackStageNumOptions = 8;
var myBackStageLoadedCtrls = "";
var myKeyToCloseEfective = "";
var myLstRibbon;
var myLstWebTabs = [];
var mySelectedKey = -1;
var mySelectedTab = "";
var mySelectedTabRib = ""; // O Ultimo Tab seleccionado excepto Admin e Contextual
var myContextTabId = -1;
var myUniqueId = -1;
var myUniqueTabId = 0;
var myLimitTabsWidth = 0;
var myLastOperationTime = new Date();
var myShellWidth = 0;
var myVisibleTabLeft = -1;
var myVisibleTabRight = -1;
var myUrlBase = GetUrlBase();
var myActiveLang = "";
var myDisabledRibbonDiv;
var myUseMultipleWindows = false;
var myBackstageInteropInitiated = false;
var myRibColorTabTexto = "";
var myRibColorTabBack = "";
var myRibColorTabSelTexto = "";
var myRibColorTabSelBack = "";

function GetRibbonTab(pMainPage, pTitle, tTabNumber) {
    var strRet = "";

    strRet += "<div class='divShellTabLnk'><a href='javascript:void(0);' onclick='return activateWebTab(" + tTabNumber + ", true);'>&nbsp;&nbsp;&nbsp;" + pTitle + "&nbsp;&nbsp;&nbsp;</a></div>";

    if (!pMainPage) {
        strRet += "<div class='divShellTabDis'><a href='javascript:void(0);' onclick='return tryToCloseWebTab(" + tTabNumber + ");'>&nbsp;X&nbsp;</a></div>";
    }

    strRet += "<div style='clear: both;'></div>";
    return strRet;
}

function iFrameLoaded(pSilverlight, pFrameId, pLongParam) {
    if (!pSilverlight) {
        Dialog.closeWaitingBox(10);
    }
    myIFrameLoading = false;

    if (pFrameId != '' && pLongParam != '') {
        var tFramedPage = document.getElementById(pFrameId);
        tFramedPage.contentWindow.SendLongParameter(pLongParam);
    }
}

function tryToSendCommand2SL(pCommandName, pCommandParams, pFrameId) {
    if (myIFrameLoading) {
        setTimeout('tryToSendCommand2SL("' + pCommandName + '", "' + pCommandParams + '", "' + pFrameId + '")', 500);
    } else {
        var tFramedPage = document.getElementById(pFrameId);
        var jsonMess = "{command: '" + pCommandName + "', parameters: '" + pCommandParams + "' }";
        tFramedPage.contentWindow.SendMessageWeb2Sl(14, jsonMess);
    }
}

function ensureTabVisible(visibleTabEnsured) {
    var tRowTabs = document.getElementById("mainShellWebTabs");
    var myWidth = 0;
    var myTotalWidth = 0;
    myLimitTabsWidth = $('#idTrTabsBar').width() - 150;

    var tRowTabsCells = tRowTabs.getElementsByTagName('td');
    for (var i = 0; i < tRowTabsCells.length - 2; i++) {
        myWidth = $('#' + tRowTabsCells[i].id).width();
        myTotalWidth += myWidth;
    }

    if (myTotalWidth > myLimitTabsWidth) {// Nao cabem todos, temos que seleccionar
        myTotalWidth = $('#' + tRowTabsCells[visibleTabEnsured].id).width();
        var blnContLeft = true;
        var blnContRight = true;
        myVisibleTabLeft = visibleTabEnsured;
        myVisibleTabRight = visibleTabEnsured;
        while (blnContLeft || blnContRight) {
            if (blnContLeft) {
                if ((myVisibleTabLeft - 1) >= 0) {
                    myWidth = $('#' + tRowTabsCells[myVisibleTabLeft - 1].id).width();
                    if (myTotalWidth + myWidth <= myLimitTabsWidth) {
                        myTotalWidth += myWidth;
                        myVisibleTabLeft--;
                    } else {
                        blnContLeft = false;
                    }
                } else {
                    blnContLeft = false;
                }
            }
            if (blnContRight) {
                if ((myVisibleTabRight + 1) < (tRowTabsCells.length - 2)) {
                    myWidth = $('#' + tRowTabsCells[myVisibleTabRight + 1].id).width();
                    if (myTotalWidth + myWidth <= myLimitTabsWidth) {
                        myTotalWidth += myWidth;
                        myVisibleTabRight++;
                    } else {
                        blnContRight = false;
                    }
                } else {
                    blnContRight = false;
                }
            }
        }

        if (myVisibleTabLeft > 0) {
            $('#idCtrlWebTabLeft').css("display", "table-cell");
        } else {
            $('#idCtrlWebTabLeft').css("display", "none");
        }

        if ((myVisibleTabRight + 1) < (tRowTabsCells.length - 2)) {
            $('#idCtrlWebTabRight').css("display", "table-cell");
        } else {
            $('#idCtrlWebTabRight').css("display", "none");
        }

        for (var i = 0; i < tRowTabsCells.length - 2; i++) {
            if (i >= myVisibleTabLeft && i <= myVisibleTabRight) {
                if ($('#' + tRowTabsCells[i].id).css("display") != "table-cell") {
                    $('#' + tRowTabsCells[i].id).css("display", "table-cell");
                }
            } else {
                if ($('#' + tRowTabsCells[i].id).css("display") != "none") {
                    $('#' + tRowTabsCells[i].id).css("display", "none");
                }
            }
        }

    } else {
        myVisibleTabLeft = -1;
        myVisibleTabRight = -1;
        $('#idCtrlWebTabLeft').css("display", "none");
        $('#idCtrlWebTabRight').css("display", "none");

        //Cabem todos, ficam todos visiveis
        for (var i = 0; i < tRowTabsCells.length - 2; i++) {
            if ($('#' + tRowTabsCells[i].id).css("display") != "table-cell") {
                $('#' + tRowTabsCells[i].id).css("display", "table-cell");
            }
        }
    }
}

function GetSilverlightPage() {
    var sStartupParams = MyShell().Environment.Config.ActiveCompanyInfo.Codigo + "|" +
                         MyShell().Environment.Config.ActiveCompanyInfo.Exercicio.Codigo + "|" +
                         MyShell().Environment.Config.ActiveCompanyInfo.Seccao.Codigo
    return "Client/Shell/SilverlightContainer.html?lang=" + myActiveLang + "&startup=" + sStartupParams + "&io=" + (myIsInInterop ? '1' : '0') + "&vers=" + MyShell().Environment.Config.EtiVersion;
}

function IsReusableCommand(pCommand) {
    if (pCommand == "#/Client/Generic/PdfViewer/Viewer.html") {
        return false;
    } else if (pCommand.length > 29 && pCommand.substring(0, 29) == "#/Client/Queries/Queries.html") {
        return false;
    } else {
        return true;
    }
}

function addWebTab(pMainPage, pCommand, pTitle, pSilverlight, pRibbon, pHashCode, sLongParam, pEmptySilverlight) {
    var tRowTabs = document.getElementById("mainShellWebTabs");
    var tRowContents = document.getElementById("mainShellWebContents");

    var strKeyOpen = "";
    var intTabOpen = 0;
    var sIFrameId = "";

    var tMaxKey = 1;
    if (mySilverLightTabKey != "") {
        tMaxKey = parseInt(mySilverLightTabKey.replace("idIFrameKey", ""), 10) + 1;
    }

    var blnIsReusableCommand = IsReusableCommand(pCommand);
    for (var i = 0; i < myLstWebTabs.length; i++) {
        if (myLstWebTabs[i].key >= tMaxKey) {
            tMaxKey = myLstWebTabs[i].key + 1;
        }
        if (blnIsReusableCommand) {
            if (myLstWebTabs[i].command == pCommand && !myUseMultipleWindows) {
                strKeyOpen = myLstWebTabs[i].key;
                intTabOpen = i;
            }
        }
    }

    if (strKeyOpen != "") {
        if (mySelectedKey != strKeyOpen) {
            activateWebTab(strKeyOpen, true);
            if (sLongParam != "") {
                sIFrameId = "idIFrameKey" + strKeyOpen;
                var tFramedPage = document.getElementById(sIFrameId);
                tFramedPage.contentWindow.SendLongParameter(sLongParam);
            }
        } else {
            ensureTabVisible(intTabOpen);
        }
        Dialog.closeWaitingBox(10);

    } else {
        var tRowContentsCells = tRowContents.getElementsByTagName('td');
        var tRowTabsCells = tRowTabs.getElementsByTagName('td');
        if (!pEmptySilverlight) {
            if (!pMainPage) {
                mySelectedKey = tMaxKey;
                document.getElementById('tabRibbon' + myContextTabId).innerHTML = "<a href='javascript:void(0);' onclick='return setTabClick(" + myContextTabId + ", false);'>&nbsp;&nbsp;&nbsp;" + pTitle + "&nbsp;&nbsp;&nbsp;</a>";
                for (var i = 0; i < myLstRibbon.length; i++) {
                    if (myLstRibbon[i].id == myContextTabId) {
                        myLstRibbon[i].items = [];
                        myLstRibbon[i].silverlight = pSilverlight;
                        myLstRibbon[i].title = pTitle;
                    }
                }
                openTab(myContextTabId);
            }

            for (var i = 0; i < tRowTabsCells.length - 2; i++) {
                if (tRowTabsCells[i].className == 'divShellTabSel') {
                    tRowTabsCells[i].className = 'divShellTab';
                }
            }
            for (var i = 0; i < tRowContentsCells.length; i++) {
                showHideContentArea(tRowContentsCells[i], false, false);
            }

            var tTabsCount = tRowTabsCells.length;
            var newCellTabs = tRowTabs.insertCell(tTabsCount - 2);
            newCellTabs.className = 'divShellTabSel';
            myUniqueTabId++;
            newCellTabs.id = 'idShellTab' + myUniqueTabId;
            newCellTabs.innerHTML = GetRibbonTab(pMainPage, pTitle, tMaxKey);
            $('#' + newCellTabs.id).css("display", "none");//Comeca Invisivel
            ensureTabVisible(tTabsCount - 2);
        }

        if (!pSilverlight || mySilverLightTabKey == "") {
            var tContentCount = tRowContentsCells.length;
            var newCellContents = tRowContents.insertCell(tContentCount);

            myIFrameLoading = true;
            sIFrameId = "idIFrameKey" + tMaxKey;
            destroyIFrame(sIFrameId);
            if (pMainPage) {
                newCellContents.innerHTML = "<iframe id='" + sIFrameId + "' style='height: 100%; width: 100%;' frameborder='0' src='" + myUrlBase + "Client/Shell/DashBoards.html?vers=" + MyShell().Environment.Config.EtiVersion + "' onload='iFrameLoaded(" + pSilverlight + ", \"\", \"\");'></iframe>";
            } else {
                if (pSilverlight) {
                    mySilverLightTabKey = sIFrameId;
                    newCellContents.innerHTML = "<iframe id='" + sIFrameId + "' style='height: 100%; width: 100%;' frameborder='0' src='" + myUrlBase + GetSilverlightPage() + "' onload='iFrameLoaded(" + pSilverlight + ", \"\", \"\");'></iframe>";
                } else {
                    var pCommandUrl = pCommand.substring(1);
                    if (pCommandUrl.substring(0, 1) == "/") {
                        pCommandUrl = pCommandUrl.substring(1);
                    }
                    if (pCommandUrl.indexOf("?") == -1) {
                        pCommandUrl += "?vers=" + MyShell().Environment.Config.EtiVersion
                    } else {
                        pCommandUrl += "&vers=" + MyShell().Environment.Config.EtiVersion
                    }
                    newCellContents.innerHTML = "<iframe id='" + sIFrameId + "' style='height: 100%; width: 100%;' frameborder='0' src='" + pCommandUrl + "' onload='iFrameLoaded(" + pSilverlight + ", \"" + sIFrameId + "\", \"" + sLongParam + "\");'></iframe>";
                }
            }

            showHideContentArea(newCellContents, true, true);
        }

        if (!pEmptySilverlight) {
            var ribbonToAdd = {};
            if (pRibbon != null) {
                ribbonToAdd = pRibbon;
            }
            var myHashCode = '-';
            if (pHashCode) {
                myHashCode = pHashCode;
            }
            myLstWebTabs.push({ key: tMaxKey, silverlight: pSilverlight, main: pMainPage, title: pTitle, command: pCommand, HashCode: myHashCode, ribbon: ribbonToAdd });

            activateWebTab(tMaxKey, false);
        }
    }
}

function refreshWebTab(pKey, pTitle) {
    var tRowTabs = document.getElementById("mainShellWebTabs");

    for (var i = 0; i < myLstWebTabs.length; i++) {
        if (myLstWebTabs[i].key == pKey) {
            myLstWebTabs[i].title = pTitle;
        }
    }

    document.getElementById('tabRibbon' + myContextTabId).innerHTML = "<a href='javascript:void(0);' onclick='return setTabClick(" + myContextTabId + ", false);'>&nbsp;&nbsp;&nbsp;" + pTitle + "&nbsp;&nbsp;&nbsp;</a>";
    for (var i = 0; i < myLstRibbon.length; i++) {
        if (myLstRibbon[i].id == myContextTabId) {
            myLstRibbon[i].title = pTitle;
        }
    }

    var tRowTabsCells = tRowTabs.getElementsByTagName('td');
    for (var i = 0; i < tRowTabsCells.length - 2; i++) {
        if (tRowTabsCells[i].innerHTML.indexOf('activateWebTab(' + pKey + ',') > 0) {
            tRowTabsCells[i].innerHTML = GetRibbonTab(false, pTitle, pKey);
            ensureTabVisible(i);
        }
    }
}

function GetContentNumber(pKey) {
    var tRowContents = document.getElementById("mainShellWebContents");
    var tRowContentsCells = tRowContents.getElementsByTagName('td');
    for (var i = 0; i < tRowContentsCells.length; i++) {
        var html = tRowContentsCells[i].innerHTML;
        if (html.indexOf('idIFrameKey' + pKey + '"') != -1) {
            return i;
        }
    }
    return -1;
}

function tryToCloseWebTab(pKey) {
    var tRowContents = document.getElementById("mainShellWebContents");

    var intTabCount = myLstWebTabs.length;
    for (var i = 0; i < intTabCount; i++) {
        if (myLstWebTabs[i].key == pKey) {
            myKeyToCloseEfective = pKey;
            if (!myLstWebTabs[i].silverlight) {
                if (myLstWebTabs[i].FncTryToClose) {
                    myLstWebTabs[i].FncTryToClose();
                } else {
                    closeWebTab(pKey);
                }
            } else {
                var tFramedPage = document.getElementById(mySilverLightTabKey);
                tFramedPage.contentWindow.SendMessageWeb2Sl(11, myLstWebTabs[i].command + "." + myLstWebTabs[i].HashCode);
            }
            i = intTabCount + 1;
        }
    }
    return false;
}

function closeWebTab(pKey) {
    var tRowTabs = document.getElementById("mainShellWebTabs");
    var tRowContents = document.getElementById("mainShellWebContents");

    var intTabCount = myLstWebTabs.length;
    var tRowTabsCells = tRowContents.getElementsByTagName('td');
    var keyToActivate = -1;
    var indexToSplice = -1;
    for (var i = 0; i < intTabCount; i++) {
        if (myLstWebTabs[i].key == pKey) {
            if (!myLstWebTabs[i].silverlight) {
                var indexContent = GetContentNumber(pKey);
                destroyIFrame("idIFrameKey" + myLstWebTabs[i].key);
                if (indexContent != -1) {
                    tRowContents.deleteCell(indexContent);
                }
            }

            tRowTabs.deleteCell(i);
            indexToSplice = i;
        } else {
            keyToActivate = myLstWebTabs[i].key;
        }
    }

    if (indexToSplice != -1) {
        myLstWebTabs.splice(indexToSplice, 1);
    }

    if (pKey == mySelectedKey && keyToActivate != -1) {
        activateWebTab(keyToActivate, true);
    } else {
        ensureTabVisible(keyToActivate);
    }

    return false;
}

function showHideContentArea(pArea, pShow, pFirstTime) {
    var pSilverlight = (pArea.innerHTML.indexOf("SilverlightContainer.html") != -1);
    if (pSilverlight) {
        if (pShow) {
            if (pArea.style.width != '100%') {
                pArea.style.width = '100%';
                pArea.style.height = '100%';
            }
        } else {
            if (pArea.style.width != '0%') {
                pArea.style.width = '0%';
            }
        }
    } else {
        if (pFirstTime) {
            pArea.style.width = '100%';
            pArea.style.height = '100%';
        }
        if (pShow) {
            if (pArea.style.display != '') {
                pArea.style.display = '';
                pArea.style.width = '100%';
            }
        } else {
            if (pArea.style.display != 'none') {
                pArea.style.display = 'none';
            }
        }
    }
}

function activateWebTab(pKey, pReposicionaSL) {
    var tRowTabs = document.getElementById("mainShellWebTabs");
    var tRowContents = document.getElementById("mainShellWebContents");
    var ribbonToShow = [];
    var isSilverlight = false;
    var myNextTabId = myContextTabId;
    var blnMain = false;
    var strTitle = "";
    mySelectedKey = pKey;

    var keyToActivate = 0;

    var tRowContentsCells = tRowContents.getElementsByTagName('td');
    var tRowTabsCells = tRowTabs.getElementsByTagName('td');
    for (var i = 0; i < myLstWebTabs.length; i++) {
        if (myLstWebTabs[i].key == pKey) {
            keyToActivate = myLstWebTabs[i].key;
            if (myLstWebTabs[i].main) {
                myNextTabId = mySelectedTabRib;
                blnMain = true;
            } else {
                ribbonToShow = myLstWebTabs[i].ribbon;
                isSilverlight = myLstWebTabs[i].silverlight;
                strTitle = myLstWebTabs[i].title;
            }
        }
    }
    for (var i = 0; i < tRowTabsCells.length - 2; i++) {
        if (tRowTabsCells[i].className == 'divShellTabSel') {
            tRowTabsCells[i].className = 'divShellTab';
        }
    }

    for (var i = 0; i < tRowContentsCells.length; i++) {
        showHideContentArea(tRowContentsCells[i], false, false);
    }

    if (keyToActivate == 0) {
        keyToActivate = 0;
        for (var i = 0; i < myLstWebTabs.length; i++) {
            if (myLstWebTabs[i].key > keyToActivate) {
                keyToActivate = myLstWebTabs[i].key;
                blnMain = myLstWebTabs[i].main;
                ribbonToShow = myLstWebTabs[i].ribbon;
                isSilverlight = myLstWebTabs[i].silverlight;
                strTitle = myLstWebTabs[i].title;
            }
        }
    }

    for (var i = 0; i < myLstRibbon.length; i++) {
        if (myLstRibbon[i].id == myContextTabId) {
            myLstRibbon[i].items = ribbonToShow;
            myLstRibbon[i].silverlight = isSilverlight;
            if (blnMain) {
                document.getElementById('tabRibbon' + myContextTabId).innerHTML = "";
                myLstRibbon[i].title = "";
            } else {
                document.getElementById('tabRibbon' + myContextTabId).innerHTML = "<a href='javascript:void(0);' onclick='return setTabClick(" + myContextTabId + ", false);'>&nbsp;&nbsp;&nbsp;" + strTitle + "&nbsp;&nbsp;&nbsp;</a>";
                myLstRibbon[i].title = strTitle;
            }
        }
    }

    for (var i = 0; i < myLstWebTabs.length; i++) {
        if (myLstWebTabs[i].key == keyToActivate) {

            if (myLstWebTabs[i].main) {
                if (myIsInInterop) {
                    window.external.RefreshRibbonProfile(false, "");
                }
            }

            tRowTabsCells[i].className = 'divShellTabSel';
            ensureTabVisible(i);

            if (myLstWebTabs[i].silverlight) {
                showHideContentArea(tRowContentsCells[GetContentNumber(mySilverLightTabKey.replace("idIFrameKey", ""))], true, false);
            } else {
                showHideContentArea(tRowContentsCells[GetContentNumber(keyToActivate)], true, false);
            }

            if (myLstWebTabs[i].silverlight) {
                if (pReposicionaSL) {
                    var tFramedPage = document.getElementById(mySilverLightTabKey);
                    tFramedPage.contentWindow.SendMessageWeb2Sl(12, myLstWebTabs[i].command + "." + myLstWebTabs[i].HashCode);
                }
            }
        }
    }

    openTab(myNextTabId);

    return false;
}

function setupMainPage() {
    if (myLstWebTabs.length == 0) {
        addWebTab(true, "", getMsgTranslated('Shell', 'Ecrã Principal'), false, null, null, '', false);
    }
}

function IsSpecialCommand(pCommName) {
    if (pCommName == "Shell.Logout.Execute()" || pCommName == "#BACKSTAGECLEAN" || pCommName == "#MAINPAGE" || pCommName == "#SHOWREMINDERS" || pCommName == "#SHOWWARNINGS" || pCommName == "#SHOWERRORS" || pCommName == "#CHANGERELATIONS" || pCommName == "#CHANGEUSERPASS" || pCommName == "#RESPONSECITIZENCARD" || pCommName == "#PRINTPREVIEWLABEL" || pCommName == "#PRINTPDF") {
        return true;
    }
    return false;
}

function SendSpecialCommandLogout() {
    var sLogoutJsonComm = "{command: 'Shell.Logout.Execute()', parameters: ''}";

    if (mySilverLightTabKey != "") {
        var tFramedPage = document.getElementById(mySilverLightTabKey);
        tFramedPage.contentWindow.SendMessageWeb2Sl(14, sLogoutJsonComm);
        tFramedPage.src = '';
    }

    Login.LogoutUser();
}

function SendSpecialCommandRelations(pValue) {
    var arrRel = pValue.split("§");
    if (arrRel.length == 2) {
        MyShell().Relations.AddRelation(arrRel[0], arrRel[1]);
    }
}

function SendSpecialCommandPrintPrevieLabel(pValue) {
    var arrRel = pValue.split("§");
    if (arrRel.length == 7) {
        MyShell().Labels.PrintPreview(arrRel[0], arrRel[1], arrRel[2], arrRel[3], arrRel[4], JSON.parse(arrRel[5]), JSON.parse(arrRel[6]));
    }
}

function ChangeUserPass() {
    var sMessage = "";
    sMessage += "<table cellpadding=3 width='80%'>";
    sMessage += "<tr><td colspan=2>" + getMsgTranslated('Shell', 'Chave de Acesso') + "<hr/></td></tr>";
    sMessage += "<tr><td>" + getMsgTranslated('Shell', 'Anterior:') + "</td><td><input id='myPasswordAnt' type='password' style='padding: 5px; width: 220px; font-size: 12pt; border: 1px solid gray;' /></td></tr>";
    sMessage += "<tr><td>" + getMsgTranslated('Shell', 'Nova:') + "</td><td><input id='myPasswordNov1' type='password' style='padding: 5px; width: 220px; font-size: 12pt; border: 1px solid gray;' /></td></tr>";
    sMessage += "<tr><td>" + getMsgTranslated('Shell', 'Confirmação:') + "</td><td><input id='myPasswordNov2' type='password' style='padding: 5px; width: 220px; font-size: 12pt; border: 1px solid gray;' /></td></tr>";
    sMessage += "<tr><td id='changePass' style='font-family: verdana; font-size: 10pt; font-weight: bold; color: #FF0000;' colspan=2>&nbsp;</td></tr>";
    sMessage += "</table>";
    MyShell().Dialog.showMessageBox(600, 350, '', getMsgTranslated('Shell', 'Alterar Chave de Acesso'), sMessage, getMsgTranslated('Shell', 'Ok'), getMsgTranslated('Shell', 'Cancelar'), '',
        function () {
            var sPassAnt = window.top.document.getElementById('myPasswordAnt').value;
            var sPassNov1 = window.top.document.getElementById('myPasswordNov1').value;
            var sPassNov2 = window.top.document.getElementById('myPasswordNov2').value;

            $.ajax({
                url: GetUrlBase() + "api/Shell/ChangeUserPassword",
                type: "POST",
                data: JSON.stringify({ passwordAnterior: sPassAnt, passwordNova1: sPassNov1, passwordNova2: sPassNov2 }),
                contentType: "application/json; charset=utf-8",
                cache: false,
                async: true,
                success: function (data) {
                    if (data.error === true) {
                        window.top.document.getElementById('changePass').innerHTML = data.errorMessage;
                        if (data.errorCode == 1) {
                            window.top.document.getElementById('myPasswordAnt').focus();
                        } else if (data.errorCode == 2) {
                            window.top.document.getElementById('myPasswordNov1').focus();
                        } else if (data.errorCode == 3) {
                            window.top.document.getElementById('myPasswordNov1').focus();
                        } else if (data.errorCode == 4) {
                            window.top.document.getElementById('myPasswordNov2').focus();
                        }
                    } else {
                        MyShell().Dialog.closeMessageBox();
                    }
                },
                error: function (d) {
                    window.top.document.getElementById('changePass').innerHTML = getMsgTranslated('Shell', 'Ocorreu um erro ao Alterar a Password!');
                }
            });
        }
    );
}

function SendSpecialCommand(pCommName) {
    if (pCommName == "#MAINPAGE") {
        activateWebTab(1, false);
        var tFramedPage = document.getElementById("idIFrameKey1");
        tFramedPage.contentWindow.showDashBoards();

    } else if (pCommName == "#SHOWREMINDERS") {
        MyShell().Page.ShowUserReminders(1);

    } else if (pCommName == "#SHOWWARNINGS") {
        MyShell().Page.ShowUserReminders(2);

    } else if (pCommName == "#SHOWERRORS") {
        MyShell().Page.ShowUserReminders(3);

    } else if (pCommName == "Shell.Logout.Execute()") {
        MyShell().Dialog.showMessageBox(0, 0, 'Question', getMsgTranslated('Admin', 'Terminar Sessão'), getMsgTranslated('Admin', 'Tem a certeza?'), getMsgTranslated('Admin', 'Confirmar'), getMsgTranslated('Admin', 'Cancelar'), '', function () { SendSpecialCommandLogout() });

    } else if (pCommName == "#CHANGEUSERPASS") {
        ChangeUserPass();

    } else if (pCommName == "#BACKSTAGECLEAN") {
        document.getElementById('idMyShellBackstage').style.visibility = 'hidden';
        document.getElementById('idMyShellBackstage').style.top = '24px';

    }
}

function SendCommand4AllSl(pCommName) {
    if (mySilverLightTabKey != "") {
        var tFramedPage = document.getElementById(mySilverLightTabKey);
        tFramedPage.contentWindow.SendMessageWeb2Sl(15, pCommName);
    }
}

function IsInteropBackstageCommand(pCommName) {
    if (myIsInInterop) {
        if (pCommName == "BackstageRibbonCommand" || pCommName == "BackstageAssembliesCommand" || pCommName == "BackstageModulesCommand" || pCommName == "BackstageEportalsCommand" || pCommName == "BackstagePreferencesCommand") {
            return true;
        }
    }
    return false;
}

function SendBackstageCommand(pCommName) {
    if (myBackstageInteropInitiated) {
        initBackstageInterop(pCommName);
        SendBackstageCommandEfec(pCommName);
    } else {
        initBackstageInterop(pCommName);
    }
}

function SendBackstageCommandEfec(pCommName) {
    if (pCommName == "BackstageRibbonCommand") {
        trySelectAdminTab(3);
    } else if (pCommName == "BackstageAssembliesCommand") {
        selectAdminTab(4);
    } else if (pCommName == "BackstageModulesCommand") {
        trySelectAdminTab(5);
    } else if (pCommName == "BackstagePreferencesCommand") {
        trySelectAdminTab(6);
    } else if (pCommName == "BackstageEportalsCommand") {
        trySelectAdminTab(7);
    }
}

function GetSilverlightSpecificCode(pCommType) {
    if (pCommType == "SLE-GENMESS") {
        return 17;

    } else if (pCommType == "SLE-CRD") {
        return 16;
    }
    return 0;
}

function RegisterCommand(pTitle, pCommName, pCommParam, pFn) {
    Generic.RegisterCommand(pTitle, pCommName, pCommParam, pFn);
}

function CheckNeedToLogin() {
    MyShell().Environment.Config.PingHints = 0;
    var dtActual = new Date();
    myLastOperationTime.setSeconds(myLastOperationTime.getSeconds() + 60);// 1 Minuto
    var ret = false;
    
    if (dtActual > myLastOperationTime) {
        ret = true;
    }
    myLastOperationTime = dtActual;
    return ret;
}

function NeedReLogin() {
    var blnNeedReLogin = false;
    $.ajax({
        url: GetUrlBase() + "api/Shell/TestNeedReLogin",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (data) {
            blnNeedReLogin = false;
        },
        error: function (d) {
            blnNeedReLogin = true;
        }
    });
    return blnNeedReLogin;
}

function CanReLogin() {
    var blnCanReLogin = true;
    $.ajax({
        url: GetUrlBase() + "api/Shell/CanReLogin",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (data) {
            blnCanReLogin = data;
        },
        error: function (d) {
            blnCanReLogin = false;
        }
    });
    return blnCanReLogin;
}

function OpenCommand(pTitle, pCommType, pCommName, pCommParam) {
    if (pCommName != '') {
        hideMenus(1);

        if (CheckNeedToLogin()) {
            if (NeedReLogin()) {
                if (!CanReLogin()) {
                    window.location.href = GetUrlBase();
                } else {
                    var sMessage = "<br/>" + getMsgTranslated('Shell', 'A sua Sessão Expirou!') + "<br/>" + getMsgTranslated('Shell', 'Reintroduza a sua Password para reactivar a sua Sessão!') + "<br/><br/>";
                    sMessage += "<input id='myPassword' type='password' style='padding: 10px; width: 220px; font-size: 14pt; border: 1px solid gray;' onkeypress='document.getElementById(\"loginResult\").innerHTML=\"&nbsp;\"' /><br/>";
                    sMessage += "<br/><div id='loginResult' style='font-family: verdana; font-size: 10pt; font-weight: bold; color: #FF0000'>&nbsp;</div><br/>";
                    Dialog.showMessageBox(600, 350, 'alert', getMsgTranslated('Shell', 'Sessão Expirada'), sMessage, getMsgTranslated('Shell', 'Ok'), '', '',
                        function () {
                            $.ajax({
                                url: GetUrlBase() + "api/Shell/ReLoginUser",
                                type: "POST",
                                data: JSON.stringify({ password: $("#myPassword").val() }),
                                contentType: "application/json; charset=utf-8",
                                cache: false,
                                async: true,
                                success: function (data) {
                                    if (data.error) {
                                        $("#loginResult").html(getMsgTranslated('Shell', 'As credenciais não estão correctas!'));
                                    } else {
                                        Dialog.closeMessageBox();
                                        OpenCommandEfec(pTitle, pCommType, pCommName, pCommParam);
                                    }
                                },
                                error: function (d) {
                                    $("#loginResult").html(getMsgTranslated('Shell', 'As credenciais não estão correctas!'));
                                }
                            });
                        }
                    );
                }
            } else {
                OpenCommandEfec(pTitle, pCommType, pCommName, pCommParam);
            }
        } else {
            OpenCommandEfec(pTitle, pCommType, pCommName, pCommParam);
        }
    }
    return false;
}

function hasCommKeyParams(pCommParam) {
    var blnRealParams = true;
    var pos = 0;
    var arrParams = ("" + pCommParam).split("§");
    for (var i = 0; i < arrParams.length; i++) {
        pos = arrParams[i].indexOf("=");
        if (pos == -1 || pos > 25) {
            blnRealParams = false;
        }
    }
    return !blnRealParams;
}

function OpenCommandEfec(pTitle, pCommType, pCommName, pCommParam) {
    if (IsSpecialCommand(pCommName)) { // Command Globais
        if (pCommName == "#CHANGERELATIONS") {
            SendSpecialCommandRelations(pCommParam);
        } else if (pCommName == "#RESPONSECITIZENCARD") {
            var tFramedPage = document.getElementById("idIFrameKey" + mySelectedKey);
            tFramedPage.contentWindow.SendResponseCitizenCard(pCommParam);
        } else if (pCommName == "#PRINTPREVIEWLABEL") {
            SendSpecialCommandPrintPrevieLabel(pCommParam);
        } else if (pCommName == "#PRINTPDF") {
            var pPrintInfo = JSON.parse(pCommParam);
            MyShell().Pdf.SendPdfToPrinter(pPrintInfo.pdfFileB64, pPrintInfo.pdfPrinter, pPrintInfo.isSilent);
        }else {
            SendSpecialCommand(pCommName);
        }

    } else if (IsInteropBackstageCommand(pCommName)) { // Paginas Silverlight em Backstage & Interop
        SendBackstageCommand(pCommName);

    } else if (pCommName.substring(0, 1) == "#") { // Paginas Web HTML5
        Dialog.showWaitingBox(10);
        setTimeout(function () {
            var sCommName = pCommName;
            var sCommParam = '';
            if (pCommParam != '') {
                if (pCommParam.length >= 250) {
                    sCommParam = pCommParam;
                } else {
                    if (hasCommKeyParams(pCommParam)) {
                        sCommName += '?key=' + pCommParam;
                    } else {
                        sCommName += '?' + ReplaceAll(pCommParam,"§","&");
                    }
                }
            }
            RegisterCommand(pTitle, pCommName, pCommParam, function () {
                addWebTab(false, sCommName, pTitle, false, null, null, sCommParam, false);
            });
           
        });

    } else if (pCommName.substring(pCommName.length - 7).toLowerCase() == ".show()") { // Views Silverlight
        Dialog.showWaitingBox(10);
        setTimeout(function () {
            RegisterCommand(pTitle, pCommName, pCommParam, function () {
                addWebTab(false, pCommName, pTitle, true, null, null, '', false);
                tryToSendCommand2SL(pCommName, pCommParam, mySilverLightTabKey);
            });
        });

    } else if (pCommName.substring(pCommName.length - 10).toLowerCase() == ".execute()") { // Executes Silverlight
        Dialog.showWaitingBox(10);
        setTimeout(function () {
            RegisterCommand(pTitle, pCommName, pCommParam, function () {
                if (mySilverLightTabKey == "") {
                    addWebTab(false, pCommName, pTitle, true, null, null, '', true);
                }
                tryToSendCommand2SL(pCommName, pCommParam, mySilverLightTabKey);
            });
            
        });

    } else if (pCommType == "DESKTOP") { //Comandos p/ Desktop
        if (myIsInInterop) {
            window.external.ExecDesktopCommand(pCommName, pCommParam);
        } else {
            MyShell().Dialog.showMessageBox(0, 0, 'Error', 'ERP eticadata', getMsgTranslated('Shell', 'Esta operação só pode ser efectuada em conjunto com o ERP!'), 'Ok');
        }

    } else if (pCommType == "JS") { //Comandos Javascript p/ a Página
        for (var i = 0; i < myLstWebTabs.length; i++) {
            if (myLstWebTabs[i].key == mySelectedKey) {
                var tFramedPage = document.getElementById("idIFrameKey" + mySelectedKey);
                if (tFramedPage && tFramedPage.contentWindow.hideAllEtiHelpers) {
                    tFramedPage.contentWindow.hideAllEtiHelpers();
                }
                myLstWebTabs[i].FncSendCommand(pCommName, pCommParam);
            }
        }

    } else if (pCommType == "SL") { //Comandos Silverlight p/ a Página
        var tFramedPage = document.getElementById(mySilverLightTabKey);
        tFramedPage.contentWindow.SendMessageWeb2Sl(13, pCommName);

    } else if (pCommType.length >= 3 && pCommType.substring(0, 3) == "SLE") { //Envio de Comandos Especificos p/Silverlight
        var tFramedPage = document.getElementById(mySilverLightTabKey);
        tFramedPage.contentWindow.SendMessageWeb2Sl(GetSilverlightSpecificCode(pCommType), pCommName);

    } else {
        MyShell().Dialog.showMessageBox(0, 0, 'Error', 'ERP eticadata', 'Comando sem CommType (' + pCommName + ')!', 'Ok');
    }
  
}

function findItemById(pId, pObj) {
    var obj;
    for (var i = 0; i < pObj.length; i++) {
        if (pObj[i].id == pId) {
            return pObj[i];
        } else {
            if (pObj[i].items) {
                if (pObj[i].items.length > 0) {
                    obj = findItemById(pId, pObj[i].items);
                    if (obj) {
                        return obj;
                    }
                }
            }
        }
    }
}

function hideMenus(pNivel) {
    if (pNivel == 1) {
        document.getElementById('divSubMenuRibbonBack').style.visibility = 'hidden';
    }
    for (var i = pNivel; i <= 4; i++) {
        document.getElementById('idSubMenuRibbon' + i).style.visibility = 'hidden';
    }
}

function OpenSubMenu(pId, pNivel) {
    if (pNivel == 1) {
        document.getElementById('divSubMenuRibbonBack').style.visibility = 'visible';
    }
    hideMenus(pNivel + 1);

    var myItem = findItemById(pId, myLstRibbon);
    var divForOpen = document.getElementById('divFO' + pId);

    var rect = divForOpen.getBoundingClientRect();
    var intTop = rect.top;
    var intLeft = rect.left;

    if (pNivel == 1) {
        intTop += divForOpen.offsetHeight;
    } else {
        intLeft += divForOpen.offsetWidth;
    }

    var divM = document.getElementById('idSubMenuRibbon' + pNivel);
    divM.style.top = intTop + 'px';
    divM.style.left = intLeft + 'px';

    var sOnOverCode = "";
    var sDivIdForOpen = "";
    var sOnClickCode = "";
    var sTab = "<table border='0' cellspacing='0' cellpadding='0'>";
    var sMenuText = "";
    var sImage = "";
    var sMenuInText = "";
    var sMenuInStyle = "";
    var sClassOption = "";
    var sClassExtend = "";

    for (var i = 0; i < myItem.items.length; i++) {
        if (myItem.items[i].hidden !== true) {
            sOnOverCode = "";
            sDivIdForOpen = " id='divFO" + myItem.items[i].id + "'";

            if (myItem.items[i].calendar) {
                sOnClickCode = " onclick='return openRibbonCalendar(" + myItem.items[i].commName + ");' ";
            } else {
                sOnClickCode = " onclick='return OpenCommand(\"" + myItem.items[i].title + "\",\"" + myItem.items[i].commType + "\",\"" + myItem.items[i].commName + "\",\"" + myItem.items[i].commParam + "\");'";
            }

            if (myItem.items[i].items && myItem.items[i].items.length != 0) {
                sOnOverCode = " onmouseover='OpenSubMenu(\"" + myItem.items[i].id + "\", " + (pNivel + 1) + ");'";
                if (!myItem.items[i].commName) {
                    sOnClickCode = " onclick='return false;'";
                }
            } else {
                sOnOverCode = " onmouseover='hideMenus(" + (pNivel + 1) + ");'";
            }

            if (myItem.items[i].image) {
                sImage = "<img src='" + myUrlBase + "Imagens/Icons/" + myItem.items[i].image + ".16.png' height='16px' />";
            } else {
                sImage = "&nbsp;";
            }

            if (myItem.items[i].itemType == "SEP") {
                sMenuInText = "&nbsp;";
                sMenuInStyle = " style='background-image: url(" + myUrlBase + "Imagens/EtiComponents/Ribbon/SubMenuSeparator.png); background-position: left center; background-repeat: no-repeat; width: 100%;'";
                sClassOption = " class='divEtiRibbonTabItemText'"
            } else {
                sMenuInText = myItem.items[i].title;
                sMenuInStyle = "";
                sClassOption = " class='divEtiRibbonTabItemMenu'"
            }

            sClassExtend = "";
            if (!myItem.items[i].enabled) {
                sOnOverCode = "return false;";
                sOnClickCode = "return false;";
                sClassExtend = "Disabled";
                sClassOption = "";
            }

            sMenuText = "<table border='0' cellpadding='0' cellspacing='0'><tr><td class='divEtiRibbonTabItemMenuIcon'>" + sImage + "</td><td class='divEtiRibbonTabItemMenuText' " + sMenuInStyle + ">" + sMenuInText + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table>";

            sTab += "<tr><td class='divSubMenuRibbonTab" + sClassExtend + "'><a href='javascript:void(0);'" + sOnOverCode + sOnClickCode + "><div" + sDivIdForOpen + sClassOption + ">" + sMenuText + "</div></a></td></tr>";
        }
    }

    sTab += "</table>";

    divM.innerHTML = sTab;
    divM.style.visibility = 'visible';
    divM.focus();

    return false;
}

function getCortaAMeio(pText) {
    arrVals = pText.split(" ");
    if (arrVals.length == 1) {
        return arrVals[0];

    } else if (arrVals.length == 2) {
        return arrVals[0] + "<br>" + arrVals[1];

    } else {
        var posL = parseInt(pText.length / 2, 10);
        var posR = posL;
        var blnContinua = true;
        while (blnContinua) {
            if (pText.substring(posL, posL+1) == ' ') {
                return pText.substring(0, posL) + "<br>" + pText.substring(posL+1);
            }
            if (pText.substring(posR, posR+1) == ' ') {
                return pText.substring(0, posR) + "<br>" + pText.substring(posR+1);
            }
            posL--;
            posR++;
        }
    }
}

function ChangeRibDate(itemHash) {
    var dt = new Date($("#idDataRibbonChange").val());
    var newDate = dt.getFullYear() + '/' + getZeros((dt.getMonth() + 1), 2) + '/' + getZeros(dt.getDate(), 2);
    OpenCommand('', 'SLE-CRD', itemHash + '|' + newDate, '');
    Dialog.closeMessageBox();
}

function openRibbonCalendar(itemHash) {
    var sMessage = "<div id='idDataRibbonChange' style='padding: 10px; width: 120px; font-size: 14pt; border: 1px solid gray;' data-eti-type='date' data-eti-datepicker='0'></div>" +
        "<script>" +
            "ApplyEtiComponents();" + 
            " document.getElementById('idMessageBoxButton1').onclick = function() { ChangeRibDate(" + itemHash + "); };" +
        "</script>"

    Dialog.showMessageBox(500, 250, '', getMsgTranslated('Shell', 'Alterar Data'), sMessage, getMsgTranslated('Shell', 'Confirmar'), getMsgTranslated('Shell', 'Cancelar'), '');
    return false;
}

function toggleCheckButton(btnId, pGroup) {
    if (pGroup == '') {
        var ob = document.getElementById('divFO' + btnId);
        if (ob.className == "divEtiRibbonTabItem") {
            ob.className = "divEtiRibbonTabItemChecked";
        } else {
            ob.className = "divEtiRibbonTabItem";
        }
    } else {
        var strIdToCheck = 'divFO' + btnId;
        var ob = document.getElementById(strIdToCheck);
        if (ob.className == "divEtiRibbonTabItem") {
            ob.className = "divEtiRibbonTabItemChecked";

            if (myContextTabId != -1) {
                for (var i = 0; i < myLstRibbon.length; i++) {
                    if (myLstRibbon[i].id == myContextTabId) {
                        var pObj = findItemById(btnId, myLstRibbon[i].items);
                        setItemsChecked(myLstRibbon[i].items, pObj.commName, true);
                    }
                }
                openTab(myContextTabId);
            }
        }
    }
}

function GetTabRibbonGroup(ribElem) {
    var strRet = "<table border='0' cellpadding='1' cellspacing='0'><tr style='height: 70px;'>";
    var strMenu = "";
    var strDesc = "";
    var intPosition = 1;
    var blnTabOpen = false;
    var sLink = "";
    var sCommandA = "";
    var sCommandB = "";
    var sDivIdForOpen = "";
    var sClassButtons = "";
    var bButtonMenu = false;
    var strCommGroup = "";
    var strCommandExtra = "";

    for (var i = 0; i < ribElem.items.length; i++) {

        if (!ribElem.items[i].hidden) {
            strCommGroup = "";
            strCommandExtra = "";
            sDivIdForOpen = " id='divFO" + ribElem.items[i].id + "'";
            if (ribElem.items[i].group) {
                strCommGroup = ribElem.items[i].group;
            }
            if (ribElem.items[i].checked) {
                strCommandExtra = "toggleCheckButton(\"" + ribElem.items[i].id + "\", \"" + strCommGroup + "\"); ";
            }
            if (ribElem.items[i].calendar) {
                strCommandExtra = "openRibbonCalendar(" + ribElem.items[i].commName + "); ";
            }

            strMenu = "";
            bButtonMenu = false;

            var strCommParams = ""
            if (ribElem.items[i].commParam) {
                strCommParams = ribElem.items[i].commParam;
            }

            if (ribElem.items[i].items && ribElem.items[i].items.length != 0) {
                strMenu = "<img src='" + myUrlBase + "Imagens/EtiComponents/Ribbon/EtiRibbonCombo.png' />";
                sCommandA = "return OpenSubMenu(\"" + ribElem.items[i].id + "\", 1);";

                if (ribElem.items[i].commName != '') {
                    sCommandB = "return OpenCommand(\"" + ribElem.items[i].title + "\",\"" + ribElem.items[i].commType + "\",\"" + ribElem.items[i].commName + "\",\"" + strCommParams + "\");";
                    bButtonMenu = true;
                }
            } else {
                sCommandA = strCommandExtra + "return OpenCommand(\"" + ribElem.items[i].title + "\",\"" + ribElem.items[i].commType + "\",\"" + ribElem.items[i].commName + "\",\"" + strCommParams + "\");";
            }

            if (ribElem.items[i].itemType == "SIO" || ribElem.items[i].itemType == "PH" || ribElem.items[i].itemType == "TB" || ribElem.items[i].itemType == "SIT") {
                if (intPosition == 4) {
                    intPosition = 1;
                    blnTabOpen = false;
                    strRet += "</td>";
                }
                if (intPosition == 1) {
                    strRet += "<td valign='top' align='left' class='divEtiRibbonTabItemTd'>";
                    blnTabOpen = true;
                }
                intPosition++;
            } else {
                if (blnTabOpen) {
                    strRet += "</td>";
                }
                intPosition = 1;
                blnTabOpen = false;
            }

            sClassButtons = "divEtiRibbonTabItem";
            if (!ribElem.items[i].enabled) {
                sCommandA = "return false;";
                sCommandB = "return false;";
                sClassButtons = "divEtiRibbonTabDisabled";
            } else {
                if (ribElem.items[i].checked == 'on') {
                    sClassButtons = "divEtiRibbonTabItemChecked";
                }
            }

            if (!bButtonMenu) {
                if (ribElem.items[i].itemType == "SIO") {
                    strRet += "<a href='javascript:void(0);' title='" + ribElem.items[i].title + "' onclick='" + sCommandA + "'><div" + sDivIdForOpen + " class='" + sClassButtons + "' style='width: 20px; height: 22px;'><table height='100%'><tr><td><img src='" + myUrlBase + "Imagens/Icons/" + ribElem.items[i].image + ".16.png' height='16px' /></td></tr></table></div></a>";

                } else if (ribElem.items[i].itemType == "PH") {
                    strRet += "<div style='width: 20px; height: 22px;'>&nbsp;</div>";

                } else if (ribElem.items[i].itemType == "TB") {
                    strRet += "<div style='width: 50px; height: 22px;'><table height='100%'><tr><td><div class='divEtiRibbonTabItemText' id='idTextBlock" + ribElem.items[i].commName + "'>" + ribElem.items[i].title + "</div></td></tr></table></div>";

                } else if (ribElem.items[i].itemType == "SIT") {
                    strDesc = "<td>" + ribElem.items[i].title + "&nbsp;" + strMenu + "</td>";
                    if (ribElem.items[i].shrinked === true) {
                        strDesc = "";
                    }
                    strRet += "<a href='javascript:void(0);' title='" + ribElem.items[i].title + "' onclick='" + sCommandA + "'><div" + sDivIdForOpen + " class='" + sClassButtons + "' style='height: 22px; white-space: nowrap;'><table height='100%'><tr><td><img src='" + myUrlBase + "Imagens/Icons/" + ribElem.items[i].image + ".16.png' height='16px' /></td>" + strDesc + "</tr></table></div></a>";

                } else {
                    strRet += "<td class='divEtiRibbonTabItemTd'><a href='javascript:void(0);' onclick='" + sCommandA + "'><div" + sDivIdForOpen + " class='" + sClassButtons + "' style='height: 71px; white-space: nowrap;'><img src='" + myUrlBase + "Imagens/Icons/" + ribElem.items[i].image + ".32.png' height='32px' /><br/>" + getCortaAMeio(ribElem.items[i].title) + " " + strMenu + "</div></a></td>";

                }
            } else {
                if (ribElem.items[i].itemType == "SIT") {
                    strDesc = "<td>" + ribElem.items[i].title + "</td>";
                    if (ribElem.items[i].shrinked === true) {
                        strDesc = "";
                    }
                    strRet += "<table border='0' cellspacing=0 cellpadding=0><tr>" +
                                    "<td><a href='javascript:void(0);' onclick='" + sCommandB + "'><div class='" + sClassButtons + "' style='height: 22px; white-space: nowrap;'><table height='100%'><tr><td><img src='" + myUrlBase + "Imagens/Icons/" + ribElem.items[i].image + ".16.png' height='16px' /></td>" + strDesc + "</tr></table></div></a></td>" +
                                    "<td><a href='javascript:void(0);' onclick='" + sCommandA + "'><div" + sDivIdForOpen + " class='" + sClassButtons + "' style='height: 22px; white-space: nowrap;'><table height='100%'><tr><td>" + strMenu + "</td></tr></table></div></a></td>" +
                              "</tr></table>";

                } else {
                    strRet += "<td class='divEtiRibbonTabItemTd'>" +
                                    "<table border='0' cellspacing=0 cellpadding=0>" +
                                        "<tr><td><a href='javascript:void(0);' onclick='" + sCommandB + "'><div class='" + sClassButtons + "' style='height: 36px; white-space: nowrap;'><img src='" + myUrlBase + "Imagens/Icons/" + ribElem.items[i].image + ".32.png' height='32px' /></div></a></td></tr>" +
                                        "<tr><td><a href='javascript:void(0);' onclick='" + sCommandA + "'><div" + sDivIdForOpen + " class='" + sClassButtons + "' style='height: 34px; white-space: nowrap;'>" + getCortaAMeio(ribElem.items[i].title) + " " + strMenu + "</div></a></td></tr>" +
                                    "</table>" +
                                "</td>";
                }
            }
        }
    }

    if (blnTabOpen) {
        strRet += "</td>";
    }

    strRet += "</tr></table>";
    strRet += ribElem.title;
    return strRet;
}

function GetIconName(pIcon, pSize) {
    if (pIcon) {
        var ret = GetUrlBase() + 'Imagens/Icons/' + pIcon;
        if (pSize == 'LIT') {
            ret += '.32.png';
        } else {
            ret += '.16.png';
        }
        return ret;
    } else {
        return "";
    }
}

function GetIconSize(pSize) {
    if (pSize == 'LIT') {
        return 'LargeIconWithText';
    } else if (pSize == 'SIO') {
        return 'SmallIcon';
    } else {
        return 'SmallIconWithText';
    }
}

function GetIconText(pItemType, pTitle) {
    if (pItemType == 'LIT' || pItemType == 'SIT' || pItemType == 'TB') {
        return pTitle;
    } else {
        return '';
    }
}

function GetButtonType(item) {
    var bHasChilds = HasChilds(item);
    var bHasCommand = (item.commName != '');

    if (item.itemType == 'SEP') {
        return 'Separator';
    } else if (item.itemType == 'PH') {
        return 'PlaceHolder';
    } else if (item.calendar) {
        return 'Calendar';
    } else if (item.itemType == 'TB') {
        return 'TextBlock';
    } else if (item.checked) {
        if (item.group && item.group != '') {
            return 'RadioButton';
        } else {
            return 'ToggleButton';
        }
    } else if (bHasChilds && !bHasCommand) {
        return 'Menu';
    } else if (bHasChilds && bHasCommand) {
        return 'ButtonAndMenu';
    } else {
        return 'Button';
    }
}

function GetXmlRibbonItem(item) {
    var ret = '';
    var strType = GetButtonType(item);
    if (strType == 'Separator') {
        return '<Type>' + strType + '</Type>';
    } else {
        ret += '<Type>' + strType + '</Type>';
        ret += '<Text>' + GetIconText(item.itemType, item.title) + '</Text>';
        ret += '<IconName>' + GetIconName(item.image, item.itemType) + '</IconName>';
        ret += '<Size>' + GetIconSize(item.itemType) + '</Size>';
        ret += '<IsEnabled>' + (item.enabled) + '</IsEnabled>';
        if (item.checked) {
            if (item.checked == 'on') {
                ret += '<IsChecked>true</IsChecked>';
            }
            if (item.checked == 'off') {
                ret += '<IsChecked>false</IsChecked>';
            }
        }
        ret += '<SourceHash>' + item.commName + (item.commParam ? '|' + item.commParam : '') + '</SourceHash>';
        ret += GetXmlRibbonItems(item.items);
        return ret;
    }
}

function HasChilds(item) {
    if (item.items) {
        if (item.items.length > 0) {
            return true;
        }
    }
    return false;
}

function GetXmlRibbonItems(ribItems) {
    var ret = '<Items />';

    if (ribItems && ribItems.length > 0) {
        ret = '<Items>';
        for (var i = 0; i < ribItems.length; i++) {
            if (!ribItems[i].hidden) {
                ret += '<RibbonItem>' + GetXmlRibbonItem(ribItems[i]) + '</RibbonItem>';
            }
        }
        ret += '</Items>';
    }

    return ret;
}

function GetXmlRibbonGroups(ribItems) {
    var ret = "";
    if (ribItems) {
        for (var i = 0; i < ribItems.length; i++) {
            ret += '<RibbonGroup><Text>' + ribItems[i].title + '</Text>' + GetXmlRibbonItems(ribItems[i].items) + '</RibbonGroup>';
        }
    }
    return ret;
}

function GetXmlRibbon(rib) {
    return '<?xml version="1.0" encoding="utf-16"?>' +
            '<RibbonProfile xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">' +
                '<Text>' + rib.title + '</Text>' +
                '<Groups>' + GetXmlRibbonGroups(rib.items) + '</Groups>'+
            '</RibbonProfile>';
}

function openTab(pId) {
    document.getElementById('idMyShellBackstage').style.visibility = 'hidden';

    mySelectedTab = pId;

    // Actualiza a Ribbon
    var blnContinua = true;
    var myRibbonIndex = 0;
    while (blnContinua) {
        var sTabTab = "<table id='idTabVisibleTab' border='0' cellpadding='1' cellspacing='0'><tr>";

        for (var i = 0; i < myLstRibbon.length; i++) {
            if (myLstRibbon[i].id == pId) {
                myRibbonIndex = i;
                if (!myLstRibbon[i].admin && !myLstRibbon[i].context) {
                    mySelectedTabRib = pId;
                }

                for (var j = 0; j < myLstRibbon[i].items.length; j++) {

                    if (j != 0) {
                        sTabTab += "<td style='width: 6px; text-align: center;'><img src='" + myUrlBase + "Imagens/EtiComponents/Ribbon/Separator.png'></td>";
                    }
                    sTabTab += "<td class='divEtiRibbonTabGroup'>" + GetTabRibbonGroup(myLstRibbon[i].items[j]) + "</td>";

                }

                if (pId == myContextTabId) {
                    if (myIsInInterop) {
                        window.external.RefreshRibbonProfile(myLstRibbon[i].silverlight, GetXmlRibbon(myLstRibbon[i]));
                    }
                }
            }
        }

        sTabTab += "</tr></table>";
        document.getElementById('divEtiRibbonBot').innerHTML = sTabTab;

        blnContinua = false;
        if (!myIsInInterop) {
            if ($('#idTabVisibleTab').width() > myShellWidth) {
                for (var j = myLstRibbon[myRibbonIndex].items.length - 1; j >= 0 ; j--) {
                    for (var k = 0; k < myLstRibbon[myRibbonIndex].items[j].items.length; k++) {
                        if (myLstRibbon[myRibbonIndex].items[j].items[k].itemType == 'SIT') {
                            if (!(myLstRibbon[myRibbonIndex].items[j].items[k].shrinked === true)) {
                                myLstRibbon[myRibbonIndex].items[j].items[k].shrinked = true;
                                blnContinua = true;
                            }
                        }
                    }
                    if (blnContinua) {
                        break;
                    }
                }
            }
        }
    }

    // Select do TabRibbon
    for (var i = 0; i < myLstRibbon.length; i++) {
        if (!myLstRibbon[i].admin) {
            if (myLstRibbon[i].id == mySelectedTab) {
                document.getElementById('tabRibbon' + myLstRibbon[i].id).className = 'divEtiRibbonTabSel';
                document.getElementById('tabRibbon' + myLstRibbon[i].id).style.backgroundColor = '#' + myRibColorTabSelBack;
                $('#' + 'tabRibbon' + myLstRibbon[i].id + ' a').css('color', '#' + myRibColorTabSelTexto);
            } else {
                document.getElementById('tabRibbon' + myLstRibbon[i].id).className = 'divEtiRibbonTab';
                document.getElementById('tabRibbon' + myLstRibbon[i].id).style.backgroundColor = '';
                $('#' + 'tabRibbon' + myLstRibbon[i].id + ' a').css('color', '#' + myRibColorTabTexto);
            }
        }
    }
}

function initAdminContainer(pPage) {
    var blnWaitingBox = true;
    if (myIsInInterop) {
        if (pPage.indexOf("EditAssemblies.html") != -1) {
            blnWaitingBox = false;
        }
    }
    if (blnWaitingBox) {
        Dialog.showWaitingBox(10);
    }
    setTimeout(function () {
        if (pPage.indexOf("?") == -1) {
            pPage += "?vers=" + MyShell().Environment.Config.EtiVersion
        } else {
            pPage += "&vers=" + MyShell().Environment.Config.EtiVersion
        }
        document.getElementById("idAdmIFrameKey").src = pPage;
    });
}

function iFrameBSInteropLoaded(pFirstCommand){
    iFrameLoaded(false, '', '');
    if (!myBackstageInteropInitiated) {
        SendBackstageCommandEfec(pFirstCommand);
        myBackstageInteropInitiated = true;
    }
}

function initBackstageInterop(pCommName) {
    document.getElementById('idMyShellBackstage').style.top = '0px';
    if (document.getElementById('idMyShellBackstage').innerHTML == '') {
        Dialog.showWaitingBox(10);
        setTimeout(function () {
            document.getElementById('idMyShellBackstage').innerHTML = "<div style='height: 100%; width: 100%;'><iframe id='idAdmIFrameKey' style='height: 100%; width: 100%;' frameborder='0' src='" + myUrlBase + "Client/Shell/Backstage/SystemInfo/EmptySystemInfo.html' onload='iFrameBSInteropLoaded(\"" + pCommName + "\");'></iframe></div>";
        });
    }
    document.getElementById('idMyShellBackstage').style.visibility = 'visible';
}

function selectAdminTab(optId) {
    if (!myIsInInterop) {
        for (var i = 1; i <= myBackStageNumOptions; i++) {
            document.getElementById("idShellBSOption" + i).className = (optId == i ? 'divShellBackstageSel' : 'divShellBackstageUnsel');
        }
    }

    if (optId == 1) { initAdminContainer(myUrlBase + "Client/Shell/Backstage/SystemInfo/SystemInfo.html"); }
    else if (optId == 2) { initAdminContainer(myUrlBase + "Client/Shell/OpenEmpresa.html?bs=1"); }
    else if (optId == 3) { initAdminContainer(myUrlBase + "Client/Shell/Backstage/EditRibbon/EditRibbon.html"); }
    else if (optId == 4) { initAdminContainer(myUrlBase + "Client/Shell/Backstage/Assemblies/EditAssemblies.html"); }
    else if (optId == 5) { initAdminContainer(myUrlBase + "Client/Shell/Backstage/WebModules/EditWebModules.html"); }
    else if (optId == 6) { initAdminContainer(myUrlBase + "Client/Shell/Backstage/Preferences/EditPreferences.html"); }
    else if (optId == 7) { initAdminContainer(myUrlBase + "Client/Shell/Backstage/Eportals/ConfigEportals.html"); }
    else if (optId == 8) { OpenCommand("Alterar Chave de Acesso", "JS", "#CHANGEUSERPASS", ""); }
    else if (optId == 9) { OpenCommand("Terminar Sessão", "SL", "Shell.Logout.Execute()", ""); }

    return false;
}

function trySelectAdminTab(optId) {
    document.getElementById("idAdmIFrameKey").contentWindow.CloseWindow(function () { selectAdminTab(optId) });
}

function getAdminTab(optId, classSufix, optName) {
    return "<tr><td id='idShellBSOption" + optId + "' class='divShellBackstage" + classSufix + "'><a href='javascript: void(0)' onclick='return trySelectAdminTab(" + optId + ");'><table style='width: 100%; height: 40px;'><tr><td align=center>" + optName + "</td></tr></table></a></td></tr>";
}

function GetCardStyle(pName) {
    for (var i = 0; i < document.styleSheets[0].cssRules.length; i++) {
        if (pName == document.styleSheets[0].cssRules[i].selectorText.toLowerCase()) {
            return i;
        }
    }
    return 0;
}

function SetUserColors() {
    document.styleSheets[0].cssRules[GetCardStyle(".divshellbackstagesel")].style.backgroundColor = '#' + myRibColorTabBack;
    document.styleSheets[0].cssRules[GetCardStyle(".divshellbackstagesel a")].style.color = '#' + myRibColorTabTexto;
    document.styleSheets[0].cssRules[GetCardStyle(".divshellbackstageunsel:hover")].style.backgroundColor = '#' + myRibColorTabBack;
    document.styleSheets[0].cssRules[GetCardStyle(".divshellbackstageunsel a:hover")].style.color = '#' + myRibColorTabTexto;
}

function openAdminTab() {
    Dialog.showWaitingBox();
    if (document.getElementById('idAdmIFrameKey')) {
        Dialog.closeWaitingBox();
    } else {
        SetUserColors();

        var sMenu = "<table border='0' cellpadding=0 cellspacing=0 width='100%'>";
        sMenu += getAdminTab(1, "Sel", getMsgTranslated('Shell', 'Informação'));
        sMenu += getAdminTab(2, "Unsel", getMsgTranslated('Shell', 'Abrir Empresa'));
        sMenu += getAdminTab(3, "Unsel", getMsgTranslated('Shell', 'Editar Ribbon'));
        sMenu += getAdminTab(4, "Unsel", getMsgTranslated('Shell', 'Assemblies'));
        sMenu += getAdminTab(5, "Unsel", getMsgTranslated('Shell', 'Módulos Web'));
        sMenu += getAdminTab(6, "Unsel", getMsgTranslated('Shell', 'Preferências'));
        sMenu += getAdminTab(7, "Unsel", getMsgTranslated('Shell', 'Config. EPortals'));
        sMenu += getAdminTab(8, "Unsel", getMsgTranslated('Shell', 'Alterar Chave de Acesso'));
        sMenu += getAdminTab(9, "Unsel", getMsgTranslated('Shell', 'Terminar Sessão'));
        sMenu += "</table>";

        var strPage = myUrlBase + "Client/Shell/Backstage/SystemInfo/SystemInfo.html";
        var sTabContainerBS = "<div style='height: 100%; width: 100%;'><iframe id='idAdmIFrameKey' style='height: 100%; width: 100%;' frameborder='0' src='" + strPage + "' onload='iFrameLoaded(false, \"\", \"\");'></iframe></div>";
        document.getElementById('idMyShellBackstage').innerHTML = "<div class='divShellBackstageMenu' style='background-color: #" + myRibColorTabSelBack + "';>" + sMenu + "</div><div style='width: calc(100% - 200px); height: calc(100% - 23px); float: left;'>" + sTabContainerBS + "</div><div style='clear: both;'></div>";
    }

    document.getElementById('idMyShellBackstage').style.visibility = 'visible';
}

function setTabClick(pId, pAdmin) {
    hideMenus(1);
    if (pAdmin) {
        openAdminTab(pId);
    } else {
        openTab(pId);
    }
    return false;
}

function atribuiIdsUnicos(pRibbon) {
    for (var i = 0; i < pRibbon.length; i++) {
        if (!pRibbon[i].id) {
            pRibbon[i].id = myUniqueId;
            myUniqueId += 1;
        }
        if (pRibbon[i].items && pRibbon[i].items.length > 0) {
            atribuiIdsUnicos(pRibbon[i].items);
        }
    }
}

function setItemsText(items, pHashKey, pTitle) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].commName) {
            if (items[i].commName == pHashKey) {
                items[i].title = pTitle;
            }
        }

        if (items[i].items && items[i].items.length > 0) {
            setItemsText(items[i].items, pHashKey, pTitle);
        }
    }
}

function setItemsEnabled(items, pHashKey, pState) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].commName) {
            if (items[i].commName == pHashKey) {
                items[i].enabled = pState;
            }
        }

        if (items[i].items && items[i].items.length > 0) {
            setItemsEnabled(items[i].items, pHashKey, pState);
        }
    }
}

function getIsItemEnabled(items, pHashKey) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].commName) {
            if (items[i].commName == pHashKey) {
                return items[i].enabled;
            }
        }

        if (items[i].items && items[i].items.length > 0) {
            var ret = getIsItemEnabled(items[i].items, pHashKey);
            if (ret != undefined) {
                return ret;
            }
        }
    }
}

function setGroupUnchecked(items, pHashKey, pGroup) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].group) {
            if (items[i].group == pGroup) {
                if (items[i].commName != pHashKey) {
                    items[i].checked = 'off';
                }
            }
        }
    }
}

function setItemsChecked(items, pHashKey, pState) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].commName) {
            if (items[i].commName == pHashKey) {
                var sNewState = (pState ? 'on' : 'off');
                items[i].checked = sNewState;
                if (items[i].group && sNewState == 'on') {
                    setGroupUnchecked(items, pHashKey, items[i].group);
                }
            }
        }

        if (items[i].items && items[i].items.length > 0) {
            setItemsChecked(items[i].items, pHashKey, pState);
        }
    }
}

function showHideRibbon(bVisible) {
    if (bVisible) {
        $("#divEtiRibbonBot").css("display", "block");
        $("#idButtonRibHide").css("display", "block");
        $("#idButtonRibShow").css("display", "none");
        $("#idTrRibbonBar").css("height", "115px");
    } else {
        $("#divEtiRibbonBot").css("display", "none");
        $("#idButtonRibHide").css("display", "none");
        $("#idButtonRibShow").css("display", "block");
        $("#idTrRibbonBar").css("height", "26px");
    }
}

!function ($) {

    // ************************************
    // COMPONENTE RIBBON
    // ************************************

    var EtiRibbon = function (element, pIsInInterop, pLang, lstRibbon) {
	    this.element = $(element);
    	this.elementIn = element;

    	var userColors = MyShell().Environment.Config.UserInfo.UserColors;
    	myUseMultipleWindows = MyShell().Environment.Config.UserInfo.UseMultipleWindows;
    	myRibColorTabTexto = userColors.TabTexto;
    	myRibColorTabBack = userColors.TabBack;
    	myRibColorTabSelTexto = userColors.TabSelTexto;
    	myRibColorTabSelBack = userColors.TabSelBack;

    	myActiveLang = pLang;
    	mySilverLightTabKey = "";
    	myBackStageLoadedCtrls = "";
    	myKeyToCloseEfective = "";
    	myLstWebTabs = [];
    	mySelectedKey = -1;
    	mySelectedTab = "";
    	mySelectedTabRib = "";
    	myContextTabId = -1;
    	myUniqueId = -1;
    	myUniqueTabId = 0;
    	myLimitTabsWidth = 0;
    	myShellWidth = $(window).width();
    	myVisibleTabLeft = -1;
    	myVisibleTabRight = -1;

    	myIsInInterop = pIsInInterop;
    	myLstRibbon = lstRibbon;

    	var sTabMenu = "<table border='0' cellspacing='0' height='100%' width='100%' style='background-color: #" + userColors.TabBack + ";'><tr>";
    	var className = "";
    	var sIdToOpen = "";
    	for (var i = 0; i < lstRibbon.length; i++) {
    	    className = "divEtiRibbonTab";
    	    if (lstRibbon[i].admin) {
    	        className = "divEtiRibbonTabAdm' style='background: linear-gradient(#" + userColors.AdminBack + ",#" + userColors.AdminBack + ");";
            } else {
    	        if (sIdToOpen == "") {
    	            sIdToOpen = lstRibbon[i].id;
    	        }
    	    }

    	    if (lstRibbon[i].context) {
    	        myContextTabId = lstRibbon[i].id;
    	        sTabMenu += "<td nowrap id='tabRibbon" + lstRibbon[i].id + "' class='" + className + "'></td>";
    	    } else {
    	        sTabMenu += "<td nowrap id='tabRibbon" + lstRibbon[i].id + "' class='" + className + "'><a href='javascript:void(0);' onclick='return setTabClick(\"" + lstRibbon[i].id + "\", " + lstRibbon[i].admin + ");'>&nbsp;&nbsp;&nbsp;" + lstRibbon[i].title + "&nbsp;&nbsp;&nbsp;</a></td>";
            }
    	}

    	sTabMenu += "<td style='width: 90%; text-align: right;'>" +
                        "<a id='idButtonRibHide' href='javascript:void(0);' onclick='showHideRibbon(false);'><img src='" + myUrlBase + "Imagens/EtiComponents/Ribbon/TopFundoUp.png' style='border:0px;' /></a>" +
    	                "<a id='idButtonRibShow' style='display: none;' href='javascript:void(0);' onclick='showHideRibbon(true);'><img src='" + myUrlBase + "Imagens/EtiComponents/Ribbon/TopFundoDown.png' style='border:0px;' /></a>" +
                    "</td>";
    	sTabMenu += "</tr></table>";
    	this.elementIn.innerHTML = "<div class='divEtiRibbonTop'>" + sTabMenu + "</div><div class='divEtiRibbonBot' id='divEtiRibbonBot' style='background-color: #" + userColors.TabSelBack + ";'></div>";

    	if (sIdToOpen != "") {
    	    openTab(sIdToOpen);
    	}
    	setupMainPage();
    };

    $.fn.etiShowHideRibbon = function (pValue) {
        showHideRibbon(pValue);
    }

    $.fn.etiMoveWebTabs = function (pDirection) {
        if (pDirection == -1) {
            if (myVisibleTabLeft > 0) {
                ensureTabVisible(myVisibleTabLeft - 1);
            }
        } else {
            var tRowTabs = document.getElementById("mainShellWebTabs");
            var tRowTabsCells = tRowTabs.getElementsByTagName('td');
            if ((myVisibleTabRight + 1) < (tRowTabsCells.length - 2)) {
                ensureTabVisible(myVisibleTabRight + 1);
            }
        }
    }

    $.fn.etiRefreshRibbonItems = function () {
        if (myLimitTabsWidth != 0) {
            var tLimitTabsWidth = $('#idTrTabsBar').width() - 150;
            if (Math.abs(tLimitTabsWidth - myLimitTabsWidth) >= 30) {
                ensureTabVisible(0);
            }
        }

        if (myLstRibbon) {
            var tShellWidth = $(window).width();
            if (Math.abs(tShellWidth - myShellWidth) >= 30) {
                myShellWidth = tShellWidth;
                for (var i = 0; i < myLstRibbon.length ; i++) {
                    for (var j = myLstRibbon[i].items.length - 1; j >= 0 ; j--) {
                        for (var k = 0; k < myLstRibbon[i].items[j].items.length; k++) {
                            if (myLstRibbon[i].items[j].items[k].itemType == 'SIT') {
                                if (myLstRibbon[i].items[j].items[k].shrinked === true) {
                                    myLstRibbon[i].items[j].items[k].shrinked = false;
                                }
                            }
                        }
                    }
                }
                if (document.getElementById('idMyShellBackstage').style.visibility != 'visible') {
                    openTab(mySelectedTab);
                }
            }
        }
    }

    $.fn.etiRibbonUpdateContextualTab = function (pRibbon, pHeader, pCommand, pHashCode, pKey, pSilverlight, pFncSendCommand, pFncTryToClose) {
        var sCommand = pCommand;
        myUniqueId = 10000;
        atribuiIdsUnicos(pRibbon);

        for (var i = 0; i < myLstRibbon.length; i++) {
            if (myLstRibbon[i].id == myContextTabId) {
                myLstRibbon[i].items = pRibbon;
                if (pHeader != '') {
                    myLstRibbon[i].title = pHeader;
                }
                myLstRibbon[i].silverlight = pSilverlight;
            }
        }

        var blnActivate = false;
        var blnNewView = true;
        var blnIsThis = false;
        var strKeyOpen = "";
        for (var i = 0; i < myLstWebTabs.length; i++) {

            if (pSilverlight) {
                blnIsThis = (myLstWebTabs[i].command == sCommand && (myLstWebTabs[i].HashCode == pHashCode || myLstWebTabs[i].HashCode == "-"));
            } else {
                blnIsThis = (myLstWebTabs[i].key == pKey);
            }
            if (blnIsThis) {
                blnNewView = false;
                myLstWebTabs[i].ribbon = pRibbon;
                myLstWebTabs[i].HashCode = pHashCode;
                if (myLstWebTabs[i].key != mySelectedKey) {
                    strKeyOpen = myLstWebTabs[i].key;
                    blnActivate = true;
                }
                if (pHeader != '') {
                    if (myLstWebTabs[i].title != pHeader) {
                        refreshWebTab(myLstWebTabs[i].key, pHeader);
                    }
                }
                if (pFncSendCommand) {
                    myLstWebTabs[i].FncSendCommand = pFncSendCommand;
                }
                if (pFncTryToClose) {
                    myLstWebTabs[i].FncTryToClose = pFncTryToClose;
                }
            }
        }

        if (blnNewView) {
            addWebTab(false, sCommand, pHeader, true, pRibbon, pHashCode, '', false);
        } else if (blnActivate) {
            activateWebTab(strKeyOpen, false);
        }

        openTab(myContextTabId);
    };

    $.fn.etiSendCheckedUpdate = function (pHashKey, pState) {
        if (myContextTabId != -1) {
            for (var i = 0; i < myLstRibbon.length; i++) {
                if (myLstRibbon[i].id == myContextTabId) {
                    setItemsChecked(myLstRibbon[i].items, pHashKey, pState);
                }
            }
            if (myIsInInterop) {
                window.external.SendCheckedUpdate(pHashKey, pState);
            } else {
                openTab(myContextTabId);
            }
        }
    };

    $.fn.etiSendTextUpdate = function (pHashKey, pValor) {
        if (myContextTabId != -1) {
            for (var i = 0; i < myLstRibbon.length; i++) {
                if (myLstRibbon[i].id == myContextTabId) {
                    setItemsText(myLstRibbon[i].items, pHashKey, pValor);
                }
            }
            if (myIsInInterop) {
                window.external.SendTextUpdate(pHashKey, pValor);
            } else {
                document.getElementById('idTextBlock' + pHashKey).innerHTML = pValor;
            }
        }
    };

    $.fn.etiSendEnabledUpdate = function (pHashKey, pState) {
        if (myContextTabId != -1) {
            for (var i = 0; i < myLstRibbon.length; i++) {
                if (myLstRibbon[i].id == myContextTabId) {
                    setItemsEnabled(myLstRibbon[i].items, pHashKey, pState);
                }
            }
            if (myIsInInterop) {
                window.external.SendEnabledUpdate(pHashKey, pState);
            } else {
                openTab(myContextTabId);
            }
        }
    };

    $.fn.etiIsButtonEnabled = function (pHashKey, pFrameId) {
        for (var i = 0; i < myLstWebTabs.length; i++) {
            if (myLstWebTabs[i].key == pFrameId) {
                return getIsItemEnabled(myLstWebTabs[i].ribbon, pHashKey);
            }
        }
        return true;
    };

    $.fn.etiSetRibbonEnabled = function (pEnabled, pInterop) {
        if (!myDisabledRibbonDiv) {
            myDisabledRibbonDiv = document.createElement('div');
            myDisabledRibbonDiv.className = 'divEtiRibbonDisabled';
            if (pInterop) {
                myDisabledRibbonDiv.style.height = '35px';
            } else {
                myDisabledRibbonDiv.style.height = '145px';
            }
            document.body.appendChild(myDisabledRibbonDiv);
        }
        if (pEnabled) {
            myDisabledRibbonDiv.style.display = 'none';
        } else {
            myDisabledRibbonDiv.style.display = 'block';
        }
    };

    $.fn.etiCloseWebTab = function () {
        closeWebTab(myKeyToCloseEfective);
        myKeyToCloseEfective = "";
    };

    $.fn.etiCloseWebTabByCommand = function (pCommand) {
        for (var i = myLstWebTabs.length - 1; i >= 0 ; i--) {
            if (myLstWebTabs[i].command == pCommand) {
                tryToCloseWebTab(myLstWebTabs[i].key);
            }
        }
    };

    $.fn.tryToCloseAllWebTabs = function () {
        var tRowTabs = document.getElementById("mainShellWebTabs");
        var tRowTabsCells = tRowTabs.getElementsByTagName('td');
        while (tRowTabsCells.length > 2) {
            tRowTabs.deleteCell(0);
        }

        var tRowContents = document.getElementById("mainShellWebContents");
        var tRowContentsCells = tRowContents.getElementsByTagName('td');
        while (tRowContentsCells.length > 0) {
            tRowContents.deleteCell(0);
        }

        myLstWebTabs.splice(0, myLstWebTabs.length);

        return true;
    };

    $.fn.GetTitle = function (idKey) {
        for (var i = 0; i < myLstWebTabs.length; i++) {
            if (myLstWebTabs[i].key == idKey) {
                return myLstWebTabs[i].title;
            }
        }
        return '';
    };

    $.fn.etiFindCommand = function (pCommand) {
        var myCommand = pCommand;
        var myHashCode = "";
        if (pCommand.indexOf("§") != -1) {
            var arr = pCommand.split("§");
            myCommand = arr[0];
            myHashCode = arr[1];
        }

        if (myIsInInterop) {
            window.external.ExecDesktopCommand("ShowWebHost", "");
        }
        for (var i = 0; i < myLstWebTabs.length; i++) {
            if (myLstWebTabs[i].command == myCommand && myLstWebTabs[i].HashCode == myHashCode) {
                activateWebTab(myLstWebTabs[i].key, false);
            }
        }
    };

    $.fn.etiSendCommand = function (pTitle, pCommType, pCommName, pCommParam) {
        OpenCommand(pTitle, pCommType, pCommName, pCommParam);
    };

    $.fn.etiSendCommand4AllSl = function (pCommName) {
        SendCommand4AllSl(pCommName);
    };

    $.fn.etiRibbon = function (pIsInInterop, pLang, lstRibbon) {
        return this.each(function () {
		    var $this = $(this)
		    $this.data('etiRibbon', (data = new EtiRibbon(this, pIsInInterop, pLang, lstRibbon)));
        });
	};
}(window.jQuery);
