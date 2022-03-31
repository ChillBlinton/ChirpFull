const express = require("express");
const { default: db } = require("../db");
const router = express.Router();
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API
router.get("/:id?", (req, res) => {
    const id = req.params.id;

    if (id) {
        // const chirp = chirpsStore.GetChirp(id);
        res.json(chirp);
    } else {
        const chirps = chirpsStore.GetChirps();
        res.json(chirps);
    }
});

// Create
router.post("/:id?",  async (req, res) => {
    const id = req.params.id;
    
    res.json(await db.Chirps.post(body.userid, body.content, body.location));
// } catch (e) {
//     console.log(e);
//     // chirpsStore.CreateChirp(body);
//     res.sendStatus(200);
// });

// Delete
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    // chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});

// Update
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // chirpsStore.UpdateChirp(id, body);
    res.sendStatus(200);
});

module.exports = router;
});