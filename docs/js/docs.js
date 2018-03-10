(function() {
    var snippets = document.getElementsByClassName('component-example');
    var snippetMap = {
        val: function(val) {
            return '<span class="snippet-val">' + val + '</span>';
        },
        attr: function(attr) {
            return '<span class="snippet-attr">' + attr + '</span>';
        },
        tag: function(tag) {
            return '<span class="snippet-tag">' + tag.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
        }
    };

    for (var i = 0; i < snippets.length; i++) {
        var snippet = snippets[i];
        var snippetCache = {};
        var snippetTemplate = snippet.innerHTML
            // Prepare
            .replace(/(<(\/?)([a-z0-9]+)(>?))|((\/?)>)/gi, function(str) {
                var tagId = '{tag' + guid() + '}';

                snippetCache[tagId] = str;

                return tagId;
            })
            .replace(/[a-z\-]+=/gi, function(str) {
                var attrId = '{attr' + guid() + '}';

                snippetCache[attrId] = str;

                return attrId;
            })
            .replace(/".*?"/g, function(str) {
                var valId = '{val' + guid() + '}';

                snippetCache[valId] = str;

                return valId;
            })
            // Replace
            .replace(/{val.*?}/g, function(str) {
                return snippetMap.val(snippetCache[str]);
            })
            .replace(/{attr.*?}/g, function(str) {
                return snippetMap.attr(snippetCache[str]);
            })
            .replace(/{tag.*?}/g, function(str) {
                return snippetMap.tag(snippetCache[str]);
            })
            // This is a cheat!!!
            .replace(/\s\s\s\s\s\s\s\s\s\s\s\s\s/g, function(str, pos) {
                if (!pos) {
                    return '';
                }

                return '<br>';
            })
            .trim();

        snippet.insertAdjacentHTML('afterend',
            '<div class="component-snippet"><pre><code class="snippet">' + snippetTemplate + '</code></pre></div>')
    }

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    }
})();
