var recs = [{
  title: 'Save $3 at MM Cafe',
  desc: 'Instead of $8 Coffee at Starbucks, MM gives you the same experience with a lower price.',
  time: moment('2/27/2015 12:00 pm')
}, {
  title: 'Save $10 at Restaurant YoYo',
  desc: 'Healthy and economic lunch set.',
  time: moment('2/27/2015 1:00 pm')
}, {
  title: 'Switch sweets to fruits, save $2',
  desc: 'Tired in the afternoon, recharge you with nutritiousness and freshness.',
  time: moment('2/27/2015 2:00 pm')
}, {
  title: 'Dinner at JustAsia, save $10',
  desc: 'Close to your workplace, economic and tasty.',
  time: moment('2/27/2015 3:00 pm')
}, {
  title: '20% discount at Giant',
  desc: 'Chinese New Year discount.',
  time: moment('2/27/2015 4:00 pm')
}, {
  title: 'Save $5 at Heison Bar',
  desc: 'Popular spot for expats.',
  time: moment('2/27/2015 8:00 pm')
}];

var messages = [{
  title: 'Don\'t forget to eat your veggies',
  time: '12 min ago',
  img: 'http://nomoredirtylooks.com/wp-content/uploads/Colorful-vegetables-755879.jpg',
  id: 1
}, {
  title: 'Take a break from work',
  time: '32 min ago',
  img: 'https://s-media-cache-ak0.pinimg.com/originals/b5/d9/ca/b5d9ca738fff1b76c492d9063de0b539.jpg',
  id: 2
}, {
  title: 'Hope you feel better',
  desc: 'Yesterday',
  img: 'http://www.kenrockwell.com/canon/lenses/images/60mm-macro/macro/flower-IMG_2753.jpg',
  id: 3
}, {
  title: 'Happy Chinese New Years',
  desc: '3 days ago',
  img: 'http://inapcache.boston.com/universal/site_graphics/blogs/bigpicture/chinese_new_year_2011/bp20.jpg',
  id: 4
}];

angular.module('starter.controllers', [])

