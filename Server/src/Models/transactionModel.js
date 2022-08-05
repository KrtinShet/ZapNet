const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    lender: {
      type: String,
    },
    borrower: {
      type: String,
    },
    units: {
      type: String,
    },
    price: {
      type: String,
    },
    time: {
      type: String,
    },
    hash: {
      type: String,
    },
    transactionType: {
      type: String,
      enum: ["lend", "borrow"],
      default: "borrow",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Transaction = mongoose.model("Transactions", transactionSchema);
module.exports = Transaction;
