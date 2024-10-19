import axios from "axios";

const fetchEvents=async()=>{
  try{
    const response=await axios.get("http://localhost:5000/api/events");
    return response.data.map(
      (event)=>({
        ...event,
        image:`/images/${event.image}`,
      })
    );
  }catch(error){
    console.error("Error fetching events:",error);
    return [];
  }
}

export default fetchEvents;
