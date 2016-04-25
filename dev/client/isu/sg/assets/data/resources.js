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
                        'TITLE': 'Newsletter',
                        'DESCRIPTION': 'Read through the latest Student Government newsletter to find out what we have accomplished first semester and what we will be working on in the months ahead.',
                        'LINK': 'http://www.stugov.iastate.edu/_site/newsletter1.pdf',
                        'CATEGORY': 'News'
                    },  
                    {
                        'ID': '2',
                        'TITLE': 'Legman',
                        'DESCRIPTION': 'Submit Legislation for upcoming Senate meetings.',
                        'LINK': 'https://drive.google.com/drive/u/0/folders/0B0qH7s5uyDmLflNKbXNqLXJjNF9RZjN6RFowSlZ5Ymp5YmNxa05uemFsWHZTUTRmRXdlSjQ',
                        'CATEGORY': 'Forms'
                    }, 
                    {
                        'ID': '3',
                        'TITLE': 'Senate Meeting Minutes',
                        'DESCRIPTION': 'Weekly Senate Meeting Minutes for the 2016/2017 Academic Year.',
                        'LINK': '../updates/index.html?q=Minutes',
                        'CATEGORY': 'Documents'
                    }, 
                    {
                        'ID': '4',
                        'TITLE': 'Legislation Packets',
                        'DESCRIPTION': 'Weekly Legislation Packets for the 2015/2016 Academic Year.',
                        'LINK': 'https://drive.google.com/drive/u/1/folders/0B7TL54YsE17ZX0tCWHFxQnpfTGM',
                        'CATEGORY': 'Documents'
                    }, 
                    {
                        'ID': '5',
                        'TITLE': 'Executive Updates',
                        'DESCRIPTION': 'Weekly Updates from the Student Body President and the Executive Branch.',
                        'LINK': 'https://drive.google.com/open?id=0B8cW7SjrImYNaENvOW9tZTFrMlE',
                        'CATEGORY': 'News'
                    }, 
                    {
                        'ID': '6',
                        'TITLE': 'Legislation Amendment Form',
                        'DESCRIPTION': 'No Description',
                        'LINK': 'https://docs.google.com/a/itsynergistics.com/forms/d/1cwqcCPfJbZyZkW8wH5ABE0mPELd7UbNRldwIvoI6hYw/viewform',
                        'CATEGORY': 'Forms'
                    }, 
                    {
                        'ID': '7',
                        'TITLE': 'PR At-Large Committee Application',
                        'DESCRIPTION': 'Completed applications can be submitted to arlang@iastate.edu',
                        'LINK': '../docs/forms/PR_COMMITTEE_APPLICATION.pdf',
                        'CATEGORY': 'Forms'
                    }, 
                    {
                        'ID': '8',
                        'TITLE': 'RideShare',
                        'DESCRIPTION': 'RideShare offers faculty, staff and student a safe place to share carpools and longer rides.',
                        'LINK': 'http://www.rideshare.gsb.iastate.edu/',
                        'CATEGORY': 'Services'
                    }, 
                    {
                        'ID': '9',
                        'TITLE': 'gsb.iastate.edu',
                        'DESCRIPTION': 'Former Student Government website. Has not been updated with the most current information. For archive purposes only.',
                        'LINK': 'http://www.gsb.iastate.edu/wordpress/',
                        'CATEGORY': 'Documents'
                    }, 
                    {
                        'ID': '10',
                        'TITLE': 'Cyclone Voice',
                        'DESCRIPTION': 'Is there something about how the University is run that you would like to see changed? Tell us about things you would fix or problems you have at Iowa State. Don\'t have a problem? Tell us what\'s awesome at ISU and we\'ll post that too!',
                        'LINK': '#',
                        'CATEGORY': 'Forms'
                    }, 
                    {
                        'ID': '11',
                        'TITLE': 'ASSET',
                        'DESCRIPTION': 'The Analysis of Social Services and Evaluation Team (ASSET) funds different human and social services in the Ames area.',
                        'LINK': 'http://www.storycountyasset.org/',
                        'CATEGORY': 'Services'
                    }, 
                    {
                        'ID': '12',
                        'TITLE': 'Student Legal Services',
                        'DESCRIPTION': 'Funded entirely by Student Government, Student Legal Services (SLS) is a legal aid office for students who are currently enrolled at Iowa State University and Recognized Student Organizations on campus. Services are provided free of charge.',
                        'LINK': 'http://www.dso.iastate.edu/sls/',
                        'CATEGORY': 'Services'
                    },
                    {
                        'ID': '13',
                        'TITLE': 'Student Activities Center',
                        'DESCRIPTION': 'The Student Activities Center (SAC) in the Memorial Union offers countless ways to get involved at Iowa State through leadership, service, arts, entertainment and recreation activities. They also manage the recognition process for over 750 student and campus clubs and organizations.',
                        'LINK': 'http://www.sac.iastate.edu/',
                        'CATEGORY': 'Services'
                    },
                    {
                        'ID': '14',
                        'TITLE': 'Student Loan Education Office',
                        'DESCRIPTION': 'The Student Loan Education Office was started in the 2014-15 academic year through a partnership of the Government of the Student Body (GSB), Division of Student Affairs and the Office of Student Financial Aid to be a resource for students to help reduce their educational borrowing while learning how to effectively manage their finances while pursuing a college degree. As a GSB funded office, all services provided to students are free of charge.',
                        'LINK': 'http://financialaid.iastate.edu/sleo/',
                        'CATEGORY': 'Services'
                    },
                    {
                        'ID': '15',
                        'TITLE': 'Iowa State Daily',
                        'DESCRIPTION': 'The Iowa State Daily  is an independent student newspaper serving Iowa State University, that is published in print and online. The paper is published five days a week during the fall and winter semesters, and weekly during the summer.',
                        'LINK': 'http://www.iowastatedaily.com/',
                        'CATEGORY': 'Documents'
                    },
                    {
                        'ID': '16',
                        'TITLE': 'Bylaws',
                        'DESCRIPTION': 'Bylaws governing Student Government. 2000 Edition of the SG Bylaws with all amendments passed through September 16, 2015.',
                        'LINK': '../docs/policy/BYLAWS.pdf',
                        'CATEGORY': 'Policy'
                    },
                    {
                        'ID': '17',
                        'TITLE': 'Constitution',
                        'DESCRIPTION': 'Effective March 10, 2015.',
                        'LINK': '../docs/policy/CONSTITUTION.pdf',
                        'CATEGORY': 'Policy'
                    },
                    {
                        'ID': '18',
                        'TITLE': 'Articles of Cooperation with GPSS',
                        'DESCRIPTION': 'Last amended Spring 2013.',
                        'LINK': '../docs/policy/ARTICLES_OF_COOPERATION.pdf',
                        'CATEGORY': 'Policy'
                    },
                    {
                        'ID': '19',
                        'TITLE': 'FY15 Finance Priorities and Criteria',
                        'DESCRIPTION': 'Effective for funding distributed from July 1, 2014 through June 30, 2015.',
                        'LINK': '../docs/policy/PRIORITIES_CRITERIA_FY15.pdf',
                        'CATEGORY': 'Policy'
                    },
                    {
                        'ID': '19',
                        'TITLE': 'FY16 Finance Priorities and Criteria',
                        'DESCRIPTION': 'Effective for funding distributed from July 1, 2015 through June 30, 2016.',
                        'LINK': '../docs/policy/PRIORITIES_CRITERIA_FY16.pdf',
                        'CATEGORY': 'Policy'
                    },
                    {
                        'ID': '20',
                        'TITLE': 'Rules of the Supreme Court',
                        'DESCRIPTION': 'Last amended March 2008.',
                        'LINK': '../docs/policy/RULES_OF_COURT.pdf',
                        'CATEGORY': 'Supreme Court'
                    },
                    {
                        'ID': '21',
                        'TITLE': 'Election Code',
                        'DESCRIPTION': 'Last amended December 2013.',
                        'LINK': '../docs/elections/ELECTION_CODE.pdf',
                        'CATEGORY': 'Policy'
                    },
                    {
                        'ID': '22',
                        'TITLE': 'Student Organization Budgets',
                        'DESCRIPTION': 'Use you CyMail info to log in.',
                        'LINK': 'https://ofp-gsb.sws.iastate.edu/',
                        'CATEGORY': 'Documents'
                    },
                    {
                        'ID': '23',
                        'TITLE': 'Archived Agendas and Minutes',
                        'DESCRIPTION': 'Use you CyMail info to log in.',
                        'LINK': 'http://www.gsb.iastate.edu/wordpress/legislative/minutes-and-legislation',
                        'CATEGORY': 'Documents'
                    },
                    {
                        'ID': '24',
                        'TITLE': 'File a Supreme Court Case',
                        'DESCRIPTION': 'No Description',
                        'LINK': '../docs/forms/SUPREME_COURT_PETITION.pdf',
                        'CATEGORY': 'Supreme Court',
                    },
                    {
                        'ID': '25',
                        'TITLE': 'Recent Supreme Court Opinions',
                        'DESCRIPTION': 'No Description',
                        'LINK': '../docs/court/SNELL_V_GUENTHER.pdf',
                        'CATEGORY': 'Supreme Court'
                    },
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