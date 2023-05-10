import { cleanEnv } from 'envalid';
import { port, str } from "envalid/dist/validators";

// cleanEnv package
export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(), 
});