var sgUpdates = angular.module('sgUpdates', ['ui.unique']);

sgUpdates.controller('sgController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.fs_dir = {
            'sgUpdates': {
                'directory': [
                    {
                        'DATE': '2016-04-13',
                        'NICE_DATE': 'April 13, 2016',
                        'TITLE': 'Minutes Released',
                        'DESCRIPTION': 'This Happened',
                        'CATEGORY': 'Meeting Minutes',
                        'LINK': 'docs/minutes/1617/2016-04-13.pdf',
                        'LINK_TEXT': 'View Minutes'
                    },
                    {
                        'DATE': '2016-04-20',
                        'NICE_DATE': 'April 20, 2016',
                        'TITLE': 'Minutes Released',
                        'DESCRIPTION': 'This Happened',
                        'CATEGORY': 'Meeting Minutes',
                        'LINK': 'docs/minutes/1617/2016-04-20.pdf',
                        'LINK_TEXT': 'View Minutes'
                    }
                ]
            }
        };
        
            $scope.clearFilter = function () {
                $scope.search = {};
            };
        
            $scope.sortType     = 'DATE'; //SET DEFAULT SEARCH TYPE
            $scope.sortReverse  = true;  //SET DEFAULT SEARCH ORDER
            $scope.search   = ''; //DEFAULT TO NO SEARCH
        
        //ONLY RUN SEARCH ON UPDATES PAGE
        if(window.location.href.indexOf("updates") > -1) {
            var urlParam = getParameterByName('q'); 
            $scope.search   = urlParam;     //SET DEFAULT SEARCH TERM

            var field = 'q';
            var url = window.location.href;
            var path = window.location.pathname;
            console.log(path);
        
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
                    document.getElementById("matchButton").href = "../updates";
                }
            //URL DOES NOT CONTAIN PARAMETER
            } else {
                document.getElementById("urlParamTitle").style.display = "none";
            } 
        }
    }
]);

if(window.location.href.indexOf("updates") > -1) {
//FOCUS ON SEARCH TEXTBOX
window.onload = function() {
    focusSearch();
};

function focusSearch() {
    document.getElementById("search").focus();
}
}