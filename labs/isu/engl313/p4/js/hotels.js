/* Copyright (C) Scott Benjamin Fisk - All Rights Reserved
 * Unauthorized copying of this file via any medium is strictly prohibited
 * This file may contain proprietary code and/or confidential information
 * Written by Scott Benjamin Fisk <dev@gofisk.com>, March 2017
 */

angular.module('cfwHotels', ['ui.unique']).controller('hotelsController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        //UNIQUE SPREADSHEET KEY - FOUND IN SPREADHSEET URL
        var key = '1mKsLqL8a_YtS4vdArhruq2P2twdPeW8PPz9K0IX18q4';
        
        //DO NOT CHANGE THIS URL PATTERN - IT RETURNS SPREADSHEET DATA IN JSON FORMAT
        var url = 'https://spreadsheets.google.com/feeds/list/'+key+'/od6/public/values?alt=json';
        
         //PARSE JSON DATA FROM SPREADSHEET - VAR NAMES MUST MATCH TOP ROW OF SPREADSHEET
        var parse = function(entry) {
            console.log(entry);
            var name = entry['gsx$name']['$t'];
            var address = entry['gsx$address']['$t'];
            var phone = entry['gsx$phone']['$t'];
            var website = entry['gsx$website']['$t'];
            var ammenities = entry['gsx$ammenities']['$t'];
            var friday = entry['gsx$friday']['$t'];
            var saturday = entry['gsx$saturday']['$t'];
            return {
                name: name, address: address, phone: phone, website: website, ammenities: ammenities, friday: friday, saturday: saturday
            };
        }
        
        $scope.loading = true;
        
        //PUSH PARSED DATA INTO AN ARRAY
        $http.get(url)
        .success(function(response) {
            var entries = response['feed']['entry'];
            $scope.cfwHotels = [];
            for (key in entries) {
                var content = entries[key];
                $scope.cfwHotels.push(parse(content));
            }
        })
        
        .finally(function () {
        // Hide loading spinner whether our call succeeded or failed.
        $scope.loading = false;
        });

        $scope.clearFilter = function () {
            $scope.search = {};
        };
        
        $scope.sortType     = 'name'; //SET DEFAULT SEARCH TYPE
        $scope.sortReverse  = false;  //SET DEFAULT SEARCH ORDER
    }]); //END CONTROLLER

var dv = document.getElementById('hotelsApp');
angular.bootstrap(dv, ['cfwHotels']);