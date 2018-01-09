var webpack = require( 'webpack' ),
    autoprefixer = require( 'autoprefixer' ),
    htmlWebpack = require( 'html-webpack-plugin' ),
    copyWebpack = require( 'copy-webpack-plugin' ),
    ExtractTextPlugin = require( "extract-text-webpack-plugin" ),
    path = require( 'path' ),
    pkg = require( './package.json' );

var target = process.env.npm_lifecycle_event ? process.env.npm_lifecycle_event : 'start';

var plugins = [];
var dist = path.resolve( __dirname, 'dist' );
if ( target === 'start' ) {
    dist = '/dist';
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin( {
            filename: '[file].map',
            exclude : [
                'vendor*.js'
            ]
        } )/*,
         new webpack.optimize.CommonsChunkPlugin( { names: [ 'vendor', 'manifest' ] } )*/
    );
}

module.exports = {
    entry    : {
        app: './app'
    },
    output   : {
        path      : dist,
        filename  : 'js/[name]-[hash].js',
        publicPath: ''
    },
    devServer: {
        host              : 'localhost',
        port              : 8001,
        historyApiFallback: true,
        hot               : true,
        inline            : true,
        // Display only errors to reduce the amount of output.
        stats             : 'errors-only',
    },
    resolve  : {
        extensions: [ '.ts', '.tsx', '.js', '.css', '.scss' ],
        modules   : [ path.resolve( __dirname, 'app' ), 'node_modules' ]
    },
    module   : {
        rules: [
            {
                test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9-\.=]+)?$/,
                use : {
                    loader: 'url-loader',
                    options: {
                        //name: '[hash].[ext]',
                        //useRelativePath: false
                    }
                }
            },
          {
            test: /\.(jpg|png|gif|webp)/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'images/[hash].[ext]'
              }
            }
          },
            {
                test: /\.css$/,
                use : 'css-loader'
            },
            {
                test: /\.scss$/,
                use : ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use     : [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader', options: { includePaths: [ './node_modules', './app' ] } },
                        { loader: 'postcss-loader' }
                    ],

                } )
            }
        ]
    },
    plugins  : [
        new htmlWebpack( {
            appMountId: 'app',
            mobile    : true,
            template  : './app/index.html',
            title     : pkg.description
        } ),

        new copyWebpack( [
            { from: './node_modules/reveal.js/plugin', to: 'plugin' },
            { from: './node_modules/reveal.js/css', to: 'css' },
            { from: './node_modules/reveal.js/lib', to: 'lib' },
            { from: './node_modules/reveal.js/js', to: 'js' },
        ] ),
        new ExtractTextPlugin( 'css/styles-[hash].css' ),

    ].concat( plugins ),
};
