//MAO 29/07/2014 Funções para suporte de Componente Eticadata (DashBoard)

// ************************************
// FUNCOES GENERICAS
// ************************************
var hostBase = GetUrlBase();
var lstWidgets = [];
var myIntervals = 0;
var lstIntervals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var numRows = 0;
var intMyHeight = 0;
var intMyItemUp = 0;//Item que está maximizado
var intMyLastItemUp = -1;//Ultimo item que maximizado

function moveToBig(pIndex) {
    intMyItemUp = pIndex;
    intMyLastItemUp = pIndex;
    for (var i = 0; i < lstWidgets.length ; i++) {
        if (lstWidgets[i].Index != intMyItemUp) {
            $('#idTdDivWidget' + lstWidgets[i].Index).css("display", "none");
        }
    }
    $('#idLinkDown' + pIndex).css("display", "");
    $('#idLinkUp' + pIndex).css("display", "none");
    resizeDashBoard(true);
}

function makeFromBig(pIndex) {
    intMyItemUp = 0;
    for (var i = 0; i < lstWidgets.length ; i++) {
        $('#idTdDivWidget' + lstWidgets[i].Index).css("display", "");
    }
    $('#idLinkDown' + pIndex).css("display", "none");
    $('#idLinkUp' + pIndex).css("display", "");
    resizeDashBoard(true);
}

function refreshWidget(pIndex) {
    $('#idLinkRefresh' + pIndex).css("display", "none");
    for (var i = 0; i < lstWidgets.length ; i++) {
        if (lstWidgets[i].Index == pIndex) {
            if (lstWidgets[i].IsGraph) {
                WidgetRefresh(pIndex);
            } else {
                if (typeof document.getElementById('idContWidget' + pIndex).contentWindow.WidgetRefresh == 'function') {
                    document.getElementById('idContWidget' + pIndex).contentWindow.WidgetRefresh();
                } else {
                    document.getElementById('idContWidget' + pIndex).src = lstWidgets[i].Url;
                }
            }
        }
    }
    setTimeout(function () {
        $('#idLinkRefresh' + pIndex).css("display", "");
    }, 2000);
}

function GetIterator(l, c, items) {
    for (var i = 0; i < items.length; i++) {
        if (l >= items[i].row && l <= items[i].row + items[i].rowSpan - 1) {
            if (c >= items[i].col && c <= items[i].col + items[i].colSpan - 1) {
                if (l == items[i].row && c == items[i].col) {
                    return { Empty: false, Spaned: false, Url: items[i].url, Nome: items[i].name, ColSpan: items[i].colSpan, RowSpan: items[i].rowSpan, Refresh: items[i].Refresh };
                } else {
                    return { Empty: false, Spaned: true };
                }
            }
        }
    }
    return { Empty: true };
}

