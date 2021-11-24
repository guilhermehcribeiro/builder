export const responseGetWeather = (data: any) => ({
  data: data
    ? [
        {
          weather_description: data?.weather?.[0]?.description
        }
      ]
    : []
});
