App.directive('card', function(){
    return {
        restrict:'E',
        templateUrl: './templates/card.html',
        scope: {
            project: "="
        }
    }
    
});