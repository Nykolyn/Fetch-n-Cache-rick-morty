import React from 'react';
import { Box, Button, List, ListItem, makeStyles, Theme } from '@material-ui/core';

import { TCharacter } from '../../App';

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    borderRadius: 4,
    padding: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '2px solid transparent',
    marginBottom: theme.spacing(1),
  },
  active: {
    border: '2px solid',
    cursor: 'default',
    borderColor: theme.palette.primary.dark,
  },
  image: {
    borderRadius: 4,
  },
}));

type TCharacterProps = {
  characters: TCharacter[];
  current?: string;
  setCurrent: (data: TCharacter) => void;
  setCache: (data: any) => void;
};

const Characters: React.FC<TCharacterProps> = ({ characters, current, setCurrent, setCache }) => {
  const classes = useStyles();

  const handleResetCharacters = () => {
    setCache({});
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {characters.length > 0 && (
        <Button color="primary" onClick={handleResetCharacters}>
          Clear all
        </Button>
      )}
      <List>
        {characters.map((character) => {
          const { id, name, image } = character;
          const isCurrent = id === current;

          return (
            <ListItem
              onClick={() => !isCurrent && setCurrent(character)}
              className={isCurrent ? `${classes.item} ${classes.active}` : classes.item}
              key={id}
            >
              <img className={classes.image} width={100} height={100} src={image} alt={name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default React.memo(Characters);
