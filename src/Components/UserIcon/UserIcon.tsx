import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { IconProps } from "../../Interfaces/Interfaces";

export default function UserIcon(props: IconProps) {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#005997",
        borderRadius: 16,
        width: props.size + "px",
        height: props.size + "px",
        margin: 4,
        alignContent: "center",
        alignItems: "center",
      }}
      onClick={() => navigate("/User")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke={props.color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      </svg>
    </Button>
  );
}
