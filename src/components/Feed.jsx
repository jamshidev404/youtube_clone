import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchFromAPI(`search?part=snippets&q=${selectedCategory}`);
  }, []);
  
  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar />
          <Typography
            className='coppyright'
            variant='body2'
            sx={{ mt: 0.6, color: "#fff" }}
          >
            All Rights Reserved
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb={2}
            sx={{ color: "white" }}
          >
            New
            <span style={{ color: "#f31503" }}> videos</span>
          </Typography>

          <Videos videos={[]} />
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
