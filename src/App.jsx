import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import {
  Feed,
  SearchFeed,
  VideoPlay,
  ChannelDetails,
} from './components/pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoPlay />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
