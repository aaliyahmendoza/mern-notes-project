import express from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

// displayed on webpage - get request
router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote);

// send data to server
router.post("/", NotesController.createNote);


export default router;