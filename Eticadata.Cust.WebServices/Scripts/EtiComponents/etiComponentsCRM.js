var focusElement;   //keep the element at which the caret was lastly
var selectionRange  //for IE7&8
function fnInputDialog() { };

function LoadActivitiesEntity(keyEntity, codTables, element, isNew, send) {
    if (!isNew) {

        var key1 = keyEntity[0];
        var key2 = keyEntity[1];
        var key3 = keyEntity[2];
        var key4 = keyEntity[3];


        var pListParam = [{ "FieldName": "TipoEntidade", "FieldType": 9, "FieldValue": codTables },
                             { "FieldName": "Chave1", "FieldType": 18, "FieldValue": key1 },
                             { "FieldName": "Chave2", "FieldType": 18, "FieldValue": key2 },
                             { "FieldName": "Chave3", "FieldType": 18, "FieldValue": key3 },
                             { "FieldName": "Numero", "FieldType": 9, "FieldValue": key4 }

        ]

        if (send) {
            pListParam.push({ "FieldName": "SentidoTelFax", "FieldType": 3, "FieldValue": send });
        }


        //TODO MAO migrar isto quando as novas combos estiverem estaveis
        $.ajax({
            url: GetUrlBase() + "api/Data/GetComboValues",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ tipoLista: "TAB", baseLista: "336", parameters: eval(pListParam), colunaValor: "", colunaDisplay: "", campoValor: "", campoDisplay: "", caption: "" }),
            cache: false,
            async: false,
            success: function (data) {
                element.setProperty("rows", data.rows);
            },
            error: function (d) {
                showErrorAjax(d);
            }
        });
    }
    else {
        element.setProperty("rows", []);
    }
}

function LoadContactsEntity(keyEntity, type, isAlternativeDir, element, isNew) {

    if (!isNew) {

        var pListParam;

        if (!isAlternativeDir) {
            pListParam = [{ "FieldName": "TypeEntity", "FieldType": 9, "FieldValue": type },
                              { "FieldName": "Key", "FieldType": 18, "FieldValue": keyEntity[0] }
            ]
        }
        else {
            pListParam = [{ "FieldName": "TypeEntity", "FieldType": 9, "FieldValue": type },
                              { "FieldName": "Key", "FieldType": 18, "FieldValue": keyEntity[1] },
                              { "FieldName": "KeyDirection", "FieldType": 9, "FieldValue": keyEntity[2] },
            ]
        }


        $.ajax({
            url: GetUrlBase() + "api/Data/GetComboValues",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ tipoLista: "TAB", baseLista: "529", parameters: eval(pListParam), colunaValor: "", colunaDisplay: "", campoValor: "", campoDisplay: "", caption: "" }),
            cache: false,
            async: false,
            success: function (data) {
                element.setProperty("rows", data.rows);
            },
            error: function (d) {
                showErrorAjax(d);
            }
        });
    }
    else {
        element.setProperty("rows", []);
    }

    EtiComponentSetProperty(element[0].id, 'disabled', isNew);
}

function RefreshContacts(elem) {
    LoadContactsEntity(elem.component.viewModelVar.GetEntityKeys(), elem.component.type, elem.component.isAlternativeDir, elem.component.element, elem.component.viewModelVar.CurrentEntity.IsNew())
}

function LoadOportunitiesEntity(keyEntity, element, isNew) {

    if (!isNew) {

        var pListParam = [{ "FieldName": "Key", "FieldType": 18, "FieldValue": keyEntity[0] }
        ]
        //TODO MAO migrar isto quando as novas combos estiverem estaveis
        $.ajax({
            url: GetUrlBase() + "api/Data/GetComboValues",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ tipoLista: "TAB", baseLista: "533", parameters: eval(pListParam), colunaValor: "", colunaDisplay: "", campoValor: "", campoDisplay: "", caption: "" }),
            cache: false,
            async: false,
            success: function (data) {
                element.setProperty("rows", data.rows);
            },
            error: function (d) {
                showErrorAjax(d);
            }
        });
    }
    else {
        element.setProperty("rows", []);
    }

}

function ConvertDataKb(data) {
    for (var i = 0; i < data.length; i++) {

        data[i].LengthKB = (data[i].Length / 1024).toFixed(2) + ' KB'
    }
    return data;
}


var dataAttachments = [];

function LoadAttachmentsEntity(keys, type, element, isNew, codeSituation, codeDocumentation) {
    if (!isNew && codeSituation && codeDocumentation) {

        var key1 = keys[0];
        var key2 = keys[1];
        var key3 = keys[2];
        var key4 = keys[3];


        $.ajax({
            url: GetUrlBase() + "api/Attachments/GetAttachments",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ typeEntity: type, keys: [key1, key2, key3, key4], codeSituation: codeSituation, codeDocumentation: codeDocumentation, lstAttachments: [] }),
            cache: false,
            async: false,
            success: function (data) {
                dataAttachments = ConvertDataKb(data);
                element.setProperty("rows", dataAttachments.filter(function (f) { return f.State != 1 ? true : false; }));
            },
            error: function (d) {
                showErrorAjax(d);
            },
            complete: function (d, f) {

            }
        });
    }
    else {
        dataAttachments = [];
        element.setProperty("rows", dataAttachments);
    }
}

function SaveAttachmentsEntity(keys, codeTable, codeSituation, codeDocumentation, lstAtt, callback) {

    var key1 = keys[0];
    var key2 = keys[1];
    var key3 = keys[2];
    var key4 = keys[3];
    var index = 0;
    function saveAtt(index) {
        if (index >= lstAtt.length) {
            return;
        }
        if (index == (lstAtt.length - 1)) {
            lstAtt[index].IsLast = true;
        }

        var ent = JSON.stringify({ typeEntity: codeTable, codeSituation: codeSituation, codeDocumentation: codeDocumentation, keys: [key1, key2, key3, key4], attDetail: lstAtt[index] });
        if (lstAtt[index].State != 0) {
            UpdateAttStream(ent, lstAtt[index], function () {

                saveAtt(index + 1);
                if (lstAtt[index].IsLast) {
                    callback.call();
                }


            });
        }
        else {
            saveAtt(index + 1);
            if (lstAtt[index].IsLast) {
                callback.call();
            }

        }
    }

    saveAtt(0);

}

function UpdateAttStream(ent, e, callbak) {

    if (window.FormData !== undefined) {
        var data = new FormData();
        if (e.FileInfo) {
            data.append("file1", e.FileInfo.file);
        }
        data.append("entity", ent);

        $.ajax({
            url: GetUrlBase() + "api/Attachments/Upload",
            type: "POST",
            contentType: false,
            data: data,
            processData: false,
            success: function (data) {

            },
            error: function (d) {
                showErrorAjax(d);
            },
            complete: function (d, f) {
                if (callbak) {
                    callbak.call();
                }
                if (e.IsLast) {
                    MyShell().Ribbon.SendEnabledUpdate("31", false);
                }
            },


            //xhr: function () {
            //    var xhr = new window.XMLHttpRequest();
            //    //Upload progress
            //    xhr.upload.addEventListener("progress", function (evt) {
            //        if (evt.lengthComputable) {
            //            var percentComplete = evt.loaded / evt.total;
            //            //Do something with upload progress
            //            if (percentComplete < 1)
            //                $("#progressInfo").text(e.Index +" - "+ Math.floor((percentComplete) * 100) + '%');
            //            else
            //                $("#progressInfo").text(e.Index + " - " + "Aguarde...");
            //        }
            //    }, false);



            //    return xhr;


            //}
        });

    }

}


