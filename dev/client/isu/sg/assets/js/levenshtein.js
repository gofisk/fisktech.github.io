/*
* Copyright (c) 2011 Andrei Mackenzie
* Copyright (c) 2016 Scott Fisk
* Purpose: ISU Student Government 404 Page
* Contributor: Scott Fisk
* Contributor Website: https://gofisk.com 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//COMPUTE DISTANCE BETWEEN STRINGS
function distance(a, b) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;
    var matrix = [];

    //INCREMENT ALONG FIRST COLUMN IN EACH ROW
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    //INCREMENT ALL COLUMNS IN FIRST ROW
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    //COMPLETE MATRIX
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
        } else {
            //SUBSTITUTE
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1,
            //INSERT
            Math.min(matrix[i][j - 1] + 1, 
            //DELETE
            matrix[i - 1][j] + 1));
        }
        }
    }
    //RETURN MATRIX
    return matrix[b.length][a.length];
};

//ARRAY OF ALL PAGES ON SITE
var pages = ["index.html", "directory", "resources",
  "funding", "projects",
  "about", "contact"
];

var pageRec;

function closest(page) {
  var smallest = -1;
  for (var i = 0; i < pages.length; i++) {
    var dist = distance(page, pages[i]);
    if (dist < smallest || smallest == -1) {
      smallest = dist;
      pageRec = pages[i];
    }
  }
  return pageRec;
}

window.onload = function() {
var select = document.getElementsByTagName('select')[0];
select.options.length = 2; // LEAVE SELECT AND HOME
    
function toCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    
function deCap(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
  
for (var i = 0; i < pages.length; i++) {
    if (pages[i] != pageRec) {
    var d = pages[i];
        if (d == "index.html") {
            select.options.add(new Option("Home", "http://www.stugov.iastate.edu/"));
        } else if (d == "join") {
            select.options.add(new Option("Get Involved", "join"));
        } else {
    select.options.add(new Option(toCap(d), "http://www.stugov.iastate.edu/"+deCap(d)));
        }
    }
}

}