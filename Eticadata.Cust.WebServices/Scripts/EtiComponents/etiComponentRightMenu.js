//MAO 29/07/2014 Funções para suporte de Componente Eticadata (Right Menu)

// ************************************
// FUNCOES GENERICAS
// ************************************
var callbackFncRM;

function getTabHeight(pHeight, pParts) {
    var sHeight = 150;
    if (pHeight) {
        sHeight = pHeight;
    }
    return parseInt(sHeight / pParts , 10);
}

!function ($) {

    // ************************************
    // COMPONENTE RIGHT MENU
    // ************************************

    var EtiRightMenu = function (element, lstOpcoes, fnc) {
        element.className = "divEtiRightMenu";
	    this.element = $(element);
    	this.elementIn = element;
    	callbackFncRM = fnc;

    	var sTabela = "<table align='right'>";
    	var iHeight;

    	for (var i = 0; i < lstOpcoes.length; i++) {
    	    if (lstOpcoes[i].hidden !== true) {
    	        strTxt = "<tr style='height: 6px;'><td></td></tr><tr><td class='divEtiVertTd'><a href='javascript:void(0)' onclick='callbackFncRM(" + lstOpcoes[i].code + ")'>" +
                                    "<canvas id='canvasId" + i + "' height='" + getTabHeight(lstOpcoes[i].height, 1) + "' width='18' style='border:0;'></canvas>" +
                            "</a></td></tr>";
    	        sTabela += strTxt;
    	    }
    	}
        sTabela += "</table>";

    	this.elementIn.innerHTML = sTabela;

    	for (var i = 0; i < lstOpcoes.length; i++) {
    	    if (lstOpcoes[i].hidden !== true) {
    	        var ctx = document.getElementById('canvasId' + i).getContext("2d");
    	        ctx.translate(0, getTabHeight(lstOpcoes[i].height, 1));
    	        ctx.rotate(Math.PI * .5);
    	        ctx.textAlign = "center";
    	        ctx.font = "8pt Verdana";
    	        ctx.fillStyle = "#444";
    	        ctx.fillText(lstOpcoes[i].name, -getTabHeight(lstOpcoes[i].height, 2), -5, getTabHeight(lstOpcoes[i].height, 1));
    	    }
    	}

    };
	
    $.fn.etiRightMenu = function (lstOpcoes, fnc) {
        return this.each(function () {
		    var $this = $(this)
		    $this.data('etiRightMenu', (data = new EtiRightMenu(this, lstOpcoes, fnc)));
        });
	};
}(window.jQuery);
