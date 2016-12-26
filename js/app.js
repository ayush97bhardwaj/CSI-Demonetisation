(function(){
    var app=angular.module('demon', []);

    app.controller('SelectTabs', function(){
        this.tab=1;
        this.selected=false;
        this.curTab=function(value){
            this.tab=value;
            this.selected=true;
        };
        this.isSelect=function(value){
            return this.tab===value;
        };
    });
})();