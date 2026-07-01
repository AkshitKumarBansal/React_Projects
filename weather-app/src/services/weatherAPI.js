const API_KEY = "27ade1f935c49095f2cebe1c457b48fe";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";

export const getCurrentWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    if(!response.ok) {
      if(response.status === 404) {
        throw new Error(`city "${city}" not found, please check the spelling and try again.`);
      } else if(response.status === 401) {
        throw new Error(`Invalid API key, please check your OpenWeatherMap API keyand configuration.`);
      }
    } else {
        throw new Error(`Weather service is temporarily unavailable. Please try again later.`);
    }
    const data = await response.json();
    if(!data.dt) {
      data.dt = Math.floor(Date.now()/1000);
    }
  } catch (error) {
    if(error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error, please check your internet connection and try again.");
    }
    throw error;
  }
};




https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}