angular.module('starter.controllers', ['starter.services'])

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
})
.controller('CompanyCtrl', function($scope, $stateParams, Demo) {
  $scope.companies = [
    {
      id: 1,
      name: 'Elbit Systems',
      address: 'Hatavor 2 Yokneam, Israel',
      location: "32.66624/35.10404",
      face: 'http://upload.wikimedia.org/wikipedia/commons/2/24/New_Elbit_Logo.jpg',
      visits: Demo.visits().filter(function(a){ return a.company_id == 1 })
    }
  ];
  $scope.data = {
    showReordering: false
  };

  $scope.visits = Demo.visits();
})
.controller('VisitsCtrl', function($scope, Demo) {
  $scope.visits = Demo.visits();
})

.controller('VisitCtrl', function($scope, $stateParams, Demo) {
  $scope.visit = Demo.visits().filter(function(a){ return a.id == $stateParams.visitId })[0]
  // $scope.employee = Demo.employees().filter(function(a){ return a.id == $scope.visit.employee_id })[0];
})


.controller('MapCtrl', function($scope, $ionicLoading) {
    window.setTimeout(function(){
        var myLatlng = new google.maps.LatLng(32.6652, 35.1059);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
			disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions)


//        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		var infoWindow = new google.maps.InfoWindow ({
		  content: "<a href='/#/app/company'>Elbit</a>"
		});
        var client1 = new google.maps.Marker({
            position: new google.maps.LatLng(32.6652, 35.1059),
            map: map,
            title: "Elbit",
			infoWindow: infoWindow
        });
		
        google.maps.event.addListener(client1,'click',function(){
          infoWindow.open(map,client1)
		})
		google.maps.event.trigger(client1, 'click')
		
		var infoWindow2 = new google.maps.InfoWindow ({
		  content: "<a href='/#/app/company'>Given Imaging</a>"
		});
        var client2 = new google.maps.Marker({
            position: new google.maps.LatLng(32.6628, 35.1048),
            map: map,
            title: "Given Imaging",
			infoWindow: infoWindow2
        });
		google.maps.event.addListener(client2,'click',function(){
			infoWindow2.open(map,client2)
        })
		google.maps.event.trigger(client2, 'click')
        /*google.maps.event.addListener(client2,'click',function(){
          alert('navigate to client2')
        })*/


        /*navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });*/
        $scope.map = map;
    });
	
});

