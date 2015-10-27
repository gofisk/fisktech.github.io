
<HTML><HEAD><TITLE>SUB CIPHER</TITLE>

<link REL="SHORTCUT ICON" HREF="/favicon.ico">

<script language="JavaScript" src="js/util.js"></script>

<script language="JavaScript"><!--



var Letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

var LettersAtbash = 'ZYXWVUTSRQPONMLKJIHGFEDCBA0123456789';

var last_alphabet = '', curr_alphabet = '';

var TableColumns = 8;

var Advanced = 0;





function InverseAlphabet(a)

{

var s = '';

for (var i = 0; i < Letters.length; i ++)

{

var idx = a.indexOf(Letters.charAt(i));

if (idx >= 0)

s += Letters.charAt(idx);

}



return s;

}



function RecalcAlphabet()

{

var e, e2, a = '';



for (var i = 0; i < Letters.length; i ++)

{

var c, e2;

e2 = document.encoder['L_' + Letters.charAt(i)];

if (e2)

{

c = e2.value.charAt(0).toUpperCase();

if (c.length != 1)

c = Letters.charAt(i).toUpperCase();

e2.value = c;

}

a += c;

}



curr_alphabet = a;



e = document.getElementById('alphabet');

e2 = document.getElementById('alphabet2');

if (Letters != Letters.toUpperCase() ||

a != MakeKeyedAlphabet(a, Letters))

{

e.innerHTML = 'Invalid Caesar alphabet';

e2.innerHTML = 'Not possible';

}

else

{

e2.innerHTML = a;

e.innerHTML = InverseAlphabet(a);

}

} 



function quickswap()

{

var s, e, i, a = Array();



s = document.encoder.swap.value;

if (Letters == Letters.toUpperCase())

s = s.toUpperCase();

if (Advanced)

{

var s2 = '';

for (i = 0; i < s.length; i ++)

{

e = document.encoder['CHK_' + s.charAt(i)];

if (! e || ! e.checked)

{

s2 += s.charAt(i);

}

}

s = s2;

}

while (s.length >= 2)

{

for (i = 0; i < Letters.length; i ++)

{

e = document.encoder['L_' + Letters.charAt(i)];

if (e && e.value == s.charAt(0))

{

e.value = s.charAt(1);

}

else if (e && e.value == s.charAt(1))

{

e.value = s.charAt(0);

}

}

s = s.slice(2, s.length);

}



document.encoder.swap.value = s;



RecalcAlphabet();

}





function ColorizeEscape(s)

{

var oldcolor = '';

var out = '';

var spaces = 0;



if (! Advanced)

{

return SwapSpaces(HTMLEscape(s));

}

for (var i = 0; i < s.length; i ++)

{

var newcolor = '';

var e = document.encoder['COL_' + s.charAt(i).toUpperCase()];

var c;



if (e)

{

newcolor = e.value;

}

if (newcolor != oldcolor)

{

if (oldcolor)

{

out += '</span>';

}

if (newcolor)

{

out += '<span style="background-color: ' + newcolor + '">';

}

oldcolor = newcolor;

}

c = HTMLEscape(s.charAt(i));

if (c == ' ')

{

if (spaces == 0)

{

spaces = 1;

}

else

{

spaces = 0;

c = '&nbsp;';

}

}

else

{

spaces = 0;

}

out += c;

}

if (oldcolor)

{

out += '</span>';

}



return out;

}





function Cryptogram(text, lett, changed)

{

var t_in, t_out, i, idx, c, o = '';



t_in = lett;

t_out = changed;

if (lett == lett.toUpperCase())

{

t_in += lett.toLowerCase();

t_out += changed.toLowerCase();

}



for (i = 0; i < text.length; i ++)

{

c = text.charAt(i);

idx = t_in.indexOf(c);

if (idx < 0)

{

o += c;

}

else

{

o += t_out.charAt(idx);

}

}



return o;

}





function upd()

{

var e, unchanged;



unchanged = IsUnchanged(document.encoder.text);

if (unchanged && curr_alphabet == last_alphabet)

{

window.setTimeout('upd()', 100);

return;

}



ResizeTextArea(document.encoder.text);



last_alphabet = curr_alphabet;



e = document.getElementById('recode');



if (document.encoder.text.value == '')

{

e.innerHTML = 'Enter some text and watch it change here.';

}

else

{

e.innerHTML = ColorizeEscape(Cryptogram(document.encoder.text.value, 

Letters, last_alphabet));

}



window.setTimeout('upd()', 100);

}





function LockField(n)

{

var e_chk, e_fld;



e_chk = document.encoder[n];



if (! e_chk)

{

return;

}



n = n.slice(4, n.length);



e_fld = document.encoder['L_' + n];



if (! e_fld)

{

return;

}



e_fld.disabled = e_chk.checked;

}





function Colorize(n, v)

