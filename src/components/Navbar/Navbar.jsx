import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { logo } from '../../utils/constants';
import SearchBar from './SearchBar.jsx';

// constants import

const Navbar = () => {
  return (
    <nav className="navbar">
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: 'sticky',
          background: '#000',
          top: 0,
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <YouTubeIcon sx={{ fontSize: '3.25rem', color: 'red' }} />
          <span
            style={{
              fontSize: '2.25rem',
              color: '#fff',
              marginLeft: '0.25rem',
            }}
          >
            YouTube
          </span>
        </Link>
        <SearchBar />
      </Stack>
    </nav>
  );
};
export default Navbar;
