import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail }) => {
  // Destructuring
  const channelId = channelDetail?.id?.channelId;
  const img =
    channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture;
  const title = channelDetail?.snippet?.title;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', sm: '320px' },
        height: '100%',
        margin: 'auto',
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <CardMedia
            image={img}
            alt={title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {title}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: 'powderblue',
                marginLeft: 0.5,
              }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
export default ChannelCard;
