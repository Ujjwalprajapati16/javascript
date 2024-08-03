import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      content: "Why did the chicken cross the road? To get to the other side!",
    },
    {
      id: 2,
      title: "B Joke",
      content:
        "Why don’t scientists trust atoms? Because they make up everything!",
    },
    {
      id: 3,
      title: "C Joke",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 4,
      title: "D Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 5,
      title: "E Joke",
      content:
        "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    {
      id: 6,
      title: "F Joke",
      content:
        "What do you get when you cross a snowman and a vampire? Frostbite.",
    },
    {
      id: 7,
      title: "G Joke",
      content: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 8,
      title: "H Joke",
      content: "What’s orange and sounds like a parrot? A carrot.",
    },
    {
      id: 9,
      title: "I Joke",
      content:
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    },
    {
      id: 10,
      title: "J Joke",
      content:
        "Why can’t you hear a pterodactyl in the bathroom? Because the “P” is silent.",
    },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
