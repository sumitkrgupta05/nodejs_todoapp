import express from "express";
import {
  deleteUser,
  getAllUser,
  getUserDetails,
  registerNew,
  specialFunc,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();
//example phle ye asea tha
// router.get("/all", async (req, res) => {
//   const users = await User.find({});

//   const keyword = req.query.keyword;
//   console.log(keyword);

//   res.json({
//     success: true,
//     users,
//   });
// });

//or ab
router.get("/all", getAllUser);

router.post("/new", registerNew);

router.get("/userid/special", specialFunc);

router
  .route("/userid/:id")
  .get(getUserDetails)
  .put(updateUser)
  .delete(deleteUser);

// router.get("/userid/:id", getUserDetails);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

export default router;
