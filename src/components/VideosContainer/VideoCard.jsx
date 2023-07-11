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

const VideoCard = ({ video }) => {
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
      sx={{
        width: { xs: '100%', sm: '240px' },
        height: { xs: '100%', sm: '135px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={img || demoThumbnailUrl}
          alt={title}
          sx={{
            component: { xs: 'img' },
            width: { xs: '100%', sm: '240px' },
            height: { xs: '232px', sm: '135px' },
          }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ background: '#000', height: '96px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
