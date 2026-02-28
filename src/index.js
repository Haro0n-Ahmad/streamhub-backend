import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

app.on("error", (error) => {
    console.log("Error in connection", error);
    throw error;
});

connectDb()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
})
.catch((error) => {
    console.log("Connection not Established", error);
});