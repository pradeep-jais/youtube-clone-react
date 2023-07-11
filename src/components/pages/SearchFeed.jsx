import { Box, Typography } from '@mui/material';
import VideosContainer from '../VideosContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataFromAPI } from '../../features/category/categorySlice';
useParams;

const Feed = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useParams();

  console.log(searchTerm);

  useEffect(() => {
    dispatch(getDataFromAPI(`search?part=snippet&q=${searchTerm}`));
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: 'auto', flex: 2, p: 2 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
        sx={{ color: 'white', textTransform: 'capitalize' }}
      >
        search results for :
        <span style={{ color: '#f31503', marginLeft: '0.4rem' }}>
          {searchTerm}
        </span>
        <span style={{ marginLeft: '0.4rem' }}>Videos</span>
      </Typography>
      <VideosContainer />
    </Box>
  );
};
export default Feed;
