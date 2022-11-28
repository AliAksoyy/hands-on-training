import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { Info } from "@mui/icons-material";
import { flexColumn } from "../../styles/globalStyle";
import { TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SalesModal({ open, setOpen, info, setInfo }) {
  const { brands, products} = useSelector((state) => state?.stock);
  const { putSale, postSale } = useStockCalls();

  const handleChange = (event) => {
    const {
      target: { id, value },
    } = event;
    setInfo({ ...info, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putSale(info);
    } else {
      postSale(info);
    }
    setInfo({});
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setInfo({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" sx={flexColumn} onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="brand"
                value={info?.brand}
                label="brands"
                onChange={handleChange}
              >
                {brands?.map((brand) => (
                  <MenuItem value={brand.name} key={brand.id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="product"
                value={info?.product}
                label="products"
                onChange={handleChange}
              >
                {products?.map((product) => (
                  <MenuItem value={product.name} key={product.id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Quantity"
                type="number"
                id="quantity"
                value={info?.quantity}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Price"
                type="number"
                id="price"
                value={info?.price}
                onChange={handleChange}
              />
            </FormControl>

            <Button type="submit" variant="contained" fullWidth>
              Add New Sale
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
