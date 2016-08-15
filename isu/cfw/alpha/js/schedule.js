/* Copyright (C) Scott Benjamin Fisk - All Rights Reserved
 * Unauthorized copying of this file via any medium is strictly prohibited
 * This file may contain proprietary code and/or confidential information
 * Written by Scott Benjamin Fisk <dev@gofisk.com>, April 2016
 */

angular.module('cfwEvents', ['ui.unique']).controller('eventsController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        //UNIQUE SPREADSHEET KEY - FOUND IN SPREADHSEET URL
        var key = '1vGp2KH3c_nIzeFsKBynJuCTJHt4XPf4Q4DyDyQ2og38';
        
        //DO NOT CHANGE THIS URL PATTERN - IT RETURNS SPREADSHEET DATA IN JSON FORMAT
        var url = 'https://spreadsheets.google.com/feeds/list/'+key+'/od6/public/values?alt=json';
        
         //PARSE JSON DATA FROM SPREADSHEET - VAR NAMES MUST MATCH TOP ROW OF SPREADSHEET
        var parse = function(entry) {
            console.log(entry);
            var id = entry['gsx$id']['$t'];
            var name = entry['gsx$name']['$t'];
            var day = entry['gsx$day']['$t'];
            var type = entry['gsx$type']['$t'];
            var time = entry['gsx$time']['$t'];
            var timeinfo = entry['gsx$timeinfo']['$t'];
            var location = entry['gsx$location']['$t'];
            var locationinfo = entry['gsx$locationinfo']['$t'];
            var description = entry['gsx$description']['$t'];
            return {
                id: id, name: name, day: day, type: type, time: time, timeinfo: timeinfo, location: location, locationinfo: locationinfo, description: description
            };
        }
        
        $scope.loading = true;
        
        //PUSH PARSED DATA INTO AN ARRAY
        $http.get(url)
        .success(function(response) {
            var entries = response['feed']['entry'];
            $scope.cfwEvents = [];
            for (key in entries) {
                var content = entries[key];
                $scope.cfwEvents.push(parse(content));
            }
        })
        
        .finally(function () {
        // Hide loading spinner whether our call succeeded or failed.
        $scope.loading = false;
        });

        $scope.clearFilter = function () {
            $scope.search = {};
        };
        
        $scope.sortType     = 'id'; //SET DEFAULT SEARCH TYPE
        $scope.sortReverse  = false;  //SET DEFAULT SEARCH ORDER
    }]); //END CONTROLLER

var dv = document.getElementById('scheduleApp');
angular.bootstrap(dv, ['cfwEvents']);