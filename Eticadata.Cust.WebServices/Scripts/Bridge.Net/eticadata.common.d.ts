/// <reference path="./bridge.d.ts" />/// <reference path="./eticadata.d.ts" />

declare module Eticadata.Common {
    export interface EtiIcons {
    }
    export interface EtiIconsFunc extends Function {
        prototype: EtiIcons;
        Comercial: EtiIcons.ComercialFunc;
        Consultas: EtiIcons.ConsultasFunc;
        Contabilidade: EtiIcons.ContabilidadeFunc;
        Desktop: EtiIcons.DesktopFunc;
        Entidades: EtiIcons.EntidadesFunc;
        Bandeiras: EtiIcons.BandeirasFunc;
        Dashboards: EtiIcons.DashboardsFunc;
        AutoGest: EtiIcons.AutoGestFunc;
        Artigos: EtiIcons.ArtigosFunc;
        EPortals: EtiIcons.EPortalsFunc;
        Geral: EtiIcons.GeralFunc;
        Utilizadores: EtiIcons.UtilizadoresFunc;
        POS: EtiIcons.POSFunc;
        Modulos: EtiIcons.ModulosFunc;
        Medical: EtiIcons.MedicalFunc;
        Integrador: EtiIcons.IntegradorFunc;
        Hotel: EtiIcons.HotelFunc;
        GTMotive: EtiIcons.GTMotiveFunc;
        GRH: EtiIcons.GRHFunc;
        ERM: EtiIcons.ERMFunc;
        Obras: EtiIcons.ObrasFunc;
        new (): EtiIcons;
        getEmpty(): Eticadata.Common.IconStruct;
        Get(path: string): Eticadata.Common.IconStruct;
        GetAll(): Bridge.Dictionary$2<string,string>;
        GetAll$1(tipo: Function, level: number): Bridge.Dictionary$2<string,string>;
        GetIconStruct(path: string): Eticadata.Common.IconStruct;
        GetIconUri(path: string, iconSize: Eticadata.Common.IconSize): Eticadata.Uri;
    }
    var EtiIcons: EtiIconsFunc;
    module EtiIcons {
        export interface Comercial {
        }
        export interface ComercialFunc extends Function {
            prototype: Comercial;
            new (): Comercial;
            getFEExportacao(): Eticadata.Common.IconStruct;
            getFEImportacao(): Eticadata.Common.IconStruct;
            getFERecusarEncomenda(): Eticadata.Common.IconStruct;
            getClienteArtigo(): Eticadata.Common.IconStruct;
            getClienteFamilia(): Eticadata.Common.IconStruct;
            getDescontoEntidadeArtigo(): Eticadata.Common.IconStruct;
            getFactoresConversao(): Eticadata.Common.IconStruct;
            getRegularizacaoAdiantamentos(): Eticadata.Common.IconStruct;
            getRupturaStock(): Eticadata.Common.IconStruct;
            getComposicaoArtigos(): Eticadata.Common.IconStruct;
            getFiltrarArtigos(): Eticadata.Common.IconStruct;
            getActualizarArtigos(): Eticadata.Common.IconStruct;
            getAdicionarArtigos(): Eticadata.Common.IconStruct;
            getSubstituirArtigos(): Eticadata.Common.IconStruct;
            getActivarArtigosFiltro(): Eticadata.Common.IconStruct;
            getDesactivarArtigosFiltro(): Eticadata.Common.IconStruct;
            getConfigurarPrecos(): Eticadata.Common.IconStruct;
            getComprasAcerto(): Eticadata.Common.IconStruct;
            getConsultarNumerosRemovidos(): Eticadata.Common.IconStruct;
            getEmitirPrecario(): Eticadata.Common.IconStruct;
            getConsultasDiversasArtigos(): Eticadata.Common.IconStruct;
            getConsultasDiversasClientes(): Eticadata.Common.IconStruct;
            getConsultasDiversasFornecedores(): Eticadata.Common.IconStruct;
            getConsultasDiversasTesouraria(): Eticadata.Common.IconStruct;
            getConsultasDiversasValoresGlobais(): Eticadata.Common.IconStruct;
            getConsultasDiversasVendedores(): Eticadata.Common.IconStruct;
            getDevolucaoEdicoes(): Eticadata.Common.IconStruct;
            getSuspensaoDocumentos(): Eticadata.Common.IconStruct;
            getOrientacaoHorizontal(): Eticadata.Common.IconStruct;
            getOrientacaoVerticalParaBaixo(): Eticadata.Common.IconStruct;
            getOrientacaoVerticalParaCima(): Eticadata.Common.IconStruct;
            getOrientacaoVerticalSobreposto(): Eticadata.Common.IconStruct;
            getInformacaoEscolar(): Eticadata.Common.IconStruct;
            getQuadroGestaoCaixa(): Eticadata.Common.IconStruct;
            getAtribuirQuantidadesSistema(): Eticadata.Common.IconStruct;
            getAdicionarLocais(): Eticadata.Common.IconStruct;
            getAdicionarArtigosStock(): Eticadata.Common.IconStruct;
        }

        export interface Consultas {
        }
        export interface ConsultasFunc extends Function {
            prototype: Consultas;
            Grafico: Consultas.GraficoFunc;
            Reports: Consultas.ReportsFunc;
            new (): Consultas;
            getMapas(): Eticadata.Common.IconStruct;
            getPivot(): Eticadata.Common.IconStruct;
            getTabela(): Eticadata.Common.IconStruct;
            getTabelaAdicionar(): Eticadata.Common.IconStruct;
            getTabelaEliminar(): Eticadata.Common.IconStruct;
            getTabelaOk(): Eticadata.Common.IconStruct;
            getTabelaProcurar(): Eticadata.Common.IconStruct;
            getGraficos(): Eticadata.Common.IconStruct;
        }
        module Consultas {
            export interface Grafico {
            }
            export interface GraficoFunc extends Function {
                prototype: Grafico;
                new (): Grafico;
                getArea(): Eticadata.Common.IconStruct;
                getBarras(): Eticadata.Common.IconStruct;
                getColunas(): Eticadata.Common.IconStruct;
                getLinhas(): Eticadata.Common.IconStruct;
                getPontos(): Eticadata.Common.IconStruct;
                getTarte(): Eticadata.Common.IconStruct;
            }

            export interface Reports {
            }
            export interface ReportsFunc extends Function {
                prototype: Reports;
                new (): Reports;
                getUmaPagina(): Eticadata.Common.IconStruct;
                getDuasPaginas(): Eticadata.Common.IconStruct;
                getMaisZoom(): Eticadata.Common.IconStruct;
                getMenosZoom(): Eticadata.Common.IconStruct;
                getZoom11(): Eticadata.Common.IconStruct;
            }
        }

        export interface Contabilidade {
        }
        export interface ContabilidadeFunc extends Function {
            prototype: Contabilidade;
            new (): Contabilidade;
            getAlinhamentoCentro(): Eticadata.Common.IconStruct;
            getAlinhamentoEsquerda(): Eticadata.Common.IconStruct;
            getAlinhamentoDireita(): Eticadata.Common.IconStruct;
            getAlturaCelula(): Eticadata.Common.IconStruct;
            getCentroCusto(): Eticadata.Common.IconStruct;
            getConfigurarRodape(): Eticadata.Common.IconStruct;
            getCorFundo(): Eticadata.Common.IconStruct;
            getCorTexto(): Eticadata.Common.IconStruct;
            getEditarMenus(): Eticadata.Common.IconStruct;
            getFluxoCaixa(): Eticadata.Common.IconStruct;
            getInserirCol(): Eticadata.Common.IconStruct;
            getInserirFuncao(): Eticadata.Common.IconStruct;
            getInserirLinha(): Eticadata.Common.IconStruct;
            getItalico(): Eticadata.Common.IconStruct;
            getLarguraCelula(): Eticadata.Common.IconStruct;
            getMostrarEsconderGrelha(): Eticadata.Common.IconStruct;
            getNegrito(): Eticadata.Common.IconStruct;
            getNumDecimal(): Eticadata.Common.IconStruct;
            getNumInteiro(): Eticadata.Common.IconStruct;
            getPlanoContas(): Eticadata.Common.IconStruct;
            getQuebraHorizontal(): Eticadata.Common.IconStruct;
            getQuebraVertical(): Eticadata.Common.IconStruct;
            getSomatorio(): Eticadata.Common.IconStruct;
            getSublinhado(): Eticadata.Common.IconStruct;
            getTexto(): Eticadata.Common.IconStruct;
            getTipoLetra(): Eticadata.Common.IconStruct;
            getInserirLicenca(): Eticadata.Common.IconStruct;
            getInserirToPaginas(): Eticadata.Common.IconStruct;
            getInserirData(): Eticadata.Common.IconStruct;
            getInserirNumaPagina(): Eticadata.Common.IconStruct;
            getInserirCampoEmpresa(): Eticadata.Common.IconStruct;
            getMovimentosF11(): Eticadata.Common.IconStruct;
            getMovimentosF12(): Eticadata.Common.IconStruct;
            getMovimentosPesquisa(): Eticadata.Common.IconStruct;
            getMovimentosSHIFTF11(): Eticadata.Common.IconStruct;
            getCC100Perc(): Eticadata.Common.IconStruct;
            getCCIgualPerc(): Eticadata.Common.IconStruct;
            getABDRAbrirExcel(): Eticadata.Common.IconStruct;
            getABDREditarNotas(): Eticadata.Common.IconStruct;
            getFichasImo(): Eticadata.Common.IconStruct;
            getOrcDistMeses(): Eticadata.Common.IconStruct;
            getReavImo(): Eticadata.Common.IconStruct;
            getConfiguradorMapas(): Eticadata.Common.IconStruct;
            getConfigurarContabilidade(): Eticadata.Common.IconStruct;
            getIESTreeIn(): Eticadata.Common.IconStruct;
            getIESTreeOut(): Eticadata.Common.IconStruct;
            getAcertaPagina(): Eticadata.Common.IconStruct;
            getInvestimentosHistorico(): Eticadata.Common.IconStruct;
            getParametrizarMapa(): Eticadata.Common.IconStruct;
            getError(): Eticadata.Common.IconStruct;
            getSelecionaDesseleccionaLinhas(): Eticadata.Common.IconStruct;
        }

        export interface Desktop {
        }
        export interface DesktopFunc extends Function {
            prototype: Desktop;
            new (): Desktop;
            getConsultasDiversas(): Eticadata.Common.IconStruct;
            getCompromissoAPV(): Eticadata.Common.IconStruct;
            getIntervencaoOficinas(): Eticadata.Common.IconStruct;
            getProducoesTransformacoes(): Eticadata.Common.IconStruct;
            getConversaoDocumentosVenda(): Eticadata.Common.IconStruct;
            getEncomendasClientesOutrosDevedores(): Eticadata.Common.IconStruct;
            getEncomendasFornecedoresOutrosCredores(): Eticadata.Common.IconStruct;
            getEncomendasArmazens(): Eticadata.Common.IconStruct;
            getIntroducaoOrcamentos(): Eticadata.Common.IconStruct;
            getIntroducaoVendas(): Eticadata.Common.IconStruct;
            getIntroducaoCompras(): Eticadata.Common.IconStruct;
            getIntroducaoMovimentosStock(): Eticadata.Common.IconStruct;
            getFolhasObra(): Eticadata.Common.IconStruct;
            getAberturaCaixa(): Eticadata.Common.IconStruct;
            getAssistenteActualizacaoProcessos(): Eticadata.Common.IconStruct;
            getCarregamentoCartoesPrePagos(): Eticadata.Common.IconStruct;
            getComissoesLocadoras(): Eticadata.Common.IconStruct;
            getDespesasGerais(): Eticadata.Common.IconStruct;
            getEntradaSaidaCaixa(): Eticadata.Common.IconStruct;
            getEntregaFacturacao(): Eticadata.Common.IconStruct;
            getEquipamentos(): Eticadata.Common.IconStruct;
            getFechoCaixa(): Eticadata.Common.IconStruct;
            getFolhasCaixa(): Eticadata.Common.IconStruct;
            getImputacaoCustosProveitos(): Eticadata.Common.IconStruct;
            getMarcacoesOficinas(): Eticadata.Common.IconStruct;
            getMateriais(): Eticadata.Common.IconStruct;
            getMovimentosPrevistos(): Eticadata.Common.IconStruct;
            getOrcamentos(): Eticadata.Common.IconStruct;
            getOrdensReparacao(): Eticadata.Common.IconStruct;
            getPedidosApoio(): Eticadata.Common.IconStruct;
            getPotenciaisClientes(): Eticadata.Common.IconStruct;
            getProcessarAvencas(): Eticadata.Common.IconStruct;
            getProcessarRapel(): Eticadata.Common.IconStruct;
            getProcessosRentACar(): Eticadata.Common.IconStruct;
            getProcuraViaturas(): Eticadata.Common.IconStruct;
            getRecepcao(): Eticadata.Common.IconStruct;
            getReparacoesMateriais(): Eticadata.Common.IconStruct;
            getSinistros(): Eticadata.Common.IconStruct;
            getViagens(): Eticadata.Common.IconStruct;
            getABF(): Eticadata.Common.IconStruct;
            getAlojamentosDisponiveis(): Eticadata.Common.IconStruct;
            getAtribuicaoAlojamentos(): Eticadata.Common.IconStruct;
            getAutosMedicao(): Eticadata.Common.IconStruct;
            getBalanceteContas(): Eticadata.Common.IconStruct;
            getBookingPosition(): Eticadata.Common.IconStruct;
            getCalculoIVA(): Eticadata.Common.IconStruct;
            getConfiguracaoCheques(): Eticadata.Common.IconStruct;
            getDeclaracaoPeriodicaIVA(): Eticadata.Common.IconStruct;
            getDisponibilidades(): Eticadata.Common.IconStruct;
            getEncargos(): Eticadata.Common.IconStruct;
            getEstadosConta(): Eticadata.Common.IconStruct;
            getFacturacao(): Eticadata.Common.IconStruct;
            getLancamentos(): Eticadata.Common.IconStruct;
            getListagemDiarios(): Eticadata.Common.IconStruct;
            getMapasFiscaisInvestimento(): Eticadata.Common.IconStruct;
            getMapas(): Eticadata.Common.IconStruct;
            getNightAudit(): Eticadata.Common.IconStruct;
            getOutrasTabelas(): Eticadata.Common.IconStruct;
            getPos(): Eticadata.Common.IconStruct;
            getTarifarios(): Eticadata.Common.IconStruct;
            getTarifas(): Eticadata.Common.IconStruct;
            getTiposContrato(): Eticadata.Common.IconStruct;
            getAtribuicaoRecursos(): Eticadata.Common.IconStruct;
            getCalculoIVAExigivelNaoLiquidado(): Eticadata.Common.IconStruct;
            getImpostoSobreVeiculo(): Eticadata.Common.IconStruct;
            getEFacturaComunDocsTransporte(): Eticadata.Common.IconStruct;
            getEFacturaComunElemFacturas(): Eticadata.Common.IconStruct;
            getPlanoDeContas(): Eticadata.Common.IconStruct;
        }

        export interface Entidades {
        }
        export interface EntidadesFunc extends Function {
            prototype: Entidades;
            Fornecedores: Entidades.FornecedoresFunc;
            Clientes: Entidades.ClientesFunc;
            Outros: Entidades.OutrosFunc;
            new (): Entidades;
        }
        module Entidades {
            export interface Fornecedores {
            }
            export interface FornecedoresFunc extends Function {
                prototype: Fornecedores;
                new (): Fornecedores;
                getAdicionar(): Eticadata.Common.IconStruct;
                getFornecedor(): Eticadata.Common.IconStruct;
                getEliminar(): Eticadata.Common.IconStruct;
            }

            export interface Clientes {
            }
            export interface ClientesFunc extends Function {
                prototype: Clientes;
                new (): Clientes;
                getAdicionar(): Eticadata.Common.IconStruct;
                getCliente(): Eticadata.Common.IconStruct;
                getEliminar(): Eticadata.Common.IconStruct;
                getClienteOFF(): Eticadata.Common.IconStruct;
            }

            export interface Outros {
            }
            export interface OutrosFunc extends Function {
                prototype: Outros;
                new (): Outros;
                getDevedores(): Eticadata.Common.IconStruct;
                getCredores(): Eticadata.Common.IconStruct;
            }
        }

