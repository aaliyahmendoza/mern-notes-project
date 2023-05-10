import { RequestHandler } from "express";
import NoteModel from "../models/note";
// handler function
export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        // throw Error("BOZO");
        // execute find operation + returns a promise, async., gets it in database
        const notes = await NoteModel.find().exec();
        /* return to user, set response HTTP status/call to 200
            note -> json , send to frontend */
        res.status(200).json(notes);
    } catch (error) {
        next(error);
    }
}; 

export const getNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId;
    try {
        const note = await NoteModel.findById(noteId).exec();
        res.status(200).json(note);
    } catch (error) {
        next(error);
    }
}

export const createNote: RequestHandler = async (req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;
    
    try {
        const newNote = await NoteModel.create({
            title: title, 
            text: text,
        });
        res.status(201).json(newNote);
    } catch (error) {
        next(error);
    }
};