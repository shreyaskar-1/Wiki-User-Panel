import PropTypes from 'prop-types';
import { ListSubheader, styled } from '@mui/material';

const NavGroup = ({ item }) => {
  const ListSubheaderStyle = styled((props) => <ListSubheader disableSticky {...props} />)(
    ({ theme }) => ({
      ...theme.typography.overline,
      fontWeight: '700',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: theme.palette.text.primary,
      lineHeight: '26px',
      padding: '10px 25px',
      // Add spacing between sidebar item boxes
      '& + .MuiListItem-root': {
        marginTop: theme.spacing(2),
      },
    }),
  );
  return (
    <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
