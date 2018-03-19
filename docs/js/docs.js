(function() {
    var navigation = document.getElementsByClassName('navigation')[0];
    var content = document.getElementsByClassName('content')[0];
    var templatesCache = {};

    navigation.addEventListener('click', function(ev) {
        var el = ev.target;

        do {
            if (el === navigation) {
                return false;
            } else if (el.classList.contains('navigation-header')) {
                el.nextElementSibling.classList.toggle('navigation-list-collapse');

                return false;
            } else if (el.classList.contains('navigation-list-item')) {
                var active = navigation.querySelector('.navigation-list-item.navigation-list-item-active');

                if (active) {
                    if (el === active) {
                        return false;
                    }

                    active.classList.remove('navigation-list-item-active');
                }

                el.classList.add('navigation-list-item-active');

                loadTemplate(el.getAttribute('data-path'));

                return false;
            }

            el = el.parentNode;
        } while (el);
    });

    function loadTemplate(path) {
        if (templatesCache.hasOwnProperty(path)) {
            loadTemplateHtml(templatesCache[path]);

            return;
        }

        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status === 200) {
                var templateHtml = Handlebars.compile(xhr.responseText)();

                loadTemplateHtml(templateHtml);

                templatesCache[path] = templateHtml;
            }
        };

        xhr.open('GET', 'docs/templates/' + path + '.hbs', true);
        xhr.send();

        function loadTemplateHtml(html) {
            content.innerHTML = html;
            content.scroll(0, 0);

            Snippet.execute();
        }
    }

    if (location.hash) {
        document.querySelector('a[href="' + location.hash + '"]').click();
    } else {
        document.querySelector('a[href="#typography"]').click();
    }
})();
