# Memory Weave

Memory Weave is a platform designed to connect, preserve, and inspire through the journeys of college alumni. It allows alumni to maintain detailed personal profiles, showcasing their academic, extracurricular, and personal achievements.

## Project Structure

## Backend

The backend is built with Node.js, Express, and MongoDB. It handles user authentication, profile management, and image uploads.

### Setup

1. Install dependencies:

    ```sh
    cd backend
    npm install
    ```

2. Create a `.env` file with the following content:

    ```env
    MONGO_URI=<your_mongo_uri>
    SESSION_SECRET=<your_session_secret>
    JWT_SECRET=<yourwt_secret>
    CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
    ```

3. Start the server:

    ```sh
    npm run dev
    ```

### Routes

- **Auth Routes**: [`backend/Routes/auth.js`](backend/Routes/auth.js )
- **Register Routes**: [`backend/Routes/register.js`](backend/Routes/register.js )
- **Profile Routes**: [`backend/Routes/profile.js`](backend/Routes/profile.js )

### Models

- **User Model**: [`backend/Model/user.js`](backend/Model/user.js )
- **Listing Model**: [`backend/Model/listing.js`](backend/Model/listing.js )

## Frontend

The frontend is built with React and Vite. It provides a user interface for alumni to create and manage their profiles.

### Setup

1. Install dependencies:

    ```sh
    cd frontend
    npm install
    ```

2. Start the development server:

    ```sh
    npm run dev
    ```

### Components

- **Main Component**: [`frontend/src/App.jsx`](frontend/src/App.jsx )
- **About Us Component**: [`frontend/src/Components/Aboutus.jsx`](frontend/src/Components/Aboutus.jsx )
- **Contact Component**: [`frontend/src/Components/Contact.jsx`](frontend/src/Components/Contact.jsx )
- **Home Component**: [`frontend/src/Components/Home.jsx`](frontend/src/Components/Home.jsx )
- **Login Component**: [`frontend/src/Components/Login.jsx`](frontend/src/Components/Login.jsx )
- **Signup Component**: [`frontend/src/Components/Signup.jsx`](frontend/src/Components/Signup.jsx )
- **Profile Component**: [`frontend/src/Components/Profile.jsx`](frontend/src/Components/Profile.jsx )
- **Register Component**: [`frontend/src/Components/Register.jsx`](frontend/src/Components/Register.jsx )


