import { Box } from '@material-ui/core';
import { useState } from 'react';

import Search from './Components/Search';

const App = () => {
  const [isFetching, setIsFetching] = useState(false);

  const onSearch = (search: string) => {
    setIsFetching(true);
    setIsFetching(false);
  };

  return (
    <Box display="flex" p={12} justifyContent="space-between">
      <Box>
        <Search isFetching={isFetching} onSearch={onSearch} />
      </Box>
    </Box>
  );
};

export default App;