{

var e;



last_alphabet = '';

n = n.slice(4, n.length);

e = document.encoder['L_' + n];



if (e)

{

e.style.backgroundColor = v;

}



e = document.encoder['L_' + n];



if (e_fld)

{

e.style.backgroundColor = v;

}

}





function WriteTable(AdvMode, LettersToSet)

{

var e = document.getElementById('table');

var s = '', i;



Advanced = AdvMode;



s = '<table align=center>';

for (i = 0; i < Letters.length; i ++)

{

var c = Letters.charAt(i);

var cVal = LettersToSet.charAt(i);



if (i % TableColumns == 0)

{

s += '<tr>';

}



s += '<td align=right><b>' + c + ':</b> <input type=text name=L_' +

c + ' value="' + cVal + '" size=2 onblur="RecalcAlphabet()">';



if (Advanced)

{

s += '<br><span style="font-size: 0.8em">&nbsp; Lock: ' +

'<input type=checkbox style="font-size: 0.8em" name="CHK_' + c + 

'" onClick="LockField(this.name)">';

s += '<br><select style="font-size: 0.8em" name="COL_' + c + 

'" onClick="Colorize(this.name, this.value)">';

s += '<option value="white" style="background-color: white">White</option>';

s += '<option value="#FF9999" style="background-color: #FF9999">Red</option>';

s += '<option value="pink" style="background-color: pink">Pink</option>';

s += '<option value="#FF7F50" style="background-color: #FF7F50">Coral</option>';

s += '<option value="#F4A460" style="background-color: #F4A460">Sand</option>';

s += '<option value="#DEB887" style="background-color: #DEB887">Wood</option>';

s += '<option value="#F0E68C" style="background-color: #F0E68C">Khaki</option>';

s += '<option value="yellow" style="background-color: yellow">Yellow</option>';

s += '<option value="#7FFF00" style="background-color: #7FFF00">Lime</option>';

s += '<option value="lightgreen" style="background-color: lightgreen">Lt. Green</option>';

s += '<option value="cyan" style="background-color: cyan">Cyan</option>';

s += '<option value="LightBlue" style="background-color: LightBlue">Lt. Blue</option>';

s += '<option value="aqua" style="background-color: aqua">Aqua</option>';

s += '<option value="violet" style="background-color: violet">Violet</option>';

s += '<option value="#c0c0c0" style="background-color: #c0c0c0">Silver</option>';



s += '</select></span>';

}



s += '</td>';



if (i % TableColumns == TableColumns - 1)

{

s += '</tr>';

}

}



while (i % TableColumns != 0)

{

s += '<td>&nbsp;</td>';



if (i % TableColumns == TableColumns - 1)

{

s += '</tr>';

}



i ++;

}



if (! Advanced)

{

s += '<tr><td align=center colspan=' + TableColumns + '>' +

'<font size="-1">' +

'<a href="#" onclick="WriteTable(true, Letters);">' + 

'Advanced View</a></font></td></tr>';

}



s += '</table>';



e.innerHTML = s;



RecalcAlphabet();

}





function start_update()

{

if (! document.getElementById)

{

alert('Sorry, you need a newer browser.');

return;

}



if ((! document.Util_Loaded) ||

(! document.getElementById('recode')) || 

(! document.getElementById('table')) || 

(! document.getElementById('alphabet')))

{

window.setTimeout('start_update()', 100);

return;

}



WriteTable(false, Letters);



upd();

}



window.setTimeout('start_update()', 100);



// --></script>

<link rel="stylesheet" type="text/css" href="/inc/css/base.css">

<link rel="stylesheet" type="text/css" media="screen,projection" href="/inc/css/normal.css">

<link rel="stylesheet" type="text/css" media="print" href="/inc/css/print.css">

<script src="/inc/js/site.js?1" type="text/javascript"></script>

</head>

<body>

<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">

<tr><Td valign=top>

<div class="r_header">Cryptogram Assistant</div>

<div class="r_headbar">

<div class="r_headbarlinks">

<span id="r_dropdown"><a class="r_link" href="/">Rumkin.com</a></span>&nbsp;<span class="r_arr">&gt;&gt;</span>&nbsp;<a class="r_link" href="/tools/">Web-Based Tools</a>&nbsp;<span class="r_arr">&gt;&gt;</span>&nbsp;<a class="r_link" href="/tools/cipher/">Ciphers and Codes</a></div>

<form method=GET action="http://www.google.com/search" name="googlesearch">

<div class="r_headbarsearch">

Search:

<input type=text name=q size=25 maxlength=255 value="" class="r_headsearch">

<input type=hidden name=domains value="rumkin.com">

<input type=hidden name=sitesearch value="rumkin.com">

</div>

</form>

</div>

<table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td valign=top width="99%"><div class="r_main">



