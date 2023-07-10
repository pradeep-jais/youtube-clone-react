import { Box, Stack, Typography, ListItem } from '@mui/material';
import Sidebar from '../Sidebar';
import VideosContainer from '../VideosContainer';

// getting data
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromAPI } from '../../features/category/categorySlice';
import { useEffect } from 'react';

const Feed = () => {
  const { selectedCategory, isError, errorMessage } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromAPI(`search?part=snippet&q=${selectedCategory}`));
  }, []);

  if (isError) {
    return (
      <div
        style={{
          height: '95vh',
          color: '#fff',
          textAlign: 'center',
          margin: '5rem auto',
        }}
      >
        <h1>Ops</h1>
        <h4>Something went wrong!</h4>
        <p>{errorMessage}</p>
      </div>
    );
  }
  return (
    <main className="feed section-center">
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          padding: '0.5rem 0 0 1rem',
        }}
      >
        <Box
          sx={{
            height: { xs: 'auto', md: '95vh' },
            maxWidth: { xs: 'auto', md: '14rem' },
          }}
        >
          <Sidebar />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: '#fff' }}
          >
            Copyright {new Date().getFullYear()} Youtube Clone <br />
            Pradeep Jais Official
            <span> &copy; JSM </span>
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: 'auto', flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'white' }}
          >
            {selectedCategory}
            <span style={{ color: '#f31503', marginLeft: '0.8rem' }}>
              videos
            </span>
          </Typography>
          <VideosContainer />
        </Box>
      </Stack>
    </main>
  );
};
export default Feed;
