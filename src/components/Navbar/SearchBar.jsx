import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

import { setSearchTerm } from '../../features/inputSearch/inputSearchSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const { searchTerm } = useSelector((store) => store.inputSearch);
  const dispatch = useDispatch();

  // Navigate url on search submit
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      dispatch(setSearchTerm(''));
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        p: '0 1rem',
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
        }}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
