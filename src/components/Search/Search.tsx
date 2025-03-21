import React from 'react';
import { useSearchContext } from "../../context/SearchContext";
import {Box, TextField} from "@mui/material";

const Search = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();

  console.log('searchTerm: ', searchTerm);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '10px'
    }}>
      <Box sx={{
        padding: '10px 0'
      }}>
        Current Search Term:
      </Box>
      <Box>
        {searchTerm}
      </Box>
      <Box>

      </Box>
      <TextField type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </Box>
  );
};

export default Search;
