(function(){
    'use strict'
    angular
        .module('app')
        .controller('IndexCtrl', IndexCtrl)
    IndexCtrl.inject = ['$scope'];

    function IndexCtrl ($scope){};
})();
