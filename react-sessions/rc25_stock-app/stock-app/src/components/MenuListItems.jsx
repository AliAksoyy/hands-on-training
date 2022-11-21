import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Navigate, useNavigate } from "react-router-dom";

const icons = [
    {
      icon: <DashboardIcon />,
      title: "Dashboard",
      url: "/stock/",
    },
    {
      title: "Purchase",
      icon: <ShoppingCartIcon />,
      url: "/stock/purchases/",
    },
    {
      title: "Sales",
      icon: <AttachMoneyIcon />,
      url: "/stock/sales/",
    },
    {
      title: "Firms",
      icon: <StoreIcon />,
      url: "/stock/firms/",
    },
    {
      title: "Brands",
      icon: <StarsIcon />,
      url: "/stock/brands/",
    },
    {
      title: "Products",
      icon: <InventoryIcon />,
      url: "/stock/products/",
    },
    {
        title:"Admin Panel",
        icon : <SupervisorAccountIcon />,
        url : "https://14281.fullstack.clarusway.com/admin"
    }
  ];

const iconStyle = {
    color:"#eee",
    "& .MuiSvgIcon-root" : {color:"#eee"},
    "&:hover": {color:"red"},   

}


const MenuListItems = () => {

    const navigate = useNavigate()
  return (
    <div>
         <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {!item.url.includes("http") && 
            ( <ListItemButton sx={iconStyle} onClick={()=> navigate(item.url)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton> 
            )}
            {item.url.includes("http") && 
            ( <ListItemButton sx={iconStyle} to={item.url}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton> 
            )}
            
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListItems