"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "../../../components/Projects/ProjectList";


// Define the structure of the project data (adjust based on your actual API response)
interface Project {
  id: number;
  name: string;
  description: string;
  frequency: string;
  // Add more fields based on your API structure
}

function Index() {
  // Use generic typing for useState to define the type of projData
  const [projData, setProjData] = useState<Project[] | null>(null);

  useEffect(() => {
    // Make a GET request to the API route
    axios
      .get("/api/project")
      .then((response) => {
        setProjData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <ProjectList projData={projData} />;
}

export default Index;
