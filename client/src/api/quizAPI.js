import API from "./API";

/* QUIZ ENDPOINT */

class QuizAPI extends API{

    constructor(){
        super();
        this.quiz_endpoint = this.baseurl + "/quiz";
        this.solarzip_endpoint = this.baseurl + "/solarzip";
    }

    getSolarProdLocation(zip){
        return fetch(this.solarzip_endpoint+"/"+zip).then(
            results => {
                return results.json();
            }
        );
    }
}

export default QuizAPI;