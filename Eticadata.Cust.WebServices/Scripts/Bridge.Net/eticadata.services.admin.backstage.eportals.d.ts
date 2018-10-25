/// <reference path="./bridge.d.ts" />/// <reference path="./eticadata.d.ts" />
/// <reference path="./eticadata.eRP.etiEnums.d.ts" />

declare module Eticadata.Services.Admin.Backstage.Eportals {
    export interface Papel extends Eticadata.Entity {
        TipoEntidade: Eticadata.Services.Admin.Backstage.Eportals.TipoEntidade;
        EnumTabela: Eticadata.ERP.EtiEnums.EnumTabela;
        ID: Bridge.Guid;
        Nome: string;
        Descricao: string;
        Entidade: string;
        Estado: boolean;
        ModuloID: Bridge.Guid;
        isAdmin: boolean;
        isCliente: boolean;
        isFuncionario: boolean;
        UtilizadorPapeis: Eticadata.Services.Admin.Backstage.Eportals.UtilizadorPapel[];
        UtilizadorPapeisDeleted: Eticadata.Services.Admin.Backstage.Eportals.UtilizadorPapel[];
        setTipoEntidade(): void;
    }
    export interface PapelFunc extends Function {
        prototype: Papel;
        new (): Papel;
    }
    var Papel: PapelFunc;

    export interface ValidationCodes {
        Type: Eticadata.Services.Admin.Backstage.Eportals.ValidationMessageType;
        Code: string;
        Info: Object[];
    }
    export interface ValidationCodesFunc extends Function {
        prototype: ValidationCodes;
        constructor: {
            new (description: string): ValidationCodes
        };
        constructor$1: {
            new (description: string, type: Eticadata.Services.Admin.Backstage.Eportals.ValidationMessageType): ValidationCodes
        };
        constructor$2: {
            new (description: string, type: Eticadata.Services.Admin.Backstage.Eportals.ValidationMessageType, info: Object[]): ValidationCodes
        };
    }
    var ValidationCodes: ValidationCodesFunc;

    export enum ValidationMessageType {
        Warning = 0,
        Error = 1,
        Question = 2
    }

    export interface VersaoExtensions {
    }
    export interface VersaoExtensionsFunc extends Function {
        prototype: VersaoExtensions;
        new (): VersaoExtensions;
        Modulos(entity: Eticadata.Services.Admin.Backstage.Eportals.Versao): Eticadata.Services.Admin.Backstage.Eportals.Modulo[];
    }
    var VersaoExtensions: VersaoExtensionsFunc;

    export interface UtilizadorPapel extends Eticadata.Entity {
        Data: Date;
        Estado: boolean;
        PapelID: Bridge.Guid;
        UtilizadorID: Bridge.Guid;
        Utilizador: Eticadata.Services.Admin.Backstage.Eportals.Utilizador;
    }
    export interface UtilizadorPapelFunc extends Function {
        prototype: UtilizadorPapel;
        new (): UtilizadorPapel;
    }
    var UtilizadorPapel: UtilizadorPapelFunc;

    export interface UtilizadoresLocalizacao extends Eticadata.Entity {
        Cidade: string;
        CodEntidade: number;
        Continente: string;
        Host: string;
        id: Bridge.Guid;
        IP: string;
        ISP: string;
        Pais: string;
        PrimeiroAcesso: Date;
        Regiao: string;
        UltimoAcesso: Date;
        UserID: number;
    }
    export interface UtilizadoresLocalizacaoFunc extends Function {
        prototype: UtilizadoresLocalizacao;
        new (): UtilizadoresLocalizacao;
    }
    var UtilizadoresLocalizacao: UtilizadoresLocalizacaoFunc;

    export interface Utilizador extends Eticadata.Entity {
        Bloqueio: boolean;
        Chave: string;
        CodEntidade: number;
        dataSincronizado: Date;
        Email: string;
        Entidade: number;
        Estado: boolean;
        id: Bridge.Guid;
        Nome: string;
        NomeEntidade: string;
        PortalKey: number;
        isSincronizado: boolean;
        TipoUtilizador: number;
        ToUpdate: boolean;
        UserID: number;
        UtilizadorLocalizacoes: Eticadata.Services.Admin.Backstage.Eportals.UtilizadoresLocalizacao[];
    }
    export interface UtilizadorFunc extends Function {
        prototype: Utilizador;
        new (): Utilizador;
    }
    var Utilizador: UtilizadorFunc;

