const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    smartMeterID: {
      type: String,
    },
    microGridID: {
      type: String,
    },
    walletAddress: {
      type: String,
    },
    totalUnitsLent: {
      type: Number,
      default: 0,
    },
    perDayLentUnits: {
      type: Number,
      default: 0,
    },
    maxUnitsPerDay: {
      type: Number,
      default: 5,
    },
    hasHitMaxQuota: {
      type: Boolean,
      default: false,
    },
    currentUnitsLeft: {
      type: Number,
      default: 0,
    },
    nextQuertyTime: Number,
    transactions: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Transactions",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", function (next) {
  if (this.currentUnitsLeft == this.maxUnitsPerDay) {
    this.hasHitMaxQuota = true;
  }
  const currentTime = parseInt(Date.now());
  const previousDate = new Date(this.nextQuertyTime).getTime();
  if (currentTime - previousDate > 24 * 3600) {
    this.hasHitMaxQuota = false;
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
