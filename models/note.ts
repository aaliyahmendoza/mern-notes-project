// Schema = used to structure types (Strings) 
import { InferSchemaType, model, Schema } from "mongoose";

// define Schema, mongoose constructor/function, config for Schema
const noteSchema = new Schema({
    // declaring each note must have a title
    title: { type: String, required: true },
    // text optional
    text: { type: String }, 
// automatically puts time stamp
}, { timestamps: true });

type Note = InferSchemaType<typeof noteSchema>;
// create collection w/ the name "Note" + creates Schema for the notes
export default model<Note>("Note", noteSchema);