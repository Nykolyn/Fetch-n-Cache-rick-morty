import React from 'react';
import { List, ListItem, makeStyles, Theme } from '@material-ui/core';

import { TCharacter } from '../../App';

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    borderRadius: 4,
    padding: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
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
};

const Characters: React.FC<TCharacterProps> = ({ characters, current, setCurrent }) => {
  const classes = useStyles();

  return (
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
  );
};

export default React.memo(Characters);
