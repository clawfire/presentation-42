(function () {
    "use strict";

    require( 'kpmg-reveal-theme/kpmg_theme.scss' );
    // include index.html for webpack to load
    // require( "reveal.js/css/reveal.css" );
    // uncomment theme you want to load below
    Reveal.initialize( {
        history     : true,
        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
            { src: 'plugin/markdown/marked.js' },
            { src: 'plugin/markdown/markdown.js' },
            {
                src  : 'plugin/notes/notes.js',
                async: true
            },
            {
                src     : 'plugin/highlight/highlight.js',
                async   : true,
                callback: function () {hljs.initHighlightingOnLoad();}
            }
        ]
    } );
})();