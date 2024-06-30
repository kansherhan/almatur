import { DataTypes, Model } from "sequelize";

import { sequelize } from "../connect.js";

export class TursSubscriber extends Model {}

TursSubscriber.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "TursSubscriber",
    tableName: "turs_subscribers",
    timestamps: true,
  }
);