    export interface Configuracao extends Eticadata.Entity {
        Empresa: Eticadata.Services.Admin.Backstage.Eportals.Empresa;
        EstadoSite: string;
        ID: number;
        NomeServErp: string;
        NomeDbErp: string;
        DbErpUsername: string;
        DbErpPasswd: string;
        ErpUsername: string;
        ErpPasswd: string;
        NomeServSist: string;
        NomeDbSist: string;
        DbSistUsername: string;
        DbSistPasswd: string;
        Data: Date;
        LogPath: string;
        Periodicidade: number;
        CodEmpresa: string;
        Exercicio: string;
        Seccao: string;
        PrtUrl: string;
        IsConfigured: boolean;
        PrtUrlServicos: string;
        Dias: number;
        DataActivacao: Date;
        DataExecucao: Date;
        AtrasoMax: number;
        NumTentativas: number;
        Intervalo: number;
        SiteName: string;
        VersaoGuid: Bridge.Guid;
        Publicado: boolean;
        DefaultPage: boolean;
        ContactPage: boolean;
        NotaBoasVindas: string;
        WinServiceName: string;
        WinServiceStatus: boolean;
        InfoEmpresa: string;
        ToUpdate: boolean;
        EptUsername: string;
        EptPassword: string;
        Notificacoes: Eticadata.Services.Admin.Backstage.Eportals.Notificacao[];
        Utilizadores: Eticadata.Services.Admin.Backstage.Eportals.Utilizador[];
        UtilizadoresDeleted: Eticadata.Services.Admin.Backstage.Eportals.Utilizador[];
        Versao: Eticadata.Services.Admin.Backstage.Eportals.Versao;
        Validate(): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
        Validate$1(def: Eticadata.Services.Admin.Backstage.Eportals.DefinitionsInfo, paises: Eticadata.Services.Admin.Backstage.Eportals.eCommercePais[]): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
        ValidaEmail(email: string): Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes[];
        validaPeriodicidade(): Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes[];
        calcExecutionDate(): void;
        ValidateEcommerce(def: Eticadata.Services.Admin.Backstage.Eportals.DefinitionsInfo, countries: Eticadata.Services.Admin.Backstage.Eportals.eCommercePais[]): Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes[];
        LoadPortalStructure(Portal: Eticadata.Services.Admin.Backstage.Eportals.EPortal, SystemValues: Eticadata.Services.Admin.Backstage.Eportals.Integracao): void;
    }
    export interface ConfiguracaoFunc extends Function {
        prototype: Configuracao;
        new (): Configuracao;
    }
    var Configuracao: ConfiguracaoFunc;

    export interface eCommercePais extends Eticadata.Entity {
        CodPais: number;
        AbrevMoeda: string;
        TipoTerceiro: number;
    }
    export interface eCommercePaisFunc extends Function {
        prototype: eCommercePais;
        new (): eCommercePais;
    }
    var eCommercePais: eCommercePaisFunc;

    export enum TipoPeriodos {
        Minutos = 1,
        Horas = 2,
        Dias = 3,
        DiasDaSemana = 4,
        Semanas = 5,
        Meses = 6
    }

    export interface Modulo extends Eticadata.Entity {
        IsEnabled: boolean;
        TagEnum: Eticadata.Services.Admin.Backstage.Eportals.ModuloTags;
        IsGce: boolean;
        IsGrh: boolean;
        IsAutoGest: boolean;
        IsCore: boolean;
        IsECommerce: boolean;
        CanUpdate: boolean;
        NovaVersao: string;
        ID: Bridge.Guid;
        Nome: string;
        Descricao: string;
        Icon: string;
        VersaoModulo: string;
        Estado: boolean;
        Instalacao: Date;
        Actualizacao: Date;
        ToInstall: boolean;
        isInstalled: boolean;
        MenuConfig: number;
        Tag: string;
        ToUpdate: boolean;
        ToRemove: boolean;
        Papeis: Eticadata.Services.Admin.Backstage.Eportals.Papel[];
        getisInstalledOrToInstall(): boolean;
        setFlagsByTag(): void;
        needsUpdate(Nome: string, Tag: string, Versao: string): void;
    }
    export interface ModuloFunc extends Function {
        prototype: Modulo;
        new (): Modulo;
    }
    var Modulo: ModuloFunc;

