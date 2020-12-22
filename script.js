var boiteDeDialogue = document.getElementById("debugJeu");
var boutonPasser = document.getElementById("boutonPasser");
var tourAtk = 0;
var tourDef = 0;
var tourSpe = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------JOUEURS---------------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-------------------------JOUEUR 1 // VAELIN-----------------------
var boutonAttaquerJ1 = document.getElementById("attaquerJ1");
var boutonDefendreJ1 = document.getElementById("defendreJ1");
var boutonSpecialJ1  = document.getElementById("specialJ1");
var pvVaelin  = 100;
var pmVaelin  = 60;
var atqVaelin = 30;
var defVaelin = 20;
var speVaelin = 50;
var coutSortVaelin = 15;

//-------------------------JOUEUR 2 // FRENTIS-----------------------
var boutonAttaquerJ2 = document.getElementById("attaquerJ2");
var boutonDefendreJ2 = document.getElementById("defendreJ2");
var boutonSpecialJ2  = document.getElementById("specialJ2");
var pvFrentis  = 90;
var pmFrentis  = 90;
var atqFrentis = 20;
var defFrentis = 40;
var speFrentis = 50;
var coutSortVaelin = 30;

//-------------------------JOUEUR 3 // LYRNA-----------------------
var boutonAttaquerJ3 = document.getElementById("attaquerJ3");
var boutonDefendreJ3 = document.getElementById("defendreJ3");
var boutonSpecialJ3  = document.getElementById("specialJ3");
var pvLyrna  = 110;
var pmLyrna  = 50;
var atqLyrna = 40;
var defLyrna = 40;
var speLyrna = 50;
var coutSortLyrna = 15;

//-------------------------JOUEUR 4 // CAENIS-----------------------
var boutonAttaquerJ4 = document.getElementById("attaquerJ4");
var boutonDefendreJ4 = document.getElementById("defendreJ4");
var boutonSpecialJ4  = document.getElementById("specialJ4");
var pvCaenis  = 150;
var pmCaenis  = 60;
var atqCaenis = 15;
var defCaenis = 50;
var speCaenis = 50;
var coutSortCaenis = 15;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------MONSTRES--------------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-------------------------MONSTRE 1-----------------------
var infoBulleM1= document.getElementById("caracMonstre1");
var imageMonstre1= document.getElementById("monstre1");
var monstre1PV= document.getElementById("monstre1PV");
monstre1PV.value = 80;
monstre1PV.innerHTML="PV :"+ monstre1PV.value;
var atqMonstre1 = 30;
var defMonstre1 = 20;

//-------------------------MONSTRE 2-----------------------
var infoBulleM2= document.getElementById("caracMonstre2");
var monstre2PV= document.getElementById("monstre2PV");
var imageMonstre2= document.getElementById("monstre2");
monstre2PV.value = 80;
monstre2PV.innerHTML="PV :"+ monstre2PV.value;
var atqMonstre2 = 30;
var defMonstre2 = 20;

//-------------------------MONSTRE 3-----------------------
var infoBulleM3= document.getElementById("caracMonstre3");
var monstre3PV= document.getElementById("monstre3PV");
var imageMonstre3= document.getElementById("monstre3");
monstre3PV.value = 80;
monstre3PV.innerHTML="PV :"+ monstre3PV.value;
var atqMonstre3 = 30;
var defMonstre3 = 20;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------FONCTIONS-------------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function verifMana(){
	if (pmVaelin.value < coutSortVaelin){
		boutonSpecialJ1.style.opacity = "0.5";
		boutonSpecialJ1.value = "Non disponible";
		boutonSpecialJ1.disabled = true;
		textAction.innerHTML = "Vous n'avez pas le mana nécessaire.";
  }
  if (pmFrentis.value < coutSortFrentis){
		boutonSpecialJ2.style.opacity = "0.5";
		boutonSpecialJ2.value = "Non disponible";
		boutonSpecialJ2.disabled = true;
		textAction.innerHTML = "Vous n'avez pas le mana nécessaire.";
  }
  if (pmLyrna.value < coutSortLyrna){
    boutonSpecialJ3.style.opacity = "0.5";
		boutonSpecialJ3.value = "Non disponible";
		boutonSpecialJ3.disabled = true;
		textAction.innerHTML = "Vous n'avez pas le mana nécessaire.";
  }
  if (pmCaenis.value < coutSortCaenis){
		boutonSpecialJ4.style.opacity = "0.5";
		boutonSpecialJ4.value = "Non disponible";
		boutonSpecialJ4.disabled = true;
		textAction.innerHTML = "Vous n'avez pas le mana nécessaire.";
	}
}
//----------------------SURVOL CARAC. MONSTRES----------------//

