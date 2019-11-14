var Snippet = (function() {
    var map = {
        tag: function(tag) {
            return '<span class="tag">' + tag.replace(/\/|<|>/g, function(char) {
                switch (char) {
                    case '<': {
                        return '<span class="sign">&lt;</span>';
                    }
                    case '>': {
                        return '<span class="sign">&gt;</span>';
                    }
                    default: {
                        return '<span class="sign">' + char + '</span>';
                    }
                }
            }) + '</span>';
        },
        attr: function(attr) {
            return '<span class="attr">' + attr + '</span>';
        },
        val: function(val) {
            return '<span class="val">' + val + '</span>';
        }
    };

    function load() {
        var examples = document.getElementsByClassName('component-example');

        for (var i = 0; i < examples.length; i++) {
            var example = examples[i];

            example.insertAdjacentHTML('afterend', '<pre class="component-snippet">' + generateSnippet(example.innerHTML) + '</pre>');
        }
    }

    function generateSnippet(html) {
        var cache = {};

        return html
            // Prepare
            .replace(/(<(\/?)([a-z0-9]+)(>?))|((\/?)>)/gi, function(str) {
                var tagId = '{tag' + guid() + '}';

                cache[tagId] = str;

                return tagId;
            })
            .replace(/[a-z\-]+=/gi, function(str) {
                var attrId = '{attr' + guid() + '}';

                cache[attrId] = str;

                return attrId;
            })
            .replace(/".*?"/g, function(str) {
                var valId = '{val' + guid() + '}';

                cache[valId] = str;

                return valId;
            })
            // Replace
            .replace(/{tag.*?}/g, function(str) {
                return map.tag(cache[str]);
            })
            .replace(/{attr.*?}/g, function(str) {
                return map.attr(cache[str]);
            })
            .replace(/{val.*?}/g, function(str) {
                return map.val(cache[str]);
            })
            .replace(/^\s{12}/gm, '')
            .trim();
    }

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    }

    return {
        load: load
    };
})();
