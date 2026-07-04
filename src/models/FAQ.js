/**
 * FAQ Model
 * Frequently asked questions for the gym website
 */

import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

// Allowed categories for grouping FAQs
const FAQ_CATEGORIES = [
  'General',
  'Membership',
  'Trainers',
  'Facilities',
  'Schedule',
  'Nutrition',
  'Payments',
  'Cancellations',
  'Other',
];

const FAQSchema = new Schema(
  {
    question: {
      type: String,
      required: [true, 'Question is required'],
      trim: true,
      maxlength: [300, 'Question cannot exceed 300 characters'],
    },
    answer: {
      type: String,
      required: [true, 'Answer is required'],
      trim: true,
      maxlength: [2000, 'Answer cannot exceed 2000 characters'],
    },
    category: {
      type: String,
      enum: {
        values: FAQ_CATEGORIES,
        message: `Category must be one of: ${FAQ_CATEGORIES.join(', ')}`,
      },
      default: 'General',
    },
    order: {
      type: Number,
      default: 0, // Lower = displayed first within a category
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false, // Featured FAQs shown prominently on homepage
    },
    tags: {
      type: [String],
      default: [],
    },
    viewCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    helpfulCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    notHelpfulCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: helpfulness ratio (0–100%)
FAQSchema.virtual('helpfulnessRatio').get(function () {
  const total = this.helpfulCount + this.notHelpfulCount;
  if (!total) return null;
  return Math.round((this.helpfulCount / total) * 100);
});

// Indexes
FAQSchema.index({ category: 1, order: 1 });
FAQSchema.index({ isPublished: 1, isFeatured: -1 });
FAQSchema.index({ tags: 1 });

// Export allowed categories for use in API validation
export { FAQ_CATEGORIES };

const FAQ = models.FAQ || model('FAQ', FAQSchema);

export default FAQ;
