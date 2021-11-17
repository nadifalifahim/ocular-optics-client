import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const useSuccessAlert = () => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">Product added successfully</Alert>
      </Stack>
    </div>
  );
};

export default useSuccessAlert;
