
class ComparatorController {

  constructor() {
    super();
  }

  getValues(values) {

    //Reading values from the quiz
    //values.get("family_size");

    var parameters = {
      familySize: 1,
      nbRooms: 2,
      prefRoomTemp: 21,
      houseInsulation: 2,
      nbFridge: 1,
      nbCoffeeMaker: 2,
      nbMicroWaveOven: 1,
      nbElectricOven: 1,
      nbTv: 2,
      nbGamingConsole: 2,
      nbLaptops: 1,
      nbDeskPC: 2,
      nbWashingMachine: 1,
      nbTumbleDrier: 1,
      nbVacuumCleaner: 2,
      nbElectricToothbrush: 1,
      nbHairDryer: 1,
      nbKettle: 1,
      nbShowersPerWeek: 21,
      nbBathsPerWeek: 2,
      dishWasher: true,
      gardenWatering: true,
      pool: false,
      naturalGasConnection: true,
      nbCookingPerWeek: 5,
      typeCooking: "gas",
    }


    //Arrays declaration
    let results = [];
    let waterData = this.getWaterConsEstimation(parameters);
    let gasData = this.getGasConsEstimation(parameters);
    let elecData = this.getElecConsEstimation(parameters);

    //Concatenate all arrays into one
    results.concat(waterData);
    results.concat(gasData);
    results.concat(elecData);

    return 21;
  };

  getWaterConsEstimation(param) {

    //Variables declaration
    let results;
    let avgToiletCons = 0.03 * 6 * 365 // 0.03 in m³ per day, average is 6 times a day
    let avgShowerCons = 0.065 //in m³ for one shower
    let avgBathCons = 0.130 //in m³ for one bath
    let dishWasherCons = 220 * 0.012 //220 washings (0.012 m³ per washing) per year
    let gardenWateringCons = 261 * 0.015; //261 m² (average garden surface belgium), 15 liters per m² (cons per year)
    let poolCons = 15 //m³ per year for a standard (8*4*1.5 pool)

    results += avgToiletCons * param.familySize + (avgShowerCons * param.nbShowersPerWeek * 52) + (avgBathCons * param.nbBathsPerWeek * 52);

    if (param.dishWasher) {
      results += dishWasherCons;
    }
    if (param.gardenWatering) {
      results += gardenWateringCons
    }
    if (param.pool) {
      results += poolCons;
    }

    return results;
  };

  getGasConsEstimation(param) {

    //Variables declaration
    let results;
    

    if (naturalGasConnection) {

    }
    //nbCookingPerWeek
    //typeCooking
    results.push({ hello: "test" });

    return 1360;
  };

  getElecConsEstimation(param) {
    let results = [];
    results.push({ hello: "test" });

    return 4000;
  };
}

export default ComparatorController;
