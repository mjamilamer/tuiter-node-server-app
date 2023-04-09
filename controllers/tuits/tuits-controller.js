import * as tuitsDao from '../tuits/tuits-dao.js';
// import posts from "./tuits.js";
// let tuits = posts;

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tuitId;
  const status = await tuitsDao.deleteTuit(tuitIdToDelete);
  res.json(status);
}

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);

  res.json(status);
}

// OLD IMPORT VIA POST AND TUITS.js
// const createTuit = (req, res) => {
//   const newTuit = req.body;
//   newTuit._id = new Date().getTime() + "";
//   newTuit.likes = 0;
//   newTuit.liked = false;
//   tuits.push(newTuit);
//   res.json(newTuit);
// };

// const findTuits = (req, res) => {
//   res.json(tuits);
// };

// const updateTuit = (req, res) => {
//   const tuitIdToUpdate = req.params.tid;
//   const update = req.body;
//   const tuitIndex = tuits.findIndex((tuit) => tuit._id === tuitIdToUpdate);
//   tuits[tuitIndex] = { ...tuits[tuitIndex], ...update };
//   res.sendStatus(200);
// };

// const deleteTuit = (req, res) => {
//   const tuitIdToDelete = req.params.tid;
//   tuits = tuits.filter((tuit) => tuit._id !== tuitIdToDelete);
//   res.sendStatus(200);
// };

// export default (app) => {
//   app.post("/api/tuits", createTuit);
//   app.get("/api/tuits", findTuits);
//   app.put("/api/tuits/:tid", updateTuit);
//   app.delete("/api/tuits/:tid", deleteTuit);
// };
