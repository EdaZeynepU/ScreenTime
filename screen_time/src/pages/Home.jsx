import { Box, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
        <Stack sx={{background:"linear-gradient(var(--mui-secondary-main),var(--mui-accent-main))",width:"100vw",height:"250px"}}>
      <Box
        display={"flex"}
        sx={{
          margin: "120px auto 30px auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <Box
            display={"flex"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "3px solid var(--mui-secondary-main)",
            }}
          >
            <Search fontSize="large" />
            <input
              type="text"
              style={{
                padding: "15px",
                width: "45vw",
                fontSize: "1.15rem",
                border: "none",
              }}
            />
          </Box>
      </Box>
        </Stack>
    </div>
  );
};

export default Home;
