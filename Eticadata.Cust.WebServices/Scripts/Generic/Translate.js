var Translator = (function () {

    myTradCache = {};
    myLang = '';
    myRelativePath = "";

    function Translator(lang, relativePath) {
        myTradCache = {};
        myLang = lang.toLowerCase();
        if (relativePath != undefined)
            myRelativePath = relativePath;
    }

    Translator.prototype.setLang = function (lang) {
        myLang = lang.toLowerCase();
    }

    Translator.prototype.getMsgTag = function (pModule, pExpr, pReplace1, pReplace2, pReplace3, pReplace4, pReplace5) {
        var ret = getMsgTranslated(pModule, pExpr);
        if (pReplace1 != undefined) {
            ret = ret.replace('%%1', pReplace1);
        }
        if (pReplace2 != undefined) {
            ret = ret.replace('%%2', pReplace2);
        }
        if (pReplace3 != undefined) {
            ret = ret.replace('%%3', pReplace3);
        }
        if (pReplace4 != undefined) {
            ret = ret.replace('%%4', pReplace4);
        }
        if (pReplace5 != undefined) {
            ret = ret.replace('%%5', pReplace5);
        }
        return ret;
    }

    Translator.prototype.getMsg = function (pModule, pExpr) {
        var myModule = pModule.toLowerCase();

        var myTag = myModule + "_" + myLang;
        var myJSFile = myRelativePath + "Lang/LangHtml/lang." + myModule + "." + myLang + ".js?vers=18.00.01.0125";

        if (!myTradCache[myTag]) {
            var strRet = "";
            $.ajax({
                async: false,
                type: 'GET',
                url: myJSFile,
                data: null,
                dataType: 'script',
                cache: true,
                success: function (script, textStatus) {
                    strRet =



                        (pModule, pExpr);
                },
                error: function (xhr, textStatus, errorThrown) {
                    myTradCache[myTag] = [];
                    strRet = pExpr;
                }
            });
            return strRet;
        } else {
            var hasEnc = (pExpr.indexOf("'") != -1);
            if (hasEnc) {
                while (pExpr.indexOf("'") != -1) {
                    pExpr = pExpr.replace("'", "&#39;")
                }
            }
            var strTranslated = myTradCache[myTag][pExpr];
            if (strTranslated) {
                if (hasEnc) {
                    while (strTranslated.indexOf("&#39;") != -1) {
                        strTranslated = strTranslated.replace("&#39;", "'");
                    }
                }
                return strTranslated;
            } else {
                return pExpr;
            } 
        }
    }

    return Translator;
})();