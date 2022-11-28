import { Box, Button, Grid, Typography } from "@mui/material";
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { arrowStyle, btnHoverStyle, flexCenter } from "../styles/globalStyle";
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useSortColumn from "../hooks/useSortColumn";
import SalesModal from "../components/modals/SalesModal";

const Sales = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  const columnObj = {
    createds: 1,
    quantity: 1,
    price_total: 1,
  };

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { products, brands, sales, firms } = useSelector(
    (state) => state.stock
  );
  const { getProPurBraFirms, deleteSale , getSales } = useStockCalls();
  const { columns, handleSort, sortedData } = useSortColumn(
    sales,
    columnObj
  );

  useEffect(() => {
    getProPurBraFirms();
    getSales();
  }, []);

  const filteredProducts = products
    ?.filter((item) => selectedBrands.includes(item.brand))
    .map((product) => product?.name);

  const isBrandSelected = (sale) => {
    return (
      selectedBrands.includes(sale?.brand) || selectedBrands.length === 0
    );
  };

  const isProductSelected = (sale) => {
    return (
      selectedProducts.includes(sale?.product) ||
      selectedProducts.length === 0
    );
  };

  console.log(sortedData);

  return (
    <Grid container sx={{ flexDirection: "column" }}>
      <Grid item>
        <Typography variant="h4" color="error">
          Sales
        </Typography>

        <Button
          variant="contained"
          sx={{ margin: "1rem 0" }}
          onClick={() => setOpen(true)}
        >
          New Sales
        </Button>
      </Grid>

      <SalesModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <MultiSelectBox
          handleSelect={(value) => setSelectedBrands(value)}
          placeholder="Select brands"
          maxWidth="max-w-xs"
        >
          {brands?.map((item) => (
            <MultiSelectBoxItem
              key={item.name}
              value={item.name}
              text={item.name}
            />
          ))}
        </MultiSelectBox>

        <MultiSelectBox
          handleSelect={(value) => setSelectedProducts(value)}
          placeholder="Select products"
          maxWidth="max-w-xs"
        >
          {filteredProducts?.map((item) => (
            <MultiSelectBoxItem key={item} value={item} text={item} />
          ))}
        </MultiSelectBox>
      </Box>

      {/* Tablo */}
      <TableContainer
        component={Paper}
        sx={{ marginTop: "2rem" }}
        elevation={10}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box sx={arrowStyle} onClick={() => handleSort("createds")}>
                  <div>Date</div>
                  {columns.createds === 1 && <UpgradeIcon />}
                  {columns.createds !== 1 && <VerticalAlignBottomIcon />}
                </Box>
              </TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Brand Name</TableCell>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">
                <Box sx={arrowStyle} onClick={() => handleSort("quantity")}>
                  <div>Quantity</div>
                  {columns.quantity === 1 && <UpgradeIcon />}
                  {columns.quantity !== 1 && <VerticalAlignBottomIcon />}
                </Box>
              </TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">
                <Box sx={arrowStyle} onClick={() => handleSort("price_total")}>
                  <div>Amount</div>
                  {columns["price_total"] === 1 && <UpgradeIcon />}
                  {columns["price_total"] !== 1 && <VerticalAlignBottomIcon />}
                </Box>
              </TableCell>
              <TableCell align="center">Operation</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData
              ?.filter((sale) => isBrandSelected(sale))
              ?.filter((sale) => isProductSelected(sale))
              ?.map((item, index) => (
                <TableRow
                  key={item?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.createds}
                  </TableCell>
                  <TableCell align="center">
                    {item?.category[0]?.name}
                  </TableCell>
                  <TableCell align="center">{item?.brand}</TableCell>
                  <TableCell align="center">{item?.product}</TableCell>
                  <TableCell align="center">{item?.quantity}</TableCell>
                  <TableCell align="center">{item?.price}</TableCell>
                  <TableCell align="center">
                    {item?.price * item?.quantity}$
                  </TableCell>
                  <TableCell align="center" sx={{ display: "flex" }}>
                    <Box
                      onClick={() => {
                        setInfo(item);
                        setOpen(true);
                      }}
                    >
                      <EditIcon sx={btnHoverStyle} />
                    </Box>
                    <Box onClick={() => deleteSale(item?.id)}>
                      <DeleteIcon sx={btnHoverStyle} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Sales;
