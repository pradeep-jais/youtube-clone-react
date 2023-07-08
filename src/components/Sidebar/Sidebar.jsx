import { Stack, Typography } from '@mui/material';
import { categories } from '../../utils/constants';

import { useSelector, useDispatch } from 'react-redux';

const Sidebar = () => {
  const { selectedCategory } = useSelector((store) => store.category);

  return (
    <Stack
      variant="text"
      sx={{
        overflow: 'auto',
        height: { xs: 'auto', sm: '90%' },
        flexDirection: { xs: 'row', md: 'column' },
        borderRight: { xs: 'none', md: '1px solid #3d3d3d' },
        paddingRight: 2,
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            key={category.name}
            style={{
              color: '#fff',
              background: category.name === selectedCategory && '#f31503',
            }}
          >
            <span
              className="icon-btn"
              style={{
                color:
                  category.name === selectedCategory
                    ? '#fff !important'
                    : '#f31503',
                marginRight: '0.8rem',
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};
export default Sidebar;
