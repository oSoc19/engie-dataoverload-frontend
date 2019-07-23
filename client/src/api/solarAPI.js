import API from "./API";

class SolarAPI extends API{

    constructor(){
        super();
        this.endpoint = this.baseurl + "/solar";
    }

    getFilter(filter){
        console.log(this.endpoint+"/"+filter);

        return fetch(this.endpoint+"/"+filter).then(
            results => {
                return results.json();
            }
        );
    }
}

export default SolarAPI;