function RemoveAttachment(elem) {

    var actRow = $(elem).getProperty("activeRow");
    if (actRow) {
        var rows = $(elem).getProperty("rows");

        for (var i = 0; i < rows.length; i++) {
            if (rows[i].Id == actRow.Id) {
                rows[i].State = 1;//removed
                break;
            }
        }

        $(elem).setProperty("rows", dataAttachments.filter(function (f) { return f.State != 1 ? true : false; }));

        MyShell().Ribbon.SendEnabledUpdate("31", true);
    }
}


function AddAttachment(elem) {

    var elemADAtt = elem;

    EtiOpenDialogBox.Open(Eticadata.ERP.EtiEnums.FilterType.TODOS, false, false, function (e) {
        var nf = e.numFiles;
        var f = e.files;

        for (var i = 0; i < e.numFiles; i++) {

            var fl = e.files[i];

            var exist = dataAttachments.filter(function (f) { return f.Name == fl.label && f.State != 1 ? true : false });

            if (exist.length > 0) {
                var indexObj = dataAttachments.indexOf(exist[0]);
                MyShell().Dialog.showMessageBox(0, 0, "question", getMsgTranslated("generic", "ERP eticadata"), getMsgTranslated("generic", "Existe um ficheiro com o mesmo nome, deseja substituí-lo?"), getMsgTranslated("generic", "Sim"), getMsgTranslated("generic", "Não"), getMsgTranslated("generic", "Cancelar"), function () {
                    MyShell().Dialog.closeMessageBox();
                    dataAttachments[indexObj].State = 1;//removed
                    dataAttachments.push({ "Length": fl.size, "LengthKB": (fl.size / 1024).toFixed(2) + ' KB', "Name": fl.label, "FileInfo": fl, "FileType": 1, "Id": "00000000-0000-0000-0000-000000000000", "IsForSend": true, "State": 2, "Line": null, "WithElectronicSignature": false });
                }, function () {
                    MyShell().Dialog.closeMessageBox();

                });
            }
            else {
                dataAttachments.push({ "Length": fl.size, "LengthKB": (fl.size / 1024).toFixed(2) + ' KB', "Name": fl.label, "FileInfo": fl, "FileType": 1, "Id": "00000000-0000-0000-0000-000000000000", "IsForSend": true, "State": 2, "Line": null, "WithElectronicSignature": false, "FileName": fl.path });
            }

        }

        $(elemADAtt).setProperty("rows", dataAttachments.filter(function (f) { return f.State != 1 ? true : false; }));
        MyShell().Ribbon.SendEnabledUpdate("31", true);

    });
}



