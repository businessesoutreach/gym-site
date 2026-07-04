/**
 * Membership Model
 * Represents gym membership plans offered to members
 */

import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const MembershipSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Membership plan name is required'],
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
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    price: {
      monthly: {
        type: Number,
        required: [true, 'Monthly price is required'],
        min: [0, 'Price cannot be negative'],
      },
      yearly: {
        type: Number,
        min: [0, 'Price cannot be negative'],
      },
    },
    currency: {
      type: String,
      default: 'PKR',
      uppercase: true,
      trim: true,
    },
    features: {
      type: [String],
      default: [],
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    maxMembers: {
      type: Number,
      default: null, // null = unlimited
    },
    color: {
      type: String,
      default: '#6366f1', // indigo accent
      trim: true,
    },
    icon: {
      type: String,
      default: 'dumbbell',
    },
    order: {
      type: Number,
      default: 0, // display order
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: yearly savings percentage vs paying monthly * 12
MembershipSchema.virtual('yearlySavings').get(function () {
  if (!this.price?.yearly || !this.price?.monthly) return null;
  const monthlyTotal = this.price.monthly * 12;
  const savings = ((monthlyTotal - this.price.yearly) / monthlyTotal) * 100;
  return Math.round(savings);
});

// Index for fast lookup by slug and active status
MembershipSchema.index({ slug: 1 });
MembershipSchema.index({ isActive: 1, order: 1 });

// Prevent model re-compilation in Next.js hot reload
const Membership = models.Membership || model('Membership', MembershipSchema);

export default Membership;
