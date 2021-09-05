import { Box } from '@material-ui/core';

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

const charactersCache = () => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : {};
};

const App = () => {
  const { isFetching, error, fetchData, data, cache, setData, setCache } = useMemoisedGetOne<TCharacter>(
    charactersCache(),
    'characters'
  );

  const onSearch = async (search: string) => {
    fetchData(search ? `${process.env.REACT_APP_API_URL}/${search}` : '');
  };

  return (
    <Box display="flex" p={12} justifyContent="space-between">
      <Box>
        <Search isFetching={isFetching} onSearch={onSearch} />
        <CharacterCard error={error} isFetching={isFetching} character={data} />
      </Box>
      <Characters setCache={setCache} setCurrent={setData} current={data?.id} characters={Object.values(cache)} />
    </Box>
  );
};

export default App;
