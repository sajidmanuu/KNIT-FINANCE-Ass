import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    // const conn = await mongoose.connect("mongodb+srv://sajidkhanmanuu:isqsNTGKUgWYAqtT@cluster0.xyv60rw.mongodb.net/BLOODs");
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/bloods2");
    
    
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
