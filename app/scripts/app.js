'use strict';

var app = angular.module('spangular', ['ngResource'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/search'
        })
        .when( '/search', {
            redirectTo: '/search/list'
        })
        .when('/search/list', {
            controller: "ListCtrl",
            templateUrl: "views/controllers/search/list.html"
        })
    });
