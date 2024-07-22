import React from "react";
import { useParams } from "react-router";
import { useAxios } from "../hooks/useAxios";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const CardDetail = () => {
  const { id } = useParams();
  const { response } = useAxios({ url: `/${id}`, method: "get" });
  console.log(response);
  return (
    <Box sx={{ paddingInline: "100px" }}>
      <img src={response?.image} />
      <p>{response?.name}</p>
      <p>{response?.status}</p>
      <p>{response?.id}</p>
      <Link to="/">Regresar</Link>
    </Box>
  );
};