    export interface ModuloDisponivel extends Eticadata.Entity {
        Codigo: number;
        Nome: string;
        Descricao: string;
        Tag: string;
        Versao: string;
        IDModulo: string;
        Papeis: Eticadata.Services.Admin.Backstage.Eportals.ModuloDisponivelPapel[];
    }
    export interface ModuloDisponivelFunc extends Function {
        prototype: ModuloDisponivel;
        new (): ModuloDisponivel;
    }
    var ModuloDisponivel: ModuloDisponivelFunc;

    export interface ModuloDisponivelPapel extends Eticadata.Entity {
        Codigo: number;
        ModuloDisponivelCodigo: number;
        Nome: string;
        Descricao: string;
        Index: number;
        IsCliente: number;
        IsFuncionario: number;
        IsVendedor: number;
        IsAdmin: number;
    }
    export interface ModuloDisponivelPapelFunc extends Function {
        prototype: ModuloDisponivelPapel;
        new (): ModuloDisponivelPapel;
    }
    var ModuloDisponivelPapel: ModuloDisponivelPapelFunc;

    export interface Notificacao extends Eticadata.Entity {
        ConfiguracaoID: number;
        Email: string;
        Estado: boolean;
        ID: number;
        OnClose: boolean;
        OnError: boolean;
        OnStart: boolean;
        OnStop: boolean;
        Linha: number;
    }
    export interface NotificacaoFunc extends Function {
        prototype: Notificacao;
        new (): Notificacao;
    }
    var Notificacao: NotificacaoFunc;

    export interface Sincronizacao extends Eticadata.Entity {
        Concluido: boolean;
        ConfigID: number;
        DataFim: Date;
        DataInicio: Date;
        HasError: boolean;
        LogSincronizacoes: Eticadata.Services.Admin.Backstage.Eportals.LogSincronizacao[];
        SincID: number;
    }
    export interface SincronizacaoFunc extends Function {
        prototype: Sincronizacao;
        new (): Sincronizacao;
    }
    var Sincronizacao: SincronizacaoFunc;

    export interface LogSincronizacao extends Eticadata.Entity {
        Chave: string;
        ChaveValor: string;
        Id: number;
        OperationType: string;
        Plataforma: string;
        SincID: number;
        Estado: boolean;
        Tabela: string;
    }
    export interface LogSincronizacaoFunc extends Function {
        prototype: LogSincronizacao;
        new (): LogSincronizacao;
    }
    var LogSincronizacao: LogSincronizacaoFunc;

    export enum TipoEntidade {
        Cliente = 1,
        Funcionario = 2
    }

    export interface Responsavel {
        CodEntidade: number;
        Tipo: number;
        NomeEntidade: string;
        Nome: string;
        Email: string;
        Nif: string;
        PortalWeb: boolean;
        PortalWebOfi: boolean;
        PortalWebGce: boolean;
        PortalWebECommerce: boolean;
        getHashCode(): Eticadata.Services.Admin.Backstage.Eportals.Responsavel;
        equals(o: Eticadata.Services.Admin.Backstage.Eportals.Responsavel): Boolean;
        $clone(to: Eticadata.Services.Admin.Backstage.Eportals.Responsavel): Eticadata.Services.Admin.Backstage.Eportals.Responsavel;
    }
    export interface ResponsavelFunc extends Function {
        prototype: Responsavel;
        new (): Responsavel;
    }
    var Responsavel: ResponsavelFunc;

    export interface ConfiguracaoExtensions {
    }
    export interface ConfiguracaoExtensionsFunc extends Function {
        prototype: ConfiguracaoExtensions;
        new (): ConfiguracaoExtensions;
        Periodicidade(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): number;
        Intervalo(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): number;
        Intervalo$1(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao, value: number): void;
        SiteName(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): string;
        PrtUrl(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): string;
        PrtUrlServicos(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): string;
        Data(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): Date;
        Data$1(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao, value: Date): void;
        DataExecucao(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): Date;
        DataExecucao$1(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao, value: Date): void;
        Dias(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): number;
        Dias$1(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao, value: number): void;
        Notificacoes(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): Eticadata.Services.Admin.Backstage.Eportals.Notificacao[];
        Utilizadores(entity: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): Eticadata.Services.Admin.Backstage.Eportals.Utilizador[];
    }
    var ConfiguracaoExtensions: ConfiguracaoExtensionsFunc;

