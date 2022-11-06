import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import  Button  from "@mui/material/Button";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";
import { useState } from "react";

const TextFieldCom = () => {
    const [error, setError] = useState(true)
  return (
   <>
    <Container>
        <Typography variant="h4" color="error" mt={4} align="center">Text Field</Typography>
        <Box sx={{mt:4, textAlign:"center"}}>
            <TextField id="email"
             label="email"
              placeholder="enter your email"
               fullwidth
                error={error}
                helperText={error && "yanlış"}
                />
        </Box>
        <Box >
            <TextField id="password"
             label="password"
             margin="dense"
              placeholder="enter your password"
               fullwidth
                error={error}
                helperText={error && "yanlış"}
                /> <hr></hr>
            <Button variant="contained" color="warning" sx={{marginTop:"3rem"}}>Submit</Button>
        </Box>
    </Container>
   </>
  )
}

export default TextFieldCom