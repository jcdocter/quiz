/*function afmelden()
{
	var reactie = confirm("wilt u zich afmelden?");
	if(reactie == true)
	{
		alert("u wordt afgemeld!!!");
		
	}
}

 function rooster(vandaag)
 {
	 var maandag = confirm("wilt u het rooster zien van maandag");
	 var dinsdag = confirm("wilt u het rooster zien van dinsdag");
	 var woensdag = confirm("wilt u het rooster zien van woensdag");
	 var donderdag = confirm("wilt u het rooster zien van donderdag");
	 var vrijdag = confirm("wilt u het rooster zien van vrijdag");
	 if(maandag == true){
		 document.write("Maandag:" + "<br />" + "blok 1 bijles php" + "<br />" + "blok 2 nederlands" + "<br />");
	 }
	 if(dinsdag == true){
		 document.write("<br />dinsdag:" + "<br />" + "blok 1 javascript" + "<br />" + "blok 2 rekenen" + "<br />" + "blok 3 bijles php" + "<br />");
	 }	 
	 
	 if(woensdag == true){
		 document.write("<br />woensdag:" + "<br />" + "blok 1 Bugerschap" + "<br />" + "blok 2 javascript" + "<br />" + "blok 3 LOB" + "<br />" + "blok 4 javascript" + "<br />");
	 }	 
	 
	  if(donderdag == true){
		 document.write("<br />donderdag:" + "<br />" + "blok 1 bijles php" + "<br />" + "blok 2 software Verdieping" + "<br />");
	 }	 
	 
	  if(vrijdag == true){
		 document.write("<br />vrijdag:" + "<br />" + "blok 1 software Verdieping" + "<br />" + "blok 2 nederlands" + "<br />" + "blok 3 engels");
	 }
 }*/
 var vraag = new Array();
var correctantwoord = new Array();

vraag[1] = "8 x 4 = ?";
vraag[2] = "8 / 4 = ?";
vraag[3] = "9 x 4 = ?";
vraag[4] = "16 + 100 = ?";
vraag[5] = "16 x 9 = ?";
vraag[6] = "365 - 127 = ?";
vraag[7] = "9 x 6 = ?";
vraag[8] = "40 / 10 = ?";
vraag[9] = "16 / 4 = ?";
vraag[10] = "30 / 5 = ?";

correctantwoord[1] = "32";
correctantwoord[2] = "2";
correctantwoord[3] = "64";
correctantwoord[4] = "116";
correctantwoord[5] = "144";
correctantwoord[6] = "238";
correctantwoord[7] = "54";
correctantwoord[8] = "4";
correctantwoord[9] = "4";
correctantwoord[10] = "6";

function toets(index) {	
	 antwoord = prompt(vraag[index]);
	if(antwoord == correctantwoord [index]){
		return("Correct!!!")
	}else{
		return("Fout!!!")
	}
	var punten = 0;
	if(antwoord == correctantwoord [index]){
		punten += 1;
	}else{
		punten +=0;
	}
}