        export interface Bandeiras {
        }
        export interface BandeirasFunc extends Function {
            prototype: Bandeiras;
            new (): Bandeiras;
            getAE_UnitedArabEmirates(): Eticadata.Common.IconStruct;
            getAO_Angola(): Eticadata.Common.IconStruct;
            getBR_Brazil(): Eticadata.Common.IconStruct;
            getCN_China(): Eticadata.Common.IconStruct;
            getCV_CaboVerde(): Eticadata.Common.IconStruct;
            getDE_Alemanha(): Eticadata.Common.IconStruct;
            getFR_Franca(): Eticadata.Common.IconStruct;
            getEG_Egipto(): Eticadata.Common.IconStruct;
            getES_Espanha(): Eticadata.Common.IconStruct;
            getGN_Guine(): Eticadata.Common.IconStruct;
            getGQ_GuineEquatorial(): Eticadata.Common.IconStruct;
            getGR_Grecia(): Eticadata.Common.IconStruct;
            getGW_BuineBissao(): Eticadata.Common.IconStruct;
            getIL_Israel(): Eticadata.Common.IconStruct;
            getIT_Italia(): Eticadata.Common.IconStruct;
            getJP_Japao(): Eticadata.Common.IconStruct;
            getKY_IlhaoCaimao(): Eticadata.Common.IconStruct;
            getLU_Luxemburgo(): Eticadata.Common.IconStruct;
            getMO_Macao(): Eticadata.Common.IconStruct;
            getMV_Maldivas(): Eticadata.Common.IconStruct;
            getMZ_Mocambique(): Eticadata.Common.IconStruct;
            getNO_Noruega(): Eticadata.Common.IconStruct;
            getPT_Portugal(): Eticadata.Common.IconStruct;
            getQA_Quatar(): Eticadata.Common.IconStruct;
            getRU_Russia(): Eticadata.Common.IconStruct;
            getSA_ArabiaSaudita(): Eticadata.Common.IconStruct;
            getSC_Seicheles(): Eticadata.Common.IconStruct;
            getST_SaoTomePrincipe(): Eticadata.Common.IconStruct;
            getTL_TimorLeste(): Eticadata.Common.IconStruct;
            getTN_Tunisia(): Eticadata.Common.IconStruct;
            getUK_ReinoUnido(): Eticadata.Common.IconStruct;
            getUS_EstadosUnidos(): Eticadata.Common.IconStruct;
            getZA_AfricaDoSul(): Eticadata.Common.IconStruct;
        }

        export interface Dashboards {
        }
        export interface DashboardsFunc extends Function {
            prototype: Dashboards;
            new (): Dashboards;
            getDashboard(): Eticadata.Common.IconStruct;
        }

        export interface AutoGest {
        }
        export interface AutoGestFunc extends Function {
            prototype: AutoGest;
            Tractor: AutoGest.TractorFunc;
            Camiao: AutoGest.CamiaoFunc;
            Sedan: AutoGest.SedanFunc;
            Minibus: AutoGest.MinibusFunc;
            Carro: AutoGest.CarroFunc;
            Semaforo: AutoGest.SemaforoFunc;
            new (): AutoGest;
            getAmbulancia(): Eticadata.Common.IconStruct;
            getCarocha(): Eticadata.Common.IconStruct;
            getChaveFendas(): Eticadata.Common.IconStruct;
            getComponentes(): Eticadata.Common.IconStruct;
            getCondutor(): Eticadata.Common.IconStruct;
            getContaKm(): Eticadata.Common.IconStruct;
            getContracto(): Eticadata.Common.IconStruct;
            getControloRemoto(): Eticadata.Common.IconStruct;
            getCores(): Eticadata.Common.IconStruct;
            getDesportivo(): Eticadata.Common.IconStruct;
            getEmpilhador(): Eticadata.Common.IconStruct;
            getFerramentas(): Eticadata.Common.IconStruct;
            getGarantia(): Eticadata.Common.IconStruct;
            getHistorico(): Eticadata.Common.IconStruct;
            getLocalizacoes(): Eticadata.Common.IconStruct;
            getOculosSol(): Eticadata.Common.IconStruct;
            getOperario(): Eticadata.Common.IconStruct;
            getParafusoPorca(): Eticadata.Common.IconStruct;
            getPlanosManutencao(): Eticadata.Common.IconStruct;
            getPneu(): Eticadata.Common.IconStruct;
            getPolicia(): Eticadata.Common.IconStruct;
            getPoliciaSinaleiro(): Eticadata.Common.IconStruct;
            getSinistros(): Eticadata.Common.IconStruct;
            getServicosInternos(): Eticadata.Common.IconStruct;
            getServicosExternos(): Eticadata.Common.IconStruct;
            getMateriais(): Eticadata.Common.IconStruct;
            getProcuraViatura(): Eticadata.Common.IconStruct;
            getModelos(): Eticadata.Common.IconStruct;
            getMarcas(): Eticadata.Common.IconStruct;
        }
        module AutoGest {
            export interface Tractor {
            }
            export interface TractorFunc extends Function {
                prototype: Tractor;
                new (): Tractor;
                getTractorVerde(): Eticadata.Common.IconStruct;
                getTractorVermelho(): Eticadata.Common.IconStruct;
            }

            export interface Camiao {
            }
            export interface CamiaoFunc extends Function {
                prototype: Camiao;
                new (): Camiao;
                getAzul(): Eticadata.Common.IconStruct;
                getVermelho(): Eticadata.Common.IconStruct;
            }

            export interface Sedan {
            }
            export interface SedanFunc extends Function {
                prototype: Sedan;
                new (): Sedan;
                getAzul(): Eticadata.Common.IconStruct;
                getCinza(): Eticadata.Common.IconStruct;
                getLaranja(): Eticadata.Common.IconStruct;
                getVerde(): Eticadata.Common.IconStruct;
            }

            export interface Minibus {
            }
            export interface MinibusFunc extends Function {
                prototype: Minibus;
                new (): Minibus;
                getAzul(): Eticadata.Common.IconStruct;
                getBanco(): Eticadata.Common.IconStruct;
                getCinza(): Eticadata.Common.IconStruct;
                getLaranja(): Eticadata.Common.IconStruct;
                getVerde(): Eticadata.Common.IconStruct;
            }

            export interface Carro {
            }
            export interface CarroFunc extends Function {
                prototype: Carro;
                new (): Carro;
                getAzul(): Eticadata.Common.IconStruct;
                getCinza(): Eticadata.Common.IconStruct;
                getLaranja(): Eticadata.Common.IconStruct;
                getVerde(): Eticadata.Common.IconStruct;
            }

            export interface Semaforo {
            }
            export interface SemaforoFunc extends Function {
                prototype: Semaforo;
                new (): Semaforo;
                getAmarelo(): Eticadata.Common.IconStruct;
                getOff(): Eticadata.Common.IconStruct;
                getOn(): Eticadata.Common.IconStruct;
                getVerde(): Eticadata.Common.IconStruct;
                getVermelho(): Eticadata.Common.IconStruct;
            }
        }

        export interface Artigos {
        }
        export interface ArtigosFunc extends Function {
            prototype: Artigos;
            new (): Artigos;
            getArtigo(): Eticadata.Common.IconStruct;
        }

        export interface EPortals {
        }
        export interface EPortalsFunc extends Function {
            prototype: EPortals;
            new (): EPortals;
            getLogotipo(): Eticadata.Common.IconStruct;
            getApv(): Eticadata.Common.IconStruct;
            getGce(): Eticadata.Common.IconStruct;
            getOficinas(): Eticadata.Common.IconStruct;
            getStands(): Eticadata.Common.IconStruct;
            getEcommerce(): Eticadata.Common.IconStruct;
            getGrh(): Eticadata.Common.IconStruct;
            getCore(): Eticadata.Common.IconStruct;
            getEstrela1(): Eticadata.Common.IconStruct;
            getEstrela2(): Eticadata.Common.IconStruct;
            getEstrela3(): Eticadata.Common.IconStruct;
            getEstrela4(): Eticadata.Common.IconStruct;
            getEstrela5(): Eticadata.Common.IconStruct;
            getCategorias(): Eticadata.Common.IconStruct;
        }

        export interface Geral {
        }
        export interface GeralFunc extends Function {
            prototype: Geral;
            Comandos: Geral.ComandosFunc;
            Varios: Geral.VariosFunc;
            Tabelas: Geral.TabelasFunc;
            Pastas: Geral.PastasFunc;
            Orientacao: Geral.OrientacaoFunc;
            Navegador: Geral.NavegadorFunc;
            Filtro: Geral.FiltroFunc;
            Favoritos: Geral.FavoritosFunc;
            Extensions: Geral.ExtensionsFunc;
            Documentos: Geral.DocumentosFunc;
            Clipboard: Geral.ClipboardFunc;
            Backup: Geral.BackupFunc;
            Avisos: Geral.AvisosFunc;
            new (): Geral;
        }
        module Geral {
            export interface Comandos {
            }
            export interface ComandosFunc extends Function {
                prototype: Comandos;
                new (): Comandos;
                getAcerca(): Eticadata.Common.IconStruct;
                getActualizar(): Eticadata.Common.IconStruct;
                getAdicionar(): Eticadata.Common.IconStruct;
                getAplicar(): Eticadata.Common.IconStruct;
                getCancelar(): Eticadata.Common.IconStruct;
                getColar(): Eticadata.Common.IconStruct;
                getCopiar(): Eticadata.Common.IconStruct;
                getCortar(): Eticadata.Common.IconStruct;
                getDuplicar(): Eticadata.Common.IconStruct;
                getEditar(): Eticadata.Common.IconStruct;
                getEliminar(): Eticadata.Common.IconStruct;
                getGravar(): Eticadata.Common.IconStruct;
                getImprimir(): Eticadata.Common.IconStruct;
                getRedo(): Eticadata.Common.IconStruct;
                getSair(): Eticadata.Common.IconStruct;
                getUndo(): Eticadata.Common.IconStruct;
                getVerificado(): Eticadata.Common.IconStruct;
                getPreVisualizar(): Eticadata.Common.IconStruct;
                getRecalcularCampo(): Eticadata.Common.IconStruct;
                getWebService(): Eticadata.Common.IconStruct;
                getDiagnostico(): Eticadata.Common.IconStruct;
            }

            export interface Varios {
            }
            export interface VariosFunc extends Function {
                prototype: Varios;
                new (): Varios;
                getOutrasOperacoes(): Eticadata.Common.IconStruct;
                getVerImagem(): Eticadata.Common.IconStruct;
                getCalendario(): Eticadata.Common.IconStruct;
                getCalendarioHora(): Eticadata.Common.IconStruct;
                getConfig(): Eticadata.Common.IconStruct;
                getConsole(): Eticadata.Common.IconStruct;
                getFullScreen(): Eticadata.Common.IconStruct;
                getGravarComAvisos(): Eticadata.Common.IconStruct;
                getInternet(): Eticadata.Common.IconStruct;
                getProcurarWeb(): Eticadata.Common.IconStruct;
                getJanelaOk(): Eticadata.Common.IconStruct;
                getJanelaSair(): Eticadata.Common.IconStruct;
                getLimparDados(): Eticadata.Common.IconStruct;
                getReciclagemGeral(): Eticadata.Common.IconStruct;
                getReciclagemVazio(): Eticadata.Common.IconStruct;
                getReciclagemCheio(): Eticadata.Common.IconStruct;
                getSeta(): Eticadata.Common.IconStruct;
                getPause(): Eticadata.Common.IconStruct;
                getTema(): Eticadata.Common.IconStruct;
                getSetaDireita(): Eticadata.Common.IconStruct;
                getSetaEsquerda(): Eticadata.Common.IconStruct;
                getSetasDireita(): Eticadata.Common.IconStruct;
                getSetasEsquerda(): Eticadata.Common.IconStruct;
                getCheckbox(): Eticadata.Common.IconStruct;
                getUnchecked(): Eticadata.Common.IconStruct;
                getIndeterminate(): Eticadata.Common.IconStruct;
                getUtilitarios(): Eticadata.Common.IconStruct;
                getHash(): Eticadata.Common.IconStruct;
                getGraficoConfiguracoes(): Eticadata.Common.IconStruct;
                getLimitesDireita(): Eticadata.Common.IconStruct;
                getLimitesEsquerda(): Eticadata.Common.IconStruct;
                getLimitesExterior(): Eticadata.Common.IconStruct;
                getLimitesInferior(): Eticadata.Common.IconStruct;
                getLimitesSuperior(): Eticadata.Common.IconStruct;
                getArtigos(): Eticadata.Common.IconStruct;
                getEditar(): Eticadata.Common.IconStruct;
                getInfoSYS(): Eticadata.Common.IconStruct;
                getInserirImagem(): Eticadata.Common.IconStruct;
                getListagensExportar(): Eticadata.Common.IconStruct;
                getProcessarDocumento(): Eticadata.Common.IconStruct;
                getChecked(): Eticadata.Common.IconStruct;
                getUncheck(): Eticadata.Common.IconStruct;
                getListagens(): Eticadata.Common.IconStruct;
                getConfigurarImpressora(): Eticadata.Common.IconStruct;
                getMultiImpAnterior(): Eticadata.Common.IconStruct;
                getMultiImpCancelar(): Eticadata.Common.IconStruct;
                getMultiImpSeguinte(): Eticadata.Common.IconStruct;
                getFonte(): Eticadata.Common.IconStruct;
                getAlterarFundo(): Eticadata.Common.IconStruct;
                getEncomendaArtigo(): Eticadata.Common.IconStruct;
                getIntegrarDocumento(): Eticadata.Common.IconStruct;
                getDocumentosEncargo(): Eticadata.Common.IconStruct;
                getDistribuirEncargos(): Eticadata.Common.IconStruct;
                getMapasIMO(): Eticadata.Common.IconStruct;
                getFornecedoresArtigo(): Eticadata.Common.IconStruct;
                getDireccoes(): Eticadata.Common.IconStruct;
                getEnviarEmail(): Eticadata.Common.IconStruct;
                getPesquisas(): Eticadata.Common.IconStruct;
                getUtilizadoresPermissao(): Eticadata.Common.IconStruct;
                getUtilizadoresPermissaoGrupo(): Eticadata.Common.IconStruct;
                getUtilizadoresSemPermissao(): Eticadata.Common.IconStruct;
                getUtilizadoresSemPermissaoGrupo(): Eticadata.Common.IconStruct;
                getImportaPerifericos(): Eticadata.Common.IconStruct;
                getCamposAdicionais(): Eticadata.Common.IconStruct;
                getBullet(): Eticadata.Common.IconStruct;
                getBulletOff(): Eticadata.Common.IconStruct;
                getOnTree(): Eticadata.Common.IconStruct;
                getOnTreeClose(): Eticadata.Common.IconStruct;
                getOnTreeEdit(): Eticadata.Common.IconStruct;
                getOnTreeOpen(): Eticadata.Common.IconStruct;
                getOnTreeRemove(): Eticadata.Common.IconStruct;
                getOnTreeAdd(): Eticadata.Common.IconStruct;
                getOrdenarAZ(): Eticadata.Common.IconStruct;
                getOrdenarZA(): Eticadata.Common.IconStruct;
                getFecharAplicacao(): Eticadata.Common.IconStruct;
                getEditarUtilizadores(): Eticadata.Common.IconStruct;
                getLimparFiltro(): Eticadata.Common.IconStruct;
                getEmitir(): Eticadata.Common.IconStruct;
                getCursor(): Eticadata.Common.IconStruct;
                getAvisarUtilizadores(): Eticadata.Common.IconStruct;
                getConfigurarMapa(): Eticadata.Common.IconStruct;
                getLimparImagem(): Eticadata.Common.IconStruct;
                getGerarDocumento(): Eticadata.Common.IconStruct;
                getEventosRegrasValidacao(): Eticadata.Common.IconStruct;
                getActivarLicenca(): Eticadata.Common.IconStruct;
                getCarregarConfiguracoesAssemblies(): Eticadata.Common.IconStruct;
                getConfirmarProcessamento(): Eticadata.Common.IconStruct;
                getFalhaRede(): Eticadata.Common.IconStruct;
                getUsersRede(): Eticadata.Common.IconStruct;
                getDrag(): Eticadata.Common.IconStruct;
                getLogo(): Eticadata.Common.IconStruct;
                getRodarDireita(): Eticadata.Common.IconStruct;
                getRodarEsquerda(): Eticadata.Common.IconStruct;
                getLock(): Eticadata.Common.IconStruct;
                getUnlock(): Eticadata.Common.IconStruct;
                geteFatura(): Eticadata.Common.IconStruct;
            }

