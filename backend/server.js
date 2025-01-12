import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// get a route that returns five jokes
const jokes = [
    { id: 1, title: "Atom Joke", joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, title: "Scarecrow Joke", joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, title: "Skeleton Joke", joke: "Why don't skeletons fight each other? They don't have the guts." },
    { id: 4, title: "Spaghetti Joke", joke: "What do you call fake spaghetti? An impasta!" },
    { id: 5, title: "Bicycle Joke", joke: "Why did the bicycle fall over? Because it was two-tired!" },
];

app.get('/api/jokes', (req, res) => {
    res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})