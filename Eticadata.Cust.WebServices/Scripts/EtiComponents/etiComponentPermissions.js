var EtiPermissions = (function () {
    function EtiPermissions(element, options) {
        var self = this;
        self.element = $(element);
        self.element.on({
            updatePermitions: $.proxy(this.updatePermitions, this),
            setPermsToAll: $.proxy(this.setPermsToAll, this),
            resizeGrids: $.proxy(this.resizeGrids, this)
        });

        self.elementIn = element;

        var companyGridId = "C" + Date.now();
        var groupGridId = "G" + Date.now();
        var userGridId = "U" + Date.now();

        self.elementIn.innerHTML = "<div style='height: 100%; width: 100%;'>" +
                "<div style='width: 33%; float: left; height: 20px; font-weight: bold; padding: 0px 10px 0px 0px;'>" + getMsgTranslated('Admin', 'Empresas') + "</div>" +
                "<div style='width: 33%; float: left; height: 20px; font-weight: bold; padding: 0px 10px 0px 0px;'>" + getMsgTranslated('Admin', 'Grupos') + "</div>" +
                "<div style='width: 34%; float: left; height: 20px; font-weight: bold; padding: 0px 10px 0px 0px;'>" + getMsgTranslated('Admin', 'Utilizadores') + "</div>" +
                "<div style='clear: both;'></div>" +
                "<div style='height: calc(100% - 20px); width: 33%; float: left; padding: 0px 10px 0px 0px;'><div id='" + companyGridId + "' style='height: 100%; width: 100%;'></div></div>" +
                "<div style='height: calc(100% - 20px); width: 33%; float: left; padding: 0px 10px 0px 0px;'><div id='" + groupGridId + "' style='height: 100%; width: 100%;'></div></div>" +
                "<div style='height: calc(100% - 20px); width: 34%; float: left; padding: 0px 10px 0px 0px;'><div id='" + userGridId + "' style='height: 100%; width: 100%;'></div></div>" +
                "<div style='clear: both;'></div>" +
                "</div>";

        self.CompanyGrid = $("#" + companyGridId);
        self.GroupGrid = $("#" + groupGridId);
        self.UserGrid = $("#" + userGridId);

        self.myPermCompaniesSet = [];
        self.myPermGroupsSet = [];
        self.myPermUsersSet = [];

        self.Permissions = [];
        self.InRefresh = false;

        self.CompanyGrid.etiGrid({
            config: { widthMode: '%', orderable: false, filterable: false, resizable: false },
            editing: { add: false, remove: false, allow: true, disabled: false },
            customPopup: [{ icon: 'Geral/Varios/UtilizadoresPermissao.16.png', text: getMsgTranslated('Admin', 'Todas com Permissão'), funcName: ' $("#' + self.elementIn.id + '").setPermsToAll(2, 1);' },
                          { icon: 'Geral/Varios/UtilizadoresSemPermissao.16.png', text: getMsgTranslated('Admin', 'Todas sem Permissão'), funcName: ' $("#' + self.elementIn.id + '").setPermsToAll(2, 0);' }],
            cols: [
                { headerText: getMsgTranslated('Admin', 'Cod.'), key: 'Code', width: 20, editor: { type: 'text', locked: true } },
                { headerText: getMsgTranslated('Admin', 'Descrição'), key: 'Desc', width: 60, editor: { type: 'text', locked: true } },
                { headerText: ' ', key: 'PermImg', width: 20, editor: { type: 'image', imageType: 'url' } }
            ],
            rows: []
        });

        self.GroupGrid.etiGrid({
            config: { widthMode: '%', orderable: false, filterable: false, resizable: false },
            editing: { add: false, remove: false, allow: true, disabled: false },
            customPopup: [{ icon: 'Geral/Varios/UtilizadoresPermissao.16.png', text: getMsgTranslated('Admin', 'Todos com Permissão'), funcName: ' $("#' + self.elementIn.id + '").setPermsToAll(1, 1);' },
                          { icon: 'Geral/Varios/UtilizadoresSemPermissao.16.png', text: getMsgTranslated('Admin', 'Todos sem Permissão'), funcName: ' $("#' + self.elementIn.id + '").setPermsToAll(1, 0);' }],
            cols: [
                { headerText: getMsgTranslated('Admin', 'Cod.'), key: 'Code', width: 20, editor: { type: 'text', locked: true } },
                { headerText: getMsgTranslated('Admin', 'Descrição'), key: 'Desc', width: 60, editor: { type: 'text', locked: true } },
                { headerText: ' ', key: 'PermImg', width: 20, editor: { type: 'image', imageType: 'url' } }
            ],
            rows: []
        });

        self.UserGrid.etiGrid({
            config: { widthMode: '%', orderable: false, filterable: false, resizable: false },
            editing: { add: false, remove: false, allow: true, disabled: false },
            cols: [
                { headerText: getMsgTranslated('Admin', 'Nome'), key: 'Desc', width: 40, editor: { type: 'text', locked: true } },
                { headerText: getMsgTranslated('Admin', 'Grupo'), key: 'GroupD', width: 40, editor: { type: 'text', locked: true } },
                { headerText: ' ', key: 'PermImg', width: 20, editor: { type: 'image', imageType: 'url' } }
            ],
            rows: []
        });

        self.CompanyGrid.on("etiDblClick", function (evt, ui) {
            if (ui.key == "PermImg") {
                if (ui.row.Perm == 1) {
                    ui.row.Perm = 0;
                    ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissao.16.png";
                    self.GridUpdated(2, ui.row.Code, 0);
                } else {
                    ui.row.Perm = 1;
                    ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                    self.GridUpdated(2, ui.row.Code, 2);
                }
                self.CompanyGrid.refreshData();
            }
        });

        self.GroupGrid.on("etiDblClick", function (evt, ui) {
            if (ui.key == "PermImg") {
                if (ui.row.Perm == 1) {
                    ui.row.Perm = 0;
                    ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissao.16.png";
                    self.GridUpdated(1, ui.row.Code, 0);
                } else {
                    ui.row.Perm = 1;
                    ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                    self.GridUpdated(1, ui.row.Code, 2);
                }
                self.GroupGrid.refreshData();

                var blnRefresh = false;
                var myRows = self.UserGrid.getProperty("rows");
                for (var i = 0; i < myRows.length; i++) {
                    if (myRows[i].GroupC == ui.row.Code) {
                        if (myRows[i].Perm == 2) {
                            blnRefresh = true;
                            if (ui.row.Perm == 0) {
                                myRows[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissaoGrupo.16.png";
                            } else {
                                myRows[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissaoGrupo.16.png";
                            }
                        }
                    }
                }
                if (blnRefresh) {
                    self.UserGrid.refreshData();
                }
            }
        });

        self.UserGrid.on("etiDblClick", function (evt, ui) {
            if (ui.key == "PermImg") {
                if (ui.row.Perm == 0) {
                    ui.row.Perm = 1;
                    ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                    self.GridUpdated(0, ui.row.Code, 1);
                } else if (ui.row.Perm == 1) {
                    ui.row.Perm = 2;
                    var myRows = self.GroupGrid.getProperty("rows").filter(function (f) { return f.Code == ui.row.GroupC })
                    if (myRows.length == 0) {
                        ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissaoGrupo.16.png";
                        self.GridUpdated(0, ui.row.Code, 2);
                    } else {
                        if (myRows[0].Perm == 1) {
                            ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissaoGrupo.16.png";
                            self.GridUpdated(0, ui.row.Code, 2);
                        } else {
                            ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissaoGrupo.16.png";
                            self.GridUpdated(0, ui.row.Code, 2);
                        }
                    }
                } else {
                    ui.row.Perm = 0;
                    ui.row.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissao.16.png";
                    self.GridUpdated(0, ui.row.Code, 0);
                }
                self.UserGrid.refreshData();
            }
        });

        var lsts = MyShell().ListCaching.GetListInCache("EtiPermissions", "", "", false);
        if (lsts == null) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    lsts = JSON.parse(xhttp.responseText);
                    MyShell().ListCaching.AddListInCache("EtiPermissions", "", "", lsts);
                    self.Proceed(self, lsts);
                }
            };
            xhttp.open("GET", GetUrlBase() + "api/Generic/GetPermissionLists", true);
            xhttp.send();
        }
        else {
            self.Proceed(self, lsts);
        }
    }

    EtiPermissions.prototype.Proceed = function (self, lsts) {
        self.myPermUsersSet = lsts.Users;
        self.myPermCompaniesSet = lsts.Companies;
        self.myPermGroupsSet = lsts.Groups;
        self.updatePermitions();
    }

    EtiPermissions.prototype.GridUpdated = function (pType, pCode, pValue) {
        var self = this;
        if (pCode == "EtiForAll") {
            var myRows = self.Permissions.filter(function (f) { return f.Type == pType });
            for (var i = 0; i < myRows.length; i++) {
                var index = self.Permissions.indexOf(myRows[i]);
                if (index != -1) {
                    self.Permissions.splice(index, 1);
                }
            }
            if (pValue == 0) {
                if (pType == 1) {
                    var myRows = self.GroupGrid.getProperty("rows");
                    for (var i = 0; i < myRows.length; i++) {
                        self.Permissions.push({ Type: 1, Entity: myRows[i].Code, Permission: 0, IsNew: true });
                    }
                }
                if (pType == 2) {
                    var myRows = self.CompanyGrid.getProperty("rows");
                    for (var i = 0; i < myRows.length; i++) {
                        self.Permissions.push({ Type: 2, Entity: myRows[i].Code, Permission: 0, IsNew: true });
                    }
                }
            }

        } else {
            var myRows = self.Permissions.filter(function (f) { return f.Type == pType && f.Entity == pCode });
            if (myRows.length == 1) {
                var index = self.Permissions.indexOf(myRows[0]);
                if (index != -1) {
                    self.Permissions.splice(index, 1);
                }
            }
            if (pValue == 0 || pValue == 1) {
                self.Permissions.push({ Type: pType, Entity: pCode, Permission: pValue, IsNew: true });
            }
        }

        $(self.elementIn).trigger("Updated");
    }    

    EtiPermissions.prototype.updatePermitions = function (e) {
        var self = this;
        self.InRefresh = true;
        self.updateCompanies(e);
        self.updateGroups(e);
        self.updateUsers(e);
        self.InRefresh = false;
    },

    EtiPermissions.prototype.resizeGrids = function (e) {
        var self = this;
        self.CompanyGrid.resizeGrid();
        self.GroupGrid.resizeGrid();
        self.UserGrid.resizeGrid();
    },

    EtiPermissions.prototype.setPermsToAll = function (e, ui) {
        var self = this;
        if (ui.TpPerm == 2) {
            var myRows = self.CompanyGrid.getProperty("rows");
            for (var i = 0; i < myRows.length; i++) {
                if (ui.Value == 0) {
                    myRows[i].Perm = 0;
                    myRows[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissao.16.png";
                } else {
                    myRows[i].Perm = 1;
                    myRows[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                }
            }
            if (ui.Value == 0) {
                self.GridUpdated(2, "EtiForAll", 0);
            } else {
                self.GridUpdated(2, "EtiForAll", 1);
            }
            self.CompanyGrid.refreshData();

        } else if (ui.TpPerm == 1) {
            var i, j;
            var myRowsG = self.GroupGrid.getProperty("rows");
            for (i = 0; i < myRowsG.length; i++) {
                if (ui.Value == 0) {
                    myRowsG[i].Perm = 0;
                    myRowsG[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissao.16.png";
                } else {
                    myRowsG[i].Perm = 1;
                    myRowsG[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                }
            }
            if (ui.Value == 0) {
                self.GridUpdated(1, "EtiForAll", 0);
            } else {
                self.GridUpdated(1, "EtiForAll", 1);
            }
            self.GroupGrid.refreshData();

            var blnRefresh = false;
            var myRowsU = self.UserGrid.getProperty("rows");
            for (var j = 0; j < myRowsG.length; j++) {
                for (var i = 0; i < myRowsU.length; i++) {
                    if (myRowsU[i].GroupC == myRowsG[j].Code) {
                        if (myRowsU[i].Perm == 2) {
                            blnRefresh = true;
                            if (myRowsG[j].Perm == 0) {
                                myRowsU[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissaoGrupo.16.png";
                            } else {
                                myRowsU[i].PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissaoGrupo.16.png";
                            }
                        }
                    }
                }
            }
            if (blnRefresh) {
                self.UserGrid.refreshData();
            }
        }
    },

	EtiPermissions.prototype.updateCompanies = function (e) {
	    this.updateItems(2, this.myPermCompaniesSet, this.CompanyGrid);
	}

    EtiPermissions.prototype.updateGroups = function (e) {
        this.updateItems(1, this.myPermGroupsSet, this.GroupGrid);
    }

    EtiPermissions.prototype.updateUsers = function (e) {
        this.updateItems(0, this.myPermUsersSet, this.UserGrid);
    }

    EtiPermissions.prototype.updateItems = function (type, PermsSet, grid) {
        var myRows;
        for (var i = 0; i < PermsSet.length; i++) {
            var pSet = PermsSet[i];
            myRows = this.Permissions.filter(function (f) { return f.Type == type && f.Entity == pSet.Code })
            if (myRows.length == 0) {
                if (type == 0) {
                    myRows = this.Permissions.filter(function (f) { return f.Type == 1 && f.Entity == pSet.GroupC })
                    pSet.Perm = 2;
                    if (myRows.length == 0) {
                        pSet.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissaoGrupo.16.png";
                    } else {
                        if (myRows[0].Permission == true) {
                            pSet.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissaoGrupo.16.png";
                        } else {
                            pSet.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissaoGrupo.16.png";
                        }
                    }
                } else {
                    pSet.Perm = 1;
                    pSet.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                }
            } else {
                if (myRows[0].Permission == true) {
                    pSet.Perm = 1;
                    pSet.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresPermissao.16.png";
                } else {
                    pSet.Perm = 0;
                    pSet.PermImg = "#/Imagens/Icons/Geral/Varios/UtilizadoresSemPermissao.16.png";
                }
            }
        }
        grid.setProperty("rows", PermsSet);
    }

    EtiPermissions.prototype.setValue = function (property, value) {
        if (property === 'Permissions') {
            this.Permissions = value;
            this.updatePermitions();
        }
    }

    return EtiPermissions;
})();

$.fn.resizeGrids = function () {
    $(this).trigger("resizeGrids");
}

$.fn.setPermsToAll = function (pTpPerm, pValue) {
    $(this).trigger("setPermsToAll", { TpPerm: pTpPerm, Value: pValue });
}

$.fn.etiPermissions = function (method, option, value) {
    var m = method;
    var o = option;
    var v = value;

    if (m == undefined) {
        return this.each(function () {
            if (this.initiated) {
                $(this).trigger("updatePermitions");
            } else {
                this.initiated = true;
                var $this = $(this);
                $this.data('EtiPermissions', (data = new EtiPermissions(this)));
            }
        });
    } else {
        var obj = $(this).data("EtiPermissions");
        if (m == "setValue") {
            obj.setValue(o, v);
        }
    }
};