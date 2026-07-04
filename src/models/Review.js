/**
 * Review Model
 * Member reviews/testimonials for the gym or specific trainers
 */

import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const ReviewSchema = new Schema(
  {
    author: {
      name: {
        type: String,
        required: [true, 'Reviewer name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters'],
      },
      email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null,
      },
      avatar: {
        type: String, // URL or path
        default: null,
      },
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    title: {
      type: String,
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
      default: null,
    },
    body: {
      type: String,
      required: [true, 'Review body is required'],
      trim: true,
      maxlength: [1500, 'Review cannot exceed 1500 characters'],
    },
    // Optional: review is about a specific trainer
    trainer: {
      type: Schema.Types.ObjectId,
      ref: 'Trainer',
      default: null,
    },
    // Optional: review is about a specific membership
    membership: {
      type: Schema.Types.ObjectId,
      ref: 'Membership',
      default: null,
    },
    memberSince: {
      type: String, // e.g., "2 years", "6 months"
      trim: true,
      default: null,
    },
    isApproved: {
      type: Boolean,
      default: false, // Moderation: must be approved before showing publicly
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false, // Verified purchase / verified member
    },
    helpfulCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    tags: {
      type: [String],
      default: [],
      // e.g. ['Great Staff', 'Clean Facilities', 'Best Trainers']
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: star label
ReviewSchema.virtual('starLabel').get(function () {
  const labels = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' };
  return labels[this.rating] || 'No Rating';
});

// Indexes
ReviewSchema.index({ isApproved: 1, isFeatured: -1, createdAt: -1 });
ReviewSchema.index({ trainer: 1 });
ReviewSchema.index({ membership: 1 });
ReviewSchema.index({ rating: -1 });

const Review = models.Review || model('Review', ReviewSchema);

export default Review;
