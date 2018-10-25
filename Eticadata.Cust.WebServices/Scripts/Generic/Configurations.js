var Configs = (function () {
    // Configurações de USER
    var Get_BColorLinImPar = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.BColorLinImPar, false, ""); };
    var Set_BColorLinImPar = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.BColorLinImPar, false, "", pValue); };
    var Get_FColorLinImpar = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.FColorLinImpar, false, ""); };
    var Set_FColorLinImpar = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.FColorLinImpar, false, "", pValue); };
    var Get_BColorLinPar = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.BColorLinPar, false, ""); };
    var Set_BColorLinPar = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.BColorLinPar, false, "", pValue); };
    var Get_FColorLinPar = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.FColorLinPar, false, ""); };
    var Set_FColorLinPar = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.FColorLinPar, false, "", pValue); };
    var Get_BColorTxtInform = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.BColorTxtInform, false, ""); };
    var Set_BColorTxtInform = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.BColorTxtInform, false, "", pValue); };
    var Get_FColorTxtBloq = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.FColorTxtBloq, false, ""); };
    var Set_FColorTxtBloq = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.FColorTxtBloq, false, "", pValue); };
    var Get_cSHELLUseMDILayout = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cSHELLUseMDILayout, false, false); };
    var Set_cSHELLUseMDILayout = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cSHELLUseMDILayout, false, false, pValue); };
    var Get_cJanelasMaximizadas = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cJanelasMaximizadas, false, false); };
    var Set_cJanelasMaximizadas = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cJanelasMaximizadas, false, false, pValue); };
    var Get_cJanelasMultiplas = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cJanelasMultiplas, false, false); };
    var Set_cJanelasMultiplas = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cJanelasMultiplas, false, false, pValue); };
    var Get_cUsaCombosSimplificadas = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cUsaCombosSimplificadas, false, false); };
    var Set_cUsaCombosSimplificadas = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cUsaCombosSimplificadas, false, false, pValue); };
    var Get_MostrarJanelaModulosExcluir = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.MostrarJanelaModulosExcluir, false, false); };
    var Set_MostrarJanelaModulosExcluir = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.MostrarJanelaModulosExcluir, false, false, pValue); };
    var Get_cUsaCacheListas = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cUsaCacheListas, false, false); };
    var Set_cUsaCacheListas = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cUsaCacheListas, false, false, pValue); };
    var Get_cIntervaloRefreshCache = function () { return GetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cIntervaloRefreshCache, false, 30); };
    var Set_cIntervaloRefreshCache = function (pValue) { SetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cIntervaloRefreshCache, false, 30, pValue); };
    var Get_cDashboardIntervalGOP = function () { return GetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cDashboardIntervalGOP, false, 30); };
    var Set_cDashboardIntervalGOP = function (pValue) { SetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cDashboardIntervalGOP, false, 30, pValue); };
    var Get_cInsercaoDadosBatch = function () { return GetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cInsercaoDadosBatch, false, 0); };
    var Set_cInsercaoDadosBatch = function (pValue) { SetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cInsercaoDadosBatch, false, 0, pValue); };
    var Get_cSeccaoDefeito = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cSeccaoDefeito, false, false); };
    var Set_cSeccaoDefeito = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cSeccaoDefeito, false, false, pValue); };
    var Get_cCRMUseSignatureEmail = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMUseSignatureEmail, false, false); };
    var Set_cCRMUseSignatureEmail = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMUseSignatureEmail, false, false, pValue); };
    var Get_cCRMSignatureEmailHTML = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMSignatureEmailHTML, false, ""); };
    var Set_cCRMSignatureEmailHTML = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMSignatureEmailHTML, false, "", pValue); };
    var Get_cCRMSignatureEmailText = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMSignatureEmailText, false, ""); };
    var Set_cCRMSignatureEmailText = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMSignatureEmailText, false, "", pValue); };
    var Get_cCRMNotificationMinutes = function () { return GetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMNotificationMinutes, false, 5); };
    var Set_cCRMNotificationMinutes = function (pValue) { SetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMNotificationMinutes, false, 5, pValue); };
    var Get_cCRMUseNotifications = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMUseNotifications, false, true); };
    var Set_cCRMUseNotifications = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMUseNotifications, false, true, pValue); };
    var Get_cCRMConfigOutlookIp = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMConfigOutlookIp, false, "127.0.0.1"); };
    var Set_cCRMConfigOutlookIp = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMConfigOutlookIp, false, "127.0.0.1", pValue); };
    var Get_cCRMConfigOutlookPort = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMConfigOutlookPort, false, "4525"); };
    var Set_cCRMConfigOutlookPort = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMConfigOutlookPort, false, "4525", pValue); };
    var Get_cMostraJanelaDescargaCTB = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraJanelaDescargaCTB, false, ""); };
    var Set_cMostraJanelaDescargaCTB = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraJanelaDescargaCTB, false, "", pValue); };
    var Get_cActualizaAutoMovPrevReais = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cActualizaAutoMovPrevReais, false, true); };
    var Set_cActualizaAutoMovPrevReais = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cActualizaAutoMovPrevReais, false, true, pValue); };
    var Get_cRibbonTheme = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cRibbonTheme, false, "CIN"); };
    var Set_cRibbonTheme = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cRibbonTheme, false, "CIN", pValue); };
    var Get_cF11GravaMovimento = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cF11GravaMovimento, false, false); };
    var Set_cF11GravaMovimento = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cF11GravaMovimento, false, false, pValue); };
    var Get_cMostraEstadoConta = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraEstadoConta, false, false); };
    var Set_cMostraEstadoConta = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraEstadoConta, false, false, pValue); };
    var Get_cActualizaCambioHistorico = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cActualizaCambioHistorico, false, false); };
    var Set_cActualizaCambioHistorico = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cActualizaCambioHistorico, false, false, pValue); };
    var Get_cADAbrirJanela = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cADAbrirJanela, false, false); };
    var Set_cADAbrirJanela = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cADAbrirJanela, false, false, pValue); };
    var Get_cADSincronizarImgs = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cADSincronizarImgs, false, false); };
    var Set_cADSincronizarImgs = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cADSincronizarImgs, false, false, pValue); };
    var Get_cAvisaDocRepetidos = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cAvisaDocRepetidos, false, false); };
    var Set_cAvisaDocRepetidos = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cAvisaDocRepetidos, false, false, pValue); };
    var Get_cMostraDistCC = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraDistCC, false, false); };
    var Set_cMostraDistCC = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraDistCC, false, false, pValue); };
    var Get_cMostraDistFX = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraDistFX, false, false); };
    var Set_cMostraDistFX = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraDistFX, false, false, pValue); };
    var Get_cMostraEstadoDiario = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraEstadoDiario, false, false); };
    var Set_cMostraEstadoDiario = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cMostraEstadoDiario, false, false, pValue); };
    var Get_cOrdenarPorDataNumero = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cOrdenarPorDataNumero, false, false); };
    var Set_cOrdenarPorDataNumero = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cOrdenarPorDataNumero, false, false, pValue); };
    var Get_cDashboardPreferidoGOP = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cDashboardPreferidoGOP, false, "983af897-976e-44b5-6aba-f130ba0297a7"); };
    var Set_cDashboardPreferidoGOP = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cDashboardPreferidoGOP, false, "", pValue); };
    var Get_cCRMAddRelationsOnSelector = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMAddRelationsOnSelector, false, false); };
    var Set_cCRMAddRelationsOnSelector = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMAddRelationsOnSelector, false, false, pValue); };
    var Get_cCRMServerSMTPActiveUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPActiveUser, false, ""); };
    var Set_cCRMServerSMTPActiveUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPActiveUser, false, "", pValue); };
    var Get_cCRMServerSMTPUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPUser, false, ""); };
    var Set_cCRMServerSMTPUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPUser, false, "", pValue); };
    var Get_cCRMServerSMTPPortUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPPortUser, false, ""); };
    var Set_cCRMServerSMTPPortUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPPortUser, false, "", pValue); };
    var Get_cCRMServerSMTPUseSSLUser = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPUseSSLUser, false, false); };
    var Set_cCRMServerSMTPUseSSLUser = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPUseSSLUser, false, false, pValue); };
    var Get_cCRMServerSMTPUseAuthenticationUser = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPUseAuthenticationUser, false, false); };
    var Set_cCRMServerSMTPUseAuthenticationUser = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPUseAuthenticationUser, false, false, pValue); };
    var Get_cCRMServerSMTPLoginUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPLoginUser, false, ""); };
    var Set_cCRMServerSMTPLoginUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPLoginUser, false, "", pValue); };
    var Get_cCRMServerSMTPPasswordUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPPasswordUser, false, ""); };
    var Set_cCRMServerSMTPPasswordUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPPasswordUser, false, "", pValue); };
    var Get_cCRMServerSMTPFormatRDLUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPFormatRDLUser, false, ""); };
    var Set_cCRMServerSMTPFormatRDLUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPFormatRDLUser, false, "", pValue); };
    var Get_cCRMServerSMTPFormatRPTUser = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPFormatRPTUser, false, ""); };
    var Set_cCRMServerSMTPFormatRPTUser = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cCRMServerSMTPFormatRPTUser, false, "", pValue); };
    var Get_cPathJRE = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cPathJRE, false, ""); };
    var Set_cPathJRE = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cPathJRE, false, "", pValue); };
    var Get_cGOPUseSaveNotifications = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPUseSaveNotifications, false, true); };
    var Set_cGOPUseSaveNotifications = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPUseSaveNotifications, false, true, pValue); };
    var Get_cGOPSavePeriodicity = function () { return GetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPSavePeriodicity, false, 5); };
    var Set_cGOPSavePeriodicity = function (pValue) { SetInt(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPSavePeriodicity, false, 5, pValue); };
    var Get_cGOPOrcListRec = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcListRec, false, ""); };
    var Set_cGOPOrcListRec = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcListRec, false, "", pValue); };
    var Get_cGOPOrcListRecDist = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcListRecDist, false, ""); };
    var Set_cGOPOrcListRecDist = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcListRecDist, false, "", pValue); };
    var Get_cGOPProjListRec = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPProjListRec, false, ""); };
    var Set_cGOPProjListRec = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPProjListRec, false, "", pValue); };
    var Get_cGOPProjListRecDist = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPProjListRecDist, false, ""); };
    var Set_cGOPProjListRecDist = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPProjListRecDist, false, "", pValue); };
    var Get_cGOPOrcExportGlobal = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcExportGlobal, false, ""); };
    var Set_cGOPOrcExportGlobal = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcExportGlobal, false, "", pValue); };
    var Get_cGOPOrcExportErros = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcExportErros, false, ""); };
    var Set_cGOPOrcExportErros = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPOrcExportErros, false, "", pValue); };
    var Get_cGOPReorcExport = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPReorcExport, false, ""); };
    var Set_cGOPReorcExport = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.cGOPReorcExport, false, "", pValue); };
    // Configurações de USER - ALL APPS
    var Get_tLanguage = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.tLanguage, true, ""); };
    var Set_tLanguage = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.Configuracao, Eticadata.ERP.EtiEnums.Configuração.tLanguage, true, "", pValue); };
    // Configurações de EMPRESA / USER - ALL APPS
    var Get_Usr_cProcArtigo = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcArtigo, true, ""); };
    var Set_Usr_cProcArtigo = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcArtigo, true, "", pValue); };
    var Get_Usr_cProcArmazens = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcArmazens, true, ""); };
    var Set_Usr_cProcArmazens = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcArmazens, true, "", pValue); };
    var Get_Usr_cProcLotes = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcLotes, true, ""); };
    var Set_Usr_cProcLotes = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcLotes, true, "", pValue); };
    var Get_Usr_cProcClientes = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcClientes, true, ""); };
    var Set_Usr_cProcClientes = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcClientes, true, "", pValue); };
    var Get_Usr_cProcFornecedores = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcFornecedores, true, ""); };
    var Set_Usr_cProcFornecedores = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcFornecedores, true, "", pValue); };
    var Get_Usr_cProcVendedores = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcVendedores, true, ""); };
    var Set_Usr_cProcVendedores = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcVendedores, true, "", pValue); };
    var Get_Usr_cProcFuncionarios = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcFuncionarios, true, ""); };
    var Set_Usr_cProcFuncionarios = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcFuncionarios, true, "", pValue); };
    var Get_Usr_cProcHospedes = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcHospedes, true, ""); };
    var Set_Usr_cProcHospedes = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcHospedes, true, "", pValue); };
    var Get_Usr_cProcEntidades = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcEntidades, true, ""); };
    var Set_Usr_cProcEntidades = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcEntidades, true, "", pValue); };
    var Get_Usr_cProcMedicalSpecialty = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcMedicalSpecialty, true, ""); };
    var Set_Usr_cProcMedicalSpecialty = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcMedicalSpecialty, true, "", pValue); };
    var Get_Usr_cProcTimetables = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcTimetables, true, ""); };
    var Set_Usr_cProcTimetables = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcTimetables, true, "", pValue); };
    var Get_Usr_cProcMedicalProdut = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcMedicalProdut, true, ""); };
    var Set_Usr_cProcMedicalProdut = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cProcMedicalProdut, true, "", pValue); };
    var Get_AUT_User_Viatura = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cAUT_User_Viatura, true, ""); };
    var Set_AUT_User_Viatura = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cAUT_User_Viatura, true, "", pValue); };
    var Get_APV_User_Equipamento = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cAPV_User_Equipamento, true, ""); };
    var Set_APV_User_Equipamento = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaUser, Eticadata.ERP.EtiEnums.ConfigEmpresaUser.cAPV_User_Equipamento, true, "", pValue); };
    // Configurações de EMPRESA / USER / EXERCCIO
    var Get_tActualizaData = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigUserEmpExerc, Eticadata.ERP.EtiEnums.ConfigUserEmpExerc.tActualizaData, true, "0"); };
    var Set_tActualizaData = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigUserEmpExerc, Eticadata.ERP.EtiEnums.ConfigUserEmpExerc.tActualizaData, true, "0", pValue); };
    // Configurações de EMPRESA - ALL APPS
    var Get_Emp_cProcArtigo = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcArtigo, true, ""); };
    var Set_Emp_cProcArtigo = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcArtigo, true, "", pValue); };
    var Get_Emp_cProcArmazens = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcArmazens, true, ""); };
    var Set_Emp_cProcArmazens = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcArmazens, true, "", pValue); };
    var Get_Emp_cProcLotes = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcLotes, true, ""); };
    var Set_Emp_cProcLotes = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcLotes, true, "", pValue); };
    var Get_Emp_cProcClientes = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcClientes, true, ""); };
    var Set_Emp_cProcClientes = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcClientes, true, "", pValue); };
    var Get_Emp_cProcFornecedores = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcFornecedores, true, ""); };
    var Set_Emp_cProcFornecedores = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcFornecedores, true, "", pValue); };
    var Get_Emp_cProcVendedores = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcVendedores, true, ""); };
    var Set_Emp_cProcVendedores = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcVendedores, true, "", pValue); };
    var Get_Emp_cProcFuncionarios = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcFuncionarios, true, ""); };
    var Set_Emp_cProcFuncionarios = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcFuncionarios, true, "", pValue); };
    var Get_Emp_cProcHospedes = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcHospedes, true, ""); };
    var Set_Emp_cProcHospedes = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcHospedes, true, "", pValue); };
    var Get_Emp_cProcEntidades = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcEntidades, true, ""); };
    var Set_Emp_cProcEntidades = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcEntidades, true, "", pValue); };
    var Get_Emp_cProcMedicalSpecialty = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcMedicalSpecialty, true, ""); };
    var Set_Emp_cProcMedicalSpecialty = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcMedicalSpecialty, true, "", pValue); };
    var Get_Emp_cProcTimetables = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcTimetables, true, ""); };
    var Set_Emp_cProcTimetables = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcTimetables, true, "", pValue); };
    var Get_Emp_cProcMedicalProdut = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcMedicalProdut, true, ""); };
    var Set_Emp_cProcMedicalProdut = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cProcMedicalProdut, true, "", pValue); };
    var Get_AUT_Emp_Viatura = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.AUT_Emp_Viatura, true, ""); };
    var Set_AUT_Emp_Viatura = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.AUT_Emp_Viatura, true, "", pValue); };
    var Get_APV_Emp_Equipamento = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.APV_Emp_Equipamento, true, ""); };
    var Set_APV_Emp_Equipamento = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.APV_Emp_Equipamento, true, "", pValue); };
    var Get_cAssinaturaDigital_UsaAssinatura = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cAssinaturaDigital_UsaAssinatura, true, ""); };
    var Set_cAssinaturaDigital_UsaAssinatura = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.cAssinaturaDigital_UsaAssinatura, true, "", pValue); };
    var Get_tErm_SMSMaxLength = function () { return GetInt(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.tErm_SMSMaxLength, true, 0); };
    var Set_tErm_SMSMaxLength = function (pValue) { SetInt(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.tErm_SMSMaxLength, true, 0, pValue); };
    var Get_tErm_TipoIntegracao = function () { return GetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.tErm_TipoIntegracao, true, ""); };
    var Set_tErm_TipoIntegracao = function (pValue) { SetString(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresa, Eticadata.ERP.EtiEnums.ConfigEmpresa.tErm_TipoIntegracao, true, "", pValue); };
    // Configurações de EMPRESA / EXERCICIO
    var Get_cRegimeIVACaixa = function () { return GetBool(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaExerc, Eticadata.ERP.EtiEnums.ConfigEmpresaExerc.cRegimeIVACaixa, true, false); };
    var Set_cRegimeIVACaixa = function (pValue) { SetBool(Eticadata.ERP.EtiEnums.ConfigType.ConfigEmpresaExerc, Eticadata.ERP.EtiEnums.ConfigEmpresaExerc.cRegimeIVACaixa, true, false, pValue); };
    // Específico - 
    var GetString = function (pType, pValue, pAllApps, pDefault) {
        return MyShell().CachedConfigs.Get(pType, pValue, pAllApps, pDefault);
    };
    var SetString = function (pType, pConf, pAllApps, pDefault, pValue) {
        MyShell().CachedConfigs.Set(pType, pConf, pAllApps, pDefault, pValue);
    };
    var GetBool = function (pType, pValue, pAllApps, pDefault) {
        var val = (MyShell().CachedConfigs.Get(pType, pValue, pAllApps, pDefault) + '').toLowerCase();
        return (val === 'true' || val === '1');
    };
    var SetBool = function (pType, pConf, pAllApps, pDefault, pValue) {
        if (pValue) {
            MyShell().CachedConfigs.Set(pType, pConf, pAllApps, pDefault, "True");
        }
        else {
            MyShell().CachedConfigs.Set(pType, pConf, pAllApps, pDefault, "False");
        }
    };
    var GetInt = function (pType, pConf, pAllApps, pDefault) {
        return parseInt(MyShell().CachedConfigs.Get(pType, pConf, pAllApps, pDefault));
    };
    var SetInt = function (pType, pConf, pAllApps, pDefault, pValue) {
        MyShell().CachedConfigs.Set(pType, pConf, pAllApps, pDefault, pValue);
    };
    return {
        Get_cCRMUseSignatureEmail: Get_cCRMUseSignatureEmail,
        Set_cCRMUseSignatureEmail: Set_cCRMUseSignatureEmail,
        Get_cCRMSignatureEmailHTML: Get_cCRMSignatureEmailHTML,
        Set_cCRMSignatureEmailHTML: Set_cCRMSignatureEmailHTML,
        Get_cCRMSignatureEmailText: Get_cCRMSignatureEmailText,
        Set_cCRMSignatureEmailText: Set_cCRMSignatureEmailText,
        Get_cCRMNotificationMinutes: Get_cCRMNotificationMinutes,
        Set_cCRMNotificationMinutes: Set_cCRMNotificationMinutes,
        Get_cCRMUseNotifications: Get_cCRMUseNotifications,
        Set_cCRMUseNotifications: Set_cCRMUseNotifications,
        Get_tLanguage: Get_tLanguage,
        Set_tLanguage: Set_tLanguage,
        Get_BColorLinImPar: Get_BColorLinImPar,
        Set_BColorLinImPar: Set_BColorLinImPar,
        Get_FColorLinImpar: Get_FColorLinImpar,
        Set_FColorLinImpar: Set_FColorLinImpar,
        Get_BColorLinPar: Get_BColorLinPar,
        Set_BColorLinPar: Set_BColorLinPar,
        Get_FColorLinPar: Get_FColorLinPar,
        Set_FColorLinPar: Set_FColorLinPar,
        Get_BColorTxtInform: Get_BColorTxtInform,
        Set_BColorTxtInform: Set_BColorTxtInform,
        Get_FColorTxtBloq: Get_FColorTxtBloq,
        Set_FColorTxtBloq: Set_FColorTxtBloq,
        Get_cSHELLUseMDILayout: Get_cSHELLUseMDILayout,
        Set_cSHELLUseMDILayout: Set_cSHELLUseMDILayout,
        Get_cJanelasMaximizadas: Get_cJanelasMaximizadas,
        Set_cJanelasMaximizadas: Set_cJanelasMaximizadas,
        Get_cJanelasMultiplas: Get_cJanelasMultiplas,
        Set_cJanelasMultiplas: Set_cJanelasMultiplas,
        Get_cUsaCombosSimplificadas: Get_cUsaCombosSimplificadas,
        Set_cUsaCombosSimplificadas: Set_cUsaCombosSimplificadas,
        Get_MostrarJanelaModulosExcluir: Get_MostrarJanelaModulosExcluir,
        Set_MostrarJanelaModulosExcluir: Set_MostrarJanelaModulosExcluir,
        Get_cUsaCacheListas: Get_cUsaCacheListas,
        Set_cUsaCacheListas: Set_cUsaCacheListas,
        Get_cIntervaloRefreshCache: Get_cIntervaloRefreshCache,
        Set_cIntervaloRefreshCache: Set_cIntervaloRefreshCache,
        Get_cDashboardIntervalGOP: Get_cDashboardIntervalGOP,
        Set_cDashboardIntervalGOP: Set_cDashboardIntervalGOP,
        Get_cInsercaoDadosBatch: Get_cInsercaoDadosBatch,
        Set_cInsercaoDadosBatch: Set_cInsercaoDadosBatch,
        Get_cSeccaoDefeito: Get_cSeccaoDefeito,
        Set_cSeccaoDefeito: Set_cSeccaoDefeito,
        Get_cMostraJanelaDescargaCTB: Get_cMostraJanelaDescargaCTB,
        Set_cMostraJanelaDescargaCTB: Set_cMostraJanelaDescargaCTB,
        Get_cActualizaAutoMovPrevReais: Get_cActualizaAutoMovPrevReais,
        Set_cActualizaAutoMovPrevReais: Set_cActualizaAutoMovPrevReais,
        Get_cRibbonTheme: Get_cRibbonTheme,
        Set_cRibbonTheme: Set_cRibbonTheme,
        Get_cF11GravaMovimento: Get_cF11GravaMovimento,
        Set_cF11GravaMovimento: Set_cF11GravaMovimento,
        Get_cMostraEstadoConta: Get_cMostraEstadoConta,
        Set_cMostraEstadoConta: Set_cMostraEstadoConta,
        Get_cActualizaCambioHistorico: Get_cActualizaCambioHistorico,
        Set_cActualizaCambioHistorico: Set_cActualizaCambioHistorico,
        Get_cADAbrirJanela: Get_cADAbrirJanela,
        Set_cADAbrirJanela: Set_cADAbrirJanela,
        Get_cADSincronizarImgs: Get_cADSincronizarImgs,
        Set_cADSincronizarImgs: Set_cADSincronizarImgs,
        Get_cAvisaDocRepetidos: Get_cAvisaDocRepetidos,
        Set_cAvisaDocRepetidos: Set_cAvisaDocRepetidos,
        Get_cMostraDistCC: Get_cMostraDistCC,
        Set_cMostraDistCC: Set_cMostraDistCC,
        Get_cMostraDistFX: Get_cMostraDistFX,
        Set_cMostraDistFX: Set_cMostraDistFX,
        Get_cMostraEstadoDiario: Get_cMostraEstadoDiario,
        Set_cMostraEstadoDiario: Set_cMostraEstadoDiario,
        Get_cOrdenarPorDataNumero: Get_cOrdenarPorDataNumero,
        Set_cOrdenarPorDataNumero: Set_cOrdenarPorDataNumero,
        Get_cDashboardPreferidoGOP: Get_cDashboardPreferidoGOP,
        Set_cDashboardPreferidoGOP: Set_cDashboardPreferidoGOP,
        Get_tActualizaData: Get_tActualizaData,
        Set_tActualizaData: Set_tActualizaData,
        Get_Usr_cProcArtigo: Get_Usr_cProcArtigo,
        Set_Usr_cProcArtigo: Set_Usr_cProcArtigo,
        Get_Usr_cProcArmazens: Get_Usr_cProcArmazens,
        Set_Usr_cProcArmazens: Set_Usr_cProcArmazens,
        Get_Usr_cProcLotes: Get_Usr_cProcLotes,
        Set_Usr_cProcLotes: Set_Usr_cProcLotes,
        Get_Usr_cProcClientes: Get_Usr_cProcClientes,
        Set_Usr_cProcClientes: Set_Usr_cProcClientes,
        Get_Usr_cProcFornecedores: Get_Usr_cProcFornecedores,
        Set_Usr_cProcFornecedores: Set_Usr_cProcFornecedores,
        Get_Usr_cProcVendedores: Get_Usr_cProcVendedores,
        Set_Usr_cProcVendedores: Set_Usr_cProcVendedores,
        Get_Usr_cProcFuncionarios: Get_Usr_cProcFuncionarios,
        Set_Usr_cProcFuncionarios: Set_Usr_cProcFuncionarios,
        Get_Usr_cProcHospedes: Get_Usr_cProcHospedes,
        Set_Usr_cProcHospedes: Set_Usr_cProcHospedes,
        Get_Usr_cProcEntidades: Get_Usr_cProcEntidades,
        Set_Usr_cProcEntidades: Set_Usr_cProcEntidades,
        Get_Usr_cProcMedicalSpecialty: Get_Usr_cProcMedicalSpecialty,
        Set_Usr_cProcMedicalSpecialty: Set_Usr_cProcMedicalSpecialty,
        Get_Usr_cProcTimetables: Get_Usr_cProcTimetables,
        Set_Usr_cProcTimetables: Set_Usr_cProcTimetables,
        Get_Usr_cProcMedicalProdut: Get_Usr_cProcMedicalProdut,
        Set_Usr_cProcMedicalProdut: Set_Usr_cProcMedicalProdut,
        Get_AUT_User_Viatura: Get_AUT_User_Viatura,
        Set_AUT_User_Viatura: Set_AUT_User_Viatura,
        Get_APV_User_Equipamento: Get_APV_User_Equipamento,
        Set_APV_User_Equipamento: Set_APV_User_Equipamento,
        Get_Emp_cProcArtigo: Get_Emp_cProcArtigo,
        Set_Emp_cProcArtigo: Set_Emp_cProcArtigo,
        Get_Emp_cProcArmazens: Get_Emp_cProcArmazens,
        Set_Emp_cProcArmazens: Set_Emp_cProcArmazens,
        Get_Emp_cProcLotes: Get_Emp_cProcLotes,
        Set_Emp_cProcLotes: Set_Emp_cProcLotes,
        Get_Emp_cProcClientes: Get_Emp_cProcClientes,
        Set_Emp_cProcClientes: Set_Emp_cProcClientes,
        Get_Emp_cProcFornecedores: Get_Emp_cProcFornecedores,
        Set_Emp_cProcFornecedores: Set_Emp_cProcFornecedores,
        Get_Emp_cProcVendedores: Get_Emp_cProcVendedores,
        Set_Emp_cProcVendedores: Set_Emp_cProcVendedores,
        Get_Emp_cProcFuncionarios: Get_Emp_cProcFuncionarios,
        Set_Emp_cProcFuncionarios: Set_Emp_cProcFuncionarios,
        Get_Emp_cProcHospedes: Get_Emp_cProcHospedes,
        Set_Emp_cProcHospedes: Set_Emp_cProcHospedes,
        Get_Emp_cProcEntidades: Get_Emp_cProcEntidades,
        Set_Emp_cProcEntidades: Set_Emp_cProcEntidades,
        Get_Emp_cProcMedicalSpecialty: Get_Emp_cProcMedicalSpecialty,
        Set_Emp_cProcMedicalSpecialty: Set_Emp_cProcMedicalSpecialty,
        Get_Emp_cProcTimetables: Get_Emp_cProcTimetables,
        Set_Emp_cProcTimetables: Set_Emp_cProcTimetables,
        Get_Emp_cProcMedicalProdut: Get_Emp_cProcMedicalProdut,
        Set_Emp_cProcMedicalProdut: Set_Emp_cProcMedicalProdut,
        Get_AUT_Emp_Viatura: Get_AUT_Emp_Viatura,
        Set_AUT_Emp_Viatura: Set_AUT_Emp_Viatura,
        Get_APV_Emp_Equipamento: Get_APV_Emp_Equipamento,
        Set_APV_Emp_Equipamento: Set_APV_Emp_Equipamento,
        Get_cRegimeIVACaixa: Get_cRegimeIVACaixa,
        Set_cRegimeIVACaixa: Set_cRegimeIVACaixa,
        Get_cAssinaturaDigital_UsaAssinatura: Get_cAssinaturaDigital_UsaAssinatura,
        Set_cAssinaturaDigital_UsaAssinatura: Set_cAssinaturaDigital_UsaAssinatura,
        Get_cCRMConfigOutlookIp: Get_cCRMConfigOutlookIp,
        Set_cCRMConfigOutlookIp: Set_cCRMConfigOutlookIp,
        Get_cCRMConfigOutlookPort: Get_cCRMConfigOutlookPort,
        Set_cCRMConfigOutlookPort: Set_cCRMConfigOutlookPort,
        Get_tErm_SMSMaxLength: Get_tErm_SMSMaxLength,
        Set_tErm_SMSMaxLength: Set_tErm_SMSMaxLength,
        Get_tErm_TipoIntegracao: Get_tErm_TipoIntegracao,
        Set_tErm_TipoIntegracao: Set_tErm_TipoIntegracao,
        Get_cCRMAddRelationsOnSelector: Get_cCRMAddRelationsOnSelector,
        Set_cCRMAddRelationsOnSelector: Set_cCRMAddRelationsOnSelector,
        Get_cCRMServerSMTPActiveUser: Get_cCRMServerSMTPActiveUser,
        Set_cCRMServerSMTPActiveUser: Set_cCRMServerSMTPActiveUser,
        Get_cCRMServerSMTPUser: Get_cCRMServerSMTPUser,
        Set_cCRMServerSMTPUser: Set_cCRMServerSMTPUser,
        Get_cCRMServerSMTPPortUser: Get_cCRMServerSMTPPortUser,
        Set_cCRMServerSMTPPortUser: Set_cCRMServerSMTPPortUser,
        Get_cCRMServerSMTPUseSSLUser: Get_cCRMServerSMTPUseSSLUser,
        Set_cCRMServerSMTPUseSSLUser: Set_cCRMServerSMTPUseSSLUser,
        Get_cCRMServerSMTPUseAuthenticationUser: Get_cCRMServerSMTPUseAuthenticationUser,
        Set_cCRMServerSMTPUseAuthenticationUser: Set_cCRMServerSMTPUseAuthenticationUser,
        Get_cCRMServerSMTPLoginUser: Get_cCRMServerSMTPLoginUser,
        Set_cCRMServerSMTPLoginUser: Set_cCRMServerSMTPLoginUser,
        Get_cCRMServerSMTPPasswordUser: Get_cCRMServerSMTPPasswordUser,
        Set_cCRMServerSMTPPasswordUser: Set_cCRMServerSMTPPasswordUser,
        Get_cCRMServerSMTPFormatRDLUser: Get_cCRMServerSMTPFormatRDLUser,
        Set_cCRMServerSMTPFormatRDLUser: Set_cCRMServerSMTPFormatRDLUser,
        Get_cCRMServerSMTPFormatRPTUser: Get_cCRMServerSMTPFormatRPTUser,
        Set_cCRMServerSMTPFormatRPTUser: Set_cCRMServerSMTPFormatRPTUser,
        Get_cPathJRE: Get_cPathJRE,
        Set_cPathJRE: Set_cPathJRE,
        Get_cGOPUseSaveNotifications: Get_cGOPUseSaveNotifications,
        Set_cGOPUseSaveNotifications: Set_cGOPUseSaveNotifications,
        Get_cGOPSavePeriodicity: Get_cGOPSavePeriodicity,
        Set_cGOPSavePeriodicity: Set_cGOPSavePeriodicity,
        Get_cGOPOrcListRec: Get_cGOPOrcListRec,
        Set_cGOPOrcListRec: Set_cGOPOrcListRec,
        Get_cGOPOrcListRecDist: Get_cGOPOrcListRecDist,
        Set_cGOPOrcListRecDist: Set_cGOPOrcListRecDist,
        Get_cGOPProjListRec: Get_cGOPProjListRec,
        Set_cGOPProjListRec: Set_cGOPProjListRec,
        Get_cGOPProjListRecDist: Get_cGOPProjListRecDist,
        Set_cGOPProjListRecDist: Set_cGOPProjListRecDist,
        Get_cGOPOrcExportGlobal: Get_cGOPOrcExportGlobal,
        Set_cGOPOrcExportGlobal: Set_cGOPOrcExportGlobal,
        Get_cGOPOrcExportErros: Get_cGOPOrcExportErros,
        Set_cGOPOrcExportErros: Set_cGOPOrcExportErros,
        Get_cGOPReorcExport: Get_cGOPReorcExport,
        Set_cGOPReorcExport: Set_cGOPReorcExport,
    };
})();
//# sourceMappingURL=Configurations.js.map