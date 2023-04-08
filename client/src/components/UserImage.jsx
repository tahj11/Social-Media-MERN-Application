import { Box } from "@mui/material";
import WidgetWrapper from "./WidgetWrapper";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={`http://localhost:3001/assets/${image}`}
        alt=""
      />
    </Box>
  );
};

export default WidgetWrapper;