            export interface Tabelas {
            }
            export interface TabelasFunc extends Function {
                prototype: Tabelas;
                Sql: Tabelas.SqlFunc;
                new (): Tabelas;
                getSeleccionar(): Eticadata.Common.IconStruct;
                getSeleccionarCelula(): Eticadata.Common.IconStruct;
                getSeleccionarColuna(): Eticadata.Common.IconStruct;
                getSeleccionarLinha(): Eticadata.Common.IconStruct;
                getSeleccionarTudo(): Eticadata.Common.IconStruct;
                getTabela(): Eticadata.Common.IconStruct;
            }
            module Tabelas {
                export interface Sql {
                }
                export interface SqlFunc extends Function {
                    prototype: Sql;
                    new (): Sql;
                    getAdicionar(): Eticadata.Common.IconStruct;
                    getCriar(): Eticadata.Common.IconStruct;
                    getEliminar(): Eticadata.Common.IconStruct;
                    getExecutar(): Eticadata.Common.IconStruct;
                    getSeleccionar(): Eticadata.Common.IconStruct;
                    getValidar(): Eticadata.Common.IconStruct;
                    getVer(): Eticadata.Common.IconStruct;
                }
            }

            export interface Pastas {
            }
            export interface PastasFunc extends Function {
                prototype: Pastas;
                new (): Pastas;
                getAdd(): Eticadata.Common.IconStruct;
                getClosed(): Eticadata.Common.IconStruct;
                getCubes(): Eticadata.Common.IconStruct;
                getDelete(): Eticadata.Common.IconStruct;
                getDocument(): Eticadata.Common.IconStruct;
                getEdit(): Eticadata.Common.IconStruct;
                getFolder(): Eticadata.Common.IconStruct;
                getForbidden(): Eticadata.Common.IconStruct;
                getGear(): Eticadata.Common.IconStruct;
                getInformation(): Eticadata.Common.IconStruct;
                getInto(): Eticadata.Common.IconStruct;
                getLock(): Eticadata.Common.IconStruct;
                getMovie(): Eticadata.Common.IconStruct;
                getMusic(): Eticadata.Common.IconStruct;
                getNetwork(): Eticadata.Common.IconStruct;
                getNew(): Eticadata.Common.IconStruct;
                getOk(): Eticadata.Common.IconStruct;
                getOut(): Eticadata.Common.IconStruct;
                getPreferences(): Eticadata.Common.IconStruct;
                getRefresh(): Eticadata.Common.IconStruct;
                getTime(): Eticadata.Common.IconStruct;
                getUp(): Eticadata.Common.IconStruct;
                getView(): Eticadata.Common.IconStruct;
                getWarning(): Eticadata.Common.IconStruct;
                getWindow(): Eticadata.Common.IconStruct;
            }

            export interface Orientacao {
            }
            export interface OrientacaoFunc extends Function {
                prototype: Orientacao;
                new (): Orientacao;
                getPaisagem(): Eticadata.Common.IconStruct;
                getRetrato(): Eticadata.Common.IconStruct;
            }

            export interface Navegador {
            }
            export interface NavegadorFunc extends Function {
                prototype: Navegador;
                new (): Navegador;
                getActual(): Eticadata.Common.IconStruct;
                getAnterior(): Eticadata.Common.IconStruct;
                getAnteriores(): Eticadata.Common.IconStruct;
                getDesmarcar(): Eticadata.Common.IconStruct;
                getUltimo(): Eticadata.Common.IconStruct;
                getPrimeiro(): Eticadata.Common.IconStruct;
                getMarcar(): Eticadata.Common.IconStruct;
                getProximo(): Eticadata.Common.IconStruct;
                getProximos(): Eticadata.Common.IconStruct;
                getParaBaixo(): Eticadata.Common.IconStruct;
                getParaCima(): Eticadata.Common.IconStruct;
                getTudoBaixo(): Eticadata.Common.IconStruct;
                getTudoCima(): Eticadata.Common.IconStruct;
            }

            export interface Filtro {
            }
            export interface FiltroFunc extends Function {
                prototype: Filtro;
                new (): Filtro;
                getFormulario(): Eticadata.Common.IconStruct;
                getCampos(): Eticadata.Common.IconStruct;
                getData(): Eticadata.Common.IconStruct;
            }

            export interface Favoritos {
            }
            export interface FavoritosFunc extends Function {
                prototype: Favoritos;
                new (): Favoritos;
                getAdicionar(): Eticadata.Common.IconStruct;
                getFavorito(): Eticadata.Common.IconStruct;
                getRemover(): Eticadata.Common.IconStruct;
                getFavoritoMarcado(): Eticadata.Common.IconStruct;
                getFavoritoNaoMarcado(): Eticadata.Common.IconStruct;
            }

            export interface Extensions {
            }
            export interface ExtensionsFunc extends Function {
                prototype: Extensions;
                new (): Extensions;
                getAVI(): Eticadata.Common.IconStruct;
                getBMP(): Eticadata.Common.IconStruct;
                getDOC(): Eticadata.Common.IconStruct;
                getDOCX(): Eticadata.Common.IconStruct;
                getEXE(): Eticadata.Common.IconStruct;
                getGIF(): Eticadata.Common.IconStruct;
                getISO(): Eticadata.Common.IconStruct;
                getJPEG(): Eticadata.Common.IconStruct;
                getJPG(): Eticadata.Common.IconStruct;
                getMP3(): Eticadata.Common.IconStruct;
                getMP4(): Eticadata.Common.IconStruct;
                getPDF(): Eticadata.Common.IconStruct;
                getPNG(): Eticadata.Common.IconStruct;
                getPPT(): Eticadata.Common.IconStruct;
                getPPTX(): Eticadata.Common.IconStruct;
                getRAR(): Eticadata.Common.IconStruct;
                getTIFF(): Eticadata.Common.IconStruct;
                getTXT(): Eticadata.Common.IconStruct;
                getXLS(): Eticadata.Common.IconStruct;
                getXLSX(): Eticadata.Common.IconStruct;
                getXML(): Eticadata.Common.IconStruct;
                getZIP(): Eticadata.Common.IconStruct;
            }

            export interface Documentos {
            }
            export interface DocumentosFunc extends Function {
                prototype: Documentos;
                new (): Documentos;
                getAdicionar(): Eticadata.Common.IconStruct;
                getAttachment(): Eticadata.Common.IconStruct;
                getCertificate(): Eticadata.Common.IconStruct;
                getChart(): Eticadata.Common.IconStruct;
                getCheck(): Eticadata.Common.IconStruct;
                getCartaoCidadao(): Eticadata.Common.IconStruct;
                getConnection(): Eticadata.Common.IconStruct;
                getCup(): Eticadata.Common.IconStruct;
                getDelete(): Eticadata.Common.IconStruct;
                getDirty(): Eticadata.Common.IconStruct;
                getDocument(): Eticadata.Common.IconStruct;
                getDocuments(): Eticadata.Common.IconStruct;
                getDown(): Eticadata.Common.IconStruct;
                getEdit(): Eticadata.Common.IconStruct;
                getError(): Eticadata.Common.IconStruct;
                getExchange(): Eticadata.Common.IconStruct;
                getFind(): Eticadata.Common.IconStruct;
                getGear(): Eticadata.Common.IconStruct;
                getGears(): Eticadata.Common.IconStruct;
                getHeart(): Eticadata.Common.IconStruct;
                getInfo(): Eticadata.Common.IconStruct;
                getInto(): Eticadata.Common.IconStruct;
                getLock(): Eticadata.Common.IconStruct;
                getMusic(): Eticadata.Common.IconStruct;
                getNotebook(): Eticadata.Common.IconStruct;
                getNovo(): Eticadata.Common.IconStruct;
                getNovos(): Eticadata.Common.IconStruct;
                getOk(): Eticadata.Common.IconStruct;
                getOut(): Eticadata.Common.IconStruct;
                getPinned(): Eticadata.Common.IconStruct;
                getPlain(): Eticadata.Common.IconStruct;
                getPlainNew(): Eticadata.Common.IconStruct;
                getPreferencia(): Eticadata.Common.IconStruct;
                getPreferencias(): Eticadata.Common.IconStruct;
                getPulse(): Eticadata.Common.IconStruct;
                getRefresh(): Eticadata.Common.IconStruct;
                getStop(): Eticadata.Common.IconStruct;
                getText(): Eticadata.Common.IconStruct;
                getTime(): Eticadata.Common.IconStruct;
                getUp(): Eticadata.Common.IconStruct;
                getView(): Eticadata.Common.IconStruct;
                getWarning(): Eticadata.Common.IconStruct;
                getZoomIn(): Eticadata.Common.IconStruct;
                getZoomOut(): Eticadata.Common.IconStruct;
                getPDF(): Eticadata.Common.IconStruct;
            }

            export interface Clipboard {
            }
            export interface ClipboardFunc extends Function {
                prototype: Clipboard;
                new (): Clipboard;
                getCheio(): Eticadata.Common.IconStruct;
                getColar(): Eticadata.Common.IconStruct;
                getCopiar(): Eticadata.Common.IconStruct;
                getCortar(): Eticadata.Common.IconStruct;
                getProximo(): Eticadata.Common.IconStruct;
                getRedo(): Eticadata.Common.IconStruct;
                getUndo(): Eticadata.Common.IconStruct;
                getVazio(): Eticadata.Common.IconStruct;
            }

            export interface Backup {
            }
            export interface BackupFunc extends Function {
                prototype: Backup;
                new (): Backup;
                getAdicionar(): Eticadata.Common.IconStruct;
                getCarregar(): Eticadata.Common.IconStruct;
                getDescarregar(): Eticadata.Common.IconStruct;
                getEliminar(): Eticadata.Common.IconStruct;
                getRepor(): Eticadata.Common.IconStruct;
                getInicializarDados(): Eticadata.Common.IconStruct;
                getActualizarBD(): Eticadata.Common.IconStruct;
                getReporTabelas(): Eticadata.Common.IconStruct;
                getBDAtualizada(): Eticadata.Common.IconStruct;
                getBDDesatualizada(): Eticadata.Common.IconStruct;
                getBDNaoEncontrada(): Eticadata.Common.IconStruct;
                getBDLocalizacao(): Eticadata.Common.IconStruct;
                getBDImportacaoGold(): Eticadata.Common.IconStruct;
                getBDImportarFechar(): Eticadata.Common.IconStruct;
                getBDImportarExportar(): Eticadata.Common.IconStruct;
                getBDImportacao(): Eticadata.Common.IconStruct;
                getBDExportacao(): Eticadata.Common.IconStruct;
            }

            export interface Avisos {
            }
            export interface AvisosFunc extends Function {
                prototype: Avisos;
                new (): Avisos;
                getAjuda(): Eticadata.Common.IconStruct;
                getAlerta(): Eticadata.Common.IconStruct;
                getDesconhecido(): Eticadata.Common.IconStruct;
                getErro(): Eticadata.Common.IconStruct;
                getInformacao(): Eticadata.Common.IconStruct;
                getProibido(): Eticadata.Common.IconStruct;
                getStop(): Eticadata.Common.IconStruct;
            }
        }

        export interface Utilizadores {
        }
        export interface UtilizadoresFunc extends Function {
            prototype: Utilizadores;
            new (): Utilizadores;
            getActualizar(): Eticadata.Common.IconStruct;
            getAdicionar(): Eticadata.Common.IconStruct;
            getBloquear(): Eticadata.Common.IconStruct;
            getEliminar(): Eticadata.Common.IconStruct;
            getInformacoes(): Eticadata.Common.IconStruct;
            getMensagem(): Eticadata.Common.IconStruct;
            getPreferencias(): Eticadata.Common.IconStruct;
            getProcurar(): Eticadata.Common.IconStruct;
            getRegisto(): Eticadata.Common.IconStruct;
            getSair(): Eticadata.Common.IconStruct;
            getUtilizador(): Eticadata.Common.IconStruct;
            getVoltar(): Eticadata.Common.IconStruct;
        }

        export interface POS {
        }
        export interface POSFunc extends Function {
            prototype: POS;
            new (): POS;
            getPerfilPerifericosTestar(): Eticadata.Common.IconStruct;
            getConfigurarCheques(): Eticadata.Common.IconStruct;
            getImprimirCheques(): Eticadata.Common.IconStruct;
            getCarregamentoCartoesPrePagos(): Eticadata.Common.IconStruct;
        }

        export interface Modulos {
        }
        export interface ModulosFunc extends Function {
            prototype: Modulos;
            new (): Modulos;
            getAdicionar(): Eticadata.Common.IconStruct;
            getAmarelo(): Eticadata.Common.IconStruct;
            getDependencia(): Eticadata.Common.IconStruct;
            getEditar(): Eticadata.Common.IconStruct;
            getEliminar(): Eticadata.Common.IconStruct;
            getModulo(): Eticadata.Common.IconStruct;
            getNovo(): Eticadata.Common.IconStruct;
            getPreferencias(): Eticadata.Common.IconStruct;
            getProcurar(): Eticadata.Common.IconStruct;
            getSubstituir(): Eticadata.Common.IconStruct;
            getVer(): Eticadata.Common.IconStruct;
            getVerde(): Eticadata.Common.IconStruct;
            getVermelho(): Eticadata.Common.IconStruct;
        }

        export interface Medical {
        }
        export interface MedicalFunc extends Function {
            prototype: Medical;
            Invoice: Medical.InvoiceFunc;
            new (): Medical;
            getConsultations(): Eticadata.Common.IconStruct;
            getOpenConsultations(): Eticadata.Common.IconStruct;
            getCustomerRFI(): Eticadata.Common.IconStruct;
            getDeclarations(): Eticadata.Common.IconStruct;
            getDoctor(): Eticadata.Common.IconStruct;
            getExcel(): Eticadata.Common.IconStruct;
            getFicheirogenerico(): Eticadata.Common.IconStruct;
            getPdf(): Eticadata.Common.IconStruct;
            getWord(): Eticadata.Common.IconStruct;
            getHistoryDoctorPatients(): Eticadata.Common.IconStruct;
            getMedicamentsInfomed(): Eticadata.Common.IconStruct;
            getMedicamentsPrescription(): Eticadata.Common.IconStruct;
            getMCDTsHistoric(): Eticadata.Common.IconStruct;
            getMCDTsInsert(): Eticadata.Common.IconStruct;
            getMCDTsLaterality(): Eticadata.Common.IconStruct;
            getMCDTsObject(): Eticadata.Common.IconStruct;
            getMCDTsPrescription(): Eticadata.Common.IconStruct;
            getNurse(): Eticadata.Common.IconStruct;
            getOdontograma(): Eticadata.Common.IconStruct;
            getDate(): Eticadata.Common.IconStruct;
            getNamePatient(): Eticadata.Common.IconStruct;
            getSchedule(): Eticadata.Common.IconStruct;
            getTimetables(): Eticadata.Common.IconStruct;
        }
        module Medical {
            export interface Invoice {
            }
            export interface InvoiceFunc extends Function {
                prototype: Invoice;
                new (): Invoice;
                getDocInvoice(): Eticadata.Common.IconStruct;
                getCancellationInvoice(): Eticadata.Common.IconStruct;
                getCustomersInvoice(): Eticadata.Common.IconStruct;
                getDoctorsInvoice(): Eticadata.Common.IconStruct;
                getPatientsInvoice(): Eticadata.Common.IconStruct;
            }
        }

        export interface Integrador {
        }
        export interface IntegradorFunc extends Function {
            prototype: Integrador;
            new (): Integrador;
            getExecutaCalendarizacao(): Eticadata.Common.IconStruct;
            getExecutaExportacao(): Eticadata.Common.IconStruct;
            getExecutaImportacao(): Eticadata.Common.IconStruct;
            getExecutaTransferencia(): Eticadata.Common.IconStruct;
            getIntegradorProgramacaoTarefas(): Eticadata.Common.IconStruct;
            getIntegradorTransferencia(): Eticadata.Common.IconStruct;
        }

