/**
 * Models barrel export
 * Import all Mongoose models from a single entry point
 *
 * Usage:
 *   import { Membership, Trainer, Review, FAQ, Facility } from '@/models';
 */

export { default as Membership } from './Membership';
export { default as Trainer }    from './Trainer';
export { default as Review }     from './Review';
export { default as FAQ }        from './FAQ';
export { default as Facility }   from './Facility';

// Named exports from individual models
export { FAQ_CATEGORIES }        from './FAQ';
export { FACILITY_CATEGORIES }   from './Facility';
