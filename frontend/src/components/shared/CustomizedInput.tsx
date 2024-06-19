import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      InputProps={{ style: { color: "white", width:"400px", borderRadius: 10, fontSize: 20 } }}
    />
  );
};

export default CustomizedInput;
