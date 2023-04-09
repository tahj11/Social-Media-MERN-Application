import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        // src={`http://localhost:6001/assets/${image}`}
        src="https://yt3.googleusercontent.com/XsjK_k4msgeQWO4xZDdEU3ExccLVkmPNnwNwDL4ivJJhnXXG-9FoLMecy_ro4JOjyh6O2Z5ITac=s900-c-k-c0x00ffffff-no-rj"
        alt=""
      />
    </Box>
  );
};

export default UserImage;
