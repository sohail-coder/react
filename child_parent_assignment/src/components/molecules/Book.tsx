import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import "./styles/Bookcard.css";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export type Typos = {
  // isExplore: boolean;
  // bookInfo: {
  title: string;
  author: string;
  readTime: number;
  readersCount?: string;
  url: string;
  // };
};

const Book = ({
  // bookInfo: {
  title,
  author,
  readTime,
  readersCount,
  url,
}: // },

Typos) => {
  const [isExplore, setIsExplore] = React.useState(true);
  // const classes = useStyles();
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          image={url}
          alt="bring your human to work image"
        />
        <CardContent className="content">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="div">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{author}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                position: "relative",
                top: "28px",
                height: "1px",
              }}
            >
              <AccessTimeIcon
                style={{ position: "absolute", height: "20px", top: "2px" }}
                className="icon"
              />
              <Typography variant="caption">
                {`${readTime}-mins read`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div className="box">
          <Button
            className="btn-box"
            variant="outlined"
            sx={{
              ":hover": {
                bgcolor: "#0365F2",
                color: "white",
              },
            }}
            startIcon={isExplore && <AddIcon />}
            onClick={() => setIsExplore(!isExplore)}
          >
            {isExplore ? (
              <Typography variant="body2">{"Add to library"}</Typography>
            ) : (
              <Typography variant="body2">{"Finished"}</Typography>
            )}
          </Button>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Book;
