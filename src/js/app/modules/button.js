'use strict';

define(['css!../../../styles/colors.css','./helper/zeit'], function (css,Zeit) {
    var zeit = Zeit.initialize();

    return "Mein Button "+zeit;
});