!function ($) {



    //EXEMPLO DE INVOCAÇÃO
    //$('#lstOportunities').etiOportunitiesEntity({
    //    viewModelVar: vm
    //});

    // ************************************
    // COMPONENTE LISTA OPORTUNIDADES
    // ************************************
    var EtiOportunitiesEntity = function (element, config) {
        var self = this;
        self.element = $(element);
        self.viewModelVar = config.viewModelVar;

        if (!element.load) {

            element.load = true;
            $(element).etiGrid({
                indexerKey: 'c7',
                cols: [{ headerText: getMsgTranslated('TableCRM', 'Título'), key: 'c1', width: 200, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Descrição'), key: 'c2', width: 180, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Login'), key: 'c3', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Alteração'), key: 'c4', width: 100, editor: { type: 'date' } },
                       { headerText: getMsgTranslated('TableCRM', 'Valor'), key: 'c5', width: 100, editor: { type: 'number', valueType: 'Total' } },
                       { headerText: getMsgTranslated('TableCRM', 'Fecho Previsto'), key: 'c6', width: 120, editor: { type: 'date' } },
                       { headerText: getMsgTranslated('TableCRM', 'Id'), key: 'c7', width: 100, hidden: true, editor: { type: 'text' } }
                ]
            });


            $(element).on("etiDblClick", function (evt, ui) {
                MyShell().Ribbon.SendCommand('', 'SL', MyShell().Eticadata.Common.CommandsERM.EditarClientesPotenciais, ui.row.c7)
            });

        }
        var funct = config.viewModelVar.AfterLoadEntity;

        config.viewModelVar.AfterLoadEntity = function (viewModel) {
            funct.call(this, viewModel);
            LoadOportunitiesEntity(viewModel.GetEntityKeys(), self.element, viewModel.CurrentEntity.IsNew())
        }

        if (self.viewModelVar.CurrentEntity) {
            LoadOportunitiesEntity(self.viewModelVar.GetEntityKeys(), self.element, self.viewModelVar.CurrentEntity.IsNew())
        }
    }


    EtiOportunitiesEntity.prototype = {
        constructor: EtiOportunitiesEntity
    };


    $.fn.etiOportunitiesEntity = function () {
        var args = arguments;
        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiOportunitiesEntity', (data = new EtiOportunitiesEntity(this, args[0])));
            }
        });
    };



    // ************************************
    // COMPONENTE LISTA ANEXOS
    // ************************************
    var functAL, functBS, functAS;
    var EtiAttachmentsEntity = function (element, config) {
        var self = this;
        self.element = $(element);
        self.codeTable = config.codeTable;
        self.codeSituation = config.codeSituation;
        self.codeDocumentation = config.codeDocumentation;
        self.viewModelVar = config.viewModelVar;
        self.propList = config.propList;

        if (!element.load) {

            element.load = true;
            $(element).etiGrid({
                indexerKey: 'c3',
                editing: { add: false, remove: false, allow: false, allRowsMode: false, disabled: !self.codeSituation || !self.codeDocumentation },
                customPopup: [{ icon: 'Geral/Comandos/Adicionar.16.png', text: 'Adicionar Anexo', funcName: "AddAttachment(" + element.id + ")", disabled: false }, { icon: 'Geral/Comandos/Eliminar.16.png', text: 'Remover Anexo', funcName: "RemoveAttachment(" + element.id + ")", disabled: false }],
                cols: [{ headerText: getMsgTranslated('TableCRM', 'Ficheiro'), key: 'Name', width: 400, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Tamanho'), key: 'LengthKB', width: 100, editor: { type: 'text', align: 'right' } },
                       { headerText: getMsgTranslated('TableCRM', 'Id'), key: 'Id', width: 100, hidden: true, editor: { type: 'text' } }
                ]
            });

            $(element).on("etiDblClick", function (evt, ui) {





                //Download ANEXOS
                if (!MyShell().Environment.Config.IsSaas) {

                    window.location.assign(GetUrlBase() + "api/Attachments/Download?IdAnexo=" + ui.row.Id);
                    //var formData = new FormData();
                    //formData.append("IdAnexo", ui.row.Id + "/" + ui.row.Name)
                    //formData.append("Documento", ui.row.FileType)
                    //$.ajax({
                    //    url: GetUrlBase() + "api/Attachments/Download?IdAnexo=" + btoa( ui.row.Id + "/" + ui.row.Name) + "&Documento=" + ui.row.FileType,
                    //    type: 'GET',
                    //    // Form data
                    //    //data: formData,
                    //    //Options to tell JQuery not to process data or worry about content-type
                    //    //contentType: "application/json; charset=utf-8",
                    //    //dataType: "binary",
                    //    cache: false,
                    //    contentType: false,
                    //    processData: false,
                    //    success: function (response, status, headers) {


                    //        var contentType = headers.getResponseHeader('content-type');

                    //        var disposition = headers.getResponseHeader('Content-Disposition');
                    //        var filename = disposition.substring(disposition.indexOf('=') + 1);

                    //        var byteCharacters = atob(response);
                    //        var byteNumbers = new Array(byteCharacters.length);

                    //        for (var i = 0; i < byteCharacters.length; i++) {
                    //            byteNumbers[i] = byteCharacters.charCodeAt(i);
                    //        }
                    //        var byteArray = new Uint8Array(byteNumbers);

                    //        var linkElement = document.createElement('a');
                    //        try {
                    //            var blob = new Blob([byteArray], { type: contentType });




                    //            if (window.navigator.msSaveBlob) {
                    //                window.navigator.msSaveBlob(blob, filename);
                    //            }
                    //            var url = window.URL.createObjectURL(blob);

                    //            linkElement.setAttribute('href', url);
                    //            linkElement.setAttribute("download", filename);




                    //            var deleteBlobURL = function () {
                    //                setTimeout(function () {
                    //                    window.URL.revokeObjectURL(blob);
                    //                }, 250);
                    //            };

                    //            var evt = "click";
                    //            linkElement.onclick = deleteBlobURL;

                    //            document.body.appendChild(linkElement);

                    //            if (document.createEvent) {
                    //                var evObj = document.createEvent('MouseEvents');
                    //                evObj.initEvent(evt, true, false);
                    //                linkElement.dispatchEvent(evObj);

                    //            } else if (document.createEventObject) {
                    //                var evObj = document.createEventObject();
                    //                linkElement.fireEvent('on' + evt, evObj);
                    //            }
                    //            document.body.removeChild(linkElement);

                    //        } catch (ex) {
                    //            showErrorAjax(ex);
                    //        }


                    //    },
                    //    error: function (d) {
                    //        showErrorAjax(d);
                    //    }
                    //});

                }

            });

            functAL = config.viewModelVar.AfterLoadEntity;
            functBS = config.viewModelVar.BeforeSaveEntity;
            functAS = config.viewModelVar.AfterSaveEntity;
        }

        var IsSavingAttachments = false;

        config.viewModelVar.AfterLoadEntity = function (viewModel) {
            if (!IsSavingAttachments) {
                functAL.call(this, viewModel);
                var codeTable = viewModel.myMetaData.CodTable;
                if (self.codeTable) {
                    codeTable = self.codeTable;
                }

                EtiComponentSetProperty(self.element[0].id, "disabled", viewModel.CurrentEntity.IsNew() ? true : false);

                LoadAttachmentsEntity(viewModel.GetEntityKeys(), codeTable, self.element, viewModel.CurrentEntity.IsNew(), self.codeSituation, self.codeDocumentation)

            }
        }

        config.viewModelVar.BeforeSaveEntity = function (viewModel) {
            functBS.call(this, viewModel);

            if (self.viewModelVar.CurrentEntity.hasOwnProperty(self.propList)) {
                var activityAttachments = self.viewModelVar.CurrentEntity[self.propList];
                activityAttachments(dataAttachments);
            }
        }


        config.viewModelVar.AfterSaveEntity = function (viewModel,data) {
            functAS.call(this, viewModel);
            var codeTable = viewModel.myMetaData.CodTable;
            if (self.codeTable) {
                codeTable = self.codeTable;
            }
            IsSavingAttachments = true;
            SaveAttachmentsEntity(viewModel.GetEntityKeys(), codeTable, self.codeSituation, self.codeDocumentation, dataAttachments, function () {

                IsSavingAttachments = false;
                config.viewModelVar.AfterLoadEntity(viewModel);

            });

        }

        $(element).setProperty("disabled", !self.codeSituation || !self.codeDocumentation);

        if (self.viewModelVar.CurrentEntity) {
            var codeTable = self.viewModelVar.myMetaData.CodTable;
            if (self.codeTable) {
                codeTable = self.codeTable;
            }

            LoadAttachmentsEntity(self.viewModelVar.GetEntityKeys(), codeTable, self.element, self.viewModelVar.CurrentEntity.IsNew(), self.codeSituation, self.codeDocumentation)
        }
    }


    EtiAttachmentsEntity.prototype = {
        constructor: EtiAttachmentsEntity
    };


    $.fn.etiAttachmentsEntity = function () {
        var args = arguments;
        return this.each(function () {
            //if (!this.initiated) {
            //    this.initiated = true;
            var $this = $(this);
            $this.data('etiAttachmentsEntity', (data = new EtiAttachmentsEntity(this, args[0])));
            // }
        });
    };


    //EXEMPLO DE INVOCAÇÃO
    //$('#lstContacts').etiContactsEntity({
    //    viewModelVar: vm,
    //    typeEntity: 1
    //});

    // ************************************
    // COMPONENTE LISTA CONTACTOS
    // ************************************
    var EtiContactsEntity = function (element, config) {
        var self = this;

        self.element = $(element);
        self.type = config.typeEntity;
        self.viewModelVar = config.viewModelVar;
        self.isAlternativeDir = config.isAlternativeDir;

        if (!element.load) {

            element.component = self;
            element.load = true;

            $(element).etiGrid({
                indexerKey: 'c9',
                editing: { add: false, remove: false, allow: false, allRowsMode: false },
                customPopup: [{ icon: Eticadata.Common.EtiIcons.Geral.Comandos.getActualizar().getIcon16().RelativePath, text: getMsgTranslated('TableCRM', 'Actualizar'), funcName: "RefreshContacts(" + element.id + ")", disabled: false }],
                cols: [{ headerText: getMsgTranslated('TableCRM', 'Tipo'), key: 'c1', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Nome'), key: 'c2', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Cargo'), key: 'c3', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Telefone'), key: 'c4', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Telemóvel'), key: 'c5', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Fax'), key: 'c6', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Email'), key: 'c7', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Observações'), key: 'c8', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'CodContacto'), key: 'c9', width: 100, hidden: true, editor: { type: 'text' } }
                ]
            });

            $(element).on("etiRowSelected", function (evt, ui) {
                MyShell().Ribbon.SendCommand('', 'SL', MyShell().Eticadata.Common.CommandsERM.EditarContactos, ui.row.c9)
            });

        }
        var funct = config.viewModelVar.AfterLoadEntity;

        config.viewModelVar.AfterLoadEntity = function (viewModel) {
            funct.call(this, viewModel);
            LoadContactsEntity(viewModel.GetEntityKeys(), self.type, self.isAlternativeDir, self.element, viewModel.CurrentEntity.IsNew())
        }

        if (self.viewModelVar.CurrentEntity) {
            LoadContactsEntity(self.viewModelVar.GetEntityKeys(), self.type, self.isAlternativeDir, self.element, self.viewModelVar.CurrentEntity.IsNew())
        }
    }


    EtiContactsEntity.prototype = {
        constructor: EtiContactsEntity
    };


    $.fn.etiContactsEntity = function () {
        var args = arguments;
        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiContactsEntity', (data = new EtiContactsEntity(this, args[0])));
            }
        });
    };


    // ************************************
    // COMPONENTE LISTA ATIVIDADES
    // ************************************
    //$('#lstActivities').etiActivitiesEntity({
    //    viewModelVar: vm,
    //    sendMode: 1,
    //});

    var EtiActivitiesEntity = function (element, config) {
        var self = this;
        self.viewModelVar = config.viewModelVar;
        self.codeTable = config.codeTable;
        self.element = $(element);

        self.sendMode = config.sendMode;
        if (!element.load) {

            element.load = true;
            $(element).etiGrid({
                indexerKey: 'c9',
                cols: [{ headerText: getMsgTranslated('TableCRM', 'Tipo Atividade'), key: 'c1', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Natureza'), key: 'c2', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Organizador'), key: 'c3', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Assunto'), key: 'c4', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Mensagem'), key: 'c5', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Data Início'), key: 'c6', width: 100, editor: { type: 'date' } },
                       { headerText: getMsgTranslated('TableCRM', 'Estado'), key: 'c7', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Categoria'), key: 'c8', width: 100, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'Id'), key: 'c9', width: 100, hidden: true, editor: { type: 'text' } },
                       { headerText: getMsgTranslated('TableCRM', 'GuidAct'), key: 'c10', width: 100, hidden: true, editor: { type: 'text' } }
                ]
            });


            $(element).on("etiRowSelected", function (evt, ui) {
                MyShell().Ribbon.SendCommand('', 'SL', MyShell().Eticadata.Common.CommandsERM.EditarActividades, ui.row.c10)
            });

        }



        var funct = config.viewModelVar.AfterLoadEntity;

        config.viewModelVar.AfterLoadEntity = function (viewModel) {
            funct.call(this, viewModel);
            CallLoad(viewModel, self)
        }

        if (self.viewModelVar.CurrentEntity) {
            CallLoad(self.viewModelVar, self)
        }
    }

    EtiActivitiesEntity.prototype = {
        constructor: EtiActivitiesEntity
    };


    function CallLoad(viewModel, self) {
        var codeTable = viewModel.myMetaData.CodTable;
        if (self.codeTable) {
            codeTable = self.codeTable;
        }
        LoadActivitiesEntity(viewModel.GetEntityKeys(), codeTable, self.element, viewModel.CurrentEntity.IsNew(), self.sendMode);
    }


    $.fn.etiActivitiesEntity = function () {
        var args = arguments;
        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiActivitiesEntity', (data = new EtiActivitiesEntity(this, args[0])));
            }
        });
    };

    var EtiTimeZones = function (element, config) {

        var self = this;
        self.element = $(element);

        var html = '<div style="width:100%" class="form-control" id="eti_EtiTimezones_' + element.id + '" data-eti-type="combo" data-eti-listtype="FIX" data-eti-listparam=""  data-bind="value: ' + config.value + '" data-eti-valuecol="1" data-eti-displaycol="2" data-eti-validated="Y" data-toggle="tooltip" title="Fuso Horário"></div>';

        $('#' + element.id).html(html);
        ApplyEtiComponents();

        LoadTimezones(function (data) {
            var tz = [];

            for (var i = 0; i < data.length; i++) {
                tz.push(data[i].Id + "|" + data[i].DisplayName);
            }
            EtiComponentSetProperty("eti_EtiTimezones_" + element.id, 'listparam', tz.join(";").replace(/'/g, " "));

        });

        self.element.on({
            change: $.proxy(this.change, this),
            setProperty: $.proxy(this.setProperty, this)
        });

    }



    function LoadTimezones(action) {
        if (!MyShell().Cache.GetItem("eti_timezones_cached_list")) {
            $.ajax({
                url: GetUrlBase() + "api/Tables/GetTimezones",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                cache: false,
                async: false,
                success: function (data) {
                    MyShell().Cache.SetItem("eti_timezones_cached_list", data);
                    action(data);
                },
                error: function (d) {
                    showErrorAjax(d);
                }
            });

        }
        else {
            action(MyShell().Cache.GetItem("eti_timezones_cached_list"));
        }

    }

    EtiTimeZones.prototype = {
        constructor: EtiTimeZones,

        change: function (e) {
            var self = this;

        },

        setProperty: function (e, ui) {
            var self = this;
        }



    };
    $.fn.etiTimeZones = function () {
        var args = arguments;
        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiTimeZones', (data = new EtiTimeZones(this, args[0])));
            }
        });
    };

    //// EDITOR HTML
    var EtiHTMLEditor = function (element, config) {
        var self = this;
        self.element = $(element);
        $(element)[0].isHtml = false;
        var onlyText = false;
        if (config.onlyText)
            onlyText = config.onlyText



        ApplyStylesHTMLEditor(element.id, onlyText);


        var cstsToolBar = [];

        if (!onlyText) {
            cstsToolBar.push(
                   {
                       name: "Upload",
                       collapseButtonIcon: "ui-igbutton-collapse",
                       expandButtonIcon: "ui-igbutton-expand",
                       items: [{
                           name: "appendUpload",
                           type: "button",
                           handler: appendUpload,
                           scope: this,
                           props: {
                               elementId: {
                                   value: element.id
                               },
                               isImage: {
                                   value: false,
                                   action: '_isSelectedAction'
                               },
                               imageButtonTooltip: {
                                   value: getMsgTranslated('TableCRM', 'Upload Imagem'),
                                   action: '_tooltipAction'
                               },
                               imageButtonIcon: {
                                   value: "ui-icon-upload",
                                   action: '_buttonIconAction'
                               }
                           }
                       }]
                   });
        }


        $(element).igHtmlEditor({
            width: "98%",
            height: "98%",// $(element)[0].parentElement.clientHeight + "px",
            workspaceResized: function (evt, ui) {
                // var x = ui.owner

                ui.owner.workspace.style.height = this.parentElement.clientHeight - 55 + "px";// window.outerHeight - 565 + "px";
                ui.owner.element[0].style.height = this.parentElement.clientHeight + "px";
                //window.outerHeight - 620 + "px"
                //document.getElementById("htmlEditor_editor").style.height = window.outerHeight - 620 + "px";
                var d = ui;
            },
            rendered: function (evt, ui) {
                //return reference to igHtmlEditor object


                $("#" + element.id + "_toolbars_textToolbar_item_Bold").attr("title", getMsgTranslated('TableCRM', 'Negrito'));
                $("#" + element.id + "_toolbars_textToolbar_item_Italic").attr("title", getMsgTranslated('TableCRM', 'Itálico'));
                $("#" + element.id + "_toolbars_textToolbar_item_Underline").attr("title", getMsgTranslated('TableCRM', 'Sublinhado'));
                $("#" + element.id + "_toolbars_textToolbar_item_fontFamily").attr("title", getMsgTranslated('TableCRM', 'Tipo de Letra'));
                $("#" + element.id + "_toolbars_textToolbar_item_fontFamily > div > div").attr("title", getMsgTranslated('TableCRM', 'Tipo de Letra'));

                $("#" + element.id + "_toolbars_textToolbar_fontSize").attr("title", getMsgTranslated('TableCRM', 'Tamanho do Tipo de Letra'));
                $("#" + element.id + "_toolbars_textToolbar_fontSize > div > div").attr("title", getMsgTranslated('TableCRM', 'Tipo de Letra'));

                $("#" + element.id + "_toolbars_formattingToolbar_item_justifyleft").attr("title", getMsgTranslated('TableCRM', 'Alinhar à Esquerda'));
                $("#" + element.id + "_toolbars_formattingToolbar_item_justifycenter").attr("title", getMsgTranslated('TableCRM', 'Alinhar ao Centro'));
                $("#" + element.id + "_toolbars_formattingToolbar_item_justifyright").attr("title", getMsgTranslated('TableCRM', 'Alinhar à Direita'));
                $("#" + element.id + "_toolbars_formattingToolbar_item_justifyfull").attr("title", getMsgTranslated('TableCRM', 'Justificar'));
                $("#" + element.id + "_toolbars_formattingToolbar_item_textColor_textColor").attr("title", getMsgTranslated('TableCRM', 'Cor do Tipo de Letra'));

                if (!onlyText) {
                    $("#" + element.id + "_toolbars_insertObjectToolbar_item_image").attr("title", getMsgTranslated('TableCRM', 'Adicionar uma Imagem'));
                    $("#" + element.id + "_toolbars_insertObjectToolbar_item_link").attr("title", getMsgTranslated('TableCRM', 'Adicionar uma Hiperligação'));
                }

                ui.owner
            },
            rendering: function (evt, ui) {
                //return reference to igHtmlEditor object
                ui.owner
            },
            actionExecuted: function (evt, ui) {
                setTimeout(function () { triggerChangeEvent(); }, 270);
            },

            actionExecuting: function (evt, ui) {


                //return reference to igHtmlEditor object
                ui.owner
                //return toolbar name
                ui.toolbar;
                //return action name
                ui.actionName;

            },
            customToolbars: cstsToolBar
        });
        $(element).on('change', function () {
            setTimeout(function () { triggerChangeEvent(); }, 270);
        });

        //$(element).find('iframe').contents().find("p").css("margin", "0px");

        var iframe = $(element).find('iframe')

        // iframe.load(function () {
        iframe.contents().find("head").append($("<style type='text/css'>  p{margin:0px;}  </style>"));

        //iframe = null;
        //});
        if (config.fnChanges) {
            $(iframe.contents()[0]).bind('mouseup', function () {
                if (iframe.contents()[0].body)
                    iframe.contents()[0].body.focus()

                setSelection(this)
            });


            function setSelection(obj) {
                if (obj.getSelection !== undefined) {
                    if (obj.getSelection().focusNode && obj.getSelection().focusNode.nodeName.toUpperCase() == "BODY") {
                        focusElement = obj.body
                    }
                    else {
                        focusElement = obj.getSelection().focusNode;
                    }

                } else {
                    selectionRange = obj.selection.createRange();
                }
            }


            var workspace = $('#' + element.id + '_editor');
            var sTimeOut = 0;

            $(workspace[0].contentWindow.document).on('change keyup paste cut input dragend drop', function () {

                clearTimeout(sTimeOut);
                sTimeOut = setTimeout(function () { triggerChangeEvent(); clearTimeout(sTimeOut); }, 270);

            });

            function triggerChangeEvent() {


                $(workspace[0].contentWindow.document).find("font").each(function () {
                    this.color = colorToHex(this.color);
                });

                //var tesst = $(element).igHtmlEditor("getContentEditor", "text");
                var text = $('#' + element.id).etiHTMLEditor("getContentEditor", "text");
                var html = $(element).igHtmlEditor("getContent", "html");
                if (text.trim() == "" && !html.toLowerCase().contains("<img")) {
                    $(element).igHtmlEditor("setContent", "", "html");
                    html = "";
                }
                $(iframe.contents()[0]).mouseup();
                config.fnChanges.call(this, $(element)[0].isHtml ? html : text);

            }



            function colorToHex(color) {
                if (color.substr(0, 1) === '#') {
                    return color;
                }
                else if (color == "") {
                    return "#000000";
                }

                var colours = {
                    "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
                    "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
                    "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
                    "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
                    "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
                    "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
                    "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
                    "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
                    "honeydew": "#f0fff0", "hotpink": "#ff69b4",
                    "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
                    "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
                    "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
                    "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
                    "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
                    "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
                    "navajowhite": "#ffdead", "navy": "#000080",
                    "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
                    "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
                    "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
                    "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
                    "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
                    "violet": "#ee82ee",
                    "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
                    "yellow": "#ffff00", "yellowgreen": "#9acd32"
                };
                if (typeof colours[color.toLowerCase()] != 'undefined')
                    return colours[color.toLowerCase()];

                var digits = /(.*?)rgb\((\d+),(\d+),(\d+)\)/.exec(color);

                var red = parseInt(digits[2]);
                var green = parseInt(digits[3]);
                var blue = parseInt(digits[4]);

                var rgb = blue | (green << 8) | (red << 16);
                return digits[1] + '#' + rgb.toString(16);
            };

            //$(element).on('change',config.fnChanges) ;

            //$(function (e,s,d) {
            //    // Handler for .ready() called.

            //    $(element).trigger('workspaceResized');
            //});

            //document.addEventListener("DOMContentLoaded", function (event) {
            //    $(element).trigger('workspaceResized');
            //});
            //$(window).load(
            //    function () {
            //        $(element).trigger('workspaceResized');
            //    });
            //$(element).load(function () {
            //    $(element).trigger('workspaceResized');
            //});
            //    $(document).load(function () {
            //        $(element).trigger('workspaceResized');
            //    });
        }

        self.element.on({
            setEditorHTML: $.proxy(this.setEditorHTML, this),
            setEditorText: $.proxy(this.setEditorText, this),
            getContentEditor: $.proxy(this.getContentEditor, this),
            setContentEditor: $.proxy(this.setContentEditor, this),
            setDisabledEditor: $.proxy(this.setDisabledEditor, this),
            resize: $.proxy(this.resize, this)
        });
    };
    EtiHTMLEditor.prototype = {
        constructor: EtiHTMLEditor,
        setEditorHTML: function () {
            var args = arguments;
            var self = this;
            var editorContent = $("#" + self.element[0].id + "").igHtmlEditor("getContent", "html");
            $("#" + self.element[0].id + "").igHtmlEditor("setContent", editorContent, "html");
            $("#" + self.element[0].id + "_toolbars").css("display", "block");
            $("#" + self.element[0].id + "_content.ui-ightmleditor-content").css("padding", "0px 5px 0px 5px");
            $("#" + self.element[0].id + "_content.ui-ightmleditor-content").css("height", "calc(100% - 40px)");
            $("#" + self.element[0].id + "")[0].isHtml = true;
            if (args[1] != null && args[1])
                $("#" + self.element[0].id + "").trigger('change');

        },
        setEditorText: function () {
            var args = arguments;
            var self = this;
            //var editorContent = $("#" + self.element[0].id + "").igHtmlEditor("getContent", "html");
            //$("#" + self.element[0].id + "").igHtmlEditor("setContent", editorContent, "html");
            var contentAsText = $("#" + self.element[0].id + "").etiHTMLEditor("getContentEditor", "text");
            $("#" + self.element[0].id + "").etiHTMLEditor("setContentEditor", contentAsText, "text");
            $("#" + self.element[0].id + "_toolbars").css("display", "none");

            $("#" + self.element[0].id + "_content.ui-ightmleditor-content").css("padding", "5px");
            $("#" + self.element[0].id + "_content.ui-ightmleditor-content").css("height", "100%");
            $("#" + self.element[0].id + "")[0].isHtml = false;
            if (args[1] != null && args[1])
                $("#" + self.element[0].id + "").trigger('change');
        },
        resize: function () {
            var self = this;
            if (self.element) {
                $(self.element).trigger('workspaceResized');
            }

        }

    };

    $.fn.etiHTMLEditor = function (e) {
        var args = arguments;

        if (e === "setContentEditor") {
            var txt = args[1] == null ? "" : args[1];
            //txt = txt.replace(/<style>.*?<\/style>/g, '')
            txt = txt.replace(/<style(.*?)>(.*?)<\/style>/ig, '')
            if (args[2] == "text") {
                txt = txt.replace(/\r|\n/g, '<br>');
                $(this.selector).igHtmlEditor("setContent", txt, "html");

            }
            else {
                $(this.selector).igHtmlEditor("setContent", txt, args[2]);

            }
        }

        if (e === "setDisabledEditor") {
            if (args[1] === "true")
                $(this.selector).find("iframe").contents().find("body").attr("contenteditable", "false")
            else
                $(this.selector).find("iframe").contents().find("body").attr("contenteditable", "true")
        }

        if (e === "getContentEditor") {
            if (args[1] === "text") {
                var html = $.parseHTML($(this.selector).igHtmlEditor("getContent", "html"));
                var text = "";
                if (html) {
                    $.each(html, function (i, el) {
                        if (el.innerHTML != undefined && el.innerHTML != "") {
                            if (el.innerHTML.toLowerCase() != "<br>")
                                text += el.innerText.replace(/\r?\n/g, '\n') + "\n";
                            else if (el.innerHTML != "")
                                text += "\n";
                        } else if (el.textContent != "") {
                            text += el.textContent.replace(/\r?\n/g, '\n') + "\n";
                        }

                    });
                }


                return text.trim();// $(this.selector).igHtmlEditor("getContent", "text");
            }
            else
                return $(this.selector).igHtmlEditor("getContent", "html");
        }

        return this.each(function () {
            if (!this.initiated) {
                this.initiated = true;
                var $this = $(this);
                $this.data('etiHTMLEditor', (data = new EtiHTMLEditor(this, args[0])));
            }
        });
    };

    function ApplyStylesHTMLEditor(id, onlyText) {
        var css = "span.ui-icon.ui-icon-upload {\
                  background-image: url(../../../../Themes/css/Infragistics/themes/infragistics2012/images/ui-icons_ffffff_256x240.png);\
                  background-position: -16px -96px;\
                }\
                #"+ id + " {\
                    min-height: 68px;\
                }\
                #"+ id + "_editor {\
                    min-height: 23px;\
                    height:100%!important;\
                }\
                #"+ id + ".ui-widget-content {\
                    border-radius: 2px;\
                }\
                #"+ id + "_toolbars_textToolbar_item_fontSize > div > div,\
                #"+ id + "_toolbars_textToolbar_item_fontFamily > div > div {\
                  padding: 0px;\
                }\
                #"+ id + "_toolbars_textToolbar_item_fontSize > div,\
                #"+ id + "_toolbars_textToolbar_item_fontFamily > div {\
                  height: 18px;\
                }\
                #"+ id + "_toolbars_textToolbar_item_fontSize > div input,\
                #"+ id + "_toolbars_textToolbar_item_fontFamily > div input {\
                    margin-top: -5px;\
                }\
                #"+ id + "_toolbars > span {\
                  margin: 0px;\
                  border: 0px;\
                  padding: 0px;\
                }\
                #"+ id + "_content.ui-ightmleditor-content {\
                  padding: 0px 5px 0px 5px;\
                   height:calc(100% - 40px);\
                }\
                #"+ id + "_toolbars_textToolbar_item_fontFamily {\
                  height: 18px;\
                }\
                #"+ id + "_toolbars_textToolbar_item_fontSize {\
                  height: 18px;\
                }\
                #"+ id + "_toolbars_formattingToolbar_item_textColor_textColor {\
                  height: 16px;\
                }\
                #"+ id + "_toolbars_formattingToolbar_item_textColor_arrow {\
                  height: 16px;\
                }\
                #"+ id + " > div.ui-igbutton-viewsource {\
                  display: none;\
                }\
                #"+ id + "_toolbars_textToolbar_collapseButton,\
                #"+ id + "_toolbars_copyPasteToolbar,\
                #"+ id + "_toolbars_textToolbar_item_Strikethrough,\
                #"+ id + "_toolbars_textToolbar_item_formatsList,\
                #"+ id + "_toolbars_formattingToolbar_item_InsertUnorderedList,\
                #"+ id + "_toolbars_formattingToolbar_item_InsertOrderedList,\
                #"+ id + "_toolbars_formattingToolbar_item_outdent,\
                #"+ id + "_toolbars_formattingToolbar_item_indent,\
                #"+ id + "_toolbars_formattingToolbar_item_backgroundTextColor,\
                #"+ id + "_toolbars_formattingToolbar_collapseButton,\
                #"+ id + "_toolbars_textToolbar_collapseButton,\
                #"+ id + "_toolbars_insertObjectToolbar_collapseButton,\
                #"+ id + "_toolbars_insertObjectToolbar_item_table,\
                #"+ id + "_toolbars_insertObjectToolbar_item_addRow,\
                #"+ id + "_toolbars_copyPasteToolbar_collapseButton,\
                #"+ id + "_toolbars_copyPasteToolbar_toolbar_buttons,\
                #"+ id + "_toolbars_insertObjectToolbar_item_addColumn,\
                #"+ id + "_toolbars_insertObjectToolbar_item_removeRow,\
                #"+ id + "_toolbars_insertObjectToolbar_item_removeColumn,\
                #"+ id + "_domPathToolbar,";
        if (onlyText) {
            css += "#" + id + "_toolbars_insertObjectToolbar_item_image,\
                    #" + id + "_toolbars_insertObjectToolbar_item_link,";
        }


        css += "#" + id + "_toolbars_Upload_collapseButton {\
                  display: none;\
                }\
                #"+ id + "_imageDialog_popover_contentFrame {\
                    max-height: 400px;\
                    max-width: 500px;\
                }\
                label[for=" + id + "_imageDialog_imgSrc] { font-size: 0px; }\
                label[for=" + id + "_imageDialog_imgSrc]:before { content: '" + getMsgTranslated('TableCRM', 'Url Imagem:') + "'; font-size: 11px; }\
                label[for=" + id + "_imageDialog_imgAlt] { font-size: 0px; }\
                label[for=" + id + "_imageDialog_imgAlt]:before { content: '" + getMsgTranslated('TableCRM', 'Texto Alternativo:') + "'; font-size: 11px; }\
                #" + id + "_imageDialog_btnApply{\
                                font-size: 0px;\
                                }\
                 #" + id + "_imageDialog_btnApply:before {\
                                content: '" + getMsgTranslated('TableCRM', 'Ok') + "';\
                                font-size: 12px;\
                                padding:.4em 1em;\
                                }\
                 #" + id + "_imageDialog_btnCancel_lbl {\
                                font-size: 0px;\
                                            }\
                #" + id + "_imageDialog_btnCancel_lbl:before {\
                                content: '" + getMsgTranslated('TableCRM', 'Cancelar') + "';\
                                font-size: 12px;\
                                padding:.4em 1em;\
                                }\
                #"+ id + "_linkDialog_popover_contentFrame input {\
                                margin-bottom: 0px;\
                }\
                 #" + id + "_linkDialog_btnApply_lbl{\
                                font-size: 0px;\
                                }\
                 #"+ id + "_linkDialog_btnApply_lbl:before {\
                                   content: '" + getMsgTranslated('TableCRM', 'Ok') + "';\
                                font-size: 12px;\
                                padding:.4em 1em;\
                                }\
                 #" + id + "_linkDialog_btnCancel {\
                                font-size: 0px;\
                                            }\
                #"+ id + "_linkDialog_btnCancel:before {\
                                               content: '" + getMsgTranslated('TableCRM', 'Cancelar') + "';\
                                               font-size: 12px;\
                                               padding:.4em 1em;\
                                }\
                label[for=" + id + "_linkDialog_linkHref] { font-size: 0px; }\
                label[for=" + id + "_linkDialog_linkHref]:before { content: '" + getMsgTranslated('TableCRM', 'Url:') + "'; font-size: 11px; }\
                label[for=" + id + "_linkDialog_linkDisplayText] { font-size: 0px; }\
                label[for=" + id + "_linkDialog_linkDisplayText]:before { content: '" + getMsgTranslated('TableCRM', 'Texto:') + "'; font-size: 11px; }\
                #" + id + "_linkDialog_popover_contentInner > div  > ol > li:nth-child(3){\
                    display: none;\
                }\
              .ui-igcombo-button {\
                  padding: 0px;\
              }\
              .ui-igcombo-wrapper {\
                  width: 178px;\
                  height: 24px;\
              }"
        applyTemplate(css);
    }

    ////Input Dialog


    //var EtiInputDialog = function (element, config) {

    //    var self = this;

    //    var readOnly = "readonly";
    //    var maxLength = 255;

    //    if (config.maxLength) {
    //        maxLength = config.maxLength;
    //    }

    //    if (config.readOnly != undefined && !config.readOnly) {
    //        readOnly = "";
    //    }

    //    self.element = $(element);
    //    fnInputDialog = config.fnOpen



    //    var html = '<div style="width: 100%;">';
    //    html += '<input class="form-control" id="EtiInputDialog_' + element.id + '" style="border-bottom-right-radius: 0px;border-top-right-radius: 0px; width: calc(100% - 32px); float: left;" type="text" maxlength="' + maxLength + '" ' + readOnly + '>'
    //    html += '<button style="border-width: 1px 1px 1px 0px; border-style: solid; border-color: rgb(153, 153, 153); border-radius: 0px 2px 2px 0px; border-image: none; width: 32px; height: 24px;  text-align: center;line-height: 0px;" onclick="fnInputDialog()">...</button>'
    //    html += '</div>'

    //    $('#' + element.id).html(html);
    //    if (config.mask) {
    //        $('#EtiInputDialog_' + element.id).val(config.mask);
    //    }

    //    ApplyEtiComponents();

    //    self.element.on({
    //        setProperty: $.proxy(this.setProperty, this),
    //        change: $.proxy(this.change, this),
    //        update: $.proxy(this.update, this)
    //    });
    //}


    //EtiInputDialog.prototype = {
    //    constructor: EtiInputDialog,

    //    change: function (e, valueBag) {
    //        e.uiChange = (valueBag === true);

    //    },
    //    setProperty: function (e, ui) {
    //        var self = this;
    //        if (e.target == self.element[0]) {
    //            var newValue;
    //            if (ui.name == 'readonly') {
    //                $('#EtiInputDialog_' + self.element[0].id).prop('readonly', ui.value)
    //            }
    //            else if (ui.name == 'disabled') {
    //                $('#EtiInputDialog_' + self.element[0].id).prop('disabled', ui.value)
    //            }
    //        }
    //    },
    //    update: function (e, parent) {
    //        var self = this;
    //        $("#EtiInputDialog_" + self.element[0].id).val($('#' + self.element[0].id).val());

    //    }

    //};
    //$.fn.etiInputDialog = function (e) {
    //    var args = arguments;

    //    if (e === "setMask") {
    //        $("#EtiInputDialog_" + this[0].id).val(args[1])
    //    }


    //    return this.each(function () {
    //        if (!this.initiated) {
    //            this.initiated = true;
    //            var $this = $(this);
    //            $this.data('etiInputDialog', (data = new EtiInputDialog(this, args[0])));
    //        }
    //    });
    //};


}(window.jQuery);


