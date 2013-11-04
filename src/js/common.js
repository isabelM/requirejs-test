'use strict';

//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.

require.config({
    // Place third party dependencies in the lib folder
    // Configure loading modules from the lib directory,
    // except 'app' ones,
    "baseUrl": "src/js/lib",
    "paths": {
        "app": "../app",
        "jquery": "jquery/jquery-1.10.2.min",
        "bootstrap": "bootstrap/js/bootstrap.min",
        "styles": "../../styles"
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }

});




define(['css!styles/colors.css'], function () {
});