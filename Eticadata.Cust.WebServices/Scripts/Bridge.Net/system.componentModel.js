﻿(function (globals) {
    "use strict";

    Bridge.define('System.ComponentModel.DescriptionAttribute', {
        inherits: [Bridge.Attribute],
        text: null,
        constructor: function (text) {
            Bridge.Attribute.prototype.$constructor.call(this);
    
            this.text = text;
        }
    });
    
    
    
    Bridge.init();
})(this);