        export interface Hotel {
        }
        export interface HotelFunc extends Function {
            prototype: Hotel;
            new (): Hotel;
            getCalendario(): Eticadata.Common.IconStruct;
            getFamilia(): Eticadata.Common.IconStruct;
            getHelpdesk(): Eticadata.Common.IconStruct;
            getPlaneamento(): Eticadata.Common.IconStruct;
            getReservas(): Eticadata.Common.IconStruct;
            getToolbox(): Eticadata.Common.IconStruct;
            getWizard(): Eticadata.Common.IconStruct;
            getContinue(): Eticadata.Common.IconStruct;
            getInsert(): Eticadata.Common.IconStruct;
            getPause(): Eticadata.Common.IconStruct;
            getRefresh(): Eticadata.Common.IconStruct;
            getSend(): Eticadata.Common.IconStruct;
            getStart(): Eticadata.Common.IconStruct;
            getStop(): Eticadata.Common.IconStruct;
            getDespertares(): Eticadata.Common.IconStruct;
            getGravacaoChaves(): Eticadata.Common.IconStruct;
            getRoomStatus(): Eticadata.Common.IconStruct;
            getRoomStatus2(): Eticadata.Common.IconStruct;
        }

        export interface GTMotive {
        }
        export interface GTMotiveFunc extends Function {
            prototype: GTMotive;
            new (): GTMotive;
            getCreate(): Eticadata.Common.IconStruct;
            getGear(): Eticadata.Common.IconStruct;
            getRead(): Eticadata.Common.IconStruct;
            getAsk(): Eticadata.Common.IconStruct;
        }

        export interface GRH {
        }
        export interface GRHFunc extends Function {
            prototype: GRH;
            new (): GRH;
            getAccoesFormacao(): Eticadata.Common.IconStruct;
            getAmbulancia(): Eticadata.Common.IconStruct;
            getCertificado(): Eticadata.Common.IconStruct;
            getChapeuGraduado(): Eticadata.Common.IconStruct;
            getCompetencias(): Eticadata.Common.IconStruct;
            getConsultasExames(): Eticadata.Common.IconStruct;
            getCursos(): Eticadata.Common.IconStruct;
            getDoente(): Eticadata.Common.IconStruct;
            getEntidadesPrestServicos(): Eticadata.Common.IconStruct;
            getGraduado(): Eticadata.Common.IconStruct;
            getGuarda(): Eticadata.Common.IconStruct;
            getMedicamentos(): Eticadata.Common.IconStruct;
            getPolicia(): Eticadata.Common.IconStruct;
            getProfissionaisSaude(): Eticadata.Common.IconStruct;
            getSirurgiao(): Eticadata.Common.IconStruct;
            getTermometro(): Eticadata.Common.IconStruct;
            getTiposExames(): Eticadata.Common.IconStruct;
            getEnviarEmailFuncionarios(): Eticadata.Common.IconStruct;
            getEnviarEmailResponsavel(): Eticadata.Common.IconStruct;
            getEnviarEmailRpt(): Eticadata.Common.IconStruct;
            getImprimirFolha(): Eticadata.Common.IconStruct;
            getMapaResumo(): Eticadata.Common.IconStruct;
            getVisualizarFolha(): Eticadata.Common.IconStruct;
            getCessacaoContrato(): Eticadata.Common.IconStruct;
            getGuiaPagamentoMapaIGFCSS(): Eticadata.Common.IconStruct;
            getDiasUteis(): Eticadata.Common.IconStruct;
            getDescendentes(): Eticadata.Common.IconStruct;
            getAbonosDescontosFixos(): Eticadata.Common.IconStruct;
            getRegistoPessoal(): Eticadata.Common.IconStruct;
            getGerarAnexarFicheiros(): Eticadata.Common.IconStruct;
        }

        export interface ERM {
        }
        export interface ERMFunc extends Function {
            prototype: ERM;
            new (): ERM;
            getAdicActividade(): Eticadata.Common.IconStruct;
            getArmazem(): Eticadata.Common.IconStruct;
            getBanco(): Eticadata.Common.IconStruct;
            getCubes(): Eticadata.Common.IconStruct;
            getEditar(): Eticadata.Common.IconStruct;
            getEditarEmail(): Eticadata.Common.IconStruct;
            getEscola(): Eticadata.Common.IconStruct;
            getFax(): Eticadata.Common.IconStruct;
            getFuncionario(): Eticadata.Common.IconStruct;
            getLocadora(): Eticadata.Common.IconStruct;
            getMegafone(): Eticadata.Common.IconStruct;
            getOperadores(): Eticadata.Common.IconStruct;
            getTarget(): Eticadata.Common.IconStruct;
            getTecnico(): Eticadata.Common.IconStruct;
            getVendedor(): Eticadata.Common.IconStruct;
            getAgendaMarcacoes(): Eticadata.Common.IconStruct;
            getFaltas(): Eticadata.Common.IconStruct;
            getConversaoClientes(): Eticadata.Common.IconStruct;
            getConversaoContactos(): Eticadata.Common.IconStruct;
            getCompromissoReuniao(): Eticadata.Common.IconStruct;
            getEstadoAtividadeVerde(): Eticadata.Common.IconStruct;
            getEstadoAtividadeVermelho(): Eticadata.Common.IconStruct;
            getEstadoAtividadeAmarelo(): Eticadata.Common.IconStruct;
            getAddinOutlook(): Eticadata.Common.IconStruct;
            getEnvioSMS(): Eticadata.Common.IconStruct;
        }

        export interface Obras {
        }
        export interface ObrasFunc extends Function {
            prototype: Obras;
            new (): Obras;
            getBerbequim(): Eticadata.Common.IconStruct;
            getCamiaoAzul(): Eticadata.Common.IconStruct;
            getCamiaoVermelho(): Eticadata.Common.IconStruct;
            getChave(): Eticadata.Common.IconStruct;
            getEditorFormulas(): Eticadata.Common.IconStruct;
            getEmpilhador(): Eticadata.Common.IconStruct;
            getFabrica(): Eticadata.Common.IconStruct;
            getMartelo(): Eticadata.Common.IconStruct;
            getOperario1(): Eticadata.Common.IconStruct;
            getOperario2(): Eticadata.Common.IconStruct;
            getOperario3(): Eticadata.Common.IconStruct;
            getOperario4(): Eticadata.Common.IconStruct;
            getPlaneamento(): Eticadata.Common.IconStruct;
            getPorcaParafuso(): Eticadata.Common.IconStruct;
            getTractorVerde(): Eticadata.Common.IconStruct;
            getTractorVermelho(): Eticadata.Common.IconStruct;
        }
    }

    export interface CommandsUtilitariosGRH {
    }
    export interface CommandsUtilitariosGRHFunc extends Function {
        prototype: CommandsUtilitariosGRH;
        new (): CommandsUtilitariosGRH;
        EditarAlteracoesGerais: string;
        EditarMarcacaoFeriados: string;
        EditHolidays: string;
        EditarAcumulados: string;
        EditarLigacaoRelogioPonto: string;
        EditarConfiguracoesRelogioPonto: string;
        AssitenteDeslocacoes: string;
        AssitenteDeslocacoesLancamento: string;
        DataFecho: string;
        LigacaoCTE: string;
        DescargaCTE: string;
        LigacaoGTE: string;
        DescargaGTE: string;
        AcertosIRS: string;
        ReCalcRegistoPessoal: string;
        ReCalcAjustes: string;
        OperacoesMultiEmpresa: string;
        ConfiguracaoGuiaPagamentoMultiEmpresa: string;
        BalancoSocialParam: string;
        ParamEnvioEmails: string;
        ParamSelectMapas: string;
        RelatorioUnicoParam: string;
        ParamSelectConfigs: string;
        ParamSelectFeriados: string;
        EditarImportTaxasRetencao: string;
    }
    var CommandsUtilitariosGRH: CommandsUtilitariosGRHFunc;

    export interface CommandsUtilitarios {
    }
    export interface CommandsUtilitariosFunc extends Function {
        prototype: CommandsUtilitarios;
        new (): CommandsUtilitarios;
        SubstCodigoArtigos: string;
        ActivarInactivarArtigos: string;
        CatalogoFornecedorImportar: string;
        CatalogoFornecedorConfigurar: string;
        ConfigCheques: string;
        AnexosDigitais: string;
    }
    var CommandsUtilitarios: CommandsUtilitariosFunc;

    export interface CommandsSuiteMovimentos {
    }
    export interface CommandsSuiteMovimentosFunc extends Function {
        prototype: CommandsSuiteMovimentos;
        new (): CommandsSuiteMovimentos;
        MovimentosFacturacaoEntidades: string;
        MovimentosLançamentosemGrupo: string;
        MovimentosLançamentos: string;
        MovimentosNightAudit: string;
        MovimentosPlanning: string;
        MovimentosAtribuicaoAlojamentos: string;
        MovimentosAtribuicaoAlojamentosATRIBALOJ: string;
        MovimentosAtribuicaoAlojamentosALOJDISP: string;
        MovimentosReservas: string;
        MovimentosConsultaTarifas: string;
        MovimentosRoomStatus: string;
        MovimentosBatchBillings: string;
    }
    var CommandsSuiteMovimentos: CommandsSuiteMovimentosFunc;

    export interface CommandsSuiteConsultas {
    }
    export interface CommandsSuiteConsultasFunc extends Function {
        prototype: CommandsSuiteConsultas;
        new (): CommandsSuiteConsultas;
        ConsultaEntradasPrevistas: string;
        ConsultaSaidasPrevistas: string;
        ConsultaReservas: string;
        ConsultaHospedesResidentes: string;
        ConsultaFolhaServiço: string;
        ConsultaMapaCaixa: string;
        ConsultaRefeicoes: string;
        ConsultaSEF: string;
        ConsultaINE: string;
        ConsultaPolicia: string;
        ConsultaBookingPosition: string;
        ConsultaDisponibilidades: string;
        ConsultaPrevisaoReceita: string;
        ConsultaChannelManager: string;
    }
    var CommandsSuiteConsultas: CommandsSuiteConsultasFunc;

    export interface IconStruct {
        getIcon16(): Eticadata.Uri;
        getIcon24(): Eticadata.Uri;
        getIcon32(): Eticadata.Uri;
    }
    export interface IconStructFunc extends Function {
        prototype: IconStruct;
        $constructor: {
            new (): IconStruct
        };
    }
    var IconStruct: IconStructFunc;

    export enum IconSize {
        x16 = 0,
        x24 = 1,
        x32 = 2
    }

    export interface CommandsSuite {
    }
    export interface CommandsSuiteFunc extends Function {
        prototype: CommandsSuite;
        new (): CommandsSuite;
        EditarTiposDocumentosSUITE: string;
        ParametrosEstabelecimento: string;
        TiposDocumentosReservas: string;
        EditarTabelasAlojamentos: string;
        EditarTabelasAtencoes: string;
        EditarTabelasAvarias: string;
        EditarTabelasBlocosAlojamentos: string;
        EditarTabelasCaracteristicas: string;
        EditarTabelasTarifas: string;
        EditarTabelasDescritivosPagamentos: string;
        EditarTabelasDiárias: string;
        EditarTabelasEncargos: string;
        EditarTabelasEntidades: string;
        EditarTabelasGruposEncargos: string;
        EditarTabelasGrupoLimpeza: string;
        EditarTabelasHóspedes: string;
        EditarTabelasMotivosInactividade: string;
        EditarTabelasOrigensMercados: string;
        EditarTabelasPeriodicidadeHospedes: string;
        EditarTabelasRack: string;
        EditarTabelasSegmentosMercado: string;
        EditarTabelasSubZonas: string;
        EditarTabelasTecnicos: string;
        EditarTabelasTiposAlojamentos: string;
        EditarTipoEvento: string;
        EditarTabelasEventos: string;
        EditarTabelasTiposGrupos: string;
        EditarTabelasTiposIdentificacao: string;
        EditarTabelasTiposAvarias: string;
        EditarTabelasTipoCancelamento: string;
        EditarTabelasVoos: string;
        EditarWizardAlojamentos: string;
        EditarTabelasZonasAlojamentos: string;
        EditarTabelasZonaLimpeza: string;
        EditarTabelasTipoCartaoCredito: string;
        EditarTabelasMeioReserva: string;
        EditarTabelasTarifa: string;
        EditarSeleccionarEstab: string;
        EditarSelectEstab: string;
        EditarWizardTarfias: string;
        EditarTabelasPerdidosAchados: string;
        EditarTabelaPrefixo: string;
        EditarTabelaTarifaTelefonica: string;
        EditarTabelaVIPStatus: string;
        EditarTabelaTitulo: string;
        EditarDespertares: string;
        EditarDefinicoesGerais: string;
        EditarTiposInterfaces: string;
        EditarInterfaces: string;
        EditarMensagens: string;
        EditarWizardBooking: string;
        EditarReservasOnlineFalhadas: string;
        EditarMovimentoCaixa: string;
        EditarMovimentoCaixaAB: string;
        EditarMovimentoCaixaES: string;
        EditarMovimentoCaixaFC: string;
        EditarSeleccionarPosto: string;
    }
    var CommandsSuite: CommandsSuiteFunc;

    export interface CommandsStandsUtilitarios {
    }
    export interface CommandsStandsUtilitariosFunc extends Function {
        prototype: CommandsStandsUtilitarios;
        new (): CommandsStandsUtilitarios;
        ApresentacaoFotos: string;
        ConfigPerfil: string;
        Etiquetas: string;
        CatalogoViaturas: string;
    }
    var CommandsStandsUtilitarios: CommandsStandsUtilitariosFunc;

    export interface CommandsStandsMapas {
    }
    export interface CommandsStandsMapasFunc extends Function {
        prototype: CommandsStandsMapas;
        new (): CommandsStandsMapas;
        RelacaoCustos: string;
        ResultadosGlobais: string;
        MapasViaturas: string;
        VolumeNegocios: string;
        ComissoesVendedores: string;
        ComissoesLocadoras: string;
        Retomas: string;
        Garantias: string;
        TempoEmStock: string;
        FimReserva: string;
        ProxInspeccoes: string;
        Documentacao: string;
        RentACar: string;
        DocumVendaPend: string;
        IVAProcessos: string;
    }
    var CommandsStandsMapas: CommandsStandsMapasFunc;

    export interface CommandsGCEMapas {
    }
    export interface CommandsGCEMapasFunc extends Function {
        prototype: CommandsGCEMapas;
        new (): CommandsGCEMapas;
        DiarioVendas: string;
        ArtigosADevolver: string;
        AnaliseArtigosADevolver: string;
        MapasCaixa: string;
        Orcamentos: string;
        ExtractosENC: string;
        AnaliseENC: string;
        ExtractosCMP: string;
        CMPDocConvertidos: string;
        ComprasGlobais: string;
        AnaliseCMP: string;
        AnaliseEnargos: string;
        CMPMapaIVA: string;
        ExtractosVND: string;
        VNDDocConvertidos: string;
        VNDGlobais: string;
        VolumeMensalVND: string;
        AnaliseVND: string;
        AnaliseMargensLucro: string;
        Racios: string;
        VNDMapaIVA: string;
        MapaIEC: string;
        MapaTransIntracomunitarias: string;
        MapaCarga: string;
        MapaRotas: string;
        EstatisticasGiro: string;
        LstAvencas: string;
        ExtractosMovStk: string;
        ExtractosFolhasObra: string;
        ExtractosProducoes: string;
        AnaliseSTK: string;
        BalanceteSTK: string;
        ABCStocks: string;
        ControloExistencias: string;
        AnaliseFolhasObra: string;
        AnaliseProducoes: string;
        ComposicaoArtigos: string;
        LstPendentes: string;
        ExtractoHistorico: string;
        IdadeSaldos: string;
        IdadeMediaPag: string;
        AnaliseSaldos: string;
        BalancetesCC: string;
        LstLiq: string;
        LstLetras: string;
        DifCambiais: string;
        AnaliseComissoes: string;
        LiqComissoes: string;
        SaldosContas: string;
        ResultadosPorRubrica: string;
        AnaliseFluxosTES: string;
        Graficos: string;
        MapaValRecapitulativos: string;
        IntraStat: string;
        RetencaoIRS: string;
        MapaEcovalores: string;
        QuadroGestao: string;
        ConsultasDiversas: string;
        QuadroGestaoCaixa: string;
        RastreabilidadeArtigos: string;
        RastreabilidadeDocumental: string;
        MapaAnexo106CV: string;
        MapaAnexo106CVAct: string;
        MapaAnexo106RegCV: string;
        BPReportCOPE: string;
        Modelo107: string;
    }
    var CommandsGCEMapas: CommandsGCEMapasFunc;

    export interface CommandsFormacaoTab {
    }
    export interface CommandsFormacaoTabFunc extends Function {
        prototype: CommandsFormacaoTab;
        new (): CommandsFormacaoTab;
        EditarCompetenciasDeCursos: string;
        EditarCursos: string;
        EditarEntidades: string;
    }
    var CommandsFormacaoTab: CommandsFormacaoTabFunc;

    export interface CommandsFormacaoMov {
    }
    export interface CommandsFormacaoMovFunc extends Function {
        prototype: CommandsFormacaoMov;
        new (): CommandsFormacaoMov;
        EditarFuncionariosCompetencias: string;
        EditarAccoesDeFormacao: string;
        EditarCursosAgendar: string;
    }
    var CommandsFormacaoMov: CommandsFormacaoMovFunc;

    export interface CommandsERM {
    }
    export interface CommandsERMFunc extends Function {
        prototype: CommandsERM;
        new (): CommandsERM;
        EditarContactos: string;
        EditarClientesPotenciais: string;
        EditarActividades: string;
        EditarAgenda: string;
        EditarAgendaPorOficinas: string;
        EditarProcessoNegocio: string;
        EditarAgendaPorEntidade: string;
    }
    var CommandsERM: CommandsERMFunc;

    export interface CommandsEntidades {
    }
    export interface CommandsEntidadesFunc extends Function {
        prototype: CommandsEntidades;
        new (): CommandsEntidades;
        EditarClientes: string;
        EditarOutrosDevedores: string;
        EditarFornecedores: string;
        EditarDireccoes: string;
        EditarOutrosCredores: string;
        EditarVendedores: string;
        EditarLocadoras: string;
        EditarBancos: string;
        EditarTiposContactos: string;
        EditarTiposEntidade: string;
        EditarFuncionariosOfi: string;
        EditarOperadores: string;
        EditarOperadoresWeb: string;
        EditarTecnicosWeb: string;
        EditarEstabelecimentosEnsino: string;
        EditarEstabelecimentos: string;
        EditarCondutores: string;
        EditarSeguradoras: string;
        EditarCategoriaEntidades: string;
        Doctor: string;
        DoctorDeclarations: string;
        CustomerRFI: string;
        CustomerRFITables: string;
        EditarClientesModal: string;
        EditarFornecedoresModal: string;
        EditarOutrosDevedoresModal: string;
        EditarOutrosCredoresModal: string;
        EditarVendedoresModal: string;
    }
    var CommandsEntidades: CommandsEntidadesFunc;

    export interface CommandsCteUtilitarios {
    }
    export interface CommandsCteUtilitariosFunc extends Function {
        prototype: CommandsCteUtilitarios;
        new (): CommandsCteUtilitarios;
        UtilReconstDados: string;
        UtilGerarContasTerc: string;
        UtilProcuraSubst: string;
        UtilEncerramentoMeses: string;
        UtilExportacaoMovimentos: string;
        UtilExportacaoPlanos: string;
        UtilImportacaoMovimentos: string;
        UtilImportacaoPlanos: string;
        UtilDefNumDiarios: string;
        UtilRenumMovDiarios: string;
        UtilImportacaoSaftCte: string;
        UtilDiagnosticosIVA: string;
        UtilDiagnosticosRecap: string;
        UtilDiagnosticosFluxos: string;
        UtilDiagnosticosCentrosCusto: string;
        UtilOpMultiEmpresa: string;
        UtilOpMultiEmpresaPausa: string;
        UtilActPlanos: string;
        UtilPlanosAltAssocContas: string;
        UtilPlanosAltDiagPlanos: string;
        UtilArquivoDigital: string;
        UtilSaldarContas: string;
        UtilConvercaoPOCparaSNC: string;
        UtilTabelaTransicaoSNC: string;
        UtilOperDesReconhecimento: string;
        UtilConsolidacaoParametros: string;
        UtilConsolidacaoProcessamento: string;
        UtilConvercaoPGCparaSCE: string;
        UtilTabelaTransicaoSCE: string;
        UtilOperDesReconhecimentoSCE: string;
        UtilDiagnosticosRetencaoIRS: string;
        UtilEditarPrefContasLiqPendentes: string;
        UtilRemoveMovs: string;
        UtilDiagnosticosPlanosOperacionais: string;
        UtilConversaoCOLGAAPparaNIIF: string;
    }
    var CommandsCteUtilitarios: CommandsCteUtilitariosFunc;

    export interface CommandsCteMovim {
    }
    export interface CommandsCteMovimFunc extends Function {
        prototype: CommandsCteMovim;
        new (): CommandsCteMovim;
        MovimentosIntroducao: string;
        MovimentosReconciliacao: string;
        MovimentosExigibilidadeIva: string;
        MovimentosApurIva: string;
        MovimentosApurIvaParametrizacao: string;
        MovimentosApurExis: string;
        MovimentosApurExisParametrizacao: string;
        MovimentosApurRes: string;
        MovimentosApurResParametrizacao: string;
        MovimentosPassagemSaldos: string;
        MovimentosPesquisa: string;
        MovimentosApurExisValor: string;
        OrcamentosContas: string;
        OrcamentosCentrosCusto: string;
        OrcamentosContasCentrosCusto: string;
        OrcamentosCentrosCustoContas: string;
        MovimentosApurIvaParametrizacaoModal: string;
        MovimentosApurResParametrizacaoModal: string;
        MovimentosApurExistParametrizacaoModal: string;
        Calculator: string;
    }
    var CommandsCteMovim: CommandsCteMovimFunc;

    export interface CommandsCteMapas {
    }
    export interface CommandsCteMapasFunc extends Function {
        prototype: CommandsCteMapas;
        new (): CommandsCteMapas;
        MapasEstadoConta: string;
        MapasListagemDiarios: string;
        MapasListagemPlano: string;
        MapasExtractosContas: string;
        MapasExtractosCCusto: string;
        MapasExtractosFluxos: string;
        MapasExtractosDiversos: string;
        MapasBalancetesContas: string;
        MapasBalancetesCCusto: string;
        MapasBalancetesFluxos: string;
        MapasOrcamentos: string;
        MapasConfTerceiros: string;
        MapasConfigMapas: string;
        MapasConfig: string;
        MapasConfigMenus: string;
        MapasLivrosSeladosPreparacao: string;
        MapasLivrosSeladosPreparacaoAux: string;
        MapasLivrosSeladosEmissao: string;
        MapasLivrosSeladosEmissaoAux: string;
        MapasRetFonteEmissao: string;
        MapasRetFonteParametrizacao: string;
        MapasABDR: string;
        MapasEstatisticosEmissao: string;
        MapasEstatisticosParametrizacao: string;
        MapasGraficos: string;
        MapasConfigMapasFloat: string;
        MapasConfigMapasCabRod: string;
        MapasConfigMapasFormulas: string;
        MapasConfigMapasMultiEmp: string;
        MapasABDRNotas: string;
        MapasABDREstilos: string;
        MapasABDRDialogo: string;
        MapasABDRParamTab: string;
        MapasCalcImposto: string;
        MapasModelosOficiaisMultiEmp: string;
        MapasModelosOficiaisMultiEmpFiltro: string;
        MapasModelosOficiaisMultiEmpShow: string;
        MapasModelosOficiaisMultiEmpClose: string;
        MapasModelo30: string;
        MapasEditorRelatorio: string;
        MapasEditorRelatorioVariaveis: string;
        MapasConfRetencaoIRS: string;
        MapasDeclaracoesRendimentosCTE: string;
        MapasIRSDeclAnuModelo10CTE: string;
    }
    var CommandsCteMapas: CommandsCteMapasFunc;

    export interface CommandsCte {
    }
    export interface CommandsCteFunc extends Function {
        prototype: CommandsCte;
        new (): CommandsCte;
        EditarTabelas: string;
        EditarCentrosCustos: string;
        EditarFichasReparticao: string;
        EditarTiposDocumento: string;
        PlanosOperacionais: string;
    }
    var CommandsCte: CommandsCteFunc;

    export interface CommandsCommonWEB {
    }
    export interface CommandsCommonWEBFunc extends Function {
        prototype: CommandsCommonWEB;
        new (): CommandsCommonWEB;
        EditarTabelasMarcas: string;
        EditarTabelasModelos: string;
        EditarTabelasVersoes: string;
        EditarTabelasDepartamentos: string;
        EditarTabelasListasIntervencoes: string;
        EditarTabelasTiposActividades: string;
        EditarTabelasTiposComponentes: string;
        EditarTabelasComponentes: string;
        SelectedContactsWeb2SL: string;
        EditarTabelasSituacoes: string;
        EditarTabelasGarantias: string;
    }
    var CommandsCommonWEB: CommandsCommonWEBFunc;

    export interface CommandsAutoGestWEB {
    }
    export interface CommandsAutoGestWEBFunc extends Function {
        prototype: CommandsAutoGestWEB;
        new (): CommandsAutoGestWEB;
        EditarTabelasFrotas: string;
        EditarTabelasGrupoCustoProveito: string;
        EditarTabelasTiposDocumentosFrotas: string;
        EditarTabelasFornecedores: string;
        EditarTabelasEquipamentos: string;
        EditarTabelasNiveisEquipamento: string;
        EditarTabelasTiposCustos: string;
        EditarTabelasTiposDespesas: string;
        EditarTabelasTiposSeguros: string;
        EditarTabelasCondutores: string;
        EditarTabelasCores: string;
        EditarTabelasPlanosManutencao: string;
        EditarTabelasDanos: string;
        EditarTabelasTiposClasses: string;
        EditarTabelasCombustiveis: string;
        EditarTabelasLocalizacoes: string;
        EditarTabelasTiposViaturas: string;
        EditarTabelasTiposItinerarios: string;
        EditarViagens: string;
        EditarSinistros: string;
        EditarImpCustosProveitos: string;
        EditarImpCustosOperacionais: string;
    }
    var CommandsAutoGestWEB: CommandsAutoGestWEBFunc;

    export interface CommandsAutogestExtended {
    }
    export interface CommandsAutogestExtendedFunc extends Function {
        prototype: CommandsAutogestExtended;
        new (): CommandsAutogestExtended;
        GTMotiveGTConfiguration: string;
        GTMotiveGTAuthentication: string;
        GTMotive_GO_Vehicle: string;
        GTMotive_GTE_Budget: string;
        GTMotive_GetVehicleInfo: string;
    }
    var CommandsAutogestExtended: CommandsAutogestExtendedFunc;

    export interface CommandsAutoGest {
    }
    export interface CommandsAutoGestFunc extends Function {
        prototype: CommandsAutoGest;
        new (): CommandsAutoGest;
        EditarEquipamentos: string;
        EditarCores: string;
        EditarCombustiveis: string;
        EditarTiposCustos: string;
        EditarTiposViaturas: string;
        EditarTiposDespesas: string;
        EditarViaturasStands: string;
        EditarViaturasHistSituacoes: string;
        EditarTabelasMarcas: string;
        EditarTabelasModelos: string;
        EditarNiveisEquipamento: string;
        EditarVersoes: string;
        EditarTabelasGarantias: string;
        EditarTiposDocumsOficinas: string;
        EditarSeccoesOficinas: string;
        EditarTiposDocumentacao: string;
        EditarDocumentacao: string;
        EditarTiposProcessos: string;
        EditarSituacoesDocumentacao: string;
        EditarEstadosProcessos: string;
        EditarDanos: string;
        EditarImpostoAutomovel: string;
        EditarViaturasHistLocalizacoes: string;
        EditarDocsEliminadosOficinas: string;
        EditarListasVerificacao: string;
        EditarListasIntervencoes: string;
        EditarTiposSeguros: string;
        EditarTiposClasses: string;
        EditarTiposValores: string;
        EditarTabelasPrecos: string;
        EditarTabelasSituacoes: string;
        EditarTabelasComponentes: string;
        EditarTabelasTiposComponentes: string;
    }
    var CommandsAutoGest: CommandsAutoGestFunc;

    export interface CommandsArtigos {
    }
    export interface CommandsArtigosFunc extends Function {
        prototype: CommandsArtigos;
        new (): CommandsArtigos;
        EditarIdomas: string;
        EditarArmazens: string;
        EditarCategorias: string;
        EditarUnidades: string;
        EditarTpFamilias: string;
        EditarFamilias: string;
        EditarArtigos: string;
        EditarArtigosEstudoPreco: string;
        EditarGrelhasArtigos: string;
        EditarTpArtigos: string;
        EditarGruposArtigosAlternativos: string;
        DescontosTpArtigoTpsEntidade: string;
        DescontosTpEntidadeTpsArtigo: string;
        EditarDescIdiomas: string;
        ArtigoFiltro: string;
        FiltrarArtigos: string;
        EditarReferencias: string;
        EditarDescVolVendas: string;
        EditarPromocoes: string;
        EditTypeLinkCategory: string;
        EditarCategoriasLigCte: string;
        EditarArtigosLotes: string;
        EditarPromocoesAddLinhas: string;
        EditProductsCatalogs: string;
    }
    var CommandsArtigos: CommandsArtigosFunc;

    export interface CommandsGceMovim {
    }
    export interface CommandsGceMovimFunc extends Function {
        prototype: CommandsGceMovim;
        new (): CommandsGceMovim;
        POSAberturaCaixa: string;
        POSEntradaSaidasCaixa: string;
        POSFechoCaixa: string;
        OrcamentosIntroducao: string;
        OrcamentosReimpressaoDocumentos: string;
        EncomendasClientesOutrosDev: string;
        EncomendasFornecedoresOutrosCred: string;
        EncomendasArmazens: string;
        EncomendasReimpressaoDocumentos: string;
        EncomendasGerarEncFornecedores: string;
        ComprasIntroducao: string;
        ComprasConversaoDocumentos: string;
        ComprasReimpressaoDocumentos: string;
        ComprasEncargos: string;
        ComprasGeracaoProcessos: string;
        StocksIntroducao: string;
        StocksInventarios: string;
        StocksReimpressaoDocumentos: string;
        StocksFolhasObra: string;
        StocksProducoes: string;
        StocksInactivarArtigosPeriodo: string;
        GerarCodBarras: string;
        VendasIntroducao: string;
        VendasConversaoDocumentos: string;
        VendasConversaoDocumentosBasic: string;
        VendasReimpressaoDocumentos: string;
        VendasSatisfEncClientes: string;
        VendasEmissaoRecibos: string;
        VendasEmissaoLetras: string;
        VendasDefinirAvencas: string;
        VendasProcessarAvencas: string;
        VendasProcessarRapel: string;
        VendasEmissaoPrecario: string;
        VendasTabelasPrecos: string;
        VendasAlteracaoPrecos: string;
        VendasTabelasConfigPrecos: string;
        VendasActualizacaoProcessos: string;
        VendasContratoProcessar: string;
        VendasContrato: string;
        VendasTipoContrato: string;
        TesourariaReimpressaoDocumentosLiquidacoes: string;
        TesourariaReimpressaoDocumentosLiquidacoesComissoes: string;
        TesourariaLiquidacoes: string;
        TesourariaEmissaoLiqDiferidas: string;
        TesourariaEfectivarLiqDiferidas: string;
        TesourariaReimpressaoLiquidacoes: string;
        TesourariaAvisosVencimento: string;
        TesourariaIntrodComissoes: string;
        TesourariaLiqComissoes: string;
        TesourariaReimpressaoLiqComissoes: string;
        TesourariaLetrasAReceber: string;
        TesourariaLetrasAPagar: string;
        TesourariaEmissaoLetras: string;
        TesourariaEmissaoCheques: string;
        TesourariaTransfBancarias: string;
        TesourariaMovPrevistos: string;
        TesourariaMovReais: string;
        TesourariaTaloesDeposito: string;
        TesourariaLevTransferencias: string;
        TesourariaReconcMov: string;
        TesourariaEmitirFolhasCaixa: string;
        TesourariaIntrodPendentes: string;
        GENDescontosPrecosClienteArtigos: string;
        GENDescontosPrecosClienteFamilias: string;
        GENDescontosPrecosArtigoClientes: string;
        GENDescontosPrecosFamiliaClientes: string;
        GENInformacaoEscolar: string;
        GENEmissaoEtiquetas: string;
        GENNumLinhasSeries: string;
    }
    var CommandsGceMovim: CommandsGceMovimFunc;

    export interface CommandsAPVWEB {
    }
    export interface CommandsAPVWEBFunc extends Function {
        prototype: CommandsAPVWEB;
        new (): CommandsAPVWEB;
        EditarTabelasTiposEquipamentos: string;
        EditarTabelasEquipamentos: string;
        EditarTabelasGravidades: string;
        EditarTabelasNiveisSLA: string;
        EditarTabelasAssuntos: string;
        EditarTabelasTipos: string;
        EditarTabelasClientesVD: string;
        EditarTabelasTiposSolucao: string;
        EditarTabelasCausasProblemas: string;
        EditarTabelasMeiosApoio: string;
        EditarTabelasSolucoes: string;
        PesquisaEquipamentoMovimentos: string;
        PesquisaSolucoes: string;
        EditarMarcacao: string;
        EditarInstalacao: string;
    }
    var CommandsAPVWEB: CommandsAPVWEBFunc;