function SetAttachsFromCommand(attachs) {

    if (fnCallBack) {

        var atch = attachs.split(';');
        var box = {
            numFiles: atch.length,
            files: []
        }
        for (var i = 0; i < atch.length; i++) {
            var pth = atch[i].split('|');
            box.files.push({
                file: null,
                path: pth[0],
                label: pth[0].split('\\')[pth[0].split('\\').length - 1],
                size: pth[1],
            });
        }
        $('#eti_EtiOpenDialogBox').unbind();
        fnCallBack.call(this, box);
        fnCallBack = null;
    }

}

var fnCallBack;

var EtiOpenDialogBox = function (wildcards, multiple, loadFile, onLoaded) {

    fnCallBack = onLoaded;

    var txtWillcards = Eticadata.ERP.EtiEnums.EtiFileManagerFilter.GetFilterType(wildcards);

    txtWillcards = txtWillcards.split("|")[1].replace(/\*/g, "").replace(/\;/g, ",");
    if (!MyShell().Environment.Config.IsSaas) {

        if (!$('#eti_EtiOpenDialogBox')[0]) {

            var x = document.createElement("input");
            x.setAttribute("type", "file");
            x.setAttribute("id", "eti_EtiOpenDialogBox");
            x.setAttribute("accept", txtWillcards);
            x.setAttribute("style", "display:none");
            if (multiple) {
                x.setAttribute("multiple", true);
            }
            document.documentElement.appendChild(x);

        }
        else {
            $('#eti_EtiOpenDialogBox').attr("accept", txtWillcards);
            $('#eti_EtiOpenDialogBox').val("");
            if (multiple) {
                $('#eti_EtiOpenDialogBox').attr("multiple", multiple);
            }
        }
    }
    else {
        MyShell().Dialog.ShowHtmlDialog('#/Client/Generic/ModalDialogs/FileExplorer/FileExplorer.html', 800, 400, '{ "action": ' + Eticadata.ERP.EtiEnums.enumTipoDialogo.OpenDialog + ', "fileTypes": [' + wildcards + '], "selectedType": -1 }', function (p) {
            var files = [];
            var bts = [];

            if (wildcards == Eticadata.ERP.EtiEnums.FilterType.EXT_JPG_PNG) {

                var attachPaths = p.map(function (a) { return a.path; });

                $.ajax({
                    url: GetUrlBase() + "api/FileExplorer/GetBase64Images",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ paths: attachPaths }),
                    cache: false,
                    async: false,
                    success: function (data) {
                        bts = data;
                    },
                    error: function (d) {
                        showErrorAjax(d);
                    }
                });
            }


            for (var i = 0, len = p.length; i < len; i++) {
                var aux = p[i].path.split('\\');
                var label = aux[aux.length - 1];
                files.push({ label: label, path: p[i].path, size: (p[i].size * 1024), resultB64: bts[i] });
            }
            onLoaded.call(this, { files: files, numFiles: files.length })
        });

    }
    var fnOdB = function (s) {

        var vld = CheckFileName($('#eti_EtiOpenDialogBox'));
        if (vld) {


            var input = $(this);
            files = input.get(0).files;
            numFiles = files ? files.length : 1;

            var reader = new FileReader();


            var box = {
                numFiles: numFiles,
                files: []
            }

            function readFile(index) {
                if (index >= files.length) {
                    $('#eti_EtiOpenDialogBox').unbind();
                    onLoaded.call(this, box);
                    return;
                }

                var file = files[index];


                label = file.name;
                size = file.size;
                if (loadFile) {
                    reader.onload = function (e) {
                        var b64 = "";
                        var ass = "";
                        if (this.result) {
                            ass = this.result.split(';')[0] + ";base64,"
                            b64 = this.result.split(';')[1].replace('base64,', '');
                        }

                        box.files.push({
                            file: file,
                            path: input.val().split(",")[index],
                            label: label,
                            size: size,
                            resultAss: ass,
                            resultB64: b64,
                            readyState: this.readyState
                        });

                        readFile(index + 1)
                    }
                    reader.readAsDataURL(file);
                }
                else {
                    box.files.push({
                        file: file,
                        path: input.val(),
                        label: label,
                        size: size,
                    });
                    readFile(index + 1)
                }
            }

            readFile(0);

        }
        else {
            MyShell().Dialog.showMessageBox(0, 0, "info", getMsgTranslated("generic", "ERP eticadata"), getMsgTranslated("generic", "Selecione um ficheiro válido."), "Ok")
        }
    }

    $('#eti_EtiOpenDialogBox').on('change', fnOdB);
    $('#eti_EtiOpenDialogBox').on('click', function (e) {
        document.body.onfocus = roar
    });
    function roar() {
        if ($('#eti_EtiOpenDialogBox').val().length <= 0) {
            $('#eti_EtiOpenDialogBox').val("");
            document.body.onfocus = null;
        }

    }

    return $('#eti_EtiOpenDialogBox');
}


