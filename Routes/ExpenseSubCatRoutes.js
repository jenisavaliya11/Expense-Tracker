const router = require("express").Router();
const expenseSubCatController = require("../Controller/ExpnseSubCatController");
router.post("/expenseSubCat", expenseSubCatController.addExpenseSubCat);
router.get("/expenseSubCat", expenseSubCatController.getExpenseSubCat);
router.get("/expenseSubCat/:id", expenseSubCatController.getExpenseSubCatById);
module.exports = router;