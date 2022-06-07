import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import blinklist from "../../assets/blinklist.png";
import searchIcon from "../../assets/searchIcon.png";
import Ava from "../atoms/Avatar/index";
import Buttons from "../atoms/Buttons/Buttons";
import dropdown from "../../assets/drop_down.png";

const Nav = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        style={{ justifyContent: "space-between" }}
        // style={{ justifyContent: "space-between", display: "flex" }}
      >
        <Grid lg={2}></Grid>
        <Grid
          item
          sm={3}
          md={4}
          lg={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          style={
            {
              // position: "absolute",
              // left: "17.36%",
              // right: "74.02%",
              // top: "34.88%",
              // bottom: "34.88%",
            }
          }
          // background= url(Blinklist.png);}}
        >
          <img src={blinklist} alt="logo" />
        </Grid>
        <Grid
          item
          sm={2}
          md={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          style={{
            left: "-10px",
            // position: "relative",
            // left: "8.33%",
            // right: "7.03%",
            // top: "8.33%",
            // bottom: "7.03%",
            /* Grey/500 */
            // background: "#042330",
          }}
        >
          <img src={searchIcon} alt="logo" />
        </Grid>
        <Grid
          item
          sm={2}
          lg={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          style={{
            width: "57px",
            // height: "20px",

            /* Body 1 */

            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",

            /* Text/high_emphasis */

            color: "#03314B",

            /* Inside auto layout */

            flex: "none",
            order: "0",
            flexGrow: "0",
          }}
        >
          <Typography variant="body1">{`Explore`}</Typography>
        </Grid>
        <Grid
          item
          sm={2}
          md={2}
          lg={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          style={{
            // width: "57px",
            // height: "20px",

            /* Body 1 */

            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",

            /* Text/high_emphasis */

            color: "#03314B",

            /* Inside auto layout */

            flex: "none",
            order: "0",
            flexGrow: "0",
          }}
        >
          <Typography>{`My Library`}</Typography>
        </Grid>
        <Grid lg={2}></Grid>
        <Grid
          direction="row"
          container
          sm={2}
          lg={1}
          style={{
            position: "relative",
            // left: "0%",
            // right: "0%",
            // top: "0%",
            // bottom: "0%",
            float: "right",
            /* alpha/primary/300 */

            // background: "#69A6E3",
          }}
        >
          <Ava text="S" />
          <Buttons style={{ left: "-15px" }}>
            <img src={dropdown} alt="dropdown" />
          </Buttons>
        </Grid>
        <Grid lg={2}></Grid>
      </Grid>
    </div>
  );
};
export default Nav;
