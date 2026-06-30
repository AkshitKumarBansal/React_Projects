📝 React Todo App
A simple, interactive Todo application built with React. This app helps you manage your daily tasks by allowing you to add, track, and complete todos. All data is saved directly to your browser's local storage, so you won't lose your tasks when you refresh the page or close your browser.

✨ Features
* **Add Tasks:** Create new todos by specifying a Title and Description.
* **Edit Tasks:** Easily update existing tasks with an inline editor. Click the edit icon to modify the title or description of any active task.
* **Task Tabs:** Switch seamlessly between "Todo" (active tasks) and "Completed" tasks using the toggle buttons.
* **Mark as Complete:** Completing a task moves it to the Completed tab and automatically stamps it with the exact date and time of completion.
* **Delete Tasks:** Remove unwanted tasks from both the active list and the completed list.
* **Data Persistence:** Your tasks are saved directly in the browser's `localStorage` (as `todolist` and `completedTodos`), ensuring you never lose your data even if you refresh the page or close your browser.

🛠️ Technologies Used
Technology   Description
React        Core framework for building the UI components (utilizes React Hooks like useState and useEffect). 
React Icons  Uses react-icons for intuitive UI actions (Delete and Checkmark icons).
CSS          Custom styling applied via App.css. 

🚀 Getting Started
To get this project up and running on your local machine, follow these steps:
   Prerequisites
      Make sure you have Node.js and npm installed on your computer.
   Installation
      1. Clone the repository or download the source code.
      2. Navigate into the project directory: cd todo-app
      3. Install the required dependencies: npm install
   Scripts
      Running the App: Starts the development server: npm start
      Building for Production: Bundles the app into static files for production: npm run build

