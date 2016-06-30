var App = angular.module('myWebsite', ['ngMaterial']);

App.controller('control', function($scope){
	          $scope.projects = [
                {
                    title: 'Robo Social Media Dashboard',
                    type: 'AngularJS',
                    img:  '../img/robosocial.png',
                    url: 'http://lezinst.github.io/social-media-dashboard'

                },
                {
                    title:'Tim3r Stop watch',
                    type: 'AngularJS',
                    img: '../img/timer.png',
                    url: 'http://lezinst.github.io/'
                }
             ];
});

