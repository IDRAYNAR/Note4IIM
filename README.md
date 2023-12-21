# Project Name

## Overview
This is a full-stack web application built with Create React App for the frontend and Strapi for the backend. The frontend code is located in the Frontend directory, and the backend code is located in the Backend directory.

## Getting Started
To launch the project:
1. **Frontend**:
   - Access the Frontend directory.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the development server.

2. **Backend**:
   - Access the Backend directory.
   - Run `npm install` to install dependencies.
   - Run `npm run develop` to start the Strapi application with autoReload enabled.

## Environment Variables
- For the frontend, add environment variables in a `.env` file in the Frontend directory if required.
- For the backend, set environment variables in the Strapi admin panel or in a `.env` file in the Backend directory.

## Additional Information
- The project uses Supabase, Axios, and React Router for the frontend.
- The backend uses Strapi with plugins for cloud, internationalization, and user permissions.

For more detailed information, please refer to the project's codebase.

### Tips and Commands
- To install frontend dependencies: `npm install` in the Frontend directory.
- To start the frontend development server: `npm start` in the Frontend directory.
- To install backend dependencies: `npm install` in the Backend directory.
- To start the Strapi application with autoReload enabled: `npm run develop` in the Backend directory.

### Explanation
This project follows a microservices architecture with a separate frontend and backend. The frontend is built using Create React App and utilizes Supabase, Axios, and React Router. The backend is powered by Strapi and includes plugins for cloud storage, internationalization, and user permissions.