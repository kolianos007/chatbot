import React, { useEffect, useState } from "react";
import { Box, Divider, Fab, Grid, List, TextField } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";
import MessageItem from "../../components/MessageItem/MessageItem";
import BotLoader from "../../components/Loader/BotLoader";

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
  const [messages, setMessages] = useState([
    { id: 1, name: "bot", mess: "Kyky" },
    {
      id: 2,
      name: "bla",
      mess: "ne chye baba ne chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye baba ne chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye babane chye baba",
    },
  ]);
  console.log(messages);
  const [message, setMessage] = useState("");
  const [isBotActive, setIsBotActive] = useState(false);
  console.log(randomEl(botAnswers));
  const { user } = useAuth();
  console.log(user);

  const addMessageHandler = (name, mess) => {
    console.log(messages);
    setMessages((prev) => [
      ...prev,
      {
        id: messages.length + 1,
        name,
        mess,
      },
    ]);
    console.log(messages);

    setMessage("");
    setIsBotActive(true);
  };

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

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: 2,
        margin: 3,
      }}
    >
      <BotLoader />
      <List style={{ height: "65vh", overflow: "auto", padding: "20px 0" }}>
        {messages.map(({ id, name, mess }) => (
          <MessageItem key={id} id={id} name={name} mess={mess} />
        ))}
      </List>
      <Divider />
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            disabled={isBotActive && true}
          />
        </Grid>
        <Grid item xs={1}>
          <Fab
            disabled={isBotActive && true}
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
