var sgResources = angular.module('sgResources', ['ui.unique']);
sgResources.controller('sgController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.fs_dir = {
            'sgResources': {
                'directory': [
                    {
                        'ID': '1',
                        'TITLE': 'Test Data',
                        'DESCRIPTION': 'Test Description',
                        'LINK': '#',
                        'CATEGORY': 'Books'
                    }
                ]
            }
        };
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