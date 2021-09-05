import React, { useState } from 'react';
import { Button, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    width: 280,
    marginBottom: theme.spacing(4),
    // hide default browser behaviour for number input
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}));

type TSearchProps = {
  onSearch: (search: string) => void;
  isFetching: boolean;
};

const Search: React.FC<TSearchProps> = ({ onSearch, isFetching }) => {
  const classes = useStyles();

  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <TextField
      value={input}
      className={classes.input}
      type="number"
      onChange={handleInputChange}
      label="Enter any number"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button color="primary" disabled={isFetching} size="small" onClick={handleSearch}>
              Search
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default React.memo(Search);
