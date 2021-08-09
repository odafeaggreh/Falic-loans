import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '95%',
    },
  },
}));

export default function CurrencySelector() {
  const classes = useStyles();
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
      </div>
    </form>
  );
}
