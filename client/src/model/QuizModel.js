/**
 * Model for quiz used in local storage
 */
export default class QuizModel {
    values = {
        familySize: "",
        nbRooms:"",
        zipCode: "",
        prefRoomTemp: "",
        houseInsulation: 2, //1 is poor, 2 is average, 3 is good
        gardenWatering: "false",
        pool: "false",
        naturalGasConnection: 1,
        nbCookingPerWeek: "",
        typeCooking: "Gas", //gas, electric, induction
        nbShowersPerWeek: "",
        nbBathsPerWeek: ""
    }
}