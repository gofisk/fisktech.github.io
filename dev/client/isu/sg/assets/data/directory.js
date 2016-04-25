var sgDirectory = angular.module('sgDirectory', ['ui.unique']);
sgDirectory.controller('sgController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.fs_dir = {
            'sgDirectory': {
                'directory': [
                    {
                        'NET_ID': 'cmstaudt',
                        'LAST_NAME': 'Staudt',
                        'FIRST_NAME': 'Cole',
                        'NAME_SUFFIX': '',
                        'TITLE': 'President',
                        'GROUP': 'Executive',
                        'BIO': '',
                        'GOALS': ''
                    },   
                    {
                        'NET_ID': 'codywest',
                        'LAST_NAME': 'West',
                        'FIRST_NAME': 'Cody',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Vice President',
                        'GROUP': 'Executive',
                        'BIO': '',
                        'GOALS': ''
                    }, 
                    {
                        'NET_ID': 'ibbaker',
                        'LAST_NAME': 'Baker',
                        'FIRST_NAME': 'Isian',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Co-Director of ISU Ambassadors',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    }, 
                    {
                        'NET_ID': 'smcarter',
                        'LAST_NAME': 'Carter',
                        'FIRST_NAME': 'Seth',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Treasurer',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    }, 
                    {
                        'NET_ID': 'jaleelch',
                        'LAST_NAME': 'Chandler',
                        'FIRST_NAME': 'Jaleel',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of New Student Outreach',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    }, 
                    {
                        'NET_ID': 'mbcrow',
                        'LAST_NAME': 'Crow',
                        'FIRST_NAME': 'Montana',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Co-Director of ISU Ambassadors',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    }, 
                    {
                        'NET_ID': 'cmdeaver',
                        'LAST_NAME': 'Deaver',
                        'FIRST_NAME': 'Caitlin',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Graphic Designer',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'bmdirks',
                        'LAST_NAME': 'Dirks',
                        'FIRST_NAME': 'Benjamin',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Government Affairs',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'benfaiz',
                        'LAST_NAME': 'Faiz',
                        'FIRST_NAME': 'Benjamin',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Diversity & Inclusion',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'fisk',
                        'LAST_NAME': 'Fisk',
                        'FIRST_NAME': 'Scott',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Information Technology',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ijh',
                        'LAST_NAME': 'Hogg',
                        'FIRST_NAME': 'Ivy',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of College Relations',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'kgholmes',
                        'LAST_NAME': 'Holmes',
                        'FIRST_NAME': 'Kathryn',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Sustainability',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'cleaf',
                        'LAST_NAME': 'Leafstedt',
                        'FIRST_NAME': 'Catherine',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Academic Affairs',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'dmoore3',
                        'LAST_NAME': 'Moore',
                        'FIRST_NAME': 'David',
                        'NAME_SUFFIX': 'III',
                        'TITLE': 'Director of Student Services',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'zdreece',
                        'LAST_NAME': 'Reece',
                        'FIRST_NAME': 'Zackary',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Student Health',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'anaisr',
                        'LAST_NAME': 'Romero-Rios',
                        'FIRST_NAME': 'Anais',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Senior Director of Communications',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'schultes',
                        'LAST_NAME': 'Schulte',
                        'FIRST_NAME': 'Sam',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Ex-Officio Ames City Council Student Liaison',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'mjscott',
                        'LAST_NAME': 'Scott',
                        'FIRST_NAME': 'Matthew',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Chief of Staff',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'singbush',
                        'LAST_NAME': 'Singbush',
                        'FIRST_NAME': 'Blake',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Student Research',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'snook',
                        'LAST_NAME': 'Snook',
                        'FIRST_NAME': 'Michael',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Finance Director',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'mengyuw',
                        'LAST_NAME': 'Wang',
                        'FIRST_NAME': 'Mengyu (Allen)',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Director of Graduate Relations',
                        'GROUP': 'Cabinet',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'boeck',
                        'LAST_NAME': 'Boeckholt',
                        'FIRST_NAME': 'Kevin',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Chief Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'brbjoin',
                        'LAST_NAME': 'Bjoin',
                        'FIRST_NAME': 'Brandon',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'bbormann',
                        'LAST_NAME': 'Bormann',
                        'FIRST_NAME': 'Brenna',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'akolxdok',
                        'LAST_NAME': 'Dok',
                        'FIRST_NAME': 'Akol',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'wdonahoe',
                        'LAST_NAME': 'Donahoe',
                        'FIRST_NAME': 'Will',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'bgarrido',
                        'LAST_NAME': 'Garrido',
                        'FIRST_NAME': 'Brian',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ckemmet',
                        'LAST_NAME': 'Kemmet',
                        'FIRST_NAME': 'Carter',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'pearson1',
                        'LAST_NAME': 'Pearson',
                        'FIRST_NAME': 'Justin',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Associate Justice',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'gdenny',
                        'LAST_NAME': 'Denny',
                        'FIRST_NAME': 'Grant',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Clerk',
                        'GROUP': 'Supreme Court',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'corey5',
                        'LAST_NAME': 'Williamson',
                        'FIRST_NAME': 'Corey',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Assistant Legislative & Finance Director',
                        'GROUP': 'Advisors',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'jecale',
                        'LAST_NAME': 'Cale',
                        'FIRST_NAME': 'Jacqueline',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Election Commissioner',
                        'GROUP': 'Exec Appointment',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'jzirk',
                        'LAST_NAME': 'Zirkelbach',
                        'FIRST_NAME': 'Jacob',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Clerk of the Senate',
                        'GROUP': 'Exec Appointment',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'mariaa',
                        'LAST_NAME': 'Archevald',
                        'FIRST_NAME': 'Maria',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ajbrand',
                        'LAST_NAME': 'Brand',
                        'FIRST_NAME': 'Alex',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Agriculture & Life Sciences Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'bjfair',
                        'LAST_NAME': 'Fair',
                        'FIRST_NAME': 'Bradlee',
                        'NAME_SUFFIX': '',
                        'TITLE': 'IRHA Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'cfaunce',
                        'LAST_NAME': 'Faunce',
                        'FIRST_NAME': 'Charles',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Engineering Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'samfree',
                        'LAST_NAME': 'Freestone',
                        'FIRST_NAME': 'Samuel',
                        'NAME_SUFFIX': '',
                        'TITLE': 'IRHA Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'jkersch',
                        'LAST_NAME': 'Kersch',
                        'FIRST_NAME': 'Jane',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'jpkirner',
                        'LAST_NAME': 'Kirner',
                        'FIRST_NAME': 'Jonathan',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Design Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ctkreber',
                        'LAST_NAME': 'Kreber',
                        'FIRST_NAME': 'Colton',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Agriculture & Life Sciences Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'drew',
                        'LAST_NAME': 'Miller',
                        'FIRST_NAME': 'Drew',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Human Sciences Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'millsap',
                        'LAST_NAME': 'Millsap',
                        'FIRST_NAME': 'Adam',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Engineering Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'pdmyers',
                        'LAST_NAME': 'Myers',
                        'FIRST_NAME': 'Peter',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Business Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'drnygard',
                        'LAST_NAME': 'Nygard',
                        'FIRST_NAME': 'Danielle',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'roberto1',
                        'LAST_NAME': 'Ortiz',
                        'FIRST_NAME': 'Roberto',
                        'NAME_SUFFIX': '',
                        'TITLE': 'LAS Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'horaeng',
                        'LAST_NAME': 'Park',
                        'FIRST_NAME': 'Joonghyun',
                        'NAME_SUFFIX': '',
                        'TITLE': 'SUV Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'patwaa1',
                        'LAST_NAME': 'Patwa',
                        'FIRST_NAME': 'Abhijit',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ctperez',
                        'LAST_NAME': 'Perez',
                        'FIRST_NAME': 'Christopher',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Graduate Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'aimee',
                        'LAST_NAME': 'Rodin',
                        'FIRST_NAME': 'Aimee',
                        'NAME_SUFFIX': '',
                        'TITLE': 'LAS Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ericsch',
                        'LAST_NAME': 'Schultz',
                        'FIRST_NAME': 'Eric',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Business Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'zshipley',
                        'LAST_NAME': 'Shipley',
                        'FIRST_NAME': 'Zoey',
                        'NAME_SUFFIX': '',
                        'TITLE': 'IRHA Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'cody',
                        'LAST_NAME': 'Smith',
                        'FIRST_NAME': 'Cody',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'rlstarn',
                        'LAST_NAME': 'Starn',
                        'FIRST_NAME': 'Ryan',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'cthomson',
                        'LAST_NAME': 'Thomson',
                        'FIRST_NAME': 'Cameron',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'rthys',
                        'LAST_NAME': 'Thys',
                        'FIRST_NAME': 'Rhett',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'cmtillo',
                        'LAST_NAME': 'Tillo',
                        'FIRST_NAME': 'Conner',
                        'NAME_SUFFIX': '',
                        'TITLE': 'LAS Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ktomoeda',
                        'LAST_NAME': 'Tomoeda',
                        'FIRST_NAME': 'Koki',
                        'NAME_SUFFIX': '',
                        'TITLE': 'Engineering Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'stevenv',
                        'LAST_NAME': 'Valentino',
                        'FIRST_NAME': 'Steven',
                        'NAME_SUFFIX': '',
                        'TITLE': 'IFC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    },
                    {
                        'NET_ID': 'ewirth',
                        'LAST_NAME': 'Wirth',
                        'FIRST_NAME': 'Eric',
                        'NAME_SUFFIX': '',
                        'TITLE': 'UROC Senator',
                        'GROUP': 'Senators',
                        'BIO': '',
                        'GOALS': ''
                    }
                ]
            }
        };
        $scope.clearFilter = function () {
            $scope.search = {};
        };
        
        $scope.sortType     = 'LAST_NAME'; //SET DEFAULT SEARCH TYPE
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
                document.getElementById("matchButton").href = "../directory";
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