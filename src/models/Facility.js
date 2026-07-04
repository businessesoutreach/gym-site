/**
 * Facility Model
 * Represents gym facilities, equipment, and amenities
 */

import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const FACILITY_CATEGORIES = [
  'Equipment',
  'Cardio',
  'Strength',
  'Recovery',
  'Wellness',
  'Amenity',
  'Studio',
  'Pool',
  'Locker Room',
  'Other',
];

const OperatingHoursSchema = new Schema(
  {
    open:  { type: String, default: '06:00' }, // 24h format
    close: { type: String, default: '22:00' },
    isClosed: { type: Boolean, default: false },
  },
  { _id: false }
);

const FacilitySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Facility name is required'],
      trim: true,
      maxlength: [150, 'Name cannot exceed 150 characters'],
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
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    shortDescription: {
      type: String,
      trim: true,
      maxlength: [200, 'Short description cannot exceed 200 characters'],
    },
    category: {
      type: String,
      enum: {
        values: FACILITY_CATEGORIES,
        message: `Category must be one of: ${FACILITY_CATEGORIES.join(', ')}`,
      },
      default: 'Other',
    },
    images: {
      type: [String], // Array of image URLs/paths
      default: [],
    },
    icon: {
      type: String,  // Lucide icon name or emoji
      default: 'dumbbell',
    },
    capacity: {
      type: Number,
      min: [1, 'Capacity must be at least 1'],
      default: null, // null = no limit tracked
    },
    operatingHours: {
      monday:    { type: OperatingHoursSchema, default: () => ({}) },
      tuesday:   { type: OperatingHoursSchema, default: () => ({}) },
      wednesday: { type: OperatingHoursSchema, default: () => ({}) },
      thursday:  { type: OperatingHoursSchema, default: () => ({}) },
      friday:    { type: OperatingHoursSchema, default: () => ({}) },
      saturday:  { type: OperatingHoursSchema, default: () => ({}) },
      sunday:    { type: OperatingHoursSchema, default: () => ({ isClosed: true }) },
    },
    features: {
      type: [String], // e.g. ['Air Conditioned', 'HD TVs', '24/7 Access']
      default: [],
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
    floorLevel: {
      type: String, // e.g. 'Ground Floor', '1st Floor', 'Basement'
      trim: true,
      default: null,
    },
    area: {
      value: { type: Number, default: null },
      unit:  { type: String, enum: ['sqft', 'sqm'], default: 'sqft' },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual: primary image (first in images array)
FacilitySchema.virtual('primaryImage').get(function () {
  return this.images?.[0] ?? null;
});

// Virtual: area label
FacilitySchema.virtual('areaLabel').get(function () {
  if (!this.area?.value) return null;
  return `${this.area.value} ${this.area.unit}`;
});

// Indexes
FacilitySchema.index({ slug: 1 });
FacilitySchema.index({ category: 1, isActive: 1 });
FacilitySchema.index({ isFeatured: -1, order: 1 });

export { FACILITY_CATEGORIES };

const Facility = models.Facility || model('Facility', FacilitySchema);

export default Facility;
