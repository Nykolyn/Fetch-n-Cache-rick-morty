import { Box } from '@material-ui/core';
import { useState } from 'react';

import useMemoisedGetOne from './hooks/useMemoisedGetOne';
import Search from './Components/Search';
import { CharacterCard, Characters } from './Components/Character';

export type TCharacter = {
  created: Date;
  episode: string[];
  gender: string;
  id: string;
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
  const [url, setUrl] = useState('');

  const { isFetching, error, data, cache, setData } = useMemoisedGetOne<TCharacter>(
    url ? `${process.env.REACT_APP_API_URL}/${url}` : ''
  );

  const onSearch = async (search: string) => {
    setUrl(search);
  };

  return (
    <Box display="flex" p={12} justifyContent="space-between">
      <Box>
        <Search isFetching={isFetching} onSearch={onSearch} />
        <CharacterCard error={error} isFetching={isFetching} character={data} />
      </Box>
      <Characters setCurrent={setData} current={data?.id} characters={Object.values(cache)} />
    </Box>
  );
};

export default App;
