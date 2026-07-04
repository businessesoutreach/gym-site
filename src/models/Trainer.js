/**
 * Trainer Model
 * Represents gym trainers / coaches with their profile and specializations
 */

import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const SocialLinksSchema = new Schema(
  {
    instagram: { type: String, trim: true, default: null },
    facebook:  { type: String, trim: true, default: null },
    twitter:   { type: String, trim: true, default: null },
    linkedin:  { type: String, trim: true, default: null },
  },
  { _id: false }
);

const TrainerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Trainer name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Trainer title/role is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [1000, 'Bio cannot exceed 1000 characters'],
    },
    photo: {
      type: String, // URL or path to image
      trim: true,
      default: null,
    },
    specializations: {
      type: [String],
      default: [],
      // e.g. ['Strength Training', 'HIIT', 'Yoga', 'Nutrition']
    },
    certifications: {
      type: [String],
      default: [],
    },
    experienceYears: {
      type: Number,
      min: [0, 'Experience cannot be negative'],
      default: 0,
    },
    rating: {
      type: Number,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot exceed 5'],
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
    socialLinks: {
      type: SocialLinksSchema,
      default: () => ({}),
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: null,
    },
    phone: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: formatted experience string
TrainerSchema.virtual('experienceLabel').get(function () {
  const yrs = this.experienceYears;
  if (!yrs) return 'New Trainer';
  return yrs === 1 ? '1 Year Experience' : `${yrs} Years Experience`;
});

TrainerSchema.index({ slug: 1 });
TrainerSchema.index({ isActive: 1, isFeatured: -1, order: 1 });

const Trainer = models.Trainer || model('Trainer', TrainerSchema);

export default Trainer;
