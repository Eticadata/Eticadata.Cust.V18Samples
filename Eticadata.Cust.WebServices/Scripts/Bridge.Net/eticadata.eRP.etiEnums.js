﻿(function (globals) {
    "use strict";

    Bridge.define('Eticadata.ERP.EtiEnums.AbrevTipificationJournalSAFT', {
        statics: {
            cNormal: "N",
            cReg: "R",
            cApur: "A",
            cMovsAjus: "J"
        }
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ActiveCaseResult', {
        statics: {
            Allowed: 1,
            Forbidden: 2,
            ForbiddenActiveCase: 3,
            WarningActiveCase: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ActPrecosVendaModoArred', {
        statics: {
            Aritmetico: 0,
            ParaCima: 1,
            ParaBaixo: 2,
            ParaCimaX5: 3,
            ParaBaixoT9: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ActPrecosVendaPrecoBase', {
        statics: {
            PrecoActual: 0,
            PrecoCustoUltimo: 1,
            PrecoCustoMedio: 2,
            PrecoReferencia: 3,
            LinhaPreco: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ActPrecosVendaTipoCalculo', {
        statics: {
            Linear: 0,
            Simples: 1,
            Forte: 2,
            SimplesArt: 3,
            ForteArt: 4,
            PrecoCompraAntesDesc: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Anexos_TipoFicheiro', {
        statics: {
            Report: 0,
            FicheiroBD: 1,
            FicheiroDir: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Avisos_Grelhas_ActivacaoSQLNotificationQuery', {
        statics: {
            Codigo: 1,
            Designacao: 2,
            bdados: 3,
            EmpSelect: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.bcStyle', {
        statics: {
            bcStyleNone: 0,
            bcStyle2of5: 1,
            bcStyleInterleaved2of5: 2,
            bcStyle3of9: 3,
            bcStyleCodabar: 4,
            bcStyle3of9e: 5,
            bcStyleCode128A: 6,
            bcStyleCode128B: 7,
            bcStyleCode128C: 8,
            bcStyleUPCA: 9,
            bcStyleMSI: 10,
            bcStyleCode93: 11,
            bcStyleExtendedCode93: 12,
            bcStyleEAN13: 13,
            bcStyleEAN8: 14,
            bcStylePostNet: 15,
            bcStyleANSI3of9: 16,
            bcStyleANSI3of9extended: 17,
            bcStyleCode128: 18,
            bcStyleUCCEAN128: 19
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CamposFiltroChequesValesValesdesconto', {
        statics: {
            CodigoDescricao: 0,
            Codigo: 1,
            Descricao: 2,
            Descontado: 3,
            Cancelado: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CamposOrdemMovLin', {
        statics: {
            NaoDefinida: 0,
            ArtigoCodigo: 1,
            ArtigoDescricao: 2,
            ArmazemCodigo: 3,
            ArmazemDescricao: 4,
            ArmazemLocalizacao: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ClassificationTypeDiverseProduct', {
        statics: {
            MerchandiseServices: 0,
            Others: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.cNameMenu', {
        statics: {
            None: -1,
            General: 0,
            ReducedPE: 1,
            ReducedME: 2,
            EntConsolidated: 3,
            SNCAnt: 4,
            Others: 5,
            POC: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CodTabelas', {
        statics: {
            Nenhum: -1,
            Todos: 0,
            EncomCli: 1,
            EncomFor: 2,
            EncomArm: 3,
            Compras: 4,
            Encargos: 5,
            Stocks: 6,
            Inventarios: 7,
            FolhasObra: 8,
            Producoes: 9,
            Vendas: 10,
            Liquidacoes: 11,
            LetrasRec: 12,
            LetrasPag: 13,
            MovLetrasRec: 14,
            MovLetrasPag: 15,
            ComissoesIntrod: 16,
            ComissoesLiq: 17,
            TesMovPrev: 18,
            TesMovReais: 19,
            TesTaloesDep: 20,
            TesReconcMov: 21,
            OpCaixa: 22,
            Contabilidade: 23,
            Orcamentos: 24,
            Encomendas: 25,
            Letras: 26,
            TesLevantTransf: 27,
            Artigos: 28,
            Clientes: 29,
            EstabEnsino: 30,
            Familias: 31,
            Fornecedores: 32,
            OutrosCredores: 33,
            OutrosDevedores: 34,
            Promocoes: 35,
            Referencias: 36,
            Vendedores: 37,
            TesContas: 38,
            OficinasOrdReparacao: 39,
            OficinasRequisicao: 40,
            OficinasEntFacturacao: 41,
            StandsProcessos: 42,
            StandsProcessosRAC: 43,
            OficinasMarcacao: 44,
            OficinasRecepcao: 45,
            OficinasOrcamentos: 46,
            Viaturas: 47,
            GRH_Funcionarios: 48,
            GRH_Seguradoras: 49,
            GRH_SegurancaSocial: 50,
            GRH_AbonosDescontosFaltas: 51,
            GRH_TiposContrato: 52,
            GRH_Proc_AbonosDescontos: 53,
            GRH_Proc_AbonosDescontosProcessados: 54,
            GRH_Proc_Faltas: 55,
            GRH_Proc_FaltasProcessadas: 56,
            GRH_Proc_AbonosCessacao: 57,
            GRH_Proc_Exames: 58,
            GRH_Proc_Consultas: 59,
            IMO_Fichas_Imobilizado: 60,
            IMO_TiposDocumentos_Aquisicoes: 61,
            IMO_TiposDocumentos_Reparacoes: 62,
            IMO_TiposDocumentos_Abates: 63,
            IMO_TiposDocumentos_AbatesAlienacoes: 64,
            GRH_Processamentos: 65,
            StandsPotenciaisClientes: 66,
            IMO_TiposDocumentos_AbatesCbl: 67,
            IMO_TiposDocumentos_Revalorizacoes: 68,
            IMO_TiposDocumentos_PerdasImparidade: 69,
            IMO_TiposDocumentos_RevalorizacoesLegais: 70,
            TesFolhasCaixa: 71,
            APV_Orcamentos: 72,
            APV_Reparacoes: 73,
            APV_Entregas: 74,
            APV_Equipamentos: 75,
            APV_PedidoApoio: 76,
            Condutores: 77,
            FrotasViagens: 78,
            FrotasSinistros: 79,
            Concurso: 80,
            GOP_Processos: 81,
            GOP_Orcamentos: 82,
            GOP_Projectos: 83,
            GOP_AutosMedicao: 84,
            GRH_Formacao_Cursos: 85,
            GRH_Formacao_Cursos_Funcionarios: 86,
            GRH_Formacao_Accoes_Formacao: 87,
            GRH_SSST_Accoes_Funcionarios: 88,
            GRH_SSST_Accoes_Medicas: 89,
            GRH_SSST_Factores_Risco: 90,
            GRH_SSST_Factores_Risco_Doenca: 91,
            GRH_SSST_Acidentes_Trabalho: 92,
            Contratos: 93,
            Atividades: 94,
            ClientesPotenciais_Oportunidades: 95,
            HTL_Reservas: 96,
            HTL_Clientes_Entidades: 97,
            HTL_Clientes_Hospedes: 98,
            HTL_Tarifas: 99,
            HTL_Diarias: 100,
            HTL_Encargos: 101,
            HTL_Alojamentos: 102,
            APV_Marcacoes: 103,
            Tecnicos: 104,
            Solucoes: 105,
            APV_Instalacoes: 106,
            Direccoes: 107,
            GRH_Formacao_Entidades: 108,
            GRH_SSST_EntidadesPrestServ: 109,
            GRH_SSST_ProfissionaisSaudeSeg: 110,
            HTL_PerdidosAchados: 111,
            Cli_Consultas: 112,
            Operadores: 113,
            TiposContadores: 114,
            GOP_FolhasObra: 115,
            Contactos: 116,
            GRH_SSST_Motivos_Acidente: 117,
            GRH_SSST_Medidas_Acidentes: 118,
            VendedoresEncargos: 119,
            AutomaticActivity: 120,
            TiposAtividades: 121,
            Campaigns: 122,
            eMedical_Prescription: 123,
            GRH_Proc_AbonosDescontosCessacaoProcessados: 124
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CommunicationOrigin', {
        statics: {
            CompensationFunds: 0,
            Employee: 1,
            CeaseContract: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CommunicationTypes', {
        statics: {
            acceptEmployee: 0,
            breakContract: 1,
            createPeriod: 2,
            removePeriod: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ConfigEmpresa', {
        statics: {
            tNomeComercial: 0,
            tActividade: 1,
            tMoradaL1: 2,
            tMoradaL2: 3,
            tLocalidade: 4,
            tCodPostal: 5,
            tTelefone: 6,
            tFax: 7,
            tEmail: 8,
            tCapSocial: 9,
            tMatricula: 10,
            tConsRegCom: 11,
            tCodRepFin: 12,
            tBairroFiscal: 13,
            tLivro: 14,
            tConcelho: 15,
            tFolhas: 16,
            tNIdentificacao: 17,
            tTpIdentificacao: 24,
            tCAE: 18,
            cAltMovOutrasApps: 19,
            cDebDifCred: 20,
            cValoresNegativos: 21,
            cConfValBaseImpSelo: 22,
            tMunicipio: 23,
            mod22Pag1Sup: 24,
            mod22Pag1Esq: 25,
            mod22Pag2Sup: 26,
            mod22Pag2Esq: 27,
            mod22Pag3Sup: 28,
            mod22Pag3Esq: 29,
            mod22PagASup: 30,
            mod22PagAEsq: 31,
            AnualRostoSup: 32,
            anualRostoEsq: 33,
            AnualAnexoA1Sup: 34,
            AnualAnexoA1Esq: 35,
            AnualAnexoA2Sup: 36,
            AnualAnexoA2Esq: 37,
            AnualAnexoA3Sup: 38,
            AnualAnexoA3Esq: 39,
            AnualAnexoB1Sup: 40,
            AnualAnexoB1Esq: 41,
            AnualAnexoB2Sup: 42,
            AnualAnexoB2Esq: 43,
            AnualAnexoB3Sup: 44,
            AnualAnexoB3Esq: 45,
            AnualAnexoC1Sup: 46,
            AnualAnexoC1Esq: 47,
            AnualAnexoC2Sup: 48,
            AnualAnexoC2Esq: 49,
            AnualAnexoC3Sup: 50,
            AnualAnexoC3Esq: 51,
            AnualAnexoD1Sup: 52,
            AnualAnexoD1Esq: 53,
            AnualAnexoD2Sup: 54,
            AnualAnexoD2Esq: 55,
            AnualAnexoE1Sup: 56,
            AnualAnexoE1Esq: 57,
            AnualAnexoE2Sup: 58,
            AnualAnexoE2Esq: 59,
            AnualAnexoF1Sup: 60,
            AnualAnexoF1Esq: 61,
            AnualAnexoF2Sup: 62,
            AnualAnexoF2Esq: 63,
            AnualAnexoG1Sup: 64,
            AnualAnexoG1Esq: 65,
            AnualAnexoH1Sup: 66,
            AnualAnexoH1Esq: 67,
            AnualAnexoI1Sup: 68,
            AnualAnexoI1Esq: 69,
            AnualAnexoI2Sup: 70,
            AnualAnexoI2Esq: 71,
            AnualAnexoI3Sup: 72,
            AnualAnexoI3Esq: 73,
            AnualAnexoJ1Sup: 74,
            AnualAnexoJ1Esq: 75,
            AnualAnexoJ2Sup: 76,
            AnualAnexoJ2Esq: 77,
            AnualAnexoL1Sup: 78,
            AnualAnexoL1Esq: 79,
            AnualAnexoM1Sup: 80,
            AnualAnexoM1Esq: 81,
            AnualAnexoN1Sup: 82,
            AnualAnexoN1Esq: 83,
            AnualAnexoOP1Sup: 84,
            AnualAnexoOP1Esq: 85,
            AnualAnexoOP2Sup: 86,
            AnualAnexoOP2Esq: 87,
            AnualAnexoQ1Sup: 88,
            AnualAnexoQ1Esq: 89,
            DeclPerP1Sup: 90,
            DeclPerP1Esq: 91,
            DeclPerP2Sup: 92,
            DeclPerP2Esq: 93,
            DeclPerTI1Sup: 94,
            DeclPerTI1Esq: 95,
            DeclPerCAM1Sup: 96,
            DeclPerCAM1Esq: 97,
            ImpSeloSup: 98,
            ImpSeloEsq: 99,
            DeclPerCheque: 100,
            DeclPerForma: 101,
            DeclPerNaoPreencher: 102,
            DeclPerReembolso: 103,
            InicioRegimeData: 104,
            CessacaoActividadeData: 105,
            LocalizacaoDaSede: 107,
            NIF_RepLegal: 108,
            LimiteRecapitulativoModAnterior: 109,
            LimiteRecapitulativoModActual: 110,
            tCodigoBarras: 111,
            tDataFechoGCE: 112,
            tComiMultOrdem: 114,
            cActAutPrVnd: 115,
            cActAutPrVndTpCalc: 116,
            cActAutPrVndVlBaseCalc: 117,
            cActAutPrVndMargDef: 118,
            tActAutPrVndLinPrAct: 119,
            cNaoActualizarFornRef: 120,
            cUsaInvPermanente: 121,
            cApresDadosEmpDocs: 122,
            tPubDocsInicio: 123,
            tPubDocsFim: 124,
            tPubDocsMsg: 125,
            tAv1: 126,
            tAv1Ass: 127,
            tAv1AtrasoMin: 128,
            tAv1AtrasoMax: 129,
            tAv1txtInic: 130,
            tAv1txtFin: 131,
            tAv1txtConf: 132,
            tAv2: 133,
            tAv2Ass: 134,
            tAv2AtrasoMin: 135,
            tAv2AtrasoMax: 136,
            tAv2txtInic: 137,
            tAv2txtFin: 138,
            tAv2txtConf: 139,
            tAv3: 140,
            tAv3Ass: 141,
            tAv3AtrasoMin: 142,
            tAv3AtrasoMax: 143,
            tAv3txtInic: 144,
            tAv3txtFin: 145,
            tAv3txtConf: 146,
            tAv4: 147,
            tAv4Ass: 148,
            tAv4AtrasoMin: 149,
            tAv4AtrasoMax: 150,
            tAv4txtInic: 151,
            tAv4txtFin: 152,
            tAv4txtConf: 153,
            cNaoAviInexArt: 154,
            cMovQtdVlrNeg: 155,
            cUsaRetencaoIRS: 156,
            tUsaRetencaoIRSTaxa: 157,
            tUsaRetencaoIRSTxInci: 158,
            tUsaRetencaoIRSMsg: 159,
            cStkNegArtArmLoc: 160,
            cStkNegArtArmLocEA: 161,
            cStkNegNumSerie: 162,
            cStkNegNumSerieEA: 163,
            cStkNegLote: 164,
            cStkNegLoteEA: 165,
            NIF_TOC: 170,
            cRecuperNumeradores: 171,
            cRecuperNumeradoresAut: 172,
            tSugestaoLoteEntrada: 173,
            tSugestaoLoteSaida: 174,
            tEmpAbrevZona: 175,
            tEmpAbrevSubZona: 176,
            cCalculaJurosMora: 177,
            tTaxaJuros: 178,
            cUsaDescargaContabilidade: 179,
            cUsaDescargaOnLineTaloes: 180,
            cUsaDescargaOnLineTrans: 181,
            cValidaCodigoBarras: 182,
            tNormaCodigoBarras: 183,
            tTamanhosLivrosSelados: 184,
            cGestaoReservas: 185,
            cGestaoReservasSemStock: 186,
            sConfiguracaoCheque: 187,
            tMesesRapel: 189,
            tValoresIvaRapel: 190,
            tDireccaoAlternativaRapel: 191,
            Modelo3RostoPag1Esq: 192,
            Modelo3RostoPag1Sup: 193,
            Modelo3AnexoAPag1Esq: 194,
            Modelo3AnexoAPag1Sup: 195,
            Modelo3AnexoCPag1Esq: 196,
            Modelo3AnexoCPag1Sup: 198,
            Modelo3AnexoCPag2Esq: 199,
            Modelo3AnexoCPag2Sup: 200,
            /**
             * @static
             * @public
             * @memberof Eticadata.ERP.EtiEnums.ConfigEmpresa
             * @constant
             * @default 201
             * @type Eticadata.ERP.EtiEnums.ConfigEmpresa
             */
            tValorLetra: 201,
            tOutraReferencia: 202,
            tLocalEmissao: 203,
            cEfectuarCalcLucroTributavel: 204,
            /**
             * @static
             * @public
             * @memberof Eticadata.ERP.EtiEnums.ConfigEmpresa
             * @constant
             * @default 205
             * @type Eticadata.ERP.EtiEnums.ConfigEmpresa
             */
            mod22PagBSup: 205,
            mod22PagBEsq: 206,
            tIntraCentroRecolha: 207,
            tIntraNumCopias: 208,
            tIntraEmitir: 209,
            tIntraNIF: 210,
            tIntraContacto: 211,
            tIntraEmpresa: 212,
            tIntraMorada: 213,
            tIntraTel: 214,
            tIntraFax: 215,
            tIntraEmail: 216,
            tIntraEmpContacto: 218,
            tEscalaoA: 219,
            tEscalaoB: 220,
            tEscalaoc: 221,
            cStkNegEdicao: 222,
            cStkNegEdicaoEA: 223,
            tCodigoEAN: 225,
            cIntegracaoDados: 226,
            cExcluirContas: 227,
            tInteValores: 228,
            cGerirParamStkPArmazem: 229,
            cAutoActualizarPrecosArtRef: 230,
            tIntraCodPostal: 231,
            tIntraLocalidade: 232,
            tIntraNumSequencial: 233,
            tIntraTpDeclaracao: 234,
            cIntraPedidoRecepcao: 235,
            cIntraTeste: 236,
            cArquivoDigital: 237,
            tArquivoDigitalCaminhoBD: 238,
            tArquivoDigitalCodEmpresa: 239,
            tTempoEspera: 240,
            /**
             * @static
             * @public
             * @memberof Eticadata.ERP.EtiEnums.ConfigEmpresa
             * @constant
             * @default 241
             * @type Eticadata.ERP.EtiEnums.ConfigEmpresa
             */
            cSomaAutomaticaQtds: 241,
            ConfigListagemExportacao: 242,
            cValidaCBNorma: 243,
            DeclPerMostraNIDE: 244,
            tTempoConnEspera: 245,
            tTempoCmdEspera: 246,
            cNCDecCambios: 247,
            cOfiAvisoRevisao: 249,
            cOfiAvisoRevisao_Mostrar: 251,
            cOfiAvisoRevisao_Dias: 252,
            cStdTaxaJuros: 253,
            cStdGerarArtigo: 254,
            cStdUsaGuiaComprasProcesso: 255,
            POS_MapaFimCaixa_Artigos: 256,
            POS_MapaFimCaixa_Pagamentos: 257,
            POS_MapaFimCaixa_Funcionario: 258,
            POS_MapaFimCaixa_ResumoDia: 259,
            POS_MapaFimCaixa_Descontos: 260,
            POS_MapaFimCaixa_ConsumosInternos: 261,
            POS_MapaFimCaixa_Desperdicios: 262,
            POS_MapaFimCaixa_Postos: 263,
            POS_MapaFimCaixa_FamiliasArtigos: 264,
            POS_MapaFimCaixa_Familias: 278,
            POS_MapaFimCaixaPersonalizados: 265,
            POS_MapaFimCaixa_Anulacoes: 277,
            POS_MapaFimCaixa_ConsumosHotel: 279,
            POS_SuiteEndereco: 280,
            POS_SuiteUtilizador: 281,
            POS_SuitePass: 282,
            POS_MapaFimCaixa_Recebimentos: 283,
            POS_PortaAntenaX64: 266,
            POS_BaudRateX64: 267,
            Grh_NSegSocial: 268,
            tProcArtigoStkEncArm: 269,
            tProcArtigoVndEncCliOrc: 270,
            tProcArtigoCmpEncFor: 271,
            tProcArtigoFOProd: 272,
            tProcArtigoContagens: 273,
            tProcArtigoTabPrecos: 274,
            tProcArtigoTermContagem: 275,
            tProcArtigoOutros: 276,
            cStdDefineArtigo: 294,
            cDataIMPG_GceCteOfiStd: 295,
            cDataIMPG_Investimento: 296,
            cDataIMPG_RecurHumanos: 297,
            cCRM_LigacaoActiva: 300,
            cCRM_Server: 301,
            cCRM_CrmLogin: 302,
            cCRM_CrmPwd: 303,
            cCRM_Uomid: 304,
            cCRM_Uomscheduleid: 305,
            cCRM_Pricelevelid: 306,
            cCRM_ClienteCustomerTypeCode: 307,
            cCRM_FornecedorCustomerTypeCode: 308,
            cCRM_NumLinPrecArtigo: 309,
            cCRM_WsEticadata: 310,
            cCRM_EtiLogin: 311,
            cCRM_EtiPwd: 312,
            tFEDirectoriaExportacao: 313,
            tFEDirectoriaImportacao: 314,
            tFEAplicacaoLigacao: 315,
            tFEParamsExportacao: 316,
            tFEParamsImportacao: 317,
            cOFIViaturaRevisaoTpIntervalo: 318,
            cOFIEntregaViaturaEntregue: 320,
            cStdUsaGuiaVendasProcesso: 321,
            cStdRentACar_IdentificacaoAlvara: 322,
            cOfiAvisoORAbertasViatura_NaoMostrar: 323,
            cOfiGuardarLigacaoMovimentos: 324,
            tOFIDocsVenda_PermitirAlterarNaGCEP: 325,
            cCRM_Integra_Clientes: 326,
            cCRM_Integra_Fornecedores: 327,
            cCRM_Integra_Contactos: 328,
            cCRM_Integra_Orcamentos: 329,
            cCRM_Integra_Encomendas: 330,
            cCRM_Integra_Vendas: 331,
            cCRM_Integra_Artigos: 332,
            cCRM_Integra_ArtigosRef: 333,
            cCRMSTDP_Integra_Viaturas: 334,
            cCRMSTDP_Integra_TiposViaturas: 335,
            cCRMSTDP_Integra_Equipamentos: 336,
            cCRMSTDP_Integra_Garantias: 337,
            cCRMSTDP_Integra_Situacoes: 338,
            cCRMSTDP_Integra_Localizacoes: 339,
            cCRMSTDP_Integra_Marcas: 340,
            cCRMSTDP_Integra_Modelos: 341,
            cCRMSTDP_Integra_Combustiveis: 342,
            cCRMSTDP_Integra_Cores: 343,
            cCRMSTDP_Integra_Locadoras: 344,
            cCRM_VERSAO_PERSONALIZACAO: 345,
            cStdRentACar_DiscriminaItensDocVenda: 346,
            cStdRentACar_ConfiguraVendaSeguradora: 347,
            cStdAlertaGravarProcesso: 348,
            cImprimeMapaCaixa: 350,
            cImprimeDupFita: 351,
            cImprimeMapaVendas_VendArt: 352,
            cCRM_Integra_Vendedores: 353,
            cPermitePagamentoComVariosCartoesPrePagos: 354,
            cCRM_Integra_Referencias: 355,
            cCRM_VendedorCustomerTypeCode: 356,
            cOFIRequisicao_VerPrecoVenda: 357,
            cOFIRequisicao_LinhaPrecoVenda: 358,
            POS_NaoMostraMenusAutomaticamente: 359,
            POS_ObrigaIniciarCartoes: 360,
            cOfiEntrega_DefineVendedor: 361,
            cIgnorarSugLoteEncomCli: 362,
            cIgnorarSugLoteEncomFor: 363,
            cCRM_WAppEticadata: 364,
            cCRM_IntegrarStands: 365,
            cOfiEntrega_AgrupaServMat: 366,
            cOfiEntrega_DiscriminaItensDocVenda: 367,
            cCRM_Integra_OutrosDevedores: 368,
            cCRM_Integra_OutrosCredores: 369,
            cSMS_Login: 370,
            cSMS_Password: 371,
            cSMS_Aplicacao: 372,
            cSMS_Originador: 373,
            cSMS_Validade: 374,
            cSMS_Proxy: 375,
            cSMS_ProxyServer: 376,
            cSMS_ProxyDomain: 377,
            cSMS_ProxyLogin: 378,
            cSMS_ProxyPassword: 379,
            POS_ValorMinimoFacturacao: 381,
            cAnexosDirectoria: 382,
            POS_NaoImprimeComentarios: 383,
            cStdRentACar_FactorArredondaDia: 384,
            cStdRentACar_FactorArredondaHora: 385,
            cStdRentACar_LocalizacaoEntrega: 386,
            cStdRentACar_LocalizacaoRecolha: 387,
            cStdDocumentacao_SugerirNovoGravar: 388,
            ModulosInactivos: 391,
            cOfiIntegUltimoMovOrigem: 392,
            POS_CompletarMenusAuto: 393,
            cOfiAvisoInspeccao: 394,
            cOfiMarcacao_RptName: 395,
            cOfiOrcamento_IntegrarAprovados: 396,
            POS_ValidadeValesDesconto: 397,
            POS_DocValeDesconto: 398,
            Sistema: 399,
            POS_MoedaAlternativa: 400,
            POS_Doc_Mapa_CaixaFechoMov: 401,
            POS_Doc_Mapa_CaixaVendedorArt: 402,
            cCRM_TerritoryId: 403,
            cCRM_SubZonaDefault: 404,
            cCRM_IntegraSubZonas: 405,
            cHideTablesPanel: 406,
            cOfiRequisicao_AnularLinhaOR: 410,
            POS_X64_MAIS8PASTA: 411,
            cOfiGuardarGerarArtigos: 412,
            tFEProximaEtiqueta: 413,
            cOfiMarcacao_HorarioEmpresa: 414,
            cOfiMarcacao_MarcarForaHorario: 415,
            cOfiMarcacao_HorasVisiveis: 416,
            cStdApresentacao_Descricoes: 417,
            cOFIIntegracaoOR2Req_ImportarCA_Linhas: 418,
            cOFIIntegracaoReq2OR_ImportarCA_Linhas: 419,
            POS_Doc_Mapa_CaixaFechoMovBackOffice: 420,
            cOFIIntegracaoOR2Req_ImportarCA_Cab: 421,
            cOFIIntegracaoReq2OR_ImportarCA_Cab: 422,
            cOFIIntegracaoReq2STK_ImportarCA_Cab: 423,
            cOFIIntegracaoReq2STK_ImportarCA_Linhas: 424,
            cOfiOrdem_FechoAvisaReqEmFalta: 425,
            cOfiOrdem_FechoGeraReqEmFalta: 426,
            cStdVersao_GeraArtigo: 428,
            cOfiEntrega_AvisaViatura: 429,
            cOfiEntrega_AvisaSeleccionar_Gravar: 430,
            Autogest_FleetData_DataUltimoPedido: 431,
            POS_MostraConsumosCartoes: 432,
            cDebitarDifCambiaisMoedaForte: 433,
            cStdProcesso_DocComissaoManual: 434,
            cOFIEntregaAcertoStock: 435,
            cStdPotClientes_Configuracao: 436,
            tPais: 437,
            tPersonalizadasTamDesc: 438,
            POS_GravaUltimoVend: 439,
            POS_NumLinhaPrecoPesquisa: 440,
            SNC_JA_ACTUALIZOU_TBL_GCE: 441,
            cOfiOrdem_AvisaGravar_Seleccionar: 442,
            cDescPromSubstAcum: 443,
            cStdProcesso_AvisoORAberta_GerarVND: 444,
            cStdProcesso_AvisoORAberta_FecharProcesso: 445,
            cOfiAgenda_DuploClique: 446,
            cOfiAgenda_Apresentacao: 447,
            cOfiAgenda_ToolTip: 448,
            cMEMNCambios: 449,
            cStdGeraProcesso_TipoProcesso: 450,
            POS_InicioValidadeValesDesconto: 451,
            cStdMultiViatura_TipoChave: 452,
            POS_AtribuiValorAPagarDefeito: 453,
            cConfigReportFolhasCaixa: 454,
            cConfigReportReconciliacao: 455,
            cConfigReportTransfBancaria: 456,
            cOfiAvisoInspeccao_Dias: 457,
            cAgruparDataDispArtigo: 460,
            cOfiPesquisaPartNumber_PrecoVenda: 461,
            cStdPotClientes_Ficha: 462,
            cCRM_VersaoCrm: 463,
            cOfiOrdem_QtdPrevista: 464,
            cTipoEsquemaCoresReport: 465,
            cBackColor3: 466,
            cBackColor2: 467,
            cBackColor1: 468,
            cForeColorTitulo: 469,
            cForeColorTextoFixo: 470,
            cForeColorTexto: 471,
            cColorLinha: 472,
            cEmpresaParaFinsDeFormacao: 473,
            cStdRentACar_DirectoriaFicheiros: 474,
            cEmpresaDemoCertificada: 475,
            POS_PagamentosAcertosLancaLinha: 476,
            cOfiRepetirOR_Anular: 477,
            cStdRentACar_TipoSeguroLivre: 478,
            consolidacao: 479,
            cOfiHorario_HoraExtra: 480,
            cStdRentACar_DefineVendedor: 481,
            INV_MapasFiscaisAgrupaEstab: 482,
            cProcArtigo: 483,
            cProcArmazens: 484,
            cProcLotes: 485,
            cProcClientes: 486,
            cProcFornecedores: 487,
            cProcVendedores: 488,
            cProcFuncionarios: 489,
            cProcHospedes: 490,
            cProcEntidades: 491,
            cOfiOrca_ValidaExisteSTK: 511,
            cOfiOrcaOR_InternoUsaIVAArtigo: 512,
            tOfiGuardarGerarArtigosActividades: 513,
            EditorAnexos: 514,
            MontanteOperRecapIVA: 515,
            cOfiAgenda_ValoresDefeito: 516,
            POS_RecalcularPrecosVendaJuntaMesas: 517,
            FichaEntidadeMovsCte: 518,
            cApvRptName_Equipamento: 519,
            cApvIntegracaoRep2Req_ImportarCA_Cab: 520,
            cApvIntegracaoReq2Rep_ImportarCA_Cab: 521,
            cApvIntegracaoReq2STK_ImportarCA_Cab: 522,
            cApvIntegracaoRep2Req_ImportarCA_Linhas: 523,
            cApvIntegracaoReq2Rep_ImportarCA_Linhas: 524,
            cApvIntegracaoReq2STK_ImportarCA_Linhas: 525,
            cApvDocsVenda_PermitirAlterarNaGCEP: 526,
            cApvOrcaRep_InternoUsaIVAArtigo: 527,
            cApvAvisoRepAbertasEquipamento_NaoMostrar: 528,
            cApvRptName_Marcacao: 529,
            cApvOrcamento_IntegrarAprovados: 530,
            cApvMarcacao_MarcarForaHorario: 531,
            cApvReparacao_FechoAvisaReqEmFalta: 532,
            cApvReparacao_FechoGeraReqEmFalta: 533,
            cApvReparacao_EquipaAvisaGravar_Seleccionar: 534,
            cApvReparacao_QtdPrevista: 535,
            cApvOrca_ValidaExisteSTK: 536,
            cApvMarcacao_HorarioEmpresa: 537,
            cApvEntrega_SugereEquipamentoEntregue: 538,
            cApvCaucao_Tipo: 539,
            cApvCaucao_Abreviatura: 540,
            cApvCaucao_Valor: 541,
            cApvMovimentos_PermiteSemEquipamento: 542,
            cApvMovimentos_AvisaSemEquipamento: 543,
            tIntraTipo: 544,
            tIntraCalcValEstatistico: 545,
            tErm_TipoIntegracao: 546,
            tErm_CredenciaisUtilizar: 547,
            tErm_UrlWebServiceExchange: 548,
            tErm_Dominio: 549,
            tErm_VersaoExchange: 550,
            cApvCaucao_Novo: 551,
            cApvCaucao_TaxaIva: 552,
            cAplicFiscais2013: 553,
            cStdRentACar_UsaGuiaVendasProcesso: 554,
            POS_DocEntregaServico: 555,
            cApvRptName_Instalacao: 556,
            cApvEntrega_MsgAcerto: 557,
            cStdRentACar_MsgAcerto: 558,
            cApvEntrega_DiscriminaItensDocVenda: 560,
            cApvEntrega_AgrupaServMat: 561,
            cApvIntegUltimoMovOrigem: 562,
            cApvGuardarGerarArtigos: 563,
            cApvEntrega_DefineVendedor: 564,
            cOfiOrdem_FechoAbrirEntrega: 565,
            cApvReparacao_FechoAbrirEntrega: 566,
            cCtbLiqPendentes: 567,
            cStdRentACar_DefineNumCartaVerde: 568,
            cCtbNaoReplicaDescricao: 569,
            tErm_CalendarMinNumYears: 570,
            tErm_CalendarMaxNumYears: 571,
            tErm_SMSOperator: 572,
            tErm_SMSParameters: 573,
            tErm_SMSGateway: 574,
            tErm_SMSAnswer: 575,
            tErm_EmailGenerateActivityType: 576,
            tErm_SMSMaxLength: 577,
            cApvEquipamento_NaoValidaDatasHistorico: 578,
            tErm_AttachmentMaxLength: 579,
            cERMAgendaCorHorario: 580,
            cERMNotificarConflito: 581,
            cCtePlanosOperacionais: 582,
            cAssinaturaDigital_UsaAssinatura: 583,
            cAssinaturaDigital_NomeCertificacao: 584,
            cAssinaturaDigital_PasswordCertificao: 585,
            cAssinaturaDigital_SituacaoAnexoOriginal: 586,
            cAssinaturaDigital_SituacaoAnexo2aVia: 587,
            cAssinaturaDigital_Anexo: 588,
            POS_ExchangeDays: 589,
            POS_DocExchange: 590,
            POS_DocExchangeHash: 591,
            OFI_VehicleValidateVIN: 592,
            tERMTypeAuthentication: 593,
            OFI_RequisitionSeePriceCost: 594,
            POS_ValidityDaysRefundVouchers: 595,
            RAC_UsesIndividualBillingDamage: 596,
            RAC_UsesFineBillingDamage: 597,
            tErm_SMSAttemps: 598,
            tErm_SMSHTTPMethod: 599,
            RAC_QuerySearchVehicle: 600,
            cAssinaturaDigital_VisibleSignature: 601,
            cAssinaturaDigital_SignatureImg: 602,
            cAssinaturaDigital_SignatureReason: 603,
            cAssinaturaDigital_SignatureContact: 604,
            cAssinaturaDigital_SignatureLocation: 605,
            cAssinaturaDigital_SignatureLeftPosition: 606,
            cAssinaturaDigital_SignatureBottomPosition: 607,
            cAssinaturaDigital_SignatureWidth: 608,
            cAssinaturaDigital_SignatureHeight: 609,
            cAssinaturaDigital_SignaturePage: 610,
            STD_UpdateVehicleItemCost: 611,
            cCtbExerciseMultiAnnual: 612,
            OFI_UsesRealMargin: 613,
            APV_UsesRealMargin: 614,
            cOfiMarcacao_BlockAfterIntegration: 615,
            APV_MovsAndContracts_AutoAssociate: 616,
            APV_MovsAndContracts_AutoAssociateNotify: 617,
            APV_MovsAndContracts_AutoAssociateShowPanel: 618,
            RAC_PricesDiscountsPerUse_BaseValueType: 619,
            Grh_QPessoal_NumPessoas: 900,
            Grh_QPessoal_CapitalPublico: 902,
            Grh_QPessoal_CapitalPrivadoNacional: 903,
            Grh_QPessoal_CapitalEstrangeiro: 904,
            Grh_QPessoal_VolVendas: 905,
            Grh_QPessoal_AnoConst: 906,
            Grh_TipoProc: 907,
            Grh_CalcSalHoraArred: 908,
            Grh_PermiteVencimentoZero: 909,
            Grh_UsaTurnosRotativos: 910,
            Grh_MoedaMinimaArred: 911,
            Grh_MoedaMinimaAFavorDe: 912,
            Grh_AbonoParaFalhas: 913,
            Grh_SubNatalMes: 915,
            Grh_SubNatalDataRecDia: 916,
            Grh_SubNatalDataRecData: 917,
            Grh_SubFeriasDataRec: 918,
            Grh_PeriodoProcTipo: 919,
            Grh_PeriodoProcUltimoDia: 920,
            Grh_DiasFolgaPrinc: 921,
            Grh_DiasFolgaSupl: 922,
            Grh_CGACodServico: 923,
            Grh_CGATaxaEmp: 924,
            Grh_CGATaxaSubs: 925,
            Grh_CGAContaDescCte: 926,
            Grh_ADSETaxaSubs: 927,
            Grh_MapasSeguro_Col1: 928,
            Grh_MapasSeguro_Col2: 929,
            Grh_MapasSeguro_Col3: 930,
            Grh_MapasSeguro_Col4: 931,
            Grh_MapasFolhaFerias_Abn1: 932,
            Grh_MapasFolhaFerias_Abn2: 933,
            Grh_MapasFolhaFerias_Abn3: 934,
            Grh_MapasFolhaFerias_Abn4: 935,
            Grh_MapasFolhaFerias_Desc1: 936,
            Grh_MapasFolhaFerias_Desc2: 937,
            Grh_MapasFolhaFerias_Desc3: 938,
            Grh_MapasContaCorrente_Abn1: 939,
            Grh_MapasContaCorrente_Abn2: 940,
            Grh_MapasContaCorrente_Abn3: 941,
            Grh_MapasContaCorrente_Abn4: 942,
            Grh_MapasContaCorrente_Desc1: 943,
            Grh_MapasContaCorrente_Desc2: 944,
            Grh_MapasContaCorrente_Desc3: 945,
            Grh_FltInicFimContrato: 946,
            Grh_FltInicFimContratoCalculo: 947,
            Grh_Qpessoal_NatJuridica: 948,
            Grh_Qpessoal_AssocPatronal: 949,
            Grh_SubFeriasProcessar: 950,
            Grh_DataFecho: 951,
            Grh_MapaSegurancaSocial_TipoFolhaImpresso: 952,
            Grh_MapaSegurancaSocial_Impressao: 953,
            Grh_MapaSegurancaSocial_Guia_TipoPagamento: 954,
            Grh_MapaSegurancaSocial_Guia_Banco: 955,
            Grh_MapaSegurancaSocial_Guia_RemeteA: 956,
            Grh_MapaTransferenciaBancaria_FormatoExportacao: 957,
            Grh_MapaTransferenciaBancaria_FormatoBancoPortugal: 958,
            Grh_MapaTransferenciaBancaria_DiaTransferencia: 959,
            Grh_CONFIGURACAOCHEQUES_CONFIGURACAO: 960,
            Grh_CONFIGURACAOCHEQUES_LOCALEMISSAO: 961,
            Grh_CONFIGURACAOCHEQUES_SOBREBANCO: 962,
            Grh_CONFIGURACAOCHEQUES_INCLUIREUROS: 963,
            Grh_CONFIGURACAOCHEQUES_TRACAR: 964,
            Grh_DEFINICAOMARGENS_MARGEMSUPERIOR: 965,
            Grh_DEFINICAOMARGENS_MARGEMESQUERDA: 966,
            Grh_DEFINICAOMARGENS_MARGEMINFERIOR: 967,
            Grh_DEFINICAOMARGENS_MARGEMDIREITA: 968,
            Grh_ReciboFeNt: 969,
            Grh_LigCTE: 970,
            Grh_LigGTE: 971,
            Grh_cPathDirectoriaSuporteMagneticoDeclRetFonte: 972,
            Grh_cPathDirectoriaSuporteMagneticoSegSocial: 973,
            Grh_cPathDirectoriaSuporteMagneticoCGARelacaoDescontos: 974,
            POS_DocDescritivo: 975,
            POS_DocConsumoPosterior: 976,
            cPathDrectoriaAutoPreVendaGCE: 977,
            POS_AtribuiPagamentoAoDefeito: 978,
            POS_DocCozinha: 979,
            POS_DocContaMesa: 980,
            Grh_DigitosCtePertenceOrgaosSociais: 981,
            Grh_DigitosCteNPertenceOrgaosSociais: 982,
            PaisSede: 983,
            Alvara: 984,
            Grh_Recibos_NomeFicheiro: 985,
            Grh_Recibos_ImprimirCabecalho: 986,
            Grh_Recibos_ImprimirRecibosSemValor: 987,
            Grh_MultiEmpresa_PathSuporteMagneticoSegSocial: 988,
            Grh_MultiEmpresa_PathSuporteMagneticoQuadroPessoal: 989,
            Grh_MultiEmpresa_PathSuporteMagneticoDeclRetencoes: 990,
            Grh_cTipoSuporteQuadroPessoal: 991,
            Grh_cMapaEspecifico: 992,
            /**
             * @static
             * @public
             * @memberof Eticadata.ERP.EtiEnums.ConfigEmpresa
             * @constant
             * @default 995
             * @type Eticadata.ERP.EtiEnums.ConfigEmpresa
             */
            Grh_Recibos_ImprimirObsRecibo: 995,
            Grh_AjustValFaltasProc: 996,
            Grh_TaxasIRS_CV_NumMeses: 997,
            Grh_TaxasIRS_CV_MinExist: 998,
            Grh_TaxasIRS_CV_AlfaPerc: 999,
            Grh_TaxasIRS_CV_RelAlfa: 1000,
            Grh_Recibos_ImprimirAcumulados: 1001,
            Grh_Recibos_ImprimirAcumuladosAbonos: 1002,
            Grh_Recibos_ImprimirAcumuladosDescontos: 1003,
            Grh_Recibos_ImprimirAcumuladosFaltas: 1004,
            Grh_MapasOpccaoImpressao: 1005,
            Grh_ApresentaNoRecibo: 1006,
            Grh_Recibos_EmailResponsavel_Email: 1007,
            Grh_Recibos_EmailResponsavel_Assunto: 1008,
            Grh_Recibos_EmailResponsavel_Mensagem: 1009,
            Grh_Recibos_EmailFuncionarios_CC: 1010,
            Grh_Recibos_EmailFuncionarios_Assunto: 1011,
            Grh_Recibos_EmailFuncionarios_Mensagem: 1012,
            Grh_Recibos_EmailResponsavel_CC: 1013,
            Grh_Recibos_EmailResponsavel: 1014,
            Grh_Recibos_EmailFuncionarios: 1015,
            Grh_MapaSegurancaSocial_ChequeN: 1016,
            GRH_FuncSazonalNaoAssumeHorasDefeito: 1018,
            Grh_MapaFolhaFerias_cfgFiltrarPor: 1018,
            Grh_MapaContaCorrente_cfgFiltrarPor: 1019,
            Grh_MapaRemuneracaoDescontosEncargos_cfgFiltrarPor: 1020,
            Grh_MapaResumoEncargos_cfgFiltrarPor: 1021,
            Grh_LigGTEPorData: 1022,
            Grh_LigCTEPorData: 1023,
            Grh_ImprimirValorDescFaltas: 1024,
            Grh_ActualizaFeriasMapa: 1025,
            Grh_DeclRendimentos_EmailResponsavel_Email: 1026,
            Grh_DeclRendimentos_EmailResponsavel_Assunto: 1027,
            Grh_DeclRendimentos_EmailResponsavel_Mensagem: 1028,
            Grh_DeclRendimentos_EmailFuncionarios_CC: 1029,
            Grh_DeclRendimentos_EmailFuncionarios_Assunto: 1030,
            Grh_DeclRendimentos_EmailFuncionarios_Mensagem: 1031,
            Grh_DeclRendimentos_EmailResponsavel_CC: 1032,
            Grh_DeclRendimentos_EmailResponsavel: 1033,
            Grh_DeclRendimentos_EmailFuncionarios: 1034,
            Grh_Recibos_EmailFuncionarios_ImprimeSemEmail: 1035,
            Grh_DeclRendimentos_EmailFuncionarios_ImprimeSemEmail: 1036,
            GRH_AlteracaoVencimento_ActualizaVencHoraFuncOfi: 1037,
            Grh_Recibos_EmailFuncionarios_PermiteAnexos: 1038,
            Grh_Recibos_EmailFuncionarios_Anexos: 1039,
            Grh_Recibos_EmailResponsavel_PermiteAnexos: 1040,
            Grh_Recibos_EmailResponsavel_Anexos: 1041,
            Grh_DeclRendimentos_EmailFuncionarios_PermiteAnexos: 1042,
            Grh_DeclRendimentos_EmailFuncionarios_Anexos: 1043,
            Grh_DeclRendimentos_EmailResponsavel_PermiteAnexos: 1044,
            Grh_DeclRendimentos_EmailResponsavel_Anexos: 1045,
            Grh_Recibos_ImprimirLogoTipo: 1046,
            Grh_ModelosDocFuncDirectoria: 1047,
            Grh_DocFuncDirectoria: 1048,
            Grh_FicheirosDirectoria: 1049,
            Grh_DocFunc_Anexa: 1050,
            Grh_DocFunc_TipoAnexo: 1051,
            Grh_DocFunc_SitAnexo: 1052,
            Grh_DataRecAbnDescRecAparte: 1053,
            Grh_DeclArt99_EmailResponsavel_Email: 1053,
            Grh_DeclArt99_EmailResponsavel_Assunto: 1054,
            Grh_DeclArt99_EmailResponsavel_Mensagem: 1055,
            Grh_DeclArt99_EmailFuncionarios_CC: 1056,
            Grh_DeclArt99_EmailFuncionarios_Assunto: 1057,
            Grh_DeclArt99_EmailFuncionarios_Mensagem: 1058,
            Grh_DeclArt99_EmailResponsavel_CC: 1059,
            Grh_DeclArt99_EmailResponsavel: 1060,
            Grh_DeclArt99_EmailFuncionarios: 1061,
            Grh_DeclArt99_EmailFuncionarios_ImprimeSemEmail: 1062,
            Grh_DeclArt99_EmailFuncionarios_PermiteAnexos: 1063,
            Grh_DeclArt99_EmailFuncionarios_Anexos: 1064,
            Grh_DeclArt99_EmailResponsavel_PermiteAnexos: 1065,
            Grh_DeclArt99_EmailResponsavel_Anexos: 1066,
            Grh_SegSocial_EmailResponsavel_Email: 1067,
            Grh_SegSocial_EmailResponsavel_Assunto: 1068,
            Grh_SegSocial_EmailResponsavel_Mensagem: 1069,
            Grh_SegSocial_EmailResponsavel_CC: 1070,
            Grh_SegSocial_EmailResponsavel: 1071,
            Grh_SegSocial_EmailResponsavel_PermiteAnexos: 1072,
            Grh_SegSocial_EmailResponsavel_Anexos: 1073,
            Grh_Seguro_EmailResponsavel_Email: 1074,
            Grh_Seguro_EmailResponsavel_Assunto: 1075,
            Grh_Seguro_EmailResponsavel_Mensagem: 1076,
            Grh_Seguro_EmailResponsavel_CC: 1077,
            Grh_Seguro_EmailResponsavel: 1078,
            Grh_Seguro_EmailResponsavel_PermiteAnexos: 1079,
            Grh_Seguro_EmailResponsavel_Anexos: 1080,
            Grh_Sindicato_EmailResponsavel_Email: 1081,
            Grh_Sindicato_EmailResponsavel_Assunto: 1082,
            Grh_Sindicato_EmailResponsavel_Mensagem: 1083,
            Grh_Sindicato_EmailResponsavel_CC: 1084,
            Grh_Sindicato_EmailResponsavel: 1085,
            Grh_Sindicato_EmailResponsavel_PermiteAnexos: 1086,
            Grh_Sindicato_EmailResponsavel_Anexos: 1087,
            Grh_QuadroPessoal_EmailResponsavel_Email: 1088,
            Grh_QuadroPessoal_EmailResponsavel_Assunto: 1089,
            Grh_QuadroPessoal_EmailResponsavel_Mensagem: 1090,
            Grh_QuadroPessoal_EmailResponsavel_CC: 1091,
            Grh_QuadroPessoal_EmailResponsavel: 1092,
            Grh_QuadroPessoal_EmailResponsavel_PermiteAnexos: 1093,
            Grh_QuadroPessoal_EmailResponsavel_Anexos: 1094,
            Grh_InqGDurTrab_EmailResponsavel_Email: 1095,
            Grh_InqGDurTrab_EmailResponsavel_Assunto: 1096,
            Grh_InqGDurTrab_EmailResponsavel_Mensagem: 1097,
            Grh_InqGDurTrab_EmailResponsavel_CC: 1098,
            Grh_InqGDurTrab_EmailResponsavel: 1099,
            Grh_InqGDurTrab_EmailResponsavel_PermiteAnexos: 1100,
            Grh_InqGDurTrab_EmailResponsavel_Anexos: 1101,
            Grh_HorasTrabSup_EmailResponsavel_Email: 1102,
            Grh_HorasTrabSup_EmailResponsavel_Assunto: 1103,
            Grh_HorasTrabSup_EmailResponsavel_Mensagem: 1104,
            Grh_HorasTrabSup_EmailResponsavel_CC: 1105,
            Grh_HorasTrabSup_EmailResponsavel: 1106,
            Grh_HorasTrabSup_EmailResponsavel_PermiteAnexos: 1107,
            Grh_HorasTrabSup_EmailResponsavel_Anexos: 1108,
            Grh_DeclRetFonte_EmailResponsavel_Email: 1109,
            Grh_DeclRetFonte_EmailResponsavel_Assunto: 1110,
            Grh_DeclRetFonte_EmailResponsavel_Mensagem: 1111,
            Grh_DeclRetFonte_EmailResponsavel_CC: 1112,
            Grh_DeclRetFonte_EmailResponsavel: 1113,
            Grh_DeclRetFonte_EmailResponsavel_PermiteAnexos: 1114,
            Grh_DeclRetFonte_EmailResponsavel_Anexos: 1115,
            Grh_DeclAnualMod10_EmailResponsavel_Email: 1116,
            Grh_DeclAnualMod10_EmailResponsavel_Assunto: 1117,
            Grh_DeclAnualMod10_EmailResponsavel_Mensagem: 1118,
            Grh_DeclAnualMod10_EmailResponsavel_CC: 1119,
            Grh_DeclAnualMod10_EmailResponsavel: 1120,
            Grh_DeclAnualMod10_EmailResponsavel_PermiteAnexos: 1121,
            Grh_DeclAnualMod10_EmailResponsavel_Anexos: 1122,
            Grh_CGARelContributiva_EmailResponsavel_Email: 1123,
            Grh_CGARelContributiva_EmailResponsavel_Assunto: 1124,
            Grh_CGARelContributiva_EmailResponsavel_Mensagem: 1125,
            Grh_CGARelContributiva_EmailResponsavel_CC: 1126,
            Grh_CGARelContributiva_EmailResponsavel: 1127,
            Grh_CGARelContributiva_EmailResponsavel_PermiteAnexos: 1128,
            Grh_CGARelContributiva_EmailResponsavel_Anexos: 1129,
            Grh_BalancoSocial_EmailResponsavel_Email: 1130,
            Grh_BalancoSocial_EmailResponsavel_Assunto: 1131,
            Grh_BalancoSocial_EmailResponsavel_Mensagem: 1132,
            Grh_BalancoSocial_EmailResponsavel_CC: 1133,
            Grh_BalancoSocial_EmailResponsavel: 1134,
            Grh_BalancoSocial_EmailResponsavel_PermiteAnexos: 1135,
            Grh_BalancoSocial_EmailResponsavel_Anexos: 1136,
            Grh_RelatorioUnico_EmailResponsavel_Email: 1137,
            Grh_RelatorioUnico_EmailResponsavel_Assunto: 1138,
            Grh_RelatorioUnico_EmailResponsavel_Mensagem: 1139,
            Grh_RelatorioUnico_EmailResponsavel_CC: 1140,
            Grh_RelatorioUnico_EmailResponsavel: 1141,
            Grh_RelatorioUnico_EmailResponsavel_PermiteAnexos: 1142,
            Grh_RelatorioUnico_EmailResponsavel_Anexos: 1143,
            Grh_ADSETaxaEmp: 1144,
            Grh_MapaCartoesRefeicao_FormatoExportacao: 1152,
            Grh_MapaCartoesRefeicao_FormatoPS2: 1153,
            Grh_MapaCartoesRefeicao_FormatoPS2Banco: 1154,
            Grh_MapaCartoesRefeicao_DiaTransferencia: 1155,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_Email: 1156,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_Assunto: 1157,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_Mensagem: 1158,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_CC: 1159,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel: 1160,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_PermiteAnexos: 1161,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_Anexos: 1162,
            Grh_Recibos_Anexa: 1163,
            Grh_Recibos_TipoAnexo: 1164,
            Grh_Recibos_SitAnexo: 1165,
            Grh_DeclRendimentos_Anexa: 1166,
            Grh_DeclRendimentos_TipoAnexo: 1167,
            Grh_DeclRendimentos_SitAnexo: 1168,
            Grh_DeclArt99CIRS_Anexa: 1169,
            Grh_DeclArt99CIRS_TipoAnexo: 1170,
            Grh_DeclArt99CIRS_SitAnexo: 1171,
            Grh_Recibos_EmailFuncionarios_AnexarAFuncionarios: 1172,
            Grh_DeclRendimentos_EmailFuncionarios_AnexarAFuncionarios: 1173,
            Grh_DeclArt99_EmailFuncionarios_AnexarAFuncionarios: 1174,
            Grh_ModelosDocFuncionarios_EmailFuncionarios: 1175,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_PermiteAnexos: 1176,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_Anexos: 1177,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_CC: 1178,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_Assunto: 1179,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_Mensagem: 1180,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_ImprimeSemEmail: 1181,
            Grh_ModelosDocFuncionarios_EmailResponsavel: 1182,
            Grh_ModelosDocFuncionarios_EmailResponsavel_Email: 1183,
            Grh_ModelosDocFuncionarios_EmailResponsavel_Assunto: 1184,
            Grh_ModelosDocFuncionarios_EmailResponsavel_Mensagem: 1185,
            Grh_ModelosDocFuncionarios_EmailResponsavel_CC: 1186,
            Grh_ModelosDocFuncionarios_EmailResponsavel_PermiteAnexos: 1187,
            Grh_ModelosDocFuncionarios_EmailResponsavel_Anexos: 1188,
            Grh_ModelosDocFuncionarios_EnviarEmails: 1189,
            Grh_MapaCartoesRefeicao_FormatoSEPA: 1190,
            Grh_MapaADSE_EmailResponsavel_Email: 1701,
            Grh_MapaADSE_EmailResponsavel_Assunto: 1702,
            Grh_MapaADSE_EmailResponsavel_Mensagem: 1703,
            Grh_MapaADSE_EmailResponsavel_CC: 1704,
            Grh_MapaADSE_EmailResponsavel: 1705,
            Grh_MapaADSE_EmailResponsavel_PermiteAnexos: 1706,
            Grh_MapaADSE_EmailResponsavel_Anexos: 1707,
            Grh_FundosCompensacao_EmailResponsavel_Email: 1708,
            Grh_FundosCompensacao_EmailResponsavel_Assunto: 1709,
            Grh_FundosCompensacao_EmailResponsavel_Mensagem: 1710,
            Grh_FundosCompensacao_EmailResponsavel_CC: 1711,
            Grh_FundosCompensacao_EmailResponsavel: 1712,
            Grh_FundosCompensacao_EmailResponsavel_PermiteAnexos: 1713,
            Grh_FundosCompensacao_EmailResponsavel_Anexos: 1714,
            Grh_MapaTransfBancariaCartaoRefeicao_FormatoMes: 1715,
            MapaTransfBancariaCartaoRefeicao_ConfigSEPA: 1716,
            Grh_ADSECodServico: 1717,
            Grh_DeclRendimentos_EmailFornecedores: 1718,
            Grh_DeclRendimentos_EmailFornecedores_CC: 1719,
            Grh_DeclRendimentos_EmailFornecedores_Assunto: 1720,
            Grh_DeclRendimentos_EmailFornecedores_Mensagem: 1721,
            Grh_DeclRendimentos_EmailFornecedores_ImprimeSemEmail: 1722,
            Grh_DeclRendimentos_EmailFornecedores_PermiteAnexos: 1723,
            Grh_DeclRendimentos_EmailFornecedores_Anexos: 1724,
            HR_FileName: 1725,
            HR_ReceiptType_Nr: 1726,
            HR_ReceiptType_Fr: 1727,
            HR_ReceiptType_Nt: 1728,
            HR_ReceiptType_A: 1729,
            HR_ReceiptType_B: 1730,
            HR_ReceiptType_C: 1731,
            HR_ReceiptType_D: 1732,
            HR_ReceiptType_E: 1733,
            HR_ReceiptType_F: 1734,
            HR_ReceiptType_G: 1735,
            POS_DocContaMesaHash: 1145,
            POS_DocDescritivoHash: 1146,
            Grh_IDEntidadeRU: 1147,
            POS_DocDuplFitaHash: 1148,
            Grh_TaxasRetencaoPRecibo: 1149,
            Grh_CGANIPC: 1150,
            Grh_ADSENIPC: 1151,
            EnvioAT_Activo: 1192,
            EnvioAT_PorTerceiros: 1193,
            cDesdobraLotes: 1194,
            cDesdobraLotesAut: 1195,
            cFichJAR: 1196,
            cUseProductInformationCache: 1197,
            cUseProductCostCache: 1198,
            tFEMintsAcrescerHoraExpedicao: 1199,
            Clinicas_HoraAbertura: 1200,
            Clinicas_Intervalos_Minutos_Constituicao_Horario: 1201,
            Clinicas_HoraFecho: 1202,
            Clinicas_Ligacao_Base_Dados_Infarmed: 1203,
            Clinicas_Acesso_Rede_Nacional_Utentes: 1204,
            Clinicas_Prescricao_Medica_Eletronica: 1205,
            Clinicas_FaturacaoConsultaDocAutoFaturacaoMedico: 1206,
            Clinicas_Infomed_Url: 1208,
            Clinicas_Agenda_RefreshMarcacao_Minutos: 1209,
            Clinicas_Consultas_RefreshListaEsperaConsulta_Minutos: 1210,
            Clinicas_Consultas_PermitirVisualizarHistoricoTodosMedicos: 1211,
            Clinicas_Tabela_ICD: 1212,
            Clinicas_Consultas_Visualiza_Indicadores: 1213,
            Clinicas_Consultas_Doc_Anexo_Tipo: 1214,
            Clinicas_Consultas_Doc_Anexo_Anexo: 1215,
            Clinicas_Consultas_Doc_Anexo_Situacao: 1216,
            Clinicas_Agenda_Fixar_Marcacao: 1217,
            Clinicas_UnavailabilityReason: 1218,
            Clinicas_Email_SPMS: 1219,
            Clinicas_Localizacao_BDInfarmed: 1220,
            Clinicas_EmailSPMSIndisponibilidade: 1221,
            Clinicas_EmailSPMSMensal: 1222,
            Clinicas_FaturacaoConsultaSeccaoOrganismo: 1223,
            Clinicas_FaturacaoConsultaDocMovStock: 1224,
            Clinicas_FaturacaoConsultaDocFaturaUtente: 1225,
            Clinicas_FaturacaoConsultaDocFaturaOrganismo: 1226,
            Clinicas_FaturacaoInserirServicoConsulta: 1227,
            cProcMedicalSpecialty: 492,
            cProcTimetables: 493,
            cProcMedicalProdut: 494,
            cProcMedicalTypeMedicalConsul: 495,
            cProcMedicalAtestadosDireito: 496,
            cProcMedicalBenefits: 497,
            cProcCustomerRFI: 498,
            cProcMedicalTypeDeclarations: 499,
            cProcMedicalResponsibleFinancialInstitutions: 1207,
            cProcMedicalMedicPrescExceptions: 1228,
            cProcMedicalTypeDosages: 1229,
            Medical_ValuePayableDoctor: 1230,
            Medical_CanBillingPreviouslyConsultation: 1231,
            Medical_CanAlterBillingTypeDocs: 1232,
            Medical_ConsulServiceArmazem: 1233,
            Medical_ConsulServiceArmazemLocal: 1234,
            eMedical_EmailSubjectSendTratamentGuid: 1235,
            eMedical_EmailTextSendTratamentGuid: 1236,
            eMedical_SMSTextSendTratamentGuid: 1237,
            eMedical_SMSTextSendTratamentGuidTypeActivity: 1238,
            eMedical_EmailTextSendTratamentGuidII: 1239,
            eMedical_EmailTextSendTratamentCodActivityType: 1240,
            eMedical_DaysToPrintMaterializada: 1241,
            eMedical_DaysToPrintDesmaterializada: 1242,
            eMedical_DaysToUnlockedConsultation: 1243,
            cIdConsultaSEPA_GCE: 1501,
            cIdConsultaSEPA_GRH_Salario: 1502,
            cIdConsultaSEPA_GRH_CARTAOREFEICAO: 1503,
            tFEHoraExpedicao: 1504,
            CTE_NifSujeitoPassivoA: 1505,
            CTE_NomeSujeitoPassivoA: 1506,
            CTE_NifSujeitoPassivoB: 1507,
            CTE_NomeSujeitoPassivoB: 1508,
            Grh_SubFeNtClassificarAbnsPeloRecibo: 1600,
            Grh_MapaCartoesRefeicao_NCliente: 1601,
            Grh_RelacaoNominalMZ_EmailResponsavel_Email: 1602,
            Grh_RelacaoNominalMZ_EmailResponsavel_Assunto: 1603,
            Grh_RelacaoNominalMZ_EmailResponsavel_Mensagem: 1604,
            Grh_RelacaoNominalMZ_EmailResponsavel_CC: 1605,
            Grh_RelacaoNominalMZ_EmailResponsavel: 1606,
            Grh_RelacaoNominalMZ_EmailResponsavel_PermiteAnexos: 1607,
            Grh_RelacaoNominalMZ_EmailResponsavel_Anexos: 1608,
            cNrDiasSemCopiasSeg: 1609,
            cNrDiasAvisoAposUltCopSeg: 1610,
            cDirectoriaCopiasSeguranca: 1612,
            cCaminhoMapas: 1613,
            EmpresaReadOnly: 1700,
            tTaxRegionCode: 1801,
            cUseComplexTaxes: 1802,
            cMovStockDefTpDoc: 1803,
            cInterestOfBenefits: 1804,
            tInterestRateOfBenefits: 1805,
            tArticleInterestDebt: 1806,
            CompanyScheme: 1807,
            AUT_Emp_Viatura: 1810,
            APV_Emp_Equipamento: 1811,
            tCondPriceSales: 1814,
            tCondPricesUsesPromotionsSales: 1815,
            APV_Billing_Timing: 1816,
            Grh_Recibos_EmailFuncionarios_CodActivityType: 1817,
            Grh_Recibos_EmailResponsavel_CodActivityType: 1818,
            Grh_DeclRendimentos_EmailFornecedores_CodActivityType: 1819,
            Grh_DeclRendimentos_EmailFuncionarios_CodActivityType: 1820,
            Grh_DeclRendimentos_EmailResponsavel_CodActivityType: 1821,
            Grh_DeclArt99_EmailFuncionarios_CodActivityType: 1822,
            Grh_DeclArt99_EmailResponsavel_CodActivityType: 1823,
            Grh_ModelosDocFuncionarios_EmailFuncionarios_CodActivityType: 1824,
            Grh_ModelosDocFuncionarios_EmailResponsavel_CodActivityType: 1825,
            Grh_SegSocial_EmailResponsavel_CodActivityType: 1826,
            Grh_Seguro_EmailResponsavel_CodActivityType: 1827,
            Grh_Sindicato_EmailResponsavel_CodActivityType: 1828,
            Grh_QuadroPessoal_EmailResponsavel_CodActivityType: 1829,
            Grh_InqGDurTrab_EmailResponsavel_CodActivityType: 1830,
            Grh_HorasTrabSup_EmailResponsavel_CodActivityType: 1831,
            Grh_DeclRetFonte_EmailResponsavel_CodActivityType: 1832,
            Grh_DeclAnualMod10_EmailResponsavel_CodActivityType: 1833,
            Grh_CGARelContributiva_EmailResponsavel_CodActivityType: 1834,
            Grh_BalancoSocial_EmailResponsavel_CodActivityType: 1835,
            Grh_RelatorioUnico_EmailResponsavel_CodActivityType: 1836,
            Grh_DeclaracaoMensalRemunAT_EmailResponsavel_CodActivityType: 1837,
            Grh_RelacaoNominalMZ_EmailResponsavel_CodActivityType: 1838,
            Grh_MapaADSE_EmailResponsavel_CodActivityType: 1839,
            Grh_FundosCompensacao_EmailResponsavel_CodActivityType: 1840,
            cDataCollectionFilePath: 1841,
            cDataCollectionAutomaticallyReconcile: 1842,
            cDataCollectionUpdateGridStatement: 1843,
            cRefSupplierWithBestPrice: 1844,
            Grh_MapaBankTransfer_MonthFormat: 1844,
            Grh_MapBankTransfer_Extension: 1845,
            Grh_MapBankTransferMealCard_Extension: 1846,
            Grh_TesBankTransfer_Format: 1847,
            Grh_TesBankTransfer_Extension: 1848,
            cIntegrateLinesInDocsLatestRecords: 1849,
            CompanySOC: 1850,
            RecolhaMarketing: 1851,
            cIntegrateLinesInDocsApplyFilter: 1852,
            GRH_PBSSActivo: 1853,
            SAFT_ComunicacaoAT_FT: 1856,
            SAFT_ComunicacaoAT_GT: 1857,
            SAFT_POS_ComunicacaoAT_FT: 1858,
            cDocsThatAffectsPurchasesVolume: 1859,
            cSubjectIncomeTaxIRS: 1860,
            CTE_NotValidationsSVAT: 1861,
            CTE_MaxSystemEntryDate: 1862,
            cMargemImpEFatura: 1863,
            GRH_CompensationFundsActive: 1864,
            GRH_CompensationFundsImediateComunication: 1865,
            Grh_Transferenciasbancarias_cfgFiltrarPor: 1868,
            Grh_CartoesRefeicao_cfgFiltrarPor: 1869,
            Grh_Cheques_cfgFiltrarPor: 1870,
            Grh_LevantamentosBancarios_cfgFiltrarPor: 1871
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ConfigEmpresaExerc', {
        statics: {
            tPrfImpSeloLiquidado: 0,
            tPrfImpSeloSuportado: 1,
            tCCaixaOuEuivalente: 2,
            cUsaNumeracaoMensal: 3,
            cUsaPlanosAlternativos: 4,
            cAbrirFichaImo: 5,
            tContasParaFichaImo: 6,
            cMesesEncerrados: 7,
            tMetodoCusteio: 12,
            tTaxaIRC: 13,
            tMapaValoresRecapitulativos: 30,
            cEVEcovaloresDAutorAfectamCustos: 31,
            tEVNRegistoANREEE: 32,
            tImoFechoAnoReav: 33,
            tImoFechoAnoAmort: 34,
            tImoValorReduzido: 35,
            tLimMinimo: 36,
            cUsaTaxaReduzida: 37,
            Grh_TaxasIRS_CV_NumMeses: 38,
            Grh_TaxasIRS_CV_MinExist: 39,
            Grh_TaxasIRS_CV_RelAlfa: 40,
            Grh_TaxasIRS_CV_AlfaPerc: 41,
            Grh_Mapas_IGDT_PessoaHabilitada_Telefone: 42,
            Grh_Mapas_IGDT_PessoaHabilitada_Fax: 43,
            Grh_Mapas_IGDT_PessoaHabilitada_Email: 44,
            Grh_Mapas_IGDT_PessoaHabilitada_Data: 45,
            Grh_Mapas_IGDT_Observacoes: 46,
            ContaCalculoImposto: 50,
            tTaxaIRC_ATE: 51,
            tTaxaIRC_ValorLimite: 52,
            INV_IsFiscal: 53,
            INV_PercMaisValiasNAceite: 54,
            GRH_PercIncidProgressiva: 55,
            ivaSuportado: 56,
            GRH_AplicarSobreTaxaIRS: 57,
            GRH_DataInicioSobreTaxaIRS: 58,
            GRH_DescontoSobreTaxaIRS: 59,
            GRH_RubricaIMpostosSobreTaxaIRS_A: 60,
            tDigExpMovCteCli: 61,
            tDigExpMovCteForn: 62,
            tDigExpMovCteOutDev: 63,
            tDigExpMovCteOutCre: 64,
            CTE_ContasIRS: 65,
            GRH_TaxaRetencaoMensalSobreTaxaIRS: 66,
            GRH_FiltroTiposRendCte: 67,
            Grh_TaxasIRS_CV_EncFam: 68,
            Grh_TaxasIRS_CV_APartirDe: 69,
            cRegimeIVACaixa: 70,
            cNumeroStrUI: 71,
            cModoComunicFactAT: 72,
            Grh_TaxasIRS_MZ_APartirDe2013APartirDe: 73,
            GRH_FundosCompensacao_FCTME_Perc: 74,
            GRH_FundosCompensacao_FGCT_Perc: 75,
            GRH_FundosCompensacao_ArredDiasFalta: 76,
            GRH_FundosCompensacao_LigGte: 77,
            GCE_VencimIVACaixaCli: 78,
            GCE_VencimIVACaixaFor: 79,
            GCE_VencimIVACaixaODev: 80,
            GCE_VencimIVACaixaOCre: 81,
            GCE_VencimIVACaixaDescritivoVND: 82,
            IvaExigivVndIncidEntidade: 83,
            IvaExigivVndIvaEntidade: 84,
            IvaExigivVndContaEntidade: 85,
            IvaExigivVndIvaNaoExigivel: 86,
            IvaExigivVndIvaExigivel: 87,
            IvaExigivCmpIvaSuspenso: 88,
            IvaExigivCmpIvaDisponivel: 89,
            IvaExigivDigitosLetraE: 90,
            IvaExigivDigitosLetraT: 91,
            IvaExigivDigitosLetraO: 92,
            GCE_VencimIVACaixaDescritivoCMP: 93,
            GRH_RubricaIMpostosSobreTaxaIRS_H: 94,
            CTE_ContasINCIRS: 95,
            POS_WorkPeriod: 96,
            Label_EV_Nao_Definido: 97,
            cUsaPlanosOperacionais: 98,
            Grh_TaxasRetencao_CV_ValorMinImposto: 99,
            Grh_TaxasRetencao_CV_TrabDependente: 100,
            Grh_TaxasRetencao_CV_Pensoes: 101,
            tCCaixaOuEuivalentePlanoOper2: 102,
            tCCaixaOuEuivalentePlanoOper3: 103,
            tCCaixaOuEuivalentePlanoOper4: 104,
            tCCaixaOuEuivalentePlanoOper5: 105,
            tContasParaFichaImoPlanoOper2: 106,
            tContasParaFichaImoPlanoOper3: 107,
            tContasParaFichaImoPlanoOper4: 108,
            tContasParaFichaImoPlanoOper5: 109,
            HR_UVT: 110,
            HR_ParamLimite: 111,
            HR_ParamPercentage: 112,
            cConsolidacaoTiposContasRendimentos: 113,
            cConsolidacaoTiposContasGastos: 114,
            HR_ManagePayments: 115,
            HR_CodSectionPayments: 116,
            HR_CodTpDocPayments: 117,
            GCE_VencimIVACaixaCliCred: 118,
            GCE_VencimIVACaixaForCred: 119,
            GCE_VencimIVACaixaODevCred: 120,
            GCE_VencimIVACaixaOCreCred: 121,
            GRH_TaxasRetencaoDepDef: 122,
            GRH_TaxasRetencaoConjDefTrabDep: 123,
            GRH_TaxasRetencaoConjDefTrabPens: 124,
            CTE_AccountingOrganizationSystem: 125,
            HR_MaximumExemptionLimit: 126,
            HR_MaximumExemptionLimit_Val: 127,
            HR_MaximumExemptionLimit_Perc: 128,
            CTE_AccountingOrganizationSystem_Temp: 129,
            CTE_AccountingTransformForced: 130,
            CTE_Account_IEC: 131,
            CTE_SVAT_PASSAGE_BALANCES: 132
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ConfigEmpresaUser', {
        statics: {
            cUltimaSeccao: 113,
            cRAC_ConfgSubstituirProcessoOrigem: 150,
            cOfi_CoresConsultasRT: 175,
            cRAC_ViasProcesso: 176,
            cProcArtigo: 179,
            cProcArmazens: 180,
            cProcLotes: 181,
            cProcClientes: 182,
            cProcFornecedores: 183,
            cProcVendedores: 184,
            cProcFuncionarios: 185,
            cProcHospedes: 186,
            cProcEntidades: 187,
            cFicheiroConfigEtiquetasArtigos: 188,
            cCodEstabPorDefeito: 206,
            cImpressoraEtiquetasAPV: 211,
            cReportEtiquetasAPV: 215,
            cReportEtiquetasRMA: 216,
            cFicheiroConfigListagemArtigos: 217,
            cFicheiroConfigEtiquetasEntidades: 224,
            cOFIEntregaImpressao: 319,
            cOfiViatura_GeraComponente: 427,
            cOfiConsultaRegistoDiario: 458,
            cOfiConsultaRegistoDiario_InfAdicioanl: 459,
            cProcMedicalProdut: 494,
            cProcMedicalSpecialty: 500,
            cProcTimetables: 501,
            cApvEntrega_Impressao: 559,
            cAUT_User_Viatura: 712,
            cAPV_User_Equipamento: 713,
            cRAC_ConfgDuplicarProcessoOrigem: 725
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ConfigGrelhaTpGrelha', {
        statics: {
            EtiDataGrid: 0,
            EtiSpread: 1,
            TreeGridView: 2,
            UltraGrid: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ConfigType', {
        statics: {
            Configuracao: 1,
            ConfigUserEmpExerc: 2,
            ConfigEmpresa: 3,
            ConfigEmpresaExerc: 4,
            ConfigEmpresaUser: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Configuração', {
        statics: {
            BColorLinPar: 0,
            FColorLinPar: 1,
            BColorLinImPar: 2,
            FColorLinImpar: 3,
            BColorTxtInform: 4,
            FColorTxtBloq: 5,
            MostrarJanAbrEmpEx: 6,
            UltimaEmpresa: 7,
            PosicaoJanela: 9,
            TamanhoJanela: 10,
            cTpImportacaoFX: 11,
            cMostraEstadoConta: 12,
            cF11GravaMovimento: 13,
            cAvisaDocRepetidos: 14,
            cMostraDistCC: 15,
            cMostraDistFX: 16,
            cOrdenarPorDataNumero: 17,
            tImagemsFundo: 18,
            cTpImportacaoCC: 19,
            ABDRModelo: 20,
            ABDRDocumento: 21,
            MostrarJanAbrSeccao: 22,
            tOrdInvContagens: 23,
            tStrEndOrigem: 24,
            tStrServidorSMTP: 25,
            tStrFormatoExportacao: 26,
            cMostraJanelaDescargaCTB: 27,
            cMostraDescricoesReferencias: 28,
            cMostraTodasAsLinhasReferencias: 29,
            cCaminhoExportacao: 30,
            cTipoSelVendedor: 31,
            cTipoPesqVend: 32,
            cListaVendedores: 33,
            cTipoPesqFam: 34,
            cListaFamilias: 35,
            cApenasArtArmVend: 36,
            cDividirTabPrecos: 37,
            cLinhasPrecos: 38,
            cLinPrcPorDefeito: 39,
            cImportarCondEncom: 40,
            cInserirLinhaResumo: 41,
            cImpAPVCaminho: 42,
            cImpAPVConta: 43,
            cImpAPVTpMPag: 44,
            cImpAPVRubrica: 45,
            cImpAPVTpContacto: 46,
            cImpAPVNumCasasDecPrecos: 47,
            cMostraEstadoDiario: 48,
            cAvisosNaoEmitir: 49,
            cAvisosNaoEmitirDias: 50,
            cAvisosMostraUmaVezDia: 51,
            cAvisosPendentesCliOD: 52,
            cAvisosPendentesCliOD_Dias: 53,
            cAvisosPendentesCliOD_SupInf: 54,
            cAvisosPendentesCliODValor: 55,
            cAvisosPendentesForOC: 56,
            cAvisosEncomendasCliOD: 57,
            cAvisosDiasCli: 58,
            cAvisosEncomendasForOC: 59,
            cAvisosDiasFor: 60,
            cAvisosLetrasReceber: 61,
            cAvisosLetrasPagar: 62,
            cAvisosOrcamentos: 63,
            cAvisosPagamentosDiferidos: 64,
            cAvisosAvencasProcessar: 65,
            cAvisosComissoesPagar: 66,
            cAvisosTabelaPrecos: 67,
            cAvisosMovPrevistos: 68,
            cAvisosData: 69,
            cRetFonteCaminhoExportacao: 70,
            cVndSatisfacaoEncEfectuaSimulacao: 71,
            cAvisosDevolucoesArtigos: 72,
            cAvisosDevolucoesArtigos_Dias: 73,
            cImprimeMapaCaixa: 74,
            cImprimeDupFita: 75,
            cImprimeFechoCaixa: 76,
            cPlanosContasDefeito: 77,
            cFiltroContasDefeito: 78,
            cObrigaLote: 79,
            cIntegracaoENCImportarCA: 80,
            cImprimeMapaVendas_VendArt: 81,
            cIntegracaoORCImportarCA: 86,
            cAUTOPREVENDAEXPIncluirCliVendDirAlt: 87,
            cCatalogoViaturas: 88,
            cAvisosLetrasReceber_Dias: 89,
            cAvisosLetrasPagar_Dias: 90,
            cUltimasFalhas: 91,
            cArquivoDigitalFora: 92,
            cAvisosAnexosDigitais: 82,
            cAvisosSTDPPotClientes: 83,
            cEtiquetaCliente: 84,
            cEtiquetaFornecedor: 85,
            cAvisosSTDP_IUC: 93,
            cArtigosAConsiderar: 94,
            cEncomendarPorLote: 95,
            cEncomendarComposto: 96,
            cArrQtdEncomendar: 97,
            tSMTPAutenticacao: 98,
            tSMTPLogin: 99,
            tSMTPPassword: 100,
            cADAbrirJanela: 101,
            cADSincronizarImgs: 102,
            cAvisosMostraAvisos: 103,
            cLayoutImagemDeFundo: 104,
            cImpMovSobreporMov: 105,
            cAvisosOFIPRevisoes: 106,
            cAvisosOFIPInspeccoes: 107,
            cJanelasMultiplas: 108,
            cJanelasMaximizadas: 109,
            tServidorHasp: 110,
            cQuadroGestao: 111,
            cActualizaCambioHistorico: 112,
            cOcultaNiveisSemFamilia: 114,
            tStrFormatoExportacaoRdl: 115,
            cAvisosSTDP_IUC_ViaturasSProc: 116,
            cUsaCombosSimplificadas: 117,
            cUsaCacheListas: 118,
            cIntervaloRefreshCache: 119,
            cAUTOPREVENDAEXPTpContacto: 120,
            cURL_Modelo22: 121,
            cURL_IES: 122,
            cLoginProxy: 123,
            cPassProxy: 124,
            cDominio: 125,
            cUsaProxy: 126,
            cWebServiceAceitaCondicoes: 127,
            cAdressProxy: 128,
            cPortProxy: 129,
            MostrarJanelaModulosExcluir: 130,
            ModulosExcluir: 131,
            cActPrecoCustoComp: 132,
            cFiltroDatasComissoesVendedores: 133,
            cFiltroDatasComissoesLocadoras: 134,
            cOrdenacaoColGrelha: 135,
            cDirectoriaParamGCE: 136,
            cTpImportacaoReflexoes: 137,
            cAvisosEntregaRecap: 138,
            cImpAPVNumCasasDecQtd: 139,
            cURL_Modelo10: 140,
            cURL_DeclIVA: 141,
            cURL_RelatorioUnico: 142,
            cAUTOPREVENDACOMPATIVELFICHGOLD: 143,
            cActualizaAutoMovPrevReais: 144,
            cUseWindowsAuthentication: 145,
            tstrPortaSMTP: 146,
            tUseProtocoloSMTPSSL: 147,
            cDuplicarDocsGuardaOpcao: 148,
            cDuplicarDocsGuardaOpcaoCriarRel: 149,
            cRAC_SearchVehicleRefresh: 151,
            cTamanhosGrelhas: 152,
            cRAC_SearchVehicleAvailable: 153,
            cDescMovsCTEOrdemGrelha: 177,
            cAplicaFiltroAoResumo: 178,
            cTamanhosGrelhasProcsPersonalizados: 199,
            cSeccaoDefeito: 200,
            cGraficoPropriedades: 201,
            tLanguage: 202,
            cAPV_TaxaIVA: 203,
            cImportacaoMovsContaIRS: 204,
            cSTD_PesquisaViaturaProcesso_Report: 205,
            cUrl_MapaSEF: 208,
            cInsercaoDadosBatch: 209,
            cSTD_MapaIVAProcessos: 210,
            cUrl_Guias: 212,
            cPathJRE: 213,
            cRAC_RespeitaDatasProcessoOrigem: 214,
            cERMNaturezaAgenda: 217,
            cERMVistaAgenda: 218,
            cERMGrupoAgenda: 219,
            cERMGrupoPaginasAgenda: 220,
            cERMFiltroAcessoGlobalAgenda: 221,
            cERMFiltroEstadoAgenda: 222,
            cSHELLUseMDILayout: 223,
            cUrl_Facturas: 224,
            cERMGrupoItems: 225,
            cERMSelectedGrupoIndex: 226,
            cERMFiltroDepartamentoAgenda: 227,
            cERMFiltroTecnicoAgenda: 228,
            cERMFiltroUtilizadorAgenda: 229,
            cOFI_MapaRegistoDiario: 230,
            cOFI_MapaManutencaoRT: 231,
            cERMAgendaToolTipHoraInicioHoraFim: 232,
            cERMAgendaToolTiTipoAtividade: 233,
            cERMAgendaToolTipDescricaoAtividade: 234,
            cERMAgendaToolTipCodigoTecnico: 235,
            cERMAgendaToolTipNomeTecnico: 236,
            cERMAgendaToolTipCodigoDepartamento: 237,
            cERMAgendaToolTipNomeDepartamento: 238,
            cERMFiltroNaturezaAgenda: 239,
            cERMFiltroCategoriaAgenda: 240,
            cCRMNotificationMinutes: 241,
            cCRMUseNotifications: 242,
            cSuiteOrdenaPiso: 243,
            cCRMConfigPrintInScheduler: 244,
            cCRMUseSignatureEmail: 245,
            cCRMSignatureEmailHTML: 246,
            cCRMSignatureEmailText: 247,
            cCRMConfigListInScheduler: 248,
            cCRMSelectedViewMyActivities: 249,
            cCRMConfigDaysWeekScheduler: 250,
            cSuitePlanningDefinitions: 251,
            cCRMConfigOutlookIp: 252,
            cCRMConfigOutlookPort: 253,
            cCRMAddRelationsOnSelector: 254,
            cCRMServerSMTPActiveUser: 255,
            cCRMServerSMTPUser: 256,
            cCRMServerSMTPPortUser: 257,
            cCRMServerSMTPUseSSLUser: 258,
            cCRMServerSMTPUseAuthenticationUser: 259,
            cCRMServerSMTPLoginUser: 260,
            cCRMServerSMTPPasswordUser: 261,
            cCRMServerSMTPFormatRDLUser: 262,
            cCRMServerSMTPFormatRPTUser: 263,
            cGOPUseSaveNotifications: 400,
            cGOPSavePeriodicity: 401,
            cProcMedicalTypeMedicalConsul: 503,
            cProcMedicalAtestadosDireito: 504,
            cProcMedicalBenefits: 505,
            cProcCustomerRFI: 506,
            cProcMedicalTypeDeclarations: 507,
            cPostoUser: 508,
            cConfigDataExpCASE: 509,
            cConfigDataAvisoExpCertif: 510,
            cProcMedicalResponsibleFinancialInstitutions: 700,
            cProcMedicalMedicPrescExceptions: 701,
            cProcMedicalTypeDosages: 702,
            userLogs: 703,
            userLogsEmpresas: 704,
            userLogsManutencaoTabela: 705,
            userLogsHappeningErrors: 706,
            cRibbonTheme: 714,
            cDashboardPreferido: 715,
            cUrlPatientConsulting: 716,
            cUrlPrescriptionConsulting: 717,
            cUrlPrescriptionRegistration: 718,
            cUrlPrescriptionRSPRegistration: 719,
            cUrlPrescriptionMCDTRegistration: 720,
            cDashboardPreferidoGOP: 721,
            cDashboardIntervalGOP: 722,
            cUrlPrescriptionCertificateRegistrationOnline: 723,
            cUrlPrescriptionCertificateRegistrationOffline: 724,
            cCaminhoMapasUser: 1614,
            cCaminhoMapasUserGroup: 1615,
            comunicATInvent_PathFile: 1616,
            cComunicATInvent_EndDateXML: 1617,
            cComunicATInvent_EndDateCSV: 1618,
            cCTEJournalsListingGroupByJournal: 1619,
            cFEShowOrderDetail: 1620,
            cImportacaoMovsExcluir: 1621,
            cImportacaoMovsExcluirFiltro: 1622,
            cImportEFatAutomaticAssoc: 1623,
            cImportEFatByNIF: 1624,
            cImportEFatByData: 1625,
            cImportEFatByAnoMes: 1626,
            cImportEFatByTpDoc: 1627,
            cImportEFatByNumDoc: 1628,
            cImportEFatByTotal: 1629,
            cImportEFatContasInc: 1630,
            cImportEFatPerfilImp: 1631,
            cActiveCaseLastWarning: 1632,
            cImportEFatDataLanc: 1633,
            cImportEFatOrdenacao: 1634,
            cLicenseNIF: 1635,
            cCTEMultiAnnual: 1636,
            cURLRegistarVinculo: 1637,
            cURLConsultarTrabalhadores: 1638,
            cPathSAFT: 1639,
            cURLAdmitirTrabalhador: 1640,
            cURLCessarContrato: 1641,
            cURLAlterarContrato: 1642
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ConfigUserEmpExerc', {
        statics: {
            tActualizaData: 1,
            cUltimoDiarioUsado: 113,
            cNRegLastMovs: 114,
            cShowLastMovs: 115,
            cShowReconciliation: 116,
            cShowReconciliationCte: 117,
            cShowReconciliationSplitterDistance: 118,
            cShowReconciliationCteSplitterDistance: 119
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CteImportType', {
        statics: {
            None: 0,
            SalesInvoices: 1,
            Payments: 2,
            AccountDocs: 3,
            EInvoiceDocs: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.CurrencySymbolType', {
        statics: {
            CountryDefault: 0,
            Euro: 1,
            Dollar: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.DataCollectionInfoType', {
        statics: {
            BankStatement: 1,
            eInvoice: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.DecretosLei', {
        statics: {
            DL_P_20258: 1,
            DL_126_77: 2,
            DL_430_78: 3,
            DL_24_82: 4,
            DL_219_82: 5,
            DL_143_84: 6,
            DL_399_G_84: 7,
            DL_278_85: 8,
            DL_118_B_86: 9,
            DL_111_88: 10,
            DL_49_91: 11,
            DL_264_92: 12,
            DL_000_97: 13,
            DL_31_98: 14
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.DescargaContabilidade', {
        statics: {
            ON_LINE: 0,
            OFF_Line: 1,
            Exportacao: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.DocsDispEmEstados', {
        statics: {
            Todos: 0,
            Vendas: 1,
            Compras: 2,
            Encargos: 3,
            Encomendas: 4,
            Liquidacoes: 5,
            FrontOffice: 6,
            Contratos: 7,
            Recepcoes: 8,
            Orcamentos: 9,
            Reparacoes: 10,
            Entregas: 11,
            GOPProcessos: 12,
            GOPOrcamentos: 13,
            GOPProjectos: 14,
            GOPAutosCliente: 15,
            RecepcoesEReparacoes: 16,
            GOPFolhasObra: 17,
            GOPRegistoObra: 18,
            GOPAutosProducao: 19,
            GOPAutosSubcontract: 20,
            GOPSubcontract: 21,
            STDProcessos: 22,
            RACProcessos: 23
        },
        $enum: true
    });
    
    /** @namespace Eticadata.ERP.EtiEnums */
    
    /**
     * Determines the source of the document, if it's  generated manually or automatically.
     *
     * @public
     * @class Eticadata.ERP.EtiEnums.DocumentSourceType
     */
    Bridge.define('Eticadata.ERP.EtiEnums.DocumentSourceType', {
        statics: {
            Manual: 0,
            Automatic: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.eComponentType', {
        statics: {
            AsEditor: 0,
            AsComponent: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EmpresaTpManutencao', {
        statics: {
            Desactualizada: 0,
            EmManutencao: 1,
            Actualizada: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EntidadeEstabelecimento', {
        statics: {
            ArtigoEstabelecimentos: 1,
            EstabelecimentoArtigos: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumAvisosExportacao', {
        statics: {
            SemVendedores: 1,
            SemArtigos: 2,
            ArtigosInactivos: 3,
            ArtigosLotes: 4,
            ArtigosNumSerie: 5,
            ArtCodTamInvalido: 6,
            ArtSemLinhaPreco: 7,
            ArtArmLocalizacoes: 8,
            CodRotasNaoNumericos: 9,
            CodMeiosExpNaoNumericos: 10,
            CodSeccoesNaoNumericos: 11,
            SemMeiosExpedicao: 12,
            SemCondPagamento: 13,
            PendAbrevTpDocTamInvalido: 14,
            StockRealExcedido: 15,
            CondPagCodTamInvalido: 16,
            SemNomesCientificos: 17,
            SemZonasCaptura: 18,
            ClientesInactivos: 19
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCDMenu', {
        statics: {
            MnuArtigos: 1,
            MnuClientes: 2,
            MnuFornecedores: 3,
            MnuVendedores: 4,
            MnuValoresGlobais: 5,
            MnuSituacaoTesouraria: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCDMenuItem', {
        statics: {
            ArtigosResumo: 1,
            ArtigosCompras: 2,
            ArtigosStocks: 3,
            ArtigosVendas: 4,
            ClientesResumo: 1,
            ClientesVendas: 2,
            ClientesCCO: 3,
            ClientesMovPrev: 4,
            FornecedoresResumo: 1,
            FornecedoresCompras: 2,
            FornecedoresCCO: 3,
            FornecedoresMovPrev: 4,
            VendedoresResumo: 1,
            VendedoresVendas: 2,
            VendedoresCCO: 3,
            ValGlobaisResumo: 1,
            ValGlobaisCompras: 2,
            ValGlobaisStocks: 3,
            ValGlobaisVendas: 4,
            ValGlobaisCCO: 5,
            SitTesResumo: 1,
            SitTesSaldos: 2,
            SitTesMovPrev: 3,
            SitTesResultados: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumConfigEtiGrid', {
        statics: {
            Widgets: 1,
            Test1: 2,
            Test2: 3,
            Test3: 4,
            CustomizationExternal: 5,
            CustomizationInternal: 6,
            Payments: 7,
            Queries: 8,
            CustomerDrivers: 9,
            CustomerFamily: 10,
            CustomerEPortalsLogAccess: 11,
            CustomerOrganism: 12,
            CustomerBenefit: 13,
            CustomerPathologies: 14,
            CustomerTaxes: 15,
            SupplierTaxes: 16,
            ConfigProfilesDataCollection: 17,
            EFaturaImportMovs: 18,
            EFaturaImportCtb: 19,
            EFaturaImportCtbLin: 20,
            EFaturaImportRes: 21,
            EFaturaCtbRows: 22,
            EFaturaCtbRowsLin: 23,
            EFaturaNewSuppliers: 24,
            EFaturaCfgTpDocs: 25,
            EFaturaCfgRubricas: 26,
            EFaturaCfgRubricasLin: 27,
            EFaturaCfgFornecedores: 28,
            DriverLicenses: 29,
            MCDTPrescriptionLin: 30,
            CRMCampaigns_Activities: 31,
            CRMCampaigns_Answers: 32,
            CRMCampaigns_Marketing: 33,
            CRMMarketing_Clients: 34,
            CRMMarketing_Contacts: 35,
            CRMMarketing_Potential: 36,
            CRMMarketing_Allowances: 37,
            CRMMarketing_Queries: 38,
            Customization: 39,
            ConfigLogs_Actions: 40,
            ConfigLogs_Companies: 41,
            Logs: 42,
            TaxonomiasRules: 43,
            TaxonomiasAssocs: 44,
            TaxonomiasRemoves: 45,
            TaxonomiasAdds: 46,
            RegisterBond: 53,
            ConsultRequest: 54,
            ConformityDiagResult: 103,
            CompensationFunds: 104,
            ConformityDiagCSTA: 105,
            ConformityDiagNatureza: 106
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_CodType', {
        statics: {
            DocumentType: 0,
            ActivityType: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_Condition', {
        statics: {
            And: 0,
            Or: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_MarketingType', {
        statics: {
            Advertising: 1,
            DirectMarketing: 2,
            Event: 3,
            Other: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_MessageType', {
        statics: {
            Obs: 0,
            Fixed: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_Ocupation', {
        statics: {
            Free: 1,
            OutOrganization: 2,
            Busy: 3,
            Try: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_OrganizerType', {
        statics: {
            CurrentUser: 0,
            Other: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_RuleCompare', {
        statics: {
            Field: 0,
            Value: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_RuleType', {
        statics: {
            None: 0,
            Execute: 1,
            Multiple: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_StartDateType', {
        statics: {
            Equal: 0,
            Before: 1,
            After: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_Status', {
        statics: {
            Open: 1,
            Suspended: 2,
            Concluded: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumCRM_VariationType', {
        statics: {
            Seconds: 0,
            Minutes: 1,
            Hours: 2,
            Days: 3,
            Weeks: 4,
            Months: 5,
            AllDay: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumEstados', {
        statics: {
            EmCurso: 0,
            Realizada: 1,
            Cancelada: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumMotivosExames', {
        statics: {
            MudançaDoPostoDeTrabalho: 0,
            AlteraçõesDoPostoDeTrabalho: 1,
            RegressoApósBaixaPorAcidenteDeTrabalho: 2,
            RegressoApósBaixaPorDoençaDeTrabalho: 3,
            IniciativaDoMédico: 4,
            APedidoDoTrabalhador: 5,
            PorCessaçãoDoContratoDeTrabalho: 6,
            OutrasRazões: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumOrdemDetalhe', {
        statics: {
            TpMovPagGeral: 1,
            TpMovPagVale: 2,
            TpMovPagChqOf: 3,
            TpMovPagCartaoPrePago: 4,
            Abertura: 5,
            EntradasSaidas: 6,
            SinalEncom: 7,
            DevolSinalEncom: 8,
            EncomAnul: 9,
            VendasAnul: 10,
            Devolucoes: 11,
            RegularizGiftVoucherCard: 12,
            Vendas: 13,
            ChequesOfEmit: 14,
            ChequesOfReceb: 15,
            CarrCartoesPrePagos: 16,
            CartoesPrePagosDescontados: 17,
            Amostras: 18,
            Descontos: 19,
            Creditos: 20,
            VndCredito: 21,
            RecebCCO: 22,
            ValesEmit: 23,
            ValesReceb: 24,
            NumVendas: 25,
            VendaMedia: 26,
            Gratification: 27
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumOrdemMovsCaixa', {
        statics: {
            Abertura: 1,
            Dia: 2,
            Fecho: 3,
            ValorEmExcesso: 4,
            ValorEmFalta: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumOrdemMovsDia', {
        statics: {
            Vendas: 1,
            SinalizacaoEncom: 2,
            DevolSinalEncom: 3,
            Devolucoes: 4,
            RecebCCO: 5,
            EntradasSaidas: 6,
            Resumo: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumOrigemAccaoMedica', {
        statics: {
            Manual: 0,
            FactorRiscoDoenca: 1,
            FactorRisco: 2,
            AcidenteTrabalho: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumPeriodicidade', {
        statics: {
            Mensal: 0,
            Semestral: 1,
            Anual: 2,
            Outra: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumPermEntidade', {
        statics: {
            Utilizadores: 0,
            Grupos: 1,
            Empresas: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumResultadoAcidente', {
        statics: {
            InferiorAUmDiaDeBaixa: 0,
            DeUmATrêsDiasDeBaixa: 1,
            DEQuatroATrintaDiasDeBaixa: 2,
            SuperiorATrintaDiasDeBaixa: 3,
            Mortal: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumSalesComissionType', {
        statics: {
            None: 0,
            SessionClosing: 1,
            SaveSales: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumTabArtigos', {
        statics: {
            Precos: 0,
            OutrosDados1: 1,
            OutrosDados2: 2,
            StockCodBarras: 3,
            Componentes: 4,
            Lotes: 5,
            NSerie: 6,
            ObsAvisos: 7,
            PeriodoLivros: 8,
            EVDirAutor: 9,
            CA: 10
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTabela', {
        statics: {
            SemTabela: 0,
            Artigos: 1,
            Clientes: 2,
            Fornecedores: 3,
            TiposDocumentos: 4,
            CondPagamento: 5,
            Vendedores: 6,
            MeiosExpedicao: 7,
            OutrosDev: 8,
            OutrosCred: 9,
            Funcionarios: 10,
            MoedasCambios: 11,
            PlanoContas: 12,
            Diarios: 13,
            TaxasIva: 14,
            CCusto: 15,
            PlanosAlternativos: 16,
            FluxosCaixa: 17,
            GrelhasLin: 18,
            ZonasPaises: 19,
            Municipios: 20,
            FichasRepart: 21,
            DescritivosTeclas: 22,
            PlanoContasCMov: 23,
            PlanoContasCNContrib: 24,
            DescritivosDesc: 25,
            ClientesCNContrib: 26,
            FornecedoresCNContrib: 27,
            OutrosDevCNContrib: 28,
            OutrosCreCNContrib: 29,
            CCustoCMov: 30,
            FluxosCaixaCMov: 31,
            TipoContactos: 32,
            CargasDescargas: 33,
            TiposEncargos: 34,
            EstadoDocumentos: 35,
            ClassificMovStk: 36,
            Sectores: 37,
            Rotas: 38,
            Categorias: 39,
            TipoArtigos: 40,
            TipoFamilias: 41,
            Familias: 42,
            Idiomas: 43,
            Unidades: 44,
            Grelhas: 45,
            Contactos: 46,
            DireccoesCliente: 47,
            Armazens: 48,
            Referencias: 49,
            TiposDocumentoSTK_FO: 50,
            TiposDocumentoSTK_PROD: 51,
            TiposDocumentoSTK_INV: 52,
            TiposDocumentoSTK_INTROD: 53,
            Localizacoes: 55,
            Lotes: 56,
            TiposComissoes: 57,
            TiposEntidades: 58,
            TiposDocumentoLiquid: 59,
            TiposDocumentoSTK: 60,
            TiposDocumentoVendas: 61,
            TiposDocumentoCompras: 62,
            Seccoes: 63,
            Bancos: 64,
            TesDescricoes: 65,
            TesContas: 66,
            TesTipoMovPag: 67,
            TesRubricas: 68,
            TesMovPeriodicos: 69,
            TesParamMovLetras: 70,
            ClientesVD: 71,
            ArtigosProc: 72,
            Zonas: 73,
            SubZonas: 74,
            Utilizadores: 75,
            FornecedoresCD: 76,
            TiposDocumentoLetras: 77,
            TiposDocumentoLiquidAmor: 78,
            TiposDocumentoEncSupDeb: 79,
            TiposDocumentosLetrasPag: 80,
            TiposDocumentosLetrasRec: 81,
            MensagensCliDev: 82,
            Exercicios: 83,
            Avencas: 84,
            TiposDocumentoLiquidVendas: 85,
            TiposDocumentoLiquidCompras: 86,
            Mercadorias: 87,
            Moedas: 88,
            TiposDocumentosIVAVendas: 89,
            TiposDocumentosIVACompras: 90,
            TiposDocumentosPendentesVendas: 91,
            TiposDocumentospendentesCompras: 92,
            TiposDocumentosEncomendas: 93,
            TiposDocumentosEncomendasCli: 94,
            TiposDocumentosEncomendasFor: 95,
            TiposDocumentosEncomendasArm: 96,
            TiposDocumentosOrcamentos: 97,
            ConfigLogs: 98,
            ConfiguracaoCheques: 100,
            TiposDocumentosPagamentoCheque: 101,
            TiposDocumentosEmissaoLetra: 102,
            RubricasImpostos: 103,
            NomenclaturasCombinadas: 104,
            CondicoesEntrega: 105,
            ModosTransporte: 106,
            NaturezasTransaccaoA: 107,
            Portos: 108,
            Aeroportos: 109,
            Regioes: 110,
            TiposDocumentosTESEmissaoLetra: 111,
            DocumentoVNDAnulados: 112,
            EstabelecimentosEnsino: 113,
            Promocoes: 114,
            NaturezasTransaccaoB: 115,
            TiposDocumentoPOS_VND: 116,
            TiposDocumentoPOS_AMO: 117,
            TiposDocumentoPOS_ENC: 118,
            TiposDocumentoPOS_TRA: 119,
            TiposDocumentoPOS_DEV: 120,
            TiposDocumentoPOSCX_ABE: 121,
            TiposDocumentoPOSCX_ES: 122,
            TiposDocumentoPOSCX_FEC: 123,
            Empresas: 124,
            PerfisInterface: 125,
            PerfisPerifericos: 126,
            PerfisTeclasAtalho: 127,
            Postos: 128,
            TiposDocumentoPOS_SuspVND: 129,
            TiposDocumentoPOS_SuspENC: 130,
            Filiais: 131,
            DisciplinaPOS: 132,
            TiposDocumentoPOS_LIQ: 133,
            TiposDocumentosOperacoesCaixa: 134,
            SessoesCaixaFechadas: 135,
            TiposDocumentoPOSCX_ENTRADA: 136,
            TiposDocumentoPOSCX_SAIDA: 137,
            DireccoesFornecedores: 138,
            ConfiguracoesCatalogo: 139,
            IntePerfis: 140,
            InteLocalizacoes: 141,
            NRsSerieComponentesCMP: 142,
            NRsSerieComponentesVND: 143,
            NRsSerieComponentesSTK: 144,
            LotesRegioes: 145,
            LotesOrigens: 146,
            TiposEVPilhas: 147,
            TiposEVPneus: 148,
            TiposEVOleos: 149,
            TiposEVREEE: 150,
            TiposEVDAutor: 151,
            TiposDocumentosPendentesVendasEmiLiqDif: 152,
            TabelasPrecos: 153,
            TiposDocumentoLiquidComissao: 154,
            CodigoTabelas: 155,
            TiposDocumentosOficinas: 156,
            TiposDocumentacao: 157,
            SituacoesDocumentacao: 158,
            CursosPOS: 159,
            TiposProcessosStands: 160,
            TiposProcessosRAC: 161,
            TiposDocumentosOficinasRCP: 162,
            TiposDocumentosOficinasOCM: 163,
            TiposDocumentosOficinasOR: 164,
            TiposDocumentosOficinasREQ: 165,
            TiposDocumentosOficinasEFA: 166,
            Viaturas: 167,
            GRH_Funcionarios: 168,
            GRH_Seguradoras: 169,
            GRH_SegurancaSocial: 170,
            GRH_AbonosDescontosFaltas: 171,
            GRH_TiposContrato: 172,
            GRH_TipoExames: 173,
            GRH_Medicos: 174,
            TiposDocumentoPOS_ADI: 175,
            TiposDocumentoCTE: 176,
            IMO_Fichas_Imobilizado: 177,
            IMO_TiposDocumentos_Aquisicoes: 178,
            IMO_TiposDocumentos_Reparacoes: 179,
            IMO_TiposDocumentos_Abates: 180,
            IMO_TiposDocumentos_AbatesAlienacoes: 181,
            Tecnicos: 182,
            ArtigosStock_AOAPV_InclInactivos: 183,
            TiposDocumentoCTE_SemIVAExigivel: 184,
            TiposEV_DA: 185,
            PotenciaisClientes: 186,
            ArtigosColeccoes: 187,
            IMO_Decretos: 188,
            IMO_Planos: 189,
            TiposDocumento_SuspVND: 191,
            Contratos: 192,
            TiposContratos: 193,
            Equipamentos: 194,
            DocsCMPeVND: 195,
            Edicoes: 196,
            TiposDocumentosApv: 197,
            TiposDocumentosApvASO: 198,
            TiposDocumentosApvASR: 199,
            TiposDocumentosApvASE: 200,
            Condutores: 201,
            TiposDocumentosFrotas: 202,
            TiposDocumentosFrotasViagens: 203,
            TiposDocumentosFrotasSinistros: 204,
            TipoAPV: 205,
            AssuntoAPV: 206,
            SubAssuntoAPV: 207,
            GravidadeAPV: 208,
            NivelSLAAPV: 209,
            TiposDocumentosReservas: 210,
            MotivoISencaoIVA: 211,
            CausasProblemasAPV: 212,
            TiposSolucoesAPV: 213,
            SolucoesAPV: 214,
            Componentes: 215,
            FormacaoCompetencias: 216,
            FormacaoCursos: 217,
            FormacaoEntidades: 218,
            FormacaoAreasRU: 219,
            FormacaoHorariosRU: 220,
            FormacaoIniciativaRU: 221,
            FormacaoModalidadeRU: 222,
            FormacaoNivelQualificacaoRU: 223,
            FormacaoPeriodoRefRU: 224,
            FormacaoSitFaceFrequenciaRU: 225,
            FormacaoTipoCertDiplomaRU: 226,
            SSSTTipoAccoes: 227,
            SSSTResultadosAccoes: 228,
            SSSTProfissionais: 229,
            SSSTEntidades: 230,
            SSSTVacinasRU: 231,
            SSSTActividadesDesenvolvidas_RU: 232,
            SSSTAccoesConsultaRU: 233,
            SSSTAccoesInformacaoRU: 234,
            SSSTAccoesFormacaoRU: 235,
            SSSTExamesMedicocRU: 236,
            SSSTFactRiscoActividadeRU: 237,
            SSSTFactRiscoBiologicoRU: 238,
            SSSTFactRiscoPsicOrgRU: 239,
            SSSTFactRiscoSegSaudeRU: 240,
            SSSTFactRiscoFisicoRU: 241,
            SSSTEINECSRU: 242,
            SSSTMedidaPrevRiscoActividadeRU: 243,
            SSSTMedidaPrevRiscoBiologicoRU: 244,
            SSSTMedidaPrevRiscoQuimicoRU: 245,
            SSSTMedidaPrevRiscoPsicOrgRU: 246,
            SSSTMedidaPrevRiscoSegSaudeRU: 247,
            SSSTMedidaPrevRiscoFisicoRU: 248,
            SSSTMencaoRiscoRU: 249,
            SSSTFactRiscoDoencaRU: 250,
            SSSTDoencasRU: 251,
            Motoristas: 252,
            Departamentos: 253,
            Seguradoras: 254,
            TiposEquipamentos: 255,
            Marcas: 256,
            Modelos: 257,
            Situacoes: 258,
            TiposComponentes: 259,
            Garantias: 260,
            Viagens: 261,
            TiposContactos: 262,
            ListaIntervencoes: 263,
            TiposFamilias: 264,
            TiposActividades: 265,
            TiposAPV: 266,
            Encargos: 267,
            GrupoEncargos: 268,
            TipoAlojamento: 269,
            BlocoAlojamento: 270,
            ZonaLimpeza: 271,
            ZonaAlojamento: 272,
            EstabelecimentosHotel: 273,
            CaracteristicasAlojamentos: 274,
            Alojamentos: 275,
            Combustiveis: 276,
            TiposViaturas: 277,
            NiveisEquipamento: 278,
            Versoes: 279,
            Horarios: 280,
            ListasVerificacao: 281,
            NiveisSLA: 282,
            TiposAvariasHotel: 283,
            GruposLimpeza: 284,
            ERMRecursos: 285,
            ERMActividades: 286,
            ERMContactos: 287,
            ArtigosPartNumber: 288,
            TiposCartoesCreditos: 289,
            TipoIdentificacao: 290,
            Idioma: 291,
            EntidadesHotel: 292,
            SegmentoMercado: 293,
            OrigemMercado: 294,
            TiposGrupos: 295,
            Tarifas: 296,
            Allotments: 297,
            Direccoes: 298,
            GOPProcessos: 299,
            GOPOrcamentos: 300,
            GOPProjectos: 301,
            GOPAutos: 302,
            GOPTiposProcesso: 303,
            GOPConcursos: 304,
            GOPTiposConcurso: 305,
            GOPTiposEmpreitada: 306,
            GOPCriteriosAdjudicacao: 307,
            GOPTarefas: 308,
            GOPEspecialidades: 309,
            GOPPerfisImportacao: 310,
            TiposDocumentoGOP: 311,
            ListasPersonalizadas: 312,
            AnexosDigitais: 313,
            MotivosCancelamento: 314,
            Voos: 315,
            MeiosReservas: 316,
            TarifasBalcao: 317,
            EntidadeContratos: 318,
            Diarias: 319,
            DocumentosIdentificacao: 320,
            HospedeHotel: 321,
            GOPAlvarasCategorias: 322,
            GOPAlvarasSubCategorias: 323,
            MotivosInactividades: 324,
            Locadoras: 325,
            Operadores: 326,
            Formacao_Accoes_Formacao: 327,
            SSST_Accoes_Medicas: 328,
            SSST_Factores_Riscos: 329,
            SSST_Factores_Riscos_Doencas: 330,
            SSST_Acidentes_Trabalho: 331,
            TiposDocumentoHotel: 332,
            ERM_ClientesPotenciais: 333,
            ERM_Categorias: 334,
            ERM_Processos_Negocio: 335,
            ActividadesEntidade: 336,
            APVAssuntos: 337,
            APVSubAssuntos: 338,
            APVCausasProblemas: 339,
            APVTiposSolucao: 340,
            TarifasEntidade: 341,
            APVInstalacoes: 342,
            APVSolucoes: 343,
            TiposDocumentosApvMRC: 344,
            TiposItinerarios: 345,
            SSSTPrestadorServicos: 346,
            FormacaoEntidadesRU: 347,
            GCE_Categorias: 348,
            Frotas: 349,
            PerdidosAchados: 350,
            GruposCustosProveitos: 351,
            Estabelecimentos: 352,
            GRH_Categorias: 353,
            TabelaPrefixo: 354,
            TiposDocumentoFatSimplificada: 355,
            GRH_Distritos: 356,
            GRH_Concelhos: 357,
            GRH_Freguesias: 358,
            MotivoISencaoIVACodOfi: 359,
            TiposClasse: 360,
            ClassificacaoEstatistica: 361,
            Paises: 362,
            PaisesAlpha3: 363,
            TiposDocumentosSAFT: 364,
            Promocao: 365,
            RegCashTitles: 367,
            TiposDocumentoPOS_CARREGCARTAO: 368,
            TiposInterfaces: 369,
            Interfaces: 370,
            VIPStatus: 371,
            Titulos: 372,
            TiposDocumentoLiquidRegAd: 373,
            MedicalProdut: 374,
            MedicalAtestadosDireito: 375,
            MedicalBenefits: 376,
            MedicalSpecialty: 377,
            CustomerRFI: 379,
            MedicalTypeMedicalConsul: 380,
            AnexosDocumentacao: 381,
            MedicalTypeDeclarations: 382,
            MedicalDoctors: 383,
            MedicalConsultations: 384,
            MedicalPatient: 385,
            MedicalTypeRFI: 386,
            MedicalHealthRegions: 387,
            MedicalTypeProfessionalBodies: 388,
            MedicalTitles: 389,
            TiposContadores: 390,
            MedicalResponsibleFinancialInstitutionsPEM: 391,
            MedicalTypeBenefit: 392,
            MedicalMedicPrescType: 393,
            MedicalCustomerRFIAtualEMP: 394,
            MedicalRFISNS: 395,
            MedicalDoctorsSpecialty: 396,
            MedicalTypePrints: 397,
            MedicalMedicPrescVia: 398,
            MedicalBenefitsAtual: 399,
            ArtigosPrecos: 400,
            TiposDocumentoVendasRIVI: 401,
            TiposDocumentoComprasRIVI: 402,
            MedicalMedicPrescReasonsAnnulment: 403,
            MedicalMCDTAreas: 404,
            MedicalResponsibleFinancialInstitutions: 405,
            MedicalMedicPrescExceptions: 406,
            MedicalTypeDosages: 407,
            MedicalHealthCareInstitutions: 408,
            MedicalICD9: 409,
            MedicalICD10: 410,
            MedicalMarker: 411,
            MedicalAnalyses: 412,
            MedicalCliniHistory: 413,
            MedicalConsulState: 414,
            MedicalStandard: 415,
            MedicalTypeAttachmentsDoc: 416,
            MedicalTypeCards: 417,
            MedicalTypeModTaxExemptions: 418,
            MedicalDCIPT: 419,
            MedicalPharmaceuticalForm: 420,
            MedicalMedicPrescState: 421,
            MedicalAnalysesClinicHistSpecialty: 422,
            GOPTemplates: 424,
            GOPFolhasObra: 425,
            GOPItensCustoMaterial: 426,
            GOPItensCustoMaoObra: 427,
            GOPFormaEntrega: 428,
            GOPFormaCaucao: 429,
            GOPDirectorObra: 430,
            GOPDepartamento: 431,
            GOPTiposData: 432,
            GOPTiposDataConcurso: 433,
            GOPTiposDataOrcamento: 434,
            GOPConcursosTarefas: 435,
            GOPConcursosDocumentos: 436,
            ArtigosServicos_AOAPV_InclInactivos: 437,
            MedicalDoctorsTypeMedicCons: 438,
            TiposEventos: 439,
            GOPModoDistribuicao: 440,
            GRH_ConfigSEPA: 441,
            TiposDocumentoPOS_CreditoFactura: 442,
            TiposDocumentoPOS_VendaDinheiro: 443,
            TiposDocumentoPOS_FolhaServico: 444,
            TiposDocumentoPOS_AjusteCC: 445,
            TiposDocumentoPOS_ContaMesa: 446,
            TiposDocumentoPOS_Consumo: 447,
            TiposDocumentoPOS_RegAdiantamentos: 448,
            TiposDocumentoPOS_Perdas: 449,
            TiposDocumentoPOS_Vendas: 450,
            TiposDocumentoPOS_VendasSuspensas: 451,
            POSSubGrupoTeclado: 452,
            POSMonitoresCozinha: 453,
            POSImpressorasLogicas: 454,
            ViewEnderecosCarga: 455,
            ViewEnderecosDescarga: 456,
            LotesNomeCientifico: 457,
            LotesZonaCaptura: 458,
            POSMotivosESCaixa: 459,
            POSTipoPeriodicidade: 460,
            POSLocaisConsumo: 461,
            POSLayoutTeclado: 462,
            POSTiposDocumentosVendaDevolucao: 463,
            POSChequesOferta: 464,
            POSEtiquetasEmissaoPor: 465,
            POSEtiquetasOrdenacao: 466,
            POSEtiquetasUnidades: 467,
            POSEtiquetasActualizarNumero: 468,
            POSSelecaoMeses: 469,
            POSSelecaoFiltros: 470,
            POSSelecaoNumSeries: 471,
            POSSelecaoGeneros: 472,
            POSConfigBalancas: 473,
            POSConfigVisores: 474,
            POSConfigImpressoras: 475,
            POSValesReembolso: 476,
            POSCartoesSeries: 477,
            SSSTTpAccoesGrh: 478,
            POSCartoesConsumoFalhados: 479,
            POSConfigSistema: 480,
            POSDicionarioNomes: 481,
            POSDicionarioPhones: 531,
            POSDicionarioFiscalNumber: 542,
            SSSTProfissionalSaude: 482,
            GenericMov: 483,
            SSTEntidadeSaude: 484,
            SSTEntidadeSeguranca: 485,
            POSObjectosDeSala: 486,
            POSImpressorasServico: 487,
            SSTMotivoAcidente: 488,
            SSTMedidaAcidente: 489,
            POSDefaultLanguage: 490,
            GOPMaoObraAvailableProfession: 491,
            GOPMaoObraAvailableFormulaType: 492,
            GOPAvailableEquipment: 493,
            TaxGroup: 494,
            FiscalTaxes: 495,
            TaxRegions: 496,
            GOPFormulasRevisao: 497,
            POSPrintersWindows: 498,
            POSPrinters: 499,
            DiverseProduct: 500,
            GOPCentrosCusto: 501,
            DocumentSeries: 502,
            POSSectores: 503,
            HR_Regimes: 504,
            HR_Oganisms: 505,
            Taxes: 506,
            GOPOrcamentoTarefas: 507,
            GOPOrcamentoDocumento: 508,
            POSDescriptions: 509,
            ATGTypesOfExpenses: 510,
            Locations: 511,
            TiposDocumentoGOPOrcamento: 512,
            TiposDocumentoGOPProjeto: 513,
            TiposDocumentoGOPAutoCliente: 514,
            TiposDocumentoGOPRegistoObra: 515,
            TiposDocumentoGOPAutoProducao: 516,
            TiposDocumentosHR: 517,
            GOPPlanningConfiguration: 518,
            CRMMarketingLists: 519,
            CRMCampaigns: 520,
            GOPSubcontract: 521,
            GOPSubcontractResources: 522,
            RACPrice: 523,
            RACInsuranceTypes: 524,
            EntidadeGenerica: 525,
            MedicalPrescReasonCancellationLine: 526,
            CRMStates: 527,
            CRMCampaignTypes: 528,
            CRMContactLists: 529,
            MedicalDeclarations: 530,
            TypeDocsReservEncFO: 532,
            CRMOportunitiesList: 533,
            ProductsCatalogs: 534,
            DiscountVoucherTypes: 535,
            CRMCampaignLists: 536,
            ConfigProfilesDataCollection: 537,
            ConfigProfilesDataCollectionBankStatement: 538,
            ConfigProfilesDataCollectionEInvoice: 539,
            Colours: 540,
            DriverCategories: 541,
            Services_AOAPV_GOP: 543,
            CTBTaxonomias: 544,
            ConfigChecksPrinting: 545,
            POSSelecaoPortaria: 546,
            MedicalHealthProfessionals: 547,
            JournalWithoutApurs: 548,
            RepairChecklists: 549,
            Taxonomias: 550
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTipoAccoesMedicas', {
        statics: {
            Exame: 1,
            Consulta: 2,
            Vacinação: 3,
            Informação: 4,
            Formação: 5,
            ConsultaPública: 6,
            Promoção: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTipoAccoesSemLicenca', {
        statics: {
            Exame: 1,
            Consulta: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTipoAcidente', {
        statics: {
            NoLocalDeTrabalho: 0,
            ACaminhoDoLocalDeTrabalho: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumTipoDialogo', {
        statics: {
            SaveDialog: 0,
            FolderDialog: 1,
            OpenDialog: 2,
            FileDialogEti: 3,
            Report: 4,
            Anexos: 5,
            XAP: 6,
            Image: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTipoEmpresa', {
        statics: {
            Associativa: 1,
            Cooperativa: 2,
            Convencional: 3,
            Privada: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumTipoMenu', {
        statics: {
            Stocks: 1,
            FolhasObra: 2,
            Producoes: 3,
            Inventarios: 4,
            Compras: 5,
            Vendas: 6,
            LiquidacoesPag: 7,
            Encargos: 8,
            Letras: 9,
            EncomendasVND: 10,
            EncomendasCMP: 11,
            EncomendasSTK: 12,
            Orcamentos: 13,
            POSCaixa: 60,
            DefinirAvencas: 61,
            ProcessarAvencas: 62,
            EditarComposicao: 30,
            EncargosDistrib: 31,
            EncargosExtDistrib: 32,
            InserirRemover: 50,
            InserirRemoverConfig: 51,
            ConfigurarGrelha: 52,
            InserirRemoverCopiarColar: 53,
            CopiarColar: 54,
            SelecDesselec: 55,
            SelecDesselecConfig: 56,
            InserirRemoverInsPrecosConfig: 57,
            Etiquetas: 58,
            Remover: 59,
            RastreabilidadeArt: 60,
            RastreabilidadeDoc: 61,
            LiquidacoesLin: 62,
            SelecDesselecConfigRast: 63,
            ConfigurarGrelhaRast: 64,
            InserirRemoverRast: 65,
            RemoverRast: 66,
            InserirRemoverConfigRast: 67,
            InserirRemoverInsPrecosArtigoConfig: 68,
            APVLinhasServicos: 69,
            APVLinhasMateriais: 70,
            APVLinhasActividades: 71,
            OficinasLinhasServicos: 72,
            OficinasLinhasMateriais: 73,
            OficinasLinhasActividades: 74,
            OficinasLinhas: 75,
            APVLinhas: 76,
            OficinasLinhasFranquia: 77,
            ClinicasConsultasDeclaracao: 78,
            Funcionarios: 79,
            InserirRemoverConfigPagamentos: 80,
            SelecDesselecEmailConfig: 81,
            ConfigRastRecon: 82,
            OficinasLinhasEntrega: 83,
            APVLinhasEntrega: 84,
            Todos: 99
        },
        $enum: true
    });
    
    /**
     * Tipos de Imputação do Grupo de SST
     *
     * @public
     * @class Eticadata.ERP.EtiEnums.EnumTiposExames
     */
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTiposExames', {
        statics: {
            Admissao: 0,
            Periodico: 1,
            Ocasional: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTiposProfissional', {
        statics: {
            Médico: 0,
            Enfermeiro: 1,
            TécnicoSuperiorSHT: 2,
            TécnicoSHT: 3,
            Outros: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTiposProfissionalSemLincenca', {
        statics: {
            Médico: 0
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTiposRisco', {
        statics: {
            Físico: 0,
            Químico: 1,
            Biológico: 2,
            MúsculoEsquelético: 3,
            PsicossocialOuOrganizacional: 4,
            Outro: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumTpAccaoMsg', {
        statics: {
            Nao_Definido: 0,
            Sim: 1,
            Não: 2,
            Sim_Para_Todos: 3,
            Não_Para_Todos: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumTpFiltroCD', {
        statics: {
            ArtOrcPeriodoCliente: 190,
            ArtOrcPeriodoVendedor: 112,
            ArtOrcPorCliente: 113,
            ArtOrcPorVendedor: 114,
            ArtOrcDocsTpDoc: 115,
            ArtOrcDocsCliente: 116,
            ArtEncForPeriodoFornec: 117,
            ArtEncForPorFornecedor: 119,
            ArtEncForPorZona: 120,
            ArtEncForDocsTpDoc: 122,
            ArtEncCliPeriodoCli: 126,
            ArtEncCliPeriodoVend: 127,
            ArtEncCliPorCliente: 130,
            ArtEncCliPorVendedor: 131,
            ArtEncCliDocsTpDoc: 135,
            ArtEncCliDocsCliente: 136,
            ArtCmpPeriodoFornecedor: 3,
            ArtCmpPeriodoZona: 4,
            ArtCmpPorFornecedor: 5,
            ArtCmpPorZona: 6,
            ArtCmpPorLote: 104,
            ArtCmpDocsTpDoc: 7,
            ArtCmpDocsLote: 105,
            ArtCmpPorTpEncargo: 8,
            ArtCmpDocsTpEncargos: 9,
            ArtCmpDocsNrsSerie: 195,
            ArtStkPorArmazem: 10,
            ArtStkLocArmArmazem: 106,
            ArtStkLoteArmazem: 107,
            ArtStkArmazemLote: 111,
            ArtStkDocsTpDoc: 11,
            ArtStkPorTpDoc: 12,
            ArtStkPeriodoTpDoc: 13,
            ArtStkDocsNrsSerie: 196,
            ArtVndPeriodoCliente: 15,
            ArtVndPeriodoVendedor: 16,
            ArtVndPeriodoZona: 17,
            ArtVndPeriodoTpDoc: 18,
            ArtVndPorCliente: 19,
            ArtVndPorVendedor: 20,
            ArtVndPorZona: 21,
            ArtVndPorLote: 108,
            ArtVndPorTpDoc: 22,
            ArtVndDocsTpDoc: 23,
            ArtVndDocsCliente: 24,
            ArtVndDocsNrsSerie: 197,
            CliOrcPeriodoArtigo: 137,
            CliOrcPeriodoVendedor: 138,
            CliOrcPorArtigo: 139,
            CliOrcPorVendedor: 140,
            CliOrcDocsArtigo: 141,
            CliEncPeriodoArtigo: 142,
            CliEncPeriodoFamilia: 143,
            CliEncPeriodoVendedor: 144,
            CliEncPorArtigo: 145,
            CliEncPorFamilia: 147,
            CliEncPorVendedor: 149,
            CliEncDocsArtigo: 150,
            CliEncDocsTpDoc: 151,
            CliVndPeriodoArtigo: 27,
            CliVndPeriodoFamilia: 28,
            CliVndPeriodoVendedor: 29,
            CliVndPorArtigo: 30,
            CliVndLoteArtigo: 109,
            CliVndPorFamilia: 31,
            CliVndPorTpDoc: 32,
            CliVndPorVendedor: 33,
            CliVndDocsArtigo: 34,
            CliVndDocsTpDoc: 35,
            CliVndUltimasVendas: 193,
            CliVndArtigoDirAlternativa: 198,
            CliCcoSaldosPeriodo: 36,
            CliCcoHistorico: 37,
            CliCcoHistoricoReformaLetras: 191,
            CliCcoDocsPendentes: 38,
            CliCcoLetrasEstado: 39,
            CliPrevMovsDataValor: 40,
            CliPrevMovsDataMov: 41,
            CliPrevMovsTpMeioPag: 42,
            ForEncPeriodoArtigo: 152,
            ForEncPeriodoFamilia: 153,
            ForEncPorArtigo: 154,
            ForEncPorFamilia: 156,
            ForEncDocsArtigo: 158,
            ForEncDocsTpDoc: 159,
            ForCmpPeriodoArtigo: 45,
            ForCmpPeriodoFamilia: 46,
            ForCmpPorArtigo: 47,
            ForCmpLoteArtigo: 110,
            ForCmpPorFamilia: 48,
            ForCmpPorTpDoc: 49,
            ForCmpDocsArtigo: 50,
            ForCmpDocsTpDoc: 51,
            ForCmpUltimasCompras: 194,
            ForCcoSaldosPeriodo: 52,
            ForCcoHistorico: 53,
            ForCcoHistoricoReformaLetras: 192,
            ForCcoDocsPendentes: 54,
            ForCcoLetras: 55,
            ForPrevMovsDataValor: 56,
            ForPrevMovsDataMov: 57,
            ForPrevMovsTpMeioPag: 58,
            VendOrcPeriodoCliente: 161,
            VendOrcPeriodoArtigo: 162,
            VendOrcPorCliente: 163,
            VendOrcPorArtigo: 164,
            VendOrcDocumentos: 165,
            VendEncPeriodoCliente: 167,
            VendEncPeriodoArtigo: 168,
            VendEncPorCliente: 169,
            VendEncPorArtigo: 170,
            VendEncDocumentos: 171,
            VendVndPeriodoCliente: 61,
            VendVndPeriodoArtigo: 62,
            VendVndPorCliente: 63,
            VendVndPorArtigo: 64,
            VendVndDocumentos: 65,
            VendCcoSaldosPeriodo: 66,
            VendCcoHistorico: 67,
            VendCcoDocsPendentes: 68,
            ValGloOrcPorPeriodo: 172,
            ValGloOrcPorArtigo: 173,
            ValGloOrcPorCliente: 174,
            ValGloOrcPorVendedor: 175,
            ValGloOrcDocsTpDoc: 176,
            ValGloEncCliPorPeriodo: 177,
            ValGloEncCliPorArtigo: 178,
            ValGloEncCliPorCliente: 179,
            ValGloEncCliPorFamilia: 180,
            ValGloEncCliPorTipoArtigo: 181,
            ValGloEncCliSubZonaZona: 182,
            ValGloEncCliPorVendedor: 183,
            ValGloEncCliDocsTpDoc: 184,
            ValGloEncForPorPeriodo: 185,
            ValGloEncForPorArtigo: 186,
            ValGloEncForPorFornec: 187,
            ValGloEncForPorFamilia: 188,
            ValGloEncForDocsTpDoc: 189,
            ValGloCmpPorPeriodo: 70,
            ValGloCmpPorArtigo: 71,
            ValGloCmpPorFornecedor: 72,
            ValGloCmpPorFamilia: 73,
            ValGloCmpDocsTpDoc: 74,
            ValGloStkPorArtigo: 75,
            ValGloStkPorFamilia: 76,
            ValGloStkDocsTpDoc: 77,
            ValGloVndPorPeriodo: 78,
            ValGloVndPorArtigo: 79,
            ValGloVndPorCliente: 80,
            ValGloVndPorFamilia: 81,
            ValGloVndPorTipoArtigo: 82,
            ValGloVndSubZonaZona: 83,
            ValGloVndPorVendedor: 84,
            ValGloVndDocsTpDoc: 85,
            ValGloCcoTerceiros: 86,
            SitTesSldPorTpConta: 90,
            SitTesSldPorConta: 91,
            SitTesSldPeriodoTpConta: 92,
            SitTesSldPeriodoConta: 93,
            SitTesSldMovsConta: 94,
            SitTesPrevPeriodoRubrica: 96,
            SitTesPrevPeriodoTpMeioPag: 97,
            SitTesPrevPorRubrica: 98,
            SitTesPrevPorTpMeioPag: 99,
            SitTesPrevMovsRubrica: 100,
            SitTesPrevMovsTpMeioPag: 101,
            SitTesResPorRubrica: 102,
            SitTesResMovsRubrica: 103
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EnumTypeLinkCategory', {
        statics: {
            ValorImposto: 1,
            ValorIncidencia: 2,
            ValorImpostoNaoDedutivel: 3,
            Conta: 4,
            ContaDevolucao: 5,
            ContaIVA: 6,
            ContaCustoDebito: 7,
            ContaCustoCredito: 8,
            ContaEncargos: 9,
            ContaInvSujPass: 10,
            ContaCustoMaoObra: 11,
            ContaCustoMaquina: 12,
            ContaMercadoria: 13,
            InvAdjustmentFavorable: 14,
            InvAdjustmentUnfavorable: 15
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumValuePermEntidade', {
        statics: {
            UserSemPerm: 0,
            UserComPerm: 1,
            UserSemPermGrupo: 2,
            UserComPermGrupo: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.enumVendedorTpComissaoStd', {
        statics: {
            PVSemIva: 0,
            PVSemAverbIA: 1,
            Lucro: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EtiApplication', {
        statics: {
            None: 0,
            BackOffice: 1,
            FrontOffice: 2,
            GaragesTaskControl: 3,
            Other: 99
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EtiApplicationModule', {
        statics: {
            None: 0,
            Sales: 1,
            Purchases: 2,
            Orders: 3,
            Budgets: 4,
            Stocks: 5,
            Settlements: 6,
            Clinics: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EtiConstComuns', {
        statics: {
            cDATANULL: "1900-01-01",
            cDATAFORMAT: "YYYY-MM-DD",
            cDateSTDFormat: "yyyy-MM-dd",
            cDateTimeSTDFormat: "yyyy-MM-dd HH:mm:ss",
            cMaxNumSerie: 30,
            cMaxCodigoLote: 25,
            cMaxDescricaoArtigo: 150
        }
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EtiFileManagerFilter', {
        statics: {
            GetFilterType: function (pFilterType) {
    
                var strFiltro = "";
    
                switch (pFilterType) {
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_RDL: 
                        strFiltro = "RDL (*.rdl)|*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_XML: 
                        strFiltro = "XML (*.xml)|*.xml";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_RPT: 
                        strFiltro = "Crystal Reports (*.rpt)|*.rpt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_TXT: 
                        strFiltro = "(*.txt)|*.txt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_XAP: 
                        strFiltro = "XAP (*.xap)|*.xap";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_LOG: 
                        strFiltro = "LOG (*.log)|*.log";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_DOC: 
                        strFiltro = "(*.doc)|*.doc";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_XLS: 
                        strFiltro = "Excel 97-2003 Workbook (*.xls)|*.xls";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_XLSX: 
                        strFiltro = "Excel Workook (*.xlsx)|*.xlsx|Excel 97-2003 Workbook(*.xls)|*.xls";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_PPT: 
                        strFiltro = "(*.ppt)|*.ppt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_PDF: 
                        strFiltro = "PDF (*.pdf)|*.pdf";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_XPS: 
                        strFiltro = "(*.xps)|*.xps";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_CSV: 
                        strFiltro = "CSV (Comma delimited)(*.csv)|*.csv";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_ZIP: 
                        strFiltro = "(*.zip)|*.zip";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_ETI: 
                        strFiltro = "(*.eti)|*.eti";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_JAR: 
                        strFiltro = "(*.jar)|*.jar";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_EXE: 
                        strFiltro = "(*.exe)|*.exe";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_CFDoc: 
                        strFiltro = "(*.CFDoc)|*.CFDoc";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_DOC_XLS_PPT: 
                        strFiltro = "(*.doc)|*.doc|(*.xls)|*.xls|(*.ppt)|*.ppt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_BMP_JPG_GIF: 
                        strFiltro = "(*.bmp)|*.bmp|(*.jpg)|*.jpg|(*.gif)|*.gif";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_JPG_PNG: 
                        strFiltro = "Imagens (*.jpg,*.png)|*.jpg;*.png|JPG (*.jpg)|*.jpg|PNG (*.png)|*.png";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_TODOS: 
                        strFiltro = "Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_PERIFERICOS: 
                        strFiltro = "Ficheiros Diversos(*.imp,*.plt,*.plted)|*.imp;*.plt;*.plted";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_EDI: 
                        strFiltro = "EDI (*.edi)|*.edi";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_BMP: 
                        strFiltro = "BMP (*.bmp)|*.bmp";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TES: 
                        strFiltro = "(Tes*.rpt)|Tes*.rpt|(Tes*.rdl)|Tes*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TES_TAL: 
                        strFiltro = "(TesTalao*.rpt)|TesTalao*.rpt|(TesTalao*.rdl)|TesTalao*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TES_RECON: 
                        strFiltro = "(TesExtr*.rpt)|TesExtr*.rpt|(TesExtr*.rdl)|TesExtr*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TES_FOCAIXA: 
                        strFiltro = "(TesFolha*.rpt)|TesFolha*.rpt|(TesFolha*.rdl)|TesFolha*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TES_TRANSF: 
                        strFiltro = "(Transf*.rpt)|Transf*.rpt|(Transf*.rdl)|Transf*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.VND: 
                        strFiltro = "Crystal Reports (Vnd*.rpt)|Vnd*.rpt|Report Definition Language (Vnd*.rdl)|Vnd*.rdl|CFDOC (*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.CMP: 
                        strFiltro = "Crystal Reports (Cmp*.rpt)|Cmp*.rpt|Report Definition Language (Cmp*.rdl)|Cmp*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ENC: 
                        strFiltro = "Crystal Reports (Enc*.rpt)|Enc*.rpt|Report Definition Language (Enc*.rdl)|Enc*.rdl|(*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.LIQ: 
                        strFiltro = "Crystal Reports (Liq*.rpt)|Liq*.rpt|Report Definition Language (Liq*.rdl)|Liq*.rdl|(*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.LTR: 
                        strFiltro = "Crystal Reports (Let*.rpt)|Let*.rpt|Report Definition Language (Let*.rdl)|Let*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ORC: 
                        strFiltro = "Crystal Reports (Orc*.rpt)|Orc*.rpt|Report Definition Language (Orc*.rdl)|Orc*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.STK: 
                        strFiltro = "Crystal Reports (Stk*.rpt)|Stk*.rpt|Report Definition Language (Stk*.rdl)|Stk*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.STK_FO: 
                        strFiltro = "Crystal Reports (STFO*.rpt)|STFO*.rpt|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.STK_PRO: 
                        strFiltro = "Crystal Reports (STPRO*.rpt)|STPRO*.rpt|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.STK_INV: 
                        strFiltro = "Crystal Reports (STI*.rpt)|STI*.rpt|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.GOP: 
                        strFiltro = "Report Definition Language (*.rdl)|*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.STE: 
                        strFiltro = "Report Definition Language (*.rdl)|*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.HR: 
                        strFiltro = "Report Definition Language (*.rdl)|*.rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.COM: 
                        strFiltro = "Crystal Reports (Com*.rpt)|Com*.rpt|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_IMP: 
                        strFiltro = "XML (*.xml)|*.xml|TXT (*.txt)|*.txt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.IMAGENS: 
                        strFiltro = "Imagens (*.bmp,*.jpg,*.jpeg,*.gif,*.png)|*.bmp;*.jpg;*.jpeg;*.gif;*.png|BMP (*.bmp)|*.bmp|JPG (*.jpg)|*.jpg|JPEG (*.jpeg)|*.jpeg|GIF (*.gif)|*.gif|PNG (*.png)|*.png|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.IMAGEM_TODOS: 
                        strFiltro = "Todos os ficheiros de imagem (*.bmp;*.gif;*.jpg;*.jpeg;*.png;*.ico;*.ico;*.wmf)|*.bmp;*.gif;*.jpg;*.jpeg;*.png;*.ico;*.ico;*.wmf";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.IMAGEM_MAPA_BITS: 
                        strFiltro = "Ficheiros de mapa de bits (*.bmp;*.gif;*.jpg;*.jpeg;*.png;*.ico)|*.bmp;*.gif;*.jpg;*.jpeg;*.png;*.ico";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.IMAGEM_METAFICHEIROS: 
                        strFiltro = "Metaficheiros (*.emf;*.wmf)|*.emf;*.wmf";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TODOS: 
                        strFiltro = "Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.OfiMarcacao: 
                        strFiltro = "(MRC*.rdl)|MRC*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.OfiRecepcao: 
                        strFiltro = "(RCP*.rdl)|RCP*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.OfiOrcamento: 
                        strFiltro = "(OCM*.rdl)|OCM*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.OfiOrdReparacao: 
                        strFiltro = "(OR_*.rdl)|OR_*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.OfiEntregaFactura: 
                        strFiltro = "(EFA*.rdl)|EFA*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.OfiMapaManRT: 
                        strFiltro = "(MapMan*.rdl)|MapMan*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvMarcacao: 
                        strFiltro = "(MRC*.rdl)|MRC*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvRecepcao: 
                        strFiltro = "(ASP*.rdl)|ASP*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvOrcamento: 
                        strFiltro = "(ASO*.rdl)|ASO*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvReparacao: 
                        strFiltro = "(ASR*.rdl)|ASR*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvReparacaoRecepcao: 
                        strFiltro = "(ASR*.rdl)|ASR*.rdl|(ASP*.rdl)|ASP*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvEntregaFactura: 
                        strFiltro = "(ASE*.rdl)|ASE*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ApvEquipamento: 
                        strFiltro = "(Doc*.rdl)|Doc*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.FroViagem: 
                        strFiltro = "(VGM*.rdl)|VGM*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.FroSinistro: 
                        strFiltro = "(SIN*.rdl)|SIN*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.StdPesquisa: 
                        strFiltro = "(listProc*.rdl)|listProc*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.StdPotencialCliente: 
                        strFiltro = "(docPotClientes*.rdl)|docPotClientes*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.StdPotenciaisClientes: 
                        strFiltro = "(listPotClientes*.rdl)|lisPotClientes*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.StdMapaIva: 
                        strFiltro = "(listIVA*.rdl)|listIVA*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.RacDocumento: 
                        strFiltro = "(Doc*.rdl)|Doc*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.Etiqueta: 
                        strFiltro = "(etiqueta*.rdl)|etiqueta*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.Exportar: 
                        strFiltro = "Exportar (*.xml)|*.xml";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.Importar: 
                        strFiltro = "Importar (*.xml)|*.xml";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.CTE_MAP_XLS: 
                        strFiltro = "Mapas Gestão (*.MAP)|*.MAP|Excel (*.xls)|*.xls";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.CTE_MAP_XLS_XLSX: 
                        strFiltro = "Mapas Gestão (*.MAP)|*.MAP|Excel (*.xls)|*.xls|Excel (*.xlsx)|*.xlsx";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.CTE_MAP: 
                        strFiltro = "Editor Mapas Gestão (*.MAP)|*.MAP";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.ETI_LETRA: 
                        strFiltro = "(EtiLetra*.rpt)|EtiLetra*.rpt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.VSEL_CFDOC: 
                        strFiltro = "(VSel*.cfdoc)|VSel*.cfdoc";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.VSEL_RPT: 
                        strFiltro = "(VSel*.rpt)|VSel*.rpt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.VSEL_RDL: 
                        strFiltro = "(VSel*.rdl)|VSel*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TpMovCaixa_RPT: 
                        strFiltro = "(*Caixa*.Rpt)|*Caixa*.Rpt|(*.Rpt)|*.Rpt|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TpMovCaixa_RDL: 
                        strFiltro = "(*Caixa*.Rdl)|*Caixa*.Rdl|(*.Rdl)|*.Rdl|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TpMovCaixa_Abertura: 
                        strFiltro = "(Abertura*.CFDoc)|Abertura*.CFDoc|(*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TpMovCaixa_Entrada: 
                        strFiltro = "(Entrada*.CFDoc)|Entrada*.CFDoc|(*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TpMovCaixa_Saida: 
                        strFiltro = "(Saida*.CFDoc)|Saida*.CFDoc|(*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.TpMovCaixa_Fecho: 
                        strFiltro = "(Fecho*.CFDoc)|Fecho*.CFDoc|(*.CFDoc)|*.CFDoc|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.INV_Etiqueta: 
                        strFiltro = "Etiquetas (listEtiq*.rdl)|listEtiq*.rdl";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.CTE_LivrosSelados: 
                        strFiltro = "Livros Selados (LivSelEmiDR*.rpt)|LivSelEmiDR*.rpt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_WAV: 
                        strFiltro = "wav files (*.wav)|*.wav";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.CTE_LivrosSeladosPreparacao: 
                        strFiltro = "Livros Selados (LivSelTp*.rpt)|LivSelTp*.rpt";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.AnexosDigitais: 
                        strFiltro = "PDF (*.pdf)|*.pdf|Excel Workook (*.xlsx)|*.xlsx|Excel 97-2003 Workbook(*.xls)|*.xls|Word Document (*.docx)|*.docx|Word 97-2003 Document(*.xls)|*.xls|PowerPoint Presentation (*.pptx)|*.pptx|PowerPoint 97-2003 Presentation (*.ppt)|*.ppt|JPG (*.jpg)|*.jpg|PNG (*.png)|*.png|Mapa de bits (*.bmp)|*.bmp|GIF (*.gif)|*.gif|Documentos de texto(*.txt)|*.txt|RDL (*.rdl)|*.rdl|XML (*.xml)|*.xml|Todos os ficheiros (*.*)|*.*";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_IGE: 
                        strFiltro = "IGE (*.IGE)|*.IGE";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_CUST: 
                        strFiltro = "Ficheiros (*.dll;*.exe)|*.dll;*.exe";
                        break;
                    case Eticadata.ERP.EtiEnums.FilterType.EXT_JSON: 
                        strFiltro = "JSON (*.json)|*.json";
                        break;
                }
                return strFiltro;
    
            }
        }
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.etiMetaModulos', {
        statics: {
            CC: 1,
            Compras: 2,
            CTE: 3,
            EncomendasOrcamentos: 4,
            GRH: 5,
            IMO: 6,
            Oficinas: 7,
            RAC: 8,
            Stands: 9,
            Stocks: 10,
            Tesouraria: 11,
            Vendas: 12,
            POS: 13,
            Gourmet: 14,
            Referencias: 15,
            Promocoes: 17,
            Adiantamentos: 18,
            Customizacao: 19,
            CTEGestao: 20,
            GCE: 21,
            DocAdicionalConversaoVND: 22,
            Basic: 23,
            Premium: 24,
            Extended: 25,
            MoedaForte: 26,
            Premium_Ou_Extended: 27,
            Gourmet_Premium_Ou_Extended: 28,
            POS_Premium_Ou_Extended: 29,
            GCEOne: 31,
            POSGOURMET: 32,
            BasicPOSGOURMET: 33,
            GCE_PREMIUM: 36,
            GCE_EXTENDED: 37,
            AutogestVendas: 38,
            AutogestStocks: 39,
            AutogestCompras: 41,
            AutogestCCeTesouraria: 42,
            AutogestMultiViatura: 43,
            AutogestRecepcaoPDA: 44,
            ModelosOficiais2010: 47,
            ModelosOficiais2011: 49,
            GCE_Artigos: 50,
            ModelosOficiais2012: 51,
            ModelosOficiais2013: 52,
            ModelosOficiais2014: 53,
            GRH_SST: 54,
            ModelosOficiais2015: 55,
            ModelosOficiais2016: 56
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.etiModulos', {
        statics: {
            BASIC_GCE: 100,
            BASIC_POSFront: 101,
            BASIC_GourmetFront: 102,
            PREMIUM_GCEONE: 103,
            PREMIUM_POSFront: 104,
            PREMIUM_GourmetFront: 105,
            PREMIUM_EncomendasOrcamentos: 106,
            PREMIUM_Compras: 107,
            PREMIUM_Stocks: 108,
            PREMIUM_Vendas: 109,
            PREMIUM_CC: 110,
            PREMIUM_Tesouraria: 111,
            PREMIUM_Stands: 112,
            PREMIUM_RAC: 113,
            PREMIUM_Oficinas: 114,
            PREMIUM_CTEGeral: 115,
            PREMIUM_CTEGestao: 116,
            PREMIUM_GRH: 117,
            PREMIUM_IMO: 118,
            EXTENDED_POSFront: 119,
            EXTENDED_GourmetFront: 120,
            EXTENDED_EncomendasOrcamentos: 121,
            EXTENDED_Compras: 122,
            EXTENDED_Vendas: 123,
            EXTENDED_Tesouraria: 124,
            EXTENDED_Stands: 125,
            EXTENDED_RAC: 126,
            EXTENDED_Oficinas: 127,
            EXTENDED_CTE: 128,
            EXTENDED_IMO: 129,
            EXTENDED_GRH: 130,
            MODULOS_Lotes: 131,
            MODULOS_NumerosSerie: 132,
            MODULOS_LivrosEdicoes: 133,
            MODULOS_POSIntegracaoF3M: 134,
            MODULOS_BalancasGrandePorte: 135,
            MODULOS_ToleranciaFalhas: 136,
            MODULOS_Intrastat: 137,
            MODULOS_IntegradorFilial: 139,
            MODULOS_IntegradorSede: 140,
            MODULOS_FacturaEletronica: 141,
            MODULOS_CRM: 142,
            MODULOS_CustomizacaoPremium: 144,
            MODULOS_ArquivoDigital: 146,
            MODULOS_RecolhaTarefa: 147,
            MODULOS_POSEncomendas: 148,
            MODULOS_POSfolhasServico: 149,
            MODULOS_POSPubViewer: 150,
            MODULOS_CGA: 151,
            MODULOS_OutroPais: 152,
            MODULOS_Portugal: 153,
            MODULOS_CaboVerde: 154,
            MODULOS_Mocambique: 155,
            MODULOS_Guine: 156,
            MODULOS_Espanha: 157,
            MODULOS_Angola: 158,
            MODULOS_RecargoEquivalencia: 159,
            MODULOS_BusinessAddIn: 160,
            MODULOS_PlataformaIntegracao: 162,
            MODULOS_STome: 163,
            BASIC_Oficinas: 168,
            BASIC_Stands: 169,
            MODULOS_ExportadorOFFLine: 171,
            MODULOS_ImportadorOFFLine: 173,
            MODULOS_FranchisingOFFLine: 174,
            MODULOS_ConsolidacaoContas: 177,
            Frotas: 181,
            APV: 182,
            GRH_Formacao: 183,
            GRH_SST: 184,
            ERM: 186,
            GOP: 187,
            SUITE: 188,
            Contratos: 189,
            PREMIUM_EdicaoJanelas: 192,
            MODULOS_PlataformaIntegracaoComCertific: 193,
            EPORTALS_GRH: 194,
            EPORTALS_COMERCIAL: 195,
            EPORTALS_OFICINAS: 196,
            MODULOS_CASE_FUNC: 200,
            SUITE_FIAS: 138,
            MODULOS_GTMotive: 143,
            EPORTALS_SUITE: 145,
            EPORTALS_ECOMMERCE: 164,
            MODULOS_ModelosOficiais2013: 201,
            MODULOS_ModelosOficiais2014: 202,
            EMOBILE_ANALYSES: 209,
            EMOBILE_SALES: 210,
            EMOBILE_ORDERS: 211,
            MODULOS_Colombia: 212,
            eMEDICAL: 213,
            MODULOS_SelfBillingDoctor: 214,
            MODULOS_BillingCustomerRFI: 215,
            GOP_REORCAMENTATION: 216,
            GOP_PRICEREVISION: 217,
            GOP_PLANNING: 218,
            EMOBILE_SETTLEMENTS: 219,
            GOP_SUBCONTRACT: 220,
            MODULOS_GuineBissau: 221,
            MODULOS_ModelosOficiais2015: 222,
            MODULOS_OutroPaisComplementar: 223,
            MISC_V19: 224,
            MODULOS_Prescription: 225,
            eMEDICAL_MCDT: 226,
            MODULOS_ModelosOficiais2016: 227,
            eMEDICAL_ACC: 228,
            GCE_EFREE: 229,
            OFI_CHECK_IN: 230,
            GCE_STOCK_COUNT: 231
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EtiqTpEmissao', {
        statics: {
            NaoDefinido: -1,
            NumFixoCopias: 0,
            StockReal: 1,
            MovStocks: 2,
            Producoes: 3,
            DocCompras: 4,
            DocVendas: 5,
            EncClientes: 6,
            EncFornecedores: 7,
            Promocoes: 8,
            ProducoesDecomposicao: 9
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EtiStateResponse', {
        statics: {
            OK: 0,
            Warning: 1,
            Error: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.eTpValDef', {
        statics: {
            cVDefSeccao: 0,
            cVDefCodArm: 9,
            cVDefTpComissao: 1,
            cVDefContaTes: 2,
            cVDefTpMovPag: 3,
            cVDefOfiFunc: 10,
            cVDefClienteZero: 13,
            cVDefPagadorZero: 14,
            cVDefLiqCli: 4,
            cVDefLiqFor: 5,
            cVDefLiqODev: 6,
            cVDefLiqOCre: 7,
            cVDefEntStk: 8,
            cVDefSlrTipContr: 11,
            cVDefSlrEstabelecim: 12
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EVCasasDec', {
        statics: {
            Pilhas: 4,
            Pneus: 4,
            Oleos: 4,
            REEE: 4,
            DireitosAutor: 4,
            NaoDefinido: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.EVTipos', {
        statics: {
            Pilhas: 0,
            Pneus: 1,
            Oleos: 2,
            REEE: 3,
            DireitosAutor: 4,
            NaoDefinido: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ExportWebFormat', {
        statics: {
            NENHUM: 0,
            PDF: 1,
            Excel: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.FieldsERP_BankStatement', {
        statics: {
            ValueDate: 1,
            MovementDate: 2,
            Value: 3,
            DebitValue: 4,
            CreditValue: 5,
            Description: 6,
            Nature: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.FieldsERP_eInvoice', {
        statics: {
            Entity: 1,
            DocType: 2,
            DocNumber: 3,
            IssueDate: 4,
            TaxAmount: 5,
            Amount: 6,
            State: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.FilterType', {
        statics: {
            EXT_RPT: 1,
            EXT_RDL: 2,
            EXT_TXT: 3,
            EXT_XML: 4,
            EXT_LOG: 5,
            CMP: 6,
            ENC: 7,
            LTR: 8,
            LIQ: 9,
            ORC: 10,
            STK: 11,
            VND: 12,
            GOP: 13,
            STE: 14,
            STK_FO: 15,
            STK_PRO: 16,
            STK_INV: 17,
            TES: 18,
            TES_TAL: 19,
            TES_RECON: 20,
            TES_FOCAIXA: 21,
            TES_TRANSF: 22,
            COM: 23,
            EXT_DOC: 24,
            EXT_XLS: 25,
            EXT_PPT: 26,
            EXT_DOC_XLS_PPT: 27,
            EXT_TODOS: 28,
            EXT_PDF: 29,
            EXT_XPS: 30,
            EXT_CSV: 31,
            EXT_ZIP: 32,
            EXT_ETI: 33,
            EXT_PERIFERICOS: 34,
            EXT_JAR: 35,
            EXT_EXE: 36,
            EXT_BMP_JPG_GIF: 37,
            EXT_CFDoc: 38,
            EXT_IMP: 39,
            IMAGENS: 40,
            TODOS: 41,
            OfiMarcacao: 42,
            OfiRecepcao: 43,
            OfiOrcamento: 44,
            OfiOrdReparacao: 45,
            OfiEntregaFactura: 46,
            ApvMarcacao: 47,
            ApvOrcamento: 48,
            ApvReparacao: 49,
            ApvReparacaoRecepcao: 50,
            ApvEntregaFactura: 51,
            ApvEquipamento: 52,
            FroViagem: 53,
            FroSinistro: 54,
            StdPesquisa: 55,
            StdPotencialCliente: 56,
            StdPotenciaisClientes: 57,
            StdMapaIva: 58,
            RacDocumento: 59,
            Etiqueta: 60,
            Exportar: 61,
            Importar: 62,
            EXT_EDI: 63,
            EXT_BMP: 64,
            STK_RPT: 65,
            STK_RDL: 66,
            VND_RPT: 67,
            VND_RDL: 68,
            CMP_RPT: 69,
            CMP_RDL: 70,
            ORC_RPT: 71,
            ORC_RDL: 72,
            LIQ_RPT: 73,
            LIQ_RDL: 74,
            ENC_RPT: 75,
            ENC_RDL: 76,
            EXT_XAP: 77,
            EXT_JPG_PNG: 78,
            EXT_XLSX: 79,
            CTE_MAP_XLS: 80,
            CTE_MAP_XLS_XLSX: 81,
            CTE_MAP: 82,
            ETI_LETRA: 83,
            TpMovCaixa_RPT: 84,
            TpMovCaixa_RDL: 85,
            TpMovCaixa_Abertura: 86,
            TpMovCaixa_Entrada: 87,
            TpMovCaixa_Saida: 88,
            TpMovCaixa_Fecho: 89,
            VSEL_CFDOC: 90,
            VSEL_RPT: 91,
            VSEL_RDL: 92,
            INV_Etiqueta: 93,
            CTE_LivrosSelados: 94,
            EXT_WAV: 95,
            CTE_LivrosSeladosPreparacao: 96,
            OfiMapaManRT: 97,
            IMAGEM_TODOS: 98,
            IMAGEM_MAPA_BITS: 99,
            IMAGEM_METAFICHEIROS: 100,
            AnexosDigitais: 101,
            EXT_IGE: 102,
            HR: 103,
            ApvRecepcao: 104,
            EXT_CUST: 105,
            EXT_JSON: 106
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.GENDescontosPrecosEntidade', {
        statics: {
            DescontosPrecosClienteArtigos: 1,
            DescontosPrecosClienteFamilias: 2,
            DescontosPrecosArtigoClientes: 3,
            DescontosPrecosFamiliaClientes: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.GOPInvoicingType', {
        statics: {
            Measurement: 0,
            Project: 1,
            ProjectPartial: 2,
            PaymentPlan: 3,
            PaymentPlanPartial: 4,
            Resource: 5,
            ResourcePartial: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.GratificationType', {
        statics: {
            Percentage: 0,
            Value: 1,
            Total: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Grelhas_Geral_TabelasListagens', {
        statics: {
            Campo: 1,
            Imprimir: 2,
            Posicao: 3,
            Ordenar: 4,
            Ordenacao: 5,
            Desde: 6,
            Ate: 7,
            Tamanho: 8,
            Filtro: 9,
            NomeCampo: 10,
            Tipo: 11,
            NCasasDec: 12,
            Valores: 13
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.GS_ValueOfProperty', {
        statics: {
            None: -1,
            Group: 0,
            SubGroup: 1,
            SelectLayoutArticles: 2,
            LogicPrinter: 3,
            KitchenMonitor: 4,
            WizardSector_LogicPrinter: 5,
            WizardSector_KitchenMonitor: 6,
            ProductsCatalog: 7,
            Menus: 8,
            InfoToScale: 9
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.GTMotive_TpOperacao', {
        statics: {
            Create: 1,
            Update: 2,
            Read: 3,
            Report: 4,
            PhotoGallery: 5,
            CreatePartQuery: 6,
            ReadPartQuery: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.IdxTabelaParam', {
        statics: {
            RubricasImp: 0,
            Municipios: 1,
            MapasEstatisticos: 2,
            DeclModelo3: 3,
            DeclRetFonte: 4,
            DeclIVAAnexos40_41: 5,
            DeclAnual: 6,
            DeclModelo22: 7,
            ABDR: 8,
            EcovalorDAutor: 9,
            ImoCoefReav: 10,
            ImoTblAnexa: 11,
            ImoAjustesFiscais: 12,
            ImoDecretos: 13,
            ImoTpImo: 14,
            ImoMotivosAbate: 15,
            ImoContas: 16,
            Aut_ISV: 17,
            DeclAnualNotas: 18,
            DeclAnualParam: 19,
            Grh_AbonosDescontosFaltas: 20,
            Grh_AssociacoesPatronais: 21,
            Grh_Categorias: 22,
            Grh_DistritosConcelhosFreguesias: 23,
            Grh_Diuturnidades: 24,
            Grh_Feriados: 25,
            Grh_Habilitacoes: 26,
            Grh_InstrRegulTrabalho: 27,
            Grh_Medicos: 28,
            Grh_MotivosFaltas: 29,
            Grh_NaturezasJuridicas: 30,
            Grh_Paises: 31,
            Grh_Profissoes: 32,
            Grh_ReparticaoFinancas: 33,
            Grh_ResultadosConsultas: 34,
            Grh_Situações: 35,
            Grh_TiposRendimentos: 36,
            Grh_TiposDespesas: 37,
            Grh_TiposContrato: 38,
            Grh_TiposExames: 39,
            Grh_Turnos: 40,
            Grh_MapasEspecificos: 41,
            Grh_Config_Desc_CTE: 42,
            Grh_Seguradoras: 43,
            Grh_Sindicatos: 44,
            Grh_SegurancaSocial: 45,
            Aut_RentACar: 46,
            Aut_ConfigProc: 47,
            Grh_TaxasIRS: 49,
            Grh_RelatorioUnicoParam: 50,
            Grh_SituacoesCGA: 51
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.InactiveFieldsPosition', {
        statics: {
            ErrorCode: 0,
            Property: 1,
            TableEnum: 2,
            RecordValue: 3,
            LineNumber: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ItemMenuOpenWindow', {
        statics: {
            CheckCompanyFile: 0,
            Yes: 1,
            No: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.JanelaDescargaCTB', {
        statics: {
            cINDEXCTBCompras: 1,
            cINDEXCTBStocks: 2,
            cINDEXCTBVendas: 3,
            cINDEXCTBLiquidacoes: 4,
            cINDEXCTBLetras: 5,
            cINDEXCTBLiqComissoes: 6,
            cINDEXCTBEncargos: 7,
            cINDEXCTBTesouraria: 8,
            cINDEXCTBSalarios: 9,
            cINDEXCTBOficinasEF: 10
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.LicencasTipoErro', {
        statics: {
            SemErro: 0,
            ErroLicenca: 1,
            ErroChave: 2,
            NaoHaLicencasDisponiveisParaModulo: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.LinhaLicenca', {
        statics: {
            Base: 0,
            Premium: 1,
            Extended: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.LockedBySettlementCode', {
        statics: {
            NotLocked: 0,
            HasManualSettlements: 1,
            HasAutomaticSettlementLocked: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.MaxEmbebbedScrollButtonsSizeSchema', {
        statics: {
            DefValue: 0,
            MinOf_DefValue_Or_Half_Size_PanelButton: 1,
            MinOf_DefValue_Or_2Thirds_Size_PanelButton: 2,
            MinOf_DefValue_Or_3Quarters_Size_PanelButton: 3,
            MinOf_DefValue_Or_PanelButton_Size: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.MessageFormat', {
        statics: {
            Text: 0,
            Html: 1,
            RTF: 2,
            Unspecified: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Months', {
        statics: {
            January: 1,
            February: 2,
            March: 3,
            April: 4,
            May: 5,
            June: 6,
            July: 7,
            August: 8,
            September: 9,
            October: 10,
            November: 11,
            December: 12
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.NaturezaAtividade', {
        statics: {
            IntervencaoDeOficinas: 0,
            IntervencaoDeAssistencias: 1,
            CompromissoReuniao: 2,
            Tarefa: 3,
            FaxTelefonema: 4,
            EmailCartaIM: 5,
            SMS: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.PanelButtonsScrollTypes', {
        statics: {
            EmbebbedScrollButtons: 0,
            LateralScrollButtons: 1,
            ScrollButtonsAsItens_HideFirstBackButton: 2,
            ScrollButtonsAsItens_ShowFirstBackButton: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Permissoes', {
        statics: {
            pNaoDefinida: -1,
            pSoPermisaoBase: 0,
            pCtbMapasEstatisticos: 0,
            pInserir: 1,
            pAdministrador: 1,
            pAlterar: 2,
            pSuperVisor: 2,
            pRemover: 3,
            pAplicacoes: 3,
            pListar: 4,
            pAlterarAnular: 5,
            pAlterarOutros: 6,
            pRemoverOutros: 7,
            pMapasPersonalizados: 100,
            pMapasPersonalizados1: 101,
            pMapasPersonalizados299: 299,
            pTabelas: 1001,
            pTabPesquisas: 1002,
            pStands_Mov_Procurar_Viatura_Processo: 1003,
            pTabEntidades: 1004,
            pTabClientes: 1005,
            pTabPlafond: 1010,
            pTabFornecedores: 1011,
            pTabOutrosDev: 1016,
            pTabOutrosCred: 1021,
            pTabBancos: 1026,
            pBackOfficeTabEstabelecimentos: 1031,
            pTabVendedores: 1036,
            pTabOperadores: 1041,
            pTabTipoEntidades: 1046,
            ptabContactos: 1051,
            pTabelas_AutoGest_Condutores: 1056,
            pTabelas_AutoGest_Locadoras: 1061,
            pGrh_Tabelas_ReparticoesFinancas: 1066,
            pGrh_Tabelas_Sindicatos: 1071,
            pGrh_Tabelas_Funcionarios: 1076,
            pGrh_Tabelas_Funcionarios_Proc: 5908,
            pGrh_Tabelas_TurnosRotativos: 1081,
            pGrh_Tabelas_FuncListagens: 1086,
            pGrh_Tabelas_AbonosDescontosFixoseAbonosUnitarios: 1087,
            pGrh_Tabelas_Descendentes: 1092,
            pGrh_Tabelas_DiasUteis: 1097,
            pTabelas_AutoGest_Funcionarios: 1102,
            pGrh_Tabelas_SegurancaSocial: 1107,
            pTabelas_Entidades_Seguradoras: 1112,
            pGrh_Tabelas_Seguradoras: 1117,
            pTabArtigosTab: 1122,
            pTabArtigos: 1123,
            pTabArtigosLotes: 9600,
            pTabReferencias: 1128,
            pTabGrelhas: 1133,
            pTabFamilias: 1138,
            pTabTipoFamilias: 1143,
            pTabTipoArtigos: 1148,
            pTabUnidades: 1153,
            pTabCategorias: 1158,
            pTabArmazens: 1163,
            pTabArmazensAlterar: 1165,
            pGrh_Tabelas_HorasTrabalhadas: 1168,
            pTabCategoriaDaEntidade: 1171,
            pERM_Tabelas_Contactos: 1176,
            pRAC_Mov_Procurar_Viatura_Processo: 1181,
            pTabComercial: 1200,
            pBackOfficeTabPromocoes: 1201,
            pBackOfficeTabDescVolVendas: 1206,
            pTabCartoesCliente: 1211,
            pTabTiposCartoesPrePagos: 1216,
            pTabEstudoPreco: 1221,
            pTabelas_APV_Equipamentos: 1251,
            pTabelas_APV_TiposEquipamentos: 1256,
            pTabelas_APV_Assuntos: 1261,
            pTabelas_APV_Tipos: 1266,
            pTabelas_APV_NiveisSLA: 1271,
            pTabelas_APV_Gravidades: 1276,
            pTabelas_APV_ClientesVD: 1281,
            pTabelas_APV_TiposSolucao: 1286,
            pTabelas_APV_CausasProblemas: 1291,
            pTabTesourariaTab: 1300,
            pTabtesContas: 1301,
            pTabTesTipoMovPag: 1306,
            pTabTesRubricas: 1311,
            pTabTesDescricoes: 1316,
            pTabTesMovPeriodicos: 1321,
            pTabelas_APV_Instalacoes: 1326,
            pTabelas_APV_Solucoes: 1331,
            pTabTiposContadores: 1336,
            pTabGOURMET: 1400,
            pTabGOURMET_ComentariosArtigos: 1401,
            pTabGOURMET_TipoComentario: 1406,
            pTabGOURMET_Descritivos: 1411,
            pTabGOURMET_MotivosAnulacaoLinhas: 1416,
            pTabGOURMET_MotivosESCaixa: 1421,
            pTabGOURMET_GrandeGrupoTeclado: 1426,
            pTabGOURMET_SubGrupoTeclado: 1431,
            pTabGOURMET_SectoresSalas: 1436,
            pTabGOURMET_ObjectosSala: 1441,
            pTabGOURMET_LocalConsumo: 1446,
            pTabGOURMET_PeriodosHorarios: 1456,
            pTabGOURMET_Ementas: 1461,
            pTabGOURMET_CartoesExtraviados: 1466,
            pTabGOURMET_SeriesCartoes: 1471,
            pTabGOURMET_Impressoras: 1476,
            pTabGOURMET_MonitoresCozinha: 1481,
            pTabGOURMET_ComandosX64: 1486,
            pTabelas_AutoGest: 1500,
            pTabelas_AutoGest_Viaturas: 1501,
            pTabelas_AutoGest_Marcas: 1506,
            pTabelas_AutoGest_Modelos: 1511,
            pTabelas_AutoGest_Combustíveis: 1516,
            pTabelas_AutoGest_Cores: 1521,
            pTabelas_AutoGest_Tipos_Viatura: 1531,
            pTabelas_AutoGest_Danos: 1536,
            pTabelas_AutoGest_Equipamentos: 1541,
            pTabelas_AutoGest_Tipos_Custo: 1546,
            pTabelas_AutoGest_Situacoes: 1551,
            pTabelas_AutoGest_ImpostoAutomovel: 1556,
            pTabelas_AutoGest_Tipos_Despesas: 1561,
            pTabelas_AutoGest_TiposSeguros: 1566,
            pTabelas_Autogest_TiposClasses: 1571,
            pTabelas_AutoGest_Componentes: 1576,
            pTabelas_AutoGest_ListasVerificacao: 1581,
            pTabelas_AutoGest_ListasIntervencoes: 1586,
            pTabelas_AutoGest_NiveisEquipamento: 1591,
            pTabContabilidade: 1600,
            pTabPlanoContas: 1601,
            pTabPlanoContaAlt: 1606,
            pTabCentrosCusto: 1611,
            pTabFichasRepart: 1616,
            pTabFluxosCaixa: 1621,
            pTabTipoDocs: 1626,
            pTabDiarios: 1631,
            pTabDescritivos: 1636,
            pTabTaxomonies: 1641,
            pTabTaxomoniesInactive: 1646,
            pGrh: 1700,
            pGrh_Tabelas_AbonosDescontosFaltas: 1701,
            pGrh_Tabelas_OutrosAbonosDescontadosPelaFalta: 1706,
            pGrh_Tabelas_Categorias: 1711,
            pGrh_Tabelas_Situacoes: 1716,
            pGrh_Tabelas_TiposContrato: 1721,
            pGrh_Tabelas_Profissoes: 1726,
            pGrh_Tabelas_Taxas: 1731,
            pGrh_Tabelas_Regioes: 1736,
            pGrh_Tabelas_EscaloesIrs: 1741,
            pGrh_Tabelas_RegioesEscaloesIrs: 1746,
            pGrh_Tabelas_TaxasIRS: 1751,
            pGrh_Tabelas_Turnos: 1756,
            pGrh_Tabelas_SituacoesCGA: 1761,
            pGrh_Tabelas_TiposDespesas: 1766,
            pGrh_Tabelas_MotivosFaltas: 1771,
            pGrh_Tabelas_Diuturnidades: 1776,
            pGrh_Tabelas_CiclosDeTurnosRotativos: 1781,
            pGrh_Tabelas_TiposRemuneracao: 1786,
            pGrh_Tabelas_RegistoMedico: 1791,
            pGrh_Tabelas_Medicos: 1796,
            pGrh_Tabelas_TiposExames: 1801,
            pGrh_Tabelas_ResultadosConsultas: 1806,
            pGrh_Tabelas_QuadrosPessoal: 1811,
            pGrh_Tabelas_InstrRegulTrabalhos: 1816,
            pGrh_Tabelas_AssociacoesPatronais: 1821,
            pGrh_Tabelas_Habilitacoes: 1826,
            pGrh_Tabelas_NaturezaJuridica: 1831,
            pGrh_Tabelas_ContasBancarias: 1856,
            pGrh_Tabelas_MotivosHorasExtras: 1861,
            pGrh_Tabelas_Listagens_Funcionario: 1866,
            pGrh_Tabelas_AbonosCalculadosPorDescontos: 1867,
            pGrh_Tabelas_Formacao: 1872,
            pGrh_Tabelas_Formacao_CompetenciasDeCursos: 1873,
            pGrh_Tabelas_Formacao_Cursos: 1878,
            pGrh_Tabelas_Formacao_Entidades: 1883,
            pGrh_Tabelas_IRS_SurCharge: 1888,
            pGrh_Tabelas_IRS_TaxasIRSEntradaEmVigor: 1893,
            pImobilizado: 1900,
            pImo_Imobilizado: 1901,
            pImo_TiposImobilizado: 1906,
            pImo_AjustesFiscais: 1916,
            pImo_ObsEspeciais: 1921,
            pImo_Classificacoes: 1926,
            pImo_TblAnexa: 1931,
            pImo_Taxas: 1936,
            pImo_TblAnexa_Taxas: 1941,
            pImo_GrandesGrupos: 1946,
            pImo_SubGrupos: 1951,
            pImo_Decretos: 1956,
            pImo_CoefReavaliacao: 1961,
            pImo_Abatealienacoes: 1966,
            pImo_Operacoes: 1971,
            pImo_Conservacoes: 1976,
            pImo_PlanosDepreciacao: 1981,
            pCtbPlanosOperacionais: 1986,
            pTabDocumentos: 2000,
            pTabTipoDocsOrc: 2001,
            pTabTipoDocsEnc: 2006,
            pTabTipoDocsCmp: 2011,
            pTabTipoDocsStk: 2016,
            pTabTipoDocsVnd: 2021,
            pTabTipoDocsLiquid: 2026,
            pTabTipoDocsLetras: 2031,
            pBackOfficeTabTipoDocsOperacaoCaixa: 2036,
            pTabelas_AutoGest_TiposProcessos: 2041,
            pTabelas_AutoGest_TiposDocumentosOficina: 2046,
            pImo_TiposDocumentosImo: 2051,
            pTabEstDocumentos: 2056,
            pTabelas_AutoGest_EstadosProcessos: 2061,
            pTabelas_AutoGest_Documentacao: 2066,
            pTabelas_AutoGest_TiposDocumentacao: 2076,
            pTabelas_AutoGest_SituacoesDocumentacao: 2081,
            pTabSeccoes: 2091,
            pBackOfficeTabFiliais: 2096,
            pTabelas_AutoGest_TiposDocumentosFrotas: 2101,
            pTabelas_APV_TiposDocumentosAPV: 2106,
            pTabNotasMoedas: 2116,
            pTabOutrasTabelas: 2200,
            pTabZonas: 2201,
            pTabSubZonas: 2206,
            pTabMoedaCambios: 2211,
            pTabCondPagamento: 2221,
            pTabMeiosExpedicao: 2226,
            pTabCargasDescargas: 2231,
            pTabTiposEncargo: 2236,
            pTabTipoComissoes: 2241,
            pTabClassMovStk: 2246,
            pTabSectores: 2251,
            pTabTaxasIVA: 2256,
            pTabRotas: 2261,
            pTabHorarios: 2266,
            pTabMunicipios: 2271,
            pTabRubricasImpostos: 2276,
            pTabIdiomas: 2281,
            pTabDepartamentos: 2286,
            pTabLocalizacoes: 2301,
            pTabEcoValores: 2311,
            pTabTiposEVPilhas: 2316,
            pTabTiposEVPneus: 2321,
            pTabTiposEVOleos: 2326,
            pTabTiposEVREEE: 2331,
            pTabTiposEVDAutor: 2336,
            pTabNomeCientifico: 2341,
            pTabZonaCaptura: 2346,
            pTabAnexos: 2351,
            pTabCursos: 2356,
            pTabActividades: 2361,
            pTabEstabelecimentos: 2366,
            pGrh_Tabelas_Paises: 2371,
            pGrh_Tabelas_Distritos: 2376,
            pGrh_Tabelas_Concelhos: 2381,
            pGrh_Tabelas_Freguesias: 2386,
            pTabIntraStat: 2400,
            pTabIntraStatMercadorias: 2401,
            pTabIntraStatNaturezaTransacao: 2406,
            pTabintrastatcondicoesentrega: 2411,
            pTabIntraStatTransporte: 2416,
            pTabIntraStatPortos: 2421,
            pTabIntraStatAeroportos: 2426,
            pTabIntraStatRegioes: 2431,
            pTabListagens: 2450,
            pGestaoComercial: 2500,
            pGceORC: 2501,
            pGceORCIntoducao: 2502,
            pGceORCReimpressao: 2510,
            pGceENC: 2600,
            pGceENCCLIIntroducao: 2610,
            pGceENCFORIntroducao: 2620,
            pGceENCARMIntroducao: 2630,
            pGceENCClientesAlterarEstado: 2638,
            pGceENCClientesAlterarHistoricoEstado: 2639,
            pGceENCFornecedoresAlterarEstado: 2640,
            pGceENCFornecedoresAlterarHistoricoEstado: 2641,
            pGceENCArmazensAlterarEstado: 2642,
            pGceENCArmazensAlterarHistoricoEstado: 2643,
            pGceENCReimpressao: 2650,
            pGceENCReimpressaoClientes: 2651,
            pGceENCReimpressaoFornecedores: 2652,
            pGceENCReimpressaoArmazens: 2653,
            pGceENCGeracaoEncomendasFornecedores: 2654,
            pGceCMP: 2700,
            pGceCMPIntroducao: 2701,
            pGceCMPIntroducaoRegAd: 2708,
            pGceCMPConversaoDocumentos: 2716,
            pGceCMPReimpressao: 2717,
            pGceCMPENCARGOSIntroducao: 2718,
            pGceCMPGeracaoProcessos: 2725,
            pGceCMPAlterarEstado: 2726,
            pGceCMPAlterarHistoricoEstado: 2727,
            pGceCMPEncargosAlterarEstado: 2728,
            pGceCMPEncargosAlterarHistoricoEstado: 2729,
            pGceSTK: 2800,
            pGceSTKIntroducao: 2801,
            pGceSTKINVIntroducao: 2810,
            pGceUTILITARIOSImportacaoArtigos: 2813,
            pGceSTKINVIntrod_InserirContagens: 2817,
            pGceSTKINVIntrod_EfectuarAcertoStock: 2818,
            pGceSTKReimpressao: 2819,
            pGceSTKFOIntroducao: 2820,
            pGceSTKPRODIntroducao: 2830,
            pGceVND: 2900,
            pGceVNDIntroducao: 2901,
            pGceVNDInserir: 2902,
            pGceVNDAnular: 2906,
            pGceVNDIntrod_SubsCondPagamento: 2909,
            pGceVNDIntrod_SubsDescontosEntidade: 2910,
            pGceVNDIntrod_IgnorarPlafond: 2911,
            pGceVNDIntrod_InsAltDocsComunicadosAT: 2912,
            pGceVNDIntrod_AlterarEntidade: 2913,
            pGceVNDIntroducaoRegAd: 2914,
            pGceVNDSatisfacaoEncClientes: 2922,
            pGceVNDConversaoDocumentos: 2923,
            pGceVNDReimpressao: 2924,
            pGceVNDEmissaoRecibos: 2925,
            pGceVNDDefinirAvencas: 2926,
            pGceVNDProcessarAvencas: 2934,
            pGceVNDProcessarRapel: 2935,
            pGceVNDActualizacaoProcessos: 2936,
            pGceVNDAlterarEstado: 2937,
            pGceVNDAlterarHistoricoEstado: 2938,
            pGceCC: 2999,
            pGceTES: 3000,
            pGceTESLIQIntroducao: 3001,
            pGceTESLIQIntrod_InsAltDocsComunicadosAT: 3006,
            pGceTESLIQIntrod_InserirEfectivas: 3010,
            pGceTESLIQIntrod_InserirRegAdiantamentos: 3011,
            pGceTESLIQIntrod_InserirAdiantamentos: 3012,
            pGceTESLIQIntrod_InserirPorLetra: 3013,
            pGceTESLIQIntrod_InserirDiferidas: 3014,
            pGceTESLIQEmisaoLiquidacoesDiferidas: 3015,
            pGceTESLIQEfectivarLiquidacoesDiferidas: 3016,
            pGceTESLIQReimpressao: 3024,
            pGceTESAvisosVencimento: 3025,
            pGceTESCOMIntroducao: 3026,
            pGceTESLIQCOMIntrod: 3034,
            pCtbMapasImpostoSelo: 3035,
            pGceTESLIQCOMIntrod_LiquidacaoDeNaoVencPend: 3042,
            pGceTESLIQCOMIntrod_AlterarPenalizacoes: 3043,
            pGceTESLIQCOMIntrod_Adiantamentos: 3044,
            pGceTESLIQCOMReimpressao: 3045,
            pGceTESPREVIntroducao: 3046,
            pGceTESREALIntroducao: 3054,
            pGceTESREALIntroducao_VerSaldos: 3059,
            pGceTESEmissaoLetras: 3062,
            pGceTESLETRECIntroducao: 3063,
            pGceTESLETPAGIntroducao: 3071,
            pGceVNDEmissaoLetras: 3079,
            pGceTESEmissaoCheques: 3080,
            pGceTESTransferenciasBancarias: 3081,
            pGceTESTALOESIntroducao: 3082,
            pGceTESLevantamentosTransferencias: 3090,
            pGceTESREconciliacaoIntroducao: 3091,
            pGceTESFolhasCaixa: 3099,
            pGceTESLiqAlterarEstado: 3107,
            pGceTESLiqAlterarHistoricoEstado: 3108,
            pBackOfficePOS: 3110,
            pTabGOURMET_CarregamentoPrePago: 3111,
            pTabGOURMET_CarregamentoPrePagoSerie: 3112,
            pBackOfficePOSAberturaCaixa: 3119,
            pBackOfficePOSEntradaSaidaCaixa: 3127,
            pBackOfficePOSFechoCaixa: 3135,
            pGCECMPEmitirDocsSemCodigoAT: 3139,
            pGCECMPReimpressaoDocsSemCodigoAT: 3140,
            pGCEVNDEmitirDocsSemCodigoAT: 3142,
            pGCEVNDReimpressaoDocsSemCodigoAT: 3143,
            pGceENCIntrod_InsAltDocsComunicadosAT: 14011,
            pOFIOrdRep_InsAltDocsComunicadosAT: 14012,
            pOFIOrc_InsAltDocsComunicadosAT: 14013,
            pAPVOrdRep_InsAltDocsComunicadosAT: 14014,
            pAPVOrc_InsAltDocsComunicadosAT: 14015,
            pGOPOrc_InsAltDocsComunicadosAT: 14016,
            pGOPAutoCli_InsAltDocsComunicadosAT: 14017,
            pStands_Mov: 3200,
            PStands_Geral: 3201,
            pStands_GeralConfigGrelhas: 3202,
            pStands_Mov_Processos: 3203,
            pStands_Mov_Proc_AlterarDeOutrosUtilizadores: 3209,
            pStands_Mov_Proc_TabSale: 3210,
            pStands_Mov_Proc_TabSaleEdit: 3214,
            pStands_Mov_Proc_PrecosCusto: 3211,
            pStands_Mov_Proc_AlterarViatura: 3212,
            pStands_Mov_Proc_EditarEquipamento: 3213,
            pStands_Mov_Proc_EditarGarantias: 3215,
            pStands_Mov_Proc_TabCosts: 3216,
            pStands_Mov_Proc_TabCostsEdit: 3217,
            pStands_Mov_Proc_TabPurchase: 3218,
            pStands_Mov_Proc_TabPurchaseEdit: 3219,
            pStands_Mov_Proc_Retoma: 3220,
            pStands_Mov_Proc_VerLucro: 3221,
            pStands_Mov_Proc_TabSupplierRentalCompany: 3222,
            pStands_Mov_Proc_TabSupplierRentalCompanyEdit: 3223,
            pStands_Mov_Proc_TabSupplierRentalCompanySeeValues: 3256,
            pStands_Mov_Proc_TabReservationDeposit: 3224,
            pStands_Mov_Proc_TabReservationDepositEdit: 3258,
            pStands_Mov_Proc_AlterarEstado: 3225,
            pStands_Mov_Proc_RetomaInserir: 3226,
            pStands_Mov_Proc_RetomaAltera_ValorDocFact: 3227,
            pStands_Mov_Proc_RetomaRemove: 3228,
            pStands_Mov_Proc_RetomaAssociar: 3229,
            pStands_Mov_Proc_RetomaValorSuperiorVenda: 3230,
            pStands_Mov_Proc_RetomaGerar: 3257,
            pStands_Mov_PotenciaisClientes: 3234,
            pStands_Mov_PotenciaisClientes_AlterarDeOutros: 3240,
            pStands_Mov_PotenciaisClientes_RemoverDeOutros: 3241,
            pStands_Mov_DespesasGerais: 3242,
            pStands_Mov_GerirCCorrenteComissoesLocadoras: 3250,
            pStands_Mov_PotCli_AcesssoGlobal: 3251,
            pStands_Mov_PotCli_AcesssoGlobal_Admin: 3252,
            pStands_Mov_Proc_EditarHistoricoEstado: 3253,
            pStands_GeralConfigGerarArtigos: 3254,
            pStands_Mov_Proc_SaleDocument: 3255,
            pStands_Mov_Proc_SaleDocumentEdit: 3259,
            pStands_Mov_Proc_SaleDocumentDissociate: 3260,
            pStands_Mov_Proc_TabPayments: 3261,
            pStands_Mov_Proc_TabPaymentsEdit: 3262,
            pStands_Mov_Proc_GuideDocument: 3263,
            pRentACar_Mov: 3300,
            pRentACar_Mov_Processos: 3301,
            pRentACar_Mov_Processos_Inserir: 3302,
            pRentACar_Mov_Processos_Alterar: 3303,
            pRentACar_Mov_Processos_AlterarDeOutrosUtilizadores: 3306,
            pRentACar_Mov_Processos_AlterarEstado: 3313,
            pRentACar_Mov_Processos_AlterarEstadoHistorico: 3329,
            pRentACar_Mov_Processos_Remover: 3304,
            pRentACar_Mov_Processos_Editar: 3305,
            pRentACar_Mov_Processos_SepGeral: 3307,
            pRentACar_Mov_Processos_SepFacturar: 3308,
            pRentACar_Mov_Processos_SepFacturarAlterarAutomaticas: 3309,
            pRentACar_Mov_Processos_SepFacturarRemoverAutomaticas: 3310,
            pRentACar_Mov_Processos_SepFacturarEditarOutras: 3311,
            pRentACar_Mov_Processos_SepDocumentos: 3312,
            pRentACar_Mov_Processos_SepGeralEditar: 3314,
            pRentACar_Mov_Processos_SepDocumentosGerarAlterar: 3315,
            pRentACar_Mov_Processos_SepCondutores: 3316,
            pRentACar_Mov_Processos_SepCondutoresEditar: 3317,
            pRentACar_Mov_Processos_SepEntregaRecolha: 3318,
            pRentACar_Mov_Processos_SepEntregaRecolhaEditar: 3319,
            pRentACar_Mov_Processos_SepListaVerifica: 3320,
            pRentACar_Mov_Processos_SepListaVerificaEditar: 3321,
            pRentACar_Mov_Processos_SepAdiantaCaucao: 3322,
            pRentACar_Mov_Processos_SepAdiantaCaucaoEditar: 3323,
            pRentACar_Mov_Processos_SepObs: 3324,
            pRentACar_Mov_Processos_SepObsEditar: 3325,
            pRentACar_AssistenteFacturacao: 3326,
            pRentACar_Mov_Processos_DesvincularDocumento: 3327,
            pRentACar_Mov_Processos_SubstituirTabelaPrecos: 3328,
            pFrotas_Mov: 3350,
            pFrotas_Mov_Viagens: 3351,
            pFrotas_Mov_Viagens_Inserir: 3352,
            pFrotas_Mov_Viagens_Alterar: 3353,
            pFrotas_Mov_Viagens_Remover: 3354,
            pFrotas_Mov_Viagens_Emitir: 3355,
            pFrotas_Mov_Viagens_AlterarAnular: 3356,
            pFrotas_Mov_Viagens_AlterarDeOutros: 3357,
            pFrotas_Mov_Viagens_RemoverDeOutros: 3358,
            pFrotas_Mov_Sinistros: 3361,
            pFrotas_Mov_Sinistros_Inserir: 3362,
            pFrotas_Mov_Sinistros_Alterar: 3363,
            pFrotas_Mov_Sinistros_Remover: 3364,
            pFrotas_Mov_Sinistros_Emitir: 3365,
            pFrotas_Mov_Sinistros_AlterarAnular: 3366,
            pFrotas_Mov_Sinistros_AlterarDeOutros: 3367,
            pFrotas_Mov_Sinistros_RemoverDeOutros: 3368,
            pFrotas_Mov_Imputacao: 3371,
            pFrotas_Mov_Imputacao_Inserir: 3372,
            pFrotas_Mov_Imputacao_Alterar: 3373,
            pFrotas_Mov_Imputacao_Remover: 3374,
            pFrotas_Mov_Imputacao_Emitir: 3375,
            pFrotas_Mov_Imputacao_AlterarAnular: 3376,
            pFrotas_Mov_Imputacao_AlterarDeOutros: 3377,
            pFrotas_Mov_Imputacao_RemoverDeOutros: 3378,
            pFrotas_Mov_ImputacaoOp: 3379,
            pFrotas_Mov_ImputacaoOp_Inserir: 3380,
            pFrotas_Mov_ImputacaoOp_Alterar: 3381,
            pFrotas_Mov_ImputacaoOp_Remover: 3382,
            pFrotas_Mov_ImputacaoOp_Emitir: 3383,
            pFrotas_Mov_ImputacaoOp_AlterarAnular: 3384,
            pFrotas_Mov_ImputacaoOp_AlterarDeOutros: 3385,
            pFrotas_Mov_ImputacaoOp_RemoverDeOutros: 3386,
            pOficinasAutogest: 3400,
            pOficinas_Geral: 3401,
            pOficinas_Integracoes: 3402,
            pOficinas_APrecoCusto: 3403,
            pOficinas_AlterarDescontoEntidade: 3405,
            pAutogest_ProcuraViatura: 3408,
            pOficinas_Marcacoes: 3412,
            pOficinas_Marcacoes_AlterarAnular: 3417,
            pOficinas_Marcacoes_AlterarDeOutros: 3418,
            pOficinas_Recepcoes: 3420,
            pOficinas_Recepcoes_AlterarAnular: 3425,
            pOficinas_Recepcoes_AlterarDeOutros: 3426,
            pOficinas_Recepcoes_AlterarEstado: 3427,
            pOficinas_Recepcoes_AlterarHistoricoEstado: 3428,
            pOficinas_Orcamentos: 3430,
            pOficinas_Orcamentos_AlterarAnular: 3435,
            pOficinas_Orcamentos_AlterarDeOutros: 3436,
            pOficinas_Orcamentos_AlterarEstado: 3437,
            pOficinas_Orcamentos_DesbloquearFechados: 3438,
            pOficinas_Orcamentos_AlterarHistoricoEstado: 3439,
            pOficinas_Ordens_Reparacao: 3440,
            pOficinas_Ordens_Reparacao_AlterarAnular: 3445,
            pOficinas_Ordens_Reparacao_AlterarDeOutros: 3446,
            pOficinas_Ordens_Reparacao_Materiais: 3448,
            pOficinas_Ordens_Reparacao_DesbloquearFechadas: 3449,
            pOficinas_Ordens_Reparacao_IgnorarPlafond: 3450,
            pOficinas_Ordens_Reparacao_FecharOR: 3451,
            pOficinas_Ordens_Reparacao_MultiORs: 3452,
            pOficinas_Entrega_Facturacao: 3453,
            pOficinas_Entrega_Facturacao_AlterarAnular: 3458,
            pOficinas_Entrega_Facturacao_AlterarDeOutros: 3459,
            pOficinas_Entrega_Facturacao_GerarDocumentoVenda: 3461,
            pOficinas_Entrega_Facturacao_AtribuirCustosStands: 3462,
            pOficinas_Entrega_Facturacao_ReterFranquia: 3463,
            pOficinas_Materiais: 3464,
            pOficinas_Materiais_AlterarAnular: 3469,
            pOficinas_Materiais_AlterarDeOutros: 3470,
            pOficinas_ServicosInt: 3472,
            pOficinas_ServicosInt_AlterarAnular: 3477,
            pOficinas_ServicosInt_AlterarDeOutros: 3478,
            pOficinas_ServicosExt: 3480,
            pOficinas_ServicosExt_AlterarAnular: 3485,
            pOficinas_ServicosExt_AlterarDeOutros: 3486,
            pOficinas_ReimpressaoDocumentos: 3487,
            pOficinas_Marcacoes_MarcarForaHorario: 3488,
            pOficinas_Ordens_Reparacao_VerQtdReal: 3489,
            pOficinas_Ordens_Reparacao_AlterarEstado: 3490,
            pOficinas_Ordens_Reparacao_AlterarHistoricoEstado: 3491,
            pOficinas_Entrega_Facturacao_AlterarEstado: 3493,
            pOficinas_Entrega_Facturacao_AlterarHistoricoEstado: 3494,
            pOficinas_Ordens_Reparacao_AlterarQtdReal: 3495,
            pOficinas_Ordens_Reparacao_VerQtdPrevista: 3496,
            pOficinas_Ordens_Reparacao_AlterarQtdPrevista: 3497,
            pOficinas_Entrega_Facturacao_DesvincularDocumento: 3499,
            pCtbMovimentos: 3500,
            pCtbMovsIntrod: 3501,
            pCtbMovsIntrodInserir: 3502,
            pCtbMovsIntrodAlterar: 3503,
            pCtbMovsIntrodRemover: 3504,
            pCtbMovsIntrodAltDeOutrosUsers: 3506,
            pCtbMovsIntrodRemDeOutrosUsers: 3507,
            pCtbMovsListarResultPesq: 3508,
            pCtbMovsReconciliacao: 3509,
            pCtbMovsReconcAlt: 3510,
            pCtbMovsNotaAnexoBalResul: 3511,
            pCtbMovsApurParamIVA: 3512,
            pCtbMovsFechoAno: 3513,
            pCtbOrcamentos: 3514,
            pCtbOrcAlterar: 3515,
            pTabGOURMET_ImpressorasLogicas: 3520,
            pTabGruposArtigosAlternativos: 3525,
            pPOS_TiposCartoesFidelizacao: 3530,
            pCtbPodeAlterarMovsReconcilados: 3535,
            pTabGrupoCustoProveito: 3536,
            pGrh_Grh_Processamentos: 3600,
            pGrh_Processamento_Ferias: 3601,
            pGrh_Processamento_AbonosDescontosFaltas: 3614,
            pGrh_Processamento_LancamentoAlteracoes: 3622,
            pGrh_Utilitarios_AssistenteDeslocacoes: 3627,
            pGrh_Utilitarios_AssistenteDeslocacoes_Lancamento: 3632,
            PGrh_Processamento_Processamento: 3636,
            pGrh_Processamento_RemoverProcessamento: 3637,
            pGrh_Tabelas_RegistoPessoal: 3638,
            pGrh_Processamento_ConsultasExames: 3646,
            pGrh_Processamento_SimulProc: 3651,
            pGrh_Processamento_GravarSimulacao: 3656,
            pGrh_Processamento_CessacaoContrato: 3657,
            pGrh_Processamento_RenovacaoContrato: 3662,
            pImo_Mov: 3700,
            pImo_Aquisicoes: 3701,
            pImo_Reparacoes: 3706,
            pImo_Abates: 3711,
            pImo_Amortizacoes: 3716,
            pImo_Reavaliacoes: 3721,
            pImo_Revalorizacoes: 3726,
            pImo_PerdasImparidade: 3731,
            pImo_JustoValor: 3736,
            pGceGeral: 3800,
            pGceGeralVerPrecosCusto: 3801,
            pOficinas_AlterarPrecos: 3802,
            pGceGeralAlterarPreços: 3802,
            pGceGeralVerFormulasMedidas: 3803,
            pGceGeralAlterarFormulasMedidas: 3804,
            pGceGeralVerComposicaoArtigos: 3805,
            pGceGeralStocksArmazensNegativo: 3806,
            pOficinas_GeralConfigGrelhas: 3807,
            pGceGeralConfigGrelhas: 3807,
            pGceGeralClientesOutrosDevedores: 3808,
            pGceGeralFornecedoresOutrosCredores: 3809,
            pOficinas_AlterarQtdOferta: 3810,
            pGceGeralAlterarQtdOferta: 3810,
            pGceGeralAlterarReconciliados: 3811,
            pGceGeralAlterarFolhasCaixa: 3812,
            pGceGeralAlterarPrecosCompra: 3813,
            pOficinas_AlterarLinhaPreco: 3814,
            pGceGeralAlterarLinhasPrecos: 3814,
            pGceGeralIgnorarMargemLucroMinima: 3815,
            pIntgGeralVisualizarDocsBloqueados: 3816,
            pGceGeralEditarPrecosCusto: 3817,
            pGceGeralGerirSeriesDescontinuadas: 3818,
            pGceGeralLinhasPagAlterarValorACredito: 3819,
            pOficinas_Ordens_Reparacao__Encomendas: 3820,
            pOficinas_Ordens_Reparacao__Encomendas_Editar: 3821,
            pTabelas_AutoGest_Versoes: 3901,
            pTabelas_AutoGest_TiposComponentes: 3906,
            pTabelas_AutoGest_Frotas: 3911,
            pTabelas_AutoGest_PlanosManutencao: 3916,
            pTabelas_APV_MeiosApoio: 3921,
            pTabelas_AutoGest_TiposItinerarios: 3926,
            pTabelas_AutoGest_TiposValores: 3931,
            pTabelas_AutoGest_TabelaPrecosRAC: 3936,
            pTables_AutoGest_DrivingLicenseCategories: 3941,
            pTables_Others_Guarantees: 3948,
            pTables_AutoGest_RepairChecklists: 3953,
            pGceMAPAS: 4000,
            pCubo: 4001,
            pCuboCriacao: 4002,
            pCuboCriacaoEncomendas: 4003,
            pCuboCriacaoCompras: 4004,
            pCuboCriacaoStocks: 4005,
            pCuboCriacaoVendas: 4006,
            pCuboCriacaoCCo: 4007,
            pCuboConsulta: 4008,
            pCuboConsultaEncomendas: 4009,
            pCuboConsultaCompras: 4010,
            pCuboConsultaStocks: 4011,
            pCuboConsultaVendas: 4012,
            pCuboConsultaCCo: 4013,
            pGceORCMApas: 4100,
            pGceENCMApas: 4200,
            pGceENCMapasExtractosEncomendas: 4201,
            pGceENCMapasAnaliseEncomendas: 4202,
            pGceCMPMApas: 4300,
            pGceCMPMapasExtractosCompras: 4301,
            pGceCMPMapasDocumentosConvertidos: 4302,
            pGceCMPMapasComprasGlobais: 4303,
            pGceCMPMapasAnaliseCompras: 4304,
            pGceCMPMapasAnaliseEncargos: 4305,
            pGceCMPMapasMapaIVA: 4306,
            pGceSTKMapas: 4400,
            pGceSTKMapasExtractosMovimentosStock: 4401,
            pGceSTKMapasExtractosFolhasObra: 4402,
            pGceSTKMapasExtractosProducoesTransformacoes: 4403,
            pGceSTKMapasAnaliseStocks: 4404,
            pGceSTKMapasBalanceteStocks: 4405,
            pGceSTKMApasABC: 4406,
            pGceSTKMapasControloExistencias: 4407,
            pGceSTKMapasAnaliseFolhasObra: 4408,
            pGceSTKMapasAnáliseProducoesTransformacoes: 4409,
            pGceSTKMapasComposicaoArtigos: 4410,
            pGceVNDMApas: 4500,
            pGceVNDMapasExtractosVendas: 4501,
            pGceVNDMapasDocumentosConvertidos: 4502,
            pGceVNDMapasVendasGlobais: 4503,
            pGceVNDMapasVolumeMensalVendas: 4504,
            pGceVNDMapasAnaliseVendas: 4505,
            pGceVNDMapasAnaliseMargensLucro: 4506,
            pGceVNDMapasRacios: 4507,
            pGceVNDMapasMapaIVA: 4508,
            pGceVNDMapaIEC: 4509,
            pGceVNDMapaTransmissoesIntracomunitarias: 4510,
            pGceVNDMapaMapaCarga: 4511,
            pGceVNDMapaMapaRotas: 4512,
            pGceVNDMapaEstatisticaGiro: 4513,
            pGceVNDMapaListagemAvencas: 4514,
            pGceTCC: 4599,
            pGceTESMApas: 4600,
            pGceTESMAPASListagemPendentes: 4601,
            pGceTESMAPASExtractoHistorico: 4602,
            pGceTESMAPASIdadeSaldos: 4603,
            pGceTESMAPASIdadeMediaPagamentos: 4604,
            pGceTESMAPASAnaliseDeSaldos: 4605,
            pGceTESMAPASBalancetes: 4606,
            pGceTESMAPASListagemLiquidacoes: 4607,
            pGceTESMAPASListagemLetras: 4608,
            pGceTESMAPASDiferencasCambiais: 4609,
            pGceTESMAPASAnaliseComissoes: 4610,
            pGceTESMAPASLiquidacoesComissoes: 4611,
            pGceTESMAPASSaldosContas: 4612,
            pGceTESMAPASAnaliseResultadosPorRubricas: 4613,
            pGceTESMAPASAnaliseFluxosTesouraria: 4614,
            pBackOfficeMapasPOS: 4700,
            pBackOfficeMapasPOSDiarioVendas: 4701,
            pBackOfficeMapasPOSArtigosDevolver: 4702,
            pBackOfficeMapasPOSAnaliseArtigosDevolver: 4703,
            pBackOfficeMapasPOSMapasDeCaixa: 4704,
            pTabGOURMET_MesasEmAberto: 4705,
            pTabGOURMET_Logs: 4706,
            pBackOfficeHistoricoExtravioCartoes: 4707,
            pStands_Mapas: 4800,
            pStands_Mapas_Viaturas: 4801,
            pStands_Mapas_VolumeNegocios: 4802,
            pStands_Mapas_ResultadosGlobais: 4803,
            pStands_Mapas_RelacaoCustos: 4804,
            pStands_Mapas_Documentacao: 4805,
            pStands_Mapas_ComissoesVendedores: 4806,
            pStands_Mapas_ComissoesLocadoras: 4807,
            pStands_Mapas_Retomas: 4808,
            pStands_Mapas_Garantias: 4809,
            pStands_Mapas_TempoStock: 4810,
            pStands_Mapas_FimReserva: 4811,
            pStands_Mapas_ProximasInspeccoes: 4812,
            pStands_Mapas_DocumVendaPend: 4813,
            pStands_Mapas_IVAProcessos: 4814,
            pStands_Mapas_RentACar: 4900,
            pOficinas_Mapas: 5000,
            pOficinas_Mapas_Marcacoes: 5001,
            pOficinas_Mapas_Orcamentos: 5002,
            pOficinas_Mapas_OrdReparacao: 5003,
            pOficinas_Mapas_OrdReparacaoResumo: 5004,
            pOficinas_Mapas_OrdReparacaoVND: 5005,
            pOficinas_Mapas_OrdReparacaoTotaisGlobais: 5006,
            pOficinas_Mapas_Servicos: 5007,
            pOficinas_Mapas_Materiais: 5008,
            pOficinas_Mapas_Funcionarios: 5009,
            pOficinas_Mapas_FuncionariosResumo: 5010,
            pOficinas_Mapas_FuncionariosRecolhaTarefas: 5011,
            pOficinas_Mapas_EntregaFactura: 5012,
            pOficinas_Mapas_Garantias: 5013,
            pOficinas_Mapas_HistViatura: 5014,
            pOficinas_Mapas_Visitas: 5015,
            pOficinas_Mapas_ProximasInspeccoes: 5016,
            pOficinas_Mapas_DocumVendaPend: 5017,
            pOficinas_Mapas_PrevisionalMateriais: 5018,
            pOficinas_Mapas_ConsultasRecolhaTarefas: 5019,
            pOficinas_Mapas_Graficos: 5020,
            pOficinas_Mapas_ConsultasRegistoDiario: 5021,
            pAPV_Mapas: 5050,
            pAPV_Mapas_PesquisaEquipamentoMovimentos: 5051,
            pAPV_Mapas_PesquisaSolucoes: 5052,
            pAPV_Mapas_RelatoriosTecnicos: 5053,
            pCtbMapas: 5100,
            pCtbMapasEstadoConta: 5101,
            pCtbMapasListDiarios: 5102,
            pCtbMapasListPlanoContas: 5103,
            pCtbMapasExtractos: 5104,
            pCtbMapasExtContas: 5105,
            pCtbMapasExtCC: 5106,
            pCtbMapasExtFX: 5107,
            pCtbMapasExtDiversos: 5108,
            pCtbMapasBalancetes: 5109,
            pCtbMapasBalContas: 5110,
            pCtbMapasBalCC: 5111,
            pCtbMapasBalFX: 5112,
            pCtbMapasOrcamentos: 5113,
            pCtbMapasConfTerc: 5114,
            pCtbMapasMGestao: 5115,
            pCtbMapasMGConfPreV: 5116,
            pCtbMapasMGConfigurador: 5117,
            pCtbMapasLivrosSelados: 5118,
            pCtbMapasIRCM22: 5120,
            pCtbMapasModelo3: 5121,
            pCtbMapasAnexoBalDemResult: 5122,
            pCtbMapasDeclRetFonte: 5123,
            pCtbMapasDeclIVA: 5124,
            pCtbMapasGraficos: 5125,
            pCtbMapasDeclAnual: 5129,
            pCtbMapasModelo106: 5130,
            pCtbMapasModeloC: 5131,
            pCtbMapasModeloGP10: 5132,
            pCtbMapasModelo1B: 5133,
            pCtbMapasModelo22Moc: 5134,
            pCtbCalculoIVAnaoLiquidado: 5135,
            pCtbMapasDeclIVA_MOC: 5136,
            pCtbParamRecapitulativoCV: 5137,
            pCtbMapasModelo30: 5138,
            pCtbMapasConfRetencaoIRS: 5139,
            pCtbMapasDeclaracoesRendimentosCTE: 5140,
            pCtbMapasIRSDeclAnuModelo10CTE: 5141,
            pCtbMapasModeloOA30: 5142,
            pCtbMapasModeloDPRCV: 5143,
            pCtbMapasModelo1B_Novo_2016: 5144,
            pCtbMapasModelo20Moc: 5145,
            pCtbMapasModelo107: 5146,
            pGrh_Grh_Mapas: 5200,
            pGrh_Processamento_ConsultaProcessamento: 5201,
            pGrh_Listagens: 5202,
            pGrh_Mapas_ListagemAbonosDescontos: 5203,
            pGrh_Mapas_ListagemFaltas: 5204,
            pGrh_Mapas_ListagemFuncionarios: 5205,
            pGrh_Listagens_ListagemDiasUteis: 5206,
            pGrh_Listagens_ListagemTurnosRotativos: 5207,
            pGrh_Listagens_ListagemDescendentes: 5208,
            pGrh_Listagens_ListagemJustificacaoFaltas: 5209,
            pGrh_Listagens_ListagemDeslocacoesDespesas: 5210,
            pGrh_Mapas_ListagemRegistoPessoal: 5211,
            pGrh_Listagens_ListagemAdmissoesDemissoes: 5212,
            pGrh_Listagens_ListagemRenovacaoContrato: 5213,
            pGrh_Listagens_ListagemAjustes: 5214,
            pGrh_Listagens_ListagemLevantamentosResumido: 5215,
            pGrh_Listagens_ListagemTransferenciasBancarias: 5216,
            pGrh_Listagens_JanelaConfiguracaoTransferenciasBancarias: 5217,
            pGrh_Listagens_ListagemCheques: 5218,
            pGrh_Listagens_JanelaConfiguracaoCheques: 5219,
            pGrh_Listagens_JanelaImpressaoCheques: 5220,
            pGrh_ModelosOficiais: 5221,
            pGrh_Listagens_ListagemFuncFichasReparticao: 5222,
            pGrh_Listagens_ListagemDepartFichasRepart: 5223,
            pGrh_RegistoMedico: 5224,
            pGrh_Listagens_ListagemRecibos: 5225,
            pGrh_Mapas_ConfiguracaoRecibos: 5226,
            pGrh_Listagens_ListagemFolhaFerias: 5227,
            pGrh_Mapas_MapaSegurancaSocial: 5228,
            pGrh_Mapas_JanelaGuiaPagamento: 5229,
            pGrh_Mapas_CGARelacaoContributiva: 5231,
            pGrh_Listagens_ListagemSeguroEmpresa: 5235,
            pGrh_Listagens_ListagemSindicatos: 5236,
            pGrh_Mapas_MapaDeclaracoesRendimentos: 5238,
            pGrh_Listagens_ListagemContaCorrente: 5240,
            pGrh_Mapas_MapaRemuneracoesDescontosEncargos: 5241,
            pGrh_Mapas_MapaResumoEncargos: 5242,
            pGrh_Mapas_MapaHorasExtras: 5243,
            pGrh_Mapas_MapaRetencoesIndependentes: 5244,
            pGrh_Mapas_MapaAbsentismo: 5245,
            pGrh_Mapas_Ferias: 5246,
            pGrh_Mapas_ListagemResumoFaltasFerias: 5247,
            pGrh_Listagens_ListagemDistribuicaoEtaria: 5248,
            pGrh_Mapas_MapasEspecificos: 5249,
            pGrh_Mapas_Exames: 5252,
            pGrh_Mapas_Consultas: 5253,
            pGrh_Listagens_ListagemFuncArt99: 5254,
            pGrh_Mapas_HorasTrabalhoSuplementar: 5255,
            pGrh_Mapas_DGEEP: 5256,
            pGrh_Mapas_TaxasIUR111: 5257,
            pGrh_Mapas_TaxasIUR113: 5258,
            pGrh_Mapas_IRTDeclMensal: 5259,
            pGrh_Mapas_IRTDeclAnual: 5260,
            pGrh_Mapas_CentrosCustos: 5261,
            pGrh_Mapas_CGARelacaoDescontos: 5262,
            pGrh_Mapas_CGARelacaoDescontosGuiaPagamento: 5263,
            pGrh_Listagens_SupMagneticoTransferenciasBancarias: 5264,
            pGrh_Mapas_MapasEspecificosConfiguracao: 5265,
            pGrh_Mapas_MapasEspecificosConfiguracaoColunas: 5270,
            pGrh_Mapas_SupMagneticoSegurancaSocial: 5275,
            pGrh_Mapas_MapaDeclaracaoRetencoesFonte: 5276,
            pGrh_Mapas_SupMagneticoDeclaracaoRetencoesFonte: 5281,
            pGrh_MapasDeclaracaoAnualModelo10: 5282,
            pGrh_Mapas_SupMagneticoDeclaracaoAnualModelo10: 5287,
            pGrh_Mapas_SupMagneticoQuadroPessoal: 5288,
            pGrh_Mapas_SupMagneticoRelacaoContributiva: 5289,
            pGrh_Mapas_CGARelacaoContributivaGuiaPagamento: 5290,
            pGrh_Mapas_MapaAdseGuiaPag: 5295,
            pGrh_Listagens_ListagemRecibos_EnvioEmailResponsavel: 5298,
            pGrh_Listagens_ListagemRecibos_EnvioEmailsFuncionarios: 5299,
            pImo_Consultas: 5300,
            pImo_LimitesFiscais: 5301,
            pImo_Historico: 5306,
            pImo_MapasFiscais: 5311,
            pImo_ReinvestimentosMaisValias: 5316,
            pImo_BalanceteContabilistico: 5321,
            pImo_BalanceteContabilisticoCCusto: 5326,
            pImo_ListagemImobilizado: 5331,
            pGceMAPASQuadroGestao: 5401,
            pGceMAPASConsultasDiversas: 5402,
            pGceMAPASConsultasDiversas_Encomendas: 5404,
            pGceMAPASConsultasDiversas_EncomendasCli: 5405,
            pGceMAPASConsultasDiversas_EncomendasForn: 5406,
            pGceMAPASConsultasDiversas_Compras: 5407,
            pGceMAPASConsultasDiversas_Stocks: 5408,
            pGceMAPASConsultasDiversas_Vendas: 5409,
            pGceMAPASConsultasDiversas_CCO: 5410,
            pGceMAPASConsultasDiversas_CCO_Cli: 5411,
            pGceMAPASConsultasDiversas_CCO_Forn: 5412,
            pGceMAPASConsultasDiversas_CCO_Vend: 5413,
            pGceMAPASConsultasDiversas_TES_Prev: 5414,
            pGceMAPASConsultasDiversas_TES_Saldos: 5415,
            pGceMAPASConsultasDiversas_TES_Resultados: 5416,
            pGceMAPASQuadroGestaoCaixa: 5417,
            pGceMAPASGraficos: 5418,
            pGceMAPASValoresRecapitulativos: 5419,
            pGceMAPASIntraStat: 5420,
            pGceMAPASRetencaoIRS: 5421,
            pGceMAPASEcovalores: 5422,
            pMapasPersonalizadosView: 5423,
            pGceMapasRastreabilidade: 5424,
            pGceMapasRastreabilidadeArtigos: 5425,
            pGceMapasRastreabilidadeDocumental: 5426,
            pTabGOURMET_ChequesVales: 5427,
            pTabConsultasPersonalizadas: 5428,
            pTabConsultasGrupos: 5433,
            pGceMAPASModelo106: 5438,
            pImo_ListagemFichasImobilizado: 5336,
            pImo_ImpostosDiferidos: 5641,
            pGrh_Mapas_InqMensalConstrObrasPublicas: 5801,
            pGrh_Mapas_HorasTrabalhadas: 5802,
            pGrh_Mapas_Graficos: 5803,
            pGrh_Mapas_Modelo19: 5804,
            pGrh_Mapas_RelatorioUnico: 5805,
            pGrh_Listagens_IRT_AO: 5806,
            pGrh_MapaDeclaracoesRendimentos_EnvioEmailResponsavel: 5807,
            pGrh_MapaDeclaracoesRendimentos_EnvioEmailsFuncionarios: 5808,
            pGrh_Listagens_CategoriasFuncionarios: 5809,
            pGrh_Listagens_ListagemCessacaoContrato: 5810,
            pGrh_MapaDeclaracoesArt99CIRS_EnvioEmailResponsavel: 5811,
            pGrh_MapaDeclaracoesArt99CIRS_EnvioEmailsFuncionarios: 5812,
            pGrh_MapaSegSocial_EnvioEmailResponsavel: 5813,
            pGrh_MapaSeguro_EnvioEmailResponsavel: 5814,
            pGrh_MapaSindicato_EnvioEmailResponsavel: 5815,
            pGrh_MapaQuadroPessoal_EnvioEmailResponsavel: 5816,
            pGrh_InqGDurTrab_EnvioEmailResponsavel: 5817,
            pGrh_HorasTrabSup_EnvioEmailResponsavel: 5818,
            pGrh_MapaDeclaracaoRetencoesFonte_EnvioEmailResponsavel: 5819,
            pGrh_DeclRetFonte_EnvioEmailResponsavel: 5820,
            pGrh_DeclAnualMod10_EnvioEmailResponsavel: 5821,
            pGrh_CGARelContributiva_EnvioEmailResponsavel: 5822,
            pGrh_BalancoSocial_EnvioEmailResponsavel: 5823,
            pGrh_RelatorioUnico_EnvioEmailResponsavel: 5824,
            pGrh_IRTAnual_AO_EnvioEmailResponsavel: 5825,
            pGrh_Modelo111_CV_EnvioEmailResponsavel: 5826,
            pGrh_Modelo113_CV_EnvioEmailResponsavel: 5827,
            pGrh_Modelo19_MZ_EnvioEmailResponsavel: 5828,
            pGrh_IRTMensal_AO_EnvioEmailResponsavel: 5829,
            pGrh_Mapas_SupMagneticoSeguroEmpresaFicheiro: 5830,
            pGrh_Tabelas_SST: 5835,
            pGrh_Tabelas_SST_TiposDeAccoes: 5836,
            pGrh_Tabelas_SST_ResultadosDeAccoes: 5841,
            pGrh_Tabelas_SST_ProfissionaisDeSaudeEseguranca: 5851,
            pGrh_Tabelas_SST_EntidadesPrestadorasDeServicos: 5856,
            pGrh_Movimentos_Formacao: 5861,
            pGrh_Movimentos_Formacao_FuncionariosCompetencias: 5862,
            pGrh_Movimentos_Formacao_AccoesDeFormacao: 5867,
            pGrh_Movimentos_SST: 5872,
            pGrh_Movimentos_SST_FuncionariosAccoes: 5873,
            pGrh_Movimentos_SST_Accoes: 5878,
            pGrh_Movimentos_SST_FactoresRisco: 5883,
            pGrh_Movimentos_SST_FactoresRiscoDoenca: 5888,
            pGrh_Movimentos_SST_AcidentesTrabalho: 5893,
            pGrh_Movimentos_Formacao_AccoesDeFormacao_Fecho: 5898,
            pGrh_Movimentos_Formacao_AccoesDeFormacao_AnularFecho: 5899,
            pGrh_Movimentos_SST_Accoes_Fecho: 5900,
            pGrh_Movimentos_SST_Accoes_AnularFecho: 5901,
            pGrh_MapasDeclaracaoMensalRemunAT: 5902,
            pGrh_Mapas_SupMagneticoDeclaracaoMensalRemunAT: 5907,
            pGrh_Listagens_CarregarCartoesRefeicao: 5912,
            pGrh_Listagens_CarregarCartoesRefeicaoJanelaConfiguracao: 5913,
            pGrh_Listagens_CarregarCartoesRefeicaoSupMagnetico: 5914,
            pGrh_DeclaracaoMensalRemunAT_EnvioEmailResponsavel: 5915,
            pGrh_Listagens_ListagemRecibos_AnexarAFuncionarios: 5916,
            pGrh_MapaDeclaracoesRendimentos_AnexarAFuncionarios: 5917,
            pGrh_MapaDeclaracoesArt99CIRS_AnexarAFuncionarios: 5918,
            pGrh_Mapas_FundosCompensacao: 5919,
            pGrh_MapaDeclaracoesRendimentos_EnvioEmailFornecedor: 5920,
            pGrh_Mapas_ModeloDPRCV: 5921,
            pTabUtilitários: 6000,
            pGceUTILITARIOSRecalculoStocksCustos: 6001,
            pGceUTILITARIOSRecalculoRetençãoIRS: 6002,
            pGceUTILITARIOSArtigos: 6003,
            pGceVNDEmissaoPrecario: 6004,
            pGceVNDTabelasPrecos: 6005,
            pGceVNDAlteracaoPrecos: 6013,
            pGceVNDTabelasPrecosActualizarPrecos: 6014,
            pGceSTKActivarDesactivarArtigos: 6015,
            pGceSTKInativarArtigosPeriodo: 6016,
            pGceSTKSubstituiçãoCodigosArtigos: 6017,
            pGceSTKGeracaoCodigosBarras: 6018,
            pGceUTILITARIOSECOVALORES: 6019,
            pGceUTILITARIOSEtiquetasArtigos: 6020,
            pGceUTILITARIOSEtiquetasArtigosEmissao: 6021,
            pGceUTILITARIOSEtiquetasArtigosConfiguracao: 6022,
            pGceUTILITARIOSListagemArtigos: 6023,
            pGceUTILITARIOSListagemArtigosEmissao: 6024,
            pGceUTILITARIOSListagemArtigosConfiguracao: 6025,
            pGceUTILITARIOSEtiquetasEntidades: 6026,
            pGceUTILITARIOSEtiquetasEntidadesEmissao: 6027,
            pGceUTILITARIOSEtiquetasEntidadesConfiguracao: 6028,
            pGceUTILITARIOSConfigDocumentos: 6029,
            pTabConfiguracaoCheques: 6030,
            pGceUTILITARIOSCompactacaoMovimentosReais: 6035,
            pGceUTILITARIOSFE: 6036,
            pGceUTILITARIOSContabilidade: 6037,
            pGceUTILITARIOSDescarga: 6038,
            pGceUTILITARIOSExportacaoParaFicheiro: 6039,
            pGceUTILITARIOSAUTOPREVENDA: 6040,
            pGceUTILITARIOSAUTOPREVENDAExportacao: 6041,
            pGceUTILITARIOSAUTOPREVENDAImportacao: 6042,
            pGceUTILITARIOSCatalogoFornecedor: 6043,
            pGceUTILITARIOSIntegracaoDados: 6044,
            pGceUTILITARIOSSAFTPT: 6045,
            pGceUTILITARIOSAnalisadorSAFTPT: 6046,
            pTabConfiguracao: 6048,
            pTabUtilitarios_AnexosDigitais: 6049,
            pGceUTILITARIOSComunicacaoFactAT: 6059,
            pGceUTILITARIOSComunicacaoGuiasAT: 6060,
            pGceUTILITARIOSComunicacaoBP: 6061,
            pGceUTILITARIOSVencIvaVendas: 6062,
            pGceUTILITARIOSVencIvaCompras: 6063,
            pGceUTILITARIOSComunicacaoInventAT: 6064,
            pGceSTKINVIntrod_SetSystemQty: 6065,
            pUtilGOURMET_Gce: 6100,
            pTabGOURMET_EnvioPLUS: 6103,
            pTabGOURMET_EnvioEmentas: 6104,
            pTabGOURMET_ImportarTeclado: 6105,
            pTabGOURMET_ConfigREplicacao: 6106,
            pTabGOURMET_WizardSector: 6107,
            pTabGOURMET_Wizardworkstation: 6108,
            pTabGOURMET_UtilArticlesLogicPrinter: 6151,
            pTabGOURMET_UtilArticlesKitchenMonitor: 6152,
            pTabGOURMET_EmittingChecksVouchers: 6153,
            pTabPOSConfig: 6110,
            pTabPOSConfig_EditarPosto: 6111,
            pTabPOSConfig_EditarPerfilPerifericos: 6116,
            pTabPOSConfig_EditarPerfilInterface: 6121,
            pTabPOSConfig_EditarPerfilTeclasAtalho: 6126,
            pTabPOSConfig_EditarEcraVendas: 6131,
            pTabPOSConfig_LayoutTecladoArtigos: 6136,
            pTabPOSConfig_EditarPlantasSectores: 6141,
            pTabPOSConfig_PlanosPublicitarios: 6146,
            pAutogest_Utilitarios: 6200,
            pAutogest_Utilitarios_SubstChaveViatura: 6201,
            pAutogest_Utilitarios_ApresentacaoFotos: 6202,
            pAutogest_Utilitarios_Etiquetas: 6203,
            pAutogest_Utilitarios_Catalogo: 6204,
            pAutogest_Utilitarios_ConfiguracaoRelTarefas: 6206,
            pAutogest_Utilitarios_ImportacaoFleetData: 6207,
            pAutogest_Utilitarios_ManutencaoRelTarefas: 6208,
            pAutogest_Utilitarios_PDAOficinas: 6250,
            pAutogest_Extended_GTMotiveGTGO_Vehicle: 1558,
            pAutogest_Extended_GTMotiveGTE_Budget: 3498,
            pAutogest_Extended_GTMotiveConfiguration: 6251,
            pCtbUtilitarios: 6300,
            pCtbUtilRecontrucaoSaldos: 6301,
            pCtbUtilGerarCTerceiros: 6302,
            pCtbUtilProcSubstTransf: 6303,
            pCtbUtilEncerMeses: 6304,
            pCtbUtilExportacao: 6305,
            pCtbUtilImportacao: 6306,
            pCtbUtilDefNumDiarios: 6307,
            pCtbUtilRenumMovimentos: 6308,
            pCtbUtilDiagnosticos: 6309,
            pCtbUtilActualizacaoPlanos: 6310,
            pCtbUtilPlanosAlt: 6311,
            pCtbUtilSaldarContas: 6313,
            pCtbUtilOpsMultEmp: 6314,
            pCtbGeral: 6315,
            pctbGeralConfigGrelhas: 6316,
            pCtbUtilAdopcaoDoSNC: 6317,
            pCtbUtilConsolidacaoContas: 6318,
            pCtbUtilImportadorMovsSAFT: 6319,
            pCtbUtilEditarPrefContasLiqPendentes: 6320,
            pCtbUtilitariosParam: 6340,
            pCtbUtilitariosParamRetFonte: 6341,
            pCtbUtilitariosParamDeclPeriodica: 6346,
            pCtbUtilitariosParamIES: 6351,
            pCtbUtilitariosParamModelo22: 6356,
            pCtbUtilitariosParamModelo3: 6361,
            pCtbUtilitariosRemoveMovs: 6366,
            pCtbUtilAdopcaoDoNIIF: 6371,
            pCtbUtilImportadorMovsEFatura: 6372,
            pCtbUtilTaxonomiesAssociation: 6373,
            pGrh_Grh_Utilitarios: 6400,
            pGrh_Utilitarios_Acumulados: 6401,
            pGrh_Utilitarios_AlteracoesGerais: 6406,
            pGrh_Utilitarios_MarcacaoFeriados: 6407,
            PGrh_Utilitarios_DescargaCTE: 6410,
            PGrh_Utilitarios_DescargaGTE: 6415,
            PGrh_Utilitarios_AcertosIrs: 6417,
            pGrh_Utilitarios_LigacaoRelogioPonto: 6418,
            PGrh_Utilitarios_RecalcAjustes: 6420,
            PGrh_Utilitarios_DataFecho: 6422,
            pGrh_Utilitarios_OperacoesME: 6423,
            PGrh_Utilitarios_LigacaoCTE: 6424,
            PGrh_Utilitarios_LigacaoGTE: 6429,
            pGrh_Utilitarios_ParamEnvioEmails: 6439,
            pGrh_Utilitarios_ConfiguracoesRelogioPonto: 6444,
            pGrh_Utilitarios_ModelosDocFuncionarios: 6449,
            pImo_Utilitarios: 6500,
            pImo_Utilitarios_Contabilidade: 6501,
            pImo_LigacoesCte: 6502,
            pImo_DescargaCte: 6512,
            pImo_HistoricoAmortizacoes: 6513,
            pImo_HistoricoReavaliacoes: 6518,
            pImo_FechoAno: 6523,
            pImo_AnularFechoAno: 6528,
            pImo_EmissaoEtiquetas: 6533,
            pImo_LigacoesCteAbateSNC: 6535,
            pImo_DescargaCteAbateSNC: 6536,
            pImo_RemovePlano: 6541,
            pImo_RecalcularMaisMenosValias: 6542,
            pAPV_Utilitarios_SubstChaveEquipamento: 6701,
            pOficinas_Utilitarios_AniversariosClientes: 6707,
            pOficinas_Utilitarios_Garantia: 6708,
            pOficinas_Utilitarios_Enviodocumentos: 6709,
            pPOSFrontOffice: 7000,
            pPOSGeral: 7001,
            pPOSGeralIntegrarEncomendas: 7002,
            pPOSGeralProcurarDocumento: 7003,
            pPOSGeralIgnorarPlafond: 7004,
            pPOSGeralIgnorarMargemLucro: 7005,
            pPOSGeralAlterarEntidade: 7006,
            pPOSGeralAlterarCondPagamento: 7007,
            pPOSGeralInserirLinhas: 7008,
            pPOSGeralInserirArmazem: 7009,
            pPOSGeralInserirDescricao: 7010,
            pPOSGeralInserirPreco: 7011,
            pPOSGeralInserirDescontos: 7012,
            pPOSGeralAlterarLinhas: 7013,
            pPOSGeralAlterarArmazem: 7014,
            pPOSGeralAlterarArtigo: 7015,
            pPOSGeralAlterarDescricao: 7016,
            pPOSGeralAlterarPreco: 7017,
            pPOSGeralAlterarDescontos: 7018,
            pPOSGeralRemoverLinhas: 7019,
            pPOSGeralInserirAcertos: 7020,
            pPOSGeralInserirDiversos: 7021,
            pPOSGeralInserirDiversosSujIRS: 7022,
            pPOSGeralInserirDescontosValor: 7023,
            pPOSGeralImportarLinhas: 7024,
            pPOSGeralEditarComposicaoArtigos: 7025,
            pPOSGeralVerFormulasMedidas: 7026,
            pPOSGeralAlterarFormulasMedidas: 7027,
            pPOSGeralAbandonarDocSemGravar: 7028,
            pPOSGeralZerarDocumento: 7029,
            pPOSGeralInserirQuantidade: 7030,
            pPOSGeralInserirQuantidadeOferta: 7031,
            pPOSGeralAlterarQuantidade: 7032,
            pPOSGeralAlterarQuantidadeOferta: 7033,
            pPOSGeralResetBalancaTaloes: 7034,
            pPOSGeralAlterarVendedor: 7035,
            pPOSGeralAlterarEdicao: 7036,
            pPOSGeralEditarReferencias: 7037,
            pPOSGeralPreVisualizar: 7038,
            pPOSGeralConfigurarImpressora: 7039,
            pPOSVendas: 7040,
            pPOSVendasInserir: 7041,
            pPOSVendasAlterar: 7042,
            pPOSVendasAlterarAnular: 7043,
            pPOSVendasAlterarOutrosUtil: 7044,
            pPOSVendasSuspender: 7045,
            pPOSVendasRecuperarSuspensos: 7046,
            pPOSVendasRecuperarAmostras: 7047,
            pPOSVendasRecuperarSuspensosRemover: 7048,
            pPOSVendasRecuperarAmostrasRemover: 7049,
            pPOSDevolucoes: 7060,
            pPOSDevolucoesInserir: 7061,
            pPOSDevolucoesAlterar: 7062,
            pPOSDevolucoesAlterarAnular: 7063,
            pPOSDevolucoesAlterarOutrosUtil: 7064,
            pPOSDevolucoesInserirDeSeccoesExerciciosSemPermissao: 7065,
            pPOSAmostras: 7070,
            pPOSAmostrasInserir: 7071,
            pPOSAmostrasAlterar: 7072,
            pPOSAmostrasAlterarAnular: 7073,
            pPOSAmostrasAlterarOutrosUtil: 7074,
            pPOSTransferencias: 7080,
            pPOSTransferenciasInserir: 7081,
            pPOSTransferenciasAlterar: 7082,
            pPOSTransferenciasAlterarAnular: 7083,
            pPOSTransferenciasAlterarOutrosUtil: 7084,
            pPOSEncomendas: 7090,
            pPOSEncomendasInserir: 7091,
            pPOSEncomendasAlterar: 7092,
            pPOSEncomendasAlterarAnular: 7093,
            pPOSEncomendasAlterarOutrosUtil: 7094,
            pPOSEncomendasPeriodicas: 7100,
            pPOSRecebimentosCCo: 7101,
            pPOSRecebimentosCCoInserir: 7139,
            pPOSRecebimentosCCoAlterar: 7140,
            pPOSRecebimentosCCoAlterarDeOutrosUtil: 7141,
            pPOSRecebimentosCCoAlterarNaoPermAltDesconto: 7142,
            pPOSRecebimentosCCoEmitir: 7143,
            pPOSRecebimentosCCoInsAltDocsComunicadosAT: 7144,
            pPOSConverterDocumentos: 7102,
            pPOSGestaoCaixa: 7103,
            pPOSGestaoCaixaEntradas: 7104,
            pPOSGestaoCaixaSaidas: 7105,
            pPOSGestaoCaixaAbrir: 7106,
            pPOSGestaoCaixaFechar: 7107,
            pPOSGestaoCaixaFecharPermFechoProvisorio: 7108,
            pPOSGestaoCaixaFecharPermEditarDocs: 7109,
            pPOSGestaoCaixaFecharPermImpFechoProvisorio: 7508,
            pPOSMapasConsultas: 7110,
            pPOSMapasConsultasEncomendasPendentes: 7111,
            pPOSMapasConsultasDuplicaoFita: 7112,
            pPOSEditarCliente: 7113,
            pPOSAtalhosOutrosProgramas: 7114,
            pPOSStockReferencia: 7115,
            pPOS_FolhasDeServico: 7116,
            pPOSAbrir_Servicos: 7117,
            pPOSExecutar_Servicos: 7118,
            pPOSEncerrar_Servicos: 7119,
            pPosAnular_Servicos: 7120,
            pPosGerar_Servicos: 7121,
            pPosMudarUtilizador: 7122,
            pPOSExtravioCartoes: 7125,
            pPOSUsarLinhaPreco: 7126,
            pPOSAlterarTeclado: 7127,
            pPOSAlterarPagamentosVenda: 7129,
            pPOSAnularPagamentoCartao: 7131,
            pPOSGeralCopiarLinha: 7132,
            pPOSGeralColarLinha: 7133,
            pPOSEditarLinha: 7134,
            pPOSDescontosVolVenda: 7135,
            pPOSPrecoVenda: 7136,
            pPOSCaucao: 7137,
            pPOSTransfSaldoCartaoCliente: 7138,
            pPOS_Balcao: 7204,
            pPOS_Mesas: 7205,
            pPOS_CartoesConsumo: 7206,
            pPOS_PagamentoCartoesConsumo: 7207,
            pPOS_QuiosquePorteiro: 7208,
            pPOS_ClienteCartoesConsumo: 7209,
            pPOS_PriceCheck: 7210,
            pPOS_MonitorPublicidade: 7211,
            pPOS_Pagamento: 7251,
            pPOS_PagamentoParcial: 7252,
            pPOSPagComAdto: 7253,
            pPOS_ReimprimirDocumentos: 7254,
            pPOS_EditarCabecalho: 7255,
            pPOS_CriarCliente: 7256,
            pPOS_ProcurarArtigo: 7258,
            pPOS_AbrirGaveta: 7259,
            pPOS_Consultas: 7260,
            pPOS_EditarArtigo: 7262,
            pPOS_Sair: 7263,
            pPOS_EditarLote: 7264,
            pPOS_PoderSairMudarUtilizador: 7265,
            pPOS_AssociarVendaACartaoPrePago: 7268,
            pPOS_CarregamentoPrePago: 7269,
            pPOS_NrSerie: 7270,
            pPOS_ReimpressaoFechoCaixa: 7306,
            pPOS_PagamentoRapido: 7401,
            pPOS_AlterarIVA: 7404,
            pPOS_AlterarLocalConsumo: 7405,
            pPOS_ConsumoInterno: 7408,
            pPOS_AbrirMesas: 7409,
            pPOS_Devolucao: 7411,
            pPOS_ImprimirConta: 7451,
            pPOS_TransferirPedidos: 7452,
            pPOS_TransferirPedidosAposPedirConta: 7453,
            pPOS_JuntarMesas: 7454,
            pPOS_SepararMesas: 7455,
            pPOS_AlterarNumPessoas: 7456,
            pPOS_ReservarMesa: 7457,
            pPOS_UtilizarReserva: 7458,
            pPOS_TransferirMesaFuncionario: 7459,
            pPOS_LimparTodasMesas: 7460,
            pPOS_LibertarMesa: 7461,
            pPOS_AlterarPosicaoMesa: 7462,
            pPOS_ListaEspera: 7463,
            pPOS_EnviarMensagemCozinha: 7464,
            pPOS_AbrirMesaDepoisDePedirConta: 7465,
            pPOS_VisualizarValoresMesas: 7466,
            pPOS_AbrirBalcao: 7467,
            pPOS_RetencaoPedidos: 7468,
            pPOS_AbrirMesaDeOutroFuncionario: 7469,
            pPOS_ImprimirTodasContas: 7470,
            pPOS_UltrapassarLimiteMaximoCartoes: 7471,
            pPOS_NomeMesa: 7472,
            pPOS_OfertaTotal: 7473,
            pPOS_LimparMesa: 7474,
            pPOSPagamentos_Acerto: 7475,
            pPOSPagamentos_ModeloImpressao: 7476,
            pPOSPagamentos_Cabecalho: 7477,
            pPOSPagamentos_Documento: 7478,
            pPOSPagamentos_ImprimirSemDetalhe: 7479,
            pPOSPagamentos_NaoImprimir: 7480,
            pPOSUsarValesDesconto: 7481,
            pPOSGeralPVP_S_C_IVA: 7482,
            pPOSGeralCruzeta: 7483,
            pPOSGeralAgrupar: 7484,
            pPOSGeralMolduras: 7485,
            pPOSCancelarConsumoMinimo: 7486,
            pPOSRemoverLinhasDePedidosEnviadosCozina: 7487,
            pPOSPesquisas: 7500,
            pPOSPesquisasReferencia: 7501,
            pPOSPesquisasAlternativos: 7502,
            pPOSPesquisasLivros: 7503,
            pPOSPesquisasLotes: 7504,
            pPOSPesquisasEdicoes: 7505,
            pPOSPesquisasTaxasIVA: 7506,
            pPOSComunicacaoFaturasAT: 7507,
            pPOSGeral_InactivarImpressora: 7509,
            pPOSIniciliazacaoCartoes: 7510,
            pPOSInicializacaoCartoesEmBloco: 7511,
            pPOS_PagamentoRapidoCartoesConsumo: 7512,
            pGceUTILITARIOSIntegracaoDadosOFFLINE: 7513,
            pPOS_IntegracaoDadosOFFLINE: 7514,
            pPOS_Mapas_ListagemCartoesCliente: 7515,
            pPOS_Mapas_ListagemCartoesConsumo: 7516,
            pPOS_Mapas_ListagemArtigosVendidos: 7517,
            pPOS_BotaoCustomizavel1: 7518,
            pPOS_BotaoCustomizavel2: 7519,
            pPOS_BotaoCustomizavel3: 7520,
            pPOS_BotaoCustomizavel4: 7521,
            pPOS_BotaoCustomizavel5: 7522,
            pTabAvisosPersonalizados: 7523,
            pTabAvisosPersonalizadosGrupos: 7528,
            pTabAvisosPersonalizadosConsultas: 7533,
            cProcsPersonalizados: 7534,
            pPOSGeralPreVisualizarDocsSemCodigoAT: 7535,
            pPOSGeralReimpressaoDocsSemCodigoAT: 7536,
            pPOSGeralImprimirDocsSemCodigoAT: 7537,
            pPOSGeralEmitirEtiquetas: 7538,
            pPOSGeralLinhasPagAlterarValorACredito: 7539,
            pPOSGeralPagamentoMesasDocsDeOutros: 7540,
            pPOS_ImprimirContaDeOutroFuncionario: 7541,
            pAPV_Movimento_Marcacao: 7705,
            pAPV_Movimento_Marcacao_AlterarAnular: 7710,
            pAPV_Movimento_Marcacap_AlterarDeOutros: 7711,
            pAPV_Movimento_Recepcao: 7712,
            pAPV_Movimento_Recepcao_AlterarAnular: 7717,
            pAPV_Movimento_Recepcao_AlterarDeOutros: 7718,
            pAPV_Movimento_Orcamento: 7719,
            pAPV_Movimento_Orcamento_AlterarAnular: 7724,
            pAPV_Movimento_Orcamento_AlterarDeOutros: 7725,
            pAPV_Movimento_Reparacao: 7726,
            pAPV_Movimento_Reparacao_AlterarAnular: 7731,
            pAPV_Movimento_Reparacao_AlterarDeOutros: 7732,
            pAPV_Movimento_Entrega: 7733,
            pAPV_Movimento_Entrega_AlterarAnular: 7738,
            pAPV_Movimento_Entrega_AlterarDeOutros: 7739,
            pAPV_Movimento_Geral_IntegrarMovimentos: 7741,
            pAPV_Movimento_Geral_MovimentarPrecoCusto: 7742,
            pAPV_Movimento_Geral_AlterarDescontoEntidade: 7743,
            pAPV_Movimento_Recepcao_AlterarEstado: 7744,
            pAPV_Movimento_Recepcao_AlterarHistoricoEstados: 7745,
            pAPV_Movimento_Orcamento_AlterarEstado: 7746,
            pAPV_Movimento_Orcamento_AlterarHistoricoEstados: 7747,
            pAPV_Movimento_Reparacao_AlterarEstado: 7748,
            pAPV_Movimento_Reparacao_AlterarHistoricoEstados: 7749,
            pAPV_Movimento_Entrega_AlterarEstado: 7750,
            pAPV_Movimento_Entrega_AlterarHistoricoEstados: 7751,
            pAPV_Movimento_Orcamento_DesbloquearFechados: 7752,
            pAPV_Movimento_Reparacao_Materiais: 7753,
            pAPV_Movimento_Reparacao_Fechar: 7754,
            pAPV_Movimento_Reparacao_DesbloquearFechadas: 7755,
            pAPV_Movimento_Reparacao_IgnorarPlafond: 7756,
            pAPV_Movimento_Reparacao_ServInternos: 7757,
            pAPV_Movimento_Reparacao_VerQuantidadeReal: 7758,
            pAPV_Movimento_Reparacao_AlterarQuantidadeReal: 7759,
            pAPV_Movimento_Reparacao_VerQuantidadePrevista: 7760,
            pAPV_Movimento_Reparacao_AlterarQuantidadePrevista: 7761,
            pAPV_Movimento_Entrega_GerarDocumentoVenda: 7762,
            pAPV_Movimento_Entrega_ReterFranquia: 7763,
            pAPV_Movimento_Recepcao_DesbloquearFechadas: 7764,
            pAPV_Movimento_Reparacao_Encomendas: 7765,
            pAPV_Movimento_Reparacao_Encomendas_Editar: 7766,
            pAPV_Movimento_Reparacao_RMAs: 7767,
            pAPV_Movimento_Reparacao_RMAs_Editar: 7768,
            pAPV_Movimento_WizardRecepcaoRMAs: 7770,
            pAPV_Movimento_Recepcao_Solucao: 7771,
            pAPV_Movimento_Recepcao_SolucaoEditar: 7772,
            pAPV_Movimento_Recepcao_Obs: 7773,
            pAPV_Movimento_Recepcao_ObsEditar: 7774,
            pAPV_Movimento_Reparacao_MateriaisEditar: 7775,
            pAPV_Movimento_Reparacao_ServInternosEditar: 7776,
            pAPV_Movimento_Reparacao_ServExternos: 7777,
            pAPV_Movimento_Reparacao_ServExternosEditar: 7778,
            pAPV_Movimento_Reparacao_Solucao: 7779,
            pAPV_Movimento_Reparacao_SolucaoEditar: 7780,
            pAPV_Movimento_Reparacao_Obs: 7781,
            pAPV_Movimento_Reparacao_ObsEditar: 7782,
            pAPV_Movimento_Reparacao_Historico: 7783,
            pAPV_Movimento_Reparacao_MultiReparacao: 7784,
            pAPV_Movimento_Entrega_DesvincularDocumento: 7785,
            pAPV_Movimento_Recepcao_DesvincularDocumento: 7786,
            pAPV_Movimento_Orcamento_DesvincularDocumento: 7787,
            pAPV_Movimento_OpenedRepairs: 7788,
            pAPV_Movimento_ReimpressaoDocumentos: 7789,
            pContratosTipo: 7800,
            pContratosMov: 7810,
            pContratosProcessar: 7818,
            pContratosAlterarComProcessamentos: 7819,
            pERM_MarketingLists: 7890,
            pERM_Tabelas_Clientes_Potenciais: 7900,
            pERM_Tabelas_Processo_Negocio: 7915,
            pERM_Tabelas_Atividades: 7925,
            pERM_Tabelas_Categorias: 7930,
            pERM_Tabelas_Recursos: 7931,
            pERM_Models: 7935,
            pERM_Campaign: 7940,
            pERM_Tabelas_Agenda: 7950,
            pERM_States: 7960,
            pERM_CampaignTypes: 7965,
            pERM_Agenda_Grupos: 7970,
            pERM_Ver_Atividades_Outros_Users: 7980,
            pERM_Alterar_Atividades: 7990,
            pERM_ChangeRelations: 7999,
            pImo_Imobilizado_CCusto: 8006,
            pImo_Imobilizado_PlanoFin: 8011,
            pImo_Imobilizado_Situacao: 8016,
            pTabelas_MotivosIsencaoIVA: 8030,
            pGceVNDIntroducao_ComunicarGuiasAT: 8040,
            pGceCMPIntroducao_ComunicarGuiasAT: 8041,
            pGceLIQIntroducao_ComunicarFactAT: 8042,
            pGce_Tabelas_TypeLinkCategory: 8045,
            pGce_Tabelas_ProductsCatalogs: 8050,
            pGce_Tabelas_DiscountVoucherTypes: 8055,
            pGOP: 8500,
            pGOP_Tabelas_TiposDocumento: 8501,
            pGOP_Tabelas_TiposProcesso: 8506,
            pGOP_Tabelas_TiposEmpreitada: 8511,
            pGOP_Tabelas_TiposConcurso: 8516,
            pGOP_Tabelas_PerfisImportacao: 8521,
            pGOP_Tabelas_CriteriosAdjudicacao: 8526,
            pGOP_Tabelas_Especialidades: 8531,
            pGOP_Tabelas_Alvaras: 8536,
            pGOP_Tabelas_Concursos: 8541,
            pGOP_Tabelas_Tarefas: 8546,
            pGOP_Tabelas_Processos: 8551,
            pGOP_Tabelas_Templates: 8556,
            pGOP_Tabelas_ItensCusto: 8561,
            pGOP_Tabelas_FormulaRevisao: 8566,
            pGOP_Tabelas_IndicesCusto: 8571,
            pGOP_Tabelas_FormaEntrega: 8576,
            pGOP_Tabelas_FormaCaucao: 8581,
            pGop_Tabelas_TiposData: 8586,
            pGop_Tabelas_ModoDistribuicao: 8591,
            pGop_Tabelas_PlanningConfiguration: 8596,
            pGOP_Utilitarios: 8700,
            pGOP_Utilitarios_EmitirFatura: 8701,
            pGOP_Utilitarios_EmitirFolhaObra: 8706,
            pGOP_Movimentos: 8800,
            pGOP_Movimentos_Projectos: 8801,
            pGOP_MovProjetos_Planeamento: 8806,
            pGOP_Movimentos_RevisaoPrecos: 8808,
            pGOP_Movimentos_AtribRecursos: 8809,
            pGOP_Movimentos_Reorcamentacao: 8813,
            pGOP_Movimentos_Orcamentos: 8821,
            pGOP_MovOrcamentos_Converter: 8826,
            pGOP_MovOrcamentos_Planeamento: 8828,
            pGOP_Movimentos_AutosMedicao: 8840,
            pGOP_Movimentos_AutosMedicaoVnd: 8841,
            pGOP_Movimentos_AutosMedicaoPrd: 8851,
            pGOP_Movimentos_AutosMedicaoCmp: 8861,
            pGOP_Movimentos_RegistosObra: 8871,
            pGOP_Movimentos_Subcontract: 8881,
            pGrh_Tabelas_TiposDocumento: 9186,
            pGrh_Tabelas_TiposSituacoesDocumentacao: 9191,
            pGrh_Tabelas_ConsultasExames: 9221,
            PGrh_Utilitarios_ConfigChequesConfig: 9520,
            pGrh_Movimentos_Formacao_CursosAFrequentar: 9521,
            pGrh_MapasDeclaracaoAnualModelo20HMZ: 9526,
            pGrh_MapasDeclaracaoAnualModelo20HMZ_EnvioEmailResponsavel: 9531,
            pGrh_MapasRelacaoNominalMZ: 9532,
            pGrh_MapasRelacaoNominalMZ_EnvioEmailResponsavel: 9537,
            pGrh_GuiaPagamentoADSE_EnvioEmailResponsavel: 9538,
            pGrh_FundosCompensacao_EnvioEmailResponsavel: 9539,
            pGrh_ConfigSEPA: 9540,
            pGrh_Mapas_MapaAdse: 9541,
            pGrh_Mapas_SupMagneticoMapaADSE: 9542,
            pGrh_Mapas_MapaADSEGuiaPagamento: 9543,
            pGrh_Movimentos_SST_MotivoAcidente: 9544,
            pGrh_Movimentos_SST_MedidasAcidente: 9545,
            pHR_Regime: 9546,
            pHR_Organism: 9551,
            pHR_MinimumWage: 9556,
            pHR_ImportFile: 9561,
            pHR_Payments: 9566,
            pHR_BatchPayments: 9566,
            pHR_ReprintingReceipt: 9570,
            pHR_Deduction: 9576,
            pHR_ParamRates: 9581,
            pHR_Concepts: 9586,
            pBackOfficeTabSuite: 2111,
            pSuite: 10000,
            pSuite_Tabela_Alojamentos: 10001,
            pSuite_Tabela_Atencoes: 10006,
            pSuite_Tabela_Avarias: 10011,
            pSuite_Tabela_BlocosAlojamento: 10016,
            pSuite_Tabela_DescritivoPagamento: 10021,
            pSuite_Tabela_Diarias: 10026,
            pSuite_Tabela_Encargos: 10031,
            pSuite_Tabela_GrupoEncargo: 10036,
            pSuite_Tabela_GrupoLimpeza: 10041,
            pSuite_Tabela_MotivoInactividade: 10046,
            pSuite_Tabela_OrigemMercado: 10050,
            pSuite_Tabela_SegmentoMercado: 10056,
            pSuite_Tabela_Tecnicos: 10061,
            pSuite_Tabela_TipoEvento: 10067,
            pSuite_Tabela_Evento: 10378,
            pSuite_Tabela_TipoGrupo: 10072,
            pSuite_Tabela_TipoIdentificacao: 10077,
            pSuite_Tabela_TiposCancelamento: 10082,
            pSuite_Tabela_Voos: 10087,
            pSuite_Tabela_ZonasAlojamentos: 10092,
            pSuite_Tabela_ZonasLimpezas: 10097,
            pSuite_Tabela_Tarifas: 10102,
            pSuite_Tabela_TipoAlojamento: 10107,
            pSuite_Tabela_Entidades: 10112,
            pSuite_Tabela_Hospedes: 10117,
            pSuite_Tabela_Caracteristicas: 10122,
            pSuite_Tabela_TiposAvaraia: 10335,
            pSuite_Tabela_TipoCartaoCredito: 10341,
            pSuite_Tabela_MeioReserva: 10346,
            pSuite_Tabela_PeriodicidadeHospede: 10351,
            pSuite_Tabela_PerdidoAchado: 10353,
            pSuite_Tabela_Prefixo: 10358,
            pSuite_Tabela_TarifaTelefonica: 10363,
            pSuite_Tabela_Titulos: 10368,
            pSuite_Tabela_VIPStatus: 10373,
            pSuite_Movimentos: 10500,
            pSuite_Movimentos_FacturarEntidade: 10501,
            pSuite_Movimentos_LancamentoEncargosGrupo: 10508,
            pSuite_Movimentos_LancamentoEncargos: 10512,
            pSuite_Movimentos_NightAudit: 10525,
            pSuite_Movimentos_Planning: 10535,
            pSuite_Movimentos_PlanningInterfaces: 10536,
            pSuite_Movimentos_AtribuicaoAlojamentos: 10545,
            pSuite_Movimentos_RoomStatus: 10546,
            pSuite_Movimentos_Reservas: 10550,
            pSuite_Movimentos_ReservasInterfaces: 10556,
            pSuite_Movimentos_ConsultaTarifas: 10559,
            pSuite_Movimentos_Despertares: 10570,
            pSuite_Movimentos_GestaoCaixa: 10580,
            pSuite_Movimentos_GestaoCaixaEntradas: 10581,
            pSuite_Movimentos_GestaoCaixaSaidas: 10582,
            pSuite_Movimentos_GestaoCaixaAbrir: 10583,
            pSuite_Movimentos_GestaoCaixaFechar: 10584,
            pSuite_Movimentos_GestaoCaixaFecharPermFechoProvisorio: 10585,
            pSuite_Movimentos_ReservasOnlineFalhadas: 10590,
            pSuite_Movimentos_BatchBillings: 10591,
            pSuite_Utilitarios: 6600,
            pSuite_Utilitarios_WizardAlojamentos: 6601,
            pSuite_Utilitarios_SeleccionarEstab: 6602,
            pSuite_Utilitarios_ParametrosSuite: 6603,
            pSuite_Utilitarios_WizardTarifas: 6606,
            pSuite_Utilitarios_SeleccionarPosto: 6609,
            pSuite_IFC: 6610,
            pSuite_IFC_DefinicaoGeral: 6611,
            pSuite_IFC_DefinicaoGeral_Alterar: 6612,
            pSuite_IFC_DefinicaoGeral_Remover: 6613,
            pSuite_IFC_TiposInterfaces: 6616,
            pSuite_IFC_Interfaces: 6621,
            pSuite_IFC_Mensagens: 6626,
            pSuite_Utilitarios_WizardBooking: 6631,
            pSuite_Consultas: 5500,
            pSuite_Consultas_SEF: 5505,
            pSuite_Consultas_INE: 5506,
            pSuite_Consultas_Disponibilidades: 5511,
            pSuite_Consultas_PrevisaoReceita: 5512,
            pSuite_Consultas_BookingPosition: 5513,
            pSuite_Consultas_ChannelManager: 5514,
            NAO_UTILIZADO_pStands_Util_ConfigurarPerfil: 15000,
            NAO_UTILIZADO_pStands_Mov_Proc_AlterarPrecoVendaRevenda: 15001,
            pInactiveTabDrivingLicenseCategories: 3946,
            pInactiveTabDrivers: 3947,
            pInativosTabClientes: 13000,
            pInativosTabVendedores: 13001,
            pInativosTabArtigoLotes: 13002,
            pInativosTabFornecedores: 13003,
            pInativosTabOutrosCred: 13004,
            pInativosTabOutrosDev: 13005,
            pInativosTabTiposDocumentos: 13006,
            pInativosTabTiposDocumentoVendas: 13007,
            pInativosTabTiposDocumentoSTK: 13008,
            pInativosTabTiposDocumentoLiquid: 13009,
            pInativosTabTiposDocumentosApv: 13010,
            pInativosTabTiposDocumentosOficinas: 13011,
            pInativosTabTiposDocumentosInv: 13012,
            pInativosTabArtigos: 13013,
            pInativosTabReferencias: 13014,
            pInativosTabArmazens: 13015,
            pInativosTabSeccoes: 13016,
            pInativosTabTesContas: 13017,
            pInativosTabTesTipoMovPag: 13018,
            pInativosTabFuncionarios: 13019,
            pInativosTabTaxasIva: 13020,
            pInativosTabCondPagamento: 13021,
            pInativosTabMedicalSpecialty: 13022,
            pInativosTabMedicalPatient: 13023,
            pInativosTabMedicalDoctors: 13024,
            pInativosTabMedicalCliniHistory: 13025,
            pInativosTabMedicalHealthCareInstitutions: 13026,
            pInativosTabMedicalICD9: 13027,
            pInativosTabMedicalICD10: 13028,
            pInativosTabMedicalMarker: 13029,
            pInativosTabMedicalTypeMedicalConsul: 13030,
            pInativosTabMedicalTypeDeclarations: 13031,
            pInativosTabMedicalTypeDosages: 13032,
            pInativosTabMedicalDoctorsSpecialty: 13033,
            pInativosTabMedicalDoctorsTypeMedicCons: 13034,
            pInativosTabMedicalResponsibleFinancialInstitutions: 13035,
            pInativosTabMedicalProdut: 13036,
            pInativosTabMedicalMCDTAreas: 13037,
            pInativosTabTiposDocumentosEncomendas: 13038,
            pInativosTabTiposDocumentoCompras: 13039,
            pInativosTabTiposDocumentosLetras: 13040,
            pInativosTabConfigSEPA: 13041,
            pInativosTabTiposDocumentosOpCaixa: 13042,
            pInativosTabTecnicos: 13043,
            pInactiveTabRegimes: 13044,
            pInactiveTabOrganism: 13045,
            pInativeTabEquipament: 13046,
            pInativeTabVehicles: 13047,
            pInactiveTabTypeExpenses: 13048,
            pInactiveTabLocations: 13049,
            pInactiveTabDocTypeFleets: 13050,
            pInactiveTabRACPrice: 13051,
            pInactiveTabRACInsuranceTypes: 13052,
            pInactiveTabRACClassesTypes: 13053,
            pInactiveTabActivityType: 13054,
            pInactiveTabInterventionlLists: 13055,
            pInactiveAnexos: 13056,
            pInactiveTabDiscountVoucherTypes: 8060,
            pInactiveTabChecklists: 13057,
            Backstage: 4,
            Backstage_EditarEmpresas: 11000,
            Backstage_EditarGruposUsers: 11001,
            Backstage_EditarRibbon: 11002,
            Backstage_EditarRibbon_outrosUsers: 11003,
            Backstage_GestãoBD: 11004,
            Backstage_EfectuarCopia: 11005,
            Backstage_ReporCopia: 11006,
            Backstage_DesbloquearEmpresas: 11007,
            Backstage_ManutencaoTabelas: 11008,
            Backstage_EditarExecutarImpDados: 11009,
            Backstage_ImpSAF: 11010,
            Backstage_Customizacao: 11011,
            Backstage_IntegDados: 11012,
            Backstage_Integ_On_Line: 11013,
            Backstage_Integ_Off_Line: 11014,
            Backstage_Param: 11015,
            Backstage_ParamWeb: 11016,
            Backstage_AvisarCopiaSeguranca: 11017,
            Backstage_ConfigExercicios: 11018,
            pCli_Tabelas: 12000,
            pCli_Tab_Beneficios: 12001,
            pCli_Tab_Especialidades: 12006,
            pCli_Tab_EstadosConsulta: 12011,
            pCli_Tab_EntidadesSaude: 12016,
            pCli_Tab_Exames: 12021,
            pCli_Tab_ICD: 12026,
            pCli_Tab_ICD9: 12027,
            pCli_Tab_ICD10: 12032,
            pCli_Tab_Indicadores: 12037,
            pCli_Tab_MotivosIsencaoTaxaModeradora: 12042,
            pCli_Tab_TiposCartoesSaude: 12047,
            pCli_Tab_ERF: 12052,
            pCli_Tab_Padroes: 12057,
            pCli_Tab_ParametrosAnamnese: 12062,
            pCli_Tab_TiposBeneficios: 12067,
            pCli_Tab_TiposConsultas: 12072,
            pCli_Tab_TiposDeclaracoesMedicas: 12077,
            pCli_Tab_TiposERF: 12082,
            pCli_Tab_TiposPosologia: 12087,
            pCli_Tab_Titulos: 12092,
            pCli_Tab_SubstanciaAtivas: 12097,
            pCli_Tab_FormasFarmaceuticas: 12102,
            pCli_Tab_PrescricaoMedica: 12107,
            pCli_Tab_PrescricaoMedica_EstadoReceita: 12108,
            pCli_Tab_PrescricaoMedica_MotivoAnulacao: 12113,
            pCli_Tab_PrescricaoMedica_RegiaoSaude: 12118,
            pCli_Tab_PrescricaoMedica_TiposExecao: 12123,
            pCli_Tab_PrescricaoMedica_TiposOrdem: 12128,
            pCli_Tab_PrescricaoMedica_TipoReceita: 12133,
            pCli_Tab_PrescricaoMedica_ViaReceita: 12138,
            pCli_Tab_Outras: 12143,
            pCli_Tab_Outras_OrgTabelaConvencao: 12144,
            pCli_Tab_Outras_EspecialidadeAnamnese: 12149,
            pCli_Tab_Outras_TiposPeriodos: 12154,
            pCli_Tab_Outras_Horarios: 12159,
            pCli_Tab_Analises: 12164,
            pCli_Tab_TiposImpressos: 12169,
            pCli_Tab_MedicoDeclaracoes: 12174,
            pCli_Tab_ClinicalDoctors: 12179,
            pCli_Tab_ClinicalMCDTAreas: 12184,
            pCli_Tab_ClinicalCustomers: 12189,
            pCli_Tab_MedicalDeclaration: 12595,
            pCli_Tab_MedicalDeclarationPrint: 12600,
            pCli_Movimentos: 12500,
            pCli_Mov_Agenda: 12501,
            pCli_Mov_Agenda_AbrirConsulta: 12502,
            pCli_Mov_Agenda_AnexarDocumentos: 12503,
            pCli_Mov_Agenda_EmitirFatura: 12504,
            pCli_Mov_Agenda_AlterarEstado: 12505,
            pCli_Mov_Marcacao: 12506,
            pCli_Mov_MarcacaoConsultas: 12507,
            pCli_Mov_Consulta: 12512,
            pCli_Mov_ConsultasAnexarFicheiros: 12517,
            pCli_Mov_ConsultasTerminarConsulta: 12518,
            pCli_Mov_ConsultasNovaDeclaracao: 12519,
            pCli_Mov_HistoricoMedicoUtente: 12520,
            pCli_Mov_Prescricoes: 12525,
            pCli_Mov_MedicamentosInfarmed: 12530,
            pCli_Mov_Patologias: 12535,
            pCli_Mov_Ordontograma: 12540,
            pCli_Mov_PrescricoesReports: 12545,
            pCli_Mov_FaturacaoOrganismos: 12550,
            pCli_Mov_FaturacaoUtentes: 12555,
            pCli_Mov_AutoFaturacaoMedicos: 12560,
            pCli_Mov_RetificacaoFaturacao: 12565,
            pCli_Mov_GerarFicheirosTED: 12570,
            pCli_Mov_CommunicationRequirements: 12575,
            pCli_Tab_PrescricaoMedica_MotivoAnulacaoLinhas: 12580,
            pInativosTabCliMotivoAnulacaoLinhas: 12585,
            pInativosTabCliTipoReceita: 12586,
            peMedicalLateralidade: 13060,
            peMedicalObjectMCDT: 13065,
            peMedicalAgreedMCDT: 13070,
            peMedicalPrescriptionMCDT: 13075,
            peMedicalAgreedMCDTProcessingProduct: 13080,
            peMedicalDoctoresChangeValues: 8061,
            peMedicalDLRestrition: 13085,
            peMedicalDLTypeDocIdentification: 13090,
            peMedicalCertificate: 13095,
            peMedicalHealthProfessionals: 13100,
            pGceGeral_ReimprimirComoOriginal: 13201,
            pPOSGeral_ReimprimirComoOriginal: 13202,
            pGce_MostrarMargensLucro: 13203,
            pPOSGestaoCaixaImpedirFechoProvisorioMesasAbertas: 13204,
            pGCEUtilitariosRecalculoComissoes: 13205,
            pTabActividadesAcessos: 13206,
            PHR_EMPLOYEES_WEBSERVICES: 13210,
            PHR_EMPLOYEES_WEBSERVICES_PBSS: 13211,
            PHR_EMPLOYEES_WEBSERVICES_PBSS_RegistarVinculo: 13212,
            PHR_EMPLOYEES_WEBSERVICES_PBSS_ConsultarTrabalhadores: 13213,
            PHR_EMPLOYEES_WEBSERVICES_PBSS_ConsultarTrabalhadores_VisualizarConsultasDeOutrosUtilizadores: 13214,
            PHR_EMPLOYEES_WEBSERVICES_COPENSATIONFUNDS: 13215,
            pPersonalizarMenusPersonalizados: 99999,
            pMenusPersonalizados: 100000,
            OtherTAbelas: 15000,
            Taxes_Fiscal_Tax: 15005,
            Taxes_Tax_Group: 15010,
            Taxes_Tax_Region: 15015,
            Taxes_Tax: 15020,
            Utils_ExportProfile: 15030,
            Utils_ExtractProfile: 15031,
            pGceVNDAlterarPropinaVoluntaria: 13207,
            pPosVNDAlterarPropinaVoluntaria: 13208,
            pGCEChangeQtyPriceCustomerOrderIntegrated: 2644,
            pGCEChangeQtyPriceSupplierOrderIntegrated: 2645,
            pGCEChangeQtyPricePurchaseOrderIntegrated: 2646,
            pCampaignsClosed: 7945,
            pGceLotsInactivateActivate: 13209,
            pGCEComissoesPorObjetivos: 14000,
            pGCEComissoesPorObjetivosProc: 14004,
            pGCEComissoesPorObjetivosRemoveProc: 14005,
            pWidgetsDashBoards: 14006,
            pEditarWidgets: 14007,
            pEditarDashBoards: 14008,
            pWidgetsGravarParametros: 14009,
            pCtbUtilConformityDiag: 14010
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.POSv2MsgBoxButtonType', {
        statics: {
            None: 0,
            TransformDoc: 1,
            ActiveCase: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.QColumnType', {
        statics: {
            NotDefined: -1,
            Text: 0,
            Date: 1,
            Image: 2,
            Hyperlink: 3,
            Checkbox: 4,
            Value_Currency: 5,
            Value_CurrencyCUnit: 15,
            Value_CurrencyVUnit: 16,
            Value_Integer: 6,
            Value_Quant: 7,
            Value_QuantCMP: 12,
            Value_QuantVND: 13,
            Value_QuantSTK: 14,
            Value_Percent: 8,
            DateTime: 9,
            Costum: 10,
            ImageURL: 11
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.QExportType', {
        statics: {
            Normal: 0,
            Excel: 1,
            Pdf: 2,
            Csv: 3,
            Print: 4,
            Procs: 5,
            Graphs: 6,
            WidgetsNormal: 7,
            WidgetsFilter: 8,
            Mobile: 9,
            Model: 10,
            PreviewLabel: 11,
            ExportLabel: 12
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.QParameterType', {
        statics: {
            None: 0,
            Texto: 1,
            Data: 2,
            Inteiro: 3,
            Valor: 4,
            Check: 5,
            Hora: 6,
            DataHora: 7,
            ValorMoeda: 8,
            ValorCUnit: 9,
            ValorVUnit: 13,
            ValorCmp: 10,
            ValorVnd: 11,
            ValorStk: 12,
            DataCTB: 14
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.RastreabilidadeArtMovs', {
        statics: {
            Encomendas: 0,
            Compras: 1,
            Producoes: 2,
            Stocks: 3,
            Inventarios: 4,
            Vendas: 5,
            Oficinas: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.RecipientTypes', {
        statics: {
            To: 0,
            CC: 1,
            BCC: 2,
            From: 3,
            Required: 4,
            Optional: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.ReportApplication', {
        statics: {
            FrontOffice: 1,
            BackOffice: 2,
            Mobile: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.RestricoesMovFiliais', {
        statics: {
            cInteEncomendasClientes: 1,
            cInteEncomendasFornecedores: 2,
            cInteEncomendasArmazens: 3,
            cInteConversaoDocCompra: 4,
            cInteConversaoDocVenda: 5,
            cInteLiquidacoesClientes: 6,
            cInteLiquidacoesFornecedores: 7,
            cInteLetrasReceber: 8,
            cInteLetraspagar: 9,
            cInteLiquidacoesComissoes: 10,
            cInteMovimentostesouraria: 11,
            cInteOficinas: 12,
            cInteApv: 13
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.SerieDescontinuada', {
        statics: {
            AbrevTpDocumento: 0,
            Seccao: 1,
            SerieStatus: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.SerieStatus', {
        statics: {
            Deprecated: 0,
            Invalid: 1,
            NotAssigned: 2,
            Inexistent: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.Source', {
        statics: {
            Anexos: 0,
            Reports: 1,
            Data: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.SourceType', {
        statics: {
            NotDefined: 0,
            InputWindow: 1,
            InputWindowPOS: 2,
            OfflineIntegration: 3,
            AutoPreSale: 4,
            SaftImporter: 5,
            Medical: 6,
            eMobile: 7,
            Contracts: 8,
            RecalculateCommissions: 9,
            Suite: 10
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.State', {
        statics: {
            None: 0,
            Remove: 1,
            Add: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TaxTypeCalculation', {
        statics: {
            Legacy: 0,
            Mixed: 1,
            Complex: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipificationJournalSAFT', {
        statics: {
            cNormal: "Normal",
            cReg: "Regularizações do período de tributação",
            cApur: "Apuramento de resultados",
            cMovsAjus: "Movimentos de ajustamento"
        }
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoCustoArtigo', {
        statics: {
            PC_MEDIO: 1,
            PC_REFERENCIA: 2,
            PC_ULTIMO: 3,
            PC_VENDA: 4,
            PC_LIFO: 5,
            PC_FIFO: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoDocStockMov', {
        statics: {
            Entrada: 0,
            Saida: 1,
            Transferencia: 2,
            FolhaObra: 3,
            Producao: 4,
            Inventario: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoEntidadeContacto', {
        statics: {
            Contacto: 0,
            Cliente: 1,
            Fornecedor: 2,
            OutroDevedor: 3,
            OutroCredor: 4,
            Vendedor: 5,
            Tecnico: 6,
            Funcionario: 7,
            Armazem: 8,
            Banco: 9,
            Locadora: 10,
            Operador: 11,
            EstabelecimentoDeEnsino: 12,
            Utilizador: 13,
            Destinatario: 14,
            ListMarketing: 15,
            Outlook: 16,
            Exchange: 17,
            CPotencialsOPortunities: 18
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoLicenca', {
        statics: {
            Demonstrativo: -1,
            ClienteFinal_Rede: 0,
            Revendedor_Rede: 1,
            Apresentacao_Rede: 2,
            Apresentacao_Mono: 3,
            ClienteFinal_Mono: 4,
            Revendedor_Mono: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoMapa', {
        statics: {
            Mov_Venda_Cab: 0,
            Mov_Venda_Lin: 1,
            Mov_Compra_Cab: 2,
            Mov_Compra_Lin: 3,
            mov_stock_cab: 4,
            mov_stock_lin: 5,
            Mov_ComissaoLiquidacoes_Cab: 6,
            Mov_ComissaoLiquidacoes_Lin: 7,
            Mov_FolhaObra_Cab: 8,
            Mov_FolhaObra_Lin: 9,
            Mov_FolhaObra_CabComp: 10,
            Mov_FolhaObra_LinComp: 10,
            Mov_Liquidacao_Cab: 11,
            Mov_Liquidacao_Lin: 12,
            Mov_Producao_Cab: 13,
            Mov_Producao_Lin: 14,
            Mov_Producao_CabComp: 15,
            Mov_Producao_linComp: 15,
            Mov_Compra_Encargos: 16,
            Mov_Letra: 17,
            Mov_Encomenda_Cab: 18,
            Mov_Encomenda_Lin: 19,
            Mov_Orcamento_Cab: 20,
            Mov_Orcamento_Lin: 21,
            View_Mov_Stock_Lin: 22,
            Tbl_Gce_ArtigosLotes: 23
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoOperacao', {
        statics: {
            SemOperacao: 0,
            Orcamentos: 1,
            OrcamentosRegimeVenda: 2,
            Encomendas: 3,
            Compras: 4,
            Vendas: 5,
            VendasRegimeVenda: 6,
            Stocks: 7,
            Producoes: 8,
            ProducoesCompostos: 9,
            ProducoesComponentes: 10,
            Decomposicoes: 11,
            DecomposicoesCompostos: 12,
            DecomposicoesComponentes: 13,
            FolhasObra: 14,
            FolhasObraCompostos: 15,
            FolhasObraComponentes: 16,
            Inventarios: 17,
            MateriaisOR: 18,
            OrdensReparacao: 19,
            ReparacoesAPV: 20,
            MateriaisAPV: 21,
            ProcessosRAC: 22,
            Processos: 23,
            Artigos: 24,
            Armazens: 25
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoOrcamentos', {
        statics: {
            Contas: 0,
            CCustos: 1,
            CcConta: 2,
            ContaCc: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoParametrizacao', {
        statics: {
            ParamDeclper: 1,
            ParamDeclAnu: 2,
            ParamM22: 3,
            ParamDeclPerAnt: 4,
            ParamDeclAnuAnt: 5,
            ParamM22Ant: 6,
            ParamMod106Ant: 7,
            ParamModC: 8,
            ParamModGP10: 9,
            ParamMod1B: 10,
            ParamMod22MOC: 11,
            ParamBalancoSocial: 12,
            ParamDeclPeriodica: 13,
            ParamRelatorioUnico: 14,
            ParamDeclPerMOC: 15,
            ParamMod106Act: 16,
            ParamMod1B_N: 17,
            ParamMod22MOCAnt: 18,
            ParamMod20MOC: 19,
            ParamMod107: 20
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoParametro', {
        statics: {
            tpBoolean: 0,
            tpDateTime: 1,
            tpFloat: 2,
            tpInteger: 3,
            tpOther: 4,
            tpCombo: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TipoPeriodicidade', {
        statics: {
            Unica: 1,
            Anual: 2,
            Semestral: 3,
            Trimestral: 4,
            Mensal: 5,
            Semanal: 6,
            Outra: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TiposCustoGOP', {
        statics: {
            Material: 0,
            Servico: 1,
            MaoDeObra: 2,
            Viatura: 3,
            Equipamento: 4,
            Outro: 5,
            Subempreitada: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TiposNumeracao', {
        statics: {
            Mensal: 0,
            Anual: 1,
            Continuo: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TiposNumeradores', {
        statics: {
            tpGestaoComercial: 1,
            TpComissoes: 2,
            tpTaloesDep: 3,
            tpReconciliacoes: 4,
            tpLetrasReceber: 5,
            tpLetrasPagar: 6,
            tpFolhaCaixa: 8,
            tpLevTransferencia: 9,
            tpValeReembolso: 10,
            tpDiario: 7,
            tpTipo_documento_Ctb: 16,
            tpAutogestOficinas: 15,
            tpAutogestStands: 17,
            tpImobilizado: 18,
            tpGrh: 19,
            tpDiarioMovTes: 20,
            tpValesDesconto: 21,
            tpFrotas: 22,
            tpAPVE: 23,
            tpContratos: 24,
            tpGOP: 25,
            tpSUITE: 26,
            tpHR: 27
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpAcTeclas', {
        statics: {
            RegistoPrimeiro: 1,
            RegistoUltimo: 2,
            RegistoAnterior: 3,
            RegistoSeguinte: 4,
            RegistoGravar: 5,
            RegistoNovo: 6,
            RegistoRemover: 7,
            PreVisualizar: 8,
            Imprimir: 9,
            FecharJanela: 10,
            CamposAdicionais: 11,
            CamposAdicionaisGrdActiva: 12,
            RegistoRepetir: 13,
            ImportacaoLinArtigos: 14,
            Confirmar: 15,
            GrelhaArtigos: 16,
            GrelhaPagamentos: 17,
            DefinirFiltroGrelha: 18
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpBarraBotoes', {
        statics: {
            Balcao: 0,
            Mesas: 1,
            PedidosMesas: 2,
            Encomendas: 3,
            PedidosCartoes: 4,
            CartoesConsumo: 5,
            BalcaoPDA: 6,
            MesasPDA: 7,
            PedidosMesasPDA: 8
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpCmpArtigos', {
        statics: {
            simples: 0,
            inventario: 1,
            transformacao: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpComissao', {
        statics: {
            SemComissao: 0,
            Simples: 2,
            Multipla: 3,
            PorDesconto: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpComponente', {
        statics: {
            BarraBotoes: 0,
            PainelGrupos: 1,
            PainelSubGrupos: 2,
            PainelArtigos: 3,
            PainelComponentes: 4,
            VisorOperador: 5,
            TecladoNumerico: 6,
            GrelhaArtigos: 7,
            Imagem: 8,
            TecladoAlfanumerico: 9,
            BotaoPagarRapido: 29,
            BotaoPersonalizado: 30,
            PainelCompostos: 31,
            BotaoTeclado: 32,
            BtDirSeguinte: 33,
            BtDirAnterior: 34,
            LblCliente: 50,
            LblTipoDocumento: 51,
            LblNumDocumento: 52,
            LblData: 53,
            LblValorDescontos: 54,
            LblNrArtigos: 55,
            LblValorIva: 56,
            LblValorPagar: 57,
            LblVendedor: 58
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpCompra', {
        statics: {
            Compra: 0,
            Encargo: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpCondicoesCompras', {
        statics: {
            FornecedorArtigos: 1,
            ArtigoFornecedores: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpConfiguracaoAvisos', {
        statics: {
            NaoEmitir: 0,
            MostraUmaVezDia: 1,
            PendentesCliOD: 2,
            PendentesForOC: 3,
            EncomendasCliOD: 4,
            EncomendasForOC: 5,
            LetrasReceber: 6,
            LetrasPagar: 7,
            Orcamentos: 8,
            PagamentosDiferidos: 9,
            AvencasProcessar: 10,
            ComissoesPagar: 11,
            TabelaPrecos: 12,
            MovPrevistos: 13,
            DevolucoesArtigos: 14
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDataMov', {
        statics: {
            DataDocumento: 0,
            DataLancamento: 1,
            DataCTB: 2,
            DataSTK: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDBs', {
        statics: {
            AllDBs: 0,
            EticadataDBs: 1,
            EtiSistemas: 2,
            EtiEmpresas: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.tpDeclaration', {
        statics: {
            Mod3: 0,
            Mod22: 1,
            IES: 2,
            DeclPeriodica: 3,
            DeclPer_MOC: 4,
            DeclRecap: 5,
            Mod106: 6,
            Mod1B: 7,
            Mod20Moc: 8,
            Mod22Moc: 9,
            Mod30: 10,
            Mod39: 11,
            ModC: 12,
            MocCalcImposto: 13,
            Modelo106: 14,
            Modelo1B: 15,
            ModGP10: 16,
            DeclaracaoAnualModelo10: 17,
            DeclaracaoMensalRemunAT: 18,
            RelacaoNominalMZ: 19,
            Mod107: 20
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDesconto', {
        statics: {
            DescontosTipoArtigoTiposEntidade: 1,
            DescontosTipoEntidadeTiposArtigo: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDistrib', {
        statics: {
            Manual: 0,
            valor: 1,
            Quantidade: 2,
            Peso: 3,
            Volume: 4,
            ManualSemValor: 5,
            NaoDistribuido: 6,
            Documento: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.tpDocDescarga', {
        statics: {
            Vendas: 1,
            Compras: 2,
            Stocks: 3,
            Inventarios: 4,
            Liquidacoes: 5,
            Letras: 6,
            comissoes: 7,
            LiquidacoesComissoes: 8,
            FolhasObra: 9,
            Producoes: 10,
            StocksInventarioPermanente: 11,
            Tesouraria: 13,
            TesourariaTaloes: 14,
            TesourariaTransf: 15,
            LiquidacoesDif: 16,
            MovCaixa: 17,
            Encomendas: 18,
            Amortizacoes_Imo: 19,
            Reavaliacoes_Imo: 20,
            MaisValias_Imo: 21,
            MenosValias_Imo: 22,
            Abates_Imo: 23,
            OFI_Requisicoes: 24,
            ProcSalarios: 25,
            OFI_EntregaFacturacao: 26,
            Imparidades_Imo: 27,
            ImpostosDif_Imo: 28,
            APV_EntregaFacturacao: 29,
            HR_Payments: 30
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDocElec', {
        statics: {
            Enc: 0,
            Fact: 1,
            NDeb: 2,
            NCre: 3,
            GRem: 4,
            Devolucao: 5,
            EncAlt: 6,
            EncCrosDoc: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.tpDocHR', {
        statics: {
            Payments: 0
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.tpDocProcArtigo', {
        statics: {
            StkEncArmazem: 0,
            VndEncCliOrc: 1,
            CmpEncFor: 2,
            FOProd: 3,
            Contagens: 4,
            TabPrecos: 5,
            TermContagem: 6,
            Outros: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.tpDocSuite', {
        statics: {
            Reservas: 0,
            LancamentoEncargos: 1,
            ConvercaoDocumentos: 2,
            VendaPronto: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDocumento', {
        statics: {
            NaoDefinido: 0,
            Vendas: 1,
            Compras: 2,
            Stock: 3,
            Inventarios: 4,
            Liquidacoes: 5,
            Letras: 6,
            Comissoes: 7,
            LiquidacoesComissoes: 8,
            FolhasObra: 9,
            Producoes: 10,
            StockInventarioPermanente: 11,
            Encargos: 12,
            Tesouraria: 13,
            Encomendas: 14,
            OperacoesCaixa: 15,
            Orcamentos: 16,
            OFI_Requisicoes: 17,
            OFI_Marcacoes: 18,
            OFI_Orcamentos: 19,
            OFI_OrdensReparacao: 20,
            OFI_Recepcao: 21,
            OFI_EntregaFacturacao: 22,
            STD_Processos: 23,
            RAC_Processos: 24,
            APV_Reparacoes: 25,
            APV_Orcamentos: 26,
            Contrato: 27,
            APV_EntregaFacturacao: 28,
            GOP_Orcamento: 29,
            GOP_AutoMedicao: 30,
            LiquidacoesRemovidas: 31,
            APV_ReparacoesPA: 32,
            GRH_Processamento: 33,
            GOP_FolhaObra: 34,
            Oficinas: 35,
            APV: 36,
            APV_Marcacoes: 37,
            HR_Payments: 38,
            AF_Viagens: 39,
            AF_Sinistros: 40
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpDocumentoAEmitir', {
        statics: {
            Stocks: 1,
            Vendas: 2,
            Compras: 3,
            Orcamentos: 4,
            Liquidacoes: 5,
            Encomendas: 6,
            FolhaObra: 7,
            Producoes: 8,
            TesPrevistos: 9,
            TesReais: 10,
            LiquidacoesComissoes: 11,
            Comissoes: 12,
            Letras: 13,
            Inventarios: 14,
            LiquidacoesDif: 15,
            EncomendasArmazens: 17,
            VendaConsumoPosterior: 18,
            OrdReparacoes: 19,
            OrcamentosOfi: 20,
            Recepcoes: 21,
            Entregas: 22,
            DocsOficinas: 23,
            Marcacao: 24,
            Viagens: 25,
            Sinistros: 26,
            APVRecepcao: 27,
            APVOrcamento: 28,
            APVReparacao: 29,
            Contrato: 30,
            Reserva: 31,
            TesAvisos: 32,
            APVMarcacao: 33,
            GOPOrcamento: 34,
            GOPAutoMedicao: 35,
            APVEntrega: 36,
            SAFT: 37,
            Anexos: 39,
            GOPFolhaObra: 40,
            GOPRegistoObra: 41,
            eMedical: 42,
            DocsAPV: 43,
            ReceiptsExchange: 44,
            DiscountVouchers: 45,
            OrcamentosOfi_Min: 46,
            APVOrcamento_Min: 47,
            ARCContract: 48
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpEncomenda', {
        statics: {
            Cliente: 0,
            Fornecedor: 1,
            Armazem: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpEntidade', {
        statics: {
            Cliente: 0,
            OutroDevedor: 1,
            Fornecedor: 2,
            OutroCredor: 3,
            Vendedor: 4,
            Armazem: 5,
            FuncionarioGRH: 6,
            Medico: 7,
            Artigo: 8,
            OrganismGRH: 9,
            EntidadeGenerica: 10,
            Viatura: 11
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpEntidadeTes', {
        statics: {
            Cliente: 0,
            OutroDevedor: 1,
            Fornecedor: 2,
            OutroCredor: 3,
            Vendedor: 4,
            FuncionarioGRH: 5,
            OrganismGRH: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpEstadoContrato', {
        statics: {
            EmCurso: 0,
            Fechado: 1,
            Cancelado: 2,
            Suspenso: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpEtiqueta', {
        statics: {
            Artigos: 0,
            Entidades: 1,
            ListagensArtigos: 2,
            Cheques: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.tpFiltroEmpresa', {
        statics: {
            Activas: 0,
            Inactivas: 1,
            ActivasInactivas: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpGranel', {
        statics: {
            Quantidade: 1,
            Preco: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpGrupoBarraBotoes', {
        statics: {
            Movimento: 0,
            EdicaoLinha: 1,
            GestaoCaixa: 2,
            Outras: 3,
            Geral: 4,
            Todas: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpImportacaoGOLD', {
        statics: {
            cImpTabelasGold: 0,
            cImpTabEMovGold: 1,
            cImpTabESldGold: 2,
            cImpConfigGold: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpImportacaoGOLD_Origem', {
        statics: {
            cGceCteOfiStd: 0,
            cInvestimento: 1,
            cRecurHumanos: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpInvocEntid', {
        statics: {
            CodEntidade: 1,
            ECVDNumContrib: 2,
            ECVDNome: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpKeyPress', {
        statics: {
            Nada: 0,
            EnterPress: 1,
            CancelLeaveCell: 2,
            AddPress: 3,
            ZeroPress: 4,
            DblClickPress: 5,
            SeparadorPress: 6
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpLetra', {
        statics: {
            AReceber: 0,
            APagar: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpLetraEstado', {
        statics: {
            EmCarteira: 1,
            Descontada: 2,
            Liquidada: 3,
            Anulada: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpLetraMovimento', {
        statics: {
            Desconto: 0,
            Devolucao: 1,
            Liquidacao: 2,
            Anulacao: 3,
            Reforma: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpLigacaoExtra', {
        statics: {
            SemLigacao: 0,
            ConversaoDocumentos: 1,
            Avencas: 2,
            EvitarUpdateStamp: 3,
            DocumentosConvertidos: 4,
            AnulacaoConversao: 5,
            RecalculoIRS: 6,
            SatisfacaoEncomendas: 7,
            Rapel: 8,
            VencimentoIvaCaixa: 9
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpLinha', {
        statics: {
            Texto: 0,
            Acerto: 2,
            Diversos: 3,
            Artigo: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpLiquidacao', {
        statics: {
            Efectiva: 0,
            Diferida: 1,
            PorLetra: 2,
            Adiantamento: 3,
            RegAdiantamento: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpMeioPag', {
        statics: {
            NaoDefinido: 0,
            TalaoDeposito: 1,
            ValorCheque: 2,
            Numerario: 3,
            Letra: 4,
            TransfBancaria: 5,
            ValeReembolso: 6,
            Sinal: 7,
            ChequeOferta: 9,
            CartaoPrePago: 10,
            Adiantamentos: 11,
            CreditoQuarto: 12
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpMercado', {
        statics: {
            Nacional: 0,
            Comunitaria: 1,
            ExtraComunitaria: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpModulosADM', {
        statics: {
            cModAdmCte: 1,
            cModAdmGce: 2,
            cModAdmImo: 4,
            cModAdmSTD: 8,
            cModAdmOFI: 16,
            cModAdmGRH: 32,
            cModAdmAPV: 64,
            cmodAdmHtl: 128,
            cmodAdmGOP: 256,
            cmodAdmeMedical: 512
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpMovimento', {
        statics: {
            Vendas: 0,
            Compras: 1,
            Encomendas: 2,
            Encargos: 3,
            Orcamentos: 4,
            Liquidacoes: 5,
            RetencaoIRS: 6,
            OFI_Marcacoes: 7,
            OFI_Orcamentos: 8,
            OFI_Recepcao: 9,
            OFI_OrdensReparacao: 10,
            RAC_Processos: 11,
            APV_Orcamentos: 12,
            APV_Recepcao: 13,
            APV_Reparacao: 14,
            Contabilidade: 15,
            STD_Processos: 16,
            OFI_EntregaFact: 17,
            APV_EntregaFact: 18,
            NaoDefinido: 99
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpMovimentoCaixa', {
        statics: {
            Abertura: 0,
            Saida: 1,
            Entrada: 2,
            Fecho: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpMovTesouraria', {
        statics: {
            Previsto: 0,
            Real: 1,
            DefTpPag: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpNaturezaContrato', {
        statics: {
            NaoDefinido: 0,
            Generico: 1,
            Viaturas: 2,
            Equipamentos: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpOperacao', {
        statics: {
            Localizacoes: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpOperacaoDocOriginal', {
        statics: {
            Nenhuma: 0,
            Anular: 1,
            Relacionar: 2,
            DuplicacaoFactSimplificada: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpOrcamentoEstado', {
        statics: {
            pendente: 0,
            Aceite: 1,
            NaoAceite: 2
        },
        $enum: true
    });
    
    /**
     * NE 2011-11-22, Tipo de parametro para Crystal Reports, usado para saber se é para adicionar às formulas ou parametros
     *
     * @public
     * @class Eticadata.ERP.EtiEnums.TpParametroRpt
     */
    Bridge.define('Eticadata.ERP.EtiEnums.TpParametroRpt', {
        statics: {
            Formula: 0,
            Parametro: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpPendente', {
        statics: {
            LetrasPendEncargos: 1,
            LetrasPendAnulacao: 2,
            LetrasPendRecambio: 3,
            LiquidPendEncargos: 11,
            LiquidPendAdiantam: 12,
            LiquidPendValPConta: 13,
            Todos: 999
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpPerfil', {
        statics: {
            Exportacao: 0,
            Importacao: 1,
            Transferencia: 2,
            Calendarizacao: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpProcArtigo', {
        statics: {
            CodBarras: 1,
            CodArtigo: 2,
            CodInterno: 3,
            Substituidos: 4,
            Referencias: 5,
            ArtigoCliente: 6,
            ArtigoFornecedor: 7
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpProcuraArtigo', {
        statics: {
            NaoEncontrou: 0,
            Encontrou: 1,
            Substituido: 2,
            ReferenciaInactiva: 3,
            ReferenciaActiva: 4,
            ArtigoInactivo: 11,
            SustituidoInactivo: 12,
            GranelQuantidade: 21,
            GranelPreco: 22,
            ChequeOferta: 23,
            CarregamentoCartoes: 24,
            ArtigoPosMultiViatura: 25,
            TaxaIVAIsentaInexistente: 99
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpPromocao', {
        statics: {
            None: 0,
            LeveXpagueY: 1,
            NovoPreco: 2,
            Desconto: 3,
            Oferta: 4,
            ValeDesconto: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpPromocaoTipo', {
        statics: {
            Artigo: 1,
            Familia: 2,
            Referencia: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpQtdStock', {
        statics: {
            cStockMinimo: 0,
            cStockMaximo: 1,
            cStockReposicao: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpRepTabelas', {
        statics: {
            pTodas: 1,
            pRubricasImp: 2,
            pMunicipios: 4,
            pMapasEstatisticos: 8,
            pDeclModelo3: 16,
            pDeclRetFonte: 32,
            pDeclIVAAnexos40_41: 64,
            pDeclAnual: 128,
            pDeclModelo22: 256,
            pABDR: 512,
            pEcovalorDAutor: 1024,
            pCoefReav: 2048,
            pTblAnexa: 4096,
            pAjustesFiscais: 8192,
            pDecretos: 16384,
            pTiposImo: 32768,
            pTiposAbate: 65536,
            pContas: 131072,
            pAut_ISV: 262144,
            pDeclAnualAnexos: 524288,
            pApuramentosParam: 1048576,
            pGrh_AbonosDescontosFaltas: 2097152,
            pGrh_AssociacoesPatronais: 4194304,
            pGrh_Avisos: 8388608,
            pGrh_Categorias: 16777216,
            pGrh_DistritosConcelhosFreguesias: 33554432,
            pGrh_Diuturnidades: 67108864,
            pGrh_Feriados: 134217728,
            pGrh_Habilitacoes: 268435456,
            pGrh_InstrRegulTrabalho: 536870912,
            pGrh_Medicos: 1073741824,
            pGrh_MotivosFaltas: 2147483648,
            pGrh_NaturezasJuridicas: Bridge.Long([0,1]),
            pGrh_Paises: Bridge.Long([0,2]),
            pGrh_Profissoes: Bridge.Long([0,4]),
            pGrh_ReparticaoFinancas: Bridge.Long([0,8]),
            pGrh_ResultadosConsultas: Bridge.Long([0,16]),
            pGrh_Seguradoras: Bridge.Long([0,32]),
            pGrh_SegurancaSocial: Bridge.Long([0,64]),
            pGrh_SituacoesCGA: Bridge.Long([0,128]),
            pGrh_Sindicatos: Bridge.Long([0,256]),
            pGrh_Situacoes: Bridge.Long([0,512]),
            pGrh_TaxasIRS: Bridge.Long([0,1024]),
            pGrh_TiposRendimentos: Bridge.Long([0,2048]),
            pGrh_TiposDespesas: Bridge.Long([0,4096]),
            pGrh_TiposContrato: Bridge.Long([0,8192]),
            pGrh_TiposExames: Bridge.Long([0,16384]),
            pGrh_Turnos: Bridge.Long([0,32768]),
            pAut_ConfigAuto: Bridge.Long([0,65536]),
            pAut_RentAcar: Bridge.Long([0,131072]),
            pAut_ConfigProc: Bridge.Long([0,262144]),
            pGrh_Config_Desc_CTE: Bridge.Long([0,524288]),
            pGrh_MapasEspecificos: Bridge.Long([0,1048576]),
            pAut_Oficinas: Bridge.Long([0,2097152]),
            pGrh_RelatorioUnicoParam: Bridge.Long([0,4194304])
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpRepTabelasContinuacao', {
        statics: {
            pTodas: 1,
            pIESAnexo_A: 2,
            pIESAnexo_D: 4,
            pIESAnexo_F: 8,
            pIESAnexo_G: 16,
            pIESAnexo_H: 32,
            pIESAnexo_I: 64,
            pIESAnexo_L: 128,
            pIESAnexo_M_Continente: 256,
            pIESAnexo_M_Acores: 512,
            pIESAnexo_M_Madeira: 1024,
            pIESAnexo_N: 2048,
            pIESAnexo_O: 4096,
            pIESnexo_P: 8192,
            pIESAnexo_Q_Sim: 16384,
            pIESAnexo_Q_Nao: 32768,
            pIESAnexo_R: 65536,
            pDeclIVA: 131072,
            pFluxosCaixa: 524288,
            pApuramentos_IVA: 1048576,
            pApuramentos_RES_EXIST: 2097152,
            pERM_TiposContactos: 4194304,
            pERM_TiposActividades: 8388608,
            pERM_ProcessosNegocio: 16777216,
            pERM_Categorias: 33554432,
            pERM_Recursos: 67108864,
            pCtbPrefixoContasLiqPend: 134217728,
            peMedical_HealthCareInstitutions: 268435456,
            peMedical_HealthRegions: 536870912,
            peMedical_ICD9: 1073741824,
            peMedical_ICD10: 2147483648,
            peMedical_Marks: Bridge.Long([0,1]),
            peMedical_MCDTAreas: Bridge.Long([0,2]),
            peMedical_Benefits: Bridge.Long([0,4]),
            peMedical_CliniHistory: Bridge.Long([0,8]),
            peMedical_ConsulState: Bridge.Long([0,16]),
            peMedical_Specialty: Bridge.Long([0,32]),
            peMedical_ResponsibleFinancialInstitution: Bridge.Long([0,64]),
            peMedical_Standard: Bridge.Long([0,128]),
            peMedical_TypeDosages: Bridge.Long([0,256]),
            peMedical_TypeMedicalBenefit: Bridge.Long([0,512]),
            peMedical_TypeMedicalCards: Bridge.Long([0,1024]),
            peMedical_TypeMedicalConsul: Bridge.Long([0,2048]),
            peMedical_TypeMedicalDeclarations: Bridge.Long([0,4096]),
            peMedical_TypeModTaxExemptions: Bridge.Long([0,8192]),
            peMedical_TypePrints: Bridge.Long([0,16384]),
            peMedical_TypeProfessionalBodies: Bridge.Long([0,32768]),
            peMedical_TypeRFI: Bridge.Long([0,65536]),
            peMedical_DCIPT: Bridge.Long([0,131072]),
            peMedical_PharmaceuticalForm: Bridge.Long([0,262144]),
            peMedical_MedicPrescState: Bridge.Long([0,524288]),
            peMedical_MedicPrescReasonsAnnulment: Bridge.Long([0,1048576]),
            peMedical_MedicPrescType: Bridge.Long([0,2097152]),
            peMedical_MedicPrescVia: Bridge.Long([0,4194304]),
            peMedical_MedicPrescExceptions: Bridge.Long([0,8388608]),
            peMedical_ClinicHistSpecialty: Bridge.Long([0,16777216]),
            pImpostos: Bridge.Long([0,33554432]),
            peMedical_Lateralidade: Bridge.Long([0,67108864]),
            peMedical_Object: Bridge.Long([0,134217728]),
            peMedical_MCDTAgree: Bridge.Long([0,268435456]),
            peMedical_AnnulamentReasonLine: Bridge.Long([0,536870912])
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpStatusBar', {
        statics: {
            Utilizador: 0,
            Empresa: 1,
            Exercicio: 2,
            Licenca: 3,
            Seccao: 4,
            Hora: 5,
            Data: 6,
            Avisos: 7,
            Lembrete: 8,
            Update: 9
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpTESDocumentoOrigem', {
        statics: {
            Tesouraria: 1,
            Vendas: 2,
            RecibosVendas: 3,
            Compras: 4,
            LiqComprasEVendas: 5,
            Comissoes: 6,
            LiqComissoes: 7,
            MovLetras: 8,
            TaloesDeposito: 9,
            MovCaixa: 10,
            Encomendas: 11,
            ProcSalarios: 12,
            TransLev: 13,
            ProcSalariosPayments: 14,
            RentACarDeposit: 15
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpTesTipoConta', {
        statics: {
            Banco: 1,
            Caixa: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpUnidade', {
        statics: {
            STK: 1,
            VND: 2,
            CMP: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TpValoresDescarga', {
        statics: {
            ValorTotal: 100,
            ValorDoIVA: 101,
            ValorLiquido: 102,
            DescontoNormal: 103,
            DescontoRegIVA: 118,
            DiversosTotal: 104,
            DiversosIVA: 105,
            DiversosValorLiquido: 106,
            Acertos: 107,
            DifCambioFavoravel: 108,
            DifCambioDesFavoravel: 109,
            RegularizacaoIVA: 110,
            CustoMercadoria: 111,
            Bens2MaoLucro: 112,
            Bens2MaoPrejuizo: 113,
            Bens2MaoValorCompra: 114,
            EncargosDistVLiquido: 115,
            EncargosNaoDistVLiquido: 116,
            EncargosSuportados: 117,
            ValorPago: 120,
            ValorAdiantamentos: 121,
            ValorIEC: 123,
            ValorPendente: 126,
            IRSRetido: 127,
            CustoMaquina: 128,
            CustoMaoObra: 129,
            ValorIVANaoDedut: 130,
            ValorTotalEmCarteira: 131,
            ValorTotalDescontado: 132,
            ValorRecambioEmCarteira: 133,
            ValorRecambioDescontado: 134,
            LiqValorTotalClientes: 135,
            LiqValorTotalFornecedores: 136,
            LiqValorTotalODevedores: 137,
            LiqValorTotalOCredores: 138,
            ValorTotalLiquidado: 139,
            ValorTotalSinal: 141,
            ValorTotalVales: 142,
            SinalRecebido: 143,
            SinalDevolvidoLiquidado: 144,
            SinalDevolvidoVales: 145,
            SinalPerdido: 146,
            DiferencaCaixaFavoravel: 147,
            DiferencaCaixaDesfavoravel: 148,
            ValorTotalCompostos: 149,
            ValorTotalComponentes: 150,
            ValorEcovalorDAutor: 151,
            DifArredondamento: 152,
            InversaoSujPassivoIVA: 153,
            ValorTotalStands: 154,
            CustoMercadoriaStands: 155,
            ChequesOferta: 156,
            CartoesPrePagos: 157,
            IncidenciaDoIVA: 158,
            DiffExchangeRetentionsFavorable: 159,
            DiffExchangeRetentionsUnFavorable: 160,
            AIndicar: 200,
            Vlr_Imo_Aq: 201,
            Vlr_Imo_AqReav: 202,
            Vlr_Imo_AcresAq: 203,
            Vlr_Imo_AcresAm: 204,
            Vlr_Imo_Liq: 205,
            Vlr_Imo_AmortEx: 206,
            Vlr_Imo_AmortAc: 207,
            Vlr_Imo_Vnd: 208,
            Vlr_Imo_VndSIVA: 209,
            Vlr_Imo_IVA: 210,
            Vlr_Imo_MaisValia: 211,
            Vlr_Imo_MenosValia: 212,
            Vlr_Imo_fltVlrReval: 213,
            Vlr_Imo_fltVlrPerdImp: 214,
            Vlr_Imo_fltVlrDecReval: 215,
            Vlr_Imo_fltVlrRevImp: 216,
            Vlr_Imo_DecJustoValor: 217,
            Vlr_Imo_AcrJustoValor: 218,
            Vlr_Imo_ImpostoDiferido: 219,
            Vlr_Imo_fltVlrImpAcumAct: 220,
            Vlr_Imo_fltVlrPerdImpAceite: 221,
            Vlr_Imo_DecresAq: 222,
            Vlr_Imo_DecresAm: 223,
            Vlr_Grh_Base: 900,
            Vlr_Grh_ValorVenc: 901,
            Vlr_Grh_ValorOutrosAbonos: 902,
            Vlr_Grh_SegSocialFunc: 903,
            Vlr_Grh_CGAFunc: 904,
            Vlr_Grh_ADSEFunc: 905,
            Vlr_Grh_ValorOutrosDescontos: 906,
            Vlr_Grh_RemunLiquidas: 907,
            Vlr_Grh_SegSocialEmp: 908,
            Vlr_Grh_CGAEmp: 909,
            Vlr_Grh_Ajustes: 910,
            Vlr_Grh_ValorVencIndep: 911,
            Vlr_Grh_ValorOutrosAbonosIndep: 912,
            Vlr_Grh_RemunLiquidasIndep: 913,
            Vlr_Grh_EncargosSegSocialEmpRegimeC: 914,
            Vlr_Grh_AcertosEncargosSegSocialEmp: 917,
            Vlr_Grh_AcertosEncargosCGAEmp: 918,
            Vlr_Grh_SegSocialIncidSSES: 919,
            Vlr_Grh_SegSocialDescFuncES: 920,
            Vlr_Grh_SegSocialDescEmpES: 921,
            Vlr_Grh_SegSocialIncidSST: 922,
            Vlr_Grh_SegSocialDescFuncT: 923,
            Vlr_Grh_SegSocialDescEmpT: 924,
            Vlr_Grh_CGAIncidCGAE: 925,
            Vlr_Grh_CGADescFuncE: 926,
            Vlr_Grh_CGADescEmpE: 927,
            Vlr_Grh_CGAIncidCGAT: 928,
            Vlr_Grh_CGADescFuncT: 929,
            Vlr_Grh_CGADescEmpT: 930,
            Vlr_Grh_AbonosEmEspecieLiquido: 931,
            Vlr_Grh_AbonosEmEspecieIliquido: 932,
            Vlr_Grh_ADSEEmp: 933,
            Vlr_Grh_AcertosEncargosADSEEmp: 934,
            Vlr_Grh_ADSEIncidADSEE: 935,
            Vlr_Grh_ADSEDescFuncE: 936,
            Vlr_Grh_ADSEDescEmpE: 937,
            Vlr_Grh_ADSEIncidADSET: 938,
            Vlr_Grh_ADSEDescFuncT: 939,
            Vlr_Grh_ADSEDescEmpT: 940,
            Vlr_Grh_RetencaoIndepRetencao: 941,
            Vlr_Grh_RetencaoIndepIncidencia: 942,
            Vlr_Grh_RetencaoIndepTaxa: 943,
            Vlr_Grh_FundoCompensacaoFCT: 946,
            Vlr_Grh_FundoCompensacaoFGCT: 947,
            Valor_Imposto: 948,
            Valor_Imposto_Nao_Dedutivel: 949,
            Valor_Incidencia: 951,
            Valor_Propina: 952,
            Valor_Amortizar: 953,
            Valor_Juros: 954,
            Valor_Impostos_Juros: 955,
            Valor_Encargos: 956,
            Vlr_Grh_ChargesOtherDiscounts: 957,
            ValueAdjustmentFavorable: 958,
            ValueAdjustmentUnfavorable: 959
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.TypeLinkCte', {
        statics: {
            WithoutDefinition: 0,
            Sales: 1,
            Purchase: 2,
            Stock: 3,
            StockSale: 4,
            StockPurchase: 5
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VersaoExchange', {
        statics: {
            Exchange2007_SP1: 0,
            Exchange2010: 1,
            Exchange2010_SP1: 2,
            Exchange2010_SP2: 3,
            Exchange2013: 4
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherBirthdayTpDate', {
        statics: {
            Birthday: 0,
            Birth: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherComputedStates', {
        statics: {
            Available: 0,
            Used: 1,
            Canceled: 2,
            Annulled: 3,
            Unavailable: 11,
            Expired: 12
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherCustomEventsTypes', {
        statics: {
            ApplicationDoc: 0,
            ApplicationDocLine: 1,
            DistribValues: 2,
            RemovalOfValues: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherKinds', {
        statics: {
            Discount: 0,
            Refund: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherQueryIncludeTypes', {
        statics: {
            IncludeValue: 0,
            IncludePercentage: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherStates', {
        statics: {
            Available: 0,
            Used: 1,
            Canceled: 2,
            Annulled: 3
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValDateEndNumDaysAddTypes', {
        statics: {
            NumberOfDaysAfterStarting: 0,
            LastDayOfTheStartMonth: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValDateEndTypes', {
        statics: {
            EndNumDaysAfter: 0,
            EndFixedDate: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValDateStartNumDaysAddDateTypes', {
        statics: {
            Emission: 0,
            Birthday: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValDateStartNumDaysAddTypes', {
        statics: {
            NumberOfDaysAfter: 0,
            FirstDayOfMonth: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValDateStartTypes', {
        statics: {
            StartNumDaysAfter: 0,
            StartFixedDate: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValueApplyMethod', {
        statics: {
            Accumulate: 0,
            Overwrites: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.VoucherValueTypes', {
        statics: {
            Value: 0,
            Percentage: 1
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.ERP.EtiEnums.WeekDays', {
        statics: {
            Sunday: 1,
            Monday: 2,
            Tuesday: 4,
            Wednesday: 8,
            Thursday: 16,
            Friday: 32,
            Saturday: 64
        },
        $enum: true,
        $flags: true
    });
    
    
    
    Bridge.init();
})(this);
