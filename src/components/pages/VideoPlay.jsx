import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDataFromAPI } from '../../features/category/categorySlice';
import { useEffect } from 'react';
import Error from './Error';
import { CheckCircle } from '@mui/icons-material';
import VideosContainer from '../VideosContainer/VideosContainer';
import { setPage } from '../../features/category/categorySlice';

const VideoPlay = () => {
  const { isLoading, isError, videoDetails, errorMessage } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  // console.log(videos);
  // console.log(videoDetails);

  useEffect(() => {
    // set video play page
    dispatch(setPage('VideoPlay'));

    dispatch(getDataFromAPI(`videos?part=snippet,statistics&id=${id}`));
    dispatch(
      getDataFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    );
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-container" style={{ height: '90vh' }}>
        <div className="loading"></div>
      </div>
    );
  }

  if (isError) {
    return <Error errorMessage={errorMessage} />;
  }
  if (!videoDetails) {
    return (
      <div style={{ height: '90vh' }}>
        <div className="loading"></div>
      </div>
    );
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <main className="video-player section-center">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box
          sx={{
            background: '#000',
            width: { xs: '100%', sm: '100%' },
            padding: { md: '0 2rem 0 2rem', lg: '0 2rem 0 3rem' },
            height: '100%',
            // position: 'sticky',
            // top: '80px',
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Box
            sx={{
              color: 'var(--clr-white)',
              padding: '1rem',
            }}
          >
            <Typography color="var(--clr-white)" variant="h6" fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ sm: 'center' }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color={'var(--clr-grey-9)'}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '16px' }} />
                </Typography>
              </Link>
              <Stack
                direction={'row'}
                gap={'20px'}
                alignItems={'center'}
                mt={1}
              >
                <Typography variant="body1" sx={{ opacity: '0.7' }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: '0.7' }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <VideosContainer direction="column" flex={'flex'} />
      </Stack>
    </main>
  );
};
export default VideoPlay;
