/* Copyright (C) Scott Benjamin Fisk - All Rights Reserved
 * Unauthorized copying of this file via any medium is strictly prohibited
 * This file may contain proprietary code and/or confidential information
 * Written by Scott Benjamin Fisk <dev@gofisk.com>, April 2016
 */

angular.module('ehsResources', ['ui.unique']).controller('ehsController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        //UNIQUE SPREADSHEET KEY - FOUND IN SPREADHSEET URL
        var key = '1VsJKUv0uoo4GtIOMKPOaaRijXyiFQMJdt091GEf3nQg';
        
        //DO NOT CHANGE THIS URL PATTERN - IT RETURNS SPREADSHEET DATA IN JSON FORMAT
        var url = 'https://spreadsheets.google.com/feeds/list/'+key+'/od6/public/values?alt=json';
        
         //PARSE JSON DATA FROM SPREADSHEET - VAR NAMES MUST MATCH TOP ROW OF SPREADSHEET
        var parse = function(entry) {
            console.log(entry);
            var title = entry['gsx$title']['$t'];
            var category = entry['gsx$category']['$t'];
            var description = entry['gsx$description']['$t'];
            var link = entry['gsx$link']['$t'];
            return {
                title: title, category: category, description: description, link: link
            };
        }
    
        $scope.loading = true;
        
        //PUSH PARSED DATA INTO AN ARRAY
        $http.get(url)
        .success(function(response) {
            var entries = response['feed']['entry'];
            $scope.ehsData = [];
            for (key in entries) {
                var content = entries[key];
                $scope.ehsData.push(parse(content));
            }
        })
    
        .finally(function () {
        // Hide loading spinner whether our call succeeded or failed.
        $scope.loading = false;
        });
    
        $scope.clearFilter = function () {
            $scope.search = {};
        };
        
        $scope.sortType     = 'TITLE'; //SET DEFAULT SEARCH TYPE
        $scope.sortReverse  = false;  //SET DEFAULT SEARCH ORDER
        
        var urlParam = getParameterByName('q');
        $scope.search   = urlParam;     //SET DEFAULT SEARCH TERM

        var field = 'q';
        var url = window.location.href;
        
        //CHECK IF URL CONTAINS A PARAMETER
        if(url.indexOf('?' + field + '=') != -1) {
            //IF PARAMTER IS NULL
            if (urlParam == '') {
                document.getElementById("urlParamTitle").style.display = "none";
            //IF PARAMTER HAS A VALUE
            } else {
                document.getElementById("filters").style.display = "none";
                document.getElementById("urlParamTitle").innerHTML = "that match \"<strong>"+urlParam+"</strong>\"";
                document.getElementById("matchMessage").style.display = "none";
                document.getElementById("resetText").style.display = "none";
                document.getElementById("matchButton").innerHTML = "Try a Search";
                document.getElementById("matchButton").href = "../resources";
            }
        //URL DOES NOT CONTAIN PARAMETER
        } else {
            document.getElementById("urlParamTitle").style.display = "none";
        } 
    }
]);

//FOCUS ON SEARCH TEXTBOX
window.onload = function() {
    focusSearch();
};

function focusSearch() {
    document.getElementById("search").focus();
}