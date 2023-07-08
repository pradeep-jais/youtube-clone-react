import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import { Feed, SearchFeed, VideoPlay, ChannelDetail } from './components/pages';

import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: '#000', width: '100%' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/video/:id" element={<VideoPlay />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
