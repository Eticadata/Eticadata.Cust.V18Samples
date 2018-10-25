
var result;
function LoadAddresses(grid, type, key, search, inactive,nature) {

    $.ajax({
        url: GetUrlBase() + "api/Email/GetContacts",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ P1: type, P2: key, P3: search, P4: inactive, P5:nature}),
        cache: false,
        async: true,
        success: function (data) {

            grid.setProperty("rows", data);
        },
        error: function (d) {
            showErrorAjax(d);
        }
    });

}

function LoadItemsAddresses(element) {


    $.ajax({
        url: GetUrlBase() + "api/Email/GetContactsLists",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: true,
        success: function (data) {

            var res = []
            var filtr = data.filter(function (f) { return f.Key >= 0 })
            var filtrNegative = data.filter(function (f) { return f.Key < 0 })

            for (var i = 0; i < filtrNegative.length; i++) {
                res.push(filtrNegative[i].Key + "|" + filtrNegative[i].Value);
            }

            for (var i = 0; i < filtr.length; i++) {
                res.push(filtr[i].Key + "|" + filtr[i].Value);
            }


            $("#" + element).setProperty("listparam", res.join(";"));
            EtiComponentSetValue(element, "0");

        },
        error: function (d) {
            showErrorAjax(d);
        }
    });
}

function ChangeAddress(elem) {

    var origElem = elem.id.replace("addresses", "");
    $("#" + origElem + "item").setProperty("disabled", false);
    $("#" + origElem + 'searchInput').val("");
    $("#" + origElem + 'item').val("");
    var params = "";

    if ($("#" + elem.id).val() == "0") {
        $("#" + origElem + "item").setProperty("listparam", "32");//EnumTabela.TipoContactos
    }
    else if ($("#" + elem.id).val() == "1") {
        $("#" + origElem + "item").setProperty("listparam", "2");//EnumTabela.Cliente
    }
    else if ($("#" + elem.id).val() == "2") {
        $("#" + origElem + "item").setProperty("listparam", "3");//EnumTabela.Fornecedor
    }
    else if ($("#" + elem.id).val() == "3") {
        $("#" + origElem + "item").setProperty("listparam", "8");//EnumTabela.OutroDevedor
    }
    else if ($("#" + elem.id).val() == "4") {
        $("#" + origElem + "item").setProperty("listparam", "9");//EnumTabela.OutroCredor
    }
    else if ($("#" + elem.id).val() == "5") {
        $("#" + origElem + "item").setProperty("listparam", "6");//EnumTabela.Vendedor
    }
    else if ($("#" + elem.id).val() == "6") {
        $("#" + origElem + "item").setProperty("listparam", "182");//EnumTabela.Tecnico
    }
    else if ($("#" + elem.id).val() == "7") {
        $("#" + origElem + "item").setProperty("listparam", "10");//EnumTabela.Funcionario
        params = "[{ fieldname: 'CodExercicio' , fieldvalue: '" + MyShell().Environment.Config.ActiveCompanyInfo.Exercicio.Codigo + "'}]";
    }
    else if ($("#" + elem.id).val() == "8") {
        $("#" + origElem + "item").setProperty("listparam", "48");//EnumTabela.Armazens
    }
    else if ($("#" + elem.id).val() == "9") {
        $("#" + origElem + "item").setProperty("listparam", "64");//EnumTabela.Banco
    }
    else if ($("#" + elem.id).val() == "10") {
        $("#" + origElem + "item").setProperty("listparam", "325");//EnumTabela.Locadora
    }
    else if ($("#" + elem.id).val() == "11") {
        $("#" + origElem + "item").setProperty("listparam", "326");//EnumTabela.Operador
    }
    else if ($("#" + elem.id).val() == "12") {
        $("#" + origElem + "item").setProperty("listparam", "113");//EnumTabela.EstabelecimentoDeEnsino
    }
    else if ($("#" + elem.id).val() == "13") {
        $("#" + origElem + "item").setProperty("listparam", "75");//EnumTabela.Utilizador
    }
    else if ($("#" + elem.id).val() == "18") {
        $("#" + origElem + "item").setProperty("listparam", "333");//EnumTabela.ERM_ClientesPotenciais
        params = "[{ fieldname: 'IsContacts' , fieldvalue: '1'}]";
    }
    else {
        // EtiComponentSetValue(elem.id, $("#" + elem.id).val());
        $("#" + origElem + "item").setProperty("listparam", "");
        $("#" + origElem + "item").setProperty("disabled", true);
    }
    $("#" + origElem + "item").setProperty("listparamvalues", params);

    LoadAddresses($("#" + origElem + "gridAddresses"), $("#" + origElem + 'addresses').val(), $("#" + origElem + 'item').val(), $("#" + origElem + 'searchInput').val(), $('#' + origElem + 'inactive').is(":checked"),$("#" + origElem).attr("nature"));

}

