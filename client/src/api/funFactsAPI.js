import API from "./API";

/* FUN FACTS ENDPOINT */

class FunFactsAPI extends API{

    constructor(){
        super();
        this.endpoint = this.baseurl + "/allaverages";
    }

    getFunFacts(){
        return fetch(this.endpoint).then(
            results => {
                console.log(results);
                
                return results.json();
            }
        );
    }
}

export default FunFactsAPI;