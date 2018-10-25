(function (globals) {
    "use strict";

    Bridge.define('Eticadata.Lib.Common', {
        statics: {
            EmailAddressCheck: function (emailAddress, multiple) {
                var $t;
                var result = true;
                var pattern = "^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
    
                if (multiple) {
                    if (Bridge.String.endsWith(emailAddress, ";")) {
                        emailAddress = emailAddress.substr(0, ((emailAddress.length - 2) | 0));
                    }
                    var arr = emailAddress.split(String.fromCharCode(59));
                    $t = Bridge.getEnumerator(arr);
                    while ($t.moveNext()) {
                        var email = $t.getCurrent();
                        var emailAddressMatch = Bridge.Text.RegularExpressions.Regex.match(email, pattern);
                        if (!emailAddressMatch.getSuccess()) {
                            return false;
                        }
                    }
                }
                else  {
                    var emailAddressMatch1 = Bridge.Text.RegularExpressions.Regex.match(emailAddress, pattern);
                    if (!emailAddressMatch1.getSuccess()) {
                        return false;
                    }
    
                }
    
                return result;
    
    
            }
        }
    });
    
    
    
    Bridge.init();
})(this);
