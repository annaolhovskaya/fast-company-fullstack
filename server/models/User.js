const { Schema, model } = require('mongoose');

const schema = new Schema(
  //Если в объекте только поле type, то можно писать так -> image: String
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    completedMeetings: {
      type: Number,
    },
    image: {
      type: String,
    },
    profession: { type: Schema.Types.ObjectId, ref: 'Profession' },
    qualities: [{ type: Schema.Types.ObjectId, ref: 'Quality' }],
    rate: {
      type: Number,
    },
    sex: { type: String, enum: ['male', 'female', 'other'] }, //одно значение из представленных
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', schema);
