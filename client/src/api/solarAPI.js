import API from "./API";

class SolarAPI extends API{

    constructor(){
        super();
        this.endpoint = this.baseurl + "/solar";
    }

    getFilter(filter){
        console.log(this.baseurl+"/"+filter);

        return fetch(this.baseurl+"/"+filter).then(
            results => {
                return results.json();
            }
        );
    }
}

export default SolarAPI;