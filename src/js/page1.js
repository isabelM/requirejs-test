//Load common code that includes config, then load the app logic for this page.
require(['./common'], function (common) {

    require(['app/modules/text','app/modules/button'],function(text,button){
        console.log(text);
        console.log(button);
    });

});