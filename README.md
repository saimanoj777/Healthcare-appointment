# Healthcare Appointment Booking App

A healthcare appointment booking application built with React and Express.js, using a deployed API.

## Features

- Browse available doctors
- View doctor profiles and specializations
- Book appointments with selected doctors
- Responsive design with Bootstrap
- Connected to deployed API

## API Information

The application is connected to a deployed API at:
**https://my-backend-service-s085.onrender.com**

API endpoints:
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get specific doctor
- `POST /api/appointments` - Book an appointment
- `GET /` - API health check

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

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

### Running the Frontend

1. **Start the React frontend**
   ```bash
   cd client
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

2. **Open your browser**
   Navigate to `http://localhost:3000` to use the application

The frontend will automatically connect to the deployed API at `https://my-backend-service-s085.onrender.com`.

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
├── server/                 # Express.js backend (for reference)
│   ├── server.js          # Main server file
│   └── package.json
└── README.md
```

## Technologies Used

- **Frontend**: React, React Router, Axios, Bootstrap
- **Backend**: Express.js, CORS (deployed on Render)
- **Development**: Vite

## Development Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Configuration

The API configuration is located in `client/src/config/api.js` and points to the deployed API. If you need to change the API URL, update the `baseURL` in this file.

## Mock Data

The deployed API uses mock data for doctors and appointments. All data is stored in memory and will reset when the server restarts. 