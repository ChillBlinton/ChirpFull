const express = require('express')
const router = express.Router();
const chirpsRouter = require("./chirps");

// localhost:3000/api/chirps/
router.use("/chirps", chirpsRouter);

module.exports = router;



// export const Query = (query, values) => {
//     return new Promise((resolve, reject) => {
//         Connection.query(query, values, (err, res) => {
//             if (err) return reject(err);
//             resolve(res);
//         });
//     });
// };