import Proudectapi from "./Proudect.json";

class Data{
    constructor(DataApi){
        this.data = DataApi;
    }
    async getProudect(){
        try {
            const response = await Promise.resolve(this.data);
            return response;
        } catch (error) {
            alert("Not Connect")
          }
    }
}

// Get Prodects Class

export const Getprodects = new Data(Proudectapi);

