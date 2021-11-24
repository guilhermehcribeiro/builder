import React from 'react';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

interface IProps {
  label: string;
  value: string;
}

const TextValue: React.FC<IProps> = ({ label, value }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.text}>{label}</Typography>
      <Typography className={classes.value}>{value}</Typography>
    </>
  );
};

export default TextValue;
