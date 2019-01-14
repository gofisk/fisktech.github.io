/* Copyright (C) Scott Benjamin Fisk - All Rights Reserved
 * Unauthorized copying of this file via any medium is strictly prohibited
 * This file may contain proprietary code and/or confidential information
 * Written by Scott Benjamin Fisk <dev@gofisk.com>, March 2017
 */

angular.module('313counties', ['ui.unique']).controller('313controller', [
    '$scope',
    '$http',
    function ($scope, $http) {
        
        //UNIQUE SPREADSHEET KEY - FOUND IN SPREADHSEET URL
        var key = '1jPImqPQX_Vep2q01M2FHHeHyu35PP5SS31mJovN_wi4';
        
        //DO NOT CHANGE THIS URL PATTERN - IT RETURNS SPREADSHEET DATA IN JSON FORMAT
        var url = 'https://spreadsheets.google.com/feeds/list/'+key+'/od6/public/values?alt=json';
        
        //PARSE JSON DATA FROM SPREADSHEET - VAR NAMES MUST MATCH TOP ROW OF SPREADSHEET
        var parse = function(entry) {
            console.log(entry);
            var name = entry['gsx$name']['$t'];
            var image = entry['gsx$image']['$t'];
            var founded = entry['gsx$founded']['$t'];
            var population = entry['gsx$population']['$t'];
            return {
                name: name, image: image, founded: founded, population: population
            };
        }
        
        $scope.loading = true;
        
        //PUSH PARSED DATA INTO AN ARRAY
        $http.get(url)
        .success(function(response) {
            var entries = response['feed']['entry'];
            $scope.countyData = [];
            for (key in entries) {
                var content = entries[key];
                $scope.countyData.push(parse(content));
            }
        })
        
        .finally(function () {
            // Hide loading GIF
            $scope.loading = false;
        });
        
        $scope.clearFilter = function () {
            $scope.search = {}; //CLEAR SEARCH
        };
        
        $scope.sortType     = 'name';   //SET DEFAULT SEARCH TYPE - MUST MATCH VALUE FROM TOP ROW OF SPREADHSEET
        $scope.sortReverse  = false;     //SET DEFAULT SEARCH ORDER - MUST BE TRUE (REVERSE) OR FALSE (DEFAULT)

    }]); //END CONTROLLER