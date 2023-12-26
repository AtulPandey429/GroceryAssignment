# Grocery Inventory Management System

This project is a MERN stack web-based application using React with Vite as the frontend tooling for managing a grocery inventory. It includes functionalities to add grocery items to the inventory and view the list of available items.

## Features

- **Add Grocery Items:** Allows users to add new grocery items to the inventory.
- **View Grocery List:** Displays a list of all available grocery items with their quantities.

## Technology Stack

- **React with Vite:** Frontend library and tooling for efficient development.
- **MongoDB:** Database to store the inventory data.
- **Express.js:** Backend framework to handle API requests.
- **Node.js:** JavaScript runtime for the server.

## Manual Refresh After Adding Items

Currently, after adding an item, the UI does not automatically update to reflect the new addition. To see the newly added item, users need to manually refresh the page.

### Proposed Enhancement

- Implement an automatic refresh feature after adding an item to instantly reflect the new addition in the UI without requiring a manual page refresh.

## Getting Started

### Install dependencies:

```bash
# Go to the server directory
cd server
npm install
# Start the backend: nodemon server.js

# Go to the client directory
cd client
npm install
# Start the frontend: npm run dev
