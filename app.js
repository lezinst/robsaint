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

            $scope.arrayData = [
                {
                    intro:"Hello, I'm Rob",
                    paragraph:'a web developer in the heart of SLC',
                    callsign:"../img/html-coding.svg"
                } ,
                {
                    intro:"get to know me",
                    paragraph:"A University of Utah alumni since 2011, I recently graduated from DevMountain code school in Salt Lake City with an emphasise on AngularJS, Node.JS, and MongoDB. In my free time I like to stay active with my side-kick aussies,  make some craft brew with my neighbor, ride my bike around town, or stay involved with the development community.",
                    callsign:"",
                    callsigntwo:"../img/manager.svg"

                    
                },
                {
                    intro:"or just say hello ",
                    paragraph:"robstlezin@gmail.com | (801) 502-3196",
                    callsigntwo:"../img/manager.svg"

                    
                }

                
                 
            ];

});


             


