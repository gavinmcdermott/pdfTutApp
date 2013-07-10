'use strict';

angular.module('pdfTutApp')
    .service('recipe', function recipe($resource) {
        return $resource('/recipes/:id', { id: '@id' });
    });
