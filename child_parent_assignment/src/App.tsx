import Book from "./components/molecules/Book";
import { ThemeProvider } from "@mui/material/styles";
import Nav from "./components/organisms/Nav";
import mainTheme from "./theme1/mainTheme";
import Footer from "./components/organisms/Footer";
import { Grid, Typography } from "@mui/material";

function App() {
  return (
    // <Navbar />

    <ThemeProvider theme={mainTheme}>
      <Grid
        container
        direction="row"
        position="absolute"
        style={{ width: "100%" }}
        sx={{ top: "20px" }}
      >
        <Grid item lg={3}></Grid>
        <Grid
          item
          lg={9}
          // style={{ paddingLeft: "300px", position: "absolute" }}
        >
          <Nav />
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid item lg={9}>
          <Typography
            sx={{ position: "relative", top: "105px" }}
            variant="heading"
          >
            {"My Library"}
          </Typography>
        </Grid>
        <Grid item lg={3}></Grid>
        <Grid
          container
          lg={9}
          spacing={4}
          sx={{ top: "200px", position: "relative" }}
        >
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
            <Book
              title="Intro to Python"
              author="Sohail Shaik"
              // isExplore={true}
              readTime={15}
              url="./1.png"
            />
          </Grid>
          {/* <Grid container> */}
        </Grid>
        <Grid item lg={12} style={{ position: "relative", top: "-100px" }}>
          <Footer />
        </Grid>
      </Grid>
      {/* <div style={{ position: "relative" }}>
        <Footer />
      </div> */}
    </ThemeProvider>
    // {/* <div style={{ flexDirection: "row" }}> */}
    // {/* //     <Nav /> */}
    // {/* <Book
    //   title="Intro to Python"
    //   author="Sohail Shaik"
    //   isExplore={true}
    //   readTime={15}
    //   url="./1.png"
    // /> */}
    // {/* //   // </div> */}
  );
}

export default App;
