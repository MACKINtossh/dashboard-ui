import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {/* MAIN DIV */}

      <div className="welcome-back">
        {/* WELCOME BACK DIV */}
        WELCOME
      </div>

      <div className="preview">
        {/* PREVIEW SLIDER */}
        PREVIEW
      </div>
    </Box>
  );
};

export default Home;
