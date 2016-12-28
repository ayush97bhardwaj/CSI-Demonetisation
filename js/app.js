(function(){
    var app=angular.module('demon', []);

    app.controller('totalController', function(){
        this.review=reviews;
    });

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

    app.controller('ReviewController', function(){
        this.review={};
        this.addReview=function(product){
                product.review.push(this.review);
                this.review={};
        };
    });

    reviews=[{
        body: "I support Demonitisation. It is a very good step towards ending corruption",
        author: "ayush@gmail.com",
    },
    {
        body: "There are a lot of problems because of Demonitisation. The govt. should do something soon.",
        author: "bhardwaj@yahoo.com",
    }];
})();