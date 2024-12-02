import axios from "axios";

const apiKey = "AIzaSyCHv8MMTFgg3M9MMsr38mT3SCBdpegyEnM";

export async function fetchPlaces(query: string) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
