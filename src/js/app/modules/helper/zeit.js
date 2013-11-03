'use strict';
/**
 * Created by Isa on 01.11.13.
 */

define(["jquery"], function ()
{
    var initialize = function ()
    {
        var uhrzeit=new Date();
        var timeToString = uhrzeit.getHours() + " Uhr " + uhrzeit.getMinutes() + " Minuten " + uhrzeit.getSeconds() +  " Sekunden";

        return timeToString;
    };

    return {
        initialize : initialize
    };
});


