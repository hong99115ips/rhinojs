! function(c) {
    c.fn.route = function(n) {
        var o = c.extend({
            default: "",
            routes: [],
            content: this
        }, n);

        function t(n) {
            var i = n.substring(1),
                a = {};
            c.each(o.routes, function(n, o) {
                var t = o.url.match(/\{([a-z]+)\}/g);
                if (t) {
                    var e = i.match(/([0-9]+)/g);
                    e && t.length == e.length && ((a = o).url = i, c.each(t, function(n, o) {
                        a.view = a.view.replace(o, e[n])
                    }))
                } else o.url == i && (a = o)
            }), a.view ? c.get(a.view).done(function() {
                o.content.load(a.view), document.location.hash = "#" + a.url
            }).fail(function() {
                console.log("404")
            }) : console.log("404")
        }
        window.onhashchange = function() {
            t(window.location.hash)
        }, t(window.location.hash ? window.location.hash : "#" + o.default)
    }
}(jQuery);