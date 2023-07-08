import { Box, Stack, Typography, ListItem } from '@mui/material';
import Sidebar from '../Sidebar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, padding: 2 }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '95vh' },
          maxWidth: { xs: 'auto', md: '15rem' },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Pradeep Jais Official Youtube Clone
          <span> &copy; JSM </span>
        </Typography>
      </Box>
    </Stack>
  );
};
export default Feed;
