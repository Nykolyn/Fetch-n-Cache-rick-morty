import React from 'react';
import { Box, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  spec: {
    width: '20%',
    minWidth: '100px',
    marginRight: theme.spacing(2),
    color: theme.palette.grey[500],
  },
  desc: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: ({ color }: { color: string }) => color,
  },
}));

type TCharacterSpecProps = {
  spec: string;
  desc: string;
};

const CharacterSpec: React.FC<TCharacterSpecProps> = ({ spec, desc }) => {
  const colors = {
    unknown: 'grey',
    dead: 'red',
  };

  const getColor = () => {
    if (!desc) return 'grey';
    const key = desc.toLowerCase();
    if (isValidColor(key)) return colors[key];

    return 'inherit';
  };

  const isValidColor = (value: string): value is keyof typeof colors => {
    return value in colors;
  };

  const classes = useStyles({ color: getColor() });

  return (
    <Box display="flex" p={1}>
      <Typography className={classes.spec}>{spec}</Typography>
      <Typography className={classes.desc}>{desc || 'unknown'}</Typography>
    </Box>
  );
};

export default CharacterSpec;
