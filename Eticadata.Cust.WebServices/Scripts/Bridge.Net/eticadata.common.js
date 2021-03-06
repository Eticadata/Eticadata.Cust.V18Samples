﻿(function (globals) {
    "use strict";

    Bridge.define('Eticadata.Common.ComandosInternos', {
        statics: {
            ShowWebHost: "ShowWebHost",
            ReposicaoVersaoAnterior: "ReposicaoVersaoAnterior",
            ArmMsgInput: "ArmMsgInput",
            FornecedoresArtigos: "FornecedoresArtigos",
            ArtigosFornecedores: "ArtigosFornecedores",
            FactoresConversao: "FactoresConversao",
            TiposCustosRAC: "TiposCustosRAC",
            TiposClassesEmitirDoc: "TiposClassesEmitirDoc",
            UtilitariosAvisosAniversariosClientes: "Utilitarios.Avisos.AniversariosClientes",
            UtilitariosAvisosGarantia: "Utilitarios.Avisos.Garantia",
            UtilitariosAvisosEnviodocumentos: "Utilitarios.Avisos.Enviodocumentos",
            AutoGestOficinasServicosInternos: "AutoGest.Oficinas.ServicosInternos",
            AutoGestOficinasServicosExternos: "AutoGest.Oficinas.ServicosExternos",
            ComponentesModal: "ComponentesModal",
            HorarioTipoPeriodo: "HorarioTipoPeriodo",
            HorarioBloco: "HorarioBloco"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAdministrador', {
        statics: {
            ParamCamposAdicionais: "Parametrizacoes.CamposAdicionais",
            ParamCamposAdicionaisModal: "Parametrizacoes.CamposAdicionaisModal",
            ParamCamposAdicionaisEditar: "Parametrizacoes.CamposAdicionaisEditar",
            ParamEventos: "Parametrizacoes.Eventos",
            ParamEventosModal: "Parametrizacoes.EventosModal",
            ParamTeclasAtalho: "Parametrizacoes.TeclasAtalho",
            ParamMapasPersonalizados: "Parametrizacoes.MapasPersonalizados",
            ParamConfiguracaoLogs: "Parametrizacoes.ConfiguracaoLogs",
            ParamConfigSeguranca: "Parametrizacoes.ConfigSeguranca",
            ParamActTaxasIVA: "Parametrizacoes.ActTaxasIVA",
            UtilDesbloqEmpresas: "Utilitarios.DesbloquearEmpresas",
            UtilManutencaoTabelas: "Utilitarios.ManutencaoTabelas",
            UtilDivisaoBaseDados: "Utilitarios.DivisaoBaseDados",
            UtilOtimizacaoBaseDados: "Utilitarios.OtimizacaoBaseDados",
            UtilConfiguracao: "Utilitarios.Configuracao",
            AplEditarGrupos: "Aplicacao.EditarGrupos",
            AplAbrirEmpresas: "Aplicacao.AbrirEmpresas",
            AplEditarEmpresas: "Aplicacao.EditarEmpresas",
            AplSelectSqlPath: "Aplicacao.SelectSqlPath",
            AplEfectuarCopias: "Aplicacao.CopiasSeguranca.EfectuarCopias",
            AplReporCopias: "Aplicacao.CopiasSeguranca.ReporCopias",
            AplActualizarBD: "Aplicacao.ActualizarEmpresa",
            AplCriarBD: "Aplicacao.CriarBD",
            ParamImportarCustomizacoes: "Parametrizacoes.Customizacoes.Importar",
            ParamExportarCustomizacoes: "Parametrizacoes.Customizacoes.Exportar",
            AssembliesCustomizacao: "Parametrizacoes.Customizacoes.Assemblies",
            ParamWebServices: "Parametrizacoes.WebServices",
            ParamAlterFiscais1013: "Parametrizacoes.ParamAlterFiscais1013",
            ParamAlterFiscais1013_Detalhe: "Parametrizacoes.ParamAlterFiscais1013_Detalhe",
            BackstageRefreshEmpresas: "Backstage.RefreshEmpresas",
            UtilConversaoOrcamentos: "Utilitarios.UtilConversaoOrcamentos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAnexosDigitaisWEB', {
        statics: {
            EditarAnexo: "AttachmentsModule.AnexosView.Show()",
            AnexosDigitais: "AttachmentsModule.AnexosDigitaisView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAplicacao', {
        statics: {
            Sair: "Sair",
            AbrirEmpresa: "Aplicacao.AbrirEmpresa",
            FecharEmpresa: "Aplicacao.FecharEmpresa",
            AbrirSeccao: "Aplicacao.AbrirSeccao",
            AlterarChave: "Aplicacao.AlterarChave",
            TerminarSessao: "Aplicacao.TerminarSessao",
            AjudaAcerca: "AjudaAcerca",
            AjudaAcercaModal: "AjudaAcercaModal",
            AjudaTopicos: "Ajuda.Topicos",
            ConfigurarImpressora: "Aplicacao.ConfigurarImpressora",
            ResetLog: "Aplicacao.ResetLog",
            ResetCacheListas: "Aplicacao.ResetCacheListas",
            EditarImagem: "Aplicacao.EditarImagem",
            UtilitarioConfiguracao: "Aplicacao.UtilitarioConfiguracao",
            RefreshBackGround: "Aplicacao.RefreshBackground",
            ResetTaxesCache: "Aplicacao.ResetTaxesCache",
            DataViewTabelas: "Aplicacao.DataViewTabelas",
            TreeViewTabelas: "Aplicacao.TreeViewTabelas",
            CmdName: "Aplicacao.CmdName",
            Tabela: "Aplicacao.Tabela",
            MenusVariaveis: "Aplicacao.MenusVariaveis",
            AvisosLicenca: "Aplicacao.AvisosLicenca",
            EditarLinhaMovNrsSerie: "Aplicacao.EditarLinhaMovNrsSerie",
            MapasPersonalizados: "Aplicacao.MapasPersonalizados",
            MapasPersonalizadosPreVisualizacao: "Aplicacao.Mapas.MapasPersonalizados.PreVisualizacao",
            EditarLinhaMovLote: "Aplicacao.EditarLinhaMovLote",
            EditarLinhaMovArtAlternativos: "Aplicacao.EditarLinhaArtAlternativos",
            FormSeleccaoPrinter: "Aplicacao.FormSeleccaoPrinter",
            RefreshEtiApp: "Aplicacao.RefreshEtiApp",
            ListarUsersNaBd: "Aplicacao.ListarUsersNaBd",
            GravarConfigsIni: "Aplicacao.GravarConfigsIni",
            AssembliesToLoad: "Aplicacao.AssembliesToLoad",
            EditarListaPersonalizada: "Aplicacao.EditarListaPersonalizada",
            EditarConsultaPersonalizada: "Aplicacao.EditarConsultaPersonalizada",
            EditarRelacoesLista: "Aplicacao.EditarRelacoesLista",
            Calculadora: "calc.exe",
            http: "http://www.eticadata.com",
            CmdNameLabelsTraduzidas: "Aplicacao.CmdNameLabelsTraduzidas",
            PesquisaNumExterno: "GCE.Movimentos.Genericos.GENPesquisaNumExterno",
            MensagemArtigo: "GCE.Movimentos.Genericos.GEMMensagemArtigo",
            EditarJanelas: "Aplicacao.EditarJanelas",
            EditarJanelasConfiguracao: "Aplicacao.EditarJanelasConfiguracao",
            AlterarMultiplosRegistosConfiguracao: "Aplicacao.AlterarMultiplosRegistosConfiguracao",
            AlterarModulosUsar: "Aplicação.AlterarModulosUsar",
            AlterarModulosUsarMostrar: "Aplicação.AlterarModulosUsarMostrar",
            AvisosPersonalizados: "Aplicacao.AvisosPersonalizados",
            EditarAvisosPersonalizados: "Aplicacao.EditarAvisosPersonalizados",
            AvisosSubscricao: "Aplicacao.AvisosPersonalizados.Subscricao",
            EditarAvisosSubscricao: "Aplicacao.AvisosPersonalizados.EditarSubscricao",
            ActivarAvisosSQLNotification: "Aplicacao.AvisosPersonalizados.ActivarSQLNotification",
            AvisosPersonalizadosConsultas: "Aplicacao.AvisosPersonalizados.Consultas",
            ResetCache: "Aplicacao.ResetCache",
            HistoricoEstados: "Aplicacao.HistoricoEstados",
            ComposicaoArtigoMovimento: "Aplicacao.ComposicaoArtigoMovimento",
            ShowWebSite: "StartupModule.UrlView",
            ShowWebSiteBrowser: "StartupModule.ShowWebSiteBrowser",
            EmiteAnexoDigital: "EmiteAnexoDigital",
            SerieDescontinuada: "SerieDescontinuada",
            EditarPTCategorias: "Aplicacao.EditarPTCategorias",
            ParamExercicios: "Parametrizacoes.Exercicios",
            OrdersReservedQuantities: "Aplicacao.EncomendasQuantidadesReservadas"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoHTML', {
        statics: {
            ShowConsultas: "#/Client/Queries/Queries.html",
            ShowDashBoards: "#MAINPAGE",
            ShowLembretes: "#REMINDERS",
            ChangeRelations: "#CHANGERELATIONS",
            ResponseCitizenCard: "#RESPONSECITIZENCARD",
            PrintPdf: "#PRINTPDF",
            ShowEditDashBoards: "#/Client/Admin/DashBoards/DashBoards.html",
            ShowEditWidgets: "#/Client/Admin/Widgets/Widgets.html",
            ShowViewerPDF: "#/Client/Generic/PdfViewer/Viewer.html",
            ShowAuditing: "#/Client/Admin/Logs/Logs.html",
            ShowAuditingConfig: "#/Client/Admin/Logs/ConfigLogs.html",
            ShowEditCommandsJS: "#/Client/Queries/CommandsJS/CommandsJS.html",
            ShowEditTranslator: "#/Client/Admin/Translator/Translator.html",
            ShowQueriesEditor: "#/Client/Admin/QueriesEditor/QueriesEditor.html",
            ShowQueriesGroupEditor: "#/Client/Admin/QueriesEditor/GroupEditor.html",
            ShowEditRegime: "#/Client/Tables/HR/Regimes/EditRegime.html",
            ShowOrganism: "#/Client/Tables/HR/Organism/EditOrganism.html",
            ShowMinimumWage: "#/Client/Tables/HR/MinimumWages/EditMinimumWage.html",
            ShowPayments: "#/Client/Movs/HR/Payments/EditPayments.html",
            ShowReprintingReceipt: "#/Client/Listings/HR/ReprintingReceipts/EditReprintingReceipt.html",
            ShowEditDeductions: "#/Client/Tables/HR/Deductions/EditDeductionRetention.html",
            ShowEditParamRates: "#/Client/Tables/HR/ParamRate/EditParamRates.html",
            ShowBatchPayments: "#/Client/Movs/HR/BatchPayments/EditBatchPayments.html",
            ShowEditMarketingLists: "#/Client/Tables/CRM/Marketing/EditMarketingLists.html",
            ShowEditMarketingCampaigns: "#/Client/Tables/CRM/Marketing/EditCampaigns.html",
            ShowEditStates: "#/Client/Tables/CRM/Generic/EditStates.html",
            ShowEditCampaignTypes: "#/Client/Tables/CRM/Generic/EditCampaignTypes.html",
            ShowEditModels: "#/Client/Tables/CRM/Marketing/EditModels.html",
            ShowEditSalesTarget: "#/Client/Tables/Commercial/Commissions/EditSalesTarget.html",
            ShowCommissionsProcessing: "#/Client/Movs/Commercial/Commissions/Processing/Processing.html",
            ShowCommissionsUpdate: "#/Client/Movs/Commercial/Commissions/Update/Update.html",
            ShowCteEFaturaConfig: "#/Client/Utils/Accounting/EFatura/Config/Config.html",
            ShowCteEFaturaImport: "#/Client/Utils/Accounting/EFatura/Import/Import.html",
            ShowCteTaxonomies: "#/Client/Utils/Accounting/Taxonomies/Taxonomies.html",
            ShowCteConformityDiag: "#/Client/Utils/Accounting/ConformityDiag/ConformityDiag.html",
            ShowEditConcepts: "#/Client/Tables/HR/Concepts/EditConcept.html",
            ShowLicenseCategory: "#/Client/Tables/ATG/LicenseCategory/EditLicenseCategory.html",
            ShowConfigProfilesDataCol: "#/Client/Tables/Commercial/Treasury/EditConfigProfilesDataCollection.html",
            ShowRightsConvention: "#https://v18update.eticadata.com/convention/",
            ShowEditLateralidade: "#/Client/Tables/eMedical/PrescriptionMCDT/Lateralidade/EditLateralidade.html",
            ShowEditObjectMCDT: "#/Client/Tables/eMedical/PrescriptionMCDT/Object/EditObjectMCDT.html",
            ShowEditAgreedMCDT: "#/Client/Tables/eMedical/PrescriptionMCDT/AgreedMCDT/EditAgreedMCDT.html",
            ShowEditPrescriptionMCDT: "#/Client/Movs/eMedical/PrescriptionMCDT/EditMCDTPrescription.html",
            ShowDashboardsGOP: "#/Client/Tables/GOP/Dashboards.html",
            ShowMCDTAgreeProcessingProduct: "#/Client/Tables/eMedical/PrescriptionMCDT/AgreedMCDT/ProcessingProduct/ProcessingProduct.html",
            ShowEditDLRestrition: "#/Client/Tables/eMedical/MedicalCertificates/DLRestrition/EditDLRestrition.html",
            ShowEditMCDTCertificate: "#/Client/Movs/eMedical/MedicalCertificates/EditMedicalCertificate.html",
            ShowEditTaxonomies: "#/Client/Tables/Accounting/Taxonomies/EditTaxonomies.html",
            ShowRegisterBond: "#/Client/Utils/HR/WebServices/BasePlatformSS/RegisterBond/RegisterBond.html",
            ShowConsultWorkers: "#/Client/Utils/HR/WebServices/BasePlatformSS/ConsultWorkers/ConsultWorkers.html",
            ShowCompensationFunds: "#/Client/Utils/HR/WebServices/CompensationFunds/CompensationFunds.html",
            ShowRepairChecklists: "#/Client/Tables/ATG/Checklists/EditChecklist.html"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoHTML.Tables');
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoHTML.Tables.Taxes', {
        statics: {
            EditFiscalTaxes: "#/Client/Tables/Taxes/FiscalTaxes/EditFiscalTax.html",
            EditTaxGroups: "#/Client/Tables/Taxes/TaxGroups/EditTaxGroup.html",
            EditTaxRegion: "#/Client/Tables/Taxes/TaxRegions/EditTaxRegion.html",
            EditTax: "#/Client/Tables/Taxes/Taxes/EditTax.html"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoHTML.Utils');
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoHTML.Utils.Export', {
        statics: {
            EditExportProfile: "#/Client/Export/EditExportProfile.html",
            ExtractProfile: "#/Client/Export/ExtractProfile.html"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoHTML.Utils.Labels', {
        statics: {
            Configuration: "#/Client/Utils/Commercial/Labels/ConfigLabels.html",
            PrintPreview: "#PRINTPREVIEWLABEL"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAplicacaoWEB', {
        statics: {
            ConsultasPersonalizadas: "QueriesModule.ConsultasView.Show()",
            TerminarSessao: "Shell.Logout.Execute()",
            ShowWebSite: "StartupModule.UrlView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAPVMapas', {
        statics: {
            RelatorioTecnicos: "Apv.Mapas.RelatorioTecnicos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAPVMov', {
        statics: {
            EditarReparacao: "APV.Movimentos.EditarReparacao",
            EditarRecepcao: "APV.Movimentos.EditarRecepcao",
            EditarOrcamento: "APV.Movimentos.EditarOrcamento",
            EditarEntregaFactura: "APV.Movimentos.EditarEntregaFactura",
            EmitirDocAPV: "APV.Movimentos.DocumentosAssistencias",
            HistoricoEstados: "APV.Movimentos.HistoricoEstados",
            PedidoIntegrar: "APV.Movimentos.PedidoIntegrar",
            PedidoGerar: "APV.Movimentos.PedidoGerar",
            OrcamentoIntegrar: "APV.Movimentos.OrcamentoIntegrar",
            OrcamentoGerar: "APV.Movimentos.OrcamentoGerar",
            ReparacaoIntegrar: "APV.Movimentos.ReparacaoIntegrar",
            ReparacaoGerar: "APV.Movimentos.ReparacaoGerar",
            OrcamentoRepete: "APV.Movimentos.OrcamentoRepete",
            ReparacaoRepete: "APV.Movimentos.ReparacaoRepete",
            EditarLinhasReparacao_MovAux: "APV.Movimentos.LinhasReparacoes_MovAux",
            GerarServicosInternos: "APV.Movimentos.GerarServicosInternos",
            ActualizacaoRMA: "APV.Movimentos.ActualizacaoRMA",
            OpenedRepairs: "APV.Movimentos.OpenedRepairs",
            ReimpressaoDocumentos: "APV.Movimentos.ReimpressaoDocumentos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAPVTab', {
        statics: {
            EditarTiposDocumsAPV: "Tabelas.APV.TiposDocumentos",
            EditarListasVerificacao: "Tabelas.APV.ListasVerificacao",
            EditarTabelasMarcas: "Tabelas.APV.Marcas",
            EditarTabelasModelos: "Tabelas.APV.Modelos",
            EditarTabelasSituacoes: "Tabelas.APV.Situacoes",
            EditarTabelasComponentes: "Tabelas.APV.Componentes",
            EditarTabelasTiposComponentes: "Tabelas.APV.TiposComponentes",
            EditarListasIntervencoes: "Tabelas.APV.ListasIntervencoes"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAPVUtilitarios', {
        statics: {
            SubstChaveEquipamento: "Apv.Utilitarios.SubstChaveEquipamento"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAPVWEB', {
        statics: {
            EditarTabelasTiposEquipamentos: "APVModule.TiposEquipamentosView.Show()",
            EditarTabelasEquipamentos: "APVModule.EquipamentosAPVView.Show()",
            EditarTabelasGravidades: "APVModule.GravidadesView.Show()",
            EditarTabelasNiveisSLA: "APVModule.NiveisSLAView.Show()",
            EditarTabelasAssuntos: "APVModule.AssuntosView.Show()",
            EditarTabelasTipos: "APVModule.TiposView.Show()",
            EditarTabelasClientesVD: "APVModule.ClientesVDView.Show()",
            EditarTabelasTiposSolucao: "APVModule.TiposSolucaoView.Show()",
            EditarTabelasCausasProblemas: "APVModule.CausasProblemasView.Show()",
            EditarTabelasMeiosApoio: "APVModule.MeiosApoioView.Show()",
            EditarTabelasSolucoes: "APVModule.SolucoesView.Show()",
            PesquisaEquipamentoMovimentos: "APVModule.PesquisaEquipMovView.Show()",
            PesquisaSolucoes: "APVModule.PesquisaSolucoesView.Show()",
            EditarMarcacao: "APVModule.MarcacoesView.Show()",
            EditarInstalacao: "APVModule.InstalacoesView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsArtigos', {
        statics: {
            EditarIdomas: "Tabelas.Artigos.Idiomas",
            EditarArmazens: "Tabelas.Artigos.Armazens",
            EditarCategorias: "Tabelas.Artigos.Categorias",
            EditarUnidades: "Tabelas.Artigos.UnidadesMedida",
            EditarTpFamilias: "Tabelas.Artigos.TiposFamilias",
            EditarFamilias: "Tabelas.Artigos.Familias",
            EditarArtigos: "Tabelas.Artigos.Artigos",
            EditarArtigosEstudoPreco: "Tabelas.Artigos.EstudoPreco",
            EditarGrelhasArtigos: "Tabelas.Artigos.Grelhas",
            EditarTpArtigos: "Tabelas.Artigos.TiposArtigos",
            EditarGruposArtigosAlternativos: "Tabelas.Artigos.GruposArtigosAlternativos",
            DescontosTpArtigoTpsEntidade: "DescontosTpArtigoTpsEntidade",
            DescontosTpEntidadeTpsArtigo: "DescontosTpEntidadeTpsArtigo",
            EditarDescIdiomas: "DescIdiomas",
            ArtigoFiltro: "Tabelas.Artigos.ArtigoFiltro",
            FiltrarArtigos: "FiltrarArtigos",
            EditarReferencias: "Tabelas.Artigos.Referencias",
            EditarDescVolVendas: "Tabelas.Artigos.DescontosVolVendas",
            EditarPromocoes: "Tabelas.Artigos.Promocoes",
            EditTypeLinkCategory: "Tabelas.Artigos.ContasCategorias",
            EditarCategoriasLigCte: "Tabelas.Artigos.CategoriasLigCte",
            EditarArtigosLotes: "Tabelas.Artigos.ArtigosLotes",
            EditarPromocoesAddLinhas: "EditarPromocoesAddLinhas",
            EditProductsCatalogs: "Tabelas.Artigos.CatalogosArtigos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAutoGest', {
        statics: {
            EditarEquipamentos: "Tabelas.AutoGest.Equipamentos",
            EditarCores: "Tabelas.AutoGest.Cores",
            EditarCombustiveis: "Tabelas.AutoGest.Combustiveis",
            EditarTiposCustos: "Tabelas.AutoGest.TiposCustos",
            EditarTiposViaturas: "Tabelas.AutoGest.TiposViaturas",
            EditarTiposDespesas: "Tabelas.AutoGest.TiposDespesas",
            EditarViaturasStands: "Tabelas.Stands.Viaturas",
            EditarViaturasHistSituacoes: "Tabelas.Stands.ViaturasHistSituacoes",
            EditarTabelasMarcas: "Tabelas.AutoGest.Marcas",
            EditarTabelasModelos: "Tabelas.AutoGest.Modelos",
            EditarNiveisEquipamento: "Tabelas.AutoGest.NiveisEquipamento",
            EditarVersoes: "Tabelas.AutoGest.Versoes",
            EditarTabelasGarantias: "Tabelas.AutoGest.Garantias",
            EditarTiposDocumsOficinas: "Tabelas.Oficinas.TiposDocumentos",
            EditarSeccoesOficinas: "Tabelas.Oficinas.Seccoes",
            EditarTiposDocumentacao: "Tabelas.AutoGest.TiposDocumentacao",
            EditarDocumentacao: "Tabelas.AutoGest.Documentacao",
            EditarTiposProcessos: "Tabelas.AutoGest.TiposProcessos",
            EditarSituacoesDocumentacao: "Tabelas.AutoGest.SituacoesDocumentacao",
            EditarEstadosProcessos: "Tabelas.AutoGest.EstadosProcessos",
            EditarDanos: "Tabelas.Oficinas.Danos",
            EditarImpostoAutomovel: "Tabelas.AutoGest.ImpostoAutomovel",
            EditarViaturasHistLocalizacoes: "Tabelas.Stands.ViaturasHistLocalizacoes",
            EditarDocsEliminadosOficinas: "DocumentosEliminados",
            EditarListasVerificacao: "Tabelas.AutoGest.ListasVerificacao",
            EditarListasIntervencoes: "Tabelas.AutoGest.ListasIntervencoes",
            EditarTiposSeguros: "Tabelas.AutoGest.TipoSeguros",
            EditarTiposClasses: "Tabelas.AutoGest.TiposClasses",
            EditarTiposValores: "Tabelas.AutoGest.TipoValores",
            EditarTabelasPrecos: "Tabelas.AutoGest.TabelaPrecos",
            EditarTabelasSituacoes: "Tabelas.AutoGest.Situacoes",
            EditarTabelasComponentes: "Tabelas.Oficinas.Componentes",
            EditarTabelasTiposComponentes: "Tabelas.Oficinas.TiposComponentes"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAutogestExtended', {
        statics: {
            GTMotiveGTConfiguration: "Autogest.Extended.GTMotiveConnector.AbrirConfiguracoes",
            GTMotiveGTAuthentication: "Autogest.Extended.GTMotiveConnector.AbrirGTAuthentication",
            GTMotive_GO_Vehicle: "Autogest.Extended.GTMotiveConnector.GTMotiveGOVehicle",
            GTMotive_GTE_Budget: "Autogest.Extended.GTMotiveConnector.GTMotiveGTEBudget",
            GTMotive_GetVehicleInfo: "Autogest.Extended.GTMotiveConnector.GTMotiveGetVehicleInfo"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsAutoGestWEB', {
        statics: {
            EditarTabelasFrotas: "AutoModule.FrotasView.Show()",
            EditarTabelasGrupoCustoProveito: "AutoModule.GruposCustosView.Show()",
            EditarTabelasTiposDocumentosFrotas: "AutoModule.TiposDocumsFrotasView.Show()",
            EditarTabelasFornecedores: "AutoModule.FornecedoresView.Show()",
            EditarTabelasEquipamentos: "AutoModule.EquipamentosView.Show()",
            EditarTabelasNiveisEquipamento: "AutoModule.NiveisEquipamentoView.Show()",
            EditarTabelasTiposCustos: "AutoModule.TiposCustosView.Show()",
            EditarTabelasTiposDespesas: "AutoModule.TiposDespesasView.Show()",
            EditarTabelasTiposSeguros: "AutoModule.TiposSegurosView.Show()",
            EditarTabelasCondutores: "#/Client/Tables/ATG/Driver/EditDriver.html",
            EditarTabelasCores: "AutoModule.CoresView.Show()",
            EditarTabelasPlanosManutencao: "AutoModule.PlanosManutencaoView.Show()",
            EditarTabelasDanos: "AutoModule.DanosView.Show()",
            EditarTabelasTiposClasses: "AutoModule.TiposClassesView.Show()",
            EditarTabelasCombustiveis: "AutoModule.CombustiveisView.Show()",
            EditarTabelasLocalizacoes: "AutoModule.LocalizacoesView.Show()",
            EditarTabelasTiposViaturas: "AutoModule.TiposViaturasView.Show()",
            EditarTabelasTiposItinerarios: "AutoModule.TiposItinerariosView.Show()",
            EditarViagens: "AutoModule.ViagensView.Show()",
            EditarSinistros: "AutoModule.SinistrosView.Show()",
            EditarImpCustosProveitos: "AutoModule.ImpCustosProveitosView.Show()",
            EditarImpCustosOperacionais: "AutoModule.ImpCustosProveitosOpView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsCommonWEB', {
        statics: {
            EditarTabelasMarcas: "CommonModule.MarcasView.Show()",
            EditarTabelasModelos: "CommonModule.ModelosView.Show()",
            EditarTabelasVersoes: "CommonModule.VersoesView.Show()",
            EditarTabelasDepartamentos: "CommonModule.DepartamentosView.Show()",
            EditarTabelasListasIntervencoes: "CommonModule.ListasIntervencoesView.Show()",
            EditarTabelasTiposActividades: "CommonModule.TiposActividadesView.Show()",
            EditarTabelasTiposComponentes: "CommonModule.TiposComponentesView.Show()",
            EditarTabelasComponentes: "CommonModule.ComponentesView.Show()",
            SelectedContactsWeb2SL: "CommonModule.SelectedContactsWeb2SL.Execute()",
            EditarTabelasSituacoes: "AutoModule.SituacoesView.Show()",
            EditarTabelasGarantias: "AutoModule.GarantiasView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsCte', {
        statics: {
            EditarTabelas: "TabelasCte.EditarTabelas",
            EditarCentrosCustos: "TabelasCte.Contabilidade.CentrosCusto",
            EditarFichasReparticao: "TabelasCte.Contabilidade.FichasReparticao",
            EditarTiposDocumento: "TabelasCte.Documentos.Tipos",
            PlanosOperacionais: "TabelasCte.PlanosOperacionais"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsCteMapas', {
        statics: {
            MapasEstadoConta: "Ctep.Mapas.EstadoConta",
            MapasListagemDiarios: "Ctep.Mapas.Listagem.Diarios",
            MapasListagemPlano: "Ctep.Mapas.Listagem.Plano",
            MapasExtractosContas: "Ctep.Mapas.Extractos.Contas",
            MapasExtractosCCusto: "Ctep.Mapas.Extractos.CCusto",
            MapasExtractosFluxos: "Ctep.Mapas.Extractos.FluxosCaixa",
            MapasExtractosDiversos: "Ctep.Mapas.Extractos.Diversos",
            MapasBalancetesContas: "Ctep.Mapas.Balancetes.Contas",
            MapasBalancetesCCusto: "Ctep.Mapas.Balancetes.CCusto",
            MapasBalancetesFluxos: "Ctep.Mapas.Balancetes.Fluxos",
            MapasOrcamentos: "Ctep.Mapas.Orcamentos",
            MapasConfTerceiros: "Ctep.Mapas.ConfTerceiros",
            MapasConfigMapas: "Ctep.Mapas.Gestao.Mapas",
            MapasConfig: "Ctep.Mapas.Gestao.Configurador",
            MapasConfigMenus: "Ctep.Mapas.Gestao.EdicaoMenus",
            MapasLivrosSeladosPreparacao: "Ctep.Mapas.LivrosSelados.Preparacao",
            MapasLivrosSeladosPreparacaoAux: "Ctep.Mapas.LivrosSelados.Preparacao.Aux",
            MapasLivrosSeladosEmissao: "Ctep.Mapas.LivrosSelados.Emissao",
            MapasLivrosSeladosEmissaoAux: "Ctep.Mapas.LivrosSelados.Emissao.Aux",
            MapasRetFonteEmissao: "Ctep.Mapas.RetFonte.Emissao",
            MapasRetFonteParametrizacao: "Ctep.Mapas.RetFonte.Parametrizacao",
            MapasABDR: "Ctep.Mapas.ABDR",
            MapasEstatisticosEmissao: "Ctep.Mapas.Estatisticos.Emissao",
            MapasEstatisticosParametrizacao: "Ctep.Mapas.Estatisticos.Parametrizacao",
            MapasGraficos: "Ctep.Mapas.Graficos",
            MapasConfigMapasFloat: "Ctep.Mapas.Gestao.MapasFloat",
            MapasConfigMapasCabRod: "Ctep.Mapas.Gestao.MapasCabRod",
            MapasConfigMapasFormulas: "Ctep.Mapas.Gestao.MapasFormulas",
            MapasConfigMapasMultiEmp: "Ctep.Mapas.Gestao.MapasMultiEmp",
            MapasABDRNotas: "Ctep.Mapas.ABDRNotas",
            MapasABDREstilos: "Ctep.Mapas.ABDREstilos",
            MapasABDRDialogo: "Ctep.Mapas.ABDRDialogo",
            MapasABDRParamTab: "Ctep.Mapas.ABDRParamTab",
            MapasCalcImposto: "Ctep.Mapas.CalcImposto",
            MapasModelosOficiaisMultiEmp: "Ctep.Mapas.ModelosOficiaisMultiEmp",
            MapasModelosOficiaisMultiEmpFiltro: "Ctep.Mapas.ModelosOficiaisMultiEmpFiltro",
            MapasModelosOficiaisMultiEmpShow: "Ctep.Mapas.ModelosOficiaisMultiEmpShow",
            MapasModelosOficiaisMultiEmpClose: "Ctep.Mapas.ModelosOficiaisMultiEmpClose",
            MapasModelo30: "Ctep.Mapas.Modelo30",
            MapasEditorRelatorio: "Ctep.Mapas.EditorRelatorio",
            MapasEditorRelatorioVariaveis: "Ctep.Mapas.EditorRelatorioVariaveis",
            MapasConfRetencaoIRS: "Ctep.Mapas.ConfRetencaoIRS",
            MapasDeclaracoesRendimentosCTE: "Ctep.Mapas.DeclaracoesRendimentosCTE",
            MapasIRSDeclAnuModelo10CTE: "Ctep.Mapas.IRSDeclAnuModelo10CTE"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsCteMovim', {
        statics: {
            MovimentosIntroducao: "Ctep.Movimentos.Introducao",
            MovimentosReconciliacao: "Ctep.Movimentos.Reconciliacao",
            MovimentosExigibilidadeIva: "Ctep.Movimentos.ExigibilidadeIVA",
            MovimentosApurIva: "Ctep.Movimentos.ApurIVA",
            MovimentosApurIvaParametrizacao: "Ctep.Movimentos.ApurIVA.Parametrizacao",
            MovimentosApurExis: "Ctep.Movimentos.ApurExist",
            MovimentosApurExisParametrizacao: "Ctep.Movimentos.ApurExist.Parametrizacao",
            MovimentosApurRes: "Ctep.Movimentos.ApurRes",
            MovimentosApurResParametrizacao: "Ctep.Movimentos.ApurRes.Parametrizacao",
            MovimentosPassagemSaldos: "Ctep.Movimentos.PassagemSaldos",
            MovimentosPesquisa: "Ctep.Movimentos.Pesquisa",
            MovimentosApurExisValor: "Ctep.Movimentos.ApurExistValor",
            OrcamentosContas: "Ctep.Orcamentos.Contas",
            OrcamentosCentrosCusto: "Ctep.Orcamentos.CentrosCusto",
            OrcamentosContasCentrosCusto: "Ctep.Orcamentos.ContasCentrosCusto",
            OrcamentosCentrosCustoContas: "Ctep.Orcamentos.CentrosCustoContas",
            MovimentosApurIvaParametrizacaoModal: "Ctep.Movimentos.ApurIva.ParametrizacaoModal",
            MovimentosApurResParametrizacaoModal: "Ctep.Movimentos.ApurRes.ParametrizacaoModal",
            MovimentosApurExistParametrizacaoModal: "Ctep.Movimentos.ApurExisParametrizacaoModal",
            Calculator: "Ctep.Movimentos.Calculator"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsCteUtilitarios', {
        statics: {
            UtilReconstDados: "Ctep.Util.ReconstDados",
            UtilGerarContasTerc: "Ctep.Util.GerarContasTerc",
            UtilProcuraSubst: "Ctep.Util.ProcuraSubst",
            UtilEncerramentoMeses: "Ctep.Util.EncerramentoMeses",
            UtilExportacaoMovimentos: "Ctep.Util.Exportacao.Movimentos",
            UtilExportacaoPlanos: "Ctep.Util.Exportacao.Planos",
            UtilImportacaoMovimentos: "Ctep.Util.Importacao.Movimentos",
            UtilImportacaoPlanos: "Ctep.Util.Importacao.Planos",
            UtilDefNumDiarios: "Ctep.Util.DefNumDiarios",
            UtilRenumMovDiarios: "Ctep.Util.RenumMovDiarios",
            UtilImportacaoSaftCte: "Ctep.Util.ImportadorSAFT",
            UtilDiagnosticosIVA: "Ctep.Util.Diagnosticos.IVA",
            UtilDiagnosticosRecap: "Ctep.Util.Diagnosticos.Recap",
            UtilDiagnosticosFluxos: "Ctep.Util.Diagnosticos.Fluxos",
            UtilDiagnosticosCentrosCusto: "Ctep.Util.Diagnosticos.CentrosCusto",
            UtilOpMultiEmpresa: "Ctep.Util.OpMultiEmpresa",
            UtilOpMultiEmpresaPausa: "Ctep.Util.OpMultiEmpresaPausa",
            UtilActPlanos: "Ctep.Util.ActPlanos",
            UtilPlanosAltAssocContas: "Ctep.Util.PlanosAlt.AssocContas",
            UtilPlanosAltDiagPlanos: "Ctep.Util.PlanosAlt.DiagPlanos",
            UtilArquivoDigital: "Ctep.Util.ArquivoDigital",
            UtilSaldarContas: "Ctep.Util.SaldarContas",
            UtilConvercaoPOCparaSNC: "Ctep.Util.ConvercaoPOCparaSNC",
            UtilTabelaTransicaoSNC: "Ctep.Util.TabelaTransicaoSNC",
            UtilOperDesReconhecimento: "Ctep.Util.OperDesReconhecimento",
            UtilConsolidacaoParametros: "Ctep.Util.ConsolidacaoParametros",
            UtilConsolidacaoProcessamento: "Ctep.Util.ConsolidacaoProcessamento",
            UtilConvercaoPGCparaSCE: "Ctep.Util.ConvercaoPGCparaSCE",
            UtilTabelaTransicaoSCE: "Ctep.Util.TabelaTransicaoSCE",
            UtilOperDesReconhecimentoSCE: "Ctep.Util.OperDesReconhecimentoSCE",
            UtilDiagnosticosRetencaoIRS: "Ctep.Util.Diagnosticos.RetencaoIRS",
            UtilEditarPrefContasLiqPendentes: "Ctep.Util.EditarPrefContasLiqPendentes",
            UtilRemoveMovs: "Ctep.Util.RemoveMovs",
            UtilDiagnosticosPlanosOperacionais: "Ctep.Util.Diagnosticos.PlanosOperacionais",
            UtilConversaoCOLGAAPparaNIIF: "Ctep.Util.ConversaoCOLGAAPparaNIIF"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsEntidades', {
        statics: {
            EditarClientes: "Tabelas.Entidades.Clientes",
            EditarOutrosDevedores: "Tabelas.Entidades.OutrosDevedores",
            EditarFornecedores: "Tabelas.Entidades.Fornecedores",
            EditarDireccoes: "Tabelas.Entidades.Direccoes",
            EditarOutrosCredores: "Tabelas.Entidades.OutrosCredores",
            EditarVendedores: "Tabelas.Entidades.Vendedores",
            EditarLocadoras: "Tabelas.Entidades.Locadoras",
            EditarBancos: "Tabelas.Entidades.Bancos",
            EditarTiposContactos: "Tabelas.Entidades.TiposContacto",
            EditarTiposEntidade: "Tabelas.Entidades.TiposEntidade",
            EditarFuncionariosOfi: "Tabelas.Oficinas.Funcionarios",
            EditarOperadores: "Tabelas.Entidades.Operadores",
            EditarOperadoresWeb: "CommonModule.OperadoresView.Show()",
            EditarTecnicosWeb: "CommonModule.TecnicosView.Show()",
            EditarEstabelecimentosEnsino: "Tabelas.Entidades.EstabelecimentosEnsino",
            EditarEstabelecimentos: "Tabelas.Entidades.Estabelecimentos",
            EditarCondutores: "Tabelas.AutoGest.Condutores",
            EditarSeguradoras: "Tabelas.AutoGest.Seguradoras",
            EditarCategoriaEntidades: "Tabelas.Entidades.CategoriaEntidades",
            Doctor: "Tables.Entitys.Doctor",
            DoctorDeclarations: "Tables.Entitys.DoctorDeclarations",
            CustomerRFI: "Tables.Entitys.CustomerRFI",
            CustomerRFITables: "Tables.Entitys.CustomerRFITables",
            EditarClientesModal: "Tabelas.Entidades.ClientesModal",
            EditarFornecedoresModal: "Tabelas.Entidades.FornecedoresModal",
            EditarOutrosDevedoresModal: "Tabelas.Entidades.OutrosDevedoresModal",
            EditarOutrosCredoresModal: "Tabelas.Entidades.OutrosCredoresModal",
            EditarVendedoresModal: "Tabelas.Entidades.VendedoresModal"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsERM', {
        statics: {
            EditarContactos: "CRMModule.ContactosView.Show()",
            EditarClientesPotenciais: "CRMModule.ClientesPotenciais.Show()",
            EditarActividades: "CRMModule.ActividadeView.Show()",
            EditarAgenda: "CRMModule.AgendaContactividadeView.Show()",
            EditarAgendaPorOficinas: "CRMModule.AgendaContactividadeView.Execute()",
            EditarProcessoNegocio: "CRMModule.ProcessoNegocioView.Show()",
            EditarAgendaPorEntidade: "CRMModule.AgendaContactividadePorEntidade.Execute()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsFormacaoMov', {
        statics: {
            EditarFuncionariosCompetencias: "TrainingModule.FuncionariosCompetenciasView.Show()",
            EditarAccoesDeFormacao: "TrainingModule.AccoesFormacaoView.Show()",
            EditarCursosAgendar: "TrainingModule.WizardCursosFuncionariosView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsFormacaoTab', {
        statics: {
            EditarCompetenciasDeCursos: "TrainingModule.CompetenciasCursosView.Show()",
            EditarCursos: "TrainingModule.CursosView.Show()",
            EditarEntidades: "TrainingModule.EntidadesFormadorasView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGCEMapas', {
        statics: {
            DiarioVendas: "Gcep.Mapas.POS.DiarioVendas",
            ArtigosADevolver: "Gcep.Mapas.POS.ArtigosADevolver",
            AnaliseArtigosADevolver: "Gcep.Mapas.POS.AnaliseArtigosADevolver",
            MapasCaixa: "Gcep.Mapas.POS.MapasCaixa",
            Orcamentos: "Gcep.Mapas.Orcamentos",
            ExtractosENC: "Gcep.Mapas.Encomendas.ExtractosENC",
            AnaliseENC: "Gcep.Mapas.Encomendas.AnaliseENC",
            ExtractosCMP: "Gcep.Mapas.Compras.ExtractosCMP",
            CMPDocConvertidos: "Gcep.Mapas.Compras.DocConvertidos",
            ComprasGlobais: "Gcep.Mapas.Compras.ComprasGlobais",
            AnaliseCMP: "Gcep.Mapas.Compras.AnaliseCMP",
            AnaliseEnargos: "Gcep.Mapas.Compras.AnaliseEnargos",
            CMPMapaIVA: "Gcep.Mapas.Compras.MapaIVA",
            ExtractosVND: "Gcep.Mapas.Vendas.ExtractosVND",
            VNDDocConvertidos: "Gcep.Mapas.Vendas.DocConvertidos",
            VNDGlobais: "Gcep.Mapas.Vendas.VNDGlobais",
            VolumeMensalVND: "Gcep.Mapas.Vendas.VolumeMensalVND",
            AnaliseVND: "Gcep.Mapas.Vendas.AnaliseVND",
            AnaliseMargensLucro: "Gcep.Mapas.Vendas.AnaliseMargensLucro",
            Racios: "Gcep.Mapas.Vendas.Racios",
            VNDMapaIVA: "Gcep.Mapas.Vendas.MapaIVA",
            MapaIEC: "Gcep.Mapas.Vendas.MapaIEC",
            MapaTransIntracomunitarias: "Gcep.Mapas.Vendas.MapaTransIntracomunitarias",
            MapaCarga: "Gcep.Mapas.Vendas.MapaCarga",
            MapaRotas: "Gcep.Mapas.Vendas.MapaRotas",
            EstatisticasGiro: "Gcep.Mapas.Vendas.EstatisticasGiro",
            LstAvencas: "Gcep.Mapas.Vendas.LstAvencas",
            ExtractosMovStk: "Gcep.Mapas.Stocks.ExtractosMovStk",
            ExtractosFolhasObra: "Gcep.Mapas.Stocks.ExtractosFolhasObra",
            ExtractosProducoes: "Gcep.Mapas.Stocks.ExtractosProducoes",
            AnaliseSTK: "Gcep.Mapas.Stocks.AnaliseSTK",
            BalanceteSTK: "Gcep.Mapas.Stocks.BalanceteSTK",
            ABCStocks: "Gcep.Mapas.Stocks.ABCStocks",
            ControloExistencias: "Gcep.Mapas.Stocks.ControloExistencias",
            AnaliseFolhasObra: "Gcep.Mapas.Stocks.AnaliseFolhasObra",
            AnaliseProducoes: "Gcep.Mapas.Stocks.AnaliseProducoes",
            ComposicaoArtigos: "Gcep.Mapas.Stocks.ComposicaoArtigos",
            LstPendentes: "Gcep.Mapas.Tesouraria.LstPendentes",
            ExtractoHistorico: "Gcep.Mapas.Tesouraria.ExtractoHistorico",
            IdadeSaldos: "Gcep.Mapas.Tesouraria.IdadeSaldos",
            IdadeMediaPag: "Gcep.Mapas.Tesouraria.IdadeMediaPag",
            AnaliseSaldos: "Gcep.Mapas.Tesouraria.AnaliseSaldos",
            BalancetesCC: "Gcep.Mapas.Tesouraria.BalancetesCC",
            LstLiq: "Gcep.Mapas.Tesouraria.LstLiq",
            LstLetras: "Gcep.Mapas.Tesouraria.LstLetras",
            DifCambiais: "Gcep.Mapas.Tesouraria.DifCambiais",
            AnaliseComissoes: "Gcep.Mapas.Tesouraria.AnaliseComissoes",
            LiqComissoes: "Gcep.Mapas.Tesouraria.LiqComissoes",
            SaldosContas: "Gcep.Mapas.Tesouraria.SaldosContas",
            ResultadosPorRubrica: "Gcep.Mapas.Tesouraria.ResultadosPorRubrica",
            AnaliseFluxosTES: "Gcep.Mapas.Tesouraria.AnaliseFluxosTES",
            Graficos: "Gcep.Mapas.Graficos",
            MapaValRecapitulativos: "Gcep.Mapas.MapaValRecapitulativos",
            IntraStat: "Gcep.Mapas.IntraStat",
            RetencaoIRS: "Gcep.Mapas.RetencaoIRS",
            MapaEcovalores: "Gcep.Mapas.MapaEcovalores",
            QuadroGestao: "Gcep.Mapas.QuadroGestao",
            ConsultasDiversas: "Gcep.Mapas.ConsultasDiversas",
            QuadroGestaoCaixa: "Gcep.Mapas.QuadroGestaoCaixa",
            RastreabilidadeArtigos: "Gcep.Mapas.RastreabilidadeArtigos",
            RastreabilidadeDocumental: "Gcep.Mapas.RastreabilidadeDocumental",
            MapaAnexo106CV: "Gcep.Mapas.MapaAnexo106CV",
            MapaAnexo106CVAct: "Gcep.Mapas.MapaAnexo106CVAct",
            MapaAnexo106RegCV: "Gcep.Mapas.MapaAnexo106RegCV",
            BPReportCOPE: "Gcep.Mapas.BPReportCOPE",
            Modelo107: "Gcep.Mapas.Modelo107"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGceMovim', {
        statics: {
            POSAberturaCaixa: "POS.AberturaCaixa",
            POSEntradaSaidasCaixa: "POS.EntradaSaidasCaixa",
            POSFechoCaixa: "POS.FechoCaixa",
            OrcamentosIntroducao: "Orcamentos.Introducao",
            OrcamentosReimpressaoDocumentos: "Orcamentos.ReimpressaoDocumentos",
            EncomendasClientesOutrosDev: "Encomendas.ClientesOutrosDev",
            EncomendasFornecedoresOutrosCred: "Encomendas.FornecedoresOutrosCred",
            EncomendasArmazens: "Encomendas.Armazens",
            EncomendasReimpressaoDocumentos: "Encomendas.ReimpressaoDocumentos",
            EncomendasGerarEncFornecedores: "Encomendas.GerarEncFornecedores",
            ComprasIntroducao: "Compras.Introducao",
            ComprasConversaoDocumentos: "Compras.ConversaoDocumentos",
            ComprasReimpressaoDocumentos: "Compras.ReimpressaoDocumentos",
            ComprasEncargos: "Compras.Encargos",
            ComprasGeracaoProcessos: "Compras.GeracaoProcessos",
            StocksIntroducao: "Stocks.Introducao",
            StocksInventarios: "Stocks.Inventarios",
            StocksReimpressaoDocumentos: "Stocks.ReimpressaoDocumentos",
            StocksFolhasObra: "Stocks.FolhasObra",
            StocksProducoes: "Stocks.Producoes",
            StocksInactivarArtigosPeriodo: "Stocks.InactivarArtigosPeriodo",
            GerarCodBarras: "Stocks.GerarCodBarras",
            VendasIntroducao: "Vendas.Introducao",
            VendasConversaoDocumentos: "Vendas.ConversaoDocumentos",
            VendasConversaoDocumentosBasic: "Vendas.ConversaoDocumentosBasic",
            VendasReimpressaoDocumentos: "Vendas.ReimpressaoDocumentos",
            VendasSatisfEncClientes: "Vendas.SatisfEncClientes",
            VendasEmissaoRecibos: "Vendas.EmissaoRecibos",
            VendasEmissaoLetras: "Vendas.EmissaoLetras",
            VendasDefinirAvencas: "Vendas.DefinirAvencas",
            VendasProcessarAvencas: "Vendas.ProcessarAvencas",
            VendasProcessarRapel: "Vendas.ProcessarRapel",
            VendasEmissaoPrecario: "Vendas.EmissaoPrecario",
            VendasTabelasPrecos: "Vendas.TabelasPrecos",
            VendasAlteracaoPrecos: "Vendas.AlteracaoPrecos",
            VendasTabelasConfigPrecos: "Vendas.TabelasConfigPrecos",
            VendasActualizacaoProcessos: "Vendas.ActualizacaoProcessos",
            VendasContratoProcessar: "ContractsModule.ProcessamentoView.Show()",
            VendasContrato: "ContractsModule.MovContratoView.Show()",
            VendasTipoContrato: "ContractsModule.TipoContratoView.Show()",
            TesourariaReimpressaoDocumentosLiquidacoes: "Tesouraria.ReimpressaoLiquidacoes",
            TesourariaReimpressaoDocumentosLiquidacoesComissoes: "Tesouraria.ReimpressaoLiqComissoes",
            TesourariaLiquidacoes: "Tesouraria.Liquidacoes",
            TesourariaEmissaoLiqDiferidas: "Tesouraria.EmissaoLiqDiferidas",
            TesourariaEfectivarLiqDiferidas: "Tesouraria.EfectivarLiqDiferidas",
            TesourariaReimpressaoLiquidacoes: "Tesouraria.ReimpressaoLiquidacoes",
            TesourariaAvisosVencimento: "Tesouraria.AvisosVencimento",
            TesourariaIntrodComissoes: "Tesouraria.IntrodComissoes",
            TesourariaLiqComissoes: "Tesouraria.LiqComissoes",
            TesourariaReimpressaoLiqComissoes: "Tesouraria.ReimpressaoLiqComissoes",
            TesourariaLetrasAReceber: "Tesouraria.LetrasAReceber",
            TesourariaLetrasAPagar: "Tesouraria.LetrasAPagar",
            TesourariaEmissaoLetras: "Tesouraria.EmissaoLetras",
            TesourariaEmissaoCheques: "Tesouraria.EmissaoCheques",
            TesourariaTransfBancarias: "Tesouraria.TransfBancarias",
            TesourariaMovPrevistos: "Tesouraria.MovPrevistos",
            TesourariaMovReais: "Tesouraria.MovReais",
            TesourariaTaloesDeposito: "Tesouraria.TaloesDeposito",
            TesourariaLevTransferencias: "Tesouraria.LevTransferencias",
            TesourariaReconcMov: "Tesouraria.ReconcMov",
            TesourariaEmitirFolhasCaixa: "Tesouraria.EmitirFolhasCaixa",
            TesourariaIntrodPendentes: "ComercialCCModule.PendentesView.Show()",
            GENDescontosPrecosClienteArtigos: "GENDescontosPrecosClienteArtigos",
            GENDescontosPrecosClienteFamilias: "GENDescontosPrecosClienteFamilias",
            GENDescontosPrecosArtigoClientes: "GENDescontosPrecosArtigoClientes",
            GENDescontosPrecosFamiliaClientes: "GENDescontosPrecosFamiliaClientes",
            GENInformacaoEscolar: "GENInformacaoEscolar",
            GENEmissaoEtiquetas: "GENEmissaoEtiquetas",
            GENNumLinhasSeries: "GENNumLinhasSeries"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGceTiposDocumentos', {
        statics: {
            TiposDocumentosOperacoesCaixa: "Tabelas.TiposDocumentos.OperacoesCaixa",
            TiposDocumentosOrcamentos: "Tabelas.TiposDocumentos.Orcamentos",
            TiposDocumentosEncomendas: "Tabelas.TiposDocumentos.Encomendas",
            TiposDocumentosCompras: "Tabelas.TiposDocumentos.Compras",
            TiposDocumentosStocks: "Tabelas.TiposDocumentos.Stocks",
            TiposDocumentosVendas: "Tabelas.TiposDocumentos.Vendas",
            TiposDocumentosLiquidacoes: "Tabelas.TiposDocumentos.Liquidacoes",
            TiposDocumentosLetras: "Tabelas.TiposDocumentos.Letras",
            TiposDocumentosSeccoes: "Tabelas.TiposDocumentos.Seccoes",
            TiposDocumentosFiliais: "Tabelas.TiposDocumentos.Filiais",
            TiposDocumentosLigCte: "Tabelas.TiposDocumentos.LigCte",
            EditarAnexo: "Tabelas.TiposDocumentos.Anexo",
            EditarSituacoesAnexo: "Tabelas.TiposDocumentos.SituacoesAnexo",
            EditarTiposAnexo: "Tabelas.TiposDocumentos.TiposAnexo",
            SeriesDocumentos: "Eticadata.Tables.SerieNumber"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGceUtil', {
        statics: {
            RecalcStkCustos: "Gcep.Utilitarios.RecalcStkCustos",
            RecalcRetencaoIRS: "Gcep.Utilitarios.RecalcRetencaoIRS",
            UtilConfigDocs: "Gcep.Utilitarios.ConfigDocs",
            DocsElectronicos: "Gcep.Utilitarios.DocsElectronicos",
            UtilActualizaEcovalores: "Gcep.Utilitarios.ActualizaEcovalores",
            EtiqArtigosEmissao: "Gcep.Utilitarios.EtiqArtigos.Emissao",
            EtiqArtigosConfig: "Gcep.Utilitarios.EtiqArtigos.Configuracao",
            EtiqEntidadesEmissao: "Gcep.Utilitarios.EtiqEntidades.Emissao",
            EtiqEntidadesConfig: "Gcep.Utilitarios.EtiqEntidades.Configuracao",
            EtiqEmissao: "Gcep.Utilitarios.EtiqEmissao",
            EtiqImprimir: "Gcep.Utilitarios.EtiqImprimir",
            LstArtigosEmissao: "Gcep.Utilitarios.LstArtigos.Emissao",
            LstArtigosConfig: "Gcep.Utilitarios.LstArtigos.Configuracao",
            UtilCtbDiagnosticoON_Line: "Gcep.Utilitarios.CtbDiagnosticoON_Line",
            UtilCtbDiagnosticoOFF_Line: "Gcep.Utilitarios.CtbDiagnosticoOFF_Line",
            UtilCtbExportacao: "Gcep.Utilitarios.CtbExportacao",
            UtilAutoPreVendaExportacao: "Gcep.Utilitarios.AutoPreVenda.Exportacao",
            UtilAutoPreVendaImportacao: "Gcep.Utilitarios.AutoPreVenda.Importacao",
            UtilIntegracaoDados: "Gcep.Utilitarios.IntegracaoDados",
            UtilIntegracaoDadosExecutarPerfis: "Gcep.Utilitarios.IntegracaoDados.ExecutarPerfis",
            UtilIntegracaoDadosHistorico: "Gcep.Utilitarios.IntegracaoDados.Historico",
            UtilSAFTPT: "Gcep.Utilitarios.SAFT",
            UtilSAFTPT2010: "Gcep.Utilitarios.SAFT2010",
            UtilSAFTPT2013: "Gcep.Utilitarios.SAFT2013",
            UtilSAFTPT2742013: "Gcep.Utilitarios.SAFT2742013",
            UtilSAFTPT3022016: "Gcep.Utilitarios.SAFT3022016",
            UtilAnalisadorSAFTPT: "Gcep.Utilitarios.AnalisadorSAFT",
            UtilComunicacaoFactAT: "Gcep.Utilitarios.ComunicacaoFactAT",
            UtilComunicacaoGuiasAT: "Gcep.Utilitarios.ComunicacaoGuiasAT",
            UtilComunicacaoInventariosAT: "Gcep.Utilitarios.ComunicacaoInventariosAT",
            UtilValidaEnviaAT: "Gcep.Utilitarios.ValidaEnviaAT",
            FEMostarFicheiros: "Gcep.Utilitarios.FE.MostraFicheiro",
            FEMostraEstadoActDocs: "Gcep.Utilitarios.FE.MostraEstadoActDocs",
            FEMostraJanelaDetalhe: "Gcep.Utilitarios.FE.MostraJanelaDetalhe",
            FEMostraArtigosDesconhecidos: "Gcep.Utilitarios.FE.MostraArtigosDesconhecidos",
            UtilIntegracaoDadosOffLineExecutarPerfis: "Gcep.Utilitarios.IntegracaoDadosOffLine.ExecutarPerfis",
            UtilIntegracaoDadosOffLineHistoricoLogs: "Gcep.Utilitarios.IntegracaoDadosOffLine.HistoricoLogs",
            UtilComunicacaoGuiasATSAFT2742013: "Gcep.Utilitarios.ComunicacaoGuiasATSAFT2742013",
            UtilVndVencimIvaCaixa: "Gcep.Utilitarios.VND.IVA.Caixa",
            UtilCmpVencimIvaCaixa: "Gcep.Utilitarios.CMP.IVA.Caixa",
            UtilRecalculateCommissions: "Gcep.Utilitarios.RecalculateCommissions",
            LotsInactivateActivate: "Gcep.Utilitarios.LotsInactivateActivate"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGOP', {
        statics: {
            EditarTiposDocumentosGOP: "Tabelas.GOP.TiposDocumentos",
            EditarConcursos: "ProjectsModule.ConcursosView.Show()",
            EditarTabelasPerfisDeImportacao: "ProjectsModule.PerfisImportTarefasView.Show()",
            EditarTabelasTarefas: "ProjectsModule.TarefasView.Show()",
            EditarTabelasTiposDeConcurso: "ProjectsModule.TiposConcursoView.Show()",
            EditarTabelasTiposDeEmpreitada: "ProjectsModule.TiposEmpreitadaView.Show()",
            EditarTabelasFormaCaucao: "ProjectsModule.FormaCaucaoView.Show()",
            EditarTabelasFormaEntrega: "ProjectsModule.FormaEntregaView.Show()",
            EditarTabelasCriteriosDeAdjudicacao: "ProjectsModule.CriteriosAdjudicacaoView.Show()",
            EditarTabelasTiposdeProcesso: "ProjectsModule.TiposProcessoView.Show()",
            EditarTabelasTemplates: "ProjectsModule.TemplatesView.Show()",
            EditarTabelasEspecialidades: "ProjectsModule.EspecialidadesView.Show()",
            EditarTabelasAlvaras: "ProjectsModule.AlvaraCategoriasView.Show()",
            EditarTabelasItensCusto: "ProjectsModule.ItensCustoView.Show()",
            EditarTabelasIndicesCusto: "ProjectsModule.IndicesCustoView.Show()",
            EditarTabelasTiposData: "ProjectsModule.TiposDataView.Show()",
            EditarTabelasFormulasRevisao: "ProjectsModule.FormulasRevisaoView.Show()",
            EditarProcessos: "ProjectsModule.ProcessosView.Show()",
            EditarOrcamentos: "ProjectsModule.OrcamentosView.Show()",
            EditarProjectos: "ProjectsModule.ProjectosView.Show()",
            EditarAutosMedicaoVnd: "ProjectsModule.AutosMedicaoVndView.Show()",
            EditarAutosMedicaoPrd: "ProjectsModule.AutosMedicaoPrdView.Show()",
            EditarAutosMedicaoCmp: "ProjectsModule.AutosMedicaoCmpView.Show()",
            EditarRegistosObra: "ProjectsModule.RegistosObraView.Show()",
            EditarDistribuirRecursos: "ProjectsModule.AtribuicaoRecursosView.Show()",
            EditarModoDistribuicao: "ProjectsModule.ModoDistribuicaoView.Show()",
            EditarEmitirFatura: "ProjectsModule.WizardIssueInvoiceView.Show()",
            EditarPlanningConfiguration: "ProjectsModule.PlanningConfigurationView.Show()",
            EditarSubcontracts: "ProjectsModule.SubcontractsView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGraficos', {
        statics: {
            EmitirGrafico: "EmitirGrafico"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGrh', {
        statics: {
            EditarProfissoes: "Tabelas.Grh.Profissoes",
            EditarTiposContrato: "Tabelas.Grh.TiposContrato",
            EditarNaturezasJuridicas: "Tabelas.Grh.NaturezasJuridicas",
            EditarCategorias: "Tabelas.Grh.Categorias",
            EditarTiposExames: "Tabelas.Grh.TiposExames",
            EditarSituacoes: "Tabelas.Grh.Situacoes",
            EditarInstrRegulTrabalhos: "Tabelas.Grh.InstrRegulTrabalhos",
            EditarResultadosConsultas: "Tabelas.Grh.ResultadosConsultas",
            EditarCiclosdeTurnosRotativos: "Tabelas.Grh.CiclosdeTurnosRotativos",
            EditarAssociacoesPatronais: "Tabelas.Grh.AssociacoesPatronais",
            EditarMedicos: "Tabelas.Grh.Medicos",
            EditarHabilitacoes: "Tabelas.Grh.Habilitacoes",
            EditarSituacoesCGA: "Tabelas.Grh.SituacoesCGA",
            EditarAbonosDescontosFaltas: "Tabelas.Grh.AbonosDescontosFaltas",
            EditarTiposDocumentos: "TabelasGrh.Contabilidade.TiposDocumentos",
            EditarReparticoesFinancas: "Tabelas.Grh.ReparticoesFinancas",
            EditarSeguradoras: "Tabelas.Grh.Seguradoras",
            EditarSegurancaSocial: "Tabelas.Grh.SegurancaSocial",
            EditarSindicatos: "Tabelas.Grh.Sindicatos",
            EditarTaxasIRSEntradaEmVigor: "Tabelas.Grh.TaxasIRSEntradaEmVigor",
            EditarRegioes: "Tabelas.Grh.Regioes",
            EditarEscaloesIRS: "Tabelas.Grh.EscaloesIRS",
            EditarTurnos: "Tabelas.Grh.Turnos",
            EditarMotivosFaltas: "Tabelas.Grh.MotivosFaltas",
            EditarMotivosHorasExtras: "Tabelas.Grh.MotivosHorasExtras",
            EditarPaises: "Tabelas.Grh.Paises",
            EditarDistritos: "Tabelas.Grh.Distritos",
            EditarConcelhos: "Tabelas.Grh.Concelhos",
            EditarFreguesias: "Tabelas.Grh.Freguesias",
            EditarRubricasImpostos: "TabelasGrh.Contabilidade.RubricasImpostos",
            EditarMunicipios: "TabelasGrh.Contabilidade.Municipios",
            EditarFuncionarios: "Tabelas.Grh.Funcionarios",
            EditarFuncionariosModal: "Tabelas.Grh.FuncionariosModal",
            EditarRegioesEscaloesIRS: "Tabelas.Grh.RegioesEscaloesIRS",
            EditarTaxasRetencao: "Tabelas.Grh.TaxasRetencao",
            EditarTiposSituacoesDocumentacao: "Tabelas.Grh.TiposSituacoesDocumentacao",
            EditarTiposDespesas: "Tabelas.Grh.TiposDespesas",
            EditarDiuturnidades: "Tabelas.Grh.Diuturnidades",
            EditarDescendentes: "Tabelas.Grh.Descendentes",
            EditarDiasUteis: "Tabelas.Grh.DiasUteis",
            EditarFuncionariosTurnosRotativos: "Tabelas.Grh.FuncionariosTurnosRotativos",
            EditarFuncionariosHorasTrabalhadas: "Tabelas.Grh.FuncionariosHorasTrabalhadas",
            EditarFuncionariosRegistoPessoal: "Tabelas.Grh.FuncionariosRegistoPessoal",
            EditarFuncionariosAbonDescFixoseAbonUnit: "Tabelas.Grh.FuncionariosAbonDescFixoseAbonUnit",
            EditarOutrosAbonosDescontadosPelaFalta: "Tabelas.Grh.OutrosAbonosDescontadosPelaFalta",
            EditarTiposRemuneracao: "Tabelas.Grh.TiposRemuneracao",
            EditarTabelas: "Tabelas.Grh.EditarTabelas",
            EditarCAERU: "Tabelas.Grh.CAE.RU",
            EditarSituacao_ActividadeRU: "Tabelas.Grh.SituacaoActividade.RU",
            EditarMotivosSitActividadeRU: "Tabelas.Grh.MotivosSitActividade.RU",
            EditarMotivosFaltasRU: "Tabelas.Grh.MotivosFaltas.RU",
            EditarGrevesRU: "Tabelas.Grh.Greves.RU",
            EditarGrevesReinvindicacoesRU: "Tabelas.Grh.GrevesReinvindicacoes.RU",
            EditarGrevesResultadosRU: "Tabelas.Grh.GrevesResultados.RU",
            EditarRegimesReformaRU: "Tabelas.Grh.Regimes_Reforma.RU",
            EditarCIRSRU: "Tabelas.Grh.CIRS.RU",
            EditarRegimesReformaReduzidaRU: "Tabelas.Grh.Regimes_ReformaReduzida.RU",
            EditarCodActividadeRU: "Tabelas.Grh.CodActividade.RU",
            EditarSituacoesProfissaoRU: "Tabelas.Grh.Situacoes_Profissao.RU",
            EditarMotivosEntradasRU: "Tabelas.Grh.Motivos_Entradas.RU",
            EditarMotivosSaidasRU: "Tabelas.Grh.Motivos_Saidas.RU",
            EditarDuracaoTrabalhoRU: "Tabelas.Grh.Duracao_Trabalho.RU",
            EditarOrganizacaoTrabalhoRU: "Tabelas.Grh.Organizacao_Trabalho_RU",
            EditarMotivosHorasNRemunRU: "Tabelas.Grh.Motivos_HorasNRemun.RU",
            EditarNacionalidadesRU: "Tabelas.Grh.Nacionalidades.RU",
            EditarAccoesInformacaoRU: "Tabelas.Grh.AccoesInformacao.RU",
            EditarAccoesConsultaRU: "Tabelas.Grh.AccoesConsulta.RU",
            EditarAccoesFormacaoRU: "Tabelas.Grh.AccoesFormacao.RU",
            EditarFactRiscoFisicoRU: "Tabelas.Grh.FactRiscoFisico.RU",
            EditarMedidasPrevRiscoFisicoRU: "Tabelas.Grh.MedidasPrev_RiscoFisico.RU",
            EditarFactRiscoActividadeRU: "Tabelas.Grh.FactRiscoActividade.RU",
            EditarMedidasPrevRiscoActividadeRU: "Tabelas.Grh.MedidasPrev_RiscoActividade.RU",
            EditarFactRiscoPsicOrgRU: "Tabelas.Grh.FactRiscoPsicOrg.RU",
            EditarMedidasPrevRiscoPsicOrgRU: "Tabelas.Grh.MedidasPrev_RiscoPsicOrg.RU",
            EditarFactRiscoSegSaudeRU: "Tabelas.Grh.FactRiscoSegSaude.RU",
            EditarMedidasPrevRiscoSegSaudeRU: "Tabelas.Grh.MedidasPrev_RiscoSegSaude.RU",
            EditarExamesMedicosRU: "Tabelas.Grh.ExamesMedicos.RU",
            EditarExamesMedicosFactorRiscoRU: "Tabelas.Grh.ExamesMedicos_FactorRisco.RU",
            EditarVacinasRU: "Tabelas.Grh.Vacinas.RU",
            EditarActividadeDesenvolvidaRU: "Tabelas.Grh.ActividadeDesenvolvida.RU",
            EditarEINECSRU: "Tabelas.Grh.EINECS.RU",
            EditarMencaoRiscoRU: "Tabelas.Grh.MencaoRisco.RU",
            EditarMedidasPrevRiscoQuimicoRU: "Tabelas.Grh.MedidasPrev_RiscoQuimico.RU",
            EditarFactRiscoBiologicoRU: "Tabelas.Grh.FactRiscoBiologico.RU",
            EditarMedidasPrevRiscoBiologicoRU: "Tabelas.Grh.MedidasPrev_RiscoBiologico.RU",
            EditarFactRiscoDoencasRU: "Tabelas.Grh.FactRiscoDoencas.RU",
            EditarDoencasRU: "Tabelas.Grh.Doencas.RU",
            EditarPaisesRU: "Tabelas.Grh.Paises.RU",
            EditarFormacaoNivelQualificacaoRU: "Tabelas.Grh.Formacao_NivelQualificacao.RU",
            EditarFormacaoTipoCertDiplomaRU: "Tabelas.Grh.Formacao_TipoCertDiploma.RU",
            EditarFormacaoEntidadeRU: "Tabelas.Grh.Formacao_Entidade.RU",
            EditarFormacaoHorariosRU: "Tabelas.Grh.Formacao_Horarios.RU",
            EditarFormacaoIniciativaRU: "Tabelas.Grh.Formacao_Iniciativa.RU",
            EditarFormacaoModalidadeRU: "Tabelas.Grh.Formacao_Modalidade.RU",
            EditarFormacaoPeriodoRefRU: "Tabelas.Grh.Formacao_PeriodoRef.RU",
            EditarFormacaoSitFaceFrequenciaRU: "Tabelas.Grh.Formacao_SitFaceFrequencia.RU",
            EditarFormacaoAreaRU: "Tabelas.Grh.Formacao_Area.RU",
            EditarPrestadorServicosRU: "Tabelas.Grh.PrestadorServicos.RU",
            EditarSexoRU: "Tabelas.Grh.Sexo.RU",
            EditarRegimeDurTrabalhoRU: "Tabelas.Grh.RegimeDurTrabalho.RU",
            EditarTipoEmpresaPrestRU: "Tabelas.Grh.TipoEmpresaPrest.RU",
            EditarEstadoCivil: "Tabelas.Grh.EstadoCivil",
            EditarMotivoPromocao: "Tabelas.Grh.MotivoPromocao",
            EditarAplicabilidadeIRCT: "Tabelas.Grh.AplicabilidadeIRCT",
            EditarNivelQualificacao: "Tabelas.Grh.NivelQualificacao",
            EditarFuncionarioRU: "Tabelas.Grh.FuncionarioRU",
            EditarNISSRU: "Tabelas.Grh.NISSRU",
            EditarAbonosCalculadosPorDescontos: "Tbl_Grh_AbonosCalculadosPorDescontos",
            EditarMedicos_RU: "Tabelas.Grh.Medicos",
            EditarConfigSEPA: "Tabelas.Entidades.ConfigSEPA",
            EditarDeductions: "Tabelas.Grh.Deductions",
            EditarTiposDocumentosHR: "Tabelas.TiposDocumentos.HR",
            EditarSobretaxaIRS: "Tabelas.Grh.SobretaxaIRS",
            EditarConfigQUERY: "Tabelas.Entidades.ConfigQUERY",
            RegistarVinculo: "Tabelas.Grh.RegisterBond",
            ConsultarTrabalhadores: "Tabelas.Grh.ConsultWorkers"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGRHListagens', {
        statics: {
            Descendentes: "Mapas.Listagens.Descendentes",
            AdmissoesDemissoes: "Mapas.Listagens.AdmissoesDemissoes",
            DiasUteis: "Mapas.Listagens.DiasUteis",
            RenovacaoContrato: "Mapas.Listagens.RenovacaoContrato",
            DeslocacoesDespesas: "Mapas.Listagens.DeslocacoesDespesas",
            DeslocacoesDespesasSemValores: "Mapas.Listagens.DeslocacoesDespesasSemValores",
            TurnosRotativos: "Mapas.Listagens.TurnosRotativos",
            JustificacaoFaltas: "Mapas.Listagens.JustificacaoFaltas",
            DistribuicaoEtaria: "Mapas.Listagens.DistribuicaoEtaria",
            FichasReparticao: "Mapas.Listagens.FichasReparticao",
            FuncFichasReparticao: "Mapas.Listagens.FuncFichasReparticao",
            AbonDescFixoseAbonUnit: "Mapas.Listagens.AbonDescFixoseAbonUnit",
            DepartFichasRepart: "Mapas.Listagens.DepartFichasRepart",
            Recibos: "Mapas.Listagens.Recibos",
            RecibosPay: "Mapas.Listagens.RecibosPay",
            LevantamentosResumido: "Mapas.Listagens.LevantamentosBancarios",
            TransferenciasBancarias: "Mapas.Listagens.TransferenciasBancarias",
            Seguro: "Mapas.Listagens.Seguro",
            Sindicatos: "Mapas.Listagens.Sindicatos",
            ConfiguracaoTransferenciasBancarias: "Mapas.Listagens.ConfiguracaoTransfBancarias",
            ConfiguracaoCartoesRefeicao: "Mapas.Listagens.ConfiguracaoCartoesRefeicao",
            ContasCorrentes: "Mapas.Listagens.ContaCorrente",
            ContasCorrentesA: "Mapas.Listagens.ContaCorrenteA",
            FolhaFerias: "Mapas.Listagens.FolhaFerias",
            AjustesAcumulados: "Mapas.Listagens.AjustesAcumulados",
            Cheques: "Mapas.Listagens.Cheques",
            ConfiguracaoCheques: "Mapas.Listagens.ConfiguracaoCheques",
            ConfiguracaoRecibos: "Mapas.Listagens.ConfiguracaoRecibos",
            Modelos: "Mapas.Modelos",
            CategoriasFuncionarios: "Mapas.Listagens.CategoriasFuncionarios",
            CessacaoContrato: "Mapas.Listagens.CessacaoContrato",
            FF_PorFunc: "Mapas.Listagens.FF_PorFunc",
            IRT_AO: "Mapas.Listagens.IRT_AO",
            CartoesRefeicao: "Mapas.Listagens.CartoesRefeicao"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsGRHMapas', {
        statics: {
            Funcionarios: "Mapas.Listagens.Funcionarios",
            FuncionariosDeclArt99: "Mapas.Listagens.FuncionariosDeclArt99",
            RegistoPessoal: "Mapas.Listagens.RegistoPessoal",
            AbonosDescontos: "Mapas.Listagens.AbonosDescontos",
            Faltas: "Mapas.Listagens.Faltas",
            Consultas: "Mapas.RegistoMedico.Consultas",
            Exames: "Mapas.RegistoMedico.Exames",
            Ferias: "Mapas.Outros.MapaFerias",
            GeralEmpresa: "Mapas.Outros.MapaResumoFaltasFerias",
            SegurancaSocial: "Mapas.Mensais.SegSocial",
            ConfiguracaoSegSocial: "Mapas.SegSocial.Configuracao",
            GuiaPagamento: "Mapas.SegSocial.GuiaPagamento",
            RetencoesIndependentes: "Mapas.Outros.RetencoesIndependentes",
            ResumoEncargos: "Mapas.Outros.ResumoEncargos",
            HorasExtras: "Mapas.Outros.HorasExtras",
            Absentismo: "Mapas.Outros.Absentismo",
            DeclaracaoRetencoesFontes: "Mapas.Mensais.DeclRetFonte",
            DeclaracoesRendimentos: "Mapas.Anuais.DeclaracoesRendimentos",
            MapaADSE: "Mapas.Mensais.MapaADSE",
            ADSEGuiaPag: "Mapas.Mensais.GuiaPagamentoADSE",
            QuadroPessoal: "Mapas.Anuais.QuadroPessoal",
            DefinicaoMargens: "Mapas.Anuais.DefinicaoMargens",
            RelacaoDescontosCGA: "Mapas.Mensais.CGA.RelacaoDescontosCGA",
            RelacaoContributivaCGA: "Mapas.Mensais.CGA.RelacaoContributivaCGA",
            CGAGuiaPagamento: "Mapas.Mensais.CGAGuiaPagamento",
            CGARelacaoContributivaGP: "Mapas.Mensais.CGARelacaoContributivaGP",
            RemuneracoesDescontosEncargos: "Mapas.Outros.RemuneracoesDescontosEncargos",
            IRSDeclAnuModelo10: "Mapas.Anuais.Modelo10",
            IRSDeclAnuModelo20HMZ: "Mapas.Anuais.Modelo20HMZ",
            RelacaoNominalMZ: "Mapas.Anuais.RelacaoNominalMZ",
            BalancoSocial: "Mapas.Anuais.BalancoSocial",
            MapasEspecificos: "Mapas.Outros.MapasEspecificos",
            MapasEspecificosConfiguracao: "Mapas.Outros.MapasEspecificosConfiguracao",
            MapasEspecificosConfiguracaoColunas: "Mapas.Outros.MapasEspecificosConfiguracaoColunas",
            MapaCentrosCusto: "Mapas.Outros.CentrosCusto",
            TaxasIUR113: "Mapas.Mensais.TaxasIUR113",
            TaxasIUR111: "Mapas.Mensais.TaxasIUR111",
            MapaHorasTrabalhoSuplementar: "Mapas.Anuais.MapaHorasTrabalhoSuplementar",
            MapaDGEEP: "Mapas.Anuais.MapaDGEEP",
            MapaInqMensalConstrObrasPublicas: "Mapas.Outros.MapaInqMensalConstrObrasPublicas",
            MapaHorasTrabalhadas: "Mapas.Outros.MapaHorasTrabalhadas",
            MapaFundosCompensacao: "Mapas.Anuais.FundosCompensacao",
            Graficos: "Mapas.Outros.Graficos",
            Modelo19: "Mapas.Mensais.Modelo19",
            ValidaIRSDeclAnuModelo10Web: "Mapas.Anuais.ValidaIRSDeclAnuModelo10Web",
            RelatorioUnico: "Mapas.Anuais.RelatorioUnico",
            RelatorioUnicoMultiplosValores: "Mapas.Anuais.MultiplosValores",
            RelatorioUnicoMultiplosValoresGreves: "Mapas.Anuais.MultiplosValoresGreves",
            IRT_DeclAnual_AO: "Mapas.Mensais.IRT_DeclAnual_AO",
            DeclMensalRemunAT: "Mapas.Mensais.DeclMensalRemunAT",
            ModelosOficiaisModDPRCV: "Mapas.Anuais.ModDPRCV"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsImo');
    
    Bridge.define('Eticadata.Common.CommandsImo.Manutencoes', {
        statics: {
            Abates: "Manutencoes.Imo.Abates",
            AbatesSNC: "Manutencoes.Imo.AbatesSNC",
            Reparacoes: "Manutencoes.Imo.Reparacoes",
            Aquisicoes: "Manutencoes.Imo.Aquisicoes",
            Aquisicoes_Modal: "Manutencoes.Imo.Aquisicoes.Modal",
            Reinvestimentos_Modal: "Manutencoes.Imo.Reinvestimentos.Modal",
            FindPorNumExterno: "Manutencoes.Imo.FindPorNumeroExterno",
            FindPorNumExterno_Tipo: "Manutencoes.Imo.FindPorNumeroExterno.Tipo",
            FindPorNumExterno_Tipo_Abate: "Manutencoes.Imo.FindPorNumeroExterno.Tipo.Abate",
            FindPorNumExterno_Tipo_Aquisicao: "Manutencoes.Imo.FindPorNumeroExterno.Tipo.Aquisicao",
            FindPorNumExterno_Tipo_Reparacao: "Manutencoes.Imo.FindPorNumeroExterno.Tipo.Reparacao",
            FindPorNumExterno_Varios_Dados: "Manutencoes.Imo.FindPorNumeroExterno.Varios.Dados",
            FindPorNumExterno_ValorChave: "Manutencoes.Imo.FindPorNumeroExterno.ValorChave",
            FindPorNumExterno_Grelha: "Manutencoes.Imo.FindPorNumeroExterno.Grelha",
            FindPorNumExterno_DadosEntidade: "Manutencoes.Imo.FindPorNumeroExterno.DadosEntidade",
            FindPorNumExterno_Entidade: "Manutencoes.Imo.FindPorNumeroExterno.Entidade",
            FindPorNumExterno_Numero: "Manutencoes.Imo.FindPorNumeroExterno.Numero",
            FindPorNumExterno_Resultado: "Manutencoes.Imo.FindPorNumeroExterno.Resultado",
            LigacaoContabilidade: "Manutencoes.Imo.LigacaoContabilidade",
            LigacaoContabilidadeAbateSnc: "Manutencoes.Imo.LigacaoContabilidadeAbateSNC",
            TabelasLigacaoContabilidade: "Manutencoes.Imo.TabelasLigacaoContabilidade"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsImo.Mapas', {
        statics: {
            BalanceteContabilistico: "Mapas.Imo.BalanceteContabilistico",
            BalanceteContabilisticoPorCCusto: "Mapas.Imo.BalanceteContabilisticoPorCCusto",
            BensReinvestimentos_Modal: "Mapas.Imo.BensReinvestimentos.Modal",
            Historico: "Mapas.Imo.Historico",
            LimitesFiscais: "Mapas.Imo.LimitesFiscais",
            MapasFiscais: "Mapas.Imo.Fiscais",
            ReinvestimentosMaisValias: "Mapas.Imo.ReinvestimentosMaisValias",
            ListagemImobilizado: "Mapas.Imo.ListagemImobilizado",
            ListagemFichasImobilizado: "Mapas.Imo.ListagemFichasImobilizado"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsImo.Processamentos', {
        statics: {
            Reavaliacoes: "Processamentos.Imo.Reavaliacoes",
            Amortizacoes: "Processamentos.Imo.Amortizacoes",
            SimAmortizacoes: "Processamentos.Imo.SimAmortizacoes",
            DescargaCte: "Processamentos.Imo.DescargaCte",
            DescargaCteAbateSnc: "Processamentos.Imo.DescargaCteAbateSNC",
            Revalorizacoes: "Processamentos.Imo.Revalorizacoes",
            PerdasImparidade: "Processamentos.Imo.PerdasImparidade",
            JustoValor: "Processamentos.Imo.JustoValor"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsImo.Tabelas', {
        statics: {
            CCusto: "Tabelas.Imo.CCusto",
            Operacoes: "Tabelas.Imo.Operacoes",
            Conservacoes: "Tabelas.Imo.Conservacoes",
            TiposImobilizado: "Tabelas.Imo.TiposImobilizado",
            AbateAlienacoes: "Tabelas.Imo.AbateAlienacoes",
            Classificacoes: "Tabelas.Imo.Classificacoes",
            ObservacoesEspeciais: "Tabelas.Imo.ObservacoesEspeciais",
            AjustesFiscais: "Tabelas.Imo.AjustesFiscais",
            Decretos: "Tabelas.Imo.Decretos",
            BensImobilizado: "Tabelas.Imo.BensImobilizado",
            BensImobilizado_Modal: "Tabelas.Imo.BensImobilizado_Modal",
            TabelasAnexas: "Tabelas.Imo.TabelasAnexas",
            CoeficientesReavaliacao: "Tabelas.Imo.CoeficientesReavaliacao",
            GrandesGrupos: "Tabelas.Imo.GrandesGrupos",
            SubGrupos: "Tabelas.Imo.SubGrupos",
            TpDocumentosImo: "Tabelas.Imo.TpDocumentosImo",
            Taxas: "Tabelas.Imo.Taxas",
            Seccoes: "Tabelas.Imo.Seccoes",
            PlanosDepreciaçao: "Tabelas.Imo.PlanosDepreciação",
            BensImobilizadoExerc: "Tabelas.Imo.BensImobilizadoExerc"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsImo.Utilitarios', {
        statics: {
            HistoricoAmortizacoes: "Utilitarios.Imo.HistoricoAmortizacoes",
            HistoricoReavaliacoes: "Utilitarios.Imo.HistoricoReavaliacoes",
            FechoAno: "Utilitarios.Imo.FechoAno",
            LstContasInexistentes: "Utilitarios.Imo.LstContasInexistentes",
            AnularFechoAno: "Utilitarios.Imo.AnularFechoAno",
            EmissaoEtiquetas: "Mapas.Imo.BensEtiquetas",
            RemovePlano: "Utilitarios.Imo.RemovePlano",
            RecalcularMaisMenosValias: "Utilitarios.Imo.RecalcularMaisMenosValias"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsImportData', {
        statics: {
            ExecutarPerfil: "Perfis.Executar"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsIntegrador', {
        statics: {
            ConfigurarLocalizacao: "IntegracaoDados.ConfigurarLocalizacao",
            Perfis: "IntegracaoDados.Perfis",
            EditarPerfis: "IntegracaoDados.EditarPerfis",
            Historico: "IntegracaoDados.Historico",
            HistoricoLog: "IntegracaoDados.HistoricoLog",
            InicializarFilial: "IntegracaoDados.InicializarFilial",
            ConfigurarServico: "IntegracaoDados.ConfigurarServico",
            Progress: "IntegracaoDados.Progress"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsIntegradorOffLine', {
        statics: {
            EditarPerfilExportacao: "Integrador.EditarPerfilExportacao",
            EditarPerfilImportacao: "Integrador.EditarPerfilImportacao",
            EditarPerfilTransferencia: "Integrador.EditarPerfilTransferencia",
            EditarProgramacaoTarefas: "Integrador.EditarProgramacaoTarefas",
            VisualizarProgresso: "Integrador.VisualizarProgresso",
            ExecutarPerfis: "Integrador.ExecutarPerfis",
            HistoricoOffLine: "Integrador.HistoricoOffLine",
            ConsultaLogs: "Integrador.ConsultaLogs",
            ExportarPerfis: "Integrador.ExportarPerfis",
            ImportarPerfis: "Integrador.ImportarPerfis",
            ConsultaLogsModal: "Integrador.ConsultaLogsModal"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsMedical');
    
    Bridge.define('Eticadata.Common.CommandsMedical.MovementsLink', {
        statics: {
            PathologyPatient: "Medical.Entity.PathologyPatient",
            MedicamentsInfomed: "Medical.MedicamentsInfomed",
            MedicalSchedule: "Medical.MedicalSchedule",
            MedicalAppointments: "Medical.MedicalAppointments",
            MedicalConsultations: "Medical.MedicalConsultations",
            Attachments: "Medical.Attachments",
            ConfigurationOfCommunicationRequirements: "Medical.ConfigurationOfCommunicationRequirements",
            MedicamentsPrescriptions: "Medical.MedicamentsPrescriptions",
            CancelPrescription: "Medical.CancelPrescriptions",
            MedicamentsPrescriptionsReports: "Medical.MedicamentsPrescriptionsReports",
            HistoryDoctorPatients: "Medical.HistoryDoctorPatients",
            CloseMedicalConsultations: "Medical.CloseMedicalConsultations",
            SelfBillingDoctor: "Medical.SelfBillingDoctor",
            BillingCustomerRFI: "Medical.BillingCustomerRFI",
            MovVenda_CustomerRFIElectFiles: "Medical.MovVenda_CustomerRFIElectFiles",
            MovVenda_Cancellation: "Medical.MovVenda_Cancellation",
            ShowOdontograma: "Medical.ShowOdontograma",
            MedicamentsPrescribed: "Medical.MedicamentsPrescribed"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsMedical.TablesLink', {
        statics: {
            Exams: "Tables.Medical.Exams",
            HealthCareInstitutions: "Tables.Medical.HealthCareInstitutions",
            HealthRegions: "Tables.Medical.HealthRegions",
            HealthProfessionals: "Tables.Medical.HealthProfessionals",
            ICD9: "Tables.Medical.ICD9",
            ICD10: "Tables.Medical.ICD10",
            Marker: "Tables.Medical.Marker",
            MCDTAreas: "Tables.Medical.MCDTAreas",
            MedicalAnalyses: "Tables.Medical.MedicalAnalyses",
            MedicalBenefits: "Tables.Medical.MedicalBenefits",
            MedicalCliniHistory: "Tables.Medical.MedicalCliniHistory",
            MedicalConsulState: "Tables.Medical.MedicalConsulState",
            MedicalSpecialty: "Tables.Medical.MedicalSpecialty",
            ResponsibleFinancialInstitution: "Tables.Medical.ResponsibleFinancialInstitution",
            Standard: "Tables.Medical.Standard",
            TypeAttachmentsDoc: "Tables.Medical.TypeAttachmentsDoc",
            TypeDosages: "Tables.Medical.TypeDosages",
            TypeMedicalBenefit: "Tables.Medical.TypeMedicalBenefit",
            TypeMedicalCards: "Tables.Medical.TypeMedicalCards",
            TypeMedicalConsul: "Tables.Medical.TypeMedicalConsul",
            TypeMedicalDeclarations: "Tables.Medical.TypeMedicalDeclarations",
            MedicalDeclarations: "Tables.Medical.MedicalDeclarations",
            MedicalDeclarationsPrint: "Tables.Medical.MedicalDeclarationsPrint",
            TypeModTaxExemptions: "Tables.Medical.TypeModTaxExemptions",
            TypePrints: "Tables.Medical.TypePrints",
            TypeProfessionalBodies: "Tables.Medical.TypeProfessionalBodies",
            TypeRFI: "Tables.Medical.TypeRFI",
            Medicaments: "Tables.Medical.Medicaments"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsMedical.TablesLink.MedicamentsLink', {
        statics: {
            DCIPT: "Tables.Medical.Medicaments.DCIPT",
            PharmaceuticalForm: "Tables.Medical.Medicaments.PharmaceuticalForm"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsMedical.TablesLink.MedicamentsPrescriptionLink', {
        statics: {
            MedicPrescState: "Tables.Medical.MedicamentsPrescription.MedicPrescState",
            MedicPrescReasonsAnnulment: "Tables.Medical.MedicamentsPrescription.MedicPrescReasonsAnnulment",
            MedicPrescReasonsCancellationLines: "Tables.Medical.MedicamentsPrescription.MedicPrescReasonsCancellationLines",
            MedicPrescType: "Tables.Medical.MedicamentsPrescription.MedicPrescType",
            MedicPrescVia: "Tables.Medical.MedicamentsPrescription.MedicPrescVia",
            MedicPrescExceptions: "Tables.Medical.MedicamentsPrescription.MedicPrescExceptions"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsMedical.TablesLink.OthersLink', {
        statics: {
            MedicalAnalysesClinicHistSpecialty: "Tables.Medical.Others.MedicalAnalysesClinicHistSpecialty"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsModOficiais', {
        statics: {
            ModelosOficiaisIES_2016: "ModOfi.Modelo.IES_2016",
            ParametrizacoesIES_2016: "ModOfi.Parametrizacoes.IES_2016",
            ParametrizacoesOPIES_2016: "ModOfi.ParametrizacoesOP.IES_2016",
            ModelosOficiaisIESQuadro063_2016: "ModOfi.Modelo.IES_Quadro063_2016",
            ModelosOficiaisIESQuadrosDAA60_2016: "ModOfi.Modelo.IES_QuadrosDAA60_2016",
            ModelosOficiaisIESQuadrosDAA70_2016: "ModOfi.Modelo.IES_QuadrosDAA70_2016",
            ModelosOficiaisIESQuadro063ValesCartoes_2016: "ModOfi.Modelo.IES_Quadro063ValesCartoes_2016",
            ModelosOficiaisIESQuadroCertificados_2016: "ModOfi.Modelo.IES_QuadroCertificados_2016",
            ModelosOficiaisWebServices_2017: "ModOfi.Modelo.WebService_2017",
            ModelosOficiaisIES_2017: "ModOfi.Modelo.IES_2017",
            ParametrizacoesIES_2017: "ModOfi.Parametrizacoes.IES_2017",
            ParametrizacoesOPIES_2017: "ModOfi.ParametrizacoesOP.IES_2017",
            ReposicaoVerAntIES_2017: "ModOfi.ReposicaoVerAnt.IES_2017",
            ModelosOficiaisIESQuadro063_2017: "ModOfi.Modelo.IES_Quadro063_2017",
            ModelosOficiaisIESQuadrosDAA60_2017: "ModOfi.Modelo.IES_QuadrosDAA60_2017",
            ModelosOficiaisIESQuadrosDAA70_2017: "ModOfi.Modelo.IES_QuadrosDAA70_2017",
            ModelosOficiaisIESQuadro063ValesCartoes_2017: "ModOfi.Modelo.IES_Quadro063ValesCartoes_2017",
            ModelosOficiaisIESQuadroCertificados_2017: "ModOfi.Modelo.IES_QuadroCertificados_2017",
            ModelosOficiaisMod3_2016: "ModOfi.Modelo.Mod3_2016",
            ParametrizacoesMod3_2016: "ModOfi.Parametrizacoes.Mod3_2016",
            ModelosOficiaisMod3Quadro8_2016: "ModOfi.Modelo.Mod3_Quadro8_2016",
            ModelosOficiaisMod3_2017: "ModOfi.Modelo.Mod3_2017",
            ParametrizacoesMod3_2017: "ModOfi.Parametrizacoes.Mod3_2017",
            ReposicaoVerAntMod3_2017: "ModOfi.ReposicaoVerAnt.Mod3_2017",
            ModelosOficiaisMod3Quadro8_2017: "ModOfi.Modelo.Mod3_Quadro8_2017",
            ModelosOficiaisMod22_2016: "ModOfi.Modelo.Mod22_2016",
            ParametrizacoesMod22_2016: "ModOfi.Parametrizacoes.Mod22_2016",
            ModelosOficiaisMod22RetFonte_2016: "ModOfi.Modelo.Mod22_RetFonte_2016",
            ModelosOficiaisMod22Quadro3_2016: "ModOfi.Modelo.Mod22_Quadro3_2016",
            ModelosOficiaisMod22Quadro31_2016: "ModOfi.Modelo.Mod22_Quadro31_2016",
            ModelosOficiaisMod22QuadroQuadroTransmBenefFiscais_2016: "ModOfi.Modelo.Mod22_QuadroTransmBenefFiscais_2016",
            ModelosOficiaisMod22Quadro077TransmBenefFiscais_2016: "ModOfi.Modelo.Mod22_Quadro077TransmBenefFiscais_2016",
            ModelosOficiaisMod22Quadro078IncentivosSujeitosTaxasMaximas_2016: "ModOfi.Modelo.Mod22_Quadro078IncentivosSujeitosTaxasMaximas_2016",
            ModelosOficiaisMod22QuadroMaisValias_2016: "ModOfi.Modelo.Mod22_QuadroMaisValias_2016",
            ModelosOficiaisMod22Quadro71_2016: "ModOfi.Modelo.Mod22_Quadro71_2016",
            ModelosOficiaisMod22Quadro9_2016: "ModOfi.Modelo.Mod22_Quadro9_2016",
            ModelosOficiaisMod22QuadroNACE_2016: "ModOfi.Modelo.Mod22_QuadroNACE_2016",
            ModelosOficiaisMod22QuadroDerramaCalculada_2016: "ModOfi.Modelo.Mod22_QuadroDerramaCalculada_2016",
            ModelosOficiaisMod22_2017: "ModOfi.Modelo.Mod22_2017",
            ParametrizacoesMod22_2017: "ModOfi.Parametrizacoes.Mod22_2017",
            ReposicaoVerAntMod22_2017: "ModOfi.ReposicaoVerAnt.Mod22_2017",
            ModelosOficiaisMod22RetFonte_2017: "ModOfi.Modelo.Mod22_RetFonte_2017",
            ModelosOficiaisMod22Quadro3_2017: "ModOfi.Modelo.Mod22_Quadro3_2017",
            ModelosOficiaisMod22Quadro31_2017: "ModOfi.Modelo.Mod22_Quadro31_2017",
            ModelosOficiaisMod22QuadroQuadroTransmBenefFiscais_2017: "ModOfi.Modelo.Mod22_QuadroTransmBenefFiscais_2017",
            ModelosOficiaisMod22Quadro077TransmBenefFiscais_2017: "ModOfi.Modelo.Mod22_Quadro077TransmBenefFiscais_2017",
            ModelosOficiaisMod22Quadro078IncentivosSujeitosTaxasMaximas_2017: "ModOfi.Modelo.Mod22_Quadro078IncentivosSujeitosTaxasMaximas_2017",
            ModelosOficiaisMod22QuadroMaisValias_2017: "ModOfi.Modelo.Mod22_QuadroMaisValias_2017",
            ModelosOficiaisMod22Quadro71_2017: "ModOfi.Modelo.Mod22_Quadro71_2017",
            ModelosOficiaisMod22Quadro9_2017: "ModOfi.Modelo.Mod22_Quadro9_2017",
            ModelosOficiaisMod22QuadroNACE_2017: "ModOfi.Modelo.Mod22_QuadroNACE_2017",
            ModelosOficiaisMod22QuadroDerramaCalculada_2017: "ModOfi.Modelo.Mod22_QuadroDerramaCalculada_2017",
            ModelosOficiaisMod22Moc_2016: "ModOfi.Modelo.Mod22Moc_2016",
            ParametrizacoesMod22Moc_2016: "ModOfi.Parametrizacoes.Mod22Moc_2016",
            ModelosOficiaisMod22Moc_2017: "ModOfi.Modelo.Mod22Moc_2017",
            ParametrizacoesMod22Moc_2017: "ModOfi.Parametrizacoes.Mod22Moc_2017",
            ModelosOficiaisMod20Moc_2017: "ModOfi.Modelo.Mod20Moc_2017",
            ParametrizacoesMod20Moc_2017: "ModOfi.Parametrizacoes.Mod20Moc_2017",
            ModelosOficiaisMod1B_2017: "ModOfi.Modelo.Mod1B_2017",
            ParametrizacoesMod1B_2017: "ModOfi.Parametrizacoes.Mod1B_2017",
            ModelosOficiaisMod1B_Novo_2017: "ModOfi.Modelo.Mod1B_Novo_2017",
            ParametrizacoesMod1B_Novo_2017: "ModOfi.Parametrizacoes.Mod1B_Novo_2017",
            QuadroMod1B_Novo_2017: "ModOfi.Quadro.Mod1B_Novo_2017",
            ModelosOficiaisDeclPeriodica: "ModOfi.Modelo.DeclPeriodica",
            ParametrizacoesDeclPeriodica: "ModOfi.Parametrizacoes.DeclPeriodica",
            DiagnosticoDeclPeriodica: "ModOfi.Diagnostico.DeclPeriodica",
            ModelosOficiaisDeclPer: "ModOfi.Modelo.DeclPer",
            ParametrizacoesDeclPer: "ModOfi.Parametrizacoes.DeclPer",
            DiagnosticoDeclPer: "ModOfi.Diagnostico.DeclPer",
            ModelosOficiaisDeclRecap: "ModOfi.Modelo.DeclRecap",
            ModelosOficiaisModOA30: "ModOfi.Modelo.ModOA30",
            ModelosOficiaisMod39: "ModOfi.Modelo.Mod39",
            ModelosOficiaisMod106: "ModOfi.Modelo.Mod106",
            ParametrizacoesMod106: "ModOfi.Parametrizacoes.Mod106",
            ModelosOficiaisMod106Act: "ModOfi.Modelo.Mod106Act",
            ParametrizacoesMod106Act: "ModOfi.Parametrizacoes.Mod106Act",
            ModelosOficiaisMapaAnexo106CV: "ModOfi.Modelo.MapaAnexo106CV",
            ModelosOficiaisMapaAnexo106CVAct: "ModOfi.Modelo.MapaAnexo106CVAct",
            ModelosOficiaisMapaAnexo106RegCV: "ModOfi.Modelo.MapaAnexo106RegCV",
            ParametrizacoesRecapitulativoCV: "ModOfi.Modelo.ParamRecapitulativoCV",
            ModelosOficiaisMod107: "ModOfi.Modelo.Mod107",
            ParametrizacoesMod107: "ModOfi.Parametrizacoes.Mod107",
            ModelosOficiaisModC: "ModOfi.Modelo.ModC",
            ParametrizacoesModC: "ModOfi.Parametrizacoes.ModC",
            ModelosOficiaisModGP10: "ModOfi.Modelo.ModGP10",
            ParametrizacoesModGP10: "ModOfi.Parametrizacoes.ModGP10",
            ModelosOficiaisModDPRCV: "ModOfi.Modelo.ModDPRCV",
            ModelosOficiaisDeclPer_MOC: "ModOfi.Modelo.DeclPerMOC",
            ParametrizacoesDeclPer_MOC: "ModOfi.Parametrizacoes.DeclPerMOC",
            GeraFicheiroModeloDeclPeriodica: "GeraFicheiroModeloDeclPeriodica",
            GeraFicheiroModelo22: "GeraFicheiroModelo22",
            GeraFicheiroModelo3: "GeraFicheiroModelo3",
            GeraFicheiroModeloIES: "GeraFicheiroModeloIES",
            GeraFicheiroModeloDeclRecap: "GeraFicheiroModeloDeclRecap",
            GeraFicheiroModeloOA30: "GeraFicheiroModeloOA30",
            GeraFicheiroModelo39: "GeraFicheiroModelo39"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsOficinasMapas', {
        statics: {
            OrdensReparacaoResumo: "AutoGest.Oficinas.Mapas.OrdensReparacaoResumo",
            OrdensReparacaoTotaisGlobais: "AutoGest.Oficinas.Mapas.OrdensReparacaoTotaisGlobais",
            OrdensReparacaoVND: "AutoGest.Oficinas.Mapas.OrdensReparacaoVND",
            Orcamentos: "AutoGest.Oficinas.Mapas.Orcamentos",
            OrdensReparacaoServicos: "AutoGest.Oficinas.Mapas.ORServicos",
            OrdensReparacaoMateriais: "AutoGest.Oficinas.Mapas.ORMateriais",
            FuncionariosResumo: "AutoGest.Oficinas.Mapas.FuncionariosResumo",
            FuncionariosRecolhaTarefas: "AutoGest.Oficinas.Mapas.FuncionariosRecolhaTarefas",
            Garantias: "AutoGest.Oficinas.Mapas.Garantias",
            Historial: "AutoGest.Oficinas.Mapas.Historial",
            Graficos: "AutoGest.Oficinas.Mapas.Graficos",
            ConsultasDiversas: "AutoGest.Oficinas.Mapas.CDiversas",
            Marcacoes: "AutoGest.Oficinas.Mapas.Marcacoes",
            Visitas: "AutoGest.Oficinas.Mapas.Visitas",
            EntregaFacturarTotaisGlobais: "AutoGest.Oficinas.Mapas.EntregaFacturarTotaisGlobais",
            ProxInspeccoes: "AutoGest.Oficinas.Mapas.ProxInspeccoes",
            DocumVendaPend: "AutoGest.Oficinas.Mapas.DocumVendaPend",
            PrevisionalMateriais: "AutoGest.Oficinas.Mapas.PrevisionalMateriais",
            RegistoDiario: "AutoGest.Oficinas.Mapas.RegistoDiario",
            GraficosMovOficinas: "AutoGest.Oficinas.Mapas.GraficosMovOficinas",
            ConsultasRecolhasTarefas: "AutoGest.Oficinas.Mapas.ConsultasRecolhasTarefas"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsOficinasMovim', {
        statics: {
            AgendaMarcacoes2012: "AutoGest.Oficinas.AgendaMarcacoes2012",
            AgendaMarcacoes: "AutoGest.Oficinas.AgendaMarcacoes",
            AgendaMarcacoesModal: "AutoGest.Oficinas.AgendaMarcacoesModal",
            EditarMarcacao: "AutoGest.Oficinas.Marcacoes",
            EditarRecepcao: "AutoGest.Oficinas.Recepcoes",
            EditarOrcamento: "AutoGest.Oficinas.Orcamentos",
            EditarOrdReparacao: "AutoGest.Oficinas.OrdReparacao",
            EditarOrdReparacaoMateriais: "AutoGest.Oficinas.Materiais",
            EditarEntregaFacturar: "AutoGest.Oficinas.EntregaFacturar",
            EditarOrdRep_DevMateriais: "AutoGest.Oficinas.OrdRep_DevMat",
            EditarOrdRep_ReqMateriais: "AutoGest.Oficinas.OrdRep_ReqMat",
            EditarOrdRep_ServInternos: "AutoGest.Oficinas.OrdRep_ServInt",
            EditarOrdRep_ServExternos: "AutoGest.Oficinas.OrdRep_ServExt",
            EmitirDocOficinas: "AutoGest.Oficinas.DocumentosOficinas",
            GerarServInternos: "AutoGest.Oficinas.GerarServInternos",
            MarcacaoIntegra: "AutoGest.Oficinas.MarcacaoIntegra",
            RecepcaoIntegra: "AutoGest.Oficinas.RecepcaoIntegra",
            OrcamentoIntegra: "AutoGest.Oficinas.OrcamentoIntegra",
            OrdReparacaoIntegra: "AutoGest.Oficinas.OrdReparacaoIntegra",
            MarcacaoSucede: "AutoGest.Oficinas.MarcacaoSucede",
            RecepcaoSucede: "AutoGest.Oficinas.RecepcaoSucede",
            OrcamentoSucede: "AutoGest.Oficinas.OrcamentoSucede",
            OrdReparacaoSucede: "AutoGest.Oficinas.OrdReparacaoSucede",
            OrdReparacaoAssociado: "AutoGest.Oficinas.OrdReparacaoAssociado",
            OrcamentoAssociado: "AutoGest.Oficinas.OrcamentoAssociado",
            OrcamentoRepete: "AutoGest.Oficinas.OrcamentoRepete",
            OrdReparacaoRepete: "AutoGest.Oficinas.OrdReparacaoRepete",
            RecepcaoRepete: "AutoGest.Oficinas.RecepcaoRepete",
            ReimpressaoDocumentos: "Oficinas.ReimpressaoDocumentos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsOficinasUtilitarios', {
        statics: {
            SubstChaveViatura: "Utilitarios.Oficinas.SubstChaveViatura",
            ImportacaoFleetData: "Utilitarios.Autogest.ImportacaoFleetData",
            ConfiguracaoRelTarefas: "Utilitarios.Oficinas.ConfiguracaoRelTarefas",
            ConfiguracaoOficinas: "Utilitarios.Oficinas.ConfiguracaoOficinas",
            ManutencaoRelTarefas: "Utilitarios.Oficinas.ManutencaoRelTarefas"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsOutrasTabelas', {
        statics: {
            EditarZonas: "Tabelas.OutrasTabelas.Zonas",
            EditarSubZonas: "Tabelas.OutrasTabelas.Subzonas",
            EditarMoedas: "Tabelas.OutrasTabelas.Moedas",
            EditarTaxasIVA: "Tabelas.OutrasTabelas.TaxasIVA",
            EditarTpMPagamento: "Tabelas.OutrasTabelas.TpMPagamento",
            EditarTpPilhas: "Tabelas.OutrasTabelas.TiposPilhas",
            EditarTpPneus: "Tabelas.OutrasTabelas.TiposPneus",
            EditarTpOleos: "Tabelas.OutrasTabelas.TiposOleos",
            EditarTpREEE: "Tabelas.OutrasTabelas.TiposREEE",
            EditarTpDAutor: "Tabelas.OutrasTabelas.TiposDAutor",
            EditarNomesCientificos: "Tabelas.OutrasTabelas.NomeCientifico",
            EditarZonasCaptura: "Tabelas.OutrasTabelas.ZonaCaptura",
            EditarND: "Tabelas.OutrasTabelas...",
            EditarActualizacaoPrecos: "ActualizacaoPrecos",
            EditarRegiao: "Tabelas.IntraStat.Regioes",
            EditarPorto: "Tabelas.IntraStat.Portos",
            EditarAeroporto: "Tabelas.IntraStat.Aeroportos",
            EditarModoTransporte: "Tabelas.IntraStat.ModosTransporte",
            EditarCondicaoEntrega: "Tabelas.IntraStat.CondicoesEntrega",
            EditarNomenclatura: "Tabelas.IntraStat.Mercadorias",
            EditarNaturezasTransacao: "Tabelas.IntraStat.NaturezasTransaccao",
            EditarCondicaoPagamento: "Tabelas.OutrasTabelas.CondPagamento",
            EditarMeioExpedicao: "Tabelas.OutrasTabelas.MeiosExpedicao",
            EditarCargasDescargas: "Tabelas.OutrasTabelas.CargasDescargas",
            EditarEstadoDocumentos: "Tabelas.OutrasTabelas.EstadosDocumentos",
            EditarClassifMovStk: "Tabelas.OutrasTabelas.ClassificacaoMovStk",
            EditarSector: "Tabelas.OutrasTabelas.Sectores",
            EditarTipoEncargos: "Tabelas.OutrasTabelas.TiposEncargos",
            EditarDescricao: "Tabelas.Tesouraria.Descricoes",
            EditarRubrica: "Tabelas.Tesouraria.Rubricas",
            EditarMovPeriodicos: "Tabelas.Tesouraria.MovPeriodicos",
            EditarConta: "Tabelas.Tesouraria.Contas",
            EditarTipoComissoes: "Tabelas.OutrasTabelas.TiposComissoes",
            EditarFluxosCaixa: "TabelasCte.Contabilidade.FluxosCaixa",
            EditarPlanoContas: "TabelasCte.Contabilidade.PlanoContas",
            EditarDiario: "TabelasCte.Documentos.Diarios",
            EditarPlanos: "TabelasCte.Contabilidade.PlanosContasAlt",
            EditarRotas: "Tabelas.OutrasTabelas.Rotas",
            EditarPlanoContasAlternat: "TabelasCte.Contabilidade.PlanosContasAltAux",
            EditarDescritivos: "TabelasCte.Documentos.Descritivos",
            CartoesPrePagos: "Tabelas.OutrasTabelas.CartoesPrePagos",
            CartoesClientes: "Tabelas.OutrasTabelas.CartoesClientes",
            EditarHorarios: "Tabelas.OutrasTabelas.Horarios",
            EditarHorariosModal: "Tabelas.OutrasTabelas.HorariosModal",
            EditarPlanoContasModal: "TabelasCte.Contabilidade.PlanoContasModal",
            EditarDepartamentos: "Tabelas.OutrasTabelas.Departamentos",
            EditarLocalizacoes: "Tabelas.OutrasTabelas.Localizacoes",
            EditarCursos: "Tabelas.OutrasTabelas.Cursos",
            EditarTiposContrato: "ContractsModule.TipoContratoView.Show()",
            EditarMotivosIsencaoIVA: "Tabelas.OutrasTabelas.MotivosIsencaoIVA",
            EditarClassificacoesEstatistica: "Tabelas.OutrasTabelas.ClassificacoesEstatistica",
            EditarTiposContadores: "CommonModule.TiposContadoresView.Show()",
            DiscountVoucherTypes: "Tabelas.OutrasTabelas.DiscountVoucherTypes"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsPesquisas', {
        statics: {
            Pesquisas: "Tabelas.Pesquisas",
            ProcuraViaturas: "Tabelas.Procura.Viaturas",
            ProcuraViaturasRAC: "Tabelas.Stands.ProcuraRAC",
            ProcuraViaturasProcesso: "Tabelas.Stands.Procura",
            ProcuraArtigoPartNumber: "Oficinas.PesquisaArtigoPartNumber",
            ProcuraEquipamentos: "Tabelas.Apv.ProcuraEquipamentos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsPesquisasPOS', {
        statics: {
            PesquisaArtigo: "PesquisaPos.Artigos",
            PesquisaLotes: "PesquisaPos.Lotes",
            PesquisaEdicoes: "PesquisaPos.Edicoes",
            PesquisaCliente: "PesquisaPos.Clientes",
            PesquisaReferencias: "PesquisaPos.Referencias",
            PesquisaDevolucao: "PesquisaPos.Devolucao",
            PesquisaTodosArtigos: "PesquisaPos.TodosArtigos",
            PesquisaContribuintes: "PesquisaPos.Contribuintes",
            PesquisaAmostra: "PesquisaPos.Amostra",
            PesquisaRecibos: "PesquisaPos.Recibos",
            PesquisaSuspensoVND: "PesquisaPos.SuspensoVND",
            PesquisaTransferencia: "PesquisaPos.Transferencia",
            PesquisaEncomendas: "PesquisaPos.Encomendas",
            PesquisaVendas: "PesquisaPos.Vendas",
            PesquisaSoVendas: "PesquisaPos.SoVendas",
            PesquisaFuncionarios: "PesquisaPos.Funcionarios",
            PesquisaSuspensoENC: "PesquisaPos.SuspensoENC",
            PesquisaLivros: "PesquisaPos.Livros",
            PesquisaArtigosAlternativos: "PesquisaPos.ArtigosAlternativos",
            PesquisaCamposAdicionais: "PesquisaPos.CamposAdicionais",
            PesquisaSemFolhaServico: "PesquisaPos.SemFolhasServico",
            PesquisaEncomendasAdto: "PesquisaPos.EcomendasAdto",
            PesquisaExecutarPerfisOFFLine: "PesquisaPos.ExecutarPerfis",
            PesquisaExecutarPerfisAdminOFFLine: "PesquisaPos.ExecutarPerfisAdmin",
            PesquisaHistoricoIntegracao: "PesquisaPOS.HistoricoIntegracao",
            PesquisaVendasComMesa: "PesquisaPos.VendasComMesa",
            PesquisaArtigoRT: "PesquisaPos.ArtigosRT",
            PesquisaSalesConferenceAndOrder: "PesquisaPOS.SalesConferenceAndOrder"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsProcessamentoGrh', {
        statics: {
            EditarAbonosDescontosFaltas: "Grh.Processamento.AbonosDescontosFaltas",
            EditarAbonosDescontos: "Grh.Processamento.AbonosDescontos",
            EditarFaltas: "Grh.Processamento.Faltas",
            EditarMarcacaoFerias: "Grh.Processamento.Ferias",
            EditarConsultas: "Grh.Processamento.Consultas",
            EditarExames: "Grh.Processamento.Exames",
            SimulacaoProc: "Grh.Processamento.SimulacaoRecibo",
            SimulacaoProcNr: "Grh.Processamento.SimulacaoReciboNr",
            SimulacaoProcFr: "Grh.Processamento.SimulacaoReciboFr",
            SimulacaoProcNt: "Grh.Processamento.SimulacaoReciboNt",
            SimulacaoProcVenc: "Grh.Processamento.SimulacaoReciboVenc",
            SimulacaoProcFlt: "Grh.Processamento.SimulacaoReciboFlt",
            SimulacaoProcAbnDesc: "Grh.Processamento.SimulacaoReciboAbnDesc",
            SimulacaoProcGravAlt: "Grh.Processamento.SimulacaoReciboGravAlt",
            LancamentoAlteracoes: "Grh.Processamento.LancamentoAlteracoes",
            RenovacaoContrato: "Grh.Processamento.RenovacaoContrato",
            CessacaoContrato: "Grh.Processamento.CessacaoContrato",
            Processamento: "Grh.Processamento.Processamento",
            ProcessamentoNr: "Grh.Processamento.ProcessamentoNr",
            ProcessamentoFr: "Grh.Processamento.ProcessamentoFr",
            ProcessamentoNt: "Grh.Processamento.ProcessamentoNt",
            RemoverProcessamento: "Grh.Processamento.RemoverProcessamento",
            ConsultaProcessamentos: "Grh.Processamento.ConsultaProcsAnteriores"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsQueries', {
        statics: {
            RAC_SearchVehicle: "Rentacar.SearchVehicle"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsSSTMov', {
        statics: {
            EditarAccoesFuncionarios: "SSTModule.FuncionariosAccoesView.Show()",
            EditarAccoesMedicas: "SSTModule.AccoesMedicasView.Show()",
            EditarFactoresDeRisco: "SSTModule.FactoresRiscoView.Show()",
            EditarFactoresDeRiscoDeDoenças: "SSTModule.FactoresRiscoDoencaView.Show()",
            EditarAcidentesDeTrabalho: "SSTModule.AcidentesTrabalhoView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsSSTTab', {
        statics: {
            EditarTiposDeAccoes: "SSTModule.TiposAccoesView.Show()",
            EditarResultadosDeAccoes: "SSTModule.ResultadosAccoesView.Show()",
            EditarProfissionaisDeSaudeESeguranca: "SSTModule.ProfissionaisSaudeSegurancaView.Show()",
            EditarEntidadesPrestadorasDeServicos: "SSTModule.EntidadesPrestServView.Show()",
            EditarMotivosAcidente: "SSTModule.MotivosAcidente.Show()",
            EditarMedidaAcidente: "SSTModule.MedidasAcidente.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsStandsMapas', {
        statics: {
            RelacaoCustos: "AutoGest.Mapas.RelacaoCustos",
            ResultadosGlobais: "AutoGest.Mapas.ResultadosGlobais",
            MapasViaturas: "AutoGest.Mapas.Viaturas",
            VolumeNegocios: "AutoGest.Mapas.VolumeNegocios",
            ComissoesVendedores: "AutoGest.Mapas.ComissoesVendedores",
            ComissoesLocadoras: "AutoGest.Mapas.ComissoesLocadoras",
            Retomas: "AutoGest.Mapas.Retomas",
            Garantias: "AutoGest.Mapas.Garantias",
            TempoEmStock: "AutoGest.Mapas.TempoStock",
            FimReserva: "AutoGest.Mapas.FimReserva",
            ProxInspeccoes: "AutoGest.Mapas.ProxInspeccoes",
            Documentacao: "AutoGest.Mapas.Documentacao",
            RentACar: "AutoGest.Mapas.RentACar",
            DocumVendaPend: "AutoGest.Mapas.DocumVendaPend",
            IVAProcessos: "AutoGest.Mapas.IVAProcessos"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsStandsMovim', {
        statics: {
            StandsProcessamentos: "Movimentos.Stands.Processos",
            StandsProcEmitirDocum: "Movimentos.Stands.ProcessosEmitirDocum",
            StandsProcRACEmitirDocum: "Movimentos.Stands.ProcessosRACEmitirDocum",
            StandsProcDanos: "Movimentos.Stands.ProcessosDanos",
            StandsProcEmitirNovoDocum: "Movimentos.Stands.ProcessosEmitirNovoDocum",
            StandsProcHistEstados: "Movimentos.Stands.ProcessosHistEstados",
            StandsDocumentacao: "Movimentos.Stands.Documentacao",
            StandsDespesas: "Movimentos.Stands.Despesas",
            StandsPotenciaisClientes: "Movimentos.Stands.PotenciaisClientes",
            StandsPotencialCliente: "Movimentos.Stands.PotencialCliente",
            StandsCCComissoesLocadoras: "Movimentos.Stands.CCComissoesLocadoras",
            StandsRentACarProcessamentos: "Movimentos.Stands.ProcessosRentACar",
            StandsProcessoDuplicar: "Movimentos.Stands.DuplicarProcesso",
            StandsRentACarAssistenteFacturacao: "Movimentos.Stands.AssistenteFacturacaoRentACar"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsStandsUtilitarios', {
        statics: {
            ApresentacaoFotos: "Utilitarios.Stands.ApresentacaoFotos",
            ConfigPerfil: "Utilitarios.Stands.PerfilConfig",
            Etiquetas: "Utilitarios.Stands.Etiquetas",
            CatalogoViaturas: "Utilitarios.Stands.CatalogoViaturas"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsSuite', {
        statics: {
            EditarTiposDocumentosSUITE: "Tabelas.TiposDocumentos.Suite",
            ParametrosEstabelecimento: "Tabelas.Entidades.ParametrosEstabelecimentos",
            TiposDocumentosReservas: "Tabelas.TiposDocumentos.TiposDocumentosReservas",
            EditarTabelasAlojamentos: "SuiteModule.AlojamentosView.Show()",
            EditarTabelasAtencoes: "SuiteModule.AtencoesView.Show()",
            EditarTabelasAvarias: "SuiteModule.AvariasView.Show()",
            EditarTabelasBlocosAlojamentos: "SuiteModule.BlocosAlojamentoView.Show()",
            EditarTabelasCaracteristicas: "SuiteModule.CaracteristicasView.Show()",
            EditarTabelasTarifas: "SuiteModule.ConsultaTarifasView.Show()",
            EditarTabelasDescritivosPagamentos: "SuiteModule.DescritivoPagamentoView.Show()",
            EditarTabelasDiárias: "SuiteModule.DiariaView.Show()",
            EditarTabelasEncargos: "SuiteModule.EncargoView.Show()",
            EditarTabelasEntidades: "SuiteModule.EntidadesView.Show()",
            EditarTabelasGruposEncargos: "SuiteModule.GrupoEncargoView.Show()",
            EditarTabelasGrupoLimpeza: "SuiteModule.GrupoLimpezaView.Show()",
            EditarTabelasHóspedes: "SuiteModule.HospedeView.Show()",
            EditarTabelasMotivosInactividade: "SuiteModule.MotivoInactivoView.Show()",
            EditarTabelasOrigensMercados: "SuiteModule.OrigemMercadoView.Show()",
            EditarTabelasPeriodicidadeHospedes: "SuiteModule.PeriodicidadeHospedeView.Show()",
            EditarTabelasRack: "SuiteModule.RackView.Show()",
            EditarTabelasSegmentosMercado: "SuiteModule.SegmentoMercadoView.Show()",
            EditarTabelasSubZonas: "SuiteModule.SubZonasView.Show()",
            EditarTabelasTecnicos: "SuiteModule.TecnicosView.Show()",
            EditarTabelasTiposAlojamentos: "SuiteModule.TipoAlojamentoView.Show()",
            EditarTipoEvento: "SuiteModule.TipoEventoView.Show()",
            EditarTabelasEventos: "SuiteModule.EventoView.Show()",
            EditarTabelasTiposGrupos: "SuiteModule.TipoGrupoView.Show()",
            EditarTabelasTiposIdentificacao: "SuiteModule.TipoIdentificacaoView.Show()",
            EditarTabelasTiposAvarias: "SuiteModule.TiposAvariaView.Show()",
            EditarTabelasTipoCancelamento: "SuiteModule.TiposCancelamentoView.Show()",
            EditarTabelasVoos: "SuiteModule.VoosView.Show()",
            EditarWizardAlojamentos: "SuiteModule.WizardAlojamentosView.Show()",
            EditarTabelasZonasAlojamentos: "SuiteModule.ZonasAlojamentosView.Show()",
            EditarTabelasZonaLimpeza: "SuiteModule.ZonasLimpezaView.Show()",
            EditarTabelasTipoCartaoCredito: "SuiteModule.TipoCartaoCreditoView.Show()",
            EditarTabelasMeioReserva: "SuiteModule.MeioReservaView.Show()",
            EditarTabelasTarifa: "SuiteModule.TarifaView.Show()",
            EditarSeleccionarEstab: "SuiteModule.SeleccionarEstab.Execute()",
            EditarSelectEstab: "SuiteModule.SelectEstab.Execute()",
            EditarWizardTarfias: "SuiteModule.WizardReplicarTarifaView.Show()",
            EditarTabelasPerdidosAchados: "SuiteModule.PerdidoAchadoView.Show()",
            EditarTabelaPrefixo: "SuiteModule.TabelaPrefixoView.Show()",
            EditarTabelaTarifaTelefonica: "SuiteModule.TarifaTelefonicaView.Show()",
            EditarTabelaVIPStatus: "SuiteModule.VIPStatusView.Show()",
            EditarTabelaTitulo: "CommonModule.TitulosView.Show()",
            EditarDespertares: "SuiteModule.DespertaresView.Show()",
            EditarDefinicoesGerais: "IFCModule.DefinicoesGeraisView.Show()",
            EditarTiposInterfaces: "IFCModule.TiposInterfacesView.Show()",
            EditarInterfaces: "IFCModule.InterfacesView.Show()",
            EditarMensagens: "IFCModule.MensagensIFCView.Show()",
            EditarWizardBooking: "SuiteModule.WizardBookingView.Show()",
            EditarReservasOnlineFalhadas: "SuiteModule.ReservasOnlineFalhadasView.Show()",
            EditarMovimentoCaixa: "SuiteModule.MovimentoCaixaView.Show()",
            EditarMovimentoCaixaAB: "SuiteModule.MovimentoCaixaView.0.Show()",
            EditarMovimentoCaixaES: "SuiteModule.MovimentoCaixaView.1.Show()",
            EditarMovimentoCaixaFC: "SuiteModule.MovimentoCaixaView.3.Show()",
            EditarSeleccionarPosto: "SuiteModule.SeleccionarPosto.Execute()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsSuiteConsultas', {
        statics: {
            ConsultaEntradasPrevistas: "SuiteQueriesModule.ShowEntradas.Execute()",
            ConsultaSaidasPrevistas: "SuiteQueriesModule.ShowSaidas.Execute()",
            ConsultaReservas: "SuiteQueriesModule.ShowMapaReservas.Execute()",
            ConsultaHospedesResidentes: "SuiteQueriesModule.ShowHospedesResidentes.Execute()",
            ConsultaFolhaServiço: "SuiteQueriesModule.ShowFolhaServico.Execute()",
            ConsultaMapaCaixa: "SuiteQueriesModule.ShowMapaCaixa.Execute()",
            ConsultaRefeicoes: "SuiteQueriesModule.ShowRefeicoes.Execute()",
            ConsultaSEF: "SuiteQueriesModule.ShowSEF.Execute()",
            ConsultaINE: "SuiteQueriesModule.INEView.Show()",
            ConsultaPolicia: "SuiteQueriesModule.ShowPolicia.Execute()",
            ConsultaBookingPosition: "SuiteModule.BookingPositionView.Show()",
            ConsultaDisponibilidades: "SuiteModule.PlanningDisponibilidadesView.Show()",
            ConsultaPrevisaoReceita: "SuiteModule.PrevisaoReceitaView.Show()",
            ConsultaChannelManager: "SuiteModule.PlanningChannelManagerView.Show()"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsSuiteMovimentos', {
        statics: {
            MovimentosFacturacaoEntidades: "SuiteModule.FacturacaoEntidadesView.Show()",
            MovimentosLançamentosemGrupo: "SuiteModule.LancamentoEncargosGrupoView.Show()",
            MovimentosLançamentos: "SuiteModule.LancamentoMovimentosView.Show()",
            MovimentosNightAudit: "SuiteModule.NightAuditView.Show()",
            MovimentosPlanning: "SuiteModule.PlanningAlojView.Show()",
            MovimentosAtribuicaoAlojamentos: "SuiteModule.AtribAlojView.Show()",
            MovimentosAtribuicaoAlojamentosATRIBALOJ: "SuiteModule.AtribAlojView.ATRIBALOJ.Show()",
            MovimentosAtribuicaoAlojamentosALOJDISP: "SuiteModule.AtribAlojView.ALOJDISP.Show()",
            MovimentosReservas: "SuiteModule.ReservaView.Show()",
            MovimentosConsultaTarifas: "SuiteModule.ConsultaTarifasView.Show()",
            MovimentosRoomStatus: "SuiteModule.RoomStatusView.Show()",
            MovimentosBatchBillings: "#/Client/Movs/SUITE/BatchBillings/EditBatchBillings.html"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsUtilitarios', {
        statics: {
            SubstCodigoArtigos: "Utilitarios.Artigos.SubstCodigo",
            ActivarInactivarArtigos: "Utilitarios.Artigos.ActivarInactivar",
            CatalogoFornecedorImportar: "Utils.Catalogo.Importar",
            CatalogoFornecedorConfigurar: "Utils.Catalogo.Configurar",
            ConfigCheques: "Utilitarios.ConfigCheques",
            AnexosDigitais: "Utilitarios.AnexosDigitais"
        }
    });
    
    Bridge.define('Eticadata.Common.CommandsUtilitariosGRH', {
        statics: {
            EditarAlteracoesGerais: "Utilitarios.Grh.AlteracoesGerais",
            EditarMarcacaoFeriados: "Utilitarios.Grh.MarcacaoFeriados",
            EditHolidays: "Utilitarios.Grh.EditHolidays",
            EditarAcumulados: "Utilitarios.Grh.Acumulados",
            EditarLigacaoRelogioPonto: "Utilitarios.Grh.LigacaoRelogiosPonto",
            EditarConfiguracoesRelogioPonto: "Utilitarios.Grh.ConfiguracoesRelogiosPonto",
            AssitenteDeslocacoes: "Utilitarios.Grh.AssistenteDeslocacoes",
            AssitenteDeslocacoesLancamento: "Utilitarios.Grh.AssistenteDeslocacoesLancamento",
            DataFecho: "Utilitarios.Grh.DataFecho",
            LigacaoCTE: "Utilitarios.Grh.LigacaoCTE",
            DescargaCTE: "Utilitarios.Grh.DescargaCTE",
            LigacaoGTE: "Utilitarios.Grh.LigacaoGTE",
            DescargaGTE: "Utilitarios.Grh.DescargaGTE",
            AcertosIRS: "Utilitarios.Grh.GeracaoDifIRS",
            ReCalcRegistoPessoal: "Utilitarios.Grh.RecalculoRegPessoal",
            ReCalcAjustes: "Utilitarios.Grh.RecalculoAjustes",
            OperacoesMultiEmpresa: "Utilitarios.Grh.OperacoesMultiEmpresa",
            ConfiguracaoGuiaPagamentoMultiEmpresa: "Utilitarios.Grh.ConfiguracaoGuiaPagamentoMultiEmpresa",
            BalancoSocialParam: "Utilitarios.Grh.BalancoSocialParam",
            ParamEnvioEmails: "Utilitarios.Grh.ParamEnvioEmails",
            ParamSelectMapas: "Utilitarios.Grh.ParamSelectMapas",
            RelatorioUnicoParam: "Utilitarios.Grh.RelatorioUnicoParam",
            ParamSelectConfigs: "Utilitarios.Grh.ParamSelectConfigs",
            ParamSelectFeriados: "Utilitarios.Grh.ParamSelectFeriados",
            EditarImportTaxasRetencao: "Utilitarios.Grh.ImportacaoTaxasRetencao"
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons', {
        statics: {
            webUri: "",
            getEmpty: function () {
                return new Eticadata.Common.IconStruct("constructor$1", null, null, null);
            },
            Get: function (path) {
                if (null == path) {
                    return Eticadata.Common.EtiIcons.getEmpty();
                }
    
                if (Bridge.String.startsWith(path, "Eti.Icons.")) {
                    Bridge.String.remove(path, 0, ("Eti.Icons.").length);
                }
    
                return Eticadata.Common.EtiIcons.GetIconStruct(Bridge.String.replaceAll(path, String.fromCharCode(46), String.fromCharCode(47)));
            },
            GetAll: function () {
                return Eticadata.Common.EtiIcons.GetAll$1(Eticadata.Common.EtiIcons, -1);
            },
            GetAll$1: function (tipo, level) {
                level = (level + 1) | 0;
                var result = new Bridge.Dictionary$2(String,String)();
    
                // TODO:
                // A ideia com o Dictionary é que a "key" deveria ter o "caminho" completo para a imagem
                // e o "value" seria apenas a descrição.
                return result;
            },
            GetIconStruct: function (path) {
                if (Eticadata.Common.EtiIcons.webUri.length === 0) {
                    throw new Bridge.Exception("webUri não inicializado! Tem de ser inicializado antes de obter um Icon!");
                }
                return new Eticadata.Common.IconStruct("constructor$1", Eticadata.Common.EtiIcons.GetIconUri(path, Eticadata.Common.IconSize.x16), Eticadata.Common.EtiIcons.GetIconUri(path, Eticadata.Common.IconSize.x24), Eticadata.Common.EtiIcons.GetIconUri(path, Eticadata.Common.IconSize.x32));
            },
            GetIconUri: function (path, iconSize) {
                var size = "";
                switch (iconSize) {
                    case Eticadata.Common.IconSize.x16: 
                        size = "16";
                        break;
                    case Eticadata.Common.IconSize.x24: 
                        size = "24";
                        break;
                    default: 
                        size = "32";
                        break;
                }
    
                return new Eticadata.Uri(Bridge.String.format("{0}/{1}.{2}.png", Eticadata.Common.EtiIcons.webUri, path, size));
    
                //return Eti.GetWebUri(String.Format("Imagens/Icons/{0}.{1}.png", path, size));
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Artigos', {
        statics: {
            getArtigo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Artigos/Artigo");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest', {
        statics: {
            getAmbulancia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Ambulancia");
            },
            getCarocha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Carocha");
            },
            getChaveFendas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ChaveFendas");
            },
            getComponentes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Componentes");
            },
            getCondutor: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Condutor");
            },
            getContaKm: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ContaKm");
            },
            getContracto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Contracto");
            },
            getControloRemoto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ControloRemoto");
            },
            getCores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Cores");
            },
            getDesportivo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Desportivo");
            },
            getEmpilhador: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Empilhador");
            },
            getFerramentas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Ferramentas");
            },
            getGarantia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Garantia");
            },
            getHistorico: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Historico");
            },
            getLocalizacoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Localizacoes");
            },
            getOculosSol: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/OculosSol");
            },
            getOperario: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Operario");
            },
            getParafusoPorca: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ParafusoPorca");
            },
            getPlanosManutencao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/PlanosManutencao");
            },
            getPneu: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Pneu");
            },
            getPolicia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Policia");
            },
            getPoliciaSinaleiro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/PoliciaSinaleiro");
            },
            getSinistros: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Sinistros");
            },
            getServicosInternos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ServicosInternos");
            },
            getServicosExternos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ServicosExternos");
            },
            getMateriais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Materiais");
            },
            getProcuraViatura: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/ProcuraViatura");
            },
            getModelos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Modelos");
            },
            getMarcas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/Marcas");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest.Camiao', {
        statics: {
            getAzul: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/CamiaoAzul");
            },
            getVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/CamiaoVermelho");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest.Carro', {
        statics: {
            getAzul: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/CarroAzul");
            },
            getCinza: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/CarroCinza");
            },
            getLaranja: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/CarroLaranja");
            },
            getVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/CarroVerde");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest.Minibus', {
        statics: {
            getAzul: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/MinibusAzul");
            },
            getBanco: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/MinibusBranco");
            },
            getCinza: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/MinibusCinza");
            },
            getLaranja: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/MinibusLaranja");
            },
            getVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/MinibusVerde");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest.Sedan', {
        statics: {
            getAzul: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SedanAzul");
            },
            getCinza: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SedanCinza");
            },
            getLaranja: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SedanLaranja");
            },
            getVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SedanVerde");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest.Semaforo', {
        statics: {
            getAmarelo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SemaforoAmarelo");
            },
            getOff: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SemaforoOFF");
            },
            getOn: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SemaforoON");
            },
            getVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SemaforoVerde");
            },
            getVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/SemaforoVermelho");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.AutoGest.Tractor', {
        statics: {
            getTractorVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/TractorVerde");
            },
            getTractorVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("AutoGest/TractorVermelho");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Bandeiras', {
        statics: {
            getAE_UnitedArabEmirates: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/AE_UnitedArabEmirates");
            },
            getAO_Angola: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/AO_Angola");
            },
            getBR_Brazil: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/BR_Brazil");
            },
            getCN_China: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/CN_China");
            },
            getCV_CaboVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/CV_CapeVerde");
            },
            getDE_Alemanha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/DE_Germany");
            },
            getFR_Franca: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/FR_France");
            },
            getEG_Egipto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/EG_Egypt");
            },
            getES_Espanha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/ES_Spain");
            },
            getGN_Guine: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/GN_Guinea");
            },
            getGQ_GuineEquatorial: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/GQ_GuineaEquatorial");
            },
            getGR_Grecia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/GR_Greece");
            },
            getGW_BuineBissao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/GW_GuineaBissau");
            },
            getIL_Israel: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/IL_Israel");
            },
            getIT_Italia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/IT_Italy");
            },
            getJP_Japao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/JP_Japan");
            },
            getKY_IlhaoCaimao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/KY_CaymanIslands");
            },
            getLU_Luxemburgo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/LU_Luxembourg");
            },
            getMO_Macao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/MO_Macau");
            },
            getMV_Maldivas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/MV_Maldives");
            },
            getMZ_Mocambique: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/MZ_Mozambique");
            },
            getNO_Noruega: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/NO_Norway");
            },
            getPT_Portugal: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/PT_Portugal");
            },
            getQA_Quatar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/QA_Qatar");
            },
            getRU_Russia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/RU_Russia");
            },
            getSA_ArabiaSaudita: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/SA_SaudiArabia");
            },
            getSC_Seicheles: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/SC_Seychelles");
            },
            getST_SaoTomePrincipe: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/ST_SaoTomeAndPrincipe");
            },
            getTL_TimorLeste: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/TL_TimorLeste");
            },
            getTN_Tunisia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/TN_Tunisia");
            },
            getUK_ReinoUnido: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/UK_UnitedKingdom");
            },
            getUS_EstadosUnidos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/US_UnitedStates");
            },
            getZA_AfricaDoSul: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Bandeiras/ZA_SouthAfrica");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Comercial', {
        statics: {
            getFEExportacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/FEExportacao");
            },
            getFEImportacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/FEImportacao");
            },
            getFERecusarEncomenda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/FERecusarEncomenda");
            },
            getClienteArtigo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ClienteArtigo");
            },
            getClienteFamilia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ClienteFamilia");
            },
            getDescontoEntidadeArtigo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/DescontoEntidadeArtigo");
            },
            getFactoresConversao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/FactoresConversao");
            },
            getRegularizacaoAdiantamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/RegularizacaoAdiantamentos");
            },
            getRupturaStock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/RupturaStock");
            },
            getComposicaoArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ComposicaoArtigos");
            },
            getFiltrarArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/FiltrarArtigos");
            },
            getActualizarArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ActualizarArtigos");
            },
            getAdicionarArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/AdicionarArtigos");
            },
            getSubstituirArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/SubstituirArtigos");
            },
            getActivarArtigosFiltro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ActivarArtigosFiltro");
            },
            getDesactivarArtigosFiltro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/DesactivarArtigosFiltro");
            },
            getConfigurarPrecos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConfigurarPrecos");
            },
            getComprasAcerto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ComprasAcerto");
            },
            getConsultarNumerosRemovidos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultarNumerosRemovidos");
            },
            getEmitirPrecario: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/EmitirPrecario");
            },
            getConsultasDiversasArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultasDiversasArtigos");
            },
            getConsultasDiversasClientes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultasDiversasClientes");
            },
            getConsultasDiversasFornecedores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultasDiversasFornecedores");
            },
            getConsultasDiversasTesouraria: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultasDiversasTesouraria");
            },
            getConsultasDiversasValoresGlobais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultasDiversasValoresGlobais");
            },
            getConsultasDiversasVendedores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/ConsultasDiversasVendedores");
            },
            getDevolucaoEdicoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/DevolucaoEdicoes");
            },
            getSuspensaoDocumentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/SuspensaoDocumentos");
            },
            getOrientacaoHorizontal: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/OrientacaoHorizontal");
            },
            getOrientacaoVerticalParaBaixo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/OrientacaoVerticalParaBaixo");
            },
            getOrientacaoVerticalParaCima: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/OrientacaoVerticalParaCima");
            },
            getOrientacaoVerticalSobreposto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/OrientacaoVerticalSobreposto");
            },
            getInformacaoEscolar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/InformacaoEscolar");
            },
            getQuadroGestaoCaixa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/QuadroGestaoCaixa");
            },
            getAtribuirQuantidadesSistema: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/AtribuirQuantidadesSistema");
            },
            getAdicionarLocais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/AdicionarLocais");
            },
            getAdicionarArtigosStock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Comercial/AdicionarArtigosStock");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Consultas', {
        statics: {
            getMapas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Mapas");
            },
            getPivot: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/PowerPivot");
            },
            getTabela: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Tabela");
            },
            getTabelaAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/TabelaAdicionar");
            },
            getTabelaEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/TabelaEliminar");
            },
            getTabelaOk: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/TabelaOk");
            },
            getTabelaProcurar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/TabelaProcurar");
            },
            getGraficos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Graficos");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Consultas.Grafico', {
        statics: {
            getArea: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/GraficoArea");
            },
            getBarras: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/GraficoBarras");
            },
            getColunas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/GraficoColunas");
            },
            getLinhas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/GraficoLinhas");
            },
            getPontos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/GraficoPontos");
            },
            getTarte: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/GraficoTarte");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Consultas.Reports', {
        statics: {
            getUmaPagina: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Report/UmaPagina");
            },
            getDuasPaginas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Report/DuasPaginas");
            },
            getMaisZoom: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Report/MaisZoom");
            },
            getMenosZoom: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Report/MenosZoom");
            },
            getZoom11: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Consultas/Report/Zoom11");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Contabilidade', {
        statics: {
            getAlinhamentoCentro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/AlinhamentoCentro");
            },
            getAlinhamentoEsquerda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/AlinhamentoEsquerda");
            },
            getAlinhamentoDireita: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/AlinhamentoDireita");
            },
            getAlturaCelula: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/AlturaCelula");
            },
            getCentroCusto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/CentroCusto");
            },
            getConfigurarRodape: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ConfigurarRodape");
            },
            getCorFundo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/CorFundo");
            },
            getCorTexto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/CorTexto");
            },
            getEditarMenus: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/EditarMenus");
            },
            getFluxoCaixa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/FluxoCaixa");
            },
            getInserirCol: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirCol");
            },
            getInserirFuncao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirFuncao");
            },
            getInserirLinha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirLinha");
            },
            getItalico: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/Italico");
            },
            getLarguraCelula: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/LarguraCelula");
            },
            getMostrarEsconderGrelha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/MostrarEsconderGrelha");
            },
            getNegrito: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/Negrito");
            },
            getNumDecimal: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/NumDecimal");
            },
            getNumInteiro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/NumInteiro");
            },
            getPlanoContas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/PlanoContas");
            },
            getQuebraHorizontal: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/QuebraHorizontal");
            },
            getQuebraVertical: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/QuebraVertical");
            },
            getSomatorio: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/Somatorio");
            },
            getSublinhado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/Sublinhado");
            },
            getTexto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/Texto");
            },
            getTipoLetra: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/TipoLetra");
            },
            getInserirLicenca: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/TipoLetra");
            },
            getInserirToPaginas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirToPaginas");
            },
            getInserirData: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirData");
            },
            getInserirNumaPagina: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirNumaPagina");
            },
            getInserirCampoEmpresa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InserirCampoEmpresa");
            },
            getMovimentosF11: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/MovimentosF11");
            },
            getMovimentosF12: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/MovimentosF12");
            },
            getMovimentosPesquisa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/MovimentosPesquisa");
            },
            getMovimentosSHIFTF11: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/MovimentosSHIFTF11");
            },
            getCC100Perc: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/CC100Perc");
            },
            getCCIgualPerc: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/CCIgualPerc");
            },
            getABDRAbrirExcel: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ABDRAbrirExcel");
            },
            getABDREditarNotas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ABDREditarNotas");
            },
            getFichasImo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/FichasImo");
            },
            getOrcDistMeses: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/OrcDistMeses");
            },
            getReavImo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ReavImo");
            },
            getConfiguradorMapas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ConfiguradorMapas");
            },
            getConfigurarContabilidade: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ConfigurarContabilidade");
            },
            getIESTreeIn: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/IESTreeIn");
            },
            getIESTreeOut: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/IESTreeOut");
            },
            getAcertaPagina: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/AcertaPagina");
            },
            getInvestimentosHistorico: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/InvestimentosHistorico");
            },
            getParametrizarMapa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/ParametrizarMapa");
            },
            getError: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/Error");
            },
            getSelecionaDesseleccionaLinhas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Contabilidade/SelecionaDesseleccionaLinhas");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Dashboards', {
        statics: {
            getDashboard: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Dashboards/Dashboard");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Desktop', {
        statics: {
            getConsultasDiversas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ConsultasDiversas");
            },
            getCompromissoAPV: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/CompromissoAPV");
            },
            getIntervencaoOficinas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/IntervencaoOficinas");
            },
            getProducoesTransformacoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ProducoesTransformacoes");
            },
            getConversaoDocumentosVenda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ConversaoDocumentosVenda");
            },
            getEncomendasClientesOutrosDevedores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EncomendasClientesOutrosDevedores");
            },
            getEncomendasFornecedoresOutrosCredores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EncomendasFornecedoresOutrosCredores");
            },
            getEncomendasArmazens: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EncomendasArmazens");
            },
            getIntroducaoOrcamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/IntroducaoOrcamentos");
            },
            getIntroducaoVendas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/IntroducaoVendas");
            },
            getIntroducaoCompras: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/IntroducaoCompras");
            },
            getIntroducaoMovimentosStock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/IntroducaoMovimentosStock");
            },
            getFolhasObra: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/FolhasObra");
            },
            getAberturaCaixa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/AberturaCaixa");
            },
            getAssistenteActualizacaoProcessos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/AssistenteActualizacaoProcessos");
            },
            getCarregamentoCartoesPrePagos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/CarregamentoCartoesPrePagos");
            },
            getComissoesLocadoras: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ComissoesLocadoras");
            },
            getDespesasGerais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/DespesasGerais");
            },
            getEntradaSaidaCaixa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EntradaSaidaCaixa");
            },
            getEntregaFacturacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EntregaFacturacao");
            },
            getEquipamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Equipamentos");
            },
            getFechoCaixa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/FechoCaixa");
            },
            getFolhasCaixa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/FolhasCaixa");
            },
            getImputacaoCustosProveitos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ImputacaoCustosProveitos");
            },
            getMarcacoesOficinas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/MarcacoesOficinas");
            },
            getMateriais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Materiais");
            },
            getMovimentosPrevistos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/MovimentosPrevistos");
            },
            getOrcamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Orcamentos");
            },
            getOrdensReparacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/OrdensReparacao");
            },
            getPedidosApoio: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/PedidosApoio");
            },
            getPotenciaisClientes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/PotenciaisClientes");
            },
            getProcessarAvencas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ProcessarAvencas");
            },
            getProcessarRapel: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ProcessarRapel");
            },
            getProcessosRentACar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ProcessosRent-a-Car");
            },
            getProcuraViaturas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ProcuraViaturas");
            },
            getRecepcao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Recepcao");
            },
            getReparacoesMateriais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ReparacoesMateriais");
            },
            getSinistros: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Sinistros");
            },
            getViagens: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Viagens");
            },
            getABF: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ABF");
            },
            getAlojamentosDisponiveis: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/AlojamentosDisponiveis");
            },
            getAtribuicaoAlojamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/AtribuicaoAlojamentos");
            },
            getAutosMedicao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/AutosMedicao");
            },
            getBalanceteContas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/BalanceteContas");
            },
            getBookingPosition: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/BookingPosition");
            },
            getCalculoIVA: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/CalculoIVA");
            },
            getConfiguracaoCheques: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ConfiguracaoCheques");
            },
            getDeclaracaoPeriodicaIVA: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/DeclaracaoPeriodicaIVA");
            },
            getDisponibilidades: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Disponibilidades");
            },
            getEncargos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Encargos");
            },
            getEstadosConta: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EstadosConta");
            },
            getFacturacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Facturacao");
            },
            getLancamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Lancamentos");
            },
            getListagemDiarios: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ListagemDiarios");
            },
            getMapasFiscaisInvestimento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/MapasFiscaisInvestimento");
            },
            getMapas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Mapas");
            },
            getNightAudit: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/NightAudit");
            },
            getOutrasTabelas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/OutrasTabelas");
            },
            getPos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Pos");
            },
            getTarifarios: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Tarifarios");
            },
            getTarifas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/Tarifas");
            },
            getTiposContrato: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/TiposContrato");
            },
            getAtribuicaoRecursos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/AtribuicaoRecursos");
            },
            getCalculoIVAExigivelNaoLiquidado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/CalculoIVAExigivelNaoLiquidado");
            },
            getImpostoSobreVeiculo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/ImpostoSobreVeiculo");
            },
            getEFacturaComunDocsTransporte: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EFacturaGuiasdeTransporte");
            },
            getEFacturaComunElemFacturas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/EFacturaFacturacao");
            },
            getPlanoDeContas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/PlanodeContas");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Entidades');
    
    Bridge.define('Eticadata.Common.EtiIcons.Entidades.Clientes', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Clientes/Adicionar");
            },
            getCliente: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Clientes/Cliente");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Clientes/Eliminar");
            },
            getClienteOFF: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Clientes/ClienteOFF");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Entidades.Fornecedores', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Fornecedores/Adicionar");
            },
            getFornecedor: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Fornecedores/Fornecedor");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Fornecedores/Eliminar");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Entidades.Outros', {
        statics: {
            getDevedores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Outros/Devedores");
            },
            getCredores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Entidades/Outros/Credores");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.EPortals', {
        statics: {
            getLogotipo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Logotipo/eportals");
            },
            getApv: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/Apv");
            },
            getGce: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/Gce");
            },
            getOficinas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/Oficinas");
            },
            getStands: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/Stands");
            },
            getEcommerce: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/Ecommerce");
            },
            getGrh: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/Grh");
            },
            getCore: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Modulos/EPORTALS");
            },
            getEstrela1: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Estrela1");
            },
            getEstrela2: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Estrela2");
            },
            getEstrela3: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Estrela3");
            },
            getEstrela4: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Estrela4");
            },
            getEstrela5: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/Estrela5");
            },
            getCategorias: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("EPortals/ECommerce/Categorias");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.ERM', {
        statics: {
            getAdicActividade: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/AdicActividade");
            },
            getArmazem: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Armazem");
            },
            getBanco: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Banco");
            },
            getCubes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Cubes");
            },
            getEditar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Editar");
            },
            getEditarEmail: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/EditarEmail");
            },
            getEscola: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Escola");
            },
            getFax: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Fax");
            },
            getFuncionario: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Funcionario");
            },
            getLocadora: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Locadora");
            },
            getMegafone: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Megafone");
            },
            getOperadores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Operadores");
            },
            getTarget: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Target");
            },
            getTecnico: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Tecnico");
            },
            getVendedor: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Vendedor");
            },
            getAgendaMarcacoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/AgendaMarcacoes");
            },
            getFaltas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/Faltas");
            },
            getConversaoClientes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/ConversaoClientes");
            },
            getConversaoContactos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/ConversaoContactos");
            },
            getCompromissoReuniao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/CompromissoReuniao");
            },
            getEstadoAtividadeVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/EstadoVerde");
            },
            getEstadoAtividadeVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/EstadoVermelho");
            },
            getEstadoAtividadeAmarelo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/EstadoAmarelo");
            },
            getAddinOutlook: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/AddinOutlook");
            },
            getEnvioSMS: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("ERM/EnvioSMS");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral');
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Avisos', {
        statics: {
            getAjuda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Ajuda");
            },
            getAlerta: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Alerta");
            },
            getDesconhecido: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Desconhecido");
            },
            getErro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Erro");
            },
            getInformacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Informacao");
            },
            getProibido: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Proibido");
            },
            getStop: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Avisos/Stop");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Backup', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/Adicionar");
            },
            getCarregar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/Carregar");
            },
            getDescarregar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/Descarregar");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/Eliminar");
            },
            getRepor: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/Repor");
            },
            getInicializarDados: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/InicializarDados");
            },
            getActualizarBD: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/ActualizarBD");
            },
            getReporTabelas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/ReporTabelas");
            },
            getBDAtualizada: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDAtualizada");
            },
            getBDDesatualizada: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDDesatualizada");
            },
            getBDNaoEncontrada: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDNaoEncontrada");
            },
            getBDLocalizacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDLocalizacao");
            },
            getBDImportacaoGold: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDImportacaoGold");
            },
            getBDImportarFechar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDImportarFechar");
            },
            getBDImportarExportar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDImportarExportar");
            },
            getBDImportacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDImportacao");
            },
            getBDExportacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Backup/BDExportacao");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Clipboard', {
        statics: {
            getCheio: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Cheio");
            },
            getColar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Colar");
            },
            getCopiar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Copiar");
            },
            getCortar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Cortar");
            },
            getProximo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Proximo");
            },
            getRedo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Redo");
            },
            getUndo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Undo");
            },
            getVazio: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Clipboard/Vazio");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Comandos', {
        statics: {
            getAcerca: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Acerca");
            },
            getActualizar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Actualizar");
            },
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Adicionar");
            },
            getAplicar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Aplicar");
            },
            getCancelar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Cancelar");
            },
            getColar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Colar");
            },
            getCopiar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Copiar");
            },
            getCortar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Cortar");
            },
            getDuplicar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Duplicar");
            },
            getEditar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Editar");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Eliminar");
            },
            getGravar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Gravar");
            },
            getImprimir: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Imprimir");
            },
            getRedo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Redo");
            },
            getSair: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Sair");
            },
            getUndo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Undo");
            },
            getVerificado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Verificado");
            },
            getPreVisualizar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/PreVisualizar");
            },
            getRecalcularCampo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/RecalcularCampo");
            },
            getWebService: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/WebService");
            },
            getDiagnostico: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Comandos/Diagnostico");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Documentos', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Adicionar");
            },
            getAttachment: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Attachment");
            },
            getCertificate: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Certificate");
            },
            getChart: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Chart");
            },
            getCheck: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Check");
            },
            getCartaoCidadao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Cartao");
            },
            getConnection: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Connection");
            },
            getCup: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Cup");
            },
            getDelete: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Delete");
            },
            getDirty: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Dirty");
            },
            getDocument: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Document");
            },
            getDocuments: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Documents");
            },
            getDown: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Down");
            },
            getEdit: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Edit");
            },
            getError: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Error");
            },
            getExchange: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Exchange");
            },
            getFind: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Find");
            },
            getGear: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Gear");
            },
            getGears: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Gears");
            },
            getHeart: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Heart");
            },
            getInfo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Info");
            },
            getInto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Into");
            },
            getLock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Lock");
            },
            getMusic: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Music");
            },
            getNotebook: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Notebook");
            },
            getNovo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Novo");
            },
            getNovos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Novos");
            },
            getOk: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Ok");
            },
            getOut: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Out");
            },
            getPinned: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Pinned");
            },
            getPlain: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Plain");
            },
            getPlainNew: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/PlainNew");
            },
            getPreferencia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Preferencia");
            },
            getPreferencias: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Preferencias");
            },
            getPulse: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Pulse");
            },
            getRefresh: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Refresh");
            },
            getStop: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Stop");
            },
            getText: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Text");
            },
            getTime: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Time");
            },
            getUp: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Up");
            },
            getView: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/View");
            },
            getWarning: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/Warning");
            },
            getZoomIn: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/ZoomIn");
            },
            getZoomOut: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/ZoomOut");
            },
            getPDF: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Documentos/PDF");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Extensions', {
        statics: {
            getAVI: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/AVI");
            },
            getBMP: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/BMP");
            },
            getDOC: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/DOC");
            },
            getDOCX: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/DOCX");
            },
            getEXE: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/EXE");
            },
            getGIF: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/GIF");
            },
            getISO: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/ISO");
            },
            getJPEG: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/JPEG");
            },
            getJPG: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/JPG");
            },
            getMP3: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/MP3");
            },
            getMP4: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/MP4");
            },
            getPDF: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/PDF");
            },
            getPNG: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/PNG");
            },
            getPPT: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/PPT");
            },
            getPPTX: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/PPTX");
            },
            getRAR: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/RAR");
            },
            getTIFF: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/TIFF");
            },
            getTXT: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/TXT");
            },
            getXLS: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/XLS");
            },
            getXLSX: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/XLSX");
            },
            getXML: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/XML");
            },
            getZIP: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Extensions/ZIP");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Favoritos', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Favoritos/Adicionar");
            },
            getFavorito: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Favoritos/Favorito");
            },
            getRemover: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Favoritos/Eliminar");
            },
            getFavoritoMarcado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Favoritos/FavoritoMarcado");
            },
            getFavoritoNaoMarcado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Favoritos/FavoritoNaoMarcado");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Filtro', {
        statics: {
            getFormulario: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Filtro/Formulario");
            },
            getCampos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Filtro/Campos");
            },
            getData: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Filtro/Data");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Navegador', {
        statics: {
            getActual: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Actual");
            },
            getAnterior: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Anterior");
            },
            getAnteriores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Anteriores");
            },
            getDesmarcar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Desmarcar");
            },
            getUltimo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Ultimo");
            },
            getPrimeiro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Primeiro");
            },
            getMarcar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Marcar");
            },
            getProximo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Proximo");
            },
            getProximos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/Proximos");
            },
            getParaBaixo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/ParaBaixo");
            },
            getParaCima: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/ParaCima");
            },
            getTudoBaixo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/TudoBaixo");
            },
            getTudoCima: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Navegador/TudoCima");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Orientacao', {
        statics: {
            getPaisagem: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Orientacao/Paisagem");
            },
            getRetrato: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Orientacao/Retrato");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Pastas', {
        statics: {
            getAdd: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Add");
            },
            getClosed: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Closed");
            },
            getCubes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Cubes");
            },
            getDelete: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Delete");
            },
            getDocument: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Document");
            },
            getEdit: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Edit");
            },
            getFolder: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Folder");
            },
            getForbidden: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Forbidden");
            },
            getGear: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Gear");
            },
            getInformation: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Information");
            },
            getInto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Into");
            },
            getLock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Lock");
            },
            getMovie: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Movie");
            },
            getMusic: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Music");
            },
            getNetwork: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Network");
            },
            getNew: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/New");
            },
            getOk: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Ok");
            },
            getOut: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Out");
            },
            getPreferences: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Preferences");
            },
            getRefresh: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Refresh");
            },
            getTime: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Time");
            },
            getUp: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Up");
            },
            getView: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/View");
            },
            getWarning: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Warning");
            },
            getWindow: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Pastas/Window");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Tabelas', {
        statics: {
            getSeleccionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Seleccionar");
            },
            getSeleccionarCelula: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/SeleccionarCelula");
            },
            getSeleccionarColuna: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/SeleccionarColuna");
            },
            getSeleccionarLinha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/SeleccionarLinha");
            },
            getSeleccionarTudo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/SeleccionarTudo");
            },
            getTabela: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Tabela");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Tabelas.Sql', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Adicionar");
            },
            getCriar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Criar");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Eliminar");
            },
            getExecutar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Executar");
            },
            getSeleccionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Seleccionar");
            },
            getValidar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Validar");
            },
            getVer: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Tabela/Sql/Ver");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Geral.Varios', {
        statics: {
            getOutrasOperacoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Desktop/OutrasOperacoes");
            },
            getVerImagem: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/VerImagem");
            },
            getCalendario: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Calendario");
            },
            getCalendarioHora: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/CalendarioHora");
            },
            getConfig: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Config");
            },
            getConsole: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Console");
            },
            getFullScreen: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/FullScreen");
            },
            getGravarComAvisos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/GravarComAvisos");
            },
            getInternet: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Internet");
            },
            getProcurarWeb: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ProcurarWeb");
            },
            getJanelaOk: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/JanelaOk");
            },
            getJanelaSair: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/JanelaSair");
            },
            getLimparDados: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimparDados");
            },
            getReciclagemGeral: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Reciclagem");
            },
            getReciclagemVazio: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Reciclagem.Vazio");
            },
            getReciclagemCheio: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Reciclagem.Cheio");
            },
            getSeta: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Seta");
            },
            getPause: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Pause");
            },
            getTema: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Tema");
            },
            getSetaDireita: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/SetaDireita");
            },
            getSetaEsquerda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/SetaEsquerda");
            },
            getSetasDireita: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/SetasDireita");
            },
            getSetasEsquerda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/SetasEsquerda");
            },
            getCheckbox: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Checkbox");
            },
            getUnchecked: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Unchecked");
            },
            getIndeterminate: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Indeterminate");
            },
            getUtilitarios: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Utilitarios");
            },
            getHash: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Hash");
            },
            getGraficoConfiguracoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/GraficoConfiguracoes");
            },
            getLimitesDireita: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimitesDireita");
            },
            getLimitesEsquerda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimitesEsquerda");
            },
            getLimitesExterior: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimitesExterior");
            },
            getLimitesInferior: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimitesInferior");
            },
            getLimitesSuperior: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimitesSuperior");
            },
            getArtigos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Artigos");
            },
            getEditar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Editar");
            },
            getInfoSYS: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/InfoSYS");
            },
            getInserirImagem: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/InserirImagem");
            },
            getListagensExportar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ListagensExportar");
            },
            getProcessarDocumento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ProcessarDocumento");
            },
            getChecked: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Checked");
            },
            getUncheck: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Uncheck");
            },
            getListagens: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Listagens");
            },
            getConfigurarImpressora: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ConfigurarImpressora");
            },
            getMultiImpAnterior: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/MultiImpAnterior");
            },
            getMultiImpCancelar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/MultiImpCancelar");
            },
            getMultiImpSeguinte: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/MultiImpSeguinte");
            },
            getFonte: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Fonte");
            },
            getAlterarFundo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/AlterarFundo");
            },
            getEncomendaArtigo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/EncomendaArtigo");
            },
            getIntegrarDocumento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/IntegrarEncomenda");
            },
            getDocumentosEncargo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/DocumentosEncargo");
            },
            getDistribuirEncargos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/EncargosDistribuir");
            },
            getMapasIMO: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/MapasIMO");
            },
            getFornecedoresArtigo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/FornecedoresArtigo");
            },
            getDireccoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Direccoes");
            },
            getEnviarEmail: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/EnviarEmail");
            },
            getPesquisas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Pesquisas");
            },
            getUtilizadoresPermissao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/UtilizadoresPermissao");
            },
            getUtilizadoresPermissaoGrupo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/UtilizadoresPermissaoGrupo");
            },
            getUtilizadoresSemPermissao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/UtilizadoresSemPermissao");
            },
            getUtilizadoresSemPermissaoGrupo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/UtilizadoresSemPermissaoGrupo");
            },
            getImportaPerifericos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ImportaPerifericos");
            },
            getCamposAdicionais: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/CamposAdicionais");
            },
            getBullet: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Bullet");
            },
            getBulletOff: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/BulletOff");
            },
            getOnTree: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OnTree");
            },
            getOnTreeClose: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OnTreeClose");
            },
            getOnTreeEdit: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OnTreeEdit");
            },
            getOnTreeOpen: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OnTreeOpen");
            },
            getOnTreeRemove: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OnTreeRemove");
            },
            getOnTreeAdd: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OnTreeAdd");
            },
            getOrdenarAZ: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OrdenarAZ");
            },
            getOrdenarZA: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/OrdenarZA");
            },
            getFecharAplicacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/FecharAplicacao");
            },
            getEditarUtilizadores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/EditarUtilizadores");
            },
            getLimparFiltro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimparFiltro");
            },
            getEmitir: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Emitir");
            },
            getCursor: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Cursor");
            },
            getAvisarUtilizadores: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/AvisarUtilizadores");
            },
            getConfigurarMapa: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ConfigurarMapa");
            },
            getLimparImagem: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/LimparImagem");
            },
            getGerarDocumento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/GerarDocumento");
            },
            getEventosRegrasValidacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/EventosRegrasValidacao");
            },
            getActivarLicenca: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ActivarLicenca");
            },
            getCarregarConfiguracoesAssemblies: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/CarregarConfiguracoesAssemblies");
            },
            getConfirmarProcessamento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/ConfirmarProcessamento");
            },
            getFalhaRede: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/FalhaRede");
            },
            getUsersRede: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/UsersRede");
            },
            getDrag: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Drag");
            },
            getLogo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Logo");
            },
            getRodarDireita: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/RodarDireita");
            },
            getRodarEsquerda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/RodarEsquerda");
            },
            getLock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Lock");
            },
            getUnlock: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/Unlock");
            },
            geteFatura: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Geral/Varios/eFatura");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.GRH', {
        statics: {
            getAccoesFormacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/AccoesFormacao");
            },
            getAmbulancia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Ambulancia");
            },
            getCertificado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Certificado");
            },
            getChapeuGraduado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/ChapeuGraduado");
            },
            getCompetencias: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Competencias");
            },
            getConsultasExames: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/ConsultasExames");
            },
            getCursos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Cursos");
            },
            getDoente: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Doente");
            },
            getEntidadesPrestServicos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/EntidadesPrestServicos");
            },
            getGraduado: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Graduado");
            },
            getGuarda: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Guarda");
            },
            getMedicamentos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Medicamentos");
            },
            getPolicia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Policia");
            },
            getProfissionaisSaude: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/ProfissionaisSaude");
            },
            getSirurgiao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Sirurgiao");
            },
            getTermometro: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Termometro");
            },
            getTiposExames: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/TiposExames");
            },
            getEnviarEmailFuncionarios: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/EnviarEmailFuncionarios");
            },
            getEnviarEmailResponsavel: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/EnviarEmailResponsavel");
            },
            getEnviarEmailRpt: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/EnviarEmailRpt");
            },
            getImprimirFolha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/ImprimirFolha");
            },
            getMapaResumo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/MapaResumo");
            },
            getVisualizarFolha: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/VisualizarFolha");
            },
            getCessacaoContrato: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/CessacaoContrato");
            },
            getGuiaPagamentoMapaIGFCSS: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/GuiaPagamentoMapaIGFCSS");
            },
            getDiasUteis: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/DiasUteis");
            },
            getDescendentes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/Descendentes");
            },
            getAbonosDescontosFixos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/AbonosDescontosFixos");
            },
            getRegistoPessoal: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/RegistoPessoal");
            },
            getGerarAnexarFicheiros: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GRH/GerarAnexarFicheiros");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.GTMotive', {
        statics: {
            getCreate: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GTMotive/create");
            },
            getGear: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GTMotive/gear");
            },
            getRead: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GTMotive/read");
            },
            getAsk: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("GTMotive/ask");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Hotel', {
        statics: {
            getCalendario: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Calendario");
            },
            getFamilia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Familia");
            },
            getHelpdesk: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Helpdesk");
            },
            getPlaneamento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Planeamento");
            },
            getReservas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Reservas");
            },
            getToolbox: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Toolbox");
            },
            getWizard: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Wizard");
            },
            getContinue: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/continue");
            },
            getInsert: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Insert");
            },
            getPause: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Pause");
            },
            getRefresh: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Refresh");
            },
            getSend: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Send");
            },
            getStart: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Start");
            },
            getStop: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Stop");
            },
            getDespertares: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/Despertares");
            },
            getGravacaoChaves: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/gracacao_chaves");
            },
            getRoomStatus: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/room_status");
            },
            getRoomStatus2: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Hotel/room_status2");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Integrador', {
        statics: {
            getExecutaCalendarizacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Integrador/ExecutaCalendarizacao");
            },
            getExecutaExportacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Integrador/ExecutaExportacao");
            },
            getExecutaImportacao: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Integrador/ExecutaImportacao");
            },
            getExecutaTransferencia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Integrador/ExecutaTransferencia");
            },
            getIntegradorProgramacaoTarefas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Integrador/IntegradorProgramacaoTarefas");
            },
            getIntegradorTransferencia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Integrador/IntegradorTransferencia");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Medical', {
        statics: {
            getConsultations: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Consultations/MedicalConsultations");
            },
            getOpenConsultations: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Consultations/MedicalOpenConsultations");
            },
            getCustomerRFI: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/CustomerRFI/MedicalCustomerRFI");
            },
            getDeclarations: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Declarations/MedicalDeclarations");
            },
            getDoctor: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Doctor/MedicalDoctor");
            },
            getExcel: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Files/excel");
            },
            getFicheirogenerico: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Files/ficheiro_generico");
            },
            getPdf: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Files/pdf");
            },
            getWord: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Files/word");
            },
            getHistoryDoctorPatients: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/History/MedicalHistoryDoctorPatients");
            },
            getMedicamentsInfomed: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Medicaments/MedicalMedicamentsInfomed");
            },
            getMedicamentsPrescription: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/MedicamentsPrescription/MedicalMedicamentsPrescription");
            },
            getMCDTsHistoric: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/MCDTsHistoric/MCDTsHistoric");
            },
            getMCDTsInsert: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/MCDTsInsert/MCDTsInsert");
            },
            getMCDTsLaterality: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/MCDTsLaterality/MCDTsLaterality");
            },
            getMCDTsObject: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/MCDTsObject/MCDTsObject");
            },
            getMCDTsPrescription: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/MCDTsPrescription/MCDTsPrescription");
            },
            getNurse: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Nurse/MedicalNurse");
            },
            getOdontograma: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Odontograma/MedicalOdontograma");
            },
            getDate: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Others/MedicalDate");
            },
            getNamePatient: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Patient/MedicalNamePatient");
            },
            getSchedule: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Schedule/MedicalSchedule");
            },
            getTimetables: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Timetables/MedicalTimetables");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Medical.Invoice', {
        statics: {
            getDocInvoice: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Billing/MedicalInvoice");
            },
            getCancellationInvoice: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Billing/CancellationInvoice/CancellationInvoice");
            },
            getCustomersInvoice: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Billing/CustomersInvoice/CustomersInvoice");
            },
            getDoctorsInvoice: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Billing/DoctorsInvoice/DoctorsInvoice");
            },
            getPatientsInvoice: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Medical/Billing/PatientsInvoice/PatientsInvoice");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Modulos', {
        statics: {
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Adicionar");
            },
            getAmarelo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Amarelo");
            },
            getDependencia: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Dependencia");
            },
            getEditar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Editar");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Eliminar");
            },
            getModulo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Modulo");
            },
            getNovo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Novo");
            },
            getPreferencias: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Preferencias");
            },
            getProcurar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Procurar");
            },
            getSubstituir: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Substituir");
            },
            getVer: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Ver");
            },
            getVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Verde");
            },
            getVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Modulos/Vermelho");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Obras', {
        statics: {
            getBerbequim: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Berbequim");
            },
            getCamiaoAzul: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/CamiaoAzul");
            },
            getCamiaoVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/CamiaoVermelho");
            },
            getChave: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Chave");
            },
            getEditorFormulas: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/EditorFormulas");
            },
            getEmpilhador: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Empilhador");
            },
            getFabrica: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Fabrica");
            },
            getMartelo: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Martelo");
            },
            getOperario1: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Operario1");
            },
            getOperario2: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Operario2");
            },
            getOperario3: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Operario3");
            },
            getOperario4: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Operario4");
            },
            getPlaneamento: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/Planeamento");
            },
            getPorcaParafuso: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/PorcaParafuso");
            },
            getTractorVerde: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/TractorVerde");
            },
            getTractorVermelho: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Obras/TractorVermelho");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.POS', {
        statics: {
            getPerfilPerifericosTestar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("POS/PerfilPerifericosTestar");
            },
            getConfigurarCheques: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("POS/ConfigurarCheques");
            },
            getImprimirCheques: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("POS/ImprimirCheques");
            },
            getCarregamentoCartoesPrePagos: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("POS/CarregamentoCartoesPrePagos");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.EtiIcons.Utilizadores', {
        statics: {
            getActualizar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Actualizar");
            },
            getAdicionar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Adicionar");
            },
            getBloquear: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Bloquear");
            },
            getEliminar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Eliminar");
            },
            getInformacoes: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Informacoes");
            },
            getMensagem: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Mensagem");
            },
            getPreferencias: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Preferencias");
            },
            getProcurar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Procurar");
            },
            getRegisto: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Registo");
            },
            getSair: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Sair");
            },
            getUtilizador: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Utilizador");
            },
            getVoltar: function () {
                return Eticadata.Common.EtiIcons.GetIconStruct("Utilizadores/Voltar");
            }
        }
    });
    
    Bridge.define('Eticadata.Common.IconSize', {
        statics: {
            x16: 0,
            x24: 1,
            x32: 2
        },
        $enum: true
    });
    
    Bridge.define('Eticadata.Common.IconStruct', {
        uri16: null,
        uri24: null,
        uri32: null,
        constructor: function () {
    
        },
        constructor$1: function (uri16, uri24, uri32) {
            this.uri16 = uri16;
            this.uri24 = uri24;
            this.uri32 = uri32;
        },
        getIcon16: function () {
            return this.uri16;
        },
        getIcon24: function () {
            return this.uri24;
        },
        getIcon32: function () {
            return this.uri32;
        }
    });
    
    
    
    Bridge.init();
})(this);
