import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../Sidebar';
import VideosContainer from '../VideosContainer';

// getting data
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromAPI } from '../../features/category/categorySlice';
import { useEffect } from 'react';
import Error from './Error';
import { setPage } from '../../features/category/categorySlice';

const Feed = () => {
  const { selectedCategory, isError, errorMessage } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // set page indicator to Home
    dispatch(setPage('Home'));

    dispatch(getDataFromAPI(`search?part=snippet&q=${selectedCategory}`));
  }, []);

  if (isError) {
    return <Error errorMessage={errorMessage} />;
  }
  return (
    <main className="feed section-center">
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            height: { xs: 'auto', md: '95vh' },
            width: { xs: 'auto', md: '14rem' },
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
        <Box sx={{ overflowY: 'auto', flex: 2, p: { xs: '1rem 0', md: 2 } }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            pl={1}
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
