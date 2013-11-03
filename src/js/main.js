'use strict';

require.config({
    // Place third party dependencies in the lib folder
    // Configure loading modules from the lib directory,
    // except 'app' ones,
    "baseUrl": "src/js/lib",
    "paths": {
        "app": "../app",
        module: "app/modules",
        "jQuery": "jquery/jquery-1.10.2.min"
    }
});


 require(["app/modules/helper/zeit"], function(Zeit) {
     //This function is called when src/js/helper/zeit.js is loaded.
     //If zeit.js calls define(), then this function is not fired until
     //zeit's dependencies have loaded, and the util argument will hold
     //the module value for "helper/zeit".
     Zeit.initialize();
 });


