import axios from "axios";

// class HotelService{
 export const getHotels = async()=>{
        const response= await axios.get('https://run.mocky.io/v3/45ecff0c-5ee8-43e0-ab06-dfce6973574e');
        return response;
    }
// }

// export default getHotels;