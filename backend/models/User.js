const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hobbies: [{ type: String }], // Array of hobby strings
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  }
}, { timestamps: true });

userSchema.index({ location: '2dsphere' }); // Enables geospatial queries

module.exports = mongoose.model('User', userSchema);
