import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { logo } from '../../utils/constants';
import SearchBar from './SearchBar.jsx';

// constants import

const Navbar = () => {
  return (
    <nav className="navbar section-center">
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        height="5rem"
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
          <YouTubeIcon
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              color: 'red',
            }}
          />
          <span className="youtube-icon-text">YouTube</span>
        </Link>
        <SearchBar />
      </Stack>
    </nav>
  );
};
export default Navbar;
