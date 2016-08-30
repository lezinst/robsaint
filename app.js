var App = angular.module('myWebsite', ['ngMaterial','jkAngularCarousel','angularRipple']);


App.config(function($mdThemingProvider) {
  $mdThemingProvider.disableTheming();
});
//controller for main projects
App.controller('control', function($scope,$location, $anchorScroll){

            $scope.secondSection = function() {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('second-section');


                // call $anchorScroll()
                $anchorScroll();
            };

              $scope.showcase = function() {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('showcase');


                // call $anchorScroll()
                $anchorScroll();
            };



              $scope.projects = [
                {
                    title: 'Robo Social Media Dashboard',
                    type: 'AngularJS',
                    img:  './img/robosocial.png',
                    url: 'http://lezinst.github.io/social-media-dashboard',
                    exp:'Tired of switching between social media network sites to get on top of your digital life ? Me too. That\'s why I built a social media dashboard demo to see social posts from all your different social networks, all on one site, all in one style. This project is built using AngularJS and Bootstrap where all users are robots and all images use placeholders. This helpful application interacts with a RESTful api and filters out social media posts before showing the chosen results in the view. '

                },
                {
                    title:'Tim3r Stop watch',
                    type: 'AngularJS',
                    img: './img/timer.png',
                    url: 'http://lezinst.github.io/',
                    exp: 'A desktop timer - to keep track of time! Features a digital and analog configuration. This app is built using AngularJS and Angular Material framework. Database connection to save your times coming soon!'
                }
             ];


});
