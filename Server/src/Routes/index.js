const router = require("express").Router();
const {
  buyUnits,
  sellUnits,
  getUser,
  createTransaction,
  createUser,
  getAllTransactions,
  getAllUser,
  getTransaction,
  updateUser,
} = require("./../Controller/indexController");

//////////////////////// USERS  //////////////////////////////////

router.get("/user", getAllUser);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.patch("/user/:id ", updateUser);

//////////////////////// TRANSACTIONS  //////////////////////////////////

router.get("/transactions", getAllTransactions);
router.post("/transactions", createTransaction);
router.post("/transactions/:id", getTransaction);

//////////////////////// OTHERS  //////////////////////////////////

router.post("/buyunits", buyUnits);
router.post("/sellunits", sellUnits);

module.exports = router;
