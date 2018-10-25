
//***********************************************************************************************************************************************
//***********************************************************************************************************************************************
// FUNÇÕES DO COMPONENTE PARA APRESENTAR FOTOGRAFIAS
function OnClickAddPhoto(fnCallback, pPhotoSignature, pImgElement) {

    if (MyShell().Environment.Config.ActiveCompanyInfo.IsSaas) {        
        GetFileExplorerPhoto.prototype.callback = function (f) {
            SetPhotography(f, pPhotoSignature, pImgElement);
            fnCallback.call(this, f);
        };
        MyShell().Dialog.ShowHtmlDialog('#/Client/Generic/ModalDialogs/FileExplorer/FileExplorer.html', 800, 400, '{ "action": ' + Eticadata.ERP.EtiEnums.enumTipoDialogo.Image + ', "fileTypes": [' + Eticadata.ERP.EtiEnums.FilterType.EXT_BMP_JPG_GIF + '] }');

    } else {
        EtiOpenDialogBox.Open(Eticadata.ERP.EtiEnums.FilterType.IMAGENS, false, true, function (f) {
            SetPhotography(f.files[0].resultB64, pPhotoSignature, pImgElement);
            fnCallback.call(this, f.files[0]);
        });
    }
}

function GetFileExplorerPhoto(params) {    
        GetFileExplorerPhoto.prototype.callback(params[0]);
}

function OnClickDelPhoto(fnCallback, pPhotoSignature, pImgElement)
{
    SetPhotography(null, null, pImgElement);
    fnCallback.call(this, null);
}

function SetPhotography(pPhotoB64, pPhotoSignature, pImgElement) {

    var myPhoto = null;
    var myPhotoSignature = 'data:image/png;base64,';

    if (pPhotoSignature != null && pPhotoSignature != '')
        myPhotoSignature = pPhotoSignature;

    if (pPhotoB64 != null && pPhotoB64 != '')
        myPhoto = myPhotoSignature + pPhotoB64;

    if (myPhoto == null)
        myPhoto = GetUrlBase() + "Imagens/Icons/Geral/Varios/Logo.32.png";

    document.getElementById(pImgElement).setAttribute('src', myPhoto);
}

!function ($) {

    //***********************************************************************************************************************************************
    //***********************************************************************************************************************************************
    // COMPONENTE PARA APRESENTAR FOTOGRAFIAS
    var EtiPhotography = function (element, config) {
        var self = this;
        self.element = $(element);
        self.imgElement = $(element)[0].id + '_imgPhoto';

        if (!element.load) {
            element.load = true;

            var myHtml = '<fieldset style="margin: 5px 0px 0px 10px; padding: 10px 5px 5px; height: calc(100% - 22px);">';
            myHtml += '     <legend style="width: 110px; margin-top: -30px;">';
            myHtml += '         <span data-eti-transmodule="Shell">Foto</span>&nbsp;';
            myHtml += '         <a href="javascript:void(0);" onclick="OnClickAddPhoto(' + config.Callback + ', \'' + config.PhotoSignature + '\', \'' + self.imgElement + '\')"><img src="../../../../Imagens/Icons/Geral/Comandos/Adicionar.16.png" style="margin: 1px; border: 0;" alt="' + getMsgTranslated('Shell', 'Inserir Imagem') + '"/></a>';
            myHtml += '         <a href="javascript:void(0);" onclick="OnClickDelPhoto(' + config.Callback + ', \'' + config.PhotoSignature + '\', \'' + self.imgElement + '\')"><img src="../../../../Imagens/Icons/Geral/Comandos/Eliminar.16.png" style="margin: 1px; border: 0;" alt="' + getMsgTranslated('Shell', 'Remover Imagem') + '"/></a>';
            myHtml += '     </legend>';
            myHtml += '     <div class="form-group col-xs-12" style="padding: 0px;">';
            myHtml += '         <div style=" float: left;">';
            myHtml += '             <img id="' + self.imgElement + '" style="width: 110px; height: 110px; margin-left: 5px;" />';
            myHtml += '         </div>';
            myHtml += '     </div>';
            myHtml += '   </fieldset>';

            $('#' + self.element[0].id).html(myHtml);
        }
        
        //Set Photography
        SetPhotography(config.PhotoB64, config.PhotoSignature, self.imgElement);
    };

    EtiPhotography.prototype = {
        constructor: EtiPhotography
    }

    $.fn.etiPhotography = function (config) {
        return this.each(function () {
            var $this = $(this);
            $this.data('etiPhotography', (data = new EtiPhotography(this, config)));
        });
    };

    
    //***********************************************************************************************************************************************
    //***********************************************************************************************************************************************
    // COMPONENTE PARA SELECIONAR FICHEIROS

    var EtiInputDialog = function (element, config) {

        var self = this;

        var readOnly = "readonly";
        var maxLength = 255;

        if (config.maxLength) {
            maxLength = config.maxLength;
        }

        if (config.readOnly != undefined && !config.readOnly) {
            readOnly = "";
        }

        self.element = $(element);
        fnInputDialog = config.fnOpen
        
        var html = '<div style="width: 100%;">';
        html += '<input class="form-control" id="EtiInputDialog_' + element.id + '" style="border-bottom-right-radius: 0px;border-top-right-radius: 0px; width: calc(100% - 32px); float: left;" type="text" maxlength="' + maxLength + '" ' + readOnly + '>'
        html += '<button style="border-width: 1px 1px 1px 0px; border-style: solid; border-color: rgb(153, 153, 153); border-radius: 0px 2px 2px 0px; border-image: none; width: 32px; height: 24px;  text-align: center;line-height: 0px;" onclick="fnInputDialog()">...</button>'
        html += '</div>'

        $('#' + element.id).html(html);
        if (config.mask) {
            $('#EtiInputDialog_' + element.id).val(config.mask);
        }

        ApplyEtiComponents();

        self.element.on({
            setProperty: $.proxy(this.setProperty, this),
            change: $.proxy(this.change, this),
            update: $.proxy(this.update, this)
        });
    }


    EtiInputDialog.prototype = {
        constructor: EtiInputDialog,

        change: function (e, valueBag) {
            e.uiChange = (valueBag === true);

        },
        setProperty: function (e, ui) {
            var self = this;
            if (e.target == self.element[0]) {
                var newValue;
                if (ui.name == 'readonly') {
                    $('#EtiInputDialog_' + self.element[0].id).prop('readonly', ui.value)
                }
                else if (ui.name == 'disabled') {
                    $('#EtiInputDialog_' + self.element[0].id).prop('disabled', ui.value)
                }
            }
        },
        update: function (e, parent) {
            var self = this;
            $("#EtiInputDialog_" + self.element[0].id).val($('#' + self.element[0].id).val());
        }

    };
    $.fn.etiInputDialog = function (e) {
        var args = arguments;

        if (e == "setMask") {
            $("#EtiInputDialog_" + this[0].id).val(args[1])
        }
        
        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiInputDialog', (data = new EtiInputDialog(this, args[0])));
            }
        });
    };


    //***********************************************************************************************************************************************
    //***********************************************************************************************************************************************
    // COMPONENTE PARA ...


    //***********************************************************************************************************************************************
    //***********************************************************************************************************************************************
    // COMPONENTE PARA ...


}(window.jQuery);