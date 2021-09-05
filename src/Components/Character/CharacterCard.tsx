import React from 'react';
import { Box, CircularProgress, makeStyles, Theme } from '@material-ui/core';

import richAndMortyBg from '../../assets/rick_morty_bg.png';

import { TCharacter } from '../../App';
import CharacterInfo from './CharacterInfo';

const useStyles = makeStyles((theme: Theme) => ({
  spin: {
    position: 'absolute',
    left: '40%',
    top: '40%',
  },
}));

type TCharacterCardProps = {
  character: TCharacter | null;
  isFetching: boolean;
  error: any
};

const CharacterCard: React.FC<TCharacterCardProps> = ({ character, isFetching, error }) => {
  const classes = useStyles({ isFetching });

  return (
    <Box display="flex">
      <Box position="relative" width={280} height={280} boxShadow={3} borderRadius={4} overflow="hidden">
        {isFetching && <CircularProgress className={classes.spin} />}
        <img width={280} height={280} src={character?.image ?? richAndMortyBg} alt="rick and morty" />
      </Box>
      <CharacterInfo error={error} character={character} />
    </Box>
  );
};

export default CharacterCard;
