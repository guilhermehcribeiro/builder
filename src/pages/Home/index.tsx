import { useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextValue from 'components/TextValue';
import { IWeatherInfo } from 'interfaces/WeatherInfo';
import AddressService from 'services/Address';
import WeatherService from 'services/Weather';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const [weatherInfos, setWeatherInfos] = useState({} as IWeatherInfo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const shareMyLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      setLoading(true);
      setRefresh(true);
      try {
        const reqWeather = await WeatherService.getWeather(position?.coords?.latitude, position?.coords?.longitude);
        const reqAdrress = await AddressService.getAddress(position?.coords?.latitude, position?.coords?.longitude);
        setWeatherInfos({
          weatherDescription: reqWeather?.data?.[0]?.weather_description,
          streetName: reqAdrress?.data?.[0]?.street_name
        });
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className={classes.home}>
      <p className={classes.title}>Descubra o tempo na sua região!</p>
      <div className={classes.container}>
        {loading && <Typography className={classes.noResult}>Carregando...</Typography>}
        {error && !loading && <Typography className={classes.noResult}>Erro ao buscar informações, tente novamente!</Typography>}
        {Object.values(weatherInfos)?.length === 0 && !loading && !error && (
          <Typography className={classes.noResult}>Descubra o clima perto de você!</Typography>
        )}
        {Object.values(weatherInfos)?.length > 0 && !loading && !error && (
          <>
            <Typography className={classes.result}>Resultado</Typography>
            <TextValue label='Endereço' value={weatherInfos?.streetName} />
            <TextValue label='Clima' value={weatherInfos?.weatherDescription} />
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px', marginBottom: '32px' }}>
          <Button variant='outlined' className={classes.button} onClick={shareMyLocation} disabled={loading}>
            {refresh ? 'Atualizar' : 'Compartilhar'} minha localização
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
