import tuitsModel from "./tuits-model";

export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tuit) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})