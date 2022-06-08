import React from "react";
import data from "./data/data.json";
import { Grid } from "@mui/material";
import Book from "./components/molecules/Book";

function BookLoop(props) {
  return data.forEach((element) => {
    return (
      <Grid item lg={4} style={{ bottom: "50px", position: "relative" }}>
        <Book
          title={element.title}
          author={element.author}
          // isExplore={true}
          readTime={element.readTime}
          url={element.url}
        />
      </Grid>
    );
  });
}

export default BookLoop;
