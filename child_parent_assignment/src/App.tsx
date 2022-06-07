// import Book from "./components/molecules/Book";
import { ThemeProvider } from "@mui/material/styles";
import Nav from "./components/organisms/Nav";
import mainTheme from "./theme1/mainTheme";
import Footer from "./components/organisms/Footer";
function App() {
  return (
    // <Navbar />

    <ThemeProvider theme={mainTheme}>
      <Nav />
      <Footer />
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
