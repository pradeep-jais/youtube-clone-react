import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDataFromAPI } from '../../features/category/categorySlice';
import { useEffect } from 'react';
import Error from './Error';
import { CheckCircle } from '@mui/icons-material';
import VideosContainer from '../VideosContainer/VideosContainer';

const VideoPlay = () => {
  const { isLoading, isError, videoDetails, errorMessage } = useSelector(
    (store) => store.category
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  // console.log(videos);
  // console.log(videoDetails);

  useEffect(() => {
    dispatch(getDataFromAPI(`videos?part=snippet,statistics&id=${id}`));
    dispatch(
      getDataFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    );
  }, [id]);

  if (!videoDetails) {
    return (
      <div style={{ height: '90vh' }}>
        <div className="loading"></div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ height: '90vh' }}>
        <div className="loading"></div>
      </div>
    );
  }

  if (isError) {
    return <Error errorMessage={errorMessage} />;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <main className="video-player section-center">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: 'var(--clr-white)' }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography
                variant={{ sm: 'subtitle1', md: 'h6' }}
                color={'var(--clr-white)'}
              >
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: '12px', color: 'var(--clr-grey-5)' }}
                />
              </Typography>
            </Link>
            <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
              <Typography variant="body1" sx={{ opacity: '0.7' }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: '0.7' }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          px={2}
          py={{ md: '1', xs: '5' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <VideosContainer direction="column" />
        </Box>
      </Stack>
    </main>
  );
};
export default VideoPlay;
