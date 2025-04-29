const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // This field is required
  },
  businessType: {
    type: String,
    required: true,  // This field is required
  },
  location: {
    type: String,
    required: true,  // This field is required
  },
  pincode: {
    type: String,
    required: true,  // This field is required
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],  // Email validation regex
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number should be 10 digits'],  // Phone validation for 10 digits
  },
  riskLevel: {
    type: String,
    default: 'Low',  // Default value for riskLevel
  },
  longitude: {
    type: Number,
    required: true,
  },
  mitigationStrategies: [{
    type: String,  // List of strategies the business is using
  }],
  insurance: {
    provider: String,  // Insurance provider
    policyNumber: String,  // Insurance policy number
  },
  password: {
    type: String,
    required: true,
    minlength: 6,  // Enforce a minimum length for security
  },
},{
    timestamps: true, 
});

module.exports = mongoose.model('Business', businessSchema);
