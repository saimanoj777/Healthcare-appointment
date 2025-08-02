# Healthcare Appointment Booking App

A simple healthcare appointment booking application built with React and Express.js for local development.

## Features

- Browse available doctors
- View doctor profiles and specializations
- Book appointments with selected doctors
- Responsive design with Bootstrap

## Local Development Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Healthcare-appointment
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the API server**
   ```bash
   cd server
   npm run dev
   ```
   The API will run on `http://localhost:5000`

2. **Start the React frontend**
   ```bash
   cd client
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to use the application

## API Endpoints

- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get specific doctor
- `POST /api/appointments` - Book an appointment
- `GET /` - API health check

## Project Structure

```
Healthcare-appointment/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── config/        # API configuration
│   └── package.json
├── server/                 # Express.js backend
│   ├── index.js           # Main server file
│   └── package.json
└── README.md
```

## Technologies Used

- **Frontend**: React, React Router, Axios, Bootstrap
- **Backend**: Express.js, CORS
- **Development**: Vite, Nodemon

## Development Scripts

### Server
- `npm run dev` - Start server with nodemon (auto-restart on changes)
- `npm start` - Start server normally

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Mock Data

The application uses mock data for doctors and appointments. All data is stored in memory and will reset when the server restarts. 