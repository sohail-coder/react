import Book from "./components/molecules/Book";
import { theme } from "./components/molecules/themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/organisms/Navbar";
import Nav from "./components/organisms/Nav";
function App() {
  return (
    <Nav />
    // // <ThemeProvider theme={theme}>
    //   {/* <NavBar /> */}
    //   // <div style={{ flexDirection: "row" }}>
    //     <Nav />
    //     {/* <Book
    //       title="Intro to Python"
    //       author="Sohail Shaik"
    //       isExplore={true}
    //       readTime={15}
    //       url="./1.png"
    //     /> */}
    //   // </div>
    // // </ThemeProvider>
  );
}

export default App;
