import mongoose from 'mongoose';
import tuitsSchema from "./tuits-schema";

const tuitsModel = mongoose.model('TuitModel', tuitsSchema);

export default tuitsModel