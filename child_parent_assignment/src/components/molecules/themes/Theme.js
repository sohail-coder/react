import { createTheme } from "@mui/material/styles";
// import { makeStyles } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Cera Pro",
    subtitle1: {
      fontWeight: 700,
      fontFamily: "Cera Pro",
      position: "relative",
      width: "225px",
      height: "23px",
      left: "1px",
      fontSize: "18px",
      lineHeight: "23px",
      color: "#03314b",
      order: 0,
      flexGrow: 0,
    },
    body1: {
      position: "relative",
      left: "1%",
      right: "60.92%",
      top: "74.89%",
      bottom: "20.82%",

      /* Body 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",

      /* Text/low_emphasis */

      color: "#6d787e",
    },
    caption: {
      position: "relative",
      left: "26px",
      fontFamily: "PT Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      top: "1.5px",
      color: "#3A4649",
      flex: "none",
      order: 1,
      flexGrow: "0",
    },
    body2: {
      width: "100px",
      height: "20px",

      /* Body 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",

      /* Blue */

      // color: "#0365F2",

      /* Inside auto layout */

      flex: "none",
      textTransform: "capitalize",
      order: 1,
      flexGrow: 0,
    },
  },
});

// export const useStyles = makeStyles({
//   title: {
//     fontWeight: 700,
//     fontFamily: "Cera Pro",
//     position: "relative",
//     width: "225px",
//     height: "23px",
//     left: "1px",
//     fontSize: "18px",
//     lineHeight: "23px",
//     color: "#03314b",
//     order: 0,
//     flexGrow: 0,
//   },
//   stat: {
//     position: "relative",
//     left: "26px",
//     fontFamily: "PT Sans",
//     fontStyle: "normal",
//     fontWeight: 400,
//     fontSize: "14px",
//     lineHeight: "22px",
//     top: "1.5px",
//     color: "#3A4649",
//     flex: "none",
//     order: 1,
//     flexGrow: "0",
//   },
// });
