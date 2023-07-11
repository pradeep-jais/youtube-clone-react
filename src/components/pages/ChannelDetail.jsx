import { useSelector, useDispatch } from 'react-redux';

import { getDataFromAPI } from '../../features/category/categorySlice';
import { getChannelData } from '../../features/channelPage/channelSlice';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ChannelCard from '../VideosContainer/ChannelCard';
import VideosContainer from '../VideosContainer/VideosContainer';

const ChannelDetails = () => {
  const { channelData } = useSelector((store) => store.channel);
  const { videoData } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const { id } = useParams();

  // console.log('channel', channelData);
  // console.log('video', videoData);

  useEffect(() => {
    dispatch(getChannelData(`channels?part=statistics&id=${id}`));
    dispatch(getDataFromAPI(`search?channelId=${id}&part=snippet&order=date`));
  }, [id]);

  return (
    <Box>
      <div
        style={{
          background:
            'radial-gradient(circle, rgba(227,207,52,1) 0%, rgba(56,227,216,1) 54%, rgba(172,55,235,1) 100%)',
          height: '220px',
        }}
      />
      <ChannelCard channelDetail={channelData} marginTop="-90px" />

      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <VideosContainer padding={2} />
      </Box>
    </Box>
  );
};
export default ChannelDetails;