function resizeDashBoard(blnResizeWidgets) {
    var myHeight = 0;
    if (intMyItemUp == 0) {
        if (intMyLastItemUp != -1) {
            if (blnResizeWidgets) {
                for (var i = 0; i < lstWidgets.length ; i++) {
                    if (lstWidgets[i].Index == intMyLastItemUp) {
                        if (lstWidgets[i].IsGraph) {
                            resizeWidget(lstWidgets[i].Index, true);
                        }
                    }
                }
            }
            intMyLastItemUp = -1;
        }

        for (var i = 0; i < lstWidgets.length ; i++) {
            if (numRows == 3) {
                if (lstWidgets[i].RowSpan == 1) {
                    myHeight = parseInt(intMyHeight * (1 / 3), 10) - 11;
                } else if (lstWidgets[i].RowSpan == 2) {
                    myHeight = parseInt(intMyHeight * (2 / 3), 10) - 7;
                } else {
                    myHeight = intMyHeight;
                }
            } else if (numRows == 2) {
                if (lstWidgets[i].RowSpan == 1) {
                    myHeight = parseInt(intMyHeight / 2, 10) - 7;
                } else {
                    myHeight = intMyHeight;
                }
            } else {
                myHeight = intMyHeight;
            }
            document.getElementById("idDivWidget" + lstWidgets[i].Index).style.height = myHeight + 'px';
            if (lstWidgets[i].Url != '') {
                var wd = document.getElementById("idContWidget" + lstWidgets[i].Index);
                if (wd) {
                    wd.style.height = (myHeight - 40) + 'px';
                }
            }
        }
        if (blnResizeWidgets) {
            for (var i = 0; i < lstWidgets.length ; i++) {
                if (lstWidgets[i].IsGraph) {
                    resizeWidget(lstWidgets[i].Index, false);
                }
            }
        }

    } else {
        var myHeight = intMyHeight - 30;
        document.getElementById("idDivWidget" + intMyItemUp).style.height = myHeight + 'px';
        var wd = document.getElementById("idContWidget" + intMyItemUp);
        if (wd) {
            wd.style.height = (myHeight - 40) + 'px';
        }
        if (blnResizeWidgets) {
            for (var i = 0; i < lstWidgets.length ; i++) {
                if (lstWidgets[i].Index == intMyItemUp) {
                    if (lstWidgets[i].IsGraph) {
                        resizeWidget(lstWidgets[i].Index, false);
                    }
                }
            }
        }
    }
}

function clearIntervals() {
    for (var i = 0; i < myIntervals; i++) {
        clearInterval(lstIntervals[i]);
    }
    myIntervals = 0;
}

