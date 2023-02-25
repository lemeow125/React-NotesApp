import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export interface props {
  size: string;
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
        width: props.size,
        height: props.size,
        margin: 4,
      }}
      onClick={() => navigate("/")}
    >
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
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
      </div>
    </Button>
  );
}
