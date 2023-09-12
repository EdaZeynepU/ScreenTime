import { Grid, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Top3SelectionPage() {
  return (
    <div style={{ width: "95%", margin: "0 auto", display: "flex" }}>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "90px",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(241, 232, 188),rgb(255, 165, 113))",
            }}
          >
            <h1>Comedy Cartoons</h1>
            <Link to="cartoon_comedy">
              <Button size="large" variant="outlined" color="secondary">
                See top 3
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(133, 245, 217),rgb(83, 195, 217))",
            }}
          >
            <h1>Comedy Series</h1>
            <Link to="comedy_series">
              <Button size="large" variant="outlined" color="secondary">
                See top 3
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(158, 213, 250),rgb(87, 126, 255))",
            }}
          >
            <h1>Anime</h1>
            <Link to="anime">
              <Button size="large" variant="outlined" color="secondary">
                See top 3
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(231, 177, 231),rgb(168, 121, 255))",
            }}
          >
            <h1>Family Movies</h1>
            <Link to="family_movies">
              <Button size="large" variant="outlined" color="secondary">
                See top 3
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(124, 12, 12),rgb(255, 11, 11))",
            }}
          >
            <h1>Horror Movies</h1>
            <Link to="horror">
              <Button size="large" variant="outlined" color="secondary">
                See top 3
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(178, 250, 85),rgb(38, 196, 38))",
            }}
          >
            <h1>Documenteries</h1>
            <Link to="documenteries">
              <Button size="large" variant="outlined" color="secondary">
                See top 3
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(100, 91, 51),rgb(238, 217, 173))",
            }}
          >
            <h1>Drama</h1>
            <Button size="large" variant="outlined" color="secondary">
              See top 3
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            className="top3-category-element"
            sx={{
              background:
                "linear-gradient(55deg,rgb(231, 95, 140),rgb(250, 162, 210))",
            }}
          >
            <h1>Life Shows</h1>
            <Button size="large" variant="outlined" color="secondary">
              See top 3
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Top3SelectionPage;
