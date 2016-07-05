var App = angular.module('myWebsite', ['ngMaterial','jkAngularCarousel','angularRipple']);
//controller for main projects and for the slider
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

            $scope.arrayData = [
                {
                    intro:" Rob St. Lezin ",
                    paragraph:'a full-stack developer',
                    callsign:"../img/html-coding.svg"
                } ,
                {
                    intro:"About",
                    paragraph:"A University of Utah alumni since 2011, I graduated from DevMountain code school in Salt Lake City with an emphasis on AngularJS, NodeJS, and MongoDB. My mission is to write better code every day, to help build a better tomorrow. In my free time I like to stay active with my side-kick aussies,  make some craft brew with my neighbor, ride my bike around town, or stay involved with the development community.",
                    callsign:"",
                    callsigntwo:"../img/manager.svg"

                    
                },
                {
                    intro:"Contact ",
                    paragraph:"robstlezin@gmail.com | (801) 502-3196 | github.com/lezinst | linkedin.com/in/robertstlezin",
                    callsigntwo:"../img/manager.svg"

                    
                }

                
                 
            ];

});


             


