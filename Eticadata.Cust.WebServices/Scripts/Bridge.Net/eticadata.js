(function (globals) {
    "use strict";

    Bridge.define('Eticadata.ArrayExtensions', {
        statics: {
            ToList: function (T, target) {
                var $t;
                var $yield = [];
                $t = Bridge.getEnumerator(target);
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    $yield.push(item);
                }
                return Bridge.Array.toEnumerable($yield);
            },
            Add: function (T, array, append) {
                array.push.apply(array,[append]);
            },
            Remove: function (T, array, remove) {
                var index = Bridge.Array.indexOfT(array, remove);
    
                if (index > -1) {
                    array.splice(index, 1);
                }
            }
        }
    });
    
    Bridge.define('Eticadata.DescriptionTranslatorAttribute', {
        inherits: [Bridge.Attribute],
        Module: null,
        View: null,
        Key: null,
        FallBack: null,
        constructor: function () {
            Bridge.Attribute.prototype.$constructor.call(this);
    
        },
        constructor$1: function (module, view, key, fallBack) {
            Bridge.Attribute.prototype.$constructor.call(this);
    
            this.Module = module;
            this.View = view;
            this.Key = key;
            this.FallBack = fallBack;
        }
    });
    
    Bridge.define('Eticadata.EmpresaInfo', {
        MoedaBase: null
    });
    
    Bridge.define('Eticadata.Entity', {
        ChangedProperties: null,
        IsNew: false,
        constructor: function () {
            this.ChangedProperties = Bridge.Array.init(0, null);
            this.IsNew = true;
        }
    });
    
    Bridge.define('Eticadata.EnumGuid', {
        inherits: [Bridge.Attribute],
        config: {
            init: function () {
                this.Guid = new Bridge.Guid();
            }
        },
        constructor: function (guid) {
            Bridge.Attribute.prototype.$constructor.call(this);
    
            this.Guid = Bridge.Guid.parse(guid);
        }
    });
    
    Bridge.define('Eticadata.Eti', {
        statics: {
            GetEnumList: function (T) {
                var $t;
                var result = new Bridge.List$1(String)();
    
                $t = Bridge.getEnumerator(Bridge.Enum.getValues(T));
                while ($t.moveNext()) {
                    var item = $t.getCurrent();
                    result.add(Bridge.String.format("{0}|{1}", Bridge.cast(item, Bridge.Int32), Eticadata.Eti.GetTranslateKey("ShellModule", "Enum_" + Bridge.Enum.getName(T, item), Bridge.Enum.getName(T, item), Bridge.Enum.getName(T, item))));
    
                    //result.Add(string.Format("{0}|{1}", (int)item, splitCamelCase ? Eti.CamelCase2Words(item.ToString()) : item.ToString()));
                }
    
                return Bridge.toArray(result).join(";");
            },
            GetTranslateKey: function (module, window, key, defText) {
                return MyShell().

(module, defText);
            }
        }
    });
    
    Bridge.define('Eticadata.EtiContext', {
        statics: {
            getSuite: function () {
                return new Eticadata.SuiteInfo();
            },
            getEmpresa: function () {
                var companyInfo = new Eticadata.EmpresaInfo();
                companyInfo.MoedaBase = new Eticadata.MoedaBaseInfo();
                return companyInfo;
            },
            GetWebUri: function (path) {
                return new Eticadata.Uri(MyShell().GetUrlBase() + path);
            }
        }
    });
    
    Bridge.define('Eticadata.EtiVersion', {
        statics: {
            Version: "18.00.00.0043",
            Company: "eticadata software, lda",
            Product: "ERP eticadata",
            Copyright: "Copyright © eticadata software, Lda. 1995-2018",
            AssemblyVersion: "18.00.00.00",
            MasterVersion: "v18"
        }
    });
    
    Bridge.define('Eticadata.MoedaBaseInfo', {
        Abreviatura: null,
        config: {
            init: function () {
                this.Abreviatura = MyShell().Environment.Config.ActiveCompanyInfo.MoedaBase.Abreviatura;
            }
        }
    });
    
    Bridge.define('Eticadata.SuiteInfo', {
        CodigoICAOPaisReferencia: "PRT",
        HoraCheckIn: 18,
        HoraCheckOut: 12,
        DiaLateCheckin: 0,
        HoraLateCheckIn: 0,
        PermiteCheckOutComContas: false,
        config: {
            init: function () {
                this.DataHotelaria = Bridge.Date.today() || new Date(-864e13);
            }
        }
    });
    
    Bridge.define('Eticadata.Uri', {
        AbsoluteUri: null,
        RelativePath: null,
        constructor: function (path) {
            this.AbsoluteUri = path;
            this.RelativePath = Bridge.String.replaceAll(path, MyShell().GetUrlBase() + "Imagens/Icons/", "");
        }
    });
    
    
    
    Bridge.init();
})(this);
