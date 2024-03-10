import axios from "axios";

// class HotelService{
 export const getHotels = async()=>{
        const response= await axios.get('https://run.mocky.io/v3/946434ce-eb38-4c34-8ccc-10eae022808d');
        return response;
    }
export const getReviews = async()=>{
    const response = await axios.get('https://run.mocky.io/v3/207a7113-316c-4a44-8138-8d0bb438cca9');
    return response;
}
// }

// export default getHotels;