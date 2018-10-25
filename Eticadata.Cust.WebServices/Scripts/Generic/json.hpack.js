(function (cache) {

    /// JSON.pack(collection:Array):Array
    ///     >> Convert an collection of objects to an optimized collection.
    ///     >> E.g.: collection: [["item1": value11, "items2": value12, "item3": value13], ["item1": value21, "items2": value22, "item3": value23], ["item1": value31, "items2": value32, "item3": value33]]
    ///     >>       returns:    [["item1", "item2", "item3"], [value11, value12, value13], [value21, value22, value23], [value31, value32, value33]]
    /// <param name="collection" type="Array">Collection of objects to pack</param>
    /// <return type="Array">Optimized collection</return>
    (this.JSON || (JSON = {})).EtiPack = function (collection) {

        var header = [];
        var result = [];
        var count = 0;

        //Determine the item in the collection with the largest number of columns
        for (var i = 0; i < collection.length; i++) {
            if (Object.getOwnPropertyNames(collection[i]).length > header.length) {
                header = Object.getOwnPropertyNames(collection[i]);
            }
        }

        result[count++] = header;

        //Iterate all collection lines
        for (var i = 0; i < collection.length; i++) {
            var line = collection[i];
            var row = [];

            for (var key = 0; key < header.length; key++) {
                row[key] = line[header[key]];
            }

            result[count++] = row;
        }

        return result;
    };

    /// JSON.unpack(collection:Array):Array
    ///     >> Convert an collection of objects to an optimized collection.
    ///     >> E.g.: collection: [["item1", "item2", "item3"], [value11, value12, value13], [value21, value22, value23], [value31, value32, value33]]
    ///     >>       returns:    [["item1": value11, "items2": value12, "item3": value13], ["item1": value21, "items2": value22, "item3": value23], ["item1": value31, "items2": value32, "item3": value33]]
    /// <param name="collection" type="Array">Optimized collection to unpack</param>
    /// <return type="Array">Original mono dimensional homogeneous collection of objects</return>
    JSON.EtiUnpack = function (collection) {

        for (var
                result = [],
                keys = [],
                header = collection[0],
                len = header.length,
                length = collection.length,
                index = -1,
                k = -1,
                i = 0,
                l = 0,
                j, row;
                i < len; ++i
        ) {
            //List of keys
            keys[++k] = header[i];

            //If adjacent value is an array (enum)
            if (typeof header[i + 1] == "object") {
                ++i;

                //Replace indexes in the column using enum as collection
                for (j = 1; j < length; ++j) {
                    row = collection[j];
                    row[l] = header[i][row[l]];
                };
            };
            ++l;
        };

        //Replace keys with assignment operation ( test becomes o["test"]=a[index]; )
        for (i = 0, len = keys.length; i < len; ++i)
            keys[i] = 'o["'.concat(keys[i].replace('"', "\\x22"), '"]=a[', i, '];'); // make properties safe replacing " char

        //One shot anonymous function with "precompiled replacements"
        var anonymous = Function("o,a", keys.join("") + "return o;");

        //Replace each item with runtime key/value pairs object
        for (j = 1; j < length; ++j)
            result[++index] = anonymous({}, collection[j]);

        return result;
    };

})([]);