import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Bookmark } from "react-feather";
import SendIcon from "@mui/icons-material/Send";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import { RWebShare } from "react-web-share";
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./styles.module.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const SimpleDialog = (props)=> {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} >
      {/* <DialogTitle>Set backup account</DialogTitle> */}
      <List sx={{ pt: 0 }}>
        
        <ListItem autoFocus button onClick={() => {handleListItemClick('addAccount');props.save();}}>
          <ListItemAvatar>
            <Avatar>
              <Bookmark />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Save" />
        </ListItem>
     
        <Link
                   href={
                    props.profile?.data?.data?.username == props.storeName
                    ? `/profile`
                    : `/store/${props.storeName}`
                    }
                    passHref={true}
                >
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <StoreMallDirectoryIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Visit Store" />
        </ListItem>
        </Link>

        <RWebShare
              data={{
                text: `Hey, checkout this amazing store ${props.storeName} on Bold.`,
                url: `https://www.boldstore.in/product/${props.storeUrl}`,
                title: `${props.storeName} on Bold`,
              }}
              className={styles.share}
              style={{ color: "var(--black) !important" }}
              onClick={() => console.log("Shared successfully!")}
            >
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <SendIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Share" />
        </ListItem>
        </RWebShare>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      
      <Button  onClick={handleClickOpen}>
      <MoreHorizIcon className={styles.moreIcon} />
      </Button>
      <SimpleDialog
        save={props.save}
        selectedValue={selectedValue}
        storeName={props.storeName}
        storeUrl = {props.storeUrl}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
