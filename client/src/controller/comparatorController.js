
class ComparatorController{

    constructor(){
    }

    getResults(){
      return 42;
    };

    getConsEstimation(values){

      //Reading values from the quiz
        //request.get("family_size");
        //get 
    
      //Arrays declaration
      let results = [];
      let waterData = getWaterConsEstimation(size);
      let gasData = getGasConsEstimation(size);
      let elecData = getElecConsEstimation(size);
    
      //Concatenate all arrays into one
      results.concat(waterData);
      results.concat(gasData);
      results.concat(elecData);
    
      response.status(200).send(results);
    };
    
    getWaterConsEstimatio(size){
    
      //Variables declaration
      let results = [];
      let averageWebCons = 40; //in m³, per year, per person
      
    
    
      results.push({hello : "test"});
    
      return results;
    };
    
    getGasConsEstimation(size){
      let results = [];
      results.push({hello : "test"});
    
      return results;
    };
    
    getElecConsEstimation(size){
      let results = [];
      results.push({hello : "test"});
    
      return results;
    };
}

export default ComparatorController;
