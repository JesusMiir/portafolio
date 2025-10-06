import Project, { type ProjectDocument } from "../models/Project.js";

/*
    A good practice is decide on a type that your funcitons will return and be consistent
*/

export async function addProject(
  input: NewProjectInput
): Promise<ControllerResult<ProjectDocument>> {
  try {
    const newProject = await Project.create(input);

    return {
      status: 201,
      message: "Project added",
      data: newProject,
    };
  } catch (error) {
    console.log(error);

    let errorMessage = "Something went wrong";
    let status = 500;

    if (error.name === "ValidationError") {
      errorMessage = Object.values(error.errors)
        .map((value: any) => value.message)
        .join(", ");
      status = 400;
    }

    return {
      status: status,
      message: errorMessage,
      data: null,
      error: error,
    };
  }
}
