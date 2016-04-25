var sgProjects = angular.module('sgProjects', ['ui.unique']);
sgProjects.controller('sgController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.fs_dir = {
            'sgProjects': {
                'directory': [
                    {
                        'ID': '1',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Bike Share Program',
                        'MANAGER': 'Tony Behnke',
                        'EMAIL': 'abbehnke@iastate.edu',
                        'DESCRIPTION': 'Install card scanners and bikes on campus so that students can checkout bikes from campus and return at any other campus bike rack',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    },  
                    {
                        'ID': '2',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Recycling in Campus Buildings',
                        'MANAGER': 'Aly Straube',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Expand ISU recycling program to other campus buildings starting with library',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    },  
                    {
                        'ID': '3',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Supplemental Instruction Reform',
                        'MANAGER': 'Hillary Kletscher',
                        'EMAIL': 'hillklet@iastate.edu',
                        'DESCRIPTION': 'TBD',
                        'STATUS': 'On Hold',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '4',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Connecting SG & FC',
                        'MANAGER': 'Blake Singbush',
                        'EMAIL': 'singbush@iastate.edu',
                        'DESCRIPTION': 'Connect Student Government and Freshman Council to come up with issues that current Freshmen face and work on projects that will help the Freshmen class.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '5',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Frisbee Golf Course Renovations',
                        'MANAGER': 'TBD',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Implement an "adpot a trashcan" program at frisbee golf courses',
                        'STATUS': 'On Hold',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '6',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Student to Student Exchange Site',
                        'MANAGER': 'Mike Hoefer',
                        'EMAIL': 'mjhoefer@iastate.edu',
                        'DESCRIPTION': 'Create a universal, widely adopted medium for textbook exchange among Iowa State students.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '7',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Iowa State Green Fund',
                        'MANAGER': 'Mike Hoefer and Aly Straube',
                        'EMAIL': 'mjhoefer@iastate.edu',
                        'DESCRIPTION': 'Create an Iowa State Green Fund, used to support sustainability projects on campus.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '8',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Improve Useability of Bike Pump',
                        'MANAGER': 'Mike Hoefer',
                        'EMAIL': 'mjhoefer@iastate.edu',
                        'DESCRIPTION': 'Provide clear instructions for use of public bike pump.',
                        'STATUS': 'On Hold',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '9',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Clicker Voting System',
                        'MANAGER': 'Peter Benzoni',
                        'EMAIL': 'pbenzoni@iastate.edu',
                        'DESCRIPTION': 'Develope a shared GSB/GPSS Clicker system for voting in Student Government Senate.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '10',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Universal Calendar',
                        'MANAGER': 'Michael Hoefer',
                        'EMAIL': 'mjhoefer@iastate.edu',
                        'DESCRIPTION': 'Create a common calendar for all student organization public events.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '11',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Purchasing Large Tent',
                        'MANAGER': 'Dan Breitbarth',
                        'EMAIL': 'dpb@iastate.edu',
                        'DESCRIPTION': 'Purchase Large Tent to be used by student organazations on Central Campus.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '12',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'More Food Options',
                        'MANAGER': 'Megan Black',
                        'EMAIL': 'meblack@iastate.edu',
                        'DESCRIPTION': 'Trying to Get Food Carts inside buildings to provide quick and easy food to students.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '13',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Smoking Ban/e-cigarettes',
                        'MANAGER': 'Danielle Nygard',
                        'EMAIL': 'drnygard@iastate.edu',
                        'DESCRIPTION': 'Trying to get Smoking Bans more heavily enforced on campus, along with adding e-cigarettes to the smoking ban.',
                        'STATUS': 'Completed',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '14',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Printing Credits',
                        'MANAGER': 'Reagan Huber',
                        'EMAIL': 'rahuber@iastate.edu',
                        'DESCRIPTION': 'Looking towards revamping how the printing system works on campus.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '15',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Spring Orientation',
                        'MANAGER': 'Sam Schulte',
                        'EMAIL': 'schultes@iastate.edu',
                        'DESCRIPTION': 'Create A new student orientation program for students starting in Spring Semester.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '16',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Bike Pump in Freddy Court',
                        'MANAGER': 'Mike Hoefer',
                        'EMAIL': 'mjhoefer@iastate.edu',
                        'DESCRIPTION': 'Looking into possiblity of installing Bike Pump (like the one by Memorial Union) in Freddy Court.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '17',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Safe Trek Safety App',
                        'MANAGER': 'Carlton Stripe',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Implement a Safety App onto the Iowa State campus for when students feel unsafe in certain locales and situations.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '18',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Student Organization Event Planning',
                        'MANAGER': 'Carlton Stripe',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Make the planning and authorizing of student organization events more streamlined.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '19',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'SAC Online FAQ Database',
                        'MANAGER': 'Carlton Stripe',
                        'EMAIL': '#',
                        'DESCRIPTION': 'The Student Answer Center (SAC) is creating a new online "One-Stop Shop" FAQ for students to utiliize. This is to be in conjunction with the current SAC that is located in Beardshear Hall.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '20',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Student Affairs Commission/28E',
                        'MANAGER': 'Lissandra Villa',
                        'EMAIL': 'lvilla@iastate.edu',
                        'DESCRIPTION': 'To enter into a 28E agreement with the City of Ames for a one-year trial period as a potential replacement for the Student Affairs Commission. Simultaneously there will be investigations into how to improve the Student Affairs Commission as it stands.',
                        'STATUS': 'On Hold',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '21',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'ISU Ambassadors',
                        'MANAGER': 'Jamie Rix & Justin Bahr',
                        'EMAIL': 'jamierix@iastate.edu',
                        'DESCRIPTION': 'Justin and I are currently preparing all ambassadors prepared for the Capitol. Joe Murphy will be joining our meeting on Thursday to insure everyone is on the same page regarding the tuition freeze and performance based funding. I am also working on ordering polos for the ambassadors so that we appear as one strong unit at the capitol! Justin will be attending the Board of Regents meeting on Wednesday at the alumni center and I will be attending the Senate meeting on Wednesday as well if anyone has questions for me.',
                        'STATUS': 'On Hold',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '22',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'It\'s On Us',
                        'MANAGER': 'Amanda Loomis & Hillary Kletscher',
                        'EMAIL': 'alloomis@iastate.edu',
                        'DESCRIPTION': 'Campaign to end Sexual Assualt and create awareness.',
                        'STATUS': 'On Hold',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '23',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Study Group Matching',
                        'MANAGER': 'Melissa Gofforth',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Match students in large lectures with peer study groups, by utilizing Blackboard features. This will mostly target first year students.',
                        'STATUS': 'Planning',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '24',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Expanding Clubfest',
                        'MANAGER': 'Tony Behnke',
                        'EMAIL': 'abbehnke@iastate.edu',
                        'DESCRIPTION': 'Tony Behnke	To allow more student organizations to be involved with clubfest. Currently it is too crowded and is breaking fire codes and must be moved or made smaller... The project will have clubfest outside in the fall and allow 350 organizations to be outside with each their own table and weather protected by tents, rather than the current 250 oragnizations sharing tables.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '25',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Expanding Clubfest',
                        'MANAGER': 'Cody West',
                        'EMAIL': 'codywest@iastate.edu',
                        'DESCRIPTION': 'Add lighting and color to the walkway under the MU parking ramp.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '26',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Picnic tables for Central Campus',
                        'MANAGER': 'Abbie Lang',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Adding seating to Central Campus for students and events',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    },
                    {
                        'ID': '27',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Creating a Humanity organization umbrella',
                        'MANAGER': 'Neil Vezeau',
                        'EMAIL': '#',
                        'DESCRIPTION': 'To create an organization that will be an umbrella for all humanitarian groups on campus.',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '28',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Student Diversity Committee',
                        'MANAGER': 'TBD',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Help create an inclusive Cyclone Community which celebrates diversity. Advocate and empower underrepresented groups on-campus. Collaborate with the City of Ames, University Administration and Student Organizations to execute projects to enhance and retain diversity on campus',
                        'STATUS': 'In Progress',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '29',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'Conversations on Diversity',
                        'MANAGER': 'Presha Kardile',
                        'EMAIL': '#',
                        'DESCRIPTION': 'Students need to communicate with one another to understand one another. We are starting a new series in the Iowa State Daily, titled “Conversations on Diversity,” which will begin the important work to help students from diverse backgrounds better understand the unique perspectives that make up the Iowa State student body.',
                        'STATUS': 'Ongoing',
                        'MORE': '#'
                    }, 
                    {
                        'ID': '29',
                        'DATE': '',
                        'NICE_DATE': 'Unknown',
                        'TITLE': 'International Food Expansion',
                        'MANAGER': 'Presha Kardile',
                        'EMAIL': '#',
                        'DESCRIPTION': 'With the growing diversity of the Iowa State student body, we’re looking to work with ISU Dining in providing more international food options at their campus locations. Not only will it give more students a way to feel at home, but it will also allow students to try new things and to potentially discover a new favorite.',
                        'STATUS': 'Ongoing',
                        'MORE': '#'
                    }, 
                ]
            }
        };
        $scope.clearFilter = function () {
            $scope.search = {};
        };
        
        $scope.sortType     = 'DATE'; //SET DEFAULT SEARCH TYPE
        $scope.sortReverse  = true;  //SET DEFAULT SEARCH ORDER
        
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
                document.getElementById("matchButton").href = "../projects";
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