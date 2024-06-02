// que todo el código debe seguir la norma convencional de JS
'use strict';


// importamos de la forma antigua el módulo moment
var moment = require('moment');


// documentación -> indica qué hará la función
/**
 * Returns a string element with a footer and updating year.
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + "All rights reserved.";
};