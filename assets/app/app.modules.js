(function(){
    'use strict';

    angular
        .module('app')
        .config(['$qProvider', '$stateProvider', '$urlRouterProvider', function ($qProvider, $stateProvider, $urlRouterProvider){
            $qProvider.errorOnUnhandledRejections(false);
            $urlRouterProvider.otherwise('/home');
            
            $stateProvider
                // HOME STATES AND NESTED VIEWS ========================================
                .state('home', {
                    url: '/home',
                    templateUrl: '../templates/home/home.html', // Set HTML
                    controller: '' //Set Controller
                })
                .state('step1', {
                    url: '/step1',
                    templateUrl: '../templates/step1/step1.html', // Set HTML
                    controller: 'StepOneCtrl' //Set Controller
                });
        }]);
})();


