// Elemental
// Made by Dayne
// Version 0.0.050
// Last updated: 13/02/2014

// - Subatomic Particles
//FP-Units
var upquarks = 0; var downquarks = 0; var electrons = 0;
//FP-Generators
var upquarkgens = 0; var upquarkgenlvl = 1; var upquarkgencost = 10; var upquarkgenps = 0; 
var downquarkgens = 0; var downquarkgenlvl = 1; var downquarkgencost = 10; var downquarkgenps = 0; 
var electrongens = 0; var electrongenlvl = 1; var electrongencost = 10;var electrongenps = 0;
//SP-Units
var protons = 0; var neutrons = 0;
//SP-Generators
var protongens = 0; var protongenlvl = 1; var protongencost = 10; var protongenps = 0;
var neutrongens = 0; var neutrongenlvl = 1; var neutrongencost = 10; var neutrongenps = 0;

// - Atoms
//Units
var hydrogen1s = 0; var helium4s = 0; var lithium7s = 0; var beryllium9s = 0; var boron1s = 0; 
var carbon1s = 0; var nitrogen1s = 0; var oxygen1s = 0; var fluorine1s = 0; var neon1s = 0;
//Generators
var hydrogen1gens = 0; var hydrogen1genlvl = 1; var hydrogen1gencost = 10; var hydrogen1genps = 0;
var helium4gens = 0; var helium4genlvl = 1; var helium4gencost = 10; var helium4genps = 0;
var lithium7gens = 0; var lithium7genlvl = 1; var lithium7gencost = 10; var lithium7genps = 0;
var beryllium9gens = 0; var beryllium9genlvl = 1; var beryllium9gencost = 10; var beryllium9genps = 0;
var boron1gens = 0; var boron1genlvl = 1; var boron1gencost = 10; var boron1genps = 0;
var carbon1gens = 0; var carbon1genlvl = 1; var carbon1gencost = 10; var carbon1genps = 0;
var nitrogen1gens = 0; var nitrogen1genlvl = 1; var nitrogen1gencost = 10; var nitrogen1genps = 0;
var oxygen1gens = 0; var oxygen1genlvl = 1; var oxygen1gencost = 10; var oxygen1genps = 0;
var fluorine1gens = 0; var fluorine1genlvl = 1; var fluorine1gencost = 10; var fluorine1genps = 0;
var neon1gens = 0; var neon1genlvl = 1; var neon1gencost = 10; var neon1genps = 0;


