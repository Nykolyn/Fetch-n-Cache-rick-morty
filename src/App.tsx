import { Box } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

import Search from './Components/Search';
import { CharacterCard } from './Components/Character';

export type TCharacter = {
  created: Date;
  episode: string[];
  gender: string;
  id: string | number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<any>(null);
  const [character, setCharacter] = useState<TCharacter | null>(null);

  const onSearch = async (search: string) => {
    setIsFetching(true);

    try {
      const { data } = await axios.get<TCharacter>(`${process.env.REACT_APP_API_URL}/${search}`);
      setCharacter(data);
      if (error) setError(null);
    } catch (e: any) {
      const defaultErrorMsg = 'Character not found';

      setError(axios.isAxiosError(e) ? e.response?.data?.error ?? defaultErrorMsg : e);
      if (character) setCharacter(null);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Box display="flex" p={12} justifyContent="space-between">
      <Box>
        <Search isFetching={isFetching} onSearch={onSearch} />
        <CharacterCard error={error} isFetching={isFetching} character={character} />
      </Box>
    </Box>
  );
};

export default App;
