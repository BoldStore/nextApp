import { Box } from "@mui/material";
import Info from "../../CommonComponents/Info/Info";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "90%",
  margin: "0px auto",
  backgroundColor: "rgb(30,30,30)",
  borderRadius: "5px",
  padding: "1rem 0",
};

function SalesList() {
  return (
    <Box sx={boxStyle}>
      <Info />
      <Info />
      <Info />
      <Info />
    </Box>
  );
}

export default SalesList;
