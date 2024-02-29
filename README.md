# Vue Tasks

This project is a simple task list application built with Vue.js. It allows users to add, edit, toggle, and delete tasks. The application also supports searching/filtering tasks and saving the state of tasks and search filters across page reloads.

## Features

-   **Add Tasks**: Users can add new tasks by entering text into an input field.
-   **Edit Tasks**: Tasks can be edited by double-clicking on them.
-   **Toggle Tasks**: Tasks can be marked as done or not done by clicking a button.
-   **Delete Tasks**: Tasks can be deleted by clicking a delete button.
-   **Search/Filter Tasks**: Users can search or filter tasks by entering a search query.
-   **Persistent State**: The state of tasks and search filters is saved in the browser's local storage, allowing the application to remember the state across page reloads.
-   **Multiple Tabs Support**: Each new tab in the browser with the application is a separate project with its own list of tasks. This allows users to manage multiple task lists simultaneously.

## Getting Started

### Prerequisites

-   Node.js version 18 or higher.
-   Vue.js version 3.2.13 or higher.

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/shokhrukhbekyuldoshev/vue-tasks.git
    ```
2. Navigate to the project directory:
    ```
    cd vue-tasks
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm run serve
    ```

The application will be available at `http://localhost:8080` (or another port if 8080 is already in use).

## Usage

-   To add a new task, enter the task description in the input field and press Enter.
-   To edit a task, double-click on the task text.
-   To toggle a task as done or not done, click the "Toggle Done" button next to the task.
-   To delete a task, click the "Delete" button next to the task.
-   To search or filter tasks, enter a search query in the search input field.

## Contributing

Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Vue.js for providing a powerful and flexible framework for building user interfaces.
-   LocalStorage for providing a simple way to store data in the user's browser.

## Contact

If you have any questions or feedback, please feel free to contact the project maintainer at `shokhrukhbekdev@gmail.com`.
