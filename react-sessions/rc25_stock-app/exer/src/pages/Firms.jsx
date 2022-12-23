
import { Typography, Box,Button, Grid } from "@mui/material";
import {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModals from "../components/modals/FirmModals";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {

  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState([{
    name:"",
    address:"",
    phone:"",
    image:""
  }])
 
  const {getFirms}= useStockCalls()

  const {firms} = useSelector(state=> state.stock)

useEffect(() => {
 getFirms()
},[])


  return ( 
        <div>
            <Box>
              <Typography variant="h4" mb={4} color="error">
                Firms
              </Typography>
              <Button variant="contained" mb={2} onClick={()=> setOpen(true)}>New Firm</Button>

                <FirmModals open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

              {firms?.length > 0 && (
                <Grid container justifyContent="center" gap={3} >
                    {firms?.map((firm)=> 
                  <Grid item key={firm.id}>
                      <FirmCard firm={firm}  open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
                  </Grid>
                  )}
                </Grid>
              )}
            
            </Box>

        </div>
  )
};

export default Firms;
