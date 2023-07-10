import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { useSelector } from 'react-redux';

const VideosContainer = ({ paddingLeft }) => {
  const { videoData, isLoading } = useSelector((store) => store.category);

  if (isLoading) {
    return (
      <div style={{ height: '90vh' }}>
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <Stack
      height="auto"
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      paddingLeft={paddingLeft}
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
