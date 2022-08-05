import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./styles.module.css";
import * as React from 'react';
import Link from "next/link";
import onClickOutside from "react-onclickoutside";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));



  const CustomizedMenus = ()=> {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const [open , setOpen] = React.useState(false);

  CustomizedMenus.handleClickOutside = () => {
    console.log("clikc outside");
        setOpen(false);
  };

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false);
  };

  return (

  
<div className={styles.dropdown}>
<Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={()=>{open?handleClose() : handleClick()}}
      >
        <MoreHorizIcon className={styles.moreIcon} />
      </Button>
  <div className={styles.dropdown_content} style={{display : open? "block" : "none"}}>
    <div onClick={handleClose}>Link 1</div>
    <div onClick={handleClose}>Link 2</div>
    <div onClick={handleClose}>Link 3</div>
  </div>
</div>




      /* <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx ={{position : "absolute" , top : 0}}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <BookmarkBorderIcon />
          Save
        </MenuItem>
        <Link
                   href={
                    profile?.data?.data?.username == storeName
                    ? `/profile`
                    : `/store/${storeName}`
                    }
                    passHref={true}
                >
        <MenuItem onClick={handleClose} disableRipple>
          <StoreMallDirectoryIcon />
          Visit Store
        </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} disableRipple>
          <SendIcon />
          Share
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu> */
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CustomizedMenus.handleClickOutside,
};


export default onClickOutside(CustomizedMenus, clickOutsideConfig);