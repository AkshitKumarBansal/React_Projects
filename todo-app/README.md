# React Todo App

A simple, interactive Todo application built with React. This app helps you manage your daily tasks by allowing you to add, track, and complete todos. All data is saved directly to your browser's local storage, so you won't lose your tasks when you refresh the page or close your browser.

## Features

* **Add Tasks:** Create new todos with a specific Title and Description.
* **Task Tabs:** Switch seamlessly between "Todo" (active tasks) and "Completed" tasks.
* **Mark as Complete:** Completing a task moves it to the Completed tab and automatically stamps it with the exact date and time of completion.
* **Delete Tasks:** Remove unwanted tasks from both the active and completed lists.
* **Data Persistence:** Tasks are saved in the browser's `localStorage` (as `todolist` and `completedTodos`), ensuring your data persists across sessions.

## Technologies Used

* **React:** Core framework for building the UI components (utilizes React Hooks like `useState` and `useEffect`).
* **React Icons:** Uses `react-icons` for intuitive UI actions (Delete and Checkmark icons).
* **CSS:** Custom styling applied via `App.css`.

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites
Make sure you have Node.js and npm installed on your computer.

### Installation
1. Clone the repository or download the source code.
2. Navigate into the project directory:
   ```bash
   cd todo-app

### Install the required dependencies: npm install
### Running the App: npm start
### Building for Production: npm run build
