import { Box, Stack, Typography, ListItem } from '@mui/material';
import Sidebar from '../Sidebar';
import Videos from '../Videos';

const Feed = () => {
  return (
    <main className="feed section-center">
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          padding: '0.5rem 0 0 1rem',
        }}
      >
        <Box
          sx={{
            height: { xs: 'auto', md: '95vh' },
            maxWidth: { xs: 'auto', md: '14rem' },
          }}
        >
          <Sidebar />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: '#fff' }}
          >
            Copyright {new Date().getFullYear()} Youtube Clone <br />
            Pradeep Jais Official
            <span> &copy; JSM </span>
          </Typography>
        </Box>
        <Box py={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'white' }}
          >
            New
            <span style={{ color: '#f31503', marginLeft: '0.8rem' }}>
              videos
            </span>
          </Typography>
          <Videos />
        </Box>
      </Stack>
    </main>
  );
};
export default Feed;
