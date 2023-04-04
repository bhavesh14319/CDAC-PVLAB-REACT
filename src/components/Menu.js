import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom"

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigate = useNavigate();

  function navigator(index) {
    console.log(index)
    if (index == 0) {
      
    console.log("hoell")
      navigate("/singlecoin")
    } 
    else if (index == 1) {
      navigate("/twocoin")
    }
    else if (index == 2) {
      navigate("/singledice")
    }
    else if (index == 3) {
      navigate("/doubledice")
    }
    else if (index == 4) {
      navigate("/Quiz")
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <List>
        {[
          "Single Coin",
          "Double Coin",
          "Single Dice",
          "Double Dice",
          "Quiz",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => navigator(index)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <img src="https://img.icons8.com/ios/50/5397FF/cheap-2.png" />
                )}
                {index === 1 && <img src="https://i.imgur.com/zK4WAkh.jpg" />}
                {index === 2 && (
                  <img src="https://img.icons8.com/emoji/48/null/game-die.png" />
                )}
                {index === 3 && (
                  <img src="https://img.icons8.com/color/48/null/rolling-dice.png" />
                )}
                {index === 4 && (
                  <img src="https://img.icons8.com/external-filled-outline-design-circle/50/null/external-Questions-life-skills-filled-outline-design-circle.png" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/circled-menu.png" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
