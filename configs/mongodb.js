// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("🚀 ~ Database Connected!!");
//   });

//   await mongoose.connect(`${process.env.MONGODB_URI}/clear-snap`);
// };

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("🚀 ~ Database Connected!!");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/clear-snap`);
  } catch (error) {
    console.error("❌ ~ Database connection failed:", error.message);
    process.exit(1); // Hata durumunda uygulamayı sonlandır
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     console.log("🚀 ~ Using existing database connection.");
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     console.log("🚀 ~ Creating new database connection promise...");
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose
//       .connect(MONGODB_URI, opts)
//       .then((mongoose) => {
//         console.log("✅ ~ Successfully connected to the database.");
//         return mongoose;
//       })
//       .catch((error) => {
//         console.error("❌ ~ Error connecting to the database:", error);
//         throw error;
//       });
//   }

//   try {
//     console.log("🚀 ~ Awaiting database connection...");
//     cached.conn = await cached.promise;
//     console.log("✅ ~ Database connection established.");
//   } catch (e) {
//     console.error("❌ ~ Database connection failed:", e);
//     cached.promise = null; // Reset the promise if connection fails
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;
