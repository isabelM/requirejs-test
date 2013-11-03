'use strict';

define(['css!styles/textColors.css','./helper/zeit'], function (css,Zeit) {
    var zeit = Zeit.initialize();

    return "Mein Text "+zeit;
});

