// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})




//artikel
.controller("feedCtrl", function($http, $scope){
  $scope.init = function(){
    $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "num":"8", "q": "http://feeds.feedburner.com/catatanAnakTekaje" } })
    .success(function(data) {
        $scope.rssTitle = data.responseData.feed.title;
        $scope.rssUrl = data.responseData.feed.feedUrl;
        $scope.rssSiteUrl = data.responseData.feed.link;
        $scope.entries = data.responseData.feed.entries;
    })
    .error(function(data) {
        console.log("ERROR: " + data);
    });
  }
 
  $scope.browse = function(v){
    window.open(v, "_system", "location=yes")
  }
})
//end artikel





//halaman page//

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
 
  .state('port-andro', {
    url: '/port-andro',
    templateUrl: 'tem/port-andro.html'
  })
 
 
 .state('port', {
    url: '/port',
    templateUrl: 'tem/port.html'
  })
 
 
  .state('home', {
    url: '/home',
    templateUrl: 'tem/home.html'
  })
  
  
 
  
  $urlRouterProvider.otherwise('/home');
})