// - Molecules
//Units
var h2os = 0;
//Generators
var h20gens = 0; var h20genlvl = 1; var h20gencost = 10; var h20genps = 0;
//Stats
var fpclick = 1; var pclick = 1; var aclick = 1; var mclick = 1; 
// - Generators
function Pauto(){
	upquarks = upquarks + upquarkgens*upquarkgenlvl;
	document.getElementById("upquarks").innerHTML = upquarks;
	downquarks = downquarks + downquarkgens*downquarkgenlvl;
	document.getElementById("downquarks").innerHTML = downquarks;
	electrons = electrons + electrongens*electrongenlvl;
	document.getElementById("electrons").innerHTML = electrons;
	if(upquarks >= ((protongens*protongenlvl)*2) && downquarks >= (protongens*protongenlvl)){
        protons = protons + (protongens*protongenlvl);
				upquarks = upquarks - ((protongens*protongenlvl)*2);
				downquarks = downquarks - (protongens*protongenlvl);
				document.getElementById('upquarks').innerHTML = upquarks;
				document.getElementById('downquarks').innerHTML = downquarks;
				document.getElementById('protons').innerHTML = protons;
	}
	if(upquarks >= (neutrongens*neutrongenlvl) && downquarks >= ((neutrongens*neutrongenlvl)*2)){
        neutrons = neutrons + (neutrongens*neutrongenlvl);
				upquarks = upquarks - (neutrongens*neutrongenlvl);
				downquarks = downquarks - ((neutrongens*neutrongenlvl)*2);
				document.getElementById('upquarks').innerHTML = upquarks;
				document.getElementById('downquarks').innerHTML = downquarks;
				document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function Aauto(){
	if(protons >= ((hydrogen1gens*hydrogen1genlvl)+((helium4gens*helium4genlvl)*2)
	+((lithium7gens*lithium7genlvl)*3)+((beryllium9gens*beryllium9genlvl)*4)
	+((boron1gens*boron1genlvl)*5)+((carbon1gens*carbon1genlvl)*6)
	+((nitrogen1gens*nitrogen1genlvl)*7)+((oxygen1gens*oxygen1genlvl)*8)
	+((fluorine1gens*fluorine1genlvl)*9)+((neon1gens*neon1genlvl)*10)
	)
	&& electrons >= ((hydrogen1gens*hydrogen1genlvl)+((helium4gens*helium4genlvl)*2)
	+((lithium7gens*lithium7genlvl)*3)+((beryllium9gens*beryllium9genlvl)*4)
	+((boron1gens*boron1genlvl)*5)+((carbon1gens*carbon1genlvl)*6)
	+((nitrogen1gens*nitrogen1genlvl)*7)+((oxygen1gens*oxygen1genlvl)*8)
	+((fluorine1gens*fluorine1genlvl)*9)+((neon1gens*neon1genlvl)*10)
	)
	&& neutrons >= (((helium4gens*helium4genlvl)*2)
	+((lithium7gens*lithium7genlvl)*4)+((beryllium9gens*beryllium9genlvl)*5)
	+((boron1gens*boron1genlvl)*6)+((carbon1gens*carbon1genlvl)*6)
	+((nitrogen1gens*nitrogen1genlvl)*7)+((oxygen1gens*oxygen1genlvl)*8)
	+((fluorine1gens*fluorine1genlvl)*10)+((neon1gens*neon1genlvl)*10)
	)){
				hydrogen1s = hydrogen1s + hydrogen1gens*hydrogen1genlvl;
				helium4s = helium4s + helium4gens*helium4genlvl;
				lithium7s = lithium7s + lithium7gens*lithium7genlvl;
				beryllium9s = beryllium9s + beryllium9gens*beryllium9genlvl;
				boron1s = boron1s + boron1gens*boron1genlvl;
				carbon1s = carbon1s + carbon1gens*carbon1genlvl;
				nitrogen1s = nitrogen1s + nitrogen1gens*nitrogen1genlvl;
				oxygen1s = oxygen1s + oxygen1gens*oxygen1genlvl;
				fluorine1s = fluorine1s + fluorine1gens*fluorine1genlvl;
				neon1s = neon1s + neon1gens*neon1genlvl;
				protons = protons - ((hydrogen1gens*hydrogen1genlvl)+((helium4gens*helium4genlvl)*2)+((lithium7gens*lithium7genlvl)*3)+((beryllium9gens*beryllium9genlvl)*4)+((boron1gens*boron1genlvl)*5)+((carbon1gens*carbon1genlvl)*6)+((nitrogen1gens*nitrogen1genlvl)*7)+((oxygen1gens*oxygen1genlvl)*8)+((fluorine1gens*fluorine1genlvl)*9)+((neon1gens*neon1genlvl)*10)
				);
				electrons = electrons - ((hydrogen1gens*hydrogen1genlvl)+((helium4gens*helium4genlvl)*2)+((lithium7gens*lithium7genlvl)*3)+((beryllium9gens*beryllium9genlvl)*4)+((boron1gens*boron1genlvl)*5)+((carbon1gens*carbon1genlvl)*6)+((nitrogen1gens*nitrogen1genlvl)*7)+((oxygen1gens*oxygen1genlvl)*8)+((fluorine1gens*fluorine1genlvl)*9)+((neon1gens*neon1genlvl)*10)
				);
				neutrons = neutrons - (((helium4gens*helium4genlvl)*2)+((lithium7gens*lithium7genlvl)*4)+((beryllium9gens*beryllium9genlvl)*5)+((boron1gens*boron1genlvl)*6)+((carbon1gens*carbon1genlvl)*6)+((nitrogen1gens*nitrogen1genlvl)*7)+((oxygen1gens*oxygen1genlvl)*8)+((fluorine1gens*fluorine1genlvl)*10)+((neon1gens*neon1genlvl)*10)
				);
				document.getElementById('protons').innerHTML = protons;
				document.getElementById('electrons').innerHTML = electrons;
				document.getElementById('neutrons').innerHTML = neutrons;
				document.getElementById('hydrogen1s').innerHTML = hydrogen1s;
				document.getElementById('helium4s').innerHTML = helium4s;
				document.getElementById('lithium7s').innerHTML = lithium7s;
				document.getElementById('beryllium9s').innerHTML = beryllium9s;
				document.getElementById('boron1s').innerHTML = boron1s;
				document.getElementById('carbon1s').innerHTML = carbon1s;
				document.getElementById('nitrogen1s').innerHTML = nitrogen1s;
				document.getElementById('oxygen1s').innerHTML = oxygen1s;
				document.getElementById('fluorine1s').innerHTML = fluorine1s;
				document.getElementById('neon1s').innerHTML = neon1s;
	}
}
function Mauto(){
	if(hydrogen1s >= ((h20gens*h20genlvl)*2) && oxygen1s >= (h20gens*h20genlvl)){
				h20s = h20s + h20gens*h20genlvl;
				hydrogen1s = hydrogen1s - ((h20gens*h20genlvl)*2);
				oxygen1s = oxygen1s - (h20gens*h20genlvl);
				document.getElementById('hydrogen1s').innerHTML = hydrogen1s;
				document.getElementById('oxygen1s').innerHTML = oxygen1s;
				document.getElementById('h20s').innerHTML = h20s;
	};
};

// - Particles
//Manual Creation
function upquarkclick(){
    upquarks = upquarks + fpclick;
    document.getElementById("upquarks").innerHTML = upquarks;
}
function downquarkclick(){
    downquarks = downquarks + fpclick;
    document.getElementById("downquarks").innerHTML = downquarks;
}
function electronclick(){
    electrons = electrons + fpclick;
    document.getElementById("electrons").innerHTML = electrons;
}
function buyupquarkgen(){
    var upquarkgencost = Math.floor(10 * Math.pow(1.025,upquarkgens));
    if(upquarks >= upquarkgencost){
        upquarkgens++;
        upquarks = upquarks - upquarkgencost;
        document.getElementById('upquarkgens').innerHTML = upquarkgens;
        document.getElementById('upquarks').innerHTML = upquarks;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,upquarkgens));
    document.getElementById('upquarkgencost').innerHTML = nextcost;
}
function buydownquarkgen(){
    var downquarkgencost = Math.floor(10 * Math.pow(1.025,downquarkgens));
    if(downquarks >= downquarkgencost){
        downquarkgens++;
        downquarks = downquarks - downquarkgencost;
        document.getElementById('downquarkgens').innerHTML = downquarkgens;
        document.getElementById('downquarks').innerHTML = downquarks;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,downquarkgens));
    document.getElementById('downquarkgencost').innerHTML = nextcost;
}
function buyelectrongen(){
    var electrongencost = Math.floor(10 * Math.pow(1.025,electrongens));
    if(electrons >= electrongencost){
        electrongens++;
        electrons = electrons - electrongencost;
        document.getElementById('electrongens').innerHTML = electrongens;
        document.getElementById('electrons').innerHTML = electrons;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,electrongens));
    document.getElementById('electrongencost').innerHTML = nextcost;
}
//Automatic Generation
function protonclick(){
    if(upquarks >= 2 && downquarks >= 1){
        protons++;
				upquarks = upquarks - 2;
				downquarks--;
				document.getElementById('upquarks').innerHTML = upquarks;
				document.getElementById('downquarks').innerHTML = downquarks;
				document.getElementById('protons').innerHTML = protons;
		}
}
function neutronclick(){
    if(upquarks >= 1 && downquarks >= 2){
        neutrons++;
				downquarks = downquarks - 2;
				upquarks--;
				document.getElementById('upquarks').innerHTML = upquarks;
				document.getElementById('downquarks').innerHTML = downquarks;
				document.getElementById('protons').innerHTML = protons;
		}
}
function buyprotongen(){
    var protongencost = Math.floor(10 * Math.pow(1.025,protongens));
    if(protons >= protongencost){
        protongens++;
        protons = protons - protongencost;
        document.getElementById('protongens').innerHTML = protongens;
        document.getElementById('protons').innerHTML = protons;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,protongens));
    document.getElementById('protongencost').innerHTML = nextcost;
}
function buyneutrongen(){
    var neutrongencost = Math.floor(10 * Math.pow(1.025,neutrongens));
    if(neutrons >= neutrongencost){
        neutrongens++;
        neutrons = neutrons - neutrongencost;
        document.getElementById('neutrongens').innerHTML = neutrongens;
        document.getElementById('neutrons').innerHTML = neutrons;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,neutrongens));
    document.getElementById('neutrongencost').innerHTML = nextcost;
}


