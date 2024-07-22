import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const CharacterCard = ({ name, img, id }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 340 }} image={img} title="Personaje" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {name}
        </Typography>
        <Link to={`/detail/${id}`}>Visitar</Link>
      </CardContent>
    </Card>
  );
};