    export interface CommandsAPVTab {
    }
    export interface CommandsAPVTabFunc extends Function {
        prototype: CommandsAPVTab;
        new (): CommandsAPVTab;
        EditarTiposDocumsAPV: string;
        EditarListasVerificacao: string;
        EditarTabelasMarcas: string;
        EditarTabelasModelos: string;
        EditarTabelasSituacoes: string;
        EditarTabelasComponentes: string;
        EditarTabelasTiposComponentes: string;
        EditarListasIntervencoes: string;
    }
    var CommandsAPVTab: CommandsAPVTabFunc;

    export interface CommandsAPVMov {
    }
    export interface CommandsAPVMovFunc extends Function {
        prototype: CommandsAPVMov;
        new (): CommandsAPVMov;
        EditarReparacao: string;
        EditarRecepcao: string;
        EditarOrcamento: string;
        EditarEntregaFactura: string;
        EmitirDocAPV: string;
        HistoricoEstados: string;
        PedidoIntegrar: string;
        PedidoGerar: string;
        OrcamentoIntegrar: string;
        OrcamentoGerar: string;
        ReparacaoIntegrar: string;
        ReparacaoGerar: string;
        OrcamentoRepete: string;
        ReparacaoRepete: string;
        EditarLinhasReparacao_MovAux: string;
        GerarServicosInternos: string;
        ActualizacaoRMA: string;
        OpenedRepairs: string;
        ReimpressaoDocumentos: string;
    }
    var CommandsAPVMov: CommandsAPVMovFunc;

    export interface CommandsAPVMapas {
    }
    export interface CommandsAPVMapasFunc extends Function {
        prototype: CommandsAPVMapas;
        new (): CommandsAPVMapas;
        RelatorioTecnicos: string;
    }
    var CommandsAPVMapas: CommandsAPVMapasFunc;

    export interface CommandsAplicacaoWEB {
    }
    export interface CommandsAplicacaoWEBFunc extends Function {
        prototype: CommandsAplicacaoWEB;
        new (): CommandsAplicacaoWEB;
        ConsultasPersonalizadas: string;
        TerminarSessao: string;
        ShowWebSite: string;
    }
    var CommandsAplicacaoWEB: CommandsAplicacaoWEBFunc;

    export interface CommandsAplicacaoHTML {
    }
    export interface CommandsAplicacaoHTMLFunc extends Function {
        prototype: CommandsAplicacaoHTML;
        Tables: CommandsAplicacaoHTML.TablesFunc;
        Utils: CommandsAplicacaoHTML.UtilsFunc;
        new (): CommandsAplicacaoHTML;
        ShowConsultas: string;
        ShowDashBoards: string;
        ShowLembretes: string;
        ChangeRelations: string;
        ResponseCitizenCard: string;
        PrintPdf: string;
        ShowEditDashBoards: string;
        ShowEditWidgets: string;
        ShowViewerPDF: string;
        ShowAuditing: string;
        ShowAuditingConfig: string;
        ShowEditCommandsJS: string;
        ShowEditTranslator: string;
        ShowQueriesEditor: string;
        ShowQueriesGroupEditor: string;
        ShowEditRegime: string;
        ShowOrganism: string;
        ShowMinimumWage: string;
        ShowPayments: string;
        ShowReprintingReceipt: string;
        ShowEditDeductions: string;
        ShowEditParamRates: string;
        ShowBatchPayments: string;
        ShowEditMarketingLists: string;
        ShowEditMarketingCampaigns: string;
        ShowEditStates: string;
        ShowEditCampaignTypes: string;
        ShowEditModels: string;
        ShowEditSalesTarget: string;
        ShowCommissionsProcessing: string;
        ShowCommissionsUpdate: string;
        ShowCteEFaturaConfig: string;
        ShowCteEFaturaImport: string;
        ShowCteTaxonomies: string;
        ShowCteConformityDiag: string;
        ShowEditConcepts: string;
        ShowLicenseCategory: string;
        ShowConfigProfilesDataCol: string;
        ShowRightsConvention: string;
        ShowEditLateralidade: string;
        ShowEditObjectMCDT: string;
        ShowEditAgreedMCDT: string;
        ShowEditPrescriptionMCDT: string;
        ShowDashboardsGOP: string;
        ShowMCDTAgreeProcessingProduct: string;
        ShowEditDLRestrition: string;
        ShowEditMCDTCertificate: string;
        ShowEditTaxonomies: string;
        ShowRegisterBond: string;
        ShowConsultWorkers: string;
        ShowCompensationFunds: string;
        ShowRepairChecklists: string;
    }
    var CommandsAplicacaoHTML: CommandsAplicacaoHTMLFunc;
    module CommandsAplicacaoHTML {
        export interface Tables {
        }
        export interface TablesFunc extends Function {
            prototype: Tables;
            Taxes: Tables.TaxesFunc;
            new (): Tables;
        }
        module Tables {
            export interface Taxes {
            }
            export interface TaxesFunc extends Function {
                prototype: Taxes;
                new (): Taxes;
                EditFiscalTaxes: string;
                EditTaxGroups: string;
                EditTaxRegion: string;
                EditTax: string;
            }
        }

        export interface Utils {
        }
        export interface UtilsFunc extends Function {
            prototype: Utils;
            Labels: Utils.LabelsFunc;
            Export: Utils.ExportFunc;
            new (): Utils;
        }
        module Utils {
            export interface Labels {
            }
            export interface LabelsFunc extends Function {
                prototype: Labels;
                new (): Labels;
                Configuration: string;
                PrintPreview: string;
            }

            export interface Export {
            }
            export interface ExportFunc extends Function {
                prototype: Export;
                new (): Export;
                EditExportProfile: string;
                ExtractProfile: string;
            }
        }
    }

    export interface CommandsAplicacao {
    }
    export interface CommandsAplicacaoFunc extends Function {
        prototype: CommandsAplicacao;
        new (): CommandsAplicacao;
        Sair: string;
        AbrirEmpresa: string;
        FecharEmpresa: string;
        AbrirSeccao: string;
        AlterarChave: string;
        TerminarSessao: string;
        AjudaAcerca: string;
        AjudaAcercaModal: string;
        AjudaTopicos: string;
        ConfigurarImpressora: string;
        ResetLog: string;
        ResetCacheListas: string;
        EditarImagem: string;
        UtilitarioConfiguracao: string;
        RefreshBackGround: string;
        ResetTaxesCache: string;
        DataViewTabelas: string;
        TreeViewTabelas: string;
        CmdName: string;
        Tabela: string;
        MenusVariaveis: string;
        AvisosLicenca: string;
        EditarLinhaMovNrsSerie: string;
        MapasPersonalizados: string;
        MapasPersonalizadosPreVisualizacao: string;
        EditarLinhaMovLote: string;
        EditarLinhaMovArtAlternativos: string;
        FormSeleccaoPrinter: string;
        RefreshEtiApp: string;
        ListarUsersNaBd: string;
        GravarConfigsIni: string;
        AssembliesToLoad: string;
        EditarListaPersonalizada: string;
        EditarConsultaPersonalizada: string;
        EditarRelacoesLista: string;
        Calculadora: string;
        http: string;
        CmdNameLabelsTraduzidas: string;
        PesquisaNumExterno: string;
        MensagemArtigo: string;
        EditarJanelas: string;
        EditarJanelasConfiguracao: string;
        AlterarMultiplosRegistosConfiguracao: string;
        AlterarModulosUsar: string;
        AlterarModulosUsarMostrar: string;
        AvisosPersonalizados: string;
        EditarAvisosPersonalizados: string;
        AvisosSubscricao: string;
        EditarAvisosSubscricao: string;
        ActivarAvisosSQLNotification: string;
        AvisosPersonalizadosConsultas: string;
        ResetCache: string;
        HistoricoEstados: string;
        ComposicaoArtigoMovimento: string;
        ShowWebSite: string;
        ShowWebSiteBrowser: string;
        EmiteAnexoDigital: string;
        SerieDescontinuada: string;
        EditarPTCategorias: string;
        ParamExercicios: string;
        OrdersReservedQuantities: string;
    }
    var CommandsAplicacao: CommandsAplicacaoFunc;

    export interface CommandsAnexosDigitaisWEB {
    }
    export interface CommandsAnexosDigitaisWEBFunc extends Function {
        prototype: CommandsAnexosDigitaisWEB;
        new (): CommandsAnexosDigitaisWEB;
        EditarAnexo: string;
        AnexosDigitais: string;
    }
    var CommandsAnexosDigitaisWEB: CommandsAnexosDigitaisWEBFunc;

    export interface CommandsAdministrador {
    }
    export interface CommandsAdministradorFunc extends Function {
        prototype: CommandsAdministrador;
        new (): CommandsAdministrador;
        ParamCamposAdicionais: string;
        ParamCamposAdicionaisModal: string;
        ParamCamposAdicionaisEditar: string;
        ParamEventos: string;
        ParamEventosModal: string;
        ParamTeclasAtalho: string;
        ParamMapasPersonalizados: string;
        ParamConfiguracaoLogs: string;
        ParamConfigSeguranca: string;
        ParamActTaxasIVA: string;
        UtilDesbloqEmpresas: string;
        UtilManutencaoTabelas: string;
        UtilDivisaoBaseDados: string;
        UtilOtimizacaoBaseDados: string;
        UtilConfiguracao: string;
        AplEditarGrupos: string;
        AplAbrirEmpresas: string;
        AplEditarEmpresas: string;
        AplSelectSqlPath: string;
        AplEfectuarCopias: string;
        AplReporCopias: string;
        AplActualizarBD: string;
        AplCriarBD: string;
        ParamImportarCustomizacoes: string;
        ParamExportarCustomizacoes: string;
        AssembliesCustomizacao: string;
        ParamWebServices: string;
        ParamAlterFiscais1013: string;
        ParamAlterFiscais1013_Detalhe: string;
        BackstageRefreshEmpresas: string;
        UtilConversaoOrcamentos: string;
    }
    var CommandsAdministrador: CommandsAdministradorFunc;

    export interface ComandosInternos {
    }
    export interface ComandosInternosFunc extends Function {
        prototype: ComandosInternos;
        new (): ComandosInternos;
        ShowWebHost: string;
        ReposicaoVersaoAnterior: string;
        ArmMsgInput: string;
        FornecedoresArtigos: string;
        ArtigosFornecedores: string;
        FactoresConversao: string;
        TiposCustosRAC: string;
        TiposClassesEmitirDoc: string;
        UtilitariosAvisosAniversariosClientes: string;
        UtilitariosAvisosGarantia: string;
        UtilitariosAvisosEnviodocumentos: string;
        AutoGestOficinasServicosInternos: string;
        AutoGestOficinasServicosExternos: string;
        ComponentesModal: string;
        HorarioTipoPeriodo: string;
        HorarioBloco: string;
    }
    var ComandosInternos: ComandosInternosFunc;

    export interface CommandsStandsMovim {
    }
    export interface CommandsStandsMovimFunc extends Function {
        prototype: CommandsStandsMovim;
        new (): CommandsStandsMovim;
        StandsProcessamentos: string;
        StandsProcEmitirDocum: string;
        StandsProcRACEmitirDocum: string;
        StandsProcDanos: string;
        StandsProcEmitirNovoDocum: string;
        StandsProcHistEstados: string;
        StandsDocumentacao: string;
        StandsDespesas: string;
        StandsPotenciaisClientes: string;
        StandsPotencialCliente: string;
        StandsCCComissoesLocadoras: string;
        StandsRentACarProcessamentos: string;
        StandsProcessoDuplicar: string;
        StandsRentACarAssistenteFacturacao: string;
    }
    var CommandsStandsMovim: CommandsStandsMovimFunc;

    export interface CommandsAPVUtilitarios {
    }
    export interface CommandsAPVUtilitariosFunc extends Function {
        prototype: CommandsAPVUtilitarios;
        new (): CommandsAPVUtilitarios;
        SubstChaveEquipamento: string;
    }
    var CommandsAPVUtilitarios: CommandsAPVUtilitariosFunc;

    export interface CommandsGceTiposDocumentos {
    }
    export interface CommandsGceTiposDocumentosFunc extends Function {
        prototype: CommandsGceTiposDocumentos;
        new (): CommandsGceTiposDocumentos;
        TiposDocumentosOperacoesCaixa: string;
        TiposDocumentosOrcamentos: string;
        TiposDocumentosEncomendas: string;
        TiposDocumentosCompras: string;
        TiposDocumentosStocks: string;
        TiposDocumentosVendas: string;
        TiposDocumentosLiquidacoes: string;
        TiposDocumentosLetras: string;
        TiposDocumentosSeccoes: string;
        TiposDocumentosFiliais: string;
        TiposDocumentosLigCte: string;
        EditarAnexo: string;
        EditarSituacoesAnexo: string;
        EditarTiposAnexo: string;
        SeriesDocumentos: string;
    }
    var CommandsGceTiposDocumentos: CommandsGceTiposDocumentosFunc;

    export interface CommandsGOP {
    }
    export interface CommandsGOPFunc extends Function {
        prototype: CommandsGOP;
        new (): CommandsGOP;
        EditarTiposDocumentosGOP: string;
        EditarConcursos: string;
        EditarTabelasPerfisDeImportacao: string;
        EditarTabelasTarefas: string;
        EditarTabelasTiposDeConcurso: string;
        EditarTabelasTiposDeEmpreitada: string;
        EditarTabelasFormaCaucao: string;
        EditarTabelasFormaEntrega: string;
        EditarTabelasCriteriosDeAdjudicacao: string;
        EditarTabelasTiposdeProcesso: string;
        EditarTabelasTemplates: string;
        EditarTabelasEspecialidades: string;
        EditarTabelasAlvaras: string;
        EditarTabelasItensCusto: string;
        EditarTabelasIndicesCusto: string;
        EditarTabelasTiposData: string;
        EditarTabelasFormulasRevisao: string;
        EditarProcessos: string;
        EditarOrcamentos: string;
        EditarProjectos: string;
        EditarAutosMedicaoVnd: string;
        EditarAutosMedicaoPrd: string;
        EditarAutosMedicaoCmp: string;
        EditarRegistosObra: string;
        EditarDistribuirRecursos: string;
        EditarModoDistribuicao: string;
        EditarEmitirFatura: string;
        EditarPlanningConfiguration: string;
        EditarSubcontracts: string;
    }
    var CommandsGOP: CommandsGOPFunc;

    export interface CommandsSSTTab {
    }
    export interface CommandsSSTTabFunc extends Function {
        prototype: CommandsSSTTab;
        new (): CommandsSSTTab;
        EditarTiposDeAccoes: string;
        EditarResultadosDeAccoes: string;
        EditarProfissionaisDeSaudeESeguranca: string;
        EditarEntidadesPrestadorasDeServicos: string;
        EditarMotivosAcidente: string;
        EditarMedidaAcidente: string;
    }
    var CommandsSSTTab: CommandsSSTTabFunc;

    export interface CommandsGceUtil {
    }
    export interface CommandsGceUtilFunc extends Function {
        prototype: CommandsGceUtil;
        new (): CommandsGceUtil;
        RecalcStkCustos: string;
        RecalcRetencaoIRS: string;
        UtilConfigDocs: string;
        DocsElectronicos: string;
        UtilActualizaEcovalores: string;
        EtiqArtigosEmissao: string;
        EtiqArtigosConfig: string;
        EtiqEntidadesEmissao: string;
        EtiqEntidadesConfig: string;
        EtiqEmissao: string;
        EtiqImprimir: string;
        LstArtigosEmissao: string;
        LstArtigosConfig: string;
        UtilCtbDiagnosticoON_Line: string;
        UtilCtbDiagnosticoOFF_Line: string;
        UtilCtbExportacao: string;
        UtilAutoPreVendaExportacao: string;
        UtilAutoPreVendaImportacao: string;
        UtilIntegracaoDados: string;
        UtilIntegracaoDadosExecutarPerfis: string;
        UtilIntegracaoDadosHistorico: string;
        UtilSAFTPT: string;
        UtilSAFTPT2010: string;
        UtilSAFTPT2013: string;
        UtilSAFTPT2742013: string;
        UtilSAFTPT3022016: string;
        UtilAnalisadorSAFTPT: string;
        UtilComunicacaoFactAT: string;
        UtilComunicacaoGuiasAT: string;
        UtilComunicacaoInventariosAT: string;
        UtilValidaEnviaAT: string;
        FEMostarFicheiros: string;
        FEMostraEstadoActDocs: string;
        FEMostraJanelaDetalhe: string;
        FEMostraArtigosDesconhecidos: string;
        UtilIntegracaoDadosOffLineExecutarPerfis: string;
        UtilIntegracaoDadosOffLineHistoricoLogs: string;
        UtilComunicacaoGuiasATSAFT2742013: string;
        UtilVndVencimIvaCaixa: string;
        UtilCmpVencimIvaCaixa: string;
        UtilRecalculateCommissions: string;
        LotsInactivateActivate: string;
    }
    var CommandsGceUtil: CommandsGceUtilFunc;