imageMonstre1.onmouseover=function() {
  infoBulleM1.style.opacity="0.5";
  imageMonstre1.onmouseout=function(){
    infoBulleM1.style.opacity="0";
  }
}
imageMonstre2.onmouseover=function() {
  infoBulleM2.style.opacity="0.5";
  imageMonstre2.onmouseout=function(){
    infoBulleM2.style.opacity="0";
  }
}
imageMonstre3.onmouseover=function() {
  infoBulleM3.style.opacity="0.5";
  imageMonstre3.onmouseout=function(){
    infoBulleM3.style.opacity="0";
  }
}

//-------------------------INTER. BOUTONS---------------------//

boutonAttaquerJ1.onclick=vaelinAttaquer;
boutonDefendreJ1.onclick=vaelinDefendre;
boutonSpecialJ1.onclick=vaelinSpecial;

boutonAttaquerJ2.onclick=frentisAttaquer;
boutonDefendreJ2.onclick=frentisDefendre;
boutonSpecialJ2.onclick=frentisSpecial;

boutonAttaquerJ3.onclick=lyrnaAttaquer;
boutonDefendreJ3.onclick=lyrnaDefendre;
boutonSpecialJ3.onclick=lyrnaSpecial;

boutonAttaquerJ4.onclick=caenisAttaquer;
boutonDefendreJ4.onclick=caenisDefendre;
boutonSpecialJ4.onclick=caenisSpecial;

//////////////////////////////////////////////////////////////////
//------------------------------VAELIN--------------------------//
//////////////////////////////////////////////////////////////////
function vaelinAttaquer(){
  if(boutonAttaquerJ1.disabled == false){
    monstre1PV.value-= atqVaelin;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
    boiteDeDialogue.innerHTML = "Vous avec infliger "+atqVaelin+" points de dégâts au monstre";
    boutonAttaquerJ1.style.opacity = "0.5";
    boutonAttaquerJ1.value = "Non disponible";
    boutonAttaquerJ1.disabled = true; // on empeche l'action sur le bouton une fois utilisé
  }
}
function vaelinDefendre(){
  if (boutonDefendreJ1 == false){
		atqMonstre1 = atqMonstre1 * 0.7;
		defVaelin.value += 15;
		defVaelin.innerHTML = defVaelin.value;
		boutonDefendreJ1.style.opacity = "0.5";
		boutonDefendreJ1.value = "Non disponible";
		boutonDefendreJ1.disabled = true;
		textAction.innerHTML = "Votre sort vous protège de 30% des attaques du monstre.";
		
		boutonAttaquerJ1.disabled = true;
		boutonSpecialJ1.disabled = true;
		boutonPasser.disabled = false;
		boutonPasser.style.opacity = "1";
		boutonAttaquerJ1.style.opacity = "0.5";
		boutonSpecialJ1.opacity = "0.5";
	}	
}

function vaelinSpecial(){//spécial : Charme de Pan ,  baisse l'atq des ennemis
  function verifMana();

}

