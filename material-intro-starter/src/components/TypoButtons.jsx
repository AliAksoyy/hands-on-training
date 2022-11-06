import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import  Button  from "@mui/material/Button";
import  Box  from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
  return <>
<Container>
<Typography variant="button" component="h3" align="center" mt={3} color="error"
>
  MUI TYPOGRAPHY
</Typography>
<Typography variant="body" component="h3" align="justify" mt={3} sx={{backgroundColor:"lightgreen", color:"#a32"}}
>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos!
</Typography>
<Typography variant="button" sx={{dispaly:"inline-block", marginTop:"2rem"}}>
Lorem ipsum dolor sit amet.
</Typography>

</Container>

<Container>
<Box sx={{display:"flex", flexDirection:"column", gap:"0.6rem", margin:"auto "}}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
        Delete
      </Button>
      <Button color="success" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
</Box>
    
</Container>
  </>
};

export default TypoButtons;
