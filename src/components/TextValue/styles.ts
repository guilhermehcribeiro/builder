import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      fontWeight: 700,
      fontSize: '16px',
      marginBottom: '8px'
    },
    value: {
      fontWeight: 400,
      fontSize: '16px',
      marginBottom: '16px',
      textTransform: 'capitalize'
    }
  })
);

export default useStyles;
