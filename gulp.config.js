module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var report = './report/';
    var root = './';
    var server = './src/server/';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({
        devDependencies: true
    })['js'];

    var config = {
        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: [
            './bower_components/font-awesome/fonts/**/*.*',
            './bower_components/bootstrap/fonts/**/*.*'
        ],
        html: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        sass: client + 'styles/styles.scss',
        sassFiles: [
            client + 'styles/*.scss'
        ],
        report: report,
        root: root,
        server: server,
        temp: temp,

        /**
         * optimized files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..',
            // exclude: []
        },
        packages: [
            './package.json',
            './bower.json'
        ],

        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'

    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath,
            //exclude: config.bower.exclude,
        };
        return options;
    };

    return config;

    ////////////////

};
