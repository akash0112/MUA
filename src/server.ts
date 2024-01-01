import app from "./app";
import dotenv from 'dotenv';


dotenv.config();
const port : string | number = process.env.PORT || 4001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });