module.exports = (sequelize, DataTypes) => {
  const Memo = sequelize.define('Memo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Memos',
    timestamps: false,
  });
  return Memo;
};
