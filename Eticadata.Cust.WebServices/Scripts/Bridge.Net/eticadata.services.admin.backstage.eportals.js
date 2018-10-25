(function (globals) {
    "use strict";

    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions', {
        statics: {
            Periodicidade: function (entity) {
                return entity.Periodicidade();
            },
            Intervalo: function (entity) {
                return entity.Intervalo();
            },
            Intervalo$1: function (entity, value) {
                entity.Intervalo(value);
            },
            SiteName: function (entity) {
                return entity.SiteName();
            },
            PrtUrl: function (entity) {
                return entity.PrtUrl();
            },
            PrtUrlServicos: function (entity) {
                return entity.PrtUrlServicos();
            },
            Data: function (entity) {
                return entity.Data();
            },
            Data$1: function (entity, value) {
                entity.Data(value);
            },
            DataExecucao: function (entity) {
                return entity.DataExecucao();
            },
            DataExecucao$1: function (entity, value) {
                entity.DataExecucao(value);
            },
            Dias: function (entity) {
                return entity.Dias();
            },
            Dias$1: function (entity, value) {
                entity.Dias(value);
            },
            Notificacoes: function (entity) {
                return entity.Notificacoes();
            },
            Utilizadores: function (entity) {
                return entity.Utilizadores();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoValidator', {
        statics: {
            ValidateConfiguracaoPeriodicidade: function (configuracao) {
                var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
                if (Bridge.Nullable.hasValue(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Periodicidade(configuracao))) {
    
                    switch (Bridge.Nullable.getValue(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Periodicidade(configuracao))) {
                        case 3: 
                            if (Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) <= 0 || Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) > 365) {
                                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", "Intervalo inválido para o periodo seleccionado. [0,365]"));
                            }
                            break;
                        case 2: 
                            if (Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) <= 0 || Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) > 120) {
                                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", "Intervalo inválido para o periodo seleccionado. [0,120]"));
                            }
                            break;
                        case 4: 
                            if (Bridge.Nullable.lte(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias(configuracao), 0)) {
                                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", "Necessário seleccionar dias"));
                            }
                            break;
                        case 6: 
                            if (Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) <= 0 || Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) > 12) {
                                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", "Intervalo inválido para o periodo seleccionado. [0,12]"));
                            }
                            break;
                        case 1: 
                            if (Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) <= 0 || Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) > 60) {
                                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", "Intervalo inválido para o periodo seleccionado. [0,60]"));
                            }
                            break;
                        case 5: 
                            if (Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) <= 0 || Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(configuracao) > 54) {
                                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", "Intervalo inválido para o periodo seleccionado. [0,54]"));
                            }
                            break;
                    }
                }
    
                return result.toArray();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.DefinitionsInfo', {
        ChangedProperties: null,
        GRH_ADFCodigo: null,
        GRH_AnexoFaltasID: null,
        GRH_AnexoDespesasID: null,
        eCommerce_Armazem: null,
        eCommerce_LinhaPreco: null,
        eCommerce_GerirStock: null,
        eCommerce_AbrevTpDoc: null,
        eCommerce_Moeda: null,
        eCommerce_SeccaoWeb: null,
        eCommerce_ArtigoEnvio: null,
        eCommerce_ArtigoPagamento: null,
        eCommerce_Estado_PagamentoEfectuado: null,
        eCommerce_Estado_EncomendaConcluida: null,
        eCommerce_Categorias: null,
        ofi_Estado_PendenteAprovacao: null,
        ofi_Estado_OrcamentoAceite: null,
        ofi_Estado_OrcamentoRejeitado: null,
        ofi_Seccao: null,
        constructor: function () {
            this.ChangedProperties = new Bridge.List$1(String)();
    
            this.eCommerce_Estado_PagamentoEfectuado = "";
            this.eCommerce_Estado_EncomendaConcluida = "";
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.DiasSemana', {
        statics: {
            Segunda: 1,
            Terca: 2,
            Quarta: 3,
            Quinta: 4,
            Sexta: 5,
            Sabado: 6,
            Domingo: 0
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Empresa', {
        Codigo: null,
        Nome: null,
        MoradaL1: null,
        MoradaL2: null,
        Localidade: null,
        CodPostal: null,
        Telefone: null,
        Fax: null,
        Email: null,
        Pais: null,
        AbrevSubZona: null,
        Logotipo: null
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.EPortal', {
        nome: null,
        Versao: null,
        Modulos: null,
        constructor: function () {
            this.Modulos = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ModuloDisponivel)();
    
            this.nome = "EPortals";
            this.Versao = "2.4.1.0"; // TODO: Colocar isto em base de dados algures!
        },
        AddModules: function (modules, hasLicenseEportalsGrh, hasLicenseEportalsComercial, hasLicenseEportalsOficinas, hasLicenseEportalsSuite, hasLicenseEportalsEcommerce) {
            var $t;
            $t = Bridge.getEnumerator(modules);
            while ($t.moveNext()) {
                var mod = $t.getCurrent();
                if (Bridge.referenceEquals(mod.IDModulo, "0012")) {
                    if (hasLicenseEportalsGrh) {
                        this.Modulos.add(mod);
                    }
                }
                else  {
                    if (Bridge.referenceEquals(mod.IDModulo, "0013")) {
                        if (hasLicenseEportalsComercial) {
                            this.Modulos.add(mod);
                        }
                    }
                    else  {
                        if (Bridge.referenceEquals(mod.IDModulo, "0014")) {
                            if (hasLicenseEportalsOficinas) {
                                this.Modulos.add(mod);
                            }
                        }
                        else  {
                            if (Bridge.referenceEquals(mod.IDModulo, "0015")) {
                                if (hasLicenseEportalsEcommerce) {
                                    this.Modulos.add(mod);
                                }
                            }
                            else  {
                                this.Modulos.add(mod);
                            }
                        }
                    }
                }
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController', {
        statics: {
            getErroUrlInvalido: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Url Portal inválido", "Url Portal inválido"));
                return strMensagem;
            },
            getErroVencHoraInvalido: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroInvalido", "O campo '{0}' encontra-se inválido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "VencHora", "VencHora"));
                return strMensagem;
            },
            getErroEncargosInvalido: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroInvalido", "O campo '{0}' encontra-se inválido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "Encargos", "Encargos"));
                return strMensagem;
            },
            getErroMajoracaoInvalido: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroInvalido", "O campo '{0}' encontra-se inválido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "Majoracao", "Majoracao"));
                return strMensagem;
            },
            getErroPreenchimentoObrigUrl: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "URL Portal", "URL Portal"));
                return strMensagem;
            },
            getErroPreenchimentoObrigUrlServ: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "URL Serviços Web", "URL Serviços Web"));
                return strMensagem;
            },
            getErroPreenchimentoUrl: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "URL Inválido", "URL Inválido"));
                return strMensagem;
            },
            getErroValidacaoEmail: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroInvalido", "O campo '{0}' encontra-se inválido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Email", "Email"));
                return strMensagem;
            },
            getErroPreenchimentoObrigNomeDbPortal: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Nome Base Dados", "Nome Base Dados"));
                return strMensagem;
            },
            getErroPreenchimentoObrigNomeServPortal: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Nome Servidor", "Nome Servidor"));
                return strMensagem;
            },
            getErroPreenchimentoObrigPasswdDbPortal: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Password", "Password"));
                return strMensagem;
            },
            getErroPreenchimentoObrigUsrDbPortal: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Username", "Username"));
                return strMensagem;
            },
            getErroPreenchimentoObrigSiteName: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Nome", "Nome"));
                return strMensagem;
            },
            getErroPreenchimentoObrigCartaConducao: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "CartaConducao", "CartaConducao"));
                return strMensagem;
            },
            getErroPreenchimentoObrigHoraInicio: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "HoraInicio", "HoraInicio"));
                return strMensagem;
            },
            getErroPreenchimentoObrigLocalInicio: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "LocalInicio", "LocalInicio"));
                return strMensagem;
            },
            getErroPreenchimentoObrigDepartamento: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("AutoModule", "Frotas", "Departamento", "Departamento"));
                return strMensagem;
            },
            getErroPreenchimentoPaisRepetido: function () {
                return Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoPaisRepetido", "O país com o código '{0}' encontra-se repetido!");
            },
            getErroPreenchimentoMoeda: function () {
                var strMensagem = "";
                strMensagem = Bridge.String.format(Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ErroPreenchimentoObrig", "O campo '{0}' tem de estar preenchido!"), Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Moeda", "Moeda"));
                return strMensagem;
            },
            IsUrlInvalido: function (valorStr) {
                var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
                var valor = { v : 0 };
    
                if (Bridge.String.isNullOrEmpty(valorStr)) {
                    result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoObrigUrl()));
                }
                else  {
                    if (!Bridge.Int32.tryParse(valorStr, valor) || valor.v <= 0) {
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroUrlInvalido()));
                    }
                }
    
                return result;
            },
            SiteNameEmpty: function (valorStr) {
                var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
                if (valorStr == null) {
                    result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoObrigSiteName()));
                }
                else  {
                    if (Bridge.String.isNullOrEmpty(valorStr)) {
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoObrigSiteName()));
                    }
                }
    
                return result;
            },
            UsernameInvalido: function (valorStr) {
                var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
                if (Bridge.String.isNullOrEmpty(valorStr)) {
                    result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoObrigUsrDbPortal()));
                }
                return result;
            },
            NomeBDInvalido: function (valorStr) {
                var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
                if (Bridge.String.isNullOrEmpty(valorStr)) {
                    result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoObrigUsrDbPortal()));
                }
                return result;
            },
            NomeServidorInvalido: function (valorStr) {
                var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
                if (Bridge.String.isNullOrEmpty(valorStr)) {
                    result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoObrigUsrDbPortal()));
                }
                return result;
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.EportalsSettings', {
        statics: {
            linkServicos: "Services/Publish.svc"
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.EstadoSite', {
        statics: {
            Online: 0,
            OffLine: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Extension', {
        statics: {
            EnumBitMask: function (date) {
                return Math.pow(2, Bridge.cast(date.getDay(), Bridge.Int32));
    
            },
            AddWeeks: function (dateTime, Weeks) {
                return new Date(dateTime.valueOf() + Math.round((((Weeks * 7) | 0)) * 864e5));
            },
            AddNextDay: function (dateTime, Dias) {
                var i = 0;
                var flag = false;
                while (!flag && i < 7) {
                    if ((Dias & Eticadata.Services.Admin.Backstage.Eportals.Extension.EnumBitMask(dateTime)) !== 0) {
                        flag = true;
                    }
                    else  {
                        dateTime = new Date(dateTime.valueOf() + Math.round((1) * 864e5));
                        i = (i + 1) | 0;
                    }
                }
                return dateTime;
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.GceDocumentos', {
        statics: {
            Encomendas: 1,
            Vendas: 2,
            Pendentes: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.GenericMessageController');
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.GrhDocumentos', {
        statics: {
            Recibos: 1,
            DeclaracaoRendimentos: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Integracao', {
        CodEmpresa: null,
        ServidorEmpresa: null,
        DatabaseEmpresa: null,
        ServidorSistema: null,
        DatabaseSistema: null,
        ActiveExercicio: null,
        NomeAplicacao: null,
        UsernameSistema: null,
        PasswdSistema: null,
        UsernameEmpresa: null,
        PasswdEmpresa: null,
        Seccao: null,
        ConnectionStringNET: null,
        UserUsername: null,
        UserPasswd: null
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ModuloExtensions', {
        statics: {
            ToInstall: function (entity) {
                return entity.ToInstall();
            },
            Tag: function (entity) {
                return entity.Tag();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ModuloTags', {
        statics: {
            Core: 1,
            Grh: 2,
            Gce: 3,
            Ofi: 4,
            ECommerce: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.NotificacaoExtensions', {
        statics: {
            Email: function (entity) {
                return entity.Email();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Operacoes', {
        statics: {
            U: 1,
            I: 2,
            D: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.RegularExpressionValidator', {
        Pattern: null,
        constructor: function (pattern) {
            this.Pattern = pattern;
        },
        IsValid: function (value) {
            var r = new RegExp(this.Pattern);
            return r.test(value);
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Responsavel', {
        statics: {
            getDefaultValue: function () { return new Eticadata.Services.Admin.Backstage.Eportals.Responsavel(); }
        },
        CodEntidade: 0,
        Tipo: 0,
        NomeEntidade: null,
        Nome: null,
        Email: null,
        Nif: null,
        PortalWeb: false,
        PortalWebOfi: false,
        PortalWebGce: false,
        PortalWebECommerce: false,
        constructor: function () {
        },
        getHashCode: function () {
            var hash = 17;
            hash = hash * 23 + (this.CodEntidade == null ? 0 : Bridge.getHashCode(this.CodEntidade));
            hash = hash * 23 + (this.Tipo == null ? 0 : Bridge.getHashCode(this.Tipo));
            hash = hash * 23 + (this.NomeEntidade == null ? 0 : Bridge.getHashCode(this.NomeEntidade));
            hash = hash * 23 + (this.Nome == null ? 0 : Bridge.getHashCode(this.Nome));
            hash = hash * 23 + (this.Email == null ? 0 : Bridge.getHashCode(this.Email));
            hash = hash * 23 + (this.Nif == null ? 0 : Bridge.getHashCode(this.Nif));
            hash = hash * 23 + (this.PortalWeb == null ? 0 : Bridge.getHashCode(this.PortalWeb));
            hash = hash * 23 + (this.PortalWebOfi == null ? 0 : Bridge.getHashCode(this.PortalWebOfi));
            hash = hash * 23 + (this.PortalWebGce == null ? 0 : Bridge.getHashCode(this.PortalWebGce));
            hash = hash * 23 + (this.PortalWebECommerce == null ? 0 : Bridge.getHashCode(this.PortalWebECommerce));
            return hash;
        },
        equals: function (o) {
            if (!Bridge.is(o,Eticadata.Services.Admin.Backstage.Eportals.Responsavel)) {
                return false;
            }
            return Bridge.equals(this.CodEntidade, o.CodEntidade) && Bridge.equals(this.Tipo, o.Tipo) && Bridge.equals(this.NomeEntidade, o.NomeEntidade) && Bridge.equals(this.Nome, o.Nome) && Bridge.equals(this.Email, o.Email) && Bridge.equals(this.Nif, o.Nif) && Bridge.equals(this.PortalWeb, o.PortalWeb) && Bridge.equals(this.PortalWebOfi, o.PortalWebOfi) && Bridge.equals(this.PortalWebGce, o.PortalWebGce) && Bridge.equals(this.PortalWebECommerce, o.PortalWebECommerce);
        },
        $clone: function (to) {
            var s = to || new Eticadata.Services.Admin.Backstage.Eportals.Responsavel();
            s.CodEntidade = this.CodEntidade;
            s.Tipo = this.Tipo;
            s.NomeEntidade = this.NomeEntidade;
            s.Nome = this.Nome;
            s.Email = this.Email;
            s.Nif = this.Nif;
            s.PortalWeb = this.PortalWeb;
            s.PortalWebOfi = this.PortalWebOfi;
            s.PortalWebGce = this.PortalWebGce;
            s.PortalWebECommerce = this.PortalWebECommerce;
            return s;
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.TempoLog', {
        statics: {
            Dia: 1,
            Semana: 2,
            Mes: 3,
            Ano: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.TipoEntidade', {
        statics: {
            Cliente: 1,
            Funcionario: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.TipoPeriodos', {
        statics: {
            Minutos: 1,
            Horas: 2,
            Dias: 3,
            DiasDaSemana: 4,
            Semanas: 5,
            Meses: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes', {
        Type: 0,
        Code: null,
        Info: null,
        constructor: function (description) {
            Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes.prototype.constructor$1.call(this, description, Eticadata.Services.Admin.Backstage.Eportals.ValidationMessageType.Error);
    
        },
        constructor$1: function (description, type) {
            Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes.prototype.constructor$2.call(this, description, type, Bridge.Array.init(0, null));
    
        },
        constructor$2: function (description, type, info) {
            this.Code = description;
            this.Type = type;
            this.Info = info;
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ValidationMessageType', {
        statics: {
            Warning: 0,
            Error: 1,
            Question: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.VersaoExtensions', {
        statics: {
            Modulos: function (entity) {
                return entity.Modulos();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Configuracao', {
        inherits: [Eticadata.Entity],
        Empresa: null,
        EstadoSite: null,
        ID: 0,
        NomeServErp: null,
        NomeDbErp: null,
        DbErpUsername: null,
        DbErpPasswd: null,
        ErpUsername: null,
        ErpPasswd: null,
        NomeServSist: null,
        NomeDbSist: null,
        DbSistUsername: null,
        DbSistPasswd: null,
        Data: null,
        LogPath: null,
        Periodicidade: null,
        CodEmpresa: null,
        Exercicio: null,
        Seccao: null,
        PrtUrl: null,
        IsConfigured: false,
        PrtUrlServicos: null,
        Dias: null,
        DataActivacao: null,
        DataExecucao: null,
        AtrasoMax: 0,
        NumTentativas: 0,
        Intervalo: 0,
        SiteName: null,
        Publicado: false,
        DefaultPage: false,
        ContactPage: false,
        NotaBoasVindas: null,
        WinServiceName: null,
        WinServiceStatus: false,
        InfoEmpresa: null,
        ToUpdate: false,
        EptUsername: null,
        EptPassword: null,
        Notificacoes: null,
        Utilizadores: null,
        UtilizadoresDeleted: null,
        Versao: null,
        config: {
            init: function () {
                this.VersaoGuid = new Bridge.Guid();
            }
        },
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Notificacoes = Bridge.Array.init(0, null);
            this.Utilizadores = Bridge.Array.init(0, null);
            this.UtilizadoresDeleted = Bridge.Array.init(0, null);
        },
        Validate: function () {
            return this.Validate$1(null, null);
        },
        Validate$1: function (def, paises) {
            var $t;
            var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
            result.addRange(Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.SiteNameEmpty(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.SiteName(this)));
    
    
            var regUrl = new Eticadata.Services.Admin.Backstage.Eportals.RegularExpressionValidator("^((https?|ftp|):((//)|(\\\\))[\\w\\d:#%/;$()~_?\\-=\\\\.&]+)$");
    
            if (Bridge.String.isNullOrEmpty(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.PrtUrl(this)) || !regUrl.IsValid(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.PrtUrl(this))) {
                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoUrl()));
            }
    
            if (Bridge.String.isNullOrEmpty(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.PrtUrlServicos(this)) || !regUrl.IsValid(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.PrtUrlServicos(this))) {
                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoUrl()));
            }
    
            result.addRange(this.validaPeriodicidade());
    
            $t = Bridge.getEnumerator(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Notificacoes(this));
            while ($t.moveNext()) {
                var notification = $t.getCurrent();
                result.addRange(this.ValidaEmail(Eticadata.Services.Admin.Backstage.Eportals.NotificacaoExtensions.Email(notification)));
            }
    
            if (def != null && paises != null) {
                result.addRange(this.ValidateEcommerce(def, paises));
            }
    
            return result;
        },
        ValidaEmail: function (email) {
            var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
            var regUrl = new Eticadata.Services.Admin.Backstage.Eportals.RegularExpressionValidator("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
            if (Bridge.String.isNullOrEmpty(email) || !regUrl.IsValid(email)) {
                result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroValidacaoEmail()));
            }
    
            return result.toArray();
        },
        validaPeriodicidade: function () {
            //this.IsDiasSemana(false);
            //if (this.Periodicidade().HasValue)
            //    if (this.Periodicidade().Value == (int)TipoPeriodos.DiasDaSemana)
            //        this.IsDiasSemana(true);
    
            var result = Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoValidator.ValidateConfiguracaoPeriodicidade(this);
    
            if (result.length === 0) {
                switch (Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Periodicidade(this)) {
                    case 3: 
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias$1(this, 0);
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, new Date(new Date().valueOf() + Math.round((Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(this)) * 864e5)));
                        break;
                    case 2: 
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias$1(this, 0);
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, new Date(new Date().valueOf() + Math.round((Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(this)) * 36e5)));
                        break;
                    case 6: 
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias$1(this, 0);
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, new Date(new Date().getFullYear(), new Date().getMonth() + Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(this), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds(), new Date().getMilliseconds()));
                        break;
                    case 1: 
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias$1(this, 0);
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, new Date(new Date().valueOf() + Math.round((Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(this)) * 6e4)));
                        break;
                    case 5: 
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias$1(this, 0);
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, Eticadata.Services.Admin.Backstage.Eportals.Extension.AddWeeks(new Date(), Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo(this)));
                        break;
                    case 4: 
                        //this.IsDiasSemana(true);
                        Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Intervalo$1(this, 0);
                        this.calcExecutionDate();
                        break;
                }
            }
            return result;
        },
        calcExecutionDate: function () {
            Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Data$1(this, new Date());
            Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Data(this));
            if (Bridge.Nullable.hasValue(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias(this))) {
                if (Bridge.Nullable.getValue(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias(this)) > 0) {
                    var aux = Eticadata.Services.Admin.Backstage.Eportals.Extension.AddNextDay(Bridge.Nullable.getValue(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Data(this)), Bridge.Nullable.getValue(Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.Dias(this)));
                    Eticadata.Services.Admin.Backstage.Eportals.ConfiguracaoExtensions.DataExecucao$1(this, aux);
                }
            }
        },
        ValidateEcommerce: function (def, countries) {
            var $t;
            var result = new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
    
            if (Bridge.Linq.Enumerable.from(Eticadata.Services.Admin.Backstage.Eportals.VersaoExtensions.Modulos(this.Versao)).any($_.Eticadata.Services.Admin.Backstage.Eportals.Configuracao.f1)) {
                if (def != null) {
                    // Armazem
                    if (def.eCommerce_Armazem == null) {
                        // erro
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ArmazemObrig", "O Armazem é obrigatório!")));
                    }
    
                    // Linha de Preco
                    if (def.eCommerce_LinhaPreco == null) {
                        // erro
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "LinhaprecoObrig", "A Linha de Preço é obrigatória!")));
                    }
    
                    // Documento de encomenda
                    if (def.eCommerce_AbrevTpDoc == null) {
                        // erro
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "TipoDocumentoObrig", "O tipo de documento é obrigatório!")));
                    }
    
                    // Artigo de envio
                    if (def.eCommerce_ArtigoEnvio == null) {
                        // erro
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ArtigoEnvioObrig", "O artigo para associar ao método de envio é obrigatório!")));
                    }
    
                    // Artigo do pagamento
                    if (def.eCommerce_ArtigoPagamento == null) {
                        // erro
                        result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "ArtigoPagamentoObrig", "O artigo para associar ao método de pagamento é obrigatório!")));
                    }
                }
    
                if (countries != null && countries.length > 0) {
                    result.addRange(Bridge.Linq.Enumerable.from(countries).groupBy($_.Eticadata.Services.Admin.Backstage.Eportals.Configuracao.f2).where($_.Eticadata.Services.Admin.Backstage.Eportals.Configuracao.f3).select($_.Eticadata.Services.Admin.Backstage.Eportals.Configuracao.f4));
    
                    var i = 1;
                    $t = Bridge.getEnumerator(countries);
                    while ($t.moveNext()) {
                        var p = $t.getCurrent();
                        if (Bridge.String.isNullOrEmpty(p.AbrevMoeda)) {
                            result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Bridge.String.format("{0} {1}: {2}", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "Linha", "Linha"), i, Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoMoeda())));
                        }
    
                        i = (i + 1) | 0;
                    }
                }
                else  {
                    result.add(new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Eticadata.Eti.GetTranslateKey("EportalsModule", "Configuracao", "EcommercePaises", "Deve escolher pelo menos um país!")));
                }
            }
    
            return result.toArray();
        },
        LoadPortalStructure: function (Portal, SystemValues) {
            var $t, $t1;
            //aux
            var index = 0;
    
            // criar portal
            var versao = new Eticadata.Services.Admin.Backstage.Eportals.Versao();
            versao.ID = Bridge.Guid.newGuid();
            versao.Nome = Portal.nome;
            versao.Descricao = "";
            versao.VersaoPortal = Portal.Versao;
            versao.Path = "/";
            versao.Estado = true;
            versao.Data = Bridge.Date.format(new Date(), "yyyy-MM-dd");
    
            $t = Bridge.getEnumerator(Portal.Modulos);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                var modulo = new Eticadata.Services.Admin.Backstage.Eportals.Modulo();
                modulo.Descricao = item.Descricao;
                modulo.Estado = true;
                modulo.Icon = item.Tag.toUpperCase();
                modulo.Instalacao = new Date();
    
                modulo.isInstalled = false;
                modulo.Nome = item.Nome;
                modulo.VersaoModulo = item.Versao;
                modulo.MenuConfig = index;
                modulo.Tag = item.Tag;
                modulo.setFlagsByTag();
    
    
                if (Bridge.String.equals(item.Tag.toUpperCase(), "CORE")) {
                    //Obrigar a Instalar o Módulo Core
                    modulo.ToInstall = true;
                    modulo.IsEnabled = false;
                }
                else  {
                    modulo.IsEnabled = true;
                }
    
    
                modulo.ID = Bridge.Guid.newGuid();
                $t1 = Bridge.getEnumerator(item.Papeis);
                while ($t1.moveNext()) {
                    var papel = $t1.getCurrent();
                    var newPapel = new Eticadata.Services.Admin.Backstage.Eportals.Papel();
                    newPapel.Descricao = papel.Descricao;
                    newPapel.Entidade = "0"; //.Entidade.ToString();
                    newPapel.Estado = true;
                    newPapel.Nome = papel.Nome;
                    newPapel.ID = Bridge.Guid.newGuid();
                    newPapel.ModuloID = modulo.ID;
                    newPapel.isAdmin = papel.IsAdmin === 1; // int to bool
                    newPapel.isCliente = papel.IsCliente === 1; // int to bool
                    newPapel.isFuncionario = papel.IsFuncionario === 1; // int to bool
                    newPapel.setTipoEntidade();
                    Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.Eportals.Papel, modulo.Papeis, newPapel);
                }
                Eticadata.ArrayExtensions.Add(Eticadata.Services.Admin.Backstage.Eportals.Modulo, versao.Modulos, modulo);
    
                // aux
                index = Bridge.Int.sxs((index + 1) & 65535);
            }
    
            this.VersaoGuid = versao.ID;
            this.Versao = versao;
            this.NomeDbErp = SystemValues.DatabaseEmpresa;
            this.NomeDbSist = SystemValues.DatabaseSistema;
            this.NomeServErp = SystemValues.ServidorEmpresa;
            this.NomeServSist = SystemValues.ServidorSistema;
            this.DbErpUsername = SystemValues.UsernameEmpresa;
            this.DbSistUsername = SystemValues.UsernameSistema;
            this.DbErpPasswd = SystemValues.PasswdEmpresa;
            this.DbSistPasswd = SystemValues.PasswdSistema;
            this.Exercicio = SystemValues.ActiveExercicio;
            this.Seccao = SystemValues.Seccao;
            this.Data = new Date();
            this.CodEmpresa = SystemValues.CodEmpresa;
            this.ErpUsername = SystemValues.UserUsername;
            this.ErpPasswd = SystemValues.UserPasswd;
        }
    });
    
    var $_ = {};
    
    Bridge.ns("Eticadata.Services.Admin.Backstage.Eportals.Configuracao", $_)
    
    Bridge.apply($_.Eticadata.Services.Admin.Backstage.Eportals.Configuracao, {
        f1: function (x) {
            return Eticadata.Services.Admin.Backstage.Eportals.ModuloExtensions.ToInstall(x) && Bridge.referenceEquals(Eticadata.Services.Admin.Backstage.Eportals.ModuloExtensions.Tag(x), "eCommerce");
        },
        f2: function (x) {
            return x.CodPais;
        },
        f3: function (g) {
            return g.count() > 1;
        },
        f4: function (y) {
            return new Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes("constructor", Bridge.String.format(Eticadata.Services.Admin.Backstage.Eportals.EportalsMessageController.getErroPreenchimentoPaisRepetido(), y.key()));
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.eCommercePais', {
        inherits: [Eticadata.Entity],
        CodPais: 0,
        AbrevMoeda: null,
        TipoTerceiro: 0
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.LogSincronizacao', {
        inherits: [Eticadata.Entity],
        Chave: null,
        ChaveValor: null,
        Id: Bridge.Long(0),
        OperationType: null,
        Plataforma: null,
        SincID: 0,
        Estado: false,
        Tabela: null
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Modulo', {
        inherits: [Eticadata.Entity],
        IsEnabled: false,
        TagEnum: 0,
        IsGce: false,
        IsGrh: false,
        IsAutoGest: false,
        IsCore: false,
        IsECommerce: false,
        CanUpdate: false,
        NovaVersao: null,
        Nome: null,
        Descricao: null,
        Icon: null,
        VersaoModulo: null,
        Estado: false,
        Instalacao: null,
        Actualizacao: null,
        ToInstall: false,
        isInstalled: false,
        MenuConfig: 0,
        Tag: null,
        ToUpdate: false,
        ToRemove: false,
        Papeis: null,
        config: {
            init: function () {
                this.ID = new Bridge.Guid();
            }
        },
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
    
            this.Papeis = Bridge.Array.init(0, null);
    
            this.IsEnabled = true;
            this.CanUpdate = false;
            this.NovaVersao = "";
        },
        getisInstalledOrToInstall: function () {
            return this.isInstalled || this.ToInstall;
        },
        setFlagsByTag: function () {
            this.IsCore = false;
            this.IsGce = false;
            this.IsGrh = false;
            this.IsAutoGest = false;
    
            switch (Bridge.Enum.parse(Eticadata.Services.Admin.Backstage.Eportals.ModuloTags, this.Tag, true)) {
                case Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Core: 
                    this.IsCore = true;
                    this.TagEnum = Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Core;
                    break;
                case Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Gce: 
                    this.IsGce = true;
                    this.TagEnum = Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Gce;
                    break;
                case Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Grh: 
                    this.IsGrh = true;
                    this.TagEnum = Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Grh;
                    break;
                case Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Ofi: 
                    this.IsAutoGest = true;
                    this.TagEnum = Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.Ofi;
                    break;
                case Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.ECommerce: 
                    this.IsECommerce = true;
                    this.TagEnum = Eticadata.Services.Admin.Backstage.Eportals.ModuloTags.ECommerce;
                    break;
            }
        },
        needsUpdate: function (Nome, Tag, Versao) {
            if (Bridge.referenceEquals(this.Nome, Nome) && Bridge.referenceEquals(this.Tag, Tag)) {
                if (Bridge.referenceEquals(this.VersaoModulo, Versao)) {
                    this.CanUpdate = false;
                }
                else  {
                    this.CanUpdate = true;
                    this.NovaVersao = Versao;
                }
            }
            else  {
                this.CanUpdate = false;
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ModuloDisponivel', {
        inherits: [Eticadata.Entity],
        Codigo: 0,
        Nome: null,
        Descricao: null,
        Tag: null,
        Versao: null,
        IDModulo: null,
        Papeis: null,
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Papeis = Bridge.Array.init(0, null);
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.ModuloDisponivelPapel', {
        inherits: [Eticadata.Entity],
        Codigo: 0,
        ModuloDisponivelCodigo: 0,
        Nome: null,
        Descricao: null,
        Index: 0,
        IsCliente: 0,
        IsFuncionario: 0,
        IsVendedor: 0,
        IsAdmin: 0
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Notificacao', {
        inherits: [Eticadata.Entity],
        ConfiguracaoID: 0,
        Email: null,
        Estado: false,
        ID: 0,
        OnClose: false,
        OnError: false,
        OnStart: false,
        OnStop: false,
        Linha: null,
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Estado = true;
            this.OnClose = true;
            this.OnError = true;
            this.OnStart = true;
            this.OnStop = true;
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Papel', {
        inherits: [Eticadata.Entity],
        TipoEntidade: 0,
        EnumTabela: 0,
        Nome: null,
        Descricao: null,
        Entidade: null,
        Estado: false,
        isAdmin: false,
        isCliente: false,
        isFuncionario: false,
        UtilizadorPapeis: null,
        UtilizadorPapeisDeleted: null,
        config: {
            init: function () {
                this.ID = new Bridge.Guid();
                this.ModuloID = new Bridge.Guid();
            }
        },
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.UtilizadorPapeis = Bridge.Array.init(0, null);
            this.UtilizadorPapeisDeleted = Bridge.Array.init(0, null);
        },
        setTipoEntidade: function () {
            if (this.isAdmin || this.isFuncionario) {
                this.TipoEntidade = Eticadata.Services.Admin.Backstage.Eportals.TipoEntidade.Funcionario;
                this.EnumTabela = Eticadata.ERP.EtiEnums.EnumTabela.Funcionarios;
                return;
            }
            if (this.isCliente) {
                this.TipoEntidade = Eticadata.Services.Admin.Backstage.Eportals.TipoEntidade.Cliente;
                this.EnumTabela = Eticadata.ERP.EtiEnums.EnumTabela.Clientes;
                return;
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Sincronizacao', {
        inherits: [Eticadata.Entity],
        Concluido: false,
        ConfigID: 0,
        DataFim: null,
        HasError: false,
        LogSincronizacoes: null,
        SincID: 0,
        config: {
            init: function () {
                this.DataInicio = new Date(-864e13);
            }
        },
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.LogSincronizacoes = Bridge.Array.init(0, null);
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Utilizador', {
        inherits: [Eticadata.Entity],
        Bloqueio: false,
        Chave: null,
        CodEntidade: null,
        dataSincronizado: null,
        Email: null,
        Entidade: 0,
        Estado: false,
        Nome: null,
        NomeEntidade: null,
        PortalKey: null,
        isSincronizado: false,
        TipoUtilizador: 0,
        ToUpdate: false,
        UserID: null,
        UtilizadorLocalizacoes: null,
        config: {
            init: function () {
                this.id = new Bridge.Guid();
            }
        },
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Estado = true;
            this.UtilizadorLocalizacoes = Bridge.Array.init(0, null);
            this.id = Bridge.Guid.newGuid();
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.UtilizadoresLocalizacao', {
        inherits: [Eticadata.Entity],
        Cidade: null,
        CodEntidade: 0,
        Continente: null,
        Host: null,
        IP: null,
        ISP: null,
        Pais: null,
        PrimeiroAcesso: null,
        Regiao: null,
        UltimoAcesso: null,
        UserID: 0,
        config: {
            init: function () {
                this.id = new Bridge.Guid();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.UtilizadorPapel', {
        inherits: [Eticadata.Entity],
        Data: null,
        Estado: false,
        Utilizador: null,
        config: {
            init: function () {
                this.PapelID = new Bridge.Guid();
                this.UtilizadorID = new Bridge.Guid();
            }
        }
    });
    
    Bridge.define('Eticadata.Services.Admin.Backstage.Eportals.Versao', {
        inherits: [Eticadata.Entity],
        Data: null,
        Descricao: null,
        Estado: false,
        Modulos: null,
        ModulosToSetup: null,
        Nome: null,
        Path: null,
        VersaoPortal: null,
        PackageDirectory: null,
        config: {
            init: function () {
                this.ID = new Bridge.Guid();
            }
        },
        constructor: function () {
            Eticadata.Entity.prototype.$constructor.call(this);
    
            this.Modulos = Bridge.Array.init(0, null);
            this.ModulosToSetup = Bridge.Array.init(0, null);
        },
        Validate: function () {
            return new Bridge.List$1(Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes)();
        }
    });
    
    Bridge.init();
})(this);
