import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { TCharacter } from '../../App';
import CharacterSpec from './CharacterSpec';

type TCharacterInfoProps = {
  character: TCharacter | null;
  error: any;
};

const CharacterInfo: React.FC<TCharacterInfoProps> = ({ character, error }) => {
  if (error) {
    return (
      <Box p={4}>
        <Typography variant="h4" color="error">{error}</Typography>
      </Box>
    );
  }
  if (!character) return null;

  const { name, species, type, location, origin, status } = character;

  return (
    <Box p={2}>
      <Typography variant="h3">{name}</Typography>
      <CharacterSpec spec="Species" desc={species} />
      <CharacterSpec spec="Type" desc={type} />
      <CharacterSpec spec="Location" desc={location.name} />
      <CharacterSpec spec="Origin" desc={origin.name} />
      <CharacterSpec spec="Status" desc={status} />
    </Box>
  );
};

export default CharacterInfo;
