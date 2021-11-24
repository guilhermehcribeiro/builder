import { responseGetWeather } from 'api/response/weather';
import { get } from 'helpers/api';
import { WEATHER_API_KEY } from 'settings';

const getWeather = async (lat: number, long: number) => {
  const req = await get(`/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${WEATHER_API_KEY}`, {}, {});
  return responseGetWeather(req?.data);
};
export default {
  getWeather
};
