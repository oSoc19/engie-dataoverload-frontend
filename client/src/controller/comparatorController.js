
class ComparatorController{

    constructor(){
    }

    getValues(values){

      //Reading values from the quiz
        //values.get("family_size");
        let familySize = 1;
        let roomNumber = 2;
        let prefRoomTemp = 21;
        let houseInsulation = 2;
        let nbFridge = 1;
        let nbCoffeeMaker = 2;
        let nbMicroWaveOven = 1;
        let nbElectricOven = 1;
        let nbTv = 2;
        let nbGamingConsole = 2;
        let nbLaptops = 1;
        let nbDeskPC = 2;
        let nbWashingMachine = 1;
        let nbTumbleDrier = 1;
        let nbVacuumCldeaner = 2;
        let nbElectricToothbrush = 1;
        let nbHairDryer = 1;
        let nbKettle = 1;
        let nbShowersPerWeek = 21;
        let nbBathsPerWeek = 2;
        let dishWasher = true;
        let gardenWatering = true;
        let pool = false;
        let naturalGasConnection = true;
        let nbCookingPerWeek = 5;
        let typeCooking = "gas";


      //Arrays declaration
      let results = [];
      let waterData = this.getWaterConsEstimation(familySize);
      let gasData = this.getGasConsEstimation(familySize);
      let elecData = this.getElecConsEstimation(familySize);
    
      //Concatenate all arrays into one
      results.concat(waterData);
      results.concat(gasData);
      results.concat(elecData);
    
      return 21;
    };
    
    getWaterConsEstimation(familySize){
    
      //Variables declaration
      let results;
      let averageWebCons = 40; //in m³, per year, per person
      results += averageWebCons*familySize;

    
      results.push({hello : "test"});
    
      return 70;
    };
    
    getGasConsEstimation(familySize){
      let results = [];
      results.push({hello : "test"});
    
      return 1360;
    };
    
    getElecConsEstimation(familySize){
      let results = [];
      results.push({hello : "test"});
    
      return 4000;
    };
}

export default ComparatorController;
