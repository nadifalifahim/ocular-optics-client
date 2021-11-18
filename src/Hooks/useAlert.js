import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const useAlert = (alertText, alertType) => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={alertType}>{alertText}</Alert>
      </Stack>
    </div>
  );
};

export default useAlert;
