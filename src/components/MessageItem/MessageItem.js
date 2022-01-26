import React from "react";
import { Avatar, Box, Grid, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import botAva from "../../assets/img/bot.png";
import userAva from "../../assets/img/user.png";
import BotLoader from "../Loader/BotLoader";

const MessageItem = ({ id, name, mess, isBotActive }) => {
  return (
    <ListItem key={id}>
      <Grid container display="flex" direction="column" wrap="nowrap">
        <Grid
          display="flex"
          justifyContent={name === "bot" ? "flex-start" : "flex-end"}
        >
          <Box>
            <ListItemText secondary={name} />
          </Box>
        </Grid>
        <Grid
          container
          display="flex"
          direction={name === "bot" ? "row" : "row-reverse"}
        >
          <Box>
            <Avatar
              sx={{ width: "30", height: "30" }}
              src={name !== "bot" ? userAva : botAva}
            />
          </Box>
          <ListItemText
            primary={isBotActive ? <BotLoader /> : mess}
            sx={{
              margin: "0 20px",
              padding: 2,
              border: "1px solid #1976D2",
              borderRadius: 2,
              maxWidth: isBotActive ? 25 : 400,
            }}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

MessageItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  mess: PropTypes.string.isRequired,
  isBotActive: PropTypes.bool,
};

MessageItem.defaultProps = {
  isBotActive: false,
};

export default MessageItem;
