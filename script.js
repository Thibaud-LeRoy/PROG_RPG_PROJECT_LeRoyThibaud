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

//-------------------------JOUEUR 2 // FRENTIS-----------------------
var boutonAttaquerJ2 = document.getElementById("attaquerJ2");
var boutonDefendreJ2 = document.getElementById("defendreJ2");
var boutonSpecialJ2  = document.getElementById("specialJ2");
var pvFrentis  = 90;
var pmFrentis  = 90;
var atqFrentis = 20;
var defFrentis = 40;

//-------------------------JOUEUR 3 // LYRNA-----------------------
var boutonAttaquerJ3 = document.getElementById("attaquerJ3");
var boutonDefendreJ3 = document.getElementById("defendreJ3");
var boutonSpecialJ3  = document.getElementById("specialJ3");
var pvLyrna  = 110;
var pmLyrna  = 50;
var atqLyrna = 40;
var defLyrna = 40;

//-------------------------JOUEUR 4 // CAENIS-----------------------
var boutonAttaquerJ4 = document.getElementById("attaquerJ4");
var boutonDefendreJ4 = document.getElementById("defendreJ4");
var boutonSpecialJ4  = document.getElementById("specialJ4");
var pvCaenis  = 150;
var pmCaenis  = 60;
var atqCaenis = 15;
var defCaenis = 50;


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
monstre1PV.value-= atqVaelin;
monstre1PV.innerHTML="PV : "+ monstre1PV.value;
}
function vaelinDefendre(){

}
function vaelinSpecial(){//spécial : Charme de Pan

}

//////////////////////////////////////////////////////////////////
//------------------------------FRENTIS-------------------------//
//////////////////////////////////////////////////////////////////
function frentisAttaquer(){
    monstre1PV.value-= atqJoueur1;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
}
function frentisDefendre(){}
function frentisSpecial(){}



//////////////////////////////////////////////////////////////////
//------------------------------LYRNA---------------------------//
//////////////////////////////////////////////////////////////////
function lyrnaAttaquer(){
    monstre1PV.value-= atqJoueur1;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
}
function lyrnaDefendre(){}
function lyrnaSpecial(){}




//////////////////////////////////////////////////////////////////
//------------------------------CAENIS--------------------------//
//////////////////////////////////////////////////////////////////
function caenisAttaquer(){
    monstre1PV.value-= atqJoueur1;
    monstre1PV.innerHTML="PV : "+ monstre1PV.value;
}
function caenisDefendre(){}
function caenisSpecial(){}



function choisirMonstre(){
  choixMonstre=0
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------BOUCLE PRINCIPALE-----------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
