import { Stack, Typography } from '@mui/material';
import { categories } from '../../utils/constants';

// category feature state management
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../features/category/categorySlice';
import { getDataFromAPI } from '../../features/category/categorySlice';

const Sidebar = () => {
  const { selectedCategory } = useSelector((store) => store.category);
  const dispatch = useDispatch();

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
            onClick={() => {
              dispatch(setCategory(category.name));
              dispatch(
                getDataFromAPI(`search?part=snippet&q=${category.name}`)
              );
            }}
          >
            <span
              className="icon-btn"
              style={{
                color: category.name === selectedCategory ? '#fff' : '#f31503',
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