    export interface CommandsSSTMov {
    }
    export interface CommandsSSTMovFunc extends Function {
        prototype: CommandsSSTMov;
        new (): CommandsSSTMov;
        EditarAccoesFuncionarios: string;
        EditarAccoesMedicas: string;
        EditarFactoresDeRisco: string;
        EditarFactoresDeRiscoDeDoenças: string;
        EditarAcidentesDeTrabalho: string;
    }
    var CommandsSSTMov: CommandsSSTMovFunc;

    export interface CommandsQueries {
    }
    export interface CommandsQueriesFunc extends Function {
        prototype: CommandsQueries;
        new (): CommandsQueries;
        RAC_SearchVehicle: string;
    }
    var CommandsQueries: CommandsQueriesFunc;

    export interface CommandsProcessamentoGrh {
    }
    export interface CommandsProcessamentoGrhFunc extends Function {
        prototype: CommandsProcessamentoGrh;
        new (): CommandsProcessamentoGrh;
        EditarAbonosDescontosFaltas: string;
        EditarAbonosDescontos: string;
        EditarFaltas: string;
        EditarMarcacaoFerias: string;
        EditarConsultas: string;
        EditarExames: string;
        SimulacaoProc: string;
        SimulacaoProcNr: string;
        SimulacaoProcFr: string;
        SimulacaoProcNt: string;
        SimulacaoProcVenc: string;
        SimulacaoProcFlt: string;
        SimulacaoProcAbnDesc: string;
        SimulacaoProcGravAlt: string;
        LancamentoAlteracoes: string;
        RenovacaoContrato: string;
        CessacaoContrato: string;
        Processamento: string;
        ProcessamentoNr: string;
        ProcessamentoFr: string;
        ProcessamentoNt: string;
        RemoverProcessamento: string;
        ConsultaProcessamentos: string;
    }
    var CommandsProcessamentoGrh: CommandsProcessamentoGrhFunc;

    export interface CommandsPesquisasPOS {
    }
    export interface CommandsPesquisasPOSFunc extends Function {
        prototype: CommandsPesquisasPOS;
        new (): CommandsPesquisasPOS;
        PesquisaArtigo: string;
        PesquisaLotes: string;
        PesquisaEdicoes: string;
        PesquisaCliente: string;
        PesquisaReferencias: string;
        PesquisaDevolucao: string;
        PesquisaTodosArtigos: string;
        PesquisaContribuintes: string;
        PesquisaAmostra: string;
        PesquisaRecibos: string;
        PesquisaSuspensoVND: string;
        PesquisaTransferencia: string;
        PesquisaEncomendas: string;
        PesquisaVendas: string;
        PesquisaSoVendas: string;
        PesquisaFuncionarios: string;
        PesquisaSuspensoENC: string;
        PesquisaLivros: string;
        PesquisaArtigosAlternativos: string;
        PesquisaCamposAdicionais: string;
        PesquisaSemFolhaServico: string;
        PesquisaEncomendasAdto: string;
        PesquisaExecutarPerfisOFFLine: string;
        PesquisaExecutarPerfisAdminOFFLine: string;
        PesquisaHistoricoIntegracao: string;
        PesquisaVendasComMesa: string;
        PesquisaArtigoRT: string;
        PesquisaSalesConferenceAndOrder: string;
    }
    var CommandsPesquisasPOS: CommandsPesquisasPOSFunc;

    export interface CommandsOutrasTabelas {
    }
    export interface CommandsOutrasTabelasFunc extends Function {
        prototype: CommandsOutrasTabelas;
        new (): CommandsOutrasTabelas;
        EditarZonas: string;
        EditarSubZonas: string;
        EditarMoedas: string;
        EditarTaxasIVA: string;
        EditarTpMPagamento: string;
        EditarTpPilhas: string;
        EditarTpPneus: string;
        EditarTpOleos: string;
        EditarTpREEE: string;
        EditarTpDAutor: string;
        EditarNomesCientificos: string;
        EditarZonasCaptura: string;
        EditarND: string;
        EditarActualizacaoPrecos: string;
        EditarRegiao: string;
        EditarPorto: string;
        EditarAeroporto: string;
        EditarModoTransporte: string;
        EditarCondicaoEntrega: string;
        EditarNomenclatura: string;
        EditarNaturezasTransacao: string;
        EditarCondicaoPagamento: string;
        EditarMeioExpedicao: string;
        EditarCargasDescargas: string;
        EditarEstadoDocumentos: string;
        EditarClassifMovStk: string;
        EditarSector: string;
        EditarTipoEncargos: string;
        EditarDescricao: string;
        EditarRubrica: string;
        EditarMovPeriodicos: string;
        EditarConta: string;
        EditarTipoComissoes: string;
        EditarFluxosCaixa: string;
        EditarPlanoContas: string;
        EditarDiario: string;
        EditarPlanos: string;
        EditarRotas: string;
        EditarPlanoContasAlternat: string;
        EditarDescritivos: string;
        CartoesPrePagos: string;
        CartoesClientes: string;
        EditarHorarios: string;
        EditarHorariosModal: string;
        EditarPlanoContasModal: string;
        EditarDepartamentos: string;
        EditarLocalizacoes: string;
        EditarCursos: string;
        EditarTiposContrato: string;
        EditarMotivosIsencaoIVA: string;
        EditarClassificacoesEstatistica: string;
        EditarTiposContadores: string;
        DiscountVoucherTypes: string;
    }
    var CommandsOutrasTabelas: CommandsOutrasTabelasFunc;

    export interface CommandsOficinasUtilitarios {
    }
    export interface CommandsOficinasUtilitariosFunc extends Function {
        prototype: CommandsOficinasUtilitarios;
        new (): CommandsOficinasUtilitarios;
        SubstChaveViatura: string;
        ImportacaoFleetData: string;
        ConfiguracaoRelTarefas: string;
        ConfiguracaoOficinas: string;
        ManutencaoRelTarefas: string;
    }
    var CommandsOficinasUtilitarios: CommandsOficinasUtilitariosFunc;

    export interface CommandsOficinasMovim {
    }
    export interface CommandsOficinasMovimFunc extends Function {
        prototype: CommandsOficinasMovim;
        new (): CommandsOficinasMovim;
        AgendaMarcacoes2012: string;
        AgendaMarcacoes: string;
        AgendaMarcacoesModal: string;
        EditarMarcacao: string;
        EditarRecepcao: string;
        EditarOrcamento: string;
        EditarOrdReparacao: string;
        EditarOrdReparacaoMateriais: string;
        EditarEntregaFacturar: string;
        EditarOrdRep_DevMateriais: string;
        EditarOrdRep_ReqMateriais: string;
        EditarOrdRep_ServInternos: string;
        EditarOrdRep_ServExternos: string;
        EmitirDocOficinas: string;
        GerarServInternos: string;
        MarcacaoIntegra: string;
        RecepcaoIntegra: string;
        OrcamentoIntegra: string;
        OrdReparacaoIntegra: string;
        MarcacaoSucede: string;
        RecepcaoSucede: string;
        OrcamentoSucede: string;
        OrdReparacaoSucede: string;
        OrdReparacaoAssociado: string;
        OrcamentoAssociado: string;
        OrcamentoRepete: string;
        OrdReparacaoRepete: string;
        RecepcaoRepete: string;
        ReimpressaoDocumentos: string;
    }
    var CommandsOficinasMovim: CommandsOficinasMovimFunc;

    export interface CommandsOficinasMapas {
    }
    export interface CommandsOficinasMapasFunc extends Function {
        prototype: CommandsOficinasMapas;
        new (): CommandsOficinasMapas;
        OrdensReparacaoResumo: string;
        OrdensReparacaoTotaisGlobais: string;
        OrdensReparacaoVND: string;
        Orcamentos: string;
        OrdensReparacaoServicos: string;
        OrdensReparacaoMateriais: string;
        FuncionariosResumo: string;
        FuncionariosRecolhaTarefas: string;
        Garantias: string;
        Historial: string;
        Graficos: string;
        ConsultasDiversas: string;
        Marcacoes: string;
        Visitas: string;
        EntregaFacturarTotaisGlobais: string;
        ProxInspeccoes: string;
        DocumVendaPend: string;
        PrevisionalMateriais: string;
        RegistoDiario: string;
        GraficosMovOficinas: string;
        ConsultasRecolhasTarefas: string;
    }
    var CommandsOficinasMapas: CommandsOficinasMapasFunc;

    export interface CommandsModOficiais {
    }
    export interface CommandsModOficiaisFunc extends Function {
        prototype: CommandsModOficiais;
        new (): CommandsModOficiais;
        ModelosOficiaisIES_2016: string;
        ParametrizacoesIES_2016: string;
        ParametrizacoesOPIES_2016: string;
        ModelosOficiaisIESQuadro063_2016: string;
        ModelosOficiaisIESQuadrosDAA60_2016: string;
        ModelosOficiaisIESQuadrosDAA70_2016: string;
        ModelosOficiaisIESQuadro063ValesCartoes_2016: string;
        ModelosOficiaisIESQuadroCertificados_2016: string;
        ModelosOficiaisWebServices_2017: string;
        ModelosOficiaisIES_2017: string;
        ParametrizacoesIES_2017: string;
        ParametrizacoesOPIES_2017: string;
        ReposicaoVerAntIES_2017: string;
        ModelosOficiaisIESQuadro063_2017: string;
        ModelosOficiaisIESQuadrosDAA60_2017: string;
        ModelosOficiaisIESQuadrosDAA70_2017: string;
        ModelosOficiaisIESQuadro063ValesCartoes_2017: string;
        ModelosOficiaisIESQuadroCertificados_2017: string;
        ModelosOficiaisMod3_2016: string;
        ParametrizacoesMod3_2016: string;
        ModelosOficiaisMod3Quadro8_2016: string;
        ModelosOficiaisMod3_2017: string;
        ParametrizacoesMod3_2017: string;
        ReposicaoVerAntMod3_2017: string;
        ModelosOficiaisMod3Quadro8_2017: string;
        ModelosOficiaisMod22_2016: string;
        ParametrizacoesMod22_2016: string;
        ModelosOficiaisMod22RetFonte_2016: string;
        ModelosOficiaisMod22Quadro3_2016: string;
        ModelosOficiaisMod22Quadro31_2016: string;
        ModelosOficiaisMod22QuadroQuadroTransmBenefFiscais_2016: string;
        ModelosOficiaisMod22Quadro077TransmBenefFiscais_2016: string;
        ModelosOficiaisMod22Quadro078IncentivosSujeitosTaxasMaximas_2016: string;
        ModelosOficiaisMod22QuadroMaisValias_2016: string;
        ModelosOficiaisMod22Quadro71_2016: string;
        ModelosOficiaisMod22Quadro9_2016: string;
        ModelosOficiaisMod22QuadroNACE_2016: string;
        ModelosOficiaisMod22QuadroDerramaCalculada_2016: string;
        ModelosOficiaisMod22_2017: string;
        ParametrizacoesMod22_2017: string;
        ReposicaoVerAntMod22_2017: string;
        ModelosOficiaisMod22RetFonte_2017: string;
        ModelosOficiaisMod22Quadro3_2017: string;
        ModelosOficiaisMod22Quadro31_2017: string;
        ModelosOficiaisMod22QuadroQuadroTransmBenefFiscais_2017: string;
        ModelosOficiaisMod22Quadro077TransmBenefFiscais_2017: string;
        ModelosOficiaisMod22Quadro078IncentivosSujeitosTaxasMaximas_2017: string;
        ModelosOficiaisMod22QuadroMaisValias_2017: string;
        ModelosOficiaisMod22Quadro71_2017: string;
        ModelosOficiaisMod22Quadro9_2017: string;
        ModelosOficiaisMod22QuadroNACE_2017: string;
        ModelosOficiaisMod22QuadroDerramaCalculada_2017: string;
        ModelosOficiaisMod22Moc_2016: string;
        ParametrizacoesMod22Moc_2016: string;
        ModelosOficiaisMod22Moc_2017: string;
        ParametrizacoesMod22Moc_2017: string;
        ModelosOficiaisMod20Moc_2017: string;
        ParametrizacoesMod20Moc_2017: string;
        ModelosOficiaisMod1B_2017: string;
        ParametrizacoesMod1B_2017: string;
        ModelosOficiaisMod1B_Novo_2017: string;
        ParametrizacoesMod1B_Novo_2017: string;
        QuadroMod1B_Novo_2017: string;
        ModelosOficiaisDeclPeriodica: string;
        ParametrizacoesDeclPeriodica: string;
        DiagnosticoDeclPeriodica: string;
        ModelosOficiaisDeclPer: string;
        ParametrizacoesDeclPer: string;
        DiagnosticoDeclPer: string;
        ModelosOficiaisDeclRecap: string;
        ModelosOficiaisModOA30: string;
        ModelosOficiaisMod39: string;
        ModelosOficiaisMod106: string;
        ParametrizacoesMod106: string;
        ModelosOficiaisMod106Act: string;
        ParametrizacoesMod106Act: string;
        ModelosOficiaisMapaAnexo106CV: string;
        ModelosOficiaisMapaAnexo106CVAct: string;
        ModelosOficiaisMapaAnexo106RegCV: string;
        ParametrizacoesRecapitulativoCV: string;
        ModelosOficiaisMod107: string;
        ParametrizacoesMod107: string;
        ModelosOficiaisModC: string;
        ParametrizacoesModC: string;
        ModelosOficiaisModGP10: string;
        ParametrizacoesModGP10: string;
        ModelosOficiaisModDPRCV: string;
        ModelosOficiaisDeclPer_MOC: string;
        ParametrizacoesDeclPer_MOC: string;
        GeraFicheiroModeloDeclPeriodica: string;
        GeraFicheiroModelo22: string;
        GeraFicheiroModelo3: string;
        GeraFicheiroModeloIES: string;
        GeraFicheiroModeloDeclRecap: string;
        GeraFicheiroModeloOA30: string;
        GeraFicheiroModelo39: string;
    }
    var CommandsModOficiais: CommandsModOficiaisFunc;

    export interface CommandsPesquisas {
    }
    export interface CommandsPesquisasFunc extends Function {
        prototype: CommandsPesquisas;
        new (): CommandsPesquisas;
        Pesquisas: string;
        ProcuraViaturas: string;
        ProcuraViaturasRAC: string;
        ProcuraViaturasProcesso: string;
        ProcuraArtigoPartNumber: string;
        ProcuraEquipamentos: string;
    }
    var CommandsPesquisas: CommandsPesquisasFunc;

    export interface CommandsImo {
    }
    export interface CommandsImoFunc extends Function {
        prototype: CommandsImo;
        Manutencoes: CommandsImo.ManutencoesFunc;
        Processamentos: CommandsImo.ProcessamentosFunc;
        Mapas: CommandsImo.MapasFunc;
        Tabelas: CommandsImo.TabelasFunc;
        Utilitarios: CommandsImo.UtilitariosFunc;
        new (): CommandsImo;
    }
    var CommandsImo: CommandsImoFunc;
    module CommandsImo {
        export interface Manutencoes {
        }
        export interface ManutencoesFunc extends Function {
            prototype: Manutencoes;
            new (): Manutencoes;
            Abates: string;
            AbatesSNC: string;
            Reparacoes: string;
            Aquisicoes: string;
            Aquisicoes_Modal: string;
            Reinvestimentos_Modal: string;
            FindPorNumExterno: string;
            FindPorNumExterno_Tipo: string;
            FindPorNumExterno_Tipo_Abate: string;
            FindPorNumExterno_Tipo_Aquisicao: string;
            FindPorNumExterno_Tipo_Reparacao: string;
            FindPorNumExterno_Varios_Dados: string;
            FindPorNumExterno_ValorChave: string;
            FindPorNumExterno_Grelha: string;
            FindPorNumExterno_DadosEntidade: string;
            FindPorNumExterno_Entidade: string;
            FindPorNumExterno_Numero: string;
            FindPorNumExterno_Resultado: string;
            LigacaoContabilidade: string;
            LigacaoContabilidadeAbateSnc: string;
            TabelasLigacaoContabilidade: string;
        }

