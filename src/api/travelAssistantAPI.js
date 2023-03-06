import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "4102c81070mshc8bef03a6c73a19p1d8314jsnc1624f3027d5",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return response.data.data;
    // console.log(response.data.data);
  } catch (error) {
    console.log("error", error);
  }
};
