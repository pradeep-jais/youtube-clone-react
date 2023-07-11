import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../../utils/constants';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log(channelDetail);
  // Destructuring
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
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
        textAlign: 'center',
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardMedia
          image={img}
          alt={title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            margin: 'auto',
            mb: 2,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant="h6" color="#fff">
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
            ).toLocaleString()}{' '}
            subscribers
          </Typography>
        )}
      </Link>
    </Box>
  );
};
export default ChannelCard;