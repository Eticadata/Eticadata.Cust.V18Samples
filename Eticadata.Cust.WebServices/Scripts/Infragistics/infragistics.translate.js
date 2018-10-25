/*!@license
* Infragistics.Web.ClientUI Grid localization resources 14.1.20141.2031
*
* Copyright (c) 2011-2014 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Grid) {
    $.ig.Grid = {};

    $.extend($.ig.Grid, {
        locale: {
            noSuchWidget: "No se ha cargado ese widget: ",
            autoGenerateColumnsNoRecords: "autoGenerateColumns está habilitado, pero no hay registros en el origen de datos para determinar las columnas",
            optionChangeNotSupported: "No se admite el cambio de la siguiente opción después de crear igGrid.",
            optionChangeNotScrollingGrid: "No se puede cambiar la siguiente opción después de crear la cuadrícula porque la cuadrícula inicial no se desplaza y se necesita una re-representación total.",
            noPrimaryKeyDefined: "No se ha definido una clave principal para la cuadrícula. Para usar funciones como la edición de cuadrículas, debe definir una clave principal.",
            indexOutOfRange: "El índice de filas que ha especificado está fuera del intervalo.",
            noSuchColumnDefined: "La clave de columna especificada no coincide con ninguna de las columnas de cuadrícula definidas.",
            columnIndexOutOfRange: "El índice de columna especificado está fuera del intervalo.",
            recordNotFound: "No se ha encontrado el registro con el Id. especificado en la vista de datos.",
            columnNotFound: "No se ha encontrado una columna que coincide con la clave.",
            colPrefix: "Columna ",
            columnVirtualizationRequiresWidth: "La virtualización / columnVirtualization está establecida como Verdadero, pero no se ha podido deducir el ancho para las columnas de cuadrícula. Debe establecer uno de los siguientes parámetros: a) ancho de cuadrícula, b) defaultColumnWidth, c) ancho definido para cada columna",
            virtualizationRequiresHeight: "La virtualización está establecida como Verdadero; por tanto, también se debe establecer la altura de la cuadrícula.",
            colVirtualizationDenied: "columnVirtualization solo es aplicable a la virtualización fija",
            noColumnsButAutoGenerateTrue: "autoGenerateColumns está establecido como Falso, pero no hay columnas definidas en la cuadrícula. Establezca autoGenerateColumns como Verdadero o especifique las columnas manualmente",
            noPrimaryKey: "Se necesita una clave principal para definir el widget igHierarchicalGrid.",
            templatingEnabledButNoTemplate: "jQueryTemplating está establecido como Verdadero, pero no se ha definido ninguna rowTemplate.",
            expandTooltip: "Expandir fila",
            collapseTooltip: "Contraer fila",
            movingNotAllowedOrIncompatible: "No se ha podido desplazar la columna deseada. No se ha encontrado la columna o el resultado no era compatible con el diseño de columna.",
            allColumnsHiddenOnInitialization: "No es posible ocultar todas las columnas de cuadrícula. Permita que se muestre al menos una de las columnas.",
            columnVirtualizationNotSupportedWithPercentageWidth: "La virtualización de columnas no se admite cuando el ancho de la cuadrícula se define en unidades de porcentaje.",
            mixedWidthsNotSupported: "No se admite la configuración del ancho de columna mezclado/parcial. No se admiten los supuestos en los que algunos anchos de columna se establezcan en porcentajes y otros en píxeles (o no se establezcan)."
        }
    });

    $.ig.GridFiltering = $.ig.GridFiltering || {};

    $.extend($.ig.GridFiltering, {
        locale: {
            startsWithNullText: getMsgTranslated('Shell', 'Começa por...'),
            endsWithNullText: getMsgTranslated('Shell', 'Termina com...'),
            containsNullText: getMsgTranslated('Shell', 'Contém'),
            doesNotContainNullText: getMsgTranslated('Shell', 'Não contém...'),
            equalsNullText: getMsgTranslated('Shell', 'Igual a...'),
            doesNotEqualNullText: getMsgTranslated('Shell', 'Diferente de...'),
            greaterThanNullText: getMsgTranslated('Shell', 'Maior que'),
            lessThanNullText: getMsgTranslated('Shell', 'Menor que...'),
            greaterThanOrEqualToNullText: getMsgTranslated('Shell', 'Maior ou igual a...'),
            lessThanOrEqualToNullText: getMsgTranslated('Shell', 'Menor ou igual a...'),
            onNullText: getMsgTranslated('Shell', 'Em...'),
            notOnNullText: getMsgTranslated('Shell', 'Diferente de...'),
            afterNullText: getMsgTranslated('Shell', 'Depois'),
            beforeNullText: getMsgTranslated('Shell', 'Antes'),
            emptyNullText: getMsgTranslated('Shell', 'Vazio'),
            notEmptyNullText: getMsgTranslated('Shell', 'Não vazio'),
            nullNullText: getMsgTranslated('Shell', 'Nulo'),
            notNullNullText: getMsgTranslated('Shell', 'Não nulo'),
            startsWithLabel: getMsgTranslated('Shell', 'Começa por'),
            endsWithLabel: getMsgTranslated('Shell', 'Termina com'),
            containsLabel: getMsgTranslated('Shell', 'Contém'),
            doesNotContainLabel: getMsgTranslated('Shell', 'Não contém'),
            equalsLabel: getMsgTranslated('Shell', 'Igual a'),
            doesNotEqualLabel: getMsgTranslated('Shell', 'Diferente de'),
            greaterThanLabel: getMsgTranslated('Shell', 'Maior que'),
            lessThanLabel: getMsgTranslated('Shell', 'Menor que'),
            greaterThanOrEqualToLabel: getMsgTranslated('Shell', 'Maior ou igual que'),
            lessThanOrEqualToLabel: getMsgTranslated('Shell', 'Menor ou igual que'),
            trueLabel: getMsgTranslated('Shell', 'Verdadeiro'),
            falseLabel: getMsgTranslated('Shell', 'Falso'),
            afterLabel: getMsgTranslated('Shell', 'Depois'),
            beforeLabel: getMsgTranslated('Shell', 'Antes'),
            todayLabel: getMsgTranslated('Shell', 'Hoje'),
            yesterdayLabel: getMsgTranslated('Shell', 'Ontem'),
            thisMonthLabel: getMsgTranslated('Shell', 'Este mês'),
            lastMonthLabel: getMsgTranslated('Shell', 'Mês passado'),
            nextMonthLabel: getMsgTranslated('Shell', 'Mês seguinte'),
            thisYearLabel: getMsgTranslated('Shell', 'Este ano'),
            lastYearLabel: getMsgTranslated('Shell', 'Ano passado'),
            nextYearLabel: getMsgTranslated('Shell', 'Ano seguinte'),
            clearLabel: getMsgTranslated('Shell', 'Limpar filtro'),
            noFilterLabel: getMsgTranslated('Shell', 'Não'),
            onLabel: getMsgTranslated('Shell', 'Em'),
            notOnLabel: getMsgTranslated('Shell', 'Sem ser'),
            advancedButtonLabel: getMsgTranslated('Shell', 'Avançado'),
            filterDialogCaptionLabel: getMsgTranslated('Shell', 'Pesquisa Avançada'),
            filterDialogConditionLabel1: getMsgTranslated('Shell', 'Mostrar registos coincidentes '),
            filterDialogConditionLabel2: getMsgTranslated('Shell', ' dos seguintes critérios'),
            filterDialogOkLabel: getMsgTranslated('Shell', 'Pesquisar'),
            filterDialogCancelLabel: getMsgTranslated('Shell', 'Cancelar'),
            filterDialogAnyLabel: getMsgTranslated('Shell', 'Qualquer'),
            filterDialogAllLabel: getMsgTranslated('Shell', 'Todos'),
            filterDialogAddLabel: getMsgTranslated('Shell', 'Agregar'),
            filterDialogErrorLabel: getMsgTranslated('Shell', 'Limite de filtros atingido'),
            filterSummaryTitleLabel: getMsgTranslated('Shell', 'Resultados da Pesquisa'),
            filterSummaryTemplate: getMsgTranslatedTag('Shell', '%%1 registos encontrados', '${matches}'),
            filterDialogClearAllLabel: getMsgTranslated('Shell', 'Limpar todos'),
            tooltipTemplate: getMsgTranslatedTag('Shell', '%%1 filtro aplicado', '${condition}'),
            featureChooserText: getMsgTranslated('Shell', 'Ocultar filtro'),
            featureChooserTextHide: getMsgTranslated('Shell', 'Mostrar filtro'),
            featureChooserTextAdvancedFilter: getMsgTranslated('Shell', 'Filtro avançado'),
            virtualizationSimpleFilteringNotAllowed: "Cuando está habilitada la virtualización horizontal, no se admite el filtro simple (fila de filtro). Establezca el modo como 'avanzado' y/o no establezca advancedModeEditorsVisible",
            featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado."
        }
    });

    $.ig.GridGroupBy = $.ig.GridGroupBy || {};

    $.extend($.ig.GridGroupBy, {
        locale: {
            emptyGroupByAreaContent: getMsgTranslatedTag('Shell', 'Arraste uma coluna para agrupar ou %%1 a agrupar', '{0}'),
            emptyGroupByAreaContentSelectColumns: getMsgTranslated('Shell', 'seleccione as colunas'),
            emptyGroupByAreaContentSelectColumnsCaption: getMsgTranslated('Shell', 'seleccione as colunas'),
            expandTooltip: getMsgTranslated('Shell', 'Expandir linha agrupada'),
            collapseTooltip: getMsgTranslated('Shell', 'Colapsar linha agrupada'),
            removeButtonTooltip: getMsgTranslated('Shell', 'Remover coluna agrupada'),
            featureChooserText: getMsgTranslated('Shell', 'Desagrupar por'),
            featureChooserTextHide: getMsgTranslated('Shell', 'Agrupar por'),
            modalDialogCaptionButtonDesc: getMsgTranslated('Shell', 'Clique para ordenar de forma ascendente'),
            modalDialogCaptionButtonAsc: getMsgTranslated('Shell', 'Ordenar de forma descendente'),
            modalDialogCaptionButtonUngroup: getMsgTranslated('Shell', 'Clique para desagrupar'),
            modalDialogGroupByButtonText: getMsgTranslated('Shell', 'Agrupar por'),
            modalDialogCaptionText: getMsgTranslated('Shell', 'Adicionar ao Grupo por'),
            modalDialogDropDownLabel: getMsgTranslated('Shell', 'Mostrando:'),
            modalDialogClearAllButtonLabel: getMsgTranslated('Shell', 'Limpar'),
            modalDialogRootLevelHierarchicalGrid: getMsgTranslated('Shell', 'Raíz'),
            modalDialogDropDownButtonCaption: getMsgTranslated('Shell', 'Clique para mostrar/ocultar'),
            modalDialogButtonApplyText: getMsgTranslated('Shell', 'Aplicar'),
            modalDialogButtonCancelText: getMsgTranslated('Shell', 'Cancelar'),
            fixedVirualizationNotSupported: 'La función GroupBy no funciona si la virtualización está ajustada.'
        }
    });

    $.ig.GridHiding = $.ig.GridHiding || {};

    $.extend($.ig.GridHiding, {
        locale: {
            columnChooserDisplayText: getMsgTranslated('Shell', 'Seletor de Colunas'),
            hiddenColumnIndicatorTooltipText: getMsgTranslated('Shell', 'Coluna(s) oculta(s)'),
            columnHideText: getMsgTranslated('Shell', 'Ocultar'),
            columnChooserCaptionLabel: getMsgTranslated('Shell', 'Seletor de Colunas'),
            columnChooserCheckboxesHeader: getMsgTranslated('Shell', 'Ver'),
            columnChooserColumnsHeader: getMsgTranslated('Shell', 'Coluna'),
            columnChooserCloseButtonTooltip: getMsgTranslated('Shell', 'Fechar'),
            hideColumnIconTooltip: getMsgTranslated('Shell', 'Ocultar'),
            featureChooserNotReferenced: getMsgTranslated('Shell', 'Erro no carregamento das Scripts!'),
            columnChooserShowText: getMsgTranslated('Shell', 'Mostrar'),
            columnChooserHideText: getMsgTranslated('Shell', 'Ocultar'),
            columnChooserResetButtonLabel: getMsgTranslated('Shell', 'Restabelecer'),
            columnChooserButtonApplyText: getMsgTranslated('Shell', 'Aplicar'),
            columnChooserButtonCancelText: getMsgTranslated('Shell', 'Cancelar')
        }
    });

    $.ig.GridResizing = $.ig.GridResizing || {};

    $.extend($.ig.GridResizing, {
        locale: {
            noSuchVisibleColumn: "No se ha encontrado ninguna columna visible con la clave especificada. Solo puede cambiar el tamaño de las columnas visibles.",
            resizingAndFixedVirtualizationNotSupported: "La función de cambio de tamaño no funciona cuando la virtualización o la virtualización de columnas están habilitadas con virtualizationMode ajustado. Para evitar esta excepción establezca virtualizationMode en 'continuous' o utilice solo rowVirtualization."
        }
    });

    $.ig.GridPaging = $.ig.GridPaging || {};

    $.extend($.ig.GridPaging, {

        locale: {
            pageSizeDropDownLabel: "", /*getMsgTranslated('Shell', 'Mostrar '),*/
            pageSizeDropDownTrailingLabel: getMsgTranslated('Shell', 'registos'),
            nextPageLabelText: "",
            prevPageLabelText: "",
            firstPageLabelText: "",
            lastPageLabelText: "",
            currentPageDropDownLeadingLabel: getMsgTranslated('Shell', 'Pág'),
            currentPageDropDownTrailingLabel: getMsgTranslatedTag('Shell', 'de %%1', '${count}'),
            currentPageDropDownTooltip: getMsgTranslated('Shell', 'Definir página'),
            pageSizeDropDownTooltip: getMsgTranslated('Shell', 'Número de registos por página'),
            pagerRecordsLabelTooltip: getMsgTranslated('Shell', 'Intervalo de registos actuais'),
            prevPageTooltip: getMsgTranslated('Shell', 'Ir para a página anterior'),
            nextPageTooltip: getMsgTranslated('Shell', 'Ir para a página seguinte'),
            firstPageTooltip: getMsgTranslated('Shell', 'Ir para a primera página'),
            lastPageTooltip: getMsgTranslated('Shell', 'Ir para a última página'),
            pageTooltipFormat: getMsgTranslatedTag('Shell', 'página %%1', '${index}'),
            pagerRecordsLabelTemplate: getMsgTranslatedTag('Shell', '%%1-%%2 / %%3 registos', '${startRecord}', '${endRecord}', '${recordCount}'),
            invalidPageIndex: getMsgTranslatedTag('Shell', 'Índice de página inválido: deveria ser igual ou superior a 0 e inferior ao número da página!')
        }
    });

    $.ig.GridSelection = $.ig.GridSelection || {};

    $.extend($.ig.GridSelection, {
        locale: {
            persistenceImpossible: "La selección persistente entre los estados requiere que se defina la opción primaryKey de igGrid. Para evitar recibir este error, defina una clave principal o desactive la persistencia."
        }
    });

    $.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

    $.extend($.ig.GridRowSelectors, {

        locale: {
            selectionNotLoaded: "igGridSelection no se ha inicializado. Para evitar recibir este mensaje de error, habilite la función de Selección para la cuadrícula o bien establezca la propiedad requireSelection de la función Selectores de Filas como Falso.",
            columnVirtualizationEnabled: "igGridRowSelectors no se admite cuando la virtualización de columnas está habilitada. Para evitar recibir este mensaje de error, habilite solo la virtualización de filas mediante la activación de la propiedad 'rowVirtualization' de la cuadrícula o la modificación del modo de virtualización a 'continuous'."
        }
    });

    $.ig.GridSorting = $.ig.GridSorting || {};

    $.extend($.ig.GridSorting, {
        locale: {
            sortedColumnTooltipFormat: getMsgTranslatedTag('Shell', 'ordenado %%1', '${direction}'),
            unsortedColumnTooltip: getMsgTranslated('Shell', 'Clique para classificar a coluna'),
            ascending: getMsgTranslated('Shell', 'Ascendente'),
            descending: getMsgTranslated('Shell', 'Descendente'),
            modalDialogSortByButtonText: getMsgTranslated('Shell', 'Ordenar por'),
            modalDialogResetButton: getMsgTranslated('Shell', 'Restaurar'),
            modalDialogCaptionButtonDesc: getMsgTranslated('Shell', 'Clique para ordenar de forma descendente'),
            modalDialogCaptionButtonAsc: getMsgTranslated('Shell', 'Clique para ordenar de forma ascendente'),
            modalDialogCaptionButtonUnsort: getMsgTranslated('Shell', 'Clique para remover critérios de classificação'),
            featureChooserText: getMsgTranslated('Shell', 'Ordenação múltipla'),
            modalDialogCaptionText: getMsgTranslated('Shell', 'Ordenação múltipla'),
            modalDialogButtonApplyText: getMsgTranslated('Shell', 'Aplicar'),
            modalDialogButtonCancelText: getMsgTranslated('Shell', 'Cancelar'),
            sortingHiddenColumnNotSupport: getMsgTranslated('Shell', 'Gestão de colunas escondidas não é suportada'),
            featureChooserSortAsc: getMsgTranslated('Shell', 'Ordenar de A a Z'),
            featureChooserSortDesc: getMsgTranslated('Shell', 'Ordenar de Z a A')
        }
    });

    $.ig.GridSummaries = $.ig.GridSummaries || {};

    $.extend($.ig.GridSummaries, {
        locale: {
            featureChooserText: "Ocultar resúmenes",
            featureChooserTextHide: "Mostrar resúmenes",
            dialogButtonOKText: 'Aceptar',
            dialogButtonCancelText: 'Cancelar',
            emptyCellText: '',
            summariesHeaderButtonTooltip: 'Mostrar/ocultar resúmenes',
            defaultSummaryRowDisplayLabelCount: 'Recuento',
            defaultSummaryRowDisplayLabelMin: 'Mín.',
            defaultSummaryRowDisplayLabelMax: 'Máx.',
            defaultSummaryRowDisplayLabelSum: 'Suma',
            defaultSummaryRowDisplayLabelAvg: 'Prom.',
            defaultSummaryRowDisplayLabelCustom: 'Personalizado',
            calculateSummaryColumnKeyNotSpecified: "Especifique la clave de columna para calcular el resumen",
            featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado."
        }
    });

    $.ig.GridUpdating = $.ig.GridUpdating || {};

    $.extend($.ig.GridUpdating, {
        locale: {
            doneLabel: 'Terminado',
            doneTooltip: 'Detener edición y actualizar',
            cancelLabel: 'Cancelar',
            cancelTooltip: 'Detener edición y no actualizar',
            addRowLabel: getMsgTranslated('Shell', 'Inserir linha'),
            addRowTooltip: getMsgTranslated('Shell', 'Clique para inserir uma nova linha'),
            deleteRowLabel: '',
            deleteRowTooltip: getMsgTranslated('Shell', 'Remover Linha'),
            igEditorException: 'Para actualizar ui.igGrid, ui.igEditor debe estar cargado',
            igComboException: 'Para usar el tipo combinado para ui.igGrid, ui.igCombo debe estar cargado',
            igRatingException: 'Para usar igRating como editor para ui.igGrid, ui.igRating debe estar cargado',
            igValidatorException: 'Las opciones de validación definidas en igGridUpdating necesitan que ui.igValidator esté cargado',
            noPrimaryKeyException: 'Para admitir las operaciones de actualización después de borrar una fila, la aplicación debe definir "primaryKey" en las opciones de igGrid.',
            hiddenColumnValidationException: 'No se puede editar una fila que tiene una columna oculta con validación habilitada.',
            dataDirtyException: 'La cuadrícula tiene transacciones pendientes que pueden afectar a la representación de datos. Para evitar excepciones, la aplicación puede habilitar la opción "autoCommit" de igGrid o bien debe procesar el evento "dataDirty" de igGridUpdating y devolver Falso. Al procesar ese evento, la aplicación también puede efectuar "commit()" datos en igGrid.',
            recordOrPropertyNotFoundException: 'The specified record or property was not found in the data source.',
            rowEditDialogCaptionLabel: 'Editar datos de fila',
            unboundColumnsNotSupported: 'ColumnFixing is not supported with Unbound Columns',
            excelNavigationNotSupportedWithCurrentEditMode: "El modo de navegación Excel solo se admite en los modos de edición de celda o de edición de fila. Para evitar este error, desactive excelNavigationMode o establezca editMode en celda o fila."
        }
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: getMsgTranslated('Shell','Aplicar'),
            movingDialogButtonCancelText: getMsgTranslated('Shell','Cancelar'),
            movingDialogCaptionButtonDesc: getMsgTranslated('Shell','Descer'),
            movingDialogCaptionButtonAsc: getMsgTranslated('Shell','Subir'),
            movingDialogCaptionText: getMsgTranslated('Shell','Mover colunas'),
            movingDialogDisplayText: getMsgTranslated('Shell','Mover colunas'),
            movingDialogDropTooltipText: getMsgTranslated('Shell',"Mover para aqui"),
            dropDownMoveLeftText: getMsgTranslated('Shell','Mover para a esquerda'),
            dropDownMoveRightText: getMsgTranslated('Shell','Mover para a direita'),
            dropDownMoveFirstText: getMsgTranslated('Shell','Mover para o inicio'),
            dropDownMoveLastText: getMsgTranslated('Shell', 'Mover para o fim'),
            featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado.",
            movingToolTipMove: getMsgTranslated('Shell','Mover'),
            featureChooserSubmenuText: getMsgTranslated('Shell','Mover')
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Haga clic para fijar esta columna',
            headerUnfixButtonText: 'Haga clic para soltar esta columna',
            featureChooserTextFixedColumn: 'Fijar columna',
            featureChooserTextUnfixedColumn: 'Soltar columna',
            groupByNotSupported: 'igGridGroupBy no se admite con ColumnFixing',
            virtualizationNotSupported: 'La virtualización de la opción de cuadrícula permite la virtualización de filas y columnas. La virtualización de columnas no se admite con ColumnFixing. Active la opción rowVirtualization de cuadrícula',
            columnVirtualizationNotSupported: 'La virtualización de columnas no se admite con ColumnFixing',
            columnMovingNotSupported: 'igGridColumnMoving no se admite con ColumnFixing',
            hidingNotSupported: 'igGridHiding no se admite con ColumnFixing',
            hierarchicalGridNotSupported: 'igHierarchicalGrid no se admite con ColumnFixing',
            responsiveNotSupported: 'igGridResponsive no se admite con ColumnFixing',
            noGridWidthNotSupported: 'Debe especificar el ancho de la cuadrícula en píxeles cuando se utiliza ColumnFixing',
            defaultColumnWidthInPercentageNotSupported: "El ancho de columna predeterminado en porcentaje no se admite cuando se utiliza ColumnFixing",
            columnsWidthShouldBeSetInPixels: 'ColumnFixing requiere que el ancho de todas las columnas de cuadrícula esté establecido en píxeles. Compruebe la columna con la clave: ',
            unboundColumnsNotSupported: 'ColumnFixing no se admite con columnas sueltas',
            excelNavigationNotSupportedWithCurrentEditMode: "El modo de navegación Excel solo se admite en los modos de edición de celda o de edición de fila. Para evitar este error, desactive excelNavigationMode o establezca editMode en celda o fila.",
            internalErrors: {
                none: 'No hay error',
                notValidIdentifier: 'No existe ninguna columna con el identificador especificado',
                fixingRefused: 'La acción de fijar se deniega porque SOLO hay una columna suelta visible',
                fixingRefusedMinVisibleAreaWidth: 'No se permite fijar una columna debido al ancho mínimo del área visible de columnas sueltas',
                alreadyHidden: 'Está intentando fijar/soltar una columna oculta',
                alreadyUnfixed: 'La columna que está intentando soltar ya está suelta',
                alreadyFixed: 'La columna que está intentando fijar ya está fijada',
                unfixingRefused: 'La acción de soltar se deniega porque solo hay una columna fijada visible y hay al menos una columna fijada oculta.',
                targetNotFound: 'Target column is not found with the specified target identifier'
            }
        }
    });

    $.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};

    $.extend($.ig.GridAppendRowsOnDemand, {
        locale: {
            loadMoreDataButtonText: 'Cargar más datos',
            appendRowsOnDemandRequiresHeight: 'La función AppendRowsOnDemand necesita altura',
            groupByNotSupported: 'igGridGroupBy no se admite con AppendRowsOnDemand',
            pagingNotSupported: 'igGridPaging no se admite con AppendRowsOnDemand',
            cellMergingNotSupported: 'igGridCellMerging no se admite con AppendRowsOnDemand',
            virtualizationNotSupported: 'La virtualización no se admite con AppendRowsOnDemand'
        }
    });

    $.ig.igGridResponsive = $.ig.igGridResponsive || {};

    $.extend($.ig.igGridResponsive, {
        locale: {
            fixedVirualizationNotSupported: 'igGridResponsive no se admite con la virtualización fijada'
        }
    });

    $.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};

    $.extend($.ig.igGridMultiColumnHeaders, {
        locale: {
            multiColumnHeadersNotSupportedWithColumnVirtualization: 'La función de encabezados de columnas múltiples no se admite con columnVirtualization'
        }
    });
}
})(jQuery);

