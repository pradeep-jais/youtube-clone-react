import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video, flex }) => {
  // console.log(video);

  // destructuring
  const {
    id: { videoId },
    snippet,
  } = video;
  const { title, channelId, channelTitle } = snippet;
  const img = snippet?.thumbnails?.high?.url;

  return (
    <Card
      sx={
        flex
          ? {
              boxShadow: 'none',
              borderRadius: 0,
              display: { xs: 'block', sm: flex, md: 'block', lg: flex },
              padding: { sm: '0 1rem', md: '0 1rem 0 0' },
              width: '100%',
              background: '#000',
            }
          : {
              boxShadow: 'none',
              borderRadius: 0,
              width: { xs: '100vw', sm: '240px' },
            }
      }
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={img || demoThumbnailUrl}
          alt={title}
          sx={{
            width: { xs: '100vw', sm: '240px' },
            height: { xs: '232px', sm: '135px' },
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: '#000',
          width: { sm: '100%', lg: '240px' },
          maxWidth: '298px',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              maxHeight: '3rem',
              overflow: 'hidden',
            }}
          >
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="caption" fontWeight="bold" color="gray">
            {channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
