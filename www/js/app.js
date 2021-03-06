// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.messages', {
    url: "/messages",
    views: {
      'menuContent': {
        templateUrl: "templates/messages.html",
        controller: 'MessagesCtrl'
      }
    }
  })

  .state('app.singleMessage', { //name must be different
    url: "/messages/:messageId",
    views: {
      'menuContent': {
        templateUrl: "templates/message.html",
        controller: 'MessageCtrl'
      }
    }
  })


  .state('app.addExpense', {
    url: "/addExpense",
    views: {
      'menuContent': {
        templateUrl: "templates/addExpense.html",
        // controller: 'addExpenseCtl'
      }
    }
  })

  .state('app.addExpenseInput', {
    url: "/addExpense/:methodType",
    views: {
      'menuContent': {
        templateUrl: "templates/addExpenseInput.html",
        controller: 'addExpenseCtl'
      }
    }
  })


  .state('app.banks', {
    url: "/banks",
    views: {
      'menuContent': {
        templateUrl: "templates/banks.html",
        controller: 'BanksCtl'
      }
    }
  })

  .state('app.recommendations', {
    url: "/recommendations",
    views: {
      'menuContent': {
        templateUrl: "templates/recommendations.html",
        controller: 'RecommendationsCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/recommendations/:recommendationId",
    views: {
      'menuContent': {
        templateUrl: "templates/recommendation.html",
        controller: 'RecommendationCtrl'
      }
    }
  })

  .state('app.expenseSummary', {
    url: "/expenseSummary",
    views: {
      'menuContent': {
        templateUrl: "templates/expenseSummary.html",
        controller: 'ExpenseSummaryCtl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/app/messages');
  $urlRouterProvider.otherwise('/app/recommendations');

})

.filter('correspondsDate', function() {
  return function(input, date, type) {
    return input.filter(function(el) {
      return el.date.isSame(date, type.toLowerCase());
    });
  };
});
