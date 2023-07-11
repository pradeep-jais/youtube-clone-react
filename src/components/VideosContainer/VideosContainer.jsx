import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { useSelector } from 'react-redux';
import Error from '../pages/Error';

const VideosContainer = ({ padding }) => {
  const { videoData, isLoading, isError, errorMessage } = useSelector(
    (store) => store.category
  );

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
  return (
    <Stack
      height="auto"
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      padding={padding}
    >
      {videoData.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};
export default VideosContainer;
