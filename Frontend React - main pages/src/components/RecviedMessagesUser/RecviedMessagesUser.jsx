import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import DraftsIcon from '@mui/icons-material/Drafts';
import MessageIcon from '@mui/icons-material/Message';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReplyIcon from '@mui/icons-material/Reply';

import TelegramIcon from '@mui/icons-material/Telegram';
import { Avatar, Box } from "@mui/material";
import "./styles.css";
import { useGetReplyAdmin } from "./useGetReplyAdmin";
import { useGetUserMessage } from "./useGetUserMessage";

const RecviedMessagesUser = () => {

  const { data: userMessageData, isLoading: isLoadingMessage, error: errorUserMessage } = useGetUserMessage();

  console.log(userMessageData);
  // const { data: adminReply, isLoading: LoadingAdminReply, error: errorAdminReply } = useGetReplyAdmin();

  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        alignItems: "center",
      }}>
        <Accordion transition="0.2s ease"
          disableGutters
          className="accordion-container"
          defaultExpanded
          sx={{ border: "none !important" }}
        >
          <AccordionSummary
            className="accordion-summary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box className="accordion-header">


              <Avatar sx={{ backgroundColor: "#3563E9" }} >
                < TelegramIcon sx={{ color: "#fff" }} />
              </Avatar>
              <Box >Your Messages</Box>
            </Box>
          </AccordionSummary>

          <Box>
            {userMessageData && userMessageData.data && [...userMessageData.data].reverse().map((message, index) => (
              <AccordionDetails key={index} className="accordion-details">
                <Box
                >
                  <Box m={2}>
                    <DraftsIcon fontSize="xl2" sx={{ mx: 1, color: "red" }} />
                    <Typography component="span" fontWeight={600}> Subject:</Typography>
                    <Typography component="span">{message.title}</Typography>
                  </Box>
                  <Box m={2}>
                    <MessageIcon fontSize="xl2" sx={{ mx: 1, color: "#3563E9" }} />
                    <Typography component="span" fontWeight={600}> Body:</Typography>
                    <Typography component="span">&nbsp;&nbsp;{message.body}</Typography>
                  </Box>
                  <Box m={2}>
                    <ReplyIcon fontSize="xl2" sx={{ mx: 1, color: "green" }} />
                    <Typography component="span" fontWeight={600}>Reply:</Typography>

                    <Typography component="span">{message?.replay ? message.replay : "Pending"}</Typography>
                  </Box>
                    <img src={message?.attachments?.url} alt="" style={{width:'50%'}} />

                  {/* <Typography>{message.title}</Typography>
                <Typography>{message.body}</Typography> */}
                </Box>
              </AccordionDetails>
            ))}
          </Box>
        </Accordion>
      </Box>
    </>);
};
export default RecviedMessagesUser;

