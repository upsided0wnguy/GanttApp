📅 Electron Gantt Chart Visualizer

This is a desktop application built using Electron that generates a simple, interactive Gantt chart from user-defined tasks. The application is built entirely using vanilla JavaScript, HTML, and styled with Tailwind CSS, and uses the HTML <canvas> element for rendering.

The application automatically saves and loads your task list locally on your desktop using the browser's localStorage API, ensuring your project timeline is preserved between sessions.

✨ Features

Task Management: Add tasks with a name, start date, and end date.

Persistent Storage: Tasks are automatically saved to your local machine and loaded when the app restarts.

Dynamic Visualization: The Gantt chart is drawn dynamically on an HTML Canvas, scaling based on the time span of your tasks.

Customization: Change the color of the task bars.

Export: Download the generated chart as a PNG image.

🛠️ Installation and Setup

This project requires Node.js and npm to be installed on your system.

1. Clone the Repository

Clone this repository to your local machine:

git clone [YOUR_REPOSITORY_URL_HERE]
cd GanttApp


(Note: Replace [YOUR_REPOSITORY_URL_HERE] with the actual URL of your Git repository.)

2. Install Dependencies (Crucial Step)

IMPORTANT: This step downloads the electron and electron-packager programs necessary to run and build the application. If you skip this, the commands in the next section will fail.

Install the Electron framework and the Electron Packager (used for building the executable) from the package.json file:

npm install


▶️ Running the Application

There are two primary ways to use this application: in a development window or as a standalone executable.

A. Run in Development Mode (Quick Start)

To test the application quickly without building the final .exe:

npm start


This command launches a development Electron window.

B. Build the Windows Executable (.exe)

To create the standalone, distributable application:

npm run package-win


Output: The final executable, GanttChart.exe, will be located in the newly created directory: GanttApp/release-builds/GanttChart-win32-x64/

💻 Technologies Used

Electron: For building the cross-platform desktop shell.

HTML5 Canvas: Core technology for drawing the chart visualization.

Vanilla JavaScript: Handles all logic, state management, and data persistence.

Tailwind CSS: Utility-first framework for rapid and responsive styling.

Local Storage: Used for basic, local data persistence.
