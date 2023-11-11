import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGO_URL!);
  } catch (err) {
    throw err;
  }
};

export default connect;
