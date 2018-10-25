(function (globals) {
    "use strict";

    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.EtiRibbonTabGroupType', {
        statics: {
            PlaceHolder: 0,
            Button: 1,
            ToggleButton: 2,
            RadioButton: 3,
            Menu: 4,
            ButtonAndMenu: 5,
            Gallery: 6,
            Separator: 7,
            TextBlock: 8,
            Strip: 9
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.RibbonInfo', {
        Login: null,
        CodGroup: 0,
        DescGroup: null,
        Tabs: null,
        TabsDeleted: null,
        NextIdTab: 0,
        NextIdGroup: 0,
        NextIdItem: 0,
        constructor: function () {
    
            this.Tabs = Bridge.Array.init(0, null);
            this.TabsDeleted = Bridge.Array.init(0, null);
        },
        AddTab: function () {
            var strNovoTab = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovaTab", "Nova Tab");
            var entity = Bridge.merge(new Eticadata.Services.Admin.Backstage.EditRibbon.RibbonTab(), {
                Header: strNovoTab,
                Id: Bridge.identity(this.NextIdTab, (this.NextIdTab = (this.NextIdTab - 1) | 0, this.NextIdTab)),
                Login: this.Login,
                CodGrupo: this.CodGroup,
                HeaderTranslated: strNovoTab,
                Order: Bridge.Linq.Enumerable.from(this.Tabs).count()
            } );
    
            var contextTab = new Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem("constructor");
            contextTab.IsTab = true;
            contextTab.Id = entity.Id;
            contextTab.Desc = entity.Header;
            contextTab.Icon = "Geral/Pastas/Folder";
            contextTab.Entity = entity;
            Eticadata.ArrayExtensions.Add(Bridge.Int32, contextTab.IndexID, entity.Id);
    
            Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, this.Tabs, contextTab);
        },
        AddGroup: function (activeNode) {
            var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes)();
    
            if (activeNode != null && activeNode.IsTab) {
                var strNovoGrupo = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovoGrupo", "Novo Grupo");
                var entity = Bridge.merge(new Eticadata.Services.Admin.Backstage.EditRibbon.RibbonGroup(), {
                    Header: strNovoGrupo,
                    Id: Bridge.identity(this.NextIdGroup, (this.NextIdGroup = (this.NextIdGroup - 1) | 0, this.NextIdGroup)),
                    HeaderTranslated: strNovoGrupo,
                    Order: Bridge.Linq.Enumerable.from(activeNode.Items).count()
                } );
    
                var newGroup = new Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem("constructor$1", activeNode.IndexID, entity.Id);
                newGroup.IsGroup = true;
                newGroup.Id = entity.Id;
                newGroup.Desc = entity.Header;
                newGroup.Icon = "Geral/Pastas/Window";
                newGroup.Entity = entity;
    
                Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, activeNode.Items, newGroup);
            }
            else  {
                if (activeNode != null && activeNode.IsGroup) {
                    var tab = this.GetParent(activeNode);
    
                    if (tab != null) {
                        var strNovoGrupo1 = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovoGrupo", "Novo Grupo");
                        var entity1 = Bridge.merge(new Eticadata.Services.Admin.Backstage.EditRibbon.RibbonGroup(), {
                            Header: strNovoGrupo1,
                            Id: Bridge.identity(this.NextIdGroup, (this.NextIdGroup = (this.NextIdGroup - 1) | 0, this.NextIdGroup)),
                            HeaderTranslated: strNovoGrupo1,
                            Order: Bridge.Linq.Enumerable.from(tab.Items).count()
                        } );
                        var newGroup1 = new Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem("constructor$1", tab.IndexID, entity1.Id);
                        newGroup1.IsGroup = true;
                        newGroup1.Id = entity1.Id;
                        newGroup1.Desc = entity1.Header;
                        newGroup1.Icon = "Geral/Pastas/Window";
                        newGroup1.Entity = entity1;
    
                        Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, tab.Items, newGroup1);
                    }
                }
                else  {
                    result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NaoPossivelCriarGrupo", "Não é possível criar o grupo!\n\nPara criar um novo grupo, posicione-se num Tab ou noutro grupo e só depois prima o botão.")));
                }
            }
    
            return result.toArray();
        },
        AddItem: function (activeNode, isMenu, type) {
            var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes)();
    
            if (activeNode != null && activeNode.IsTab) {
                result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NaoPossivelAdicionarNovoItem", "Não é possível adicionar um novo item directamente numa Tab.\nPor favor, seleccione um Grupo ou um Item de menu para adicionar o novo item.")));
            }
            else  {
                if (activeNode != null && activeNode.IsGroup) {
                    var strNovoMenu = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovoMenu", "Novo Menu");
                    var strNovoItem = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovoItem", "Novo Item");
                    var entity = Bridge.merge(new Eticadata.Services.Admin.Backstage.EditRibbon.RibbonItem(), {
                        Id: Bridge.identity(this.NextIdItem, (this.NextIdItem = (this.NextIdItem - 1) | 0, this.NextIdItem)),
                        Header: isMenu ? strNovoMenu : strNovoItem,
                        HeaderTranslated: isMenu ? strNovoMenu : strNovoItem,
                        ImagePath: isMenu ? "Geral/Pastas/Warning" : "Geral/Avisos/Alerta",
                        Type: isMenu ? 4 : 1,
                        Login: this.Login,
                        CodGrupo: this.CodGroup,
                        IdGroup: activeNode.Id,
                        Order: Bridge.Linq.Enumerable.from(activeNode.Items).count()
                    } );
                    var newItem = new Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem("constructor$1", activeNode.IndexID, entity.Id);
                    newItem.Id = entity.Id;
                    newItem.Desc = entity.Header;
                    newItem.Icon = entity.ImagePath;
                    newItem.IsItem = true;
                    newItem.Entity = entity;
    
                    Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, activeNode.Items, newItem);
                }
                else  {
                    if (activeNode != null && activeNode.IsItem) {
                        var strNovoMenu1 = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovoMenu", "Novo Menu");
                        var strNovoItem1 = Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NovoItem", "Novo Item");
                        var entity1 = Bridge.merge(new Eticadata.Services.Admin.Backstage.EditRibbon.RibbonItem(), {
                            Id: Bridge.identity(this.NextIdItem, (this.NextIdItem = (this.NextIdItem - 1) | 0, this.NextIdItem)),
                            Header: isMenu ? strNovoMenu1 : strNovoItem1,
                            HeaderTranslated: isMenu ? strNovoMenu1 : strNovoItem1,
                            ImagePath: isMenu ? "Geral/Pastas/Warning" : "Geral/Avisos/Alerta",
                            Type: isMenu ? 4 : 1,
                            Login: this.Login,
                            CodGrupo: this.CodGroup
                        } );
    
                        if (type === Eticadata.Services.Admin.Backstage.EditRibbon.EtiRibbonTabGroupType.Menu || type === Eticadata.Services.Admin.Backstage.EditRibbon.EtiRibbonTabGroupType.ButtonAndMenu) {
                            var newItem1 = new Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem("constructor$1", activeNode.IndexID, entity1.Id);
                            newItem1.Id = entity1.Id;
                            newItem1.Desc = entity1.Header;
                            newItem1.Icon = entity1.ImagePath;
                            newItem1.IsItem = true;
                            newItem1.Entity = entity1;
    
                            entity1.IdParent = activeNode.Id;
    
                            Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, activeNode.Items, newItem1);
    
                            entity1.Order = Bridge.Linq.Enumerable.from(activeNode.Items).count();
                        }
                        else  {
                            var parent = this.GetParent(activeNode);
    
                            if (parent.IsGroup || parent.IsItem) {
                                var newItem2 = new Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem("constructor$1", parent.IndexID, entity1.Id);
                                newItem2.Id = entity1.Id;
                                newItem2.Desc = entity1.Header;
                                newItem2.Icon = entity1.ImagePath;
                                newItem2.IsItem = true;
                                newItem2.Entity = entity1;
    
                                if (parent.IsGroup) {
                                    entity1.IdGroup = parent.Id;
                                }
                                else  {
                                    entity1.IdParent = parent.Id;
                                }
    
                                Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, parent.Items, newItem2);
    
                                entity1.Order = Bridge.Linq.Enumerable.from(parent.Items).count();
                            }
                            else  {
                                result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "ErroItemDesconhecido", "Erro, item desconhecido...")));
                            }
                        }
                    }
                    else  {
                        result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "ErroItemDesconhecido", "Erro, item desconhecido...")));
                    }
                }
            }
    
            return result.toArray();
        },
        CanDeleteItem: function (activeNode) {
            var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes)();
    
            if (activeNode.IsTab) {
                if (null != activeNode.Items && Bridge.Linq.Enumerable.from(activeNode.Items).count() > 0) {
                    result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NaoPossivelTabGrupos", "Não é possível eliminar um tab que possua grupos/items.")));
                }
                else  {
                    result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor$1", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "ConfirmaRemoverTab", "Confirma que deseja realmente remover esta Tab?"), Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType.Question));
                }
            }
            else  {
                if (activeNode.IsGroup) {
                    if (null != activeNode.Items && Bridge.Linq.Enumerable.from(activeNode.Items).count() > 0) {
                        result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NaoPossivelEliminarGrupoPossuaItems", "Não é possível eliminar um grupo que possua items.")));
                    }
                    else  {
                        result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor$1", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "ConfirmaRemoverGrupo", "Confirma que deseja realmente remover este Grupo?"), Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType.Question));
                    }
                }
                else  {
                    if (activeNode.IsItem) {
                        if (null != activeNode.Items && Bridge.Linq.Enumerable.from(activeNode.Items).count() > 0) {
                            result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "NaoPossivelEliminarItemPossuaSubItens", "Não é possível eliminar um item que possua subitens.")));
                        }
                        else  {
                            if (activeNode.Id >= 0) {
                                result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "EliminarDistribuidoBase", "Não é possível eliminar um item distribuído de Base!")));
                            }
                            else  {
                                result.add(new Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes("constructor$1", Eticadata.Eti.GetTranslateKey("StartupModule", "ConfigRibbon", "ConfirmaRemoverItem", "Confirma que deseja realmente remover este item?"), Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType.Question));
                            }
                        }
                    }
                }
            }
    
            return result.toArray();
        },
        DeleteItem: function (activeNode) {
            var parent = null;
    
            if (activeNode.IsTab) {
                Eticadata.ArrayExtensions.Remove(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, this.Tabs, activeNode);
            }
            else  {
                parent = this.GetParent(activeNode);
    
                if (parent != null) {
                    Eticadata.ArrayExtensions.Remove(Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem, parent.Items, activeNode);
                }
            }
    
            return parent;
        },
        GetParent: function (activeNode) {
            var result = null;
    
            if (!activeNode.IsTab) {
                var items = this.Tabs;
                for (var i = 0; i < ((Bridge.Linq.Enumerable.from(activeNode.IndexID).count() - 1) | 0); i = (i + 1) | 0) {
                    for (var j = 0; j < Bridge.Linq.Enumerable.from(items).count(); j = (j + 1) | 0) {
                        if (items[j].Id === activeNode.IndexID[i]) {
                            result = items[j];
                            items = result.Items;
                        }
                    }
                }
            }
    
            return result;
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem', {
        Id: 0,
        Desc: null,
        Icon: null,
        Inactive: false,
        Entity: null,
        IsTab: false,
        IsGroup: false,
        IsItem: false,
        IsMoved: false,
        Items: null,
        ItemsDeleted: null,
        IndexID: null,
        constructor: function () {
            this.Items = Bridge.Array.init(0, null);
            this.ItemsDeleted = Bridge.Array.init(0, null);
            this.IndexID = Bridge.Array.init(0, 0);
        },
        constructor$1: function (index, newIndex) {
            Eticadata.Services.Admin.Backstage.EditRibbon.TreeRibbonItem.prototype.$constructor.call(this);
    
            var i = 0;
            this.IndexID = Bridge.Array.init(((index.length + 1) | 0), 0);
    
            for (i = 0; i < index.length; i = (i + 1) | 0) {
                this.IndexID[i] = index[i];
            }
    
            this.IndexID[i] = newIndex;
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes', {
        Type: 0,
        Code: null,
        Info: null,
        constructor: function (description) {
            Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes.prototype.constructor$1.call(this, description, Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType.Error);
    
        },
        constructor$1: function (description, type) {
            Eticadata.Services.Admin.Backstage.EditRibbon.ValidationCodes.prototype.constructor$2.call(this, description, type, Bridge.Array.init(0, null));
    
        },
        constructor$2: function (description, type, info) {
            this.Code = description;
            this.Type = type;
            this.Info = info;
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.ValidationMessageType', {
        statics: {
            Warning: 0,
            Error: 1,
            Question: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.RibbonGroup', {
        inherits: [Eticadata.Entity],
        Id: 0,
        Order: 0,
        Header: null,
        HeaderTranslated: null,
        CommandName: null,
        Inactive: false,
        Items: null,
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Items = Bridge.Array.init(0, null);
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.RibbonItem', {
        inherits: [Eticadata.Entity],
        Login: null,
        CodGrupo: 0,
        Id: 0,
        IdGroup: null,
        Order: 0,
        Header: null,
        HeaderTranslated: null,
        ImagePath: null,
        Type: 0,
        Size: 0,
        IdParent: null,
        CommandName: null,
        CommandParameter: null,
        Separator: false,
        GenericEntity: false,
        Inactive: false,
        SubItems: null,
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.SubItems = Bridge.Array.init(0, null);
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.EditRibbon.RibbonTab', {
        inherits: [Eticadata.Entity],
        Login: null,
        CodGrupo: 0,
        Id: 0,
        Order: 0,
        Header: null,
        HeaderTranslated: null,
        Inactive: false,
        Groups: null,
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Groups = Bridge.Array.init(0, null);
        }
    });
    
    
    
    Bridge.init();
})(this);