    export interface ConfiguracaoValidator {
    }
    export interface ConfiguracaoValidatorFunc extends Function {
        prototype: ConfiguracaoValidator;
        new (): ConfiguracaoValidator;
        ValidateConfiguracaoPeriodicidade(configuracao: Eticadata.Services.Admin.Backstage.Eportals.Configuracao): Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes[];
    }
    var ConfiguracaoValidator: ConfiguracaoValidatorFunc;

    export interface DefinitionsInfo {
        ChangedProperties: Bridge.List$1<string>;
        GRH_ADFCodigo: string;
        GRH_AnexoFaltasID: string;
        GRH_AnexoDespesasID: string;
        eCommerce_Armazem: string;
        eCommerce_LinhaPreco: string;
        eCommerce_GerirStock: string;
        eCommerce_AbrevTpDoc: string;
        eCommerce_Moeda: string;
        eCommerce_SeccaoWeb: string;
        eCommerce_ArtigoEnvio: string;
        eCommerce_ArtigoPagamento: string;
        eCommerce_Estado_PagamentoEfectuado: string;
        eCommerce_Estado_EncomendaConcluida: string;
        eCommerce_Categorias: string;
        ofi_Estado_PendenteAprovacao: string;
        ofi_Estado_OrcamentoAceite: string;
        ofi_Estado_OrcamentoRejeitado: string;
        ofi_Seccao: string;
    }
    export interface DefinitionsInfoFunc extends Function {
        prototype: DefinitionsInfo;
        new (): DefinitionsInfo;
    }
    var DefinitionsInfo: DefinitionsInfoFunc;

    export enum DiasSemana {
        Segunda = 1,
        Terca = 2,
        Quarta = 3,
        Quinta = 4,
        Sexta = 5,
        Sabado = 6,
        Domingo = 0
    }

    export interface Empresa {
        Codigo: string;
        Nome: string;
        MoradaL1: string;
        MoradaL2: string;
        Localidade: string;
        CodPostal: string;
        Telefone: string;
        Fax: string;
        Email: string;
        Pais: string;
        AbrevSubZona: string;
        Logotipo: number[];
    }
    export interface EmpresaFunc extends Function {
        prototype: Empresa;
        new (): Empresa;
    }
    var Empresa: EmpresaFunc;

    export interface EPortal {
        nome: string;
        Versao: string;
        Modulos: Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ModuloDisponivel>;
        AddModules(modules: Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ModuloDisponivel>, hasLicenseEportalsGrh: boolean, hasLicenseEportalsComercial: boolean, hasLicenseEportalsOficinas: boolean, hasLicenseEportalsSuite: boolean, hasLicenseEportalsEcommerce: boolean): void;
    }
    export interface EPortalFunc extends Function {
        prototype: EPortal;
        new (): EPortal;
    }
    var EPortal: EPortalFunc;

    export interface EportalsMessageController {
    }
    export interface EportalsMessageControllerFunc extends Function {
        prototype: EportalsMessageController;
        new (): EportalsMessageController;
        getErroUrlInvalido(): string;
        getErroVencHoraInvalido(): string;
        getErroEncargosInvalido(): string;
        getErroMajoracaoInvalido(): string;
        getErroPreenchimentoObrigUrl(): string;
        getErroPreenchimentoObrigUrlServ(): string;
        getErroPreenchimentoUrl(): string;
        getErroValidacaoEmail(): string;
        getErroPreenchimentoObrigNomeDbPortal(): string;
        getErroPreenchimentoObrigNomeServPortal(): string;
        getErroPreenchimentoObrigPasswdDbPortal(): string;
        getErroPreenchimentoObrigUsrDbPortal(): string;
        getErroPreenchimentoObrigSiteName(): string;
        getErroPreenchimentoObrigCartaConducao(): string;
        getErroPreenchimentoObrigHoraInicio(): string;
        getErroPreenchimentoObrigLocalInicio(): string;
        getErroPreenchimentoObrigDepartamento(): string;
        getErroPreenchimentoPaisRepetido(): string;
        getErroPreenchimentoMoeda(): string;
        IsUrlInvalido(valorStr: string): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
        SiteNameEmpty(valorStr: string): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
        UsernameInvalido(valorStr: string): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
        NomeBDInvalido(valorStr: string): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
        NomeServidorInvalido(valorStr: string): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
    }
    var EportalsMessageController: EportalsMessageControllerFunc;

