
class ComparatorController {

  constructor() {
  }

  getValues(values, type) {

    //Reading values from the quiz
    //values.get("family_size");

    let toReturn;

    if (type === "water") {
      toReturn = this.getWaterConsEstimation(values);
    }
    else if (type === "gas") {
      toReturn = this.getGasConsEstimation(values);
    }
    else if (type === "electricity") {
      toReturn = this.getElecConsEstimation(values);
    }

    return toReturn;
  };

  getWaterConsEstimation(param) {

    //Variables declaration
    let results = 0;
    let avgToiletCons = 0.003 * 5 * 365; // 0.03 in m³ per day, average is 6 times a day
    let avgShowerCons = 0.065; //in m³ for one shower
    let avgBathCons = 0.130; //in m³ for one bath
    let dishWasherCons = 220 * 0.012; //220 washings (0.012 m³ per washing) per year
    let gardenWateringCons = 261 * 0.015; //261 m² (average garden surface belgium), 15 liters per m² (cons per year)
    let poolCons = 15; //m³ per year for a standard (8*4*1.5 pool)

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

    return Math.round(results,0);
  };

  getGasConsEstimation(param) {

    //Variables declaration
    let results = 0;
    let bigGasConsumer = 20000 / 10.95; //kWh divided by 10.95 to get m³
    let avgGasConsumer = 12000 / 10.95;
    let smallGasConsumer = 5000 / 10.95;
    let noGasConsumer = 4265 / 10.95;

    if (param.naturalGasConnection) {
      if (param.typeCooking === "gas") {
        if (param.nbCookingPerWeek > 4) {
          results += bigGasConsumer;
        } else {
          results += avgGasConsumer;
        }
      } else {
        results += smallGasConsumer;
      }
    } else {
      results += noGasConsumer;
    }

    return Math.round(results,0);
  };

  getElecConsEstimation(param) {

    let results = 0;
    let insulationLevel = param.houseInsulation / 2; //1
    let avgConsPerRoom = (param.nbRooms * 300) / insulationLevel; //400 kWh per room in average per month
    let roomTempCons;
    if (param.prefRoomTemp < 24) {
      roomTempCons = 100; // 400 kWh per month
    } else {
      roomTempCons = 300 // 800 kWh per month
    }
    let fridgeCons = param.nbFridge * 350; //kWh per year
    let coffeeMakerCons = param.nbCoffeeMaker * 30;
    let microWaveOvenCons = param.nbMicroWaveOven * 60;
    let electricOvenCons = param.nbElectricOven * 150;
    let tvCons = param.nbTv * 90;
    let gamingConsoleCons = param.nbGamingConsole * 84;
    let laptopsCons = param.nbLaptops * 140;
    let desktopCons = param.nbDeskPC * 300;
    let washingMachineCons = param.nbWashingMachine * 220;
    let tumbleDryerCons = param.nbTumbleDryer * 300;
    let vacuumCleanerCons = param.nbVacuumCleaner * 80;
    let electricToothbrushCons = param.nbElectricToothbrush * 0.3;
    let hairDryerCons = param.nbHairDryer * 11;
    let kettleCons = param.nbKettle * 30;

    results = avgConsPerRoom + roomTempCons + fridgeCons + coffeeMakerCons + microWaveOvenCons + electricOvenCons
      + tvCons + gamingConsoleCons + laptopsCons + desktopCons + washingMachineCons + tumbleDryerCons + vacuumCleanerCons
      + electricOvenCons + electricToothbrushCons + hairDryerCons + kettleCons;

    console.log("(controller)elec :" + results);
    return Math.round(results);
  };
}

export default ComparatorController;