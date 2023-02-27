import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface props {
  size: number;
  color: string;
}

export default function HomeIcon(props: props) {
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
      onClick={() => navigate("/")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size - 4 + "px"}
        height={props.size - 4 + "px"}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke={props.color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
        <path d="M10 12h4v4h-4z"></path>
      </svg>
    </Button>
  );
}