.factory('Camera', ['$q', function($q) {
  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  if (typeof $scope.d == 'undefined') {
    $scope.d = {};
  }
  $scope.savedExpenseData = [];
  $scope.simData = [
        createExpense("Starbucks", "Food/Drinks", "$6.50", "02/27/2015"),
        createExpense("Sushi Tei", "Food/Drinks", "$20.00", "02/27/2015")
  ];
  $scope.simDataIdx = 0;
  $scope.savedExpenseData = [
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/06/2015"),
    createExpense("Golden Village", "Entertainment", "$19.00", "02/06/2015"),
    createExpense("Sushi Tei", "Food/Drinks", "$71.00", "02/06/2015"),
    createExpense("Zara", "Shopping", "$89.90", "02/06/2015"),
    createExpense("Ding Tai Fung", "Food/Drinks", "$101.50", "02/06/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/07/2015"),
    createExpense("Cedele", "Food/Drinks", "$18.50", "02/07/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/08/2015"),
    createExpense("Rotisserie", "Food/Drinks", "$11.50", "02/08/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/09/2015"),
    createExpense("SaladStops", "Food/Drinks", "$11.50", "02/09/2015"),
    createExpense("Harry's Bar", "Food/Drinks", "$25.56", "02/09/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/10/2015"),
    createExpense("Toast Box", "Food/Drinks", "$10.50", "02/10/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/11/2015"),
    createExpense("SaladStops", "Food/Drinks", "$18.00", "02/11/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/12/2015"),
    createExpense("Sushi Tei", "Food/Drinks", "$19.50", "02/12/2015"),
    createExpense("Watsons", "Household/Toiletries", "$69.00", "02/12/2015"),
    createExpense("SaladStops", "Food/Drinks", "$18.00", "02/12/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/13/2015"),
    createExpense("Golden Village", "Entertainment", "$19.00", "02/13/2015"),
    createExpense("Sushi Tei", "Food/Drinks", "$56.00", "02/13/2015"),
    createExpense("G2000", "Shopping", "$91.90", "02/13/2015"),
    createExpense("Ding Tai Fung", "Food/Drinks", "$80.00", "02/13/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/14/2015"),
    createExpense("Cedele", "Food/Drinks", "$18.50", "02/14/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/15/2015"),
    createExpense("Rotisserie", "Food/Drinks", "$11.50", "02/15/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/16/2015"),
    createExpense("SaladStops", "Food/Drinks", "$11.50", "02/16/2015"),
    createExpense("Harry's Bar", "Food/Drinks", "$25.56", "02/16/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/17/2015"),
    createExpense("Toast Box", "Food/Drinks", "$10.50", "02/17/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/18/2015"),
    createExpense("SaladStops", "Food/Drinks", "$18.00", "02/18/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/19/2015"),
    createExpense("Sushi Tei", "Food/Drinks", "$19.50", "02/19/2015"),
    createExpense("Watsons", "Household/Toiletries", "$69.00", "02/19/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/20/2015"),
    createExpense("Golden Village", "Entertainment", "$19.00", "02/20/2015"),
    createExpense("Sushi Tei", "Food/Drinks", "$56.00", "02/20/2015"),
    createExpense("G2000", "Shopping", "$91.90", "02/20/2015"),
    createExpense("Ding Tai Fung", "Food/Drinks", "$80.00", "02/20/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/21/2015"),
    createExpense("Cedele", "Food/Drinks", "$18.50", "02/21/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/22/2015"),
    createExpense("Rotisserie", "Food/Drinks", "$11.50", "02/22/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/23/2015"),
    createExpense("SaladStops", "Food/Drinks", "$11.50", "02/23/2015"),
    createExpense("Harry's Bar", "Food/Drinks", "$25.56", "02/23/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/24/2015"),
    createExpense("Ding Tai Fung", "Food/Drinks", "$200.50", "02/24/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/25/2015"),
    createExpense("McDonalds", "Food/Drinks", "$30.50", "02/25/2015"),
    createExpense("Golden Village", "Entertainment", "$95.00", "02/25/2015"),
    createExpense("Starbucks", "Food/Drinks", "$6.50", "02/26/2015"),
    createExpense("Sushi Tei", "Food/Drinks", "$19.50", "02/26/2015"),
    createExpense("Universal Studios", "Entertainment", "$200.00", "02/26/2015")
  ];

  function createExpense(shopName, expenseType, amount, date) {
    return {
      "shopName": shopName,
      "expenseType": expenseType,
      "amount": amount,
      "date": moment(date)
    };
  }

  $scope.incSimDataIdx = function() {
    $scope.simDataIdx = ($scope.simDataIdx + 1) % $scope.simData.length;
    console.log("simDataIdx", $scope.simDataIdx);
  }


})

.controller('MessagesCtrl', function($scope) {
  $scope.unreadMessages = messages.slice(0, 2);

  $scope.readMessages = messages.slice(2, 4);
})

.controller('MessageCtrl', function($scope, $stateParams) {
  $scope.item = messages[$stateParams.messageId];
})


.controller('addExpenseCtl', ["$scope", "$stateParams", "Camera", function($scope, $stateParams, Camera) {
  //#GOTCHA: $stateParams replaces $routeParams
  ///http://tutorials.jenkov.com/angularjs/routes.html
  ///https://github.com/angular-ui/ui-router/wiki/URL-Routing#stateparams-service
  ///https://github.com/angular-ui/ui-router/wiki/Quick-Reference
  ///https://scotch.io/tutorials/3-simple-tips-for-using-ui-router
  $scope.methodType = $stateParams.methodType;
  // if(typeof $scope.d =='undefined'){
  //   $scope.d = {}; //#GOTCHA: Don't define it here.
  // }

  $scope.recordVoice = function() {
    $scope.showSoundwave = true;
  };
  $scope.stopRecordingVoice = function() {
    $scope.showSoundwave = false;
  };
  $scope.addDataToFields = function() {
    if (typeof $scope.d.expenseInput == 'undefined') {
      $scope.d.expenseInput = {};
    }
    for (var attrName in $scope.simData[$scope.simDataIdx]) {
      $scope.d.expenseInput[attrName] = $scope.simData[$scope.simDataIdx][attrName];
    }
  };
  $scope.saveData = function() {
    $scope.savedExpenseData.push($scope.d.expenseInput);
  };
  $scope.clearFields = function() {
    $scope.d.expenseInput = undefined;
    $scope.imageURI = '';
  };
  $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      $scope.cameraImg = imageURI;
      console.log(imageURI);
    }, function(err) {
      console.err(err);
    });
  };

  $scope.simLoadImageURI = function() {
    console.log("WEWEWE")
    var opacity = [];
    var totalIterations = 4;
    for (var i = 0; i <= totalIterations; ++i) {
      opacity.push((1 / totalIterations) * i);
    }
    $scope.imageURI = "img/iphone-camera-image.png";

    // for(var i=0; i<=totalIterations; ++i){
    //   createTimeout(i);
    // }
    // function createTimeout(iter){
    //   return window.setTimeout(function(){
    //     $scope.d.opacityStr = "opacity:"+opacity[iter]+";";
    //     console.log(iter, "Image ->", $scope.d.opacityStr);
    //   }, iter*400);

    // }

    var opacityIdx = 0;
    $scope.d.opacityStr = "opacity:" + opacity[opacityIdx] + ";";
    var imageAppearanceInterval = window.setInterval(function() {
      if (opacityIdx <= totalIterations) {
        opacityIdx += 1;
      }
      $scope.d.opacityStr = "opacity:" + opacity[opacityIdx] + ";";
      console.log(opacityIdx, "Image ->", $scope.d.opacityStr);
      if (opacity[opacityIdx] == 1) {
        console.log("DONE");
        $scope.d.opacityStr = "opacity:" + 1 + ";";
        window.clearInterval(imageAppearanceInterval);
      }
    }, 400);

  };
  $scope.clearImageURI = function() {
    // $scope.d.opacityStr = "opacity:"+0+";";
  };


}])

