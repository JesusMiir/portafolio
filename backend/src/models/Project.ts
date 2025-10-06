import { Schema, model, type HydratedDocument } from "mongoose";

/*
    If using mongoose with typescript, all of your models should be based on an interface.
    You must use pass that interface to the generic of...
        - the schema
        - the model
        - Make a document type using HydratedDocument
*/
interface ProjectInterface {
  name: string;
  img?: string;
  description?: string;
}

const projectSchema = new Schema<ProjectInterface>({
  name: {
    type: String,
    unique: true,
    required: true,
    length: [3, 100],
  },
  img: {
    type: String, //        "/images/something.jpg"
    length: [0, 500],
  },
  description: {
    type: String,
    length: [0, 500],
  },
});

const Project = model<ProjectInterface>("project", projectSchema, "projects");

export type ProjectDocument = HydratedDocument<ProjectInterface>;
// This creates a type with all the types of ProjectInterface, plus other mongoDB stuff
// like ._id, .__v, .toObject(), .toJSON()

export default Project;

/*
    Model methods

        await Project.find()                                  -> Array of projects (possibly empty)
        await Project.find({ name: "Pokemon app"})            -> Array of projects (possibly empty)
        await Project.findOne({ name: "Pokemon app"})         -> project | undefined
        await Project.findOne({ _id: "sjdflaksjdfsadf"})      -> project | undefined
        await Project.findById("sjdflaksjdfsadf")             -> project | undefined


            ADDING DOCUMENTS
        await Project.create({                                throws an error if data invalid
            name: "Weather app"
        })
            OR
        const newProject = new Project({                      error is thrown on .save, not on the class instantiation
            name: "Weather app"
        })
        await newProject.save()

            UPDATING DOCUMENTS                      
        await Project.findOneAndUpdate(
            { name: "Pokemon app" },    <- "filter"
            { name: "Pokémon app" }     <- "update"
        )
*/