EtiOpenDialogBox.Open = function (wildcards, multiple, loadFile, onLoaded) {
    var el = EtiOpenDialogBox.call(this, wildcards, multiple, loadFile, onLoaded);
    el.focus().trigger('click');
}

function CheckFileName(elem) {

    var fileName = elem.val();
    var wildcards = elem.attr("accept").split(",");

    var isValidFile = (elem.attr("accept").indexOf("*.*") > -1 ? true : false);
    if (!isValidFile) {
        for (var i = 0; i < wildcards.length; i++) {
            var suffix = wildcards[i].toUpperCase().split(".")[1];
            if (fileName.toUpperCase().indexOf(suffix, fileName.toUpperCase().length - suffix.length) !== -1) {
                isValidFile = true;
                break;
            }
        }
    }

    if (fileName == "") {
        return false;
    }
    else if (isValidFile) {
        //alert("A Valid file is attached !");
        return true;
    }
    else {
        //alert("Not a Valid extension!");
        return false;
    }

}


function guessImageMime(data) {
    var result = '';
    if (data.charAt(0) == '/') {
        result = "image/jpeg";
    } else if (data.charAt(0) == 'R') {
        result = "image/gif";
    } else if (data.charAt(0) == 'i') {
        result = "image/png";
    }
    return 'data:' + result + ';base64,';
}


var appendUpload = function (ui, target) {

    var id = target.itemProperties["elementId"].value;

    EtiOpenDialogBox.Open(Eticadata.ERP.EtiEnums.FilterType.EXT_JPG_PNG, false, true, function (e) {
        var nf = e.numFiles;
        var f = e.files;

        if (f[0].resultAss == undefined) { f[0].resultAss = guessImageMime(f[0].resultB64); }

        var addedText = "<img src='" + f[0].resultAss + f[0].resultB64 + "' alt=''/>";
        if (focusElement !== undefined) {

            if ($(focusElement)[0] && $(focusElement)[0].nodeName.toUpperCase() == "BODY") {
                $(focusElement).append(addedText);
            }
            else {
                $(focusElement).after(addedText);
            }

        } else if (selectionRange !== undefined) {  //IE7 and IE8
            selectionRange.pasteHTML(addedText);
        } else {
            var currentContent = $("#" + id + "").igHtmlEditor("getContent", "html");
            $("#" + id + "").igHtmlEditor("setContent", currentContent + addedText, "html");
        }
        $("#" + id + "").trigger('change');
    });

}