//////////////////////////////////////////////////////////////////
//------------------------------FRENTIS-------------------------//
//////////////////////////////////////////////////////////////////
function frentisAttaquer(){
    monstre1PV.value-= atqFrentis;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
    boiteDeDialogue.innerHTML = "Vous avec infliger "+atqFrentis+" points de dégâts au monstre";
    boutonAttaquerJ2.style.opacity = "0.5";
    boutonAttaquerJ2.value = "Non disponible";
    boutonAttaquerJ2.disabled = true; // on empeche l'action sur le bouton une fois utilisé
    boutonDefendreJ2.value = "Non disponible";
    boutonDefendreJ2.disabled = true;// on empeche l'action sur le bouton une fois utilisé
    boutonSpecialJ2.value ="Non disponible";
    boutonSpecialJ2.disabled =true;// on empeche l'action sur le bouton une fois utilisé

function frentisDefendre(){
  if (boutonDefendreJ2 == false){
		atqMonstre1 = atqMonstre1 * 0.7;
		defFrentis.value += 15;
		defFrentis.innerHTML = defFrentis.value;
		boutonDefendreJ2.style.opacity = "0.5";
		boutonDefendreJ2.value = "Non disponible";
		boutonDefendreJ2.disabled = true;
		textAction.innerHTML = "Votre sort vous protège de 30% des attaques du monstre.";
		
		boutonAttaquerJ2.disabled = true;
		boutonSpecialJ2.disabled = true;
		boutonPasser.disabled = false;
		boutonPasser.style.opacity = "1";
		boutonAttaquerJ2.style.opacity = "0.5";
		boutonSpecialJ2.opacity = "0.5";
	}	
}
function frentisSpecial(){}



//////////////////////////////////////////////////////////////////
//------------------------------LYRNA---------------------------//
//////////////////////////////////////////////////////////////////
function lyrnaAttaquer(){
    monstre1PV.value-= atqLyrna;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
    boutonAttaquerJ3.style.opacity = "0.5";
    boutonAttaquerJ3.value = "Non disponible";
    boutonAttaquerJ3.disabled = true; // on empeche l'action sur le bouton une fois utilisé
    boutonDefendreJ3.value = "Non disponible";
    boutonDefendreJ3.disabled = true;// on empeche l'action sur le bouton une fois utilisé
    boutonSpecialJ3.value ="Non disponible";
    boutonSpecialJ3.disabled =true;// on empeche l'action sur le bouton une fois utilisé
    boiteDeDialogue.innerHTML = "Vous avec infliger "+atqLyrna+" points de dégâts au monstre";
}
function lyrnaDefendre(){}
function lyrnaSpecial(){}


//////////////////////////////////////////////////////////////////
//------------------------------CAENIS--------------------------//
//////////////////////////////////////////////////////////////////
function caenisAttaquer(){
    monstre1PV.value-= atqCaenis;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
    boiteDeDialogue.innerHTML = "Vous avec infliger "+atqCaenis+" points de dégâts au monstre";
    boutonAttaquerJ4.style.opacity = "0.5";
    boutonAttaquerJ4.value = "Non disponible";
    boutonAttaquerJ4.disabled = true; // on empeche l'action sur le bouton une fois utilisé
    boutonDefendreJ4.value = "Non disponible";
    boutonDefendreJ4.disabled = true;// on empeche l'action sur le bouton une fois utilisé
    boutonSpecialJ4.value ="Non disponible";
    boutonSpecialJ4.disabled =true;// on empeche l'action sur le bouton une fois utilisé
}

function caenisDefendre(){}
function caenisSpecial(){}



function choisirMonstre(){
  choixMonstre=0;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------BOUCLE PRINCIPALE-----------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Fonction reinitialise bouton //
function enableButton (){
//-------------------------------------------------------------------------------//
//--------------------------------------ATTAQUER---------------------------------//
//-------------------------------------------------------------------------------//
	if (tourAtk == 0){
        //----------VAELIN---------------//
        boutonAttaquerJ1.disabled = false;
        boutonAttaquerJ1.value = "Attack";
        boutonAttaquerJ1.style.opacity = "1";
        //----------FRENTIS--------------//
        boutonAttaquerJ2.disabled = false;
        boutonAttaquerJ2.value = "Attack";
        boutonAttaquerJ2.style.opacity = "1";
        //----------LYRNA----------------//
        boutonAttaquerJ3.disabled = false;
        boutonAttaquerJ3.value = "Attack";
        boutonAttaquerJ3.style.opacity = "1";
        //----------CAENTIS--------------//
        boutonAttaquerJ4.disabled = false;
        boutonAttaquerJ4.value = "Attack";
        boutonAttaquerJ4.style.opacity = "1";
  }
	else{
        //----------VAELIN---------------//
        boutonAttaquerJ1.style.opacity = "0.5";
        boutonAttaquerJ1.value = "Non disponible";
        boutonAttaquerJ1.disabled = true;
        //----------FRENTIS--------------//
        boutonAttaquerJ2.style.opacity = "0.5";
        boutonAttaquerJ2.value = "Non disponible";
        boutonAttaquerJ2.disabled = true;
        //----------LYRNA----------------//
        boutonAttaquerJ3.style.opacity = "0.5";
        boutonAttaquerJ3.value = "Non disponible";
        boutonAttaquerJ3.disabled = true;
        //----------CAENTIS--------------//
        boutonAttaquerJ4.style.opacity = "0.5";
        boutonAttaquerJ4.value = "Non disponible";
        boutonAttaquerJ4.disabled = true;
  }
//-------------------------------------------------------------------------------//
//--------------------------------------DEFENDRE---------------------------------//
//-------------------------------------------------------------------------------//
	if (tourDef == 0){
        //----------VAELIN---------------//
        boutonDefendreJ1.disabled = false;
        boutonDefendreJ1.value = "Defendre";
        boutonDefendreJ1.style.opacity = "1";
        //----------FRENTIS--------------//
        boutonDefendreJ2.disabled = false;
        boutonDefendreJ2.value = "Defendre";
        boutonDefendreJ2.style.opacity = "1";
        //----------LYRNA----------------//
        boutonDefendreJ3.disabled = false;
        boutonDefendreJ3.value = "Defendre";
        boutonDefendreJ3.style.opacity = "1";
        //----------CAENTIS--------------//
        boutonDefendreJ4.disabled = false;
        boutonDefendreJ4.value = "Defendre";
        boutonDefendreJ4.style.opacity = "1";
  }
	else{
        //----------VAELIN---------------//
        boutonDefendreJ1.style.opacity = "0.5";
        boutonDefendreJ1.value = "Non disponible";
        boutonDefendreJ1.disabled = true;
        //----------FRENTIS--------------//
        boutonDefendreJ2.style.opacity = "0.5";
        boutonDefendreJ2.value = "Non disponible";
        boutonDefendreJ2.disabled = true;
        //----------LYRNA----------------//
        boutonDefendreJ3.style.opacity = "0.5";
        boutonDefendreJ3.value = "Non disponible";
        boutonDefendreJ3.disabled = true;
        //----------CAENTIS--------------//
        boutonDefendreJ4.style.opacity = "0.5";
        boutonDefendreJ4.value = "Non disponible";
        boutonDefendreJ4.disabled = true;
  }
//-------------------------------------------------------------------------------//
//--------------------------------------SPECIAL----------------------------------//
//-------------------------------------------------------------------------------//
	if(tourSpe == 0){
        //----------VAELIN---------------//
        boutonSpecialJ1.disabled = false;
        boutonSpecialJ1.value = "Special";
        boutonSpecialJ1.style.opacity = "1";
        //----------FRENTIS--------------//
        boutonSpecialJ2.disabled = false;
        boutonSpecialJ2.value = "Special";
        boutonSpecialJ2.style.opacity = "1";
        //----------LYRNA----------------//
        boutonSpecialJ3.disabled = false;
        boutonSpecialJ3.value = "Special";
        boutonSpecialJ3.style.opacity = "1";
        //----------CAENTIS--------------//
        boutonSpecialJ4.disabled = false;
        boutonSpecialJ4.value = "Special";
        boutonSpecialJ4.style.opacity = "1";
  }
	else{
        //----------VAELIN---------------//
        boutonSpecialJ1.style.opacity = "0.5";
        boutonSpecialJ1.value = "Non disponible";
        boutonSpecialJ1.disabled = true;
        //----------FRENTIS--------------//
        boutonSpecialJ2.style.opacity = "0.5";
        boutonSpecialJ2.value = "Non disponible";
        boutonSpecialJ2.disabled = true;
        //----------LYRNA----------------//
        boutonSpecialJ3.style.opacity = "0.5";
        boutonSpecialJ3.value = "Non disponible";
        boutonSpecialJ3.disabled = true;
        //----------CAENTIS--------------//
        boutonSpecialJ4.style.opacity = "0.5";
        boutonSpecialJ4.value = "Non disponible";
        boutonSpecialJ4.disabled = true;
  }	
	boutonPasser.disabled = true;
	boutonPasser.style.opacity = "0.5";
}

// Fonction compte tour //

function compteTour(){
if (tourAtk > 0){
		tourAtk += 1;
		if (tourAtk == 2){
			tourAtk = 0;
		}
	}		
	if(tourDef > 0){
		tourDef += 1;
		if(tourDef == 2){
      tourDef = 0;
      defVaelin.value =20;
      defVaelin.innerHTML = 20;

      defFrentis.value =40;
      defFrentis.innerHTML = 40;

      defLyrna.value =40;
      defLyrna.innerHTML = 40;

      defCaenis.value =50;
      defCaenis.innerHTML = 50;
      
      atqMonstre1 = 30;
      atqMonstre2 = 30;
      atqMonstre3 = 30;	
		}
	}
	if(tourSpe > 0){
		tourSpe +=1;
		if(tourSpe == 2){
			tourSpe = 0;
		}	
	}
}
}