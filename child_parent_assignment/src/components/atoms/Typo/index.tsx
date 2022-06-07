import { Typography } from "@mui/material";
import React from "react";

interface CustomTypoProps {
  text: React.ReactNode;
  variant?:
    | "heading"
    | "heading3"
    | "subtitle2"
    | "body1"
    | "subtitle1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "subtitle5";
  className?: string;
  width?: string;
  component: React.ElementType;
}

const index = (props: CustomTypoProps) => {
  return (
    <Typography
      variant={props.variant}
      className={props.className}
      width={props.width}
      component={props.component}
    >
      {props.text}
    </Typography>
  );
};

export default index;