// - Atoms
//Manual Creation
function hydrogen1click(){
    if(protons >= 1 && electrons >= 1){
        hydrogen1s++;
				protons--;
				electrons--;
				document.getElementById('hydrogen1s').innerHTML = hydrogen1s;
				document.getElementById('protons').innerHTML = protons;
				document.getElementById('electrons').innerHTML = electrons;
		}
}
function helium4click(){
    if(protons >= 2 && electrons >= 2 && neutrons >= 2){
        helium4s++;
				protons = protons - 2;
				electrons = electrons - 2;
				neutrons = neutrons - 2;
				document.getElementById('helium4s').innerHTML = helium4s;
				document.getElementById('protons').innerHTML = protons;
				document.getElementById('electrons').innerHTML = electrons;
				document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function lithium7click(){
    if(protons >= 3 && electrons >= 3 && neutrons >= 4){
        lithium7s++;
				protons = protons - 3;
				electrons = electrons - 3;
				neutrons = neutrons - 4;
				document.getElementById('lithium7s').innerHTML = lithium7s;
				document.getElementById('protons').innerHTML = protons;
				document.getElementById('electrons').innerHTML = electrons;
				document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function beryllium9click(){
    if(protons >= 4 && electrons >= 4 && neutrons >= 5){
        beryllium9s++;
		protons = protons - 4;
		electrons = electrons - 4;
		neutrons = neutrons - 5;
		document.getElementById('beryllium9s').innerHTML = beryllium9s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function boron1click(){
    if(protons >= 5 && electrons >= 5 && neutrons >= 6){
        boron1s++;
		protons = protons - 5;
		electrons = electrons - 5;
		neutrons = neutrons - 6;
		document.getElementById('boron1s').innerHTML = boron1s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function carbon1click(){
    if(protons >= 6 && electrons >= 6 && neutrons >= 6){
        carbon1s++;
		protons = protons - 6;
		electrons = electrons - 6;
		neutrons = neutrons - 6;
		document.getElementById('carbon1s').innerHTML = carbon1s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function nitrogen1click(){
    if(protons >= 7 && electrons >= 7 && neutrons >= 7){
        nitrogen1s++;
		protons = protons - 7;
		electrons = electrons - 7;
		neutrons = neutrons - 7;
		document.getElementById('nitrogen1s').innerHTML = nitrogen1s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function oxygen1click(){
    if(protons >= 8 && electrons >= 8 && neutrons >= 8){
        oxygen1s++;
		protons = protons - 8;
		electrons = electrons - 8;
		neutrons = neutrons - 8;
		document.getElementById('oxygen1s').innerHTML = oxygen1s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function fluorine1click(){
    if(protons >= 9 && electrons >= 9 && neutrons >= 10){
        fluorine1s++;
		protons = protons - 9;
		electrons = electrons - 9;
		neutrons = neutrons - 10;
		document.getElementById('fluorine1s').innerHTML = fluorine1s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
function neon1click(){
    if(protons >= 10 && electrons >= 10 && neutrons >= 10){
        neon1s++;
		protons = protons - 10;
		electrons = electrons - 10;
		neutrons = neutrons - 10;
		document.getElementById('neon1s').innerHTML = neon1s;
		document.getElementById('protons').innerHTML = protons;
		document.getElementById('electrons').innerHTML = electrons;
		document.getElementById('neutrons').innerHTML = neutrons;
		}
}
//Automatic Generation
function buyhydrogen1gen(){
    var hydrogen1gencost = Math.floor(10 * Math.pow(1.025,hydrogen1gens));
    if(hydrogen1s >= hydrogen1gencost){
        hydrogen1gens++;
        hydrogen1s = hydrogen1s - hydrogen1gencost;
        document.getElementById('hydrogen1gens').innerHTML = hydrogen1gens;
        document.getElementById('hydrogen1s').innerHTML = hydrogen1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,hydrogen1gens));
    document.getElementById('hydrogen1gencost').innerHTML = nextcost;
}
function buyhelium4gen(){
    var helium4gencost = Math.floor(10 * Math.pow(1.025,helium4gens));
    if(helium4s >= helium4gencost){
        helium4gens++;
        helium4s = helium4s - helium4gencost;
        document.getElementById('helium4gens').innerHTML = helium4gens;
        document.getElementById('helium4s').innerHTML = helium4s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,helium4gens));
    document.getElementById('helium4gencost').innerHTML = nextcost;
}
function buylithium7gen(){
    var lithium7gencost = Math.floor(10 * Math.pow(1.025,lithium7gens));
    if(lithium7s >= lithium7gencost){
        lithium7gens++;
        lithium7s = lithium7s - lithium7gencost;
        document.getElementById('lithium7gens').innerHTML = lithium7gens;
        document.getElementById('lithium7s').innerHTML = lithium7s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,lithium7gens));
    document.getElementById('lithium7gencost').innerHTML = nextcost;
}
function buyberyllium9gen(){
    var beryllium9gencost = Math.floor(10 * Math.pow(1.025,beryllium9gens));
    if(beryllium9s >= beryllium9gencost){
        beryllium9gens++;
        beryllium9s = beryllium9s - beryllium9gencost;
        document.getElementById('beryllium9gens').innerHTML = beryllium9gens;
        document.getElementById('beryllium9s').innerHTML = beryllium9s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,beryllium9gens));
    document.getElementById('beryllium9gencost').innerHTML = nextcost;
}
function buyboron1gen(){
    var boron1gencost = Math.floor(10 * Math.pow(1.025,boron1gens));
    if(boron1s >= boron1gencost){
        boron1gens++;
        boron1s = boron1s - boron1gencost;
        document.getElementById('boron1gens').innerHTML = boron1gens;
        document.getElementById('boron1s').innerHTML = boron1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,boron1gens));
    document.getElementById('boron1gencost').innerHTML = nextcost;
}
function buycarbon1gen(){
    var carbon1gencost = Math.floor(10 * Math.pow(1.025,carbon1gens));
    if(carbon1s >= carbon1gencost){
        carbon1gens++;
        carbon1s = carbon1s - carbon1gencost;
        document.getElementById('carbon1gens').innerHTML = carbon1gens;
        document.getElementById('carbon1s').innerHTML = carbon1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,carbon1gens));
    document.getElementById('carbon1gencost').innerHTML = nextcost;
}
function buynitrogen1gen(){
    var nitrogen1gencost = Math.floor(10 * Math.pow(1.025,nitrogen1gens));
    if(nitrogen1s >= nitrogen1gencost){
        nitrogen1gens++;
        nitrogen1s = nitrogen1s - nitrogen1gencost;
        document.getElementById('nitrogen1gens').innerHTML = nitrogen1gens;
        document.getElementById('nitrogen1s').innerHTML = nitrogen1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,nitrogen1gens));
    document.getElementById('nitrogen1gencost').innerHTML = nextcost;
}
function buyoxygen1gen(){
    var oxygen1gencost = Math.floor(10 * Math.pow(1.025,oxygen1gens));
    if(oxygen1s >= oxygen1gencost){
        oxygen1gens++;
        oxygen1s = nitrogen1s - oxygen1gencost;
        document.getElementById('oxygen1gens').innerHTML = oxygen1gens;
        document.getElementById('oxygen1s').innerHTML = oxygen1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,oxygen1gens));
    document.getElementById('oxygen1gencost').innerHTML = nextcost;
}
function buyoxygen1gen(){
    var oxygen1gencost = Math.floor(10 * Math.pow(1.025,oxygen1gens));
    if(oxygen1s >= oxygen1gencost){
        oxygen1gens++;
        oxygen1s = nitrogen1s - oxygen1gencost;
        document.getElementById('oxygen1gens').innerHTML = oxygen1gens;
        document.getElementById('oxygen1s').innerHTML = oxygen1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,oxygen1gens));
    document.getElementById('oxygen1gencost').innerHTML = nextcost;
}
function buyfluorine1gen(){
    var fluorine1gencost = Math.floor(10 * Math.pow(1.025,fluorine1gens));
    if(fluorine1s >= fluorine1gencost){
        fluorine1gens++;
        fluorine1s = nitrogen1s - fluorine1gencost;
        document.getElementById('fluorine1gens').innerHTML = fluorine1gens;
        document.getElementById('fluorine1s').innerHTML = fluorine1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,fluorine1gens));
    document.getElementById('fluorine1gencost').innerHTML = nextcost;
}
function buyneon1gen(){
    var neon1gencost = Math.floor(10 * Math.pow(1.025,neon1gens));
    if(neon1s >= neon1gencost){
        neon1gens++;
        neon1s = nitrogen1s - neon1gencost;
        document.getElementById('neon1gens').innerHTML = neon1gens;
        document.getElementById('neon1s').innerHTML = neon1s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,neon1gens));
    document.getElementById('neon1gencost').innerHTML = nextcost;
}

// - Molecules
//Manual Creation
function h2oclick(){
    if(hydrogen1s >= 2 && oxygen1s >= 1){
        h2os++;
		hydrogen1s = hydrogen1s - 2;
		oxygen1s--;
		document.getElementById('h2os').innerHTML = h2os;
		document.getElementById('hydrogen1s').innerHTML = hydrogen1s;
		document.getElementById('oxygen1s').innerHTML = oxygen1s;
		}
}
//Automatic Generation
function buyh20gen(){
    var h20gencost = Math.floor(10 * Math.pow(1.025,h20gens));
    if(h20s >= h20gencost){
        h20gens++;
        h20s = h20s - h20gencost;
        document.getElementById('h20gens').innerHTML = h20gens;
        document.getElementById('h20s').innerHTML = h20s;
    }
    var nextcost = Math.floor(10 * Math.pow(1.025,h20gens));
    document.getElementById('h20gencost').innerHTML = nextcost;
}

// - Info Updates
window.setInterval(function(){
    document.getElementById('upquarks').innerHTML = upquarks;
    document.getElementById('downquarks').innerHTML = downquarks;
    document.getElementById('electrons').innerHTML = electrons;
    document.getElementById('protons').innerHTML = protons;
    document.getElementById('neutrons').innerHTML = neutrons;	
    document.getElementById('hydrogen1s').innerHTML = hydrogen1s;				
	document.getElementById('helium4s').innerHTML = helium4s;
	document.getElementById('lithium7s').innerHTML = lithium7s;
	document.getElementById('beryllium9s').innerHTML = beryllium9s;
	document.getElementById('boron1s').innerHTML = boron1s;
	document.getElementById('carbon1s').innerHTML = carbon1s;
	document.getElementById('nitrogen1s').innerHTML = nitrogen1s;
	document.getElementById('oxygen1s').innerHTML = oxygen1s;
	document.getElementById('fluorine1s').innerHTML = fluorine1s;
	document.getElementById('neon1s').innerHTML = neon1s;
    document.getElementById('h2os').innerHTML = h2os;
	
	var upquarkgenps = upquarkgens*upquarkgenlvl;
    document.getElementById('upquarkgenps').innerHTML = upquarkgenps;
	var downquarkgenps = downquarkgens*downquarkgenlvl;
    document.getElementById('downquarkgenps').innerHTML = downquarkgenps;
	var electrongenps = electrongens*electrongenlvl;
    document.getElementById('electrongenps').innerHTML = electrongenps;	
	var protongenps = protongens*protongenlvl;
    document.getElementById('protongenps').innerHTML = protongenps;	
	var neutrongenps = neutrongens*neutrongenlvl;
    document.getElementById('neutrongenps').innerHTML = neutrongenps;	
	var hydrogen1genps = hydrogen1gens*hydrogen1genlvl;
    document.getElementById('hydrogen1genps').innerHTML = hydrogen1genps;
	var helium4genps = helium4gens*helium4genlvl;
    document.getElementById('helium4genps').innerHTML = helium4genps;	
	var lithium7genps = lithium7gens*lithium7genlvl;
    document.getElementById('lithium7genps').innerHTML = lithium7genps;
	var beryllium9genps = beryllium9gens*beryllium9genlvl;
    document.getElementById('beryllium9genps').innerHTML = beryllium9genps;
	var boron1genps = boron1gens*boron1genlvl;
    document.getElementById('boron1genps').innerHTML = boron1genps;
	var carbon1genps = carbon1gens*carbon1genlvl;
    document.getElementById('carbon1genps').innerHTML = carbon1genps;
	var nitrogen1genps = nitrogen1gens*nitrogen1genlvl;
    document.getElementById('nitrogen1genps').innerHTML = nitrogen1genps;
	var oxygen1genps = oxygen1gens*oxygen1genlvl;
    document.getElementById('oxygen1genps').innerHTML = oxygen1genps;
	var fluorine1genps = fluorine1gens*fluorine1genlvl;
    document.getElementById('fluorine1genps').innerHTML = fluorine1genps;
	var neon1genps = neon1gens*neon1genlvl;
    document.getElementById('neon1genps').innerHTML = neon1genps;
	
	var h20genps = h20gens*h20genlvl;
	document.getElementById('h20genps').innerHTML = h20genps;

}, 10);
window.setInterval(function(){
	Pauto();
	Aauto();
}, 1000);
