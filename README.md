# Employee Management Client

This is the frontend application for the Employee Management System, built with React.

## Prerequisites

Before running this project, ensure you have the following installed:
- Node.js (version 14.x or later recommended)
- npm (usually comes with Node.js)

## Getting Started

Follow these steps to set up and run the Employee Management Client:

1. Clone the repository:
   ```bash
   git clone https://github.com/Kamalesh0401/employee-management-client.git
   ```

2. Navigate to the project directory:
   ```bash
   cd employee-management-client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure the API base URL:
   Open the `src/utils.js` file and update the `serviceurl` constant to match your backend URL:
   ```javascript
   // In src/utils.js
   const serviceurl = 'http://localhost:5000';
   ```

5. Set up the backend server:
   - Clone the backend repository:
     ```bash
     git clone https://github.com/Kamalesh0401/employee-management-server.git
     ```
   - Navigate to the server directory:
     ```bash
     cd employee-management-server
     ```
   - Install server dependencies:
     ```bash
     npm install
     ```
   - Start the server:
     ```bash
     npm start
     ```
   - Ensure the server is running on `http://localhost:5000`

6. Start the development server for the frontend:
   ```bash
   npm start
   ```
   The application should now be running on `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production to the `build` folder.

## Connecting to the Backend

Ensure that the Employee Management Server is running on `http://localhost:5000` before starting the frontend application. If your backend is running on a different URL, update the `serviceurl` in `src/utils.js` accordingly.

## Troubleshooting

- If you encounter CORS issues, verify that the backend server is configured to allow requests from the frontend origin.
- Check that the `serviceurl` in `src/utils.js` matches the actual URL of your backend server.
- If the backend server isn't running on `http://localhost:5000`, make sure to update the `serviceurl` and restart the frontend application.
