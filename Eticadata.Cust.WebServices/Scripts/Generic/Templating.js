function CheckBrowser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M.join(' ');
}
function ApplyEtiTemp(h_WLeft, h_WMiddle, h_WRight, h_Height, h_Left_OnBreak, h_Middle_OnBreak, h_Right_OnBreak, m_WLeft, m_WMiddle, m_WRight, m_Left_OnBreak, m_Middle_OnBreak, m_Right_OnBreak, f_WLeft, f_WMiddle, f_WRight, f_Height, f_Left_OnBreak, f_Middle_OnBreak, f_Right_OnBreak, breaking, maxWidthEnum) {
    //JSC - Verificar se é o IE 10 ou anterior (MSIE 10,8,etc), de forma a adicionar css's adicionais para compatibilização. 
    //Verifiquei que no IE10, às vezes em vez de "MSIE 10", aparece "MSIE 7" (tal como em iterop), daí apenas limitar-me a procurar por "MSIE ". No caso do IE11, será apenas "IE 11" e no Edge será "Edge versão"
    //console.log('******BROWSER: ' + CheckBrowser());    
    var IsIE10 = (CheckBrowser().indexOf('MSIE ') !== -1);
    var css = 'body {\
                overflow-x: hidden;\
            }\
            html,\
            body {\
                padding: 0;\
                margin: 0;\
                height: 100%;\
                width: 100%;\
                min-width: ' + getMinDevice() + 'px;\
                max-width: ' + getMaxDevice(maxWidthEnum) + ';\
            }\
            .hct {\
                width: 100%;\
                height: ' + ParseValue(h_Height) + ';\
                flex: 1;\
                display: flex;\
                ' + (IsIE10 ? '-ms - flex : 1 0 auto;\display: -ms-flexbox;' : '') + '\
            }\
            .hlf {\
                width: ' + getExpressionCalc(h_WLeft, h_WMiddle, h_WRight) + ';\
                height: ' + ParseValue(h_Height) + ';\
            }\
            .hmd {\
                width: ' + getExpressionCalc(h_WMiddle, h_WLeft, h_WRight) + ';\
                height: ' + ParseValue(h_Height) + ';\
            }\
            .hrh {\
                 width: ' + getExpressionCalc(h_WRight, h_WLeft, h_WMiddle) + ';\
                height: ' + ParseValue(h_Height) + ';\
            }\
             .mct {\
                width: 100%;\
                height: calc(100% - (' + ParseValue(h_Height) + ' + ' + ParseValue(f_Height) + '));\
                flex: 1;\
                display: flex;\
                ' + (IsIE10 ? '-ms - flex : 1 0 auto;\display: -ms-flexbox;' : '') + '\
            }\
            .mlf {\
                width: ' + getExpressionCalc(m_WLeft, m_WMiddle, m_WRight) + ';\
            }\
            .mmd {\
                width: ' + getExpressionCalc(m_WMiddle, m_WLeft, m_WRight) + ';\
            }\
            .mrh {\
                 width: ' + getExpressionCalc(m_WRight, m_WLeft, m_WMiddle) + ';\
            }\
           .fct {\
                width: 100%;\
                height: ' + ParseValue(f_Height) + ';\
                flex: 1;\
                display: flex;\
                ' + (IsIE10 ? '-ms - flex : 1 0 auto;\display: -ms-flexbox;' : '') + '\
            }\
            .flf {\
                width: ' + getExpressionCalc(f_WLeft, f_WMiddle, f_WRight) + ';\
                height: ' + ParseValue(f_Height) + ';\
            }\
            .fmd {\
                width: ' + getExpressionCalc(f_WMiddle, f_WLeft, f_WRight) + ';\
                height: ' + ParseValue(f_Height) + ';\
            }\
            .frh {\
                 width: ' + getExpressionCalc(f_WRight, f_WLeft, f_WMiddle) + ';\
                height: ' + ParseValue(f_Height) + ';\
            }\
    @media(max-width: ' + ParseValue(breaking) + ') {\
            .hct {\
                  flex-direction: column;\
                  ' + (IsIE10 ? 'ms-flex-direction: column;' : '') + '\
                  height: calc(' + ParseValue(h_Left_OnBreak) + ' + ' + ParseValue(h_Middle_OnBreak) + ' + ' + ParseValue(h_Right_OnBreak) + ');\
            }\
            .hlf {\
                width: 100%;\
                height: ' + ParseValue(h_Left_OnBreak) + ';\
            }\
            .hmd {\
                width: 100%;\
                height: ' + ParseValue(h_Middle_OnBreak) + ';\
            }\
            .hrh {\
                width: 100%;\
                height: ' + ParseValue(h_Right_OnBreak) + ';\
            }\
            .mct {\
               width: 100%;\
               height: calc(' + ParseValue(m_Left_OnBreak) + ' + ' + ParseValue(m_Middle_OnBreak) + ' + ' + ParseValue(m_Right_OnBreak) + ');\
               flex-direction: column;\
               ' + (IsIE10 ? 'ms-flex-direction: column;' : '') + '\
            }\
            .mlf {\
                 width: 100%;\
                 height: ' + ParseValue(m_Left_OnBreak) + ';\
            }\
            .mmd {\
                width: 100%;\
                height: ' + ParseValue(m_Middle_OnBreak) + ';\
            }\
            .mrh {\
                  width: 100%;\
                  height: ' + ParseValue(m_Right_OnBreak) + ';\
            }\
            .fct {\
                flex-direction: column;\
                ' + (IsIE10 ? 'ms-flex-direction: column;' : '') + '\
                height: calc(' + ParseValue(f_Left_OnBreak) + ' + ' + ParseValue(f_Middle_OnBreak) + ' + ' + ParseValue(f_Right_OnBreak) + ');\
            }\
            .flf {\
                width: 100%;\
                height: ' + ParseValue(f_Left_OnBreak) + ';\
            }\
            .fmd {\
                width: 100%;\
                height: ' + ParseValue(f_Middle_OnBreak) + ';\
            }\
            .frh {\
                width: 100%;\
                height: ' + ParseValue(f_Right_OnBreak) + ';\
            }\
    }';
    applyTemplate(css);
}
function getExpressionCalc(colGoal, colA, colB) {
    var cg = (typeof colGoal === 'string' && colGoal.indexOf('*') >= 0);
    var ca = (typeof colA === 'string' && colA.indexOf('*') >= 0);
    var cb = (typeof colB === 'string' && colB.indexOf('*') >= 0);
    var exp = ['0px'];
    var cnt = 0;
    if (cg) {
        cnt++;
    }
    if (ca) {
        cnt++;
    }
    else {
        exp.push(ParseValue(colA));
    }
    if (cb) {
        cnt++;
    }
    else {
        exp.push(ParseValue(colB));
    }
    if (cg) {
        var flt = parseFloat(colGoal);
        if (!isNaN(flt)) {
            return 'calc((100% - (' + exp.join(' + ') + ')) * ' + (flt / 100) + ' )';
        }
        else {
            return 'calc((100% - (' + exp.join(' + ') + '))/' + cnt + ' )';
        }
    }
    else {
        return ParseValue(colGoal);
    }
}
function ParseValue(val) {
    if (typeof val === 'string' && val.indexOf('%')) {
        return val;
    }
    else {
        return val + "px";
    }
}
function applyTemplate(css) {
    var style = document.createElement('style');
    style.type = 'text/css';
    //if (style.styleSheet) {
    //    style.styleSheet.cssText = css;
    //} else {
    style.appendChild(document.createTextNode(css));
    //}
    document.getElementsByTagName('head')[0].appendChild(style);
}
function getBreackPoint() {
    return 900;
}
// Para um minimo definido de 768 retira-se 16px de margem da aplicação (8px para cada lado)
function getMinDevice() {
    return 752;
}
function getMaxDevice(maxEnum) {
    switch (maxEnum) {
        case 1:
            return '1024px';
        case 2:
            return '1280px';
        case 3:
            return '1600px';
        default:
            return '100%';
    }
}
//# sourceMappingURL=Templating.js.map