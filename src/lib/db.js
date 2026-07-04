/**
 * MongoDB Connection Utility
 * Handles connection to local MongoDB via Mongoose with caching for Next.js
 */

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-website';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage in Next.js.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connect to MongoDB
 * @returns {Promise<mongoose.Connection>} Mongoose connection instance
 */
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000,         // Close sockets after 45 seconds of inactivity
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully to:', MONGODB_URI);
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    console.error('❌ MongoDB connection failed:', err.message);
    throw err;
  }

  return cached.conn;
}

/**
 * Disconnect from MongoDB
 * Useful for graceful shutdown or testing teardown
 */
async function disconnectDB() {
  if (cached.conn) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
    console.log('🔌 MongoDB disconnected');
  }
}

/**
 * Get current connection state
 * @returns {{ isConnected: boolean, state: string }}
 */
function getConnectionState() {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const readyState = mongoose.connection.readyState;
  return {
    isConnected: readyState === 1,
    state: states[readyState] || 'unknown',
  };
}

/**
 * Health check — returns connection status info
 * @returns {Promise<{ status: string, dbName: string | null, host: string | null }>}
 */
async function dbHealthCheck() {
  try {
    await connectDB();
    const { state } = getConnectionState();
    return {
      status: state,
      dbName: mongoose.connection.db?.databaseName ?? null,
      host: mongoose.connection.host ?? null,
    };
  } catch (err) {
    return {
      status: 'error',
      dbName: null,
      host: null,
      error: err.message,
    };
  }
}

export { connectDB, disconnectDB, getConnectionState, dbHealthCheck };
export default connectDB;
