export const globalHoverStyle = {
    "&:hover .MuiSvgIcon-root" : {color:"red"},
    "&:hover": {color:"red"},
    cursor:"pointer"
}
export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column",
    gap:"1.5rem"
  };

  export const flexCont = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    gap:2,
  }
  export const flex = {
    display:"flex",
    justifyContent:"center",
    "&:hover .MuiSvgIcon-root" : {color:"red"},
    "&:hover": {color:"red"},
    cursor:"pointer"
    
  }

  export const select={
    display:"flex",
    justifyContent:"center",
    flexDirection: {xs:"column",sm:"row"},
    gap:"2rem"
  }