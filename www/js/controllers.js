angular.module('starter.controllers', [])

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
.controller('CompanyCtrl', function($scope, $stateParams) {
  $scope.companies = [
    {
      id: 1,
      name: 'Elbit Systems',
      address: 'Hatavor 2 Yokneam, Israel',
      location: "32.66624/35.10404",
      face: 'http://upload.wikimedia.org/wikipedia/commons/2/24/New_Elbit_Logo.jpg'
    }
  ];
  $scope.agents = [{
      id: 1,
      name: 'Ben Sparrow',
      title: 'Regional Manager',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 2,
      name: 'Max Lynx',
      title: 'Assistant to the Regional Manager',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    },{
      id: 3,
      name: 'Adam Bradleyson',
      title: 'Sales Representative',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 4,
      name: 'Perry Governor',
      title: 'Regional Co-Manager',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }, {
      id: 5,
      name: 'Mike Harrington',
      title: 'Sales Representative',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];
})
.controller('CommentsCtrl', function($scope) {
  $scope.comments = [
    { id: 1, user_id: 1, company_id: 1, comment: "user 1 comment 1 for company 1" },
    { id: 2, user_id: 1, company_id: 1, comment: "user 1 comment 2 for company 1" },
    { id: 3, user_id: 2, company_id: 1, comment: "user 2 comment 3 for company 1" },
    { id: 4, user_id: 3, company_id: 1, comment: "user 3 comment 4 for company 1" },
    { id: 5, user_id: 3, company_id: 1, comment: "user 3 comment 5 for company 1" },
    { id: 6, user_id: 4, company_id: 1, comment: "user 4 comment 6 for company 1" },
    { id: 7, user_id: 5, company_id: 1, comment: "user 5 comment 7 for company 1" }
  ];
})

.controller('CommentCtrl', function($scope, $stateParams) {
})


.controller('MapCtrl', function($scope, $ionicLoading) {
    window.setTimeout(function(){
        var myLatlng = new google.maps.LatLng(32.6652, 35.1059);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions)


//        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		var infoWindow = new google.maps.InfoWindow ({
		  content: "<div>content1 content1<br/>content1 content1<br/><a href='/#/app/comments/1'>Show events</a>"
		});
        var client1 = new google.maps.Marker({
            position: new google.maps.LatLng(32.6652, 35.1059),
            map: map,
            title: "Mellanox",
			infoWindow: infoWindow
        });
		
        google.maps.event.addListener(client1,'click',function(){
          infoWindow.open(map,client1)
		  console.log('tick1')
		})
		google.maps.event.trigger(client1, 'click')
		
		var infoWindow2 = new google.maps.InfoWindow ({
		  content: "<div>content2 content2<br/>content2 content2<br/><a href='/#/app/comments/2'>Show events</a>"
		});
        var client2 = new google.maps.Marker({
            position: new google.maps.LatLng(32.6628, 35.1048),
            map: map,
            title: "Given Imaging",
			infoWindow: infoWindow2
        });
		google.maps.event.addListener(client2,'click',function(){
			console.log('tick2');
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

