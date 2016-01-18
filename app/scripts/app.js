// var ETSY_URL ="GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}"

;(function(){ //IIFE for angular
  angular.module('OneSearch', ['ngRoute'], function($routeProvider){
      $routeProvider
          // controller: function($location, $rootScope){
          //
          // },
          // controllerAs: "index"
        .when('/results',{
          templateUrl: 'partials/results.html',
          controller: function($location, $rootScope){
            $rootScope.search={};
            $rootScope.submit = function (){
              console.log($rootScope.search.item);
              http.get("https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}")
              
            }
          },
          controllerAs: "results"
        })

    })

})(); //end IIFE