!function ($) {

    // ************************************
    // COMPONENTE DashBoard
    // ************************************

    var EtiDashBoard = function (element, lstOpcoes) {
        this.element = $(element);
        this.elementIn = element;

        lstWidgets = [];
        clearIntervals();

        var sUrl = "";
        var strDoc = "";
        var sCommand = "";
        var row = 0, col = 0;
        var cell = "";
        var it = {};
        var numWidget = 0;
        numRows = lstOpcoes.numRows;
        var strExtraButtons = "";
        var intExtraButtons = 0;

        var sTabela = "<table border='0' cellspacing='12' cellpadding='3' style='width: 100%; height: 100%; table-layout: fixed;'>";
        for (row = 1; row <= lstOpcoes.numRows; row++) {
            sTabela += "<tr id='idTrWidgets" + row + "'>";
            for (col = 1; col <= lstOpcoes.numCols; col++) {

                strExtraButtons = "";
                intExtraButtons = 0;
                it = GetIterator(row, col, lstOpcoes.items);
                if (it.Empty) {
                    numWidget++;
                    cell = "<td id='idTdDivWidget" + numWidget + "'><div id='idDivWidget" + numWidget + "'>&nbsp;</div></td>";
                    lstWidgets.push({ Index: numWidget, RowSpan: 1, Url: '', IsGraph: false });
                } else {
                    if (it.Spaned) {
                        cell = "";
                    } else {
                        sUrl = it.Url;
                        if (sUrl.substring(0, 1) == "#") {
                            sUrl = sUrl.replace("#/", hostBase);
                        }

                        numWidget++;
                        var blnIsGraph = false;
                        if (it.Url.toLowerCase().substring(0, 27) == "#/widgets/graphqueries.html") {
                            strExtraButtons = "<a id='idLinkBut1" + numWidget + "' style='display: none;' href='javascript: void(0);' onclick='setExtraButton(" + numWidget + ",1);'><img src='" + hostBase + "Imagens/Icons/Consultas/Tabela.24.png' style='border: 0px; margin-right: 5px;'></a>" +
                                              "<a id='idLinkBut2" + numWidget + "' style='display: none;' href='javascript: void(0);' onclick='setExtraButton(" + numWidget + ",2);'><img src='" + hostBase + "Imagens/Icons/Consultas/GraficoColunas.24.png' style='border: 0px; margin-right: 5px;'></a>" +
                                              "<a id='idLinkBut3" + numWidget + "' style='display: none;' href='javascript: void(0);' onclick='setExtraButton(" + numWidget + ",3);'><img src='" + hostBase + "Imagens/Icons/Geral/Documentos/Find.24.png' style='border: 0px; margin-right: 5px;'></a>";
                            intExtraButtons = 2;
                            blnIsGraph = true;
                        }

                        if (blnIsGraph) {
                            strDoc = "<div id='idContWidget" + numWidget + "' style='overflow: auto;'>" + getHtmlQueryGraph(numWidget, row, col) + "</div>";
                        } else {
                            strDoc = "<iframe id='idContWidget" + numWidget + "' src='" + sUrl + "' style='width: 100%; height: 100%;' frameborder='0'></iframe>";
                        }

                        lstWidgets.push({ Index: numWidget, RowSpan: it.RowSpan, Url: sUrl, IsGraph: blnIsGraph });
                        if (it.Refresh) {
                            lstIntervals[myIntervals] = setInterval("refreshWidget(" + numWidget + ");", (it.Refresh * 60000));
                            myIntervals++;
                        }
                        sCommand = strExtraButtons +
                                   "<a id='idLinkRefresh" + numWidget + "' href='javascript: void(0);' onclick='refreshWidget(" + numWidget + ");'><img src='" + hostBase + "Imagens/Icons/Geral/Varios/Reciclagem.Vazio.24.png' style='border: 0px; margin-right: 5px;'></a>" +
                                   "<a id='idLinkDown" + numWidget + "' style='display: none;' href='javascript: void(0);' onclick='makeFromBig(" + numWidget + ");'><img src='" + hostBase + "Imagens/Icons/Geral/Navegador/ParaBaixo.24.png' style='border: 0px;'></a>" +
                                   "<a id='idLinkUp" + numWidget + "' href='javascript: void(0);' onclick='moveToBig(" + numWidget + ");'><img src='" + hostBase + "Imagens/Icons/Geral/Navegador/ParaCima.24.png' style='border: 0px;'></a>"
                        cell = "<td id='idTdDivWidget" + numWidget + "' width='" + parseInt(it.ColSpan * 100 / lstOpcoes.numCols, 10) + "%' colspan=" + it.ColSpan + " rowspan=" + it.RowSpan + ">" +
                            "<div class='etiWidget' id='idDivWidget" + numWidget + "'>" +
                                "<table cellpadding='0' cellspacing='0' border='0' width='100%' height='100%' id='idTableWidget" + numWidget + "'>" +
                                    "<tr style='height: 30px;' class='etiWidgetTop'><td>" +
                                        "<div class='etiWidgetTopA' style='width: calc(100% - " + ((intExtraButtons + 2) * 30 + 10) + "px);'>" + it.Nome + "</div>" +
                                        "<div class='etiWidgetTopB'>" + sCommand + "</div>" +
                                        "<div style='clear: both;'></div>" +
                                    "</td></tr>" +
                                    "<tr><td style='border-top: 1px solid #CCCCCC;'>" +
                                        strDoc +
                                    "</td></tr>" +
                                "</table>" +
                            "</div>" +
                        "</td>";
                    }
                }

                sTabela += cell;
            }
            sTabela += "</tr>";
        }
        sTabela += "</table>";

        this.elementIn.innerHTML = sTabela;

        for (var i = 0; i < lstWidgets.length ; i++) {
            if (lstWidgets[i].IsGraph) {
                initWidget(lstWidgets[i].Index, lstWidgets[i].Url);
            }
        }
    };

    $.fn.etiResizeDashBoard = function (intHeight, blnResizeWidgets) {
        intMyHeight = intHeight;
        resizeDashBoard(blnResizeWidgets);
    };

    $.fn.etiDashBoard = function (lstOpcoes) {
        return this.each(function () {
            var $this = $(this)
            lstWidgets = [];
            numRows = 0;
            intMyHeight = 0;
            intMyItemUp = 0;//Item que está maximizado
            intMyLastItemUp = -1;//Ultimo item que maximizado
            $this.data('etiDashBoard', (data = new EtiDashBoard(this, lstOpcoes)));
        });
    };
}(window.jQuery);
