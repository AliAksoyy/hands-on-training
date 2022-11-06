import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import  Button  from "@mui/material/Button";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";

const TextFieldCom = () => {
  return (
   <>
    <Container>
        <Typography variant="h4" color="error" mt={4} align="center">Text Field</Typography>
        <Box>
            <TextField />
        </Box>
    </Container>
   </>
  )
}

export default TextFieldCom