function ChangeItem(elem) {
    var origElem = elem.id.replace("item", "");
    LoadAddresses($("#" + origElem + "gridAddresses"), $("#" + origElem + 'addresses').val(), $("#" + origElem + 'item').val(), $("#" + origElem + 'searchInput').val(), $('#' + origElem + 'inactive').is(":checked"), $("#" + origElem).attr("nature"));
}
function AddRecipient(elem, rec) {
    var selectedRow = $("#" + elem + "gridAddresses").getProperty("activeRow")
    if (selectedRow.Email) {
        AddEmailToRecipient(selectedRow.Email, rec, elem);
    }
}


function AddEmailToRecipient(email, rec, elem) {
    if (rec == RecipientTypes.To) {

        if (email) {
            if (result.recTo.filter(function (f) { return f.trim() === email.toLowerCase().trim() }).length == 0) {
                result.recTo.push(email.toLowerCase().trim());
                result.recTo = result.recTo.filter(function (f) { return f });
                $("#" + elem + "idEmailTo2").val(result.recTo.join("; "))
            }
        }
    }
    else if (rec == RecipientTypes.CC) {
        if (email) {
            if (result.recCc.filter(function (f) { return f.trim() === email.toLowerCase().trim() }).length == 0) {
                result.recCc.push(email.toLowerCase().trim());
                result.recCc = result.recCc.filter(function (f) { return f });
                $("#" + elem + "idEmailCc2").val(result.recCc.join("; "))
            }
        }

    }
    else if (rec == RecipientTypes.BCC) {
        if (email) {
            if (result.recBcc.filter(function (f) { return f.trim() === email.toLowerCase().trim() }).length == 0) {
                result.recBcc.push(email.toLowerCase().trim());
                result.recBcc = result.recBcc.filter(function (f) { return f });
                $("#" + elem + "idEmailBcc2").val(result.recBcc.join("; "))
            }
        }
    }

}