<p>This is a JavaScript 1.2 implementation of a letter-pair replacement

solver, also known as a substitution cipher. This is the kind of puzzle 

where A is N, B is O, C is P, etc. It can also be called a cryptoquip

or a cryptogram in the local newspaper.

<p>To use it, you just define a "key" and the letters in the upper part will

be translated and shown in the lower part. This is only a tool to

help you out &ndash; it can not automatically solve the puzzle for you.

<p>In a related vein, you can check out the <a href="rot13.php">ROT13</a> encoder which

swaps letters from the first half of the alphabet with the second half (and

vice versa), or the <a href="caesar.php">Caesar cipher</a> where you

essentialy "slide" the alphabet over to the left or right.</p>



<form name="encoder" method=post action="#" onsubmit="return false;">

<div id='table'>Loading ...</div>

<p>Quickly swap two letters by typing them in here: <input name=swap

type=text onkeyup="quickswap()" size=3> or reset the letters to

<a href="#" onclick="WriteTable(false, Letters); return false">A-Z</a> or

<a href="#" onclick="WriteTable(false, LettersAtbash); return false">Z-A</a>.</p>

<p><textarea name="text" rows="5" cols="80"></textarea></p>

</form>

<p>Result:</p>

<table border=0 cellpadding=0 cellspacing=0 class="r_box" align="center" style="margin-top: 8px; margin-bottom: 8px;"><tr><td class="r_box"><div id='recode'></div>

</td></tr></table><p><a href="caesar-keyed.php">Keyed Caesar</a> alphabet:

<span id="alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</span><br>

Or a decode alphabet: <span

id="alphabet2">ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</span></p>

<div style="clear: both"></div>

</div>

</td><td valign=top>

<div class="r_backlink">

<a href="index.php"><B>INDEX</B></a>

<br>



<br><a href="affine.php">Affine</a>



<br><a href="atbash.php">Atbash</a>



<br><a href="baconian.php">Baconian</a>



<br><a href="base64.php">Base64</a>



<br><a href="bifid.php">Bifid</a>



<br><a href="caesar.php">Caesar</a>



<br><a href="caesar-keyed.php">-&nbsp;Keyed</a>



<br><a href="rot13.php">-&nbsp;ROT13</a>



<br><a href="coltrans.php">Column&nbsp;Trans.</a>



<br><a href="coltrans-double.php">-&nbsp;Double</a>



<br><a href="ubchi.php">-&nbsp;&Uuml;bchi</a>



<br><a href="cryptogram.php">Cryptogram</a>



<br><a href="gronsfeld.php">Gronsfeld</a>



<br><a href="morse.php">Morse</a>



<br><a href="numbers.php">Numbers</a>



<br><a href="otp.php">One&nbsp;Time&nbsp;Pad</a>



<br><a href="playfair.php">Playfair</a>



<br><a href="railfence.php">Railfence</a>



<br><a href="rotate.php">Rotate</a>



<br><a href="skip.php">Skip</a>



<br><a href="substitution.php">Substitution</a>



<br><a href="vigenere.php">Vigenere</a>



<br><a href="vigenere-keyed.php">-&nbsp;Keyed</a>



<br><a href="vigenere-autokey.php">-&nbsp;Autokey</a>



<br>

<br><a href="cryptogram-solver.php">Crypto&nbsp;Solver</a>



<br><a href="frequency.php">Frequency</a>



<br><a href="manipulate.php">Manipulator</a>

</div>

</td></tr></table>

</td></tr>

<tr><td valign=bottom>

<div class="r_footbar">

<table width="100%" cellpadding=0 cellspacing=0 border=0>

<tr><td class="r_trivia" valign=top>

Orcas (killer whales) kill sharks by torpedoing up into the shark's stomach from underneath, causing the shark's abdomen to rupture.</td><td class="r_info" align=right valign=top>

Tyler Akins &lt;<SCRIPT LANGUAGE="JavaScript" type="text/javascript"><!--

var ML="<f=mtk\"n >oer@./a:uhilcd",MI="0@8C<;1263@DE4:A1DGD@7=<B35D7>F:3691DGD@7=<B35D7>F:30?@9",OT="",j;

for(j=0;j<MI.length;j++){

OT+=ML.charAt(MI.charCodeAt(j)-48);

}document.write(OT);

// --></SCRIPT><NOSCRIPT>Sorry, you need javascript

to view this email address</noscript>&gt;

<br>

<a href="/reference/site/contact.php">Contact Me</a> - 

<a href="/reference/site/legal.php">Legal Info</a>

</td></tr></table>

</div>

</td></tr></table>

<script src="http://www.google-analytics.com/ga.js" type="text/javascript"></script>

<script type="text/javascript">

try {

var pageTracker = _gat._getTracker("UA-7684564-1");

pageTracker._trackPageview();

} catch(err) {}

</script>

</body>

</html>