.controller('BanksCtl', ["$scope", "$timeout", function($scope, $timeout) {
  $scope.linkState_DBS = 0;
  $scope.isLoadingDBSData = false;
  $scope.banks = [
    createBank("DBS Bank", "img/logo/logo_dbs.gif"),
    createBank("Citi Bank", "img/logo/logo_citi.jpg"),
    createBank("OCBC Bank", "img/logo/logo_ocbc.jpg"),
    createBank("Standard Chartered Bank", "img/logo/logo_standard-chartered.jpg"),
  ];

  function createBank(name, imgUrl) {
    return {
      "name": name,
      "imgUrl": imgUrl,
      "linked": false
    };
  };
  $scope.showExpandedDBSCard = function() {
    $scope.showExpandedDBS = true;
  };
  $scope.hideExpandedDBSCard = function() {
    $scope.showExpandedDBS = false;
  };
  $scope.loadDBSData = function() {
    $scope.linkState_DBS = 1; //$scope.isLoadingDBSData
    $timeout(function() {
      $scope.linkState_DBS = 2;
      $scope.showExpandedDBS = false;
    }, 2000);
  }

  $scope.unlinkDBS = function() {
    $scope.linkState_DBS = 0; //$scope.isLoadingDBSData
  }

}])

.controller('RecommendationsCtrl', function($scope) {
  $scope.recommendations = recs;
})

.controller('RecommendationCtrl', function($scope, $stateParams) {
  $scope.item = recs[$stateParams.recommendationId];

})

.controller('ExpenseSummaryCtl', function($scope) {
  $scope.selected = 'Day';
  $scope.select = function(type) {
    $scope.selected = type;
  };
  $scope.today = moment();
  $scope.date = moment();
  $scope.prev = function() {
    $scope.date.subtract(1, $scope.selected.toLowerCase() + 's');
  };
  $scope.next = function() {
    $scope.date.add(1, $scope.selected.toLowerCase() + 's');
  };
});
