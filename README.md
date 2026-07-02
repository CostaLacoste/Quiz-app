# Quiz App

A simple trivia quiz application built with React, TypeScript, and styled-components. Questions are fetched live from the [Open Trivia Database](https://opentdb.com) API, with answers shuffled and scored in real time.

## Features

- 10 multiple-choice trivia questions per game, pulled from the Open Trivia DB API
- Shuffled answer order for each question
- Live score tracking
- Simple, clean UI styled with styled-components

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for development and bundling
- [styled-components](https://styled-components.com/) for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/CostaLacoste/Quiz-app.git
cd Quiz-app
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build

Create a production build:

```bash
npm run build
```

The optimized output is written to the `dist` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Quiz-app/
├── index.html             # Vite entry HTML
├── vite.config.ts         # Vite configuration
├── public/                # Static assets
└── src/
    ├── index.tsx           # App entry point
    ├── App.tsx             # Main app logic and state
    ├── App.styles.ts       # Global and layout styles
    ├── API.ts              # Trivia API fetching logic
    ├── utils.ts            # Helper functions (e.g. array shuffling)
    └── Components/
        ├── QuestionCard.tsx        # Renders a single question and its answers
        └── QuestionCard.styles.ts  # Styles for QuestionCard
```

## How It Works

1. Clicking **Start** fetches 10 easy-difficulty questions from the Open Trivia DB API.
2. For each question, the correct answer and incorrect answers are combined and shuffled.
3. Selecting an answer locks in that question, shows whether it was correct, and updates the score.
4. Clicking **Next Question** advances through the quiz until all questions are answered.

## License

This project is open source and available for personal or educational use.