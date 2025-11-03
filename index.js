import express from 'express'
import connectToDB from './db.js'
import UserRoutes from './routes/users.js'

const app = express()
// To access PORT from [.env] file!
const PORT = process.env.PORT || 5000

// Middleware to parse JSON
app.use(express.json());  // <--- Use this here

// Call DB connection
connectToDB()

app.get('/', (req, res) => {
    console.log('I am inside home page route handler.');
    res.send('Hello Anand, Welcome to api development!')
})

// using our router here
// Mount user routes at /api
app.use('/api', UserRoutes);  // e.g., GET /api/users

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}...`);
})