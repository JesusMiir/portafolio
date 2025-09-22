import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../utilities/projects";
/*
    ProjectPage.tsx

    /project/weather
    /project/pokemon
    /project/calendar
        and see an h1 with the name of the app

    but if you go to
    /project/alsdfksaldjf
        "project not found"
*/

export default function ProjectPage() {
  const { id } = useParams();

  const project = projects.find((project) => {
    return project.id == id;
  });

  if (project != undefined) {
    return (
      <div>
        <h1>{project.name}</h1>
      </div>
    );
  } else {
    return <div>project not found</div>;
  }
}
