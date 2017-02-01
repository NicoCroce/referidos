(function(){
    'use strict'
    angular
        .module('app')
        .controller('StepOneCtrl', StepOneCtrl)
    StepOneCtrl.inject = ['$scope'];

    function StepOneCtrl ($scope){
        $scope.title = "Paso 1";
    };
})();
