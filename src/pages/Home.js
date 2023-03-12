import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyParts}
        setBodyParts={setBodyParts}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyParts}
        setBodyParts={setBodyParts}
      />
    </Box>
  );
};

export default Home;
