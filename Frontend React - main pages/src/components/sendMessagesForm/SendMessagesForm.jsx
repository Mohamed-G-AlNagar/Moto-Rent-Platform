import {
  Typography,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  Grid,
  Stack, Button,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { useForm, } from 'react-hook-form';
import { useSendMessage } from "./useSendMessage";

const UserSendMessageForm = () => {
  const form = useForm({
    mode: "all"
  });
  const { register, formState, reset ,  handleSubmit } = form;
  const { errors } = formState;
  const { sendMessage, isSending } = useSendMessage();
  async function submit(values) {
    let data = {
      title: values.title,
      body: values.body,
      attachments: values.attachments[0]
    };

    try {
      await sendMessage(data);
      reset()
    } catch (error) {
      // console.log(error)
    }
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <>

      <Stack sx={{
        m: 2, p: 2, borderRadius: "10px", backgroundColor: '#ffffff',

        border: "1px solid #3563E9",
      }}>
        <Typography variant="h5" noWrap component="div" sx={{
          color: "#1A202C",
          fontSize: "20px",
          fontWeight: 700,
          font: "Plus Jakarta Sans",
          fontStyle: "bold",
        }} >
          Have a question?
        </Typography>
        <FormHelperText sx={{ mb: 5 }}>Please fill out this form
          if you have a question or problem.We look forward to providing
          you with the best service and our friendly team is always here to chat
        </FormHelperText>
        <form noValidate onSubmit={handleSubmit(submit, onError)}>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={12}>

              <FormLabel component="legend" sx={{
                color: '#1A202C', font: "Plus Jakarta Sans",
                fontWeight: 600, fontSize: "16px"
              }}>Titel</FormLabel>
              <OutlinedInput fullWidth
                id="title"
                placeholder="Titel "
                type="text"
                {...register('title', { required: { value: true, message: "This Filed is required" }, maxLength: { value: 40, message: "Title is too long, maxium 40 letters" }, minLength: { value: 3, message: "name is too short, minum 3 letters" } })}

                sx={{ backgroundColor: "#F6F7F9", borderRadius: "10px", mt: 3, border: "none" }}
                error={!!errors.message}

              />
              <FormHelperText sx={{ color: "red" }}>{errors.title?.message}</FormHelperText>

            </Grid>

            <Grid item xs={12} sm={12}>

              <FormLabel component="legend" sx={{
                color: '#1A202C', font: "Plus Jakarta Sans",
                fontWeight: 600, fontSize: "16px"
              }}>Message</FormLabel>
              <OutlinedInput fullWidth
                id="body"
                placeholder="Entre your message here please!"
                type="text"
                multiline
                rows={4}
                {...register('body', {
                  required: {
                    value: true,
                    message: "This Filed is required"
                  }, maxLength: {
                    value: 200, message: "message is too long, maxium 40 letters"
                  }, minLength: { value: 3, message: "Message is too short, minum 3 letters" }
                })}

                sx={{ backgroundColor: "#F6F7F9", borderRadius: "10px", mt: 3, border: "none", "&:hover": { border: "1px solid #F6F7F9" } }}
                error={!!errors.message}

              />
              <FormHelperText sx={{ color: "red" }}>{errors.body?.message}</FormHelperText>

            </Grid>
            <Grid item sm={6}>

              <FormLabel component="legend" sx={{
                color: '#1A202C', font: "Plus Jakarta Sans",
                fontWeight: 600, fontSize: "16px"
              }}> Attachment</FormLabel>
              <OutlinedInput fullWidth
                id="attachments"

                type="file"
                accepet=".pdf,.doc,.docx"
                {...register('attachments')}

                sx={{ backgroundColor: "#F6F7F9", borderRadius: "10px", mt: 3, border: "none", "&:hover": { border: "1px solid #F6F7F9" } }}
                error={!!errors.message}
              />
            </Grid>
            <Grid item sm={6}>
              <Button disabled={isSending} size="large" sx={{
                mt: 6.5, ml: 6, font: "Plus Jakarta Sans",
                fontWeight: 600, backgroundColor: '#3563E9'
              }} type="submit" variant="contained" endIcon={<SendIcon />}>Send
              </Button>
            </Grid>
          </Grid>

        </form>
      </Stack>
    </>);
};
export default UserSendMessageForm;