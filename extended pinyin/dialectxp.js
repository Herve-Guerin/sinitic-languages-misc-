var cDialect; 
var cRhyme;
var cExplain;
var cPage;

var iDialect;
var iRhyme;
/*
var aHeight;
var aNbRhymeRows;
var aHighRows;
var iNewXOffset;
var iNewYOffset;
*/

// when loading the main page

function initPage() {
cExplain=0;
cDialect='SHH';
iDialect=0;
setEnhancedStyle(document.getElementById(cDialect));
cRhyme='';
iRhyme=-1;
cPage='';
displayExplanations();

/*
var i;

// init the array for getting content pages' heights
// (we can't get them until the focus is given back to the user,
// that is, too late for the newly loaded page)
// used for some compensating vertical scrolling when switching dialects
// inside a same rhyme
// rhyme then dialect

aHeight = new Array(2);
for (i = 0; i < 2; i++) {
	aHeight[i] = new Array(2);
}
aHeight[0][0]=5543; aHeight[0][1]=5425;
aHeight[1][0]=4149; aHeight[1][1]=4224;
*/

/*
// nb of rhyme rows depends only on rhyme
aNbRhymeRows = new Array(2);
aNbRhymeRows[0]=105;
aNbRhymeRows[1]=112;


// high rows depend on rhyme and dialect
// on such combination, is itself an array
// in this array, first value is number of size exceptions,
// following values are the exceptions themselves 
aHighRows = new Array(2);
for (i = 0; i < 2; i++) {
	aHighRows[i] = new Array(2);
}

aHighRows[1][1]=new Array(32);
aHighRows[1][1][0] = 31;
aHighRows[1][1][1] = 2;
aHighRows[1][1][2] = 11;
aHighRows[1][1][3] = 15;
aHighRows[1][1][4] = 33;
aHighRows[1][1][5] = 34;
aHighRows[1][1][6] = 40;
aHighRows[1][1][7] = 41;
aHighRows[1][1][8] = 42;
aHighRows[1][1][9] = 44;
aHighRows[1][1][10] = 46;
aHighRows[1][1][11] = 52;
aHighRows[1][1][12] = 52;
aHighRows[1][1][13] = 65;
aHighRows[1][1][14] = 67;
aHighRows[1][1][15] = 67;
aHighRows[1][1][16] = 68;
aHighRows[1][1][17] = 73;
aHighRows[1][1][18] = 73;
aHighRows[1][1][19] = 73;
aHighRows[1][1][20] = 74;
aHighRows[1][1][21] = 74;
aHighRows[1][1][22] = 75;
aHighRows[1][1][23] = 76;
aHighRows[1][1][24] = 77;
aHighRows[1][1][25] = 85;
aHighRows[1][1][26] = 87;
aHighRows[1][1][27] = 87;
aHighRows[1][1][28] = 87;
aHighRows[1][1][29] = 95;
aHighRows[1][1][30] = 108;
aHighRows[1][1][31] = 109;
*/

}

/*
// getting the effective display row from the real rhyme row
// the first real rhyme row is at 0; same for display row
function displayFromRhymeRow(rhymeRow){
// find the first high row above the rhymerow
// and then the previous one is the basis from where to start
// and get the index as the incremented amount
var nbHighRow = aHighRows[iRhyme][iDialect][0];
var iHighRow = 1;
var highRow = aHighRows[iRhyme][iDialect][iHighRow];
while (highRow < rhymeRow && iHighRow <= nbHighRow) {
highRow = aHighRows[iRhyme][iDialect][iHighRow];
iHighRow = iHighRow + 1;
}
// if highRow == rhymeRow, then highRow and iHighrow are the good basis
// if highRow > rhymeRow, then go back
if (highRow > rhymeRow)
	iHighRow = iHighRow - 1;
// index measures the increament with regard to the direct progression
// more precisely	
displayRow = rhymeRow + iHighRow - 1;
return(displayRow);
}
*/
 



















// display the main page; all references to specific dialect or rhyme
// must disappear

function displayExplanations() {
if (cExplain == 0) {
    if (cRhyme != '') {
		setNormalStyle(document.getElementById(cRhyme));
		cRhyme='';
		}
	setEnhancedStyle(document.getElementById('Explain'));
	document.getElementById('TabZone').style.visibility='hidden';
	document.getElementById('VoidTabZone').style.visibility='visible';
	document.getElementById('HeaderZone').src = 'void.htm';
	document.getElementById('HeaderZone').style.visibility='hidden';
	document.getElementById('VoidHeaderZone').style.visibility='visible';
//	iNewXOffset=0;
//	iNewYOffset=0;
	cPage='explanations.htm';
	document.getElementById('Fangyan').src = cPage;
	cExplain=1;
	}
}


function displayPageLink() {
cPage = cDialect+'_'+cRhyme+'.htm';
document.getElementById('Fangyan').src = cPage;
}

// when clicking on a dialect tab (Shanghai, Guangzhou, ...)

function displayPageFromTab(dialect, indexDialect) {
if (dialect != cDialect) {
//var previousHeight = document.getElementById('Fangyan').contentWindow.document.height;
//	var previousHeight = aHeight[iRhyme][iDialect];	
	var currentYOffset = window.pageYOffset;
	var currentXOffset = window.pageXOffset;
	setNormalStyle(document.getElementById(cDialect));
	cDialect = dialect;
	iDialect = indexDialect;
	setEnhancedStyle(document.getElementById(cDialect));
//	var newHeight = aHeight[iRhyme][iDialect];	
//	iNewXOffset = currentXOffset;
//	iNewYOffset = (newHeight / previousHeight) * currentYOffset;
	displayPageLink();
	}
}

function scrollBack() {
//window.scrollTo(iNewXOffset, iNewYOffset);
}

// when clicking on a Rhyme; elements relative to dialects must appear if 
// from explanations

function displayPageFromMenu(rhyme, indexRhyme) {
if (cExplain == 1) {
	setNormalStyle(document.getElementById('Explain'));
	document.getElementById('VoidTabZone').style.visibility='hidden';
	document.getElementById('TabZone').style.visibility='visible';
	document.getElementById('VoidHeaderZone').style.visibility='hidden';
	document.getElementById('HeaderZone').style.visibility='visible';
	document.getElementById('HeaderZone').src = 'header.htm';	
	cExplain=0;
	}
if (rhyme != cRhyme) {
	if (cRhyme != '') {
		setNormalStyle(document.getElementById(cRhyme));
		}
	cRhyme = rhyme;
	iRhyme = indexRhyme;
	setEnhancedStyle(document.getElementById(cRhyme));
//	iNewXOffset=0;
//	iNewYOffset=0;
	displayPageLink();
	}
}




function setEnhancedStyle(elemMenu) {
elemMenu.style.color='green';
elemMenu.style.fontWeight='bold';
elemMenu.style.fontSize='large';
elemMenu.style.textDecoration='none';
}

function setNormalStyle(elemMenu) {
elemMenu.style.color='blue';
elemMenu.style.fontWeight='normal';
elemMenu.style.fontSize='medium';
elemMenu.style.textDecoration='underline';
}
