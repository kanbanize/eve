(function() {
    var navigation = document.getElementsByClassName('navigation')[0];
    var content = document.getElementsByClassName('content')[0];
    var templatesCache = {};

    navigation.addEventListener('click', function(ev) {
        var el = ev.target;

        do {
            if (el === navigation) {
                return false;
            } else if (el.classList.contains('navigation-list-item')) {
                var active = navigation.querySelector('.navigation-list-item.is-active');

                if (active) {
                    if (el === active) {
                        return false;
                    }

                    active.classList.remove('is-active');
                }

                el.classList.add('is-active');

                document.title = getComponentName(el) + ' | Eve';

                loadTemplate(el.getAttribute('data-path'));

                return false;
            }

            el = el.parentNode;
        } while (el);
    });

    function loadTemplate(path) {
        if (templatesCache.hasOwnProperty(path)) {
            if (path === 'getting-started' && /installation|browser-support/g.test(location.hash)) {
                return;
            }

            loadTemplateHtml(templatesCache[path]);

            return;
        }

        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (this.status === 200) {
                loadTemplateHtml(this.responseText);

                templatesCache[path] = this.responseText;
            }
        };

        xhr.open('GET', 'templates/' + path + '.hbs', true);
        xhr.send();

        function loadTemplateHtml(html) {
            content.innerHTML = html;
            content.scroll(0, 0);

            Snippet.load();
        }
    }

    function getComponentName(el) {
        var componentName = el.innerHTML;

        if (el.getAttribute('data-path').indexOf('grid') > -1) {
            return 'Grid ' + componentName;
        }

        return componentName;
    }

    if (location.hash) {
        document.querySelector('a[href="' + location.hash + '"]').click();
    } else {
        loadTemplate('getting-started');
    }
})();
