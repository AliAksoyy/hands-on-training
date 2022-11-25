
import { Typography, Box,Button, Grid } from "@mui/material";
import {useEffect} from "react"
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {

  const {getFirms}= useStockCalls()

  const {firms} = useSelector(state=> state.stock)

useEffect(() => {
 getFirms()
}, [])




  return ( 
        <div>
            <Box>
              <Typography variant="h4" mb={4}>
                Firms
              </Typography>
              <Button variant="contained">New Firm</Button>
              {firms?.length > 0 && (
                <Grid container >
                    {firms?.map((firm,i)=> 
                  <Grid item key={i}>
                      <FirmCard firm={firm} />
                  </Grid>
                  )}
                </Grid>
              )}
            
            </Box>

        </div>
  )
};

export default Firms;