        export interface Processamentos {
        }
        export interface ProcessamentosFunc extends Function {
            prototype: Processamentos;
            new (): Processamentos;
            Reavaliacoes: string;
            Amortizacoes: string;
            SimAmortizacoes: string;
            DescargaCte: string;
            DescargaCteAbateSnc: string;
            Revalorizacoes: string;
            PerdasImparidade: string;
            JustoValor: string;
        }

        export interface Mapas {
        }
        export interface MapasFunc extends Function {
            prototype: Mapas;
            new (): Mapas;
            BalanceteContabilistico: string;
            BalanceteContabilisticoPorCCusto: string;
            BensReinvestimentos_Modal: string;
            Historico: string;
            LimitesFiscais: string;
            MapasFiscais: string;
            ReinvestimentosMaisValias: string;
            ListagemImobilizado: string;
            ListagemFichasImobilizado: string;
        }

        export interface Tabelas {
        }
        export interface TabelasFunc extends Function {
            prototype: Tabelas;
            new (): Tabelas;
            CCusto: string;
            Operacoes: string;
            Conservacoes: string;
            TiposImobilizado: string;
            AbateAlienacoes: string;
            Classificacoes: string;
            ObservacoesEspeciais: string;
            AjustesFiscais: string;
            Decretos: string;
            BensImobilizado: string;
            BensImobilizado_Modal: string;
            TabelasAnexas: string;
            CoeficientesReavaliacao: string;
            GrandesGrupos: string;
            SubGrupos: string;
            TpDocumentosImo: string;
            Taxas: string;
            Seccoes: string;
            PlanosDepreciaçao: string;
            BensImobilizadoExerc: string;
        }

        export interface Utilitarios {
        }
        export interface UtilitariosFunc extends Function {
            prototype: Utilitarios;
            new (): Utilitarios;
            HistoricoAmortizacoes: string;
            HistoricoReavaliacoes: string;
            FechoAno: string;
            LstContasInexistentes: string;
            AnularFechoAno: string;
            EmissaoEtiquetas: string;
            RemovePlano: string;
            RecalcularMaisMenosValias: string;
        }
    }

    export interface CommandsGraficos {
    }
    export interface CommandsGraficosFunc extends Function {
        prototype: CommandsGraficos;
        new (): CommandsGraficos;
        EmitirGrafico: string;
    }
    var CommandsGraficos: CommandsGraficosFunc;

    export interface CommandsGRHListagens {
    }
    export interface CommandsGRHListagensFunc extends Function {
        prototype: CommandsGRHListagens;
        new (): CommandsGRHListagens;
        Descendentes: string;
        AdmissoesDemissoes: string;
        DiasUteis: string;
        RenovacaoContrato: string;
        DeslocacoesDespesas: string;
        DeslocacoesDespesasSemValores: string;
        TurnosRotativos: string;
        JustificacaoFaltas: string;
        DistribuicaoEtaria: string;
        FichasReparticao: string;
        FuncFichasReparticao: string;
        AbonDescFixoseAbonUnit: string;
        DepartFichasRepart: string;
        Recibos: string;
        RecibosPay: string;
        LevantamentosResumido: string;
        TransferenciasBancarias: string;
        Seguro: string;
        Sindicatos: string;
        ConfiguracaoTransferenciasBancarias: string;
        ConfiguracaoCartoesRefeicao: string;
        ContasCorrentes: string;
        ContasCorrentesA: string;
        FolhaFerias: string;
        AjustesAcumulados: string;
        Cheques: string;
        ConfiguracaoCheques: string;
        ConfiguracaoRecibos: string;
        Modelos: string;
        CategoriasFuncionarios: string;
        CessacaoContrato: string;
        FF_PorFunc: string;
        IRT_AO: string;
        CartoesRefeicao: string;
    }
    var CommandsGRHListagens: CommandsGRHListagensFunc;

    export interface CommandsGRHMapas {
    }
    export interface CommandsGRHMapasFunc extends Function {
        prototype: CommandsGRHMapas;
        new (): CommandsGRHMapas;
        Funcionarios: string;
        FuncionariosDeclArt99: string;
        RegistoPessoal: string;
        AbonosDescontos: string;
        Faltas: string;
        Consultas: string;
        Exames: string;
        Ferias: string;
        GeralEmpresa: string;
        SegurancaSocial: string;
        ConfiguracaoSegSocial: string;
        GuiaPagamento: string;
        RetencoesIndependentes: string;
        ResumoEncargos: string;
        HorasExtras: string;
        Absentismo: string;
        DeclaracaoRetencoesFontes: string;
        DeclaracoesRendimentos: string;
        MapaADSE: string;
        ADSEGuiaPag: string;
        QuadroPessoal: string;
        DefinicaoMargens: string;
        RelacaoDescontosCGA: string;
        RelacaoContributivaCGA: string;
        CGAGuiaPagamento: string;
        CGARelacaoContributivaGP: string;
        RemuneracoesDescontosEncargos: string;
        IRSDeclAnuModelo10: string;
        IRSDeclAnuModelo20HMZ: string;
        RelacaoNominalMZ: string;
        BalancoSocial: string;
        MapasEspecificos: string;
        MapasEspecificosConfiguracao: string;
        MapasEspecificosConfiguracaoColunas: string;
        MapaCentrosCusto: string;
        TaxasIUR113: string;
        TaxasIUR111: string;
        MapaHorasTrabalhoSuplementar: string;
        MapaDGEEP: string;
        MapaInqMensalConstrObrasPublicas: string;
        MapaHorasTrabalhadas: string;
        MapaFundosCompensacao: string;
        Graficos: string;
        Modelo19: string;
        ValidaIRSDeclAnuModelo10Web: string;
        RelatorioUnico: string;
        RelatorioUnicoMultiplosValores: string;
        RelatorioUnicoMultiplosValoresGreves: string;
        IRT_DeclAnual_AO: string;
        DeclMensalRemunAT: string;
        ModelosOficiaisModDPRCV: string;
    }
    var CommandsGRHMapas: CommandsGRHMapasFunc;

    export interface CommandsGrh {
    }
    export interface CommandsGrhFunc extends Function {
        prototype: CommandsGrh;
        new (): CommandsGrh;
        EditarProfissoes: string;
        EditarTiposContrato: string;
        EditarNaturezasJuridicas: string;
        EditarCategorias: string;
        EditarTiposExames: string;
        EditarSituacoes: string;
        EditarInstrRegulTrabalhos: string;
        EditarResultadosConsultas: string;
        EditarCiclosdeTurnosRotativos: string;
        EditarAssociacoesPatronais: string;
        EditarMedicos: string;
        EditarHabilitacoes: string;
        EditarSituacoesCGA: string;
        EditarAbonosDescontosFaltas: string;
        EditarTiposDocumentos: string;
        EditarReparticoesFinancas: string;
        EditarSeguradoras: string;
        EditarSegurancaSocial: string;
        EditarSindicatos: string;
        EditarTaxasIRSEntradaEmVigor: string;
        EditarRegioes: string;
        EditarEscaloesIRS: string;
        EditarTurnos: string;
        EditarMotivosFaltas: string;
        EditarMotivosHorasExtras: string;
        EditarPaises: string;
        EditarDistritos: string;
        EditarConcelhos: string;
        EditarFreguesias: string;
        EditarRubricasImpostos: string;
        EditarMunicipios: string;
        EditarFuncionarios: string;
        EditarFuncionariosModal: string;
        EditarRegioesEscaloesIRS: string;
        EditarTaxasRetencao: string;
        EditarTiposSituacoesDocumentacao: string;
        EditarTiposDespesas: string;
        EditarDiuturnidades: string;
        EditarDescendentes: string;
        EditarDiasUteis: string;
        EditarFuncionariosTurnosRotativos: string;
        EditarFuncionariosHorasTrabalhadas: string;
        EditarFuncionariosRegistoPessoal: string;
        EditarFuncionariosAbonDescFixoseAbonUnit: string;
        EditarOutrosAbonosDescontadosPelaFalta: string;
        EditarTiposRemuneracao: string;
        EditarTabelas: string;
        EditarCAERU: string;
        EditarSituacao_ActividadeRU: string;
        EditarMotivosSitActividadeRU: string;
        EditarMotivosFaltasRU: string;
        EditarGrevesRU: string;
        EditarGrevesReinvindicacoesRU: string;
        EditarGrevesResultadosRU: string;
        EditarRegimesReformaRU: string;
        EditarCIRSRU: string;
        EditarRegimesReformaReduzidaRU: string;
        EditarCodActividadeRU: string;
        EditarSituacoesProfissaoRU: string;
        EditarMotivosEntradasRU: string;
        EditarMotivosSaidasRU: string;
        EditarDuracaoTrabalhoRU: string;
        EditarOrganizacaoTrabalhoRU: string;
        EditarMotivosHorasNRemunRU: string;
        EditarNacionalidadesRU: string;
        EditarAccoesInformacaoRU: string;
        EditarAccoesConsultaRU: string;
        EditarAccoesFormacaoRU: string;
        EditarFactRiscoFisicoRU: string;
        EditarMedidasPrevRiscoFisicoRU: string;
        EditarFactRiscoActividadeRU: string;
        EditarMedidasPrevRiscoActividadeRU: string;
        EditarFactRiscoPsicOrgRU: string;
        EditarMedidasPrevRiscoPsicOrgRU: string;
        EditarFactRiscoSegSaudeRU: string;
        EditarMedidasPrevRiscoSegSaudeRU: string;
        EditarExamesMedicosRU: string;
        EditarExamesMedicosFactorRiscoRU: string;
        EditarVacinasRU: string;
        EditarActividadeDesenvolvidaRU: string;
        EditarEINECSRU: string;
        EditarMencaoRiscoRU: string;
        EditarMedidasPrevRiscoQuimicoRU: string;
        EditarFactRiscoBiologicoRU: string;
        EditarMedidasPrevRiscoBiologicoRU: string;
        EditarFactRiscoDoencasRU: string;
        EditarDoencasRU: string;
        EditarPaisesRU: string;
        EditarFormacaoNivelQualificacaoRU: string;
        EditarFormacaoTipoCertDiplomaRU: string;
        EditarFormacaoEntidadeRU: string;
        EditarFormacaoHorariosRU: string;
        EditarFormacaoIniciativaRU: string;
        EditarFormacaoModalidadeRU: string;
        EditarFormacaoPeriodoRefRU: string;
        EditarFormacaoSitFaceFrequenciaRU: string;
        EditarFormacaoAreaRU: string;
        EditarPrestadorServicosRU: string;
        EditarSexoRU: string;
        EditarRegimeDurTrabalhoRU: string;
        EditarTipoEmpresaPrestRU: string;
        EditarEstadoCivil: string;
        EditarMotivoPromocao: string;
        EditarAplicabilidadeIRCT: string;
        EditarNivelQualificacao: string;
        EditarFuncionarioRU: string;
        EditarNISSRU: string;
        EditarAbonosCalculadosPorDescontos: string;
        EditarMedicos_RU: string;
        EditarConfigSEPA: string;
        EditarDeductions: string;
        EditarTiposDocumentosHR: string;
        EditarSobretaxaIRS: string;
        EditarConfigQUERY: string;
        RegistarVinculo: string;
        ConsultarTrabalhadores: string;
    }
    var CommandsGrh: CommandsGrhFunc;

    export interface CommandsImportData {
    }
    export interface CommandsImportDataFunc extends Function {
        prototype: CommandsImportData;
        new (): CommandsImportData;
        ExecutarPerfil: string;
    }
    var CommandsImportData: CommandsImportDataFunc;

    export interface CommandsIntegrador {
    }
    export interface CommandsIntegradorFunc extends Function {
        prototype: CommandsIntegrador;
        new (): CommandsIntegrador;
        ConfigurarLocalizacao: string;
        Perfis: string;
        EditarPerfis: string;
        Historico: string;
        HistoricoLog: string;
        InicializarFilial: string;
        ConfigurarServico: string;
        Progress: string;
    }
    var CommandsIntegrador: CommandsIntegradorFunc;

    export interface CommandsIntegradorOffLine {
    }
    export interface CommandsIntegradorOffLineFunc extends Function {
        prototype: CommandsIntegradorOffLine;
        new (): CommandsIntegradorOffLine;
        EditarPerfilExportacao: string;
        EditarPerfilImportacao: string;
        EditarPerfilTransferencia: string;
        EditarProgramacaoTarefas: string;
        VisualizarProgresso: string;
        ExecutarPerfis: string;
        HistoricoOffLine: string;
        ConsultaLogs: string;
        ExportarPerfis: string;
        ImportarPerfis: string;
        ConsultaLogsModal: string;
    }
    var CommandsIntegradorOffLine: CommandsIntegradorOffLineFunc;

    export interface CommandsMedical {
    }
    export interface CommandsMedicalFunc extends Function {
        prototype: CommandsMedical;
        TablesLink: CommandsMedical.TablesLinkFunc;
        MovementsLink: CommandsMedical.MovementsLinkFunc;
        new (): CommandsMedical;
    }
    var CommandsMedical: CommandsMedicalFunc;
    module CommandsMedical {
        export interface TablesLink {
        }
        export interface TablesLinkFunc extends Function {
            prototype: TablesLink;
            OthersLink: TablesLink.OthersLinkFunc;
            MedicamentsPrescriptionLink: TablesLink.MedicamentsPrescriptionLinkFunc;
            MedicamentsLink: TablesLink.MedicamentsLinkFunc;
            new (): TablesLink;
            Exams: string;
            HealthCareInstitutions: string;
            HealthRegions: string;
            HealthProfessionals: string;
            ICD9: string;
            ICD10: string;
            Marker: string;
            MCDTAreas: string;
            MedicalAnalyses: string;
            MedicalBenefits: string;
            MedicalCliniHistory: string;
            MedicalConsulState: string;
            MedicalSpecialty: string;
            ResponsibleFinancialInstitution: string;
            Standard: string;
            TypeAttachmentsDoc: string;
            TypeDosages: string;
            TypeMedicalBenefit: string;
            TypeMedicalCards: string;
            TypeMedicalConsul: string;
            TypeMedicalDeclarations: string;
            MedicalDeclarations: string;
            MedicalDeclarationsPrint: string;
            TypeModTaxExemptions: string;
            TypePrints: string;
            TypeProfessionalBodies: string;
            TypeRFI: string;
            Medicaments: string;
        }
        module TablesLink {
            export interface OthersLink {
            }
            export interface OthersLinkFunc extends Function {
                prototype: OthersLink;
                new (): OthersLink;
                MedicalAnalysesClinicHistSpecialty: string;
            }

            export interface MedicamentsPrescriptionLink {
            }
            export interface MedicamentsPrescriptionLinkFunc extends Function {
                prototype: MedicamentsPrescriptionLink;
                new (): MedicamentsPrescriptionLink;
                MedicPrescState: string;
                MedicPrescReasonsAnnulment: string;
                MedicPrescReasonsCancellationLines: string;
                MedicPrescType: string;
                MedicPrescVia: string;
                MedicPrescExceptions: string;
            }

            export interface MedicamentsLink {
            }
            export interface MedicamentsLinkFunc extends Function {
                prototype: MedicamentsLink;
                new (): MedicamentsLink;
                DCIPT: string;
                PharmaceuticalForm: string;
            }
        }

        export interface MovementsLink {
        }
        export interface MovementsLinkFunc extends Function {
            prototype: MovementsLink;
            new (): MovementsLink;
            PathologyPatient: string;
            MedicamentsInfomed: string;
            MedicalSchedule: string;
            MedicalAppointments: string;
            MedicalConsultations: string;
            Attachments: string;
            ConfigurationOfCommunicationRequirements: string;
            MedicamentsPrescriptions: string;
            CancelPrescription: string;
            MedicamentsPrescriptionsReports: string;
            HistoryDoctorPatients: string;
            CloseMedicalConsultations: string;
            SelfBillingDoctor: string;
            BillingCustomerRFI: string;
            MovVenda_CustomerRFIElectFiles: string;
            MovVenda_Cancellation: string;
            ShowOdontograma: string;
            MedicamentsPrescribed: string;
        }
    }

}
