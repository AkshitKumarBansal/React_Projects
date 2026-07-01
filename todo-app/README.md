# Todo App

![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)
![Create React App](https://img.shields.io/badge/Create_React_App-5.x-09D3AC?logo=createreactapp&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-UI_Icons-E91E63)
![Local Storage](https://img.shields.io/badge/Storage-localStorage-FF9800)
![Responsive UI](https://img.shields.io/badge/UI-Responsive-22C55E)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?logo=docker&logoColor=white)

A clean and responsive **Todo App** built with React for managing daily tasks with a simple workflow. Users can add todos, edit them inline, mark tasks as completed, and keep everything saved in the browser using `localStorage`.

Live Demo: [https://todo-app-kappa-ivory-m81g0b15ho.vercel.app/](https://todo-app-kappa-ivory-m81g0b15ho.vercel.app/)

---

## Problem Statement

Managing small daily tasks with paper notes or scattered apps often becomes messy and inconsistent. This project solves that by offering a focused task manager with a lightweight interface, persistent browser storage, and a mobile-friendly layout.

---

## Key Features at a Glance

- **Task creation** with separate title and description fields
- **Inline editing** for updating active todos without leaving the list
- **Completion workflow** that moves finished tasks into a dedicated tab
- **Completion timestamp** recorded automatically when a task is marked done
- **Delete actions** for both active and completed todos
- **Persistent storage** using browser `localStorage`
- **Responsive design** for desktop, tablet, and mobile screens
- **Vercel deployment** for instant web access
- **Dockerized setup** for container-based local execution

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI rendering and component-based architecture |
| React Hooks | State and lifecycle management with `useState` and `useEffect` |
| React Icons | Action icons for delete, complete, and edit controls |
| CSS | Custom styling and responsive layout behavior |

### Storage

| Technology | Purpose |
|---|---|
| Browser `localStorage` | Stores active and completed tasks locally |

### Tooling

| Technology | Purpose |
|---|---|
| Create React App | Project scaffolding and build tooling |
| Vercel | Frontend deployment and hosting |
| Docker | Containerized local execution |

---

## Project Architecture

```text
todo-app/
|-- public/
|   |-- index.html
|   |-- favicon.ico
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   |-- App.js              # Main todo logic and UI rendering
|   |-- App.css             # Component-level styling and responsive rules
|   |-- App.test.js         # Default test scaffold
|   |-- index.css           # Global styles
|   |-- index.js            # React entry point
|   |-- reportWebVitals.js
|   `-- setupTests.js
|-- Dockerfile              # Docker-based app startup
|-- package.json
`-- README.md
```

### Data Flow

```text
User Input
   |
   |-- Add / Edit / Complete / Delete action
   |
   |-- React state update
   |
   |-- localStorage sync
   |
   `-- UI re-render
```

---

## High Level Design

This project follows a simple client-side architecture where the React application manages UI state, persists task data in the browser, and is deployed as a static frontend on Vercel.

### High Level Components

| Component | Responsibility |
|---|---|
| React UI Layer | Renders the todo form, task tabs, edit mode, and task lists |
| State Management | Handles todos, completed todos, current edit state, and screen toggling with React Hooks |
| Persistence Layer | Saves and retrieves `todolist` and `completedTodos` from browser `localStorage` |
| Styling Layer | Provides custom CSS and responsive behavior for mobile and desktop layouts |
| Deployment Layer | Hosts the production build on Vercel and supports containerized execution via Docker |

### High Level Flow

```text
User
  |
  |-- Interacts with form/buttons
  |
  |-- React components capture events
  |
  |-- useState updates UI state
  |
  |-- localStorage stores latest todo data
  |
  `-- Updated task list is rendered back to the browser
```

### Deployment View

```text
Developer
  |
  |-- Source code in GitHub
  |
  |-- Build and deploy frontend to Vercel
  |-- Build container image with Dockerfile
  |
  `-- End users access the app in the browser
         |
         `-- Data persists in the user's localStorage
```

---

## Features

### Task Management

- **Add Todo** with a title and description
- **Edit Todo** directly inside the list using the inline update form
- **Delete Todo** from the active task list
- **Mark Complete** to move a task into the completed section

### Completed Tasks

- **Separate Completed Tab** for finished work
- **Timestamp Tracking** showing when the task was completed
- **Delete Completed Tasks** when they are no longer needed

### User Experience

- **Responsive Layout** with form wrapping and mobile-friendly card actions
- **Minimal UI** focused on clarity and quick interaction
- **Persistent Data** retained after refresh or browser restart

---

## Screenshots

The reference README you shared includes a screenshot gallery. This project does not currently contain screenshot image files, so I prepared the same section structure for you to fill in once you capture the app screens.

### Suggested Screenshots to Add

| View | Suggested File Path |
|---|---|
| Main Todo Screen | `docs/screenshots/todo-home.png` |
| Completed Tasks Tab | `docs/screenshots/todo-completed.png` |
| Edit Todo State | `docs/screenshots/todo-edit.png` |
| Mobile Responsive View | `docs/screenshots/todo-mobile.png` |

Example markdown after adding images:

```md
### Main Todo Screen
![Main Todo Screen](docs/screenshots/todo-home.png)

### Completed Tasks Tab
![Completed Tasks Tab](docs/screenshots/todo-completed.png)
```

---

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher recommended
- `npm` installed locally

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd todo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app runs on **http://localhost:3000** by default.

### 4. Build for Production

```bash
npm run build
```

The optimized production build is generated inside the `build/` directory.

---

## Deployment

### Live Application

- Vercel URL: [https://todo-app-kappa-ivory-m81g0b15ho.vercel.app/](https://todo-app-kappa-ivory-m81g0b15ho.vercel.app/)

### Deployment Notes

- The frontend is deployed on **Vercel**
- The project is also **Dockerized** for container-based execution
- Task data is stored in each user's browser, so data persists locally rather than in a remote database

---

## Docker Usage

Build and run the app with Docker:

```bash
docker build -t todo-app .
docker run -p 3000:3000 todo-app
```

---

## Data Storage Format

This app stores task data inside browser `localStorage` using two keys:

| Key | Description |
|---|---|
| `todolist` | Stores active todo items |
| `completedTodos` | Stores completed todo items with completion timestamps |

Example active todo object:

```json
{
  "title": "Finish README",
  "description": "Rewrite the project documentation"
}
```

Example completed todo object:

```json
{
  "title": "Finish README",
  "description": "Rewrite the project documentation",
  "completedOn": "1-7-2026 at 18:30:21"
}
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates an optimized production build |
| `npm test` | Runs the test suite |
| `npm run eject` | Exposes Create React App configuration |

---

## Usage Guide

### 1. Add a Task

Enter a title and description, then click **Add**.

### 2. Edit a Task

Click the edit icon on an active todo, update the content, and click **Update**.

### 3. Complete a Task

Click the check icon to move the todo into the **Completed** tab.

### 4. Delete a Task

Click the delete icon to remove a task from either list.

---

## Future Improvements

| Area | Enhancement |
|---|---|
| Input Validation | Prevent empty tasks from being added |
| Filtering | Add search and filter by status |
| Categories | Group todos by tag or priority |
| Due Dates | Add date-based planning |
| Drag and Drop | Reorder tasks interactively |
| Testing | Replace the default CRA test with app-specific coverage |
| Backend Sync | Add authentication and cloud persistence |

---

## Contributing

Contributions are welcome. A clean workflow would be:

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push your branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## License

No separate license file is currently included in this project. If you plan to publish it publicly, consider adding a `LICENSE` file.
