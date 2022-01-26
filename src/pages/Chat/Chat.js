import React, { useEffect, useRef, useState } from "react";
import { Box, Divider, Fab, Grid, List, TextField } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import MessageItem from "../../components/MessageItem/MessageItem";
// import BotLoader from "../../components/Loader/BotLoader";

const botAnswers = [
  "Ne chue baba",
  "Yahhhhaaaaaaiii",
  "9 chi 10?",
  "EEEEE",
  "ta za sho",
  "Don",
  "leave the chat, I don't have time to answer you",
];

const randomEl = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Chat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useLocalStorage(user.id, []);
  const [message, setMessage] = useState("");
  const [isBotActive, setIsBotActive] = useState(false);
  const ref = useRef();

  const addMessageHandler = (name, mess) => {
    setMessages((prev) => [
      ...prev,
      {
        id: messages.length + 1,
        name,
        mess,
      },
    ]);

    setMessage("");
    setIsBotActive(true);
  };

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isBotActive) addMessageHandler("bot", randomEl(botAnswers));
    const timeout =
      isBotActive &&
      setTimeout(() => {
        setIsBotActive(false);
      }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isBotActive]);

  const onEnterPress = (e) => {
    console.log(e);
    if (e.key === "Enter") addMessageHandler(user.name, message);
    console.log(message);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: 2,
        margin: 3,
        overflow: "auto",
        height: "calc(100vh - 64px)",
      }}
    >
      <List
        sx={{
          overflow: "auto",
          padding: "20px 0",
          height: "calc(100% - 137px)",
        }}
      >
        {messages.map(({ id, name, mess }, i) => (
          <MessageItem
            key={id}
            id={id}
            name={name}
            mess={mess}
            isBotActive={i === messages.length - 1 && isBotActive}
          />
        ))}
        <div style={{ float: "left", clear: "both" }} ref={ref} />
      </List>
      <Divider />
      <Grid container sx={{ paddingTop: "20px" }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={onEnterPress}
            value={message}
            disabled={isBotActive && true}
          />
        </Grid>
        <Grid item display="flex" justifyContent="flex-end" xs={1}>
          <Fab
            disabled={(isBotActive && true) || message === ""}
            color="primary"
            onClick={() => addMessageHandler(user.name, message)}
          >
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
