//MAO 29/07/2014 Funções para suporte de Componente Eticadata (Tree)

// ************************************
// FUNCOES GENERICAS
// ************************************
var hostBase = GetUrlBase();

!function ($) {

    // ************************************
    // COMPONENTE TREE
    // ************************************

    var EtiTree = function (element, lstTree, fnc, allowDragDrop) {
        var self = this;
        self.element = $(element);
        self.elementIn = element;
        self.callbackFncTree = fnc;

        self.hasExpandedBakups = false;

        self.allowDragDrop = !!allowDragDrop;

        self.blnFoldersOnly = false;
        var sFoldersOnly = self.element.data('eti-foldersonly');
        if (sFoldersOnly) {
            if (sFoldersOnly.toLowerCase() == "y" || sFoldersOnly.toLowerCase() == "s") {
                self.blnFoldersOnly = true;
            }
        }

        self.blnShowCheck = false;
        var sShowCheck = self.element.data('eti-showcheck');
        if (sShowCheck) {
            if (sShowCheck.toLowerCase() == "y" || sShowCheck.toLowerCase() == "s") {
                self.blnShowCheck = true;
            }
        }

        self.blnOverrideIcon = false;
        var sOverrideIcon = self.element.data('eti-overrideicon');
        if (sOverrideIcon) {
            if (sOverrideIcon.toLowerCase() == "y" || sOverrideIcon.toLowerCase() == "s") {
                self.blnOverrideIcon = true;
            }
        }

        self.blnHideSearch = false;
        var sHideSearch = self.element.data('eti-hidesearch');
        if (sHideSearch) {
            if (sHideSearch.toLowerCase() == "y" || sHideSearch.toLowerCase() == "s") {
                self.blnHideSearch = true;
            }
        }

        self.keyTimer = 0;
        self.keyTimerOn = false;

        self.etiTreeRefresh(element, lstTree);

        self.element.on({
            etiTreeCheckAll: $.proxy(self.etiTreeCheckAll, self),
            etiTreeUnCheckAll: $.proxy(self.etiTreeUnCheckAll, self),
            etiTreeRefresh: $.proxy(self.etiTreeRefresh, self)
        });
    };

    $.fn.etiTree = function (lstTree, fnc, allowDragDrop) {
        return this.each(function () {
            var $this = $(this)
            $this.data('etiTree', (data = new EtiTree(this, lstTree, fnc, allowDragDrop)));
        });
    };

    $.fn.etiTreeCheckAll = function () {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("etiTreeCheckAll", arguments[0]);
        }
    };

    $.fn.etiTreeUnCheckAll = function () {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("etiTreeUnCheckAll", arguments[0]);
        }
    };

    $.fn.etiTreeRefresh = function () {
        if (this.length == 1) {
            $('#' + this[0].id).trigger("etiTreeRefresh", arguments);
        }
    };

    EtiTree.prototype = {
        constructor: EtiTree,

        etiTreeCheckAll: function (e) {
            var self = this;
            var element = self.element[0];

            $('#' + element.id + ' :input').prop('checked', true);
        },

        etiTreeUnCheckAll: function (e) {
            var self = this;
            var element = self.element[0];

            $('#' + element.id + ' :input').prop('checked', false);
        },

        etiTreeRefresh: function (e, lstTree) {
            var self = this;
            var element = self.element[0];

            self.dataSource = [];

            self.elementIn.innerHTML = '<table style="width: 100%;">' +
                                        '<tr><td style="padding-left: 40px;"><div id="bot-' + element.id + '-CompTreeFinder' + '"><input type="text" id="' + element.id + '-CompTreeFinder" value="" class="inpEtiTreeFinder" /></div></td></tr>' +
                                        self.getListaItems(lstTree, 0, element.id + '-trIdTrIt', self.blnFoldersOnly, self.blnShowCheck) +
                                        '</table>';

            self.displayTree();

            if (self.blnHideSearch == true) {
                $('#' + element.id + '-CompTreeFinder').hide();
            } else {
                $('#' + element.id + '-CompTreeFinder').keyup(function () {
                    if (self.keyTimerOn) {
                        clearTimeout(self.keyTimer);
                    }
                    self.keyTimerOn = true;
                    self.keyTimer = setTimeout(function () {
                        self.displayTree();
                    }, 300);
                });
            }

            $('#' + element.id + ' a').click(function () {
                var commandStr;
                if (this.attributes['command']) {
                    commandStr = this.attributes['command'].value;
                }

                if (commandStr) {
                    var commandAttr = JSON.parse(commandStr);

                    if (commandAttr.command == "toggleItem") {
                        self.toggleItem(commandAttr.id);
                    } else {
                        self.callbackFncTree.call(self, commandAttr.value);
                    }

                    var item = self.getItem(commandAttr.id);
                    if (item != null) {
                        $("#" + element.id).trigger("ItemSelected", { id: commandAttr.id, value: item });
                    }
                }
            });

            $('#' + element.id + ' a').dblclick(function () {
                var commandStr;
                if (this.attributes['command']) {
                    commandStr = this.attributes['command'].value;
                }

                if (commandStr) {
                    var commandAttr = JSON.parse(commandStr);

                    var item = self.getItem(commandAttr.id);
                    if (item != null) {
                        $("#" + element.id).trigger("ItemDblClicked", { id: commandAttr.id, value: item });
                    }
                }
            });

            if (self.allowDragDrop == true) {
                $('#' + element.id + ' tr').each(function () {
                    this.ondragstart = function drag(ev) {
                        self.sourceId = ev.currentTarget.id;
                    };
                });

                $('#' + element.id + ' div').each(function () {
                    this.ondragover = function (ev) {
                        var isOnTop = false;
                        if (ev.currentTarget.id.indexOf("top-") == 0) {
                            isOnTop = true;
                        }
                        var targetId = ev.currentTarget.id.substring(4, ev.currentTarget.id.length);
                        var divItem = $(this);

                        $("#" + element.id).trigger("AllowDrop", {
                            sourceParent: self.getItem(self.getParent(self.sourceId)), sourceItem: self.getItem(self.sourceId), targetParent: self.getItem(self.getParent(targetId)), targetItem: self.getItem(targetId), isOnTop: isOnTop, allowDrop: function () {
                                if (isOnTop) {
                                    ev.preventDefault();
                                    if (!$(this).hasClass("divEtiTreeHint")) {
                                        divItem.addClass("divEtiTreeHint");
                                    }
                                }
                                else {
                                    ev.preventDefault();
                                    if (!$(this).hasClass("divEtiTreeHintBottom")) {
                                        divItem.addClass("divEtiTreeHintBottom");
                                    }
                                }
                                return false;
                            }
                        });

                        return true;
                    };

                    this.ondragenter = function (ev) {
                        var isOnTop = false;
                        if (ev.currentTarget.id.indexOf("top-") == 0) {
                            isOnTop = true;
                        }
                        var targetId = ev.currentTarget.id.substring(4, ev.currentTarget.id.length);
                        var divItem = $(this);

                        $("#" + element.id).trigger("AllowDrop", {
                            sourceParent: self.getItem(self.getParent(self.sourceId)), sourceItem: self.getItem(self.sourceId), targetParent: self.getItem(self.getParent(targetId)), targetItem: self.getItem(targetId), isOnTop: isOnTop, allowDrop: function () {
                                if (isOnTop) {
                                    ev.preventDefault();
                                    if (!$(this).hasClass("divEtiTreeHint")) {
                                        divItem.addClass("divEtiTreeHint");
                                    }
                                }
                                else {
                                    ev.preventDefault();
                                    if (!$(this).hasClass("divEtiTreeHintBottom")) {
                                        divItem.addClass("divEtiTreeHintBottom");
                                    }
                                }
                                return false;
                            }
                        });

                        return true;
                    };

                    this.ondragleave = function (ev) {
                        if (ev.currentTarget.id.indexOf("top-") == 0) {
                            ev.preventDefault();
                            if ($(this).hasClass("divEtiTreeHint")) {
                                $(this).removeClass("divEtiTreeHint");
                            }
                        }
                        else if (ev.currentTarget.id.indexOf("bot-") == 0) {
                            ev.preventDefault();
                            if ($(this).hasClass("divEtiTreeHintBottom")) {
                                $(this).removeClass("divEtiTreeHintBottom");
                            }
                        }

                        return false;
                    };

                    this.ondrop = function (ev) {
                        var isOnTop = false;
                        if (ev.currentTarget.id.indexOf("top-") == 0) {
                            isOnTop = true;
                            if ($(this).hasClass("divEtiTreeHint")) {
                                $(this).removeClass("divEtiTreeHint");
                            }
                        }
                        else if (ev.currentTarget.id.indexOf("bot-") == 0) {
                            if ($(this).hasClass("divEtiTreeHintBottom")) {
                                $(this).removeClass("divEtiTreeHintBottom");
                            }
                        }

                        ev.preventDefault();

                        var targetId = ev.currentTarget.id.substring(4, ev.currentTarget.id.length);

                        $("#" + element.id).trigger("ItemDropped", {
                            sourceParent: self.getItem(self.getParent(self.sourceId)), sourceItem: self.getItem(self.sourceId), targetParent: self.getItem(self.getParent(targetId)), targetItem: self.getItem(targetId), isOnTop: isOnTop
                        });
                    };
                });
            }

            if (self.blnShowCheck) {
                $('#' + element.id + ' :checkbox').change(function () {
                    var commandStr;
                    if (this.attributes['command']) {
                        commandStr = this.attributes['command'].value;
                    }

                    if (commandStr) {
                        var commandAttr = JSON.parse(commandStr);

                        if (commandAttr.command == "toggleItem") {
                            self.toggleItem(commandAttr.id);
                        } else {
                            self.callbackFncTree.call(self, commandAttr.value);
                        }
                    }
                });
            }
        },

        displayTree: function () {
            var self = this;
            var element = self.element[0];

            var txt = document.getElementById(element.id + '-CompTreeFinder').value;
            var strItId = '';
            var eles = $('[id|=' + element.id + '-trIdTrIt]');
            var itemText = "";

            if (txt) {
                if (!self.hasExpandedBakups) {
                    for (var i = 0; i < eles.length; i++) {
                        if (self.isFolder(eles[i].id)) {
                            self.getItem(eles[i].id).ExpandedBak = self.getItem(eles[i].id).Expanded;
                        }
                    }
                    self.hasExpandedBakups = true;
                }

                for (var i = 0; i < eles.length; i++) {
                    if (self.isFolder(eles[i].id)) {
                        self.getItem(eles[i].id).Expanded = false;
                    }
                }

                var pesqText = txt.trim().toLowerCase();
                var myCode = "";
                for (var i = 0; i < eles.length; i++) {
                    if (!self.isFolder(eles[i].id)) {
                        itemText = eles[i].textContent.trim().toLowerCase();
                        if (itemText.indexOf(pesqText) != -1) {
                            myCode = self.getParent(eles[i].id);
                            while (myCode.length >= element.id.length + 12) {
                                self.getItem(myCode).Expanded = true;
                                myCode = self.getParent(myCode);
                            }
                        }
                    }
                }

                itemText = "";
                for (var i = 0; i < eles.length; i++) {
                    strItId = eles[i].id;
                    if (self.isFolder(strItId)) {
                        if (self.isFolderExpanded(strItId)) {
                            self.freezeFolder(strItId);
                            self.showItem(strItId);
                        } else {
                            itemText = eles[i].textContent.trim().toLowerCase();
                            if (self.blnShowCheck && itemText.indexOf(pesqText) != -1) {
                                self.showItem(strItId);
                            } else {
                                self.hideItemPsq(strItId);
                            }
                        }
                    } else {
                        itemText = eles[i].textContent.trim().toLowerCase();
                        if (itemText.indexOf(pesqText) != -1) {
                            self.showItem(strItId);
                        } else {
                            self.hideItem(strItId);
                        }
                    }
                }

            } else {
                if (self.hasExpandedBakups) {
                    for (var i = 0; i < eles.length; i++) {
                        if (self.isFolder(eles[i].id)) {
                            self.getItem(eles[i].id).Expanded = self.getItem(eles[i].id).ExpandedBak;
                        }
                    }
                    self.hasExpandedBakups = false;
                }

                for (var i = 0; i < eles.length; i++) {
                    strItId = eles[i].id;
                    if (self.isVisible(strItId)) {
                        self.showItem(strItId);
                    } else {
                        self.hideItem(strItId);
                    }
                    if (self.isFolder(strItId)) {
                        if (self.isFolderExpanded(strItId)) {
                            self.expandFolder(strItId);
                        } else {
                            self.collapseFolder(strItId);
                        }
                    }
                }
            }
            self.keyTimerOn = false;
        },

        isVisible: function (pCode) {
            var self = this;
            var element = self.element[0];

            var myCode = self.getParent(pCode);
            while (myCode.length >= element.id.length + 12) {
                if (!self.isFolderExpanded(myCode)) {
                    return false;
                }
                myCode = self.getParent(myCode);
            }
            return true;
        },

        isFolder: function (pCode) {
            if (this.getItem(pCode).Items) {
                return (this.getItem(pCode).Items.length != 0);
            }
            return false;
        },

        isFolderExpanded: function (pCode) {
            return (this.getItem(pCode).Expanded === true);
        },

        getParent: function (pCode) {
            return pCode.substring(0, pCode.length - 5);
        },

        showItem: function (pItId) {
            document.getElementById(pItId).style.display = '';
        },

        hideItem: function (pItId) {
            var self = this;
            var element = self.element[0];

            if (pItId.length > element.id.length + 12) {
                document.getElementById(pItId).style.display = 'none';
            }
        },

        hideItemPsq: function (pItId) {
            document.getElementById(pItId).style.display = 'none';
        },

        expandFolder: function (pItId) {
            var myImg = document.getElementById('img' + pItId);
            if (myImg) {
                if (myImg.src.indexOf('Collapse') == -1) {
                    myImg.src = hostBase + "Imagens/EtiComponents/EtiTreeCollapse.png";
                }
            }
        },

        collapseFolder: function (pItId) {
            var myImg = document.getElementById('img' + pItId);
            if (myImg) {
                if (myImg.src.indexOf('Expand') == -1) {
                    myImg.src = hostBase + "Imagens/EtiComponents/EtiTreeExpand.png";
                }
            }
        },

        freezeFolder: function (pItId) {
            var myImg = document.getElementById('img' + pItId);
            if (myImg) {
                if (myImg.src.indexOf('Freeze') == -1) {
                    myImg.src = hostBase + "Imagens/EtiComponents/EtiTreeFreeze.png";
                }
            }
        },

        GetPad: function (i) {
            return "0000".substring(0, 4 - ('' + i).length) + ('' + i);
        },

        getListaItems: function (obj, niv, sTrId, pFoldersOnly, pShowCheck) {
            var self = this;
            var element = self.element[0];

            var sRet = '';
            var i = 0;
            var bSubItem = false;
            var sIconExpand = '';
            var sCheck = '';
            var sIcon = '';
            var sTrCode = '';
            var sDesc = '';
            var commandAttr = '';
            var sDropDiv = '';
            var sLink = '';

            for (var i = 0; i < obj.length; i++) {
                sTrCode = sTrId + '-' + self.GetPad(i);
                if (obj[i].Items) {
                    bSubItem = (obj[i].Items.length >= 1);
                } else {
                    bSubItem = false;
                }

                if (bSubItem) {
                    sCheck = '';
                    sIcon = '';
                    sLink = 'toggleItem';
                    commandAttr = "command=\'{\"command\": \"" + sLink + "\", \"id\": \"" + sTrCode + "\", \"value\": \"" + obj[i].Id + "\"}\'";
                    sIconExpand = '<a href="javascript: void(0);" ' + commandAttr + '><img id="img' + sTrCode + '" src="' + hostBase + 'Imagens/EtiComponents/EtiTreeExpand.png" /></a>';
                    if (pFoldersOnly) {
                        sLink = "callbackFncTree";
                    }

                    if (pShowCheck) {
                        commandAttr = "command=\'{\"command\": \"callbackFncTree\", \"id\": \"" + sTrCode + "\", \"value\": \"" + obj[i].Id + "\"}\'";
                        sCheck = '<input type="checkbox" style="height: 12px; margin-right: 2px;" ' + (obj[i].Selected ? 'checked="checked" ' : ' ') + commandAttr + ' />';
                    } else {
                        if (obj[i].Icon) {
                            sIcon = '<img src="' + hostBase + 'Imagens/Icons/' + obj[i].Icon + '.16.png" style="width: 16px; height: 16px;" />&nbsp;';
                        } else if (self.blnOverrideIcon) {
                            sIcon = '';
                        } else {
                            sIcon = '<img src="' + hostBase + 'Imagens/EtiComponents/EtiTreeFolder.png" />&nbsp;';
                        }
                    }
                } else {
                    sIconExpand = '<img id="img' + sTrCode + '" src="' + hostBase + 'Imagens/EtiComponents/EtiTreeFreeze.png" />';

                    if (pShowCheck) {
                        commandAttr = "command=\'{\"command\": \"callbackFncTree\", \"id\": \"" + sTrCode + "\", \"value\": \"" + obj[i].Id + "\"}\'";
                        sCheck = '<input type="checkbox" style="height: 12px; margin-right: 2px;" ' + (obj[i].Selected ? 'checked="checked"' : '') + commandAttr + ' />';
                    } else {
                        sLink = "callbackFncTree";
                        commandAttr = "command=\'{\"command\": \"" + sLink + "\", \"id\": \"" + sTrCode + "\", \"value\": \"" + obj[i].Id + "\"}\'";
                        if (obj[i].Icon) {
                            sIcon = '<img src="' + hostBase + 'Imagens/Icons/' + obj[i].Icon + '.16.png" style="width: 16px; height: 16px;" />&nbsp;';
                        } else if (self.blnOverrideIcon) {
                            sIcon = '';
                        } else {
                            sIcon = '<img src="' + hostBase + 'Imagens/EtiComponents/EtiTree' + (pFoldersOnly ? 'Folder' : 'File') + '.png" />&nbsp;';
                        }
                    }
                }

                sStyle = ' style="height: 22px;"';
                if (niv != 0)
                    sStyle = ' style="display: none; height: 22px;"';

                if (obj[i].Bold)
                    sDesc = '<b>' + obj[i].Desc + '</b>';
                else if (obj[i].Inactive)
                    sDesc = '<span style="color: #C3C3C3;">' + obj[i].Desc + '</span>';
                else
                    sDesc = obj[i].Desc;

                commandAttr = "command=\'{\"command\": \"" + sLink + "\", \"id\": \"" + sTrCode + "\", \"value\": \"" + obj[i].Id + "\"}\'";

                sDropDiv = '';
                if (self.allowDragDrop == true) {
                    sDropDiv = '<div id="bot-' + sTrCode + '" style="width: 100%; height: 10px; border: 1px solid transparent;"></div>';
                };
                sRet += '<tr id="' + sTrCode + '" ' + sStyle + '><td style="padding-left: ' + (niv * 30 + 40) + 'px;"><div id="top-' + sTrCode + '" style="border: 1px solid transparent;">' + sIconExpand + sCheck + '<span class="divEtiTree">' + '<a href="javascript: void(0);" ' + commandAttr + '>' + sIcon + sDesc + '</a></span></div>' + sDropDiv + '</td></tr>';
                if (bSubItem) {
                    sRet += self.getListaItems(obj[i].Items, niv + 1, sTrCode, pFoldersOnly, pShowCheck);
                }

                self.dataSource.push({ id: sTrCode, value: obj[i] });
            }
            return sRet;
        },

        toggleItem: function (pCode) {
            var self = this;
            var elem = self.getItem(pCode);
            elem.Expanded = !!!elem.Expanded;
            self.displayTree();
        },

        getItem: function (pCode) {
            var self = this;
            var lstRows = self.dataSource.filter(function (f) { return f.id == pCode });
            if (lstRows.length > 0) {
                return lstRows[0].value;
            }
            return null;
        }
    };
}(window.jQuery);