    export interface EportalsSettings {
    }
    export interface EportalsSettingsFunc extends Function {
        prototype: EportalsSettings;
        new (): EportalsSettings;
        linkServicos: string;
    }
    var EportalsSettings: EportalsSettingsFunc;

    export enum EstadoSite {
        Online = 0,
        OffLine = 1
    }

    export interface Extension {
    }
    export interface ExtensionFunc extends Function {
        prototype: Extension;
        new (): Extension;
        EnumBitMask(date: Date): Eticadata.Services.Admin.Backstage.Eportals.DiasSemana;
        AddWeeks(dateTime: Date, Weeks: number): Date;
        AddNextDay(dateTime: Date, Dias: number): Date;
    }
    var Extension: ExtensionFunc;

    export enum GceDocumentos {
        Encomendas = 1,
        Vendas = 2,
        Pendentes = 3
    }

    export interface GenericMessageController {
    }
    export interface GenericMessageControllerFunc extends Function {
        prototype: GenericMessageController;
        new (): GenericMessageController;
    }
    var GenericMessageController: GenericMessageControllerFunc;

    export enum GrhDocumentos {
        Recibos = 1,
        DeclaracaoRendimentos = 2
    }

    export interface Integracao {
        CodEmpresa: string;
        ServidorEmpresa: string;
        DatabaseEmpresa: string;
        ServidorSistema: string;
        DatabaseSistema: string;
        ActiveExercicio: string;
        NomeAplicacao: string;
        UsernameSistema: string;
        PasswdSistema: string;
        UsernameEmpresa: string;
        PasswdEmpresa: string;
        Seccao: string;
        ConnectionStringNET: string;
        UserUsername: string;
        UserPasswd: string;
    }
    export interface IntegracaoFunc extends Function {
        prototype: Integracao;
        new (): Integracao;
    }
    var Integracao: IntegracaoFunc;

    export interface ModuloExtensions {
    }
    export interface ModuloExtensionsFunc extends Function {
        prototype: ModuloExtensions;
        new (): ModuloExtensions;
        ToInstall(entity: Eticadata.Services.Admin.Backstage.Eportals.Modulo): boolean;
        Tag(entity: Eticadata.Services.Admin.Backstage.Eportals.Modulo): string;
    }
    var ModuloExtensions: ModuloExtensionsFunc;

    export enum ModuloTags {
        Core = 1,
        Grh = 2,
        Gce = 3,
        Ofi = 4,
        ECommerce = 5
    }

    export interface NotificacaoExtensions {
    }
    export interface NotificacaoExtensionsFunc extends Function {
        prototype: NotificacaoExtensions;
        new (): NotificacaoExtensions;
        Email(entity: Eticadata.Services.Admin.Backstage.Eportals.Notificacao): string;
    }
    var NotificacaoExtensions: NotificacaoExtensionsFunc;

    export enum Operacoes {
        U = 1,
        I = 2,
        D = 3
    }

    export interface RegularExpressionValidator {
        IsValid(value: string): boolean;
    }
    export interface RegularExpressionValidatorFunc extends Function {
        prototype: RegularExpressionValidator;
        new (pattern: string): RegularExpressionValidator;
    }
    var RegularExpressionValidator: RegularExpressionValidatorFunc;

    export enum TempoLog {
        Dia = 1,
        Semana = 2,
        Mes = 3,
        Ano = 4
    }

    export interface Versao extends Eticadata.Entity {
        Data: string;
        Descricao: string;
        Estado: boolean;
        ID: Bridge.Guid;
        Modulos: Eticadata.Services.Admin.Backstage.Eportals.Modulo[];
        ModulosToSetup: Eticadata.Services.Admin.Backstage.Eportals.Modulo[];
        Nome: string;
        Path: string;
        VersaoPortal: string;
        PackageDirectory: string;
        Validate(): Bridge.List$1<Eticadata.Services.Admin.Backstage.Eportals.ValidationCodes>;
    }
    export interface VersaoFunc extends Function {
        prototype: Versao;
        new (): Versao;
    }
    var Versao: VersaoFunc;

}
