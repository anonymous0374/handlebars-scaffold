import '../css/main.css';
import '../css/normalize.css';
import './vendor/modernizr-3.5.0.min.js'; // execute this js file first

import debug from 'debug';
import 'babel-polyfill';

console.log(`hello world!`);

// hot module is only enabled in development workflow, see
// webpack.config.development.js
if (module.hot) {
    module.hot.accept('./main.js', function() {
        console.log(`main.js has been changed!`);
    });
}