!function ($) {

    var EtiLookup = function (element, config) {

        var self = this;
        result = { recTo: [], recCc: [], recBcc: [], status: "UNDEFINED" };

        var recFocused = 0;
        var originalHtml = $('#' + element.id)[0].outerHTML;
        if (config.recipientTo) {
            result.recTo = textToArray(config.recipientTo);
        }
        if (config.recipientCc) {
            result.recCc = textToArray(config.recipientCc)
        }
        if (config.recipientBcc) {
            result.recBcc = textToArray(config.recipientBcc)
        }

        if (config.recipentFocused) {
            recFocused = config.recipentFocused;
        }
        var nature = "5";//email
        var lblTo = getMsgTranslated("Admin", "Para");
        var lblCc = getMsgTranslated("Admin", "Cc");
        var lblBcc = getMsgTranslated("Admin", "Bcc");
        var width = 50;
        if (config.nature) {
            nature = config.nature;
            if (nature == "2"/*compromisso/reunião*/) {
                var lblTo = getMsgTranslated("Admin", "Obrigatório");
                var lblCc = getMsgTranslated("Admin", "Opcional");
                width = 80;
            }
        }

        $('#' + element.id).attr("nature", nature);
        self.element = $(element);
        fnCloseDialog = config.fnClose


        var html = '<div id="' + element.id + 'content" style="width: 100%;height: 100%;">'
        html += '<div  style="width: 100%; height: 60px;">'
        html += '<div style="width: 100%; height: 55px;">'
        html += '<label><span style="width: 80px; float: left;">Endereços:</span></label>'
        html += '<div class="form-control" id="' + element.id + 'addresses" style="width: calc((100% - 85px) /2); margin-right: 5px; float: left;" data-toggle="tooltip" data-eti-type="combo" data-eti-listtype="FIX" data-eti-listparam="" data-eti-valuecol="1" data-eti-displaycol="2" data-eti-validated="Y" onchange="ChangeAddress(this)"></div>'
        html += '<div class=" form-control" id="' + element.id + 'item" style="width: calc((100% - 85px) /2); float: left;" data-toggle="tooltip" data-eti-type="combo" data-eti-listtype="TAB" data-eti-listparam="" data-eti-valuecol="1" data-eti-displaycol="2" data-eti-validated="Y" onchange="ChangeItem(this)"></div>'
        html += '<div id="' + element.id + 'searchDiv" style="width: 100%; margin-top: 5px; float: left; min-height: 15px;">'
        html += '<label><span style="width: 80px; float: left;">Pesquisa:</span></label>'
        html += '<input id="' + element.id + 'searchInput" style="width: calc(100% - 80px); float: left;" type="text" placeholder="' + getMsgTranslated("Admin", "email, nome, telemóvel") + '">'
        html += '</div>'
        html += '</div>'

        html += '</div>'

        html += '<div id="' + element.id + 'contactsBody" style="padding: 0px; width: 100%; height: calc(100% - ' + (nature == "2" ? "125" : (nature == "5" ? "150" : "100")) + 'px);margin-bottom:10px">'
        html += '<div id="' + element.id + 'gridAddresses" style="height:100%"></div>'
        html += '</div>'
        html += '<div >'
        html += '<div id="contactAddresses" style="width: 100%; height: '+ (nature == "2" ? "50" : (nature == "5" ? "75" : "25"))+'px; text-align: left; margin-bottom: 10px;">'
        html += '<div style="width: 100%; margin-bottom: 2px; float: left;">'
        html += '<div style="line-height: 24px;vertical-align: text-bottom;width:' + width + 'px; float: left;" ><a style="text-decoration:underline" href="javascript:void(0);" onclick="AddRecipient(\'' + element.id + '\',0)" >' + lblTo + '</a>:</div>'
        html += '<div style="width:calc(100% - ' + width + 'px);float: left;"><input class="EmailTo form-control" id="' + element.id + 'idEmailTo2"  type="text"></div>'
        html += '</div>'
        if (nature == "5" || nature == "2") {
            html += '<div style="width: 100%; margin-bottom: 2px; float: left;">'
            html += '<div  style="line-height: 24px;vertical-align: text-bottom;width: ' + width + 'px; float: left;" ><a style="text-decoration:underline" href="javascript:void(0);" onclick="AddRecipient(\'' + element.id + '\',1)" >' + lblCc + '</a>:</div>'
            html += '<div style="width: calc(100% - ' + width + 'px); float: left;"><input class="EmailCc form-control" id="' + element.id + 'idEmailCc2"  type="text"></div>'
            html += '</div>'
        }
        if (nature == "5") {
            html += '<div style="width: 100%;">'
            html += '<div style="line-height: 24px;vertical-align: text-bottom;width: 50px; float: left;"><a style="text-decoration:underline" href="javascript:void(0);" onclick="AddRecipient(\'' + element.id + '\',2)" >' + lblBcc + '</a>:</div>'
            html += '<div style="width: calc(100% - 50px); float: left;"><input class="EmailBcc form-control" id="' + element.id + 'idEmailBcc2"  type="text"></div>'
            html += '</div>'
        }

        html += '</div>'
        html += '</div>'
        html += '</div>'

        $('#' + element.id).html(html);

        if(!config.isform)
        {

        $('#' + element.id).dialog({
            title: getMsgTranslated("Admin", "Selecionar Contactos"),
            autoOpen: true,
            height: 440,
            width: 650,
            modal: true,
            resizable: false,
            create: function (e, ui) {
                var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane")
                //$("<label class='shut-up' ><input  type='checkbox'/>Incluir Inactivos</label>").prependTo(pane)
                $(" <label style='margin-left:5px;float:left' class='checkbox-label'><input type='checkbox' id='" + element.id + "inactive' onchange=''  /><span data-eti-transmodule='Admin'>Incluir Inactivos</span></label>").prependTo(pane)
            },
            buttons: [
            {
                id: element.id + "-form-ok",
                text: "OK",
                click: AddSelection
            },
            {
                id: element.id + "-form-cancel",
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");

                    CancelSelection()
                }
            }],
            open: function (event, ui) {

                $(".ui-dialog").css("border-radius", '6px');

                $(".ui-dialog-titlebar-close").css("display", 'none');
                $(".ui-dialog").css("z-index", 9999);
                $(".ui-widget-overlay").css("z-index", 9998);

                $(".ui-dialog-title").css("font-size", '18px');
                $("#" + element.id + "-form-ok").css("font-size", '16px');
                $("#" + element.id + "-form-ok").css("padding", '2px 4px 2px 4px');
                $("#" + element.id + "-form-cancel").css("font-size", '16px');
                $("#" + element.id + "-form-cancel").css("padding", '2px 4px 2px 4px');
                $("#" + element.id + "-form-ok").addClass("etiCommandBtn");
                $("#" + element.id + "-form-cancel").addClass("etiCommandBtn");


            },
            close: function (evt, ui) {
                $('#' + element.id).parent()[0].outerHTML = originalHtml;
                $('.modal-backdrop').remove();
            }
        });
            }

        $("#" + element.id + "gridAddresses").etiGrid({
            width: '100%',
            height: '100%',
            editing: { add: false, remove: false, allow: false, allRowsMode: false, disabled: false },
            cols: [
                  { headerText: "", key: 'Image', width: 18, editor: { type: 'image', imageType: 'url' } },
                { headerText: getMsgTranslated('Admin', 'Nome'), key: 'Name', width: 250, editor: { type: 'text' }, template: "(row.Inactive ? {color: '#808080', 'font-style': 'italic'} : '')" },
            { headerText:( nature != Eticadata.ERP.EtiEnums.NaturezaAtividade.SMS && nature != Eticadata.ERP.EtiEnums.NaturezaAtividade.FaxTelefonema) ? getMsgTranslated('Admin', 'Email') : getMsgTranslated('Admin', 'Telemóvel'), key: 'Email', width: 320, editor: { type: 'text' }, template: "(row.Inactive ? {color: '#808080', 'font-style': 'italic'} : '')" },
            { headerText: "Inactive", key: 'Inactive', width: 320, hidden: true, editor: { type: 'check' } }
            ]
        });




        $("#" + element.id + "gridAddresses").on("etiDblClick", function (evt, ui) {
            if (ui.row.Email) {
                AddEmailToRecipient(ui.row.Email, recFocused, element.id);
            }
        });


        $('#' + element.id).modal({ show: true })

        var delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $('#' + element.id + 'inactive').change(function () {
            LoadAddresses($("#" + element.id + "gridAddresses"), $("#" + element.id + 'addresses').val(), $("#" + element.id + 'item').val(), $("#" + element.id + 'searchInput').val(), $(this).is(":checked"), $("#" + element.id).attr("nature"));
        });


        $('#' + element.id + 'searchInput').keyup(function () {
            delay(function () {
                LoadAddresses($("#" + element.id + "gridAddresses"), $("#" + element.id + 'addresses').val(), $("#" + element.id + 'item').val(), $("#" + element.id + 'searchInput').val(), $('#' + element.id + 'inactive').is(":checked"), $("#" + element.id).attr("nature"));
            }, 250);
        });

        $('#' + element.id + 'idEmailTo2').blur(function () {
            recFocused = RecipientTypes.To;
        });
        $('#' + element.id + 'idEmailCc2').blur(function () {
            recFocused = RecipientTypes.CC;
        });
        $('#' + element.id + 'idEmailBcc2').blur(function () {
            recFocused = RecipientTypes.BCC;
        });

        $('#' + element.id + 'idEmailTo2').focusout(function () {
            result.recTo = textToArray($('#' + element.id + 'idEmailTo2').val());
        });
        $('#' + element.id + 'idEmailCc2').focusout(function () {
            result.recCc = textToArray($('#' + element.id + 'idEmailCc2').val());
        });
        $('#' + element.id + 'idEmailBcc2').focusout(function () {
            result.recBcc = textToArray($('#' + element.id + 'idEmailBcc2').val());
        });


        $('#' + element.id + 'idEmailTo2').val(result.recTo.join("; "));
        $('#' + element.id + 'idEmailCc2').val(result.recCc.join("; "));
        $('#' + element.id + 'idEmailBcc2').val(result.recBcc.join("; "));


        function AddSelection() {
            var messages = [];
            $('#' + element.id + 'idEmailTo2').css('border', 'solid 1px #999999');
            $('#' + element.id + 'idEmailCc2').css('border', 'solid 1px #999999');
            $('#' + element.id + 'idEmailBcc2').css('border', 'solid 1px #999999');

            $('#' + element.id + "-form-ok").prop('disabled', true);
            $('#' + element.id + "-form-cancel").prop('disabled', true);

            var test = true;
            if ($("#" + element.id).attr("nature") != Eticadata.ERP.EtiEnums.NaturezaAtividade.SMS + "" && $("#" + element.id).attr("nature") != Eticadata.ERP.EtiEnums.NaturezaAtividade.FaxTelefonema + "") {
                if (!EmailAddressCheck(result.recTo, true)) {
                    $('#' + element.id + 'idEmailTo2').css("border", "red solid 1px");
                    messages.push({ type: 1, message: getMsgTranslated("Admin", "O campo \"" + lblTo + "\" contém emails inválidos."), htmlElementIds: ['idEmailTo2'] });
                    test = false;
                }

                if (test && !EmailAddressCheck(result.recCc, true)) {
                    $('#' + element.id + 'idEmailCc2').css("border", "red solid 1px");
                    messages.push({ type: 1, message: getMsgTranslated("Admin", "O campo \"" + lblCc + "\" contém emails inválidos."), htmlElementIds: ['idEmailCc2'] });
                    test = false;
                }

                if (test && !EmailAddressCheck(result.recBcc, true)) {
                    $('#' + element.id + 'idEmailBcc2').css("border", "red solid 1px");
                    messages.push({ type: 1, message: getMsgTranslated("Admin", "O campo \"Bcc\" contém emails inválidos."), htmlElementIds: ['idEmailBcc2'] });
                    test = false;
                }
            }


            if (test) {

                result.recTo = result.recTo.filter(function (f) { return f }).join("; ");
                result.recCc = result.recCc.filter(function (f) { return f }).join("; ");
                result.recBcc = result.recBcc.filter(function (f) { return f }).join("; ");

                result.status = "OK";
                fnCloseDialog.call(this, result);
                if (!config.isform) {
                    $(this).dialog("close");
                }

            }
            else {
                $('#' + element.id + "-form-ok").prop('disabled', false);
                $('#' + element.id + "-form-cancel").prop('disabled', false);
            }

            if (!config.isform) {
                UpdateEtiErrors(messages);
            }
            else {
                ShowCustomErrors(messages);
            }

        }
        function CancelSelection() {
            $('#' + element.id + "-form-ok").prop('disabled', true);
            $('#' + element.id + "-form-cancel").prop('disabled', true);
            if (!config.isform) {
                UpdateEtiErrors([]);
            }
            result.status = "CANCEL";
            fnCloseDialog.call(this, result);

        }



        LoadItemsAddresses(element.id + "addresses");


        ApplyEtiComponents();

         self.element.on({
             addSelection: $.proxy(this.addSelection, AddSelection),
             cancelSelection: $.proxy(this.cancelSelection, CancelSelection),
                });
    }


    EtiLookup.prototype = {
        constructor: EtiLookup,
        addSelection: function () {
          this.call();
        },
        cancelSelection: function () {
            this.call();
        },
    };
    $.fn.etiLookup = function (e) {
        var args = arguments;

        return this.each(function () {
            //if (!this.initiated) {
            //    this.initiated = true;
            var $this = $(this);
            $this.data('etiLookup', (data = new EtiLookup(this, args[0])));
            //}
        });
    };

}(window.jQuery);



var RecipientTypes = {
    To: 0,
    CC: 1,
    BCC: 2,
    From: 3,
    Required: 4,
    Optional: 5,
};

function textToArray(text) {
    var res = [];
    if (text) {
        var aux = text.split(";");
        for (var i = 0; i < aux.length; i++) {
            res.push(aux[i].toLowerCase().trim())
        }
    }
    return res;
}


var EmailAddressCheck = function (emailAddress, multiple) {
    var result = true;
    var pattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (multiple) {
        for (var i = 0; i < emailAddress.length; i++) {
            var eml = emailAddress[i].trim();
            
            if (eml != "" && !pattern.test(eml) && !(eml.match("#]$") == "#]" && eml.indexOf("[#", 0) == 0)) {
                return false;
            }
            //if (!pattern.test(emailAddress[i]) && !(emailAddress[i].endsWith("#]") && emailAddress[i].startsWith("[#"))) {
            //    return false;
            //}
        }
    }
    else {
        if (!pattern.test(emailAddress)) {
            return false;
        }

    }

    return result;
}