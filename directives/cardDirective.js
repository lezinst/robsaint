App.directive('card', function(){
    return {
        restrict:'E',
        templateUrl: 'robsaint/templates/card.html',
        scope: {
            project: "="
        }
    }
    
});