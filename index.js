binaryMachine = '0101001000100110100100000001000100110010100101001100100100010010011000101000010000100110001001000000100101100001010000101001100001001000010010011000010001000001010110000010100000101011000001001000001001011000001000010001000010011000000101000000101011000000100100000010010110000001000010000001010110000001000101000100110000000101000000010001001100000001001000000001000100'
band = []
currentZustand = '0';
currentBandindex = 0;
uebergangsFunktionen = []

class Uebergangsfunktion {
	constructor(uebergangsFunktion) {
  	let ufArray = uebergangsFunktion.split(1);
  	if(ufArray.length != 5) {
  		console.error('Exception');
    	return;
  	}
  	this.zustandOld = ufArray[0];
    this.bandsymbolOld = ufArray[1]
    this.zustandNew = ufArray[2]
    this.bandsymbolNew = ufArray[3]
    this.bewegung = ufArray[4];
  }
}

function extractUebergangsFunktionen(turingMachine) {
	turingMachine = turingMachine.split('11');
  turingMachine.forEach(tm => uebergangsFunktionen.push(new Uebergangsfunktion(tm)));
}

function getUebergangsfunktionByCurrentZustandAndBandsymbol(currentZustand, currentBandsymbol) {
	let uebergangsFunktion = uebergangsFunktionen.filter(u => u.zustandOld == currentZustand && u.bandsymbolOld == currentBandsymbol);
  if (uebergangsFunktion.length > 1) {
  	console.error(uebergangsFunktion) //Exception
  }
  console.log(uebergangsFunktion[0])
	return uebergangsFunktion[0];
}

function extractBand(band) {
	this.band = getEmptyBand().concat(band.split('1')).concat(getEmptyBand());
  
  console.log(band)
  console.log(this.band)
}

function extractTuringMachineAndBandFromInput(code) {
	code = code.split('111');
  extractUebergangsFunktionen(code[0]);
 	extractBand(code[1]);
}

function run(input) {
	extractTuringMachineAndBandFromInput(input);
	currentBandindex = band.indexOf(band.find(b => b != '000'));
  let nrOfTerminationConditionsMet = 0;
  while(nrOfTerminationConditionsMet < 2) {
  console.log('Zustand: ' + currentZustand + ' Band: ' + band[currentBandindex]);
  console.log(band[currentBandindex])
  	let uebergangsFunktion = getUebergangsfunktionByCurrentZustandAndBandsymbol(currentZustand, band[currentBandindex]);
    if(!uebergangsFunktion) {
    	if(this.currentZustand = '0000000') {
      	nrOfTerminationConditionsMet = 2;
      } else {
    		nrOfTerminationConditionsMet = 1;
      }
    } else {
    	makeUebergang(uebergangsFunktion);
      console.log('Zustand neu: ' + currentZustand + ' Band neu: ' + band[currentBandindex]);
    }
    
  }
  return band;
}

function makeUebergang(uebergangsFunktion) {
	this.band[currentBandindex] = uebergangsFunktion.bandsymbolNew;
  this.currentZustand = uebergangsFunktion.zustandNew;
 	switch(uebergangsFunktion.bewegung.length) {
  	case 1:
    	this.currentBandindex -= 1;
    break;
    case 2:
    	this.currentBandindex += 1;
    break;
    default:
    	console.log('Keine Bewegung');
    break;
  }
  
}

function getEmptyBand() {
	return ['000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000'];
}




console.log(run(binaryMachine + '111' + '01010100101010'));

console.log(getUebergangsfunktionByCurrentZustandAndBandsymbol('00', '00'));

console.log(band)