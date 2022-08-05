const router = require("express").Router();
const {
  buyUnits,
  sellUnits,
  getUser,
  createTransaction,
} = require("./../Controller/indexController");

//////////////////////// USERS  //////////////////////////////////

router.get("/user", getAllUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);

//////////////////////// TRANSACTIONS  //////////////////////////////////

router.get("/transactions", getAllTransactions);
router.post("/transactions", createTransaction);
router.post("/transactions/:id", getTransaction);

//////////////////////// OTHERS  //////////////////////////////////

router.post("/buyunits", buyUnits);
router.post("/sellunits", sellUnits);

module.exports = router;
