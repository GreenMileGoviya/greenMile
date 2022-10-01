import React, { useState } from "react";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { storage, auth, db } from "../../Firebase";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore"; 

const theme = createTheme({
    palette: {
        primary: {
            main: "#007A31",
        },
    },
    typography: {
        fontFamily: "Poppins",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

function TextInput(props) {

    // const [message, setMessage] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // alert(`The name you entered was: ${message}`)
    //     { props.setMsg((obj) => ({ ...obj, id: props.id, text: message })) }
    // }

    const [msg, setMsg] = useState('')
    const user = useSelector((state) => state.user.currentUser);
    const userId = user.id;
    async function sendMessage(e) {
        e.preventDefault()
        // const { uid, photoURL } = auth.currentUser

        try {
            const docRef = await addDoc(collection(db, "messages"), {
                text: msg,
                senderId: userId,
                receiverId: 3,
                // photoURL,
                // uid,
                // createdAt: db.
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        setMsg('')
        props.scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={sendMessage}>
                <Box
                    sx={{
                        display: "flex",
                    }}>
                    <TextField
                        // variant="filled"
                        placeholder="type here"
                        fullWidth
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        <SendRoundedIcon />
                    </Button>
                </Box>
            </form>
        </ThemeProvider>
    );
}

export default TextInput;