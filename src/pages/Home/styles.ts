import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    home: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: 'Montserrat',
      [theme.breakpoints.down('xs')]: {
        padding: '16px'
      }
    },
    title: {
      color: '#FFF0A1',
      fontSize: '28px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '8px',
      margin: '0'
    },
    container: {
      backgroundColor: '#FFF',
      width: '490px',
      borderRadius: '16px',
      padding: '32px',
      color: '#414141',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    },
    noResult: {
      marginBottom: '32px',
      fontWeight: 700,
      fontSize: '21px',
      fontFamily: 'Montserrat',
      textAlign: 'center',
      paddingTop: '96px',
      paddingBottom: '46px'
    },
    result: {
      marginBottom: '32px',
      fontWeight: 700,
      fontSize: '21px',
      fontFamily: 'Montserrat'
    },
    button: {
      width: '310px',
      backgroundColor: '#87CEFA',
      color: '#414141',
      padding: '16px 32px',
      fontSize: '16px',
      fontWeight: 600,
      textTransform: 'none',
      borderRadius: '16px',
      border: 0,
      '&:hover': {
        backgroundColor: '#87CEFA'
      },
      [theme.breakpoints.down('xs')]: {
        padding: '4px',
        fontSize: '14px'
      }
    }
  })
);

export default useStyles;
