const express = require('express');
const cors = require('cors'); 
const app = express(); 
const port = 5000;

// Simple CORS for local development
app.use(cors()); 
app.use(express.json());

// Mock data with more doctors and avatar images
const doctors = [ 
    { 
        id: 1, 
        name: 'Dr. John Smith', 
        specialization: 'Cardiologist',
        experience: '15 years',
        rating: 4.8,
        image: 'https://ui-avatars.com/api/?name=John+Smith&background=4299e1&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T10:00:00', '2025-01-15T11:00:00', '2025-01-16T09:00:00', '2025-01-16T14:00:00'], 
    }, 
    { 
        id: 2, 
        name: 'Dr. Emily Johnson', 
        specialization: 'Pediatrician',
        experience: '12 years',
        rating: 4.9,
        image: 'https://ui-avatars.com/api/?name=Emily+Johnson&background=48bb78&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T14:00:00', '2025-01-16T10:00:00', '2025-01-17T09:00:00'], 
    },
    { 
        id: 3, 
        name: 'Dr. Michael Chen', 
        specialization: 'Neurologist',
        experience: '18 years',
        rating: 4.7,
        image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=ed8936&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T13:00:00', '2025-01-16T11:00:00', '2025-01-17T15:00:00'], 
    },
    { 
        id: 4, 
        name: 'Dr. Sarah Williams', 
        specialization: 'Dermatologist',
        experience: '10 years',
        rating: 4.6,
        image: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=9f7aea&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T09:00:00', '2025-01-16T13:00:00', '2025-01-17T10:00:00'], 
    },
    { 
        id: 5, 
        name: 'Dr. David Rodriguez', 
        specialization: 'Orthopedic Surgeon',
        experience: '20 years',
        rating: 4.9,
        image: 'https://ui-avatars.com/api/?name=David+Rodriguez&background=f56565&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T15:00:00', '2025-01-16T16:00:00'], 
    },
    { 
        id: 6, 
        name: 'Dr. Lisa Thompson', 
        specialization: 'Psychiatrist',
        experience: '14 years',
        rating: 4.8,
        image: 'https://ui-avatars.com/api/?name=Lisa+Thompson&background=38b2ac&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T16:00:00', '2025-01-16T14:00:00', '2025-01-17T11:00:00'], 
    },
    { 
        id: 7, 
        name: 'Dr. Robert Kim', 
        specialization: 'Oncologist',
        experience: '16 years',
        rating: 4.7,
        image: 'https://ui-avatars.com/api/?name=Robert+Kim&background=805ad5&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T12:00:00', '2025-01-16T09:00:00'], 
    },
    { 
        id: 8, 
        name: 'Dr. Amanda Davis', 
        specialization: 'Gynecologist',
        experience: '13 years',
        rating: 4.9,
        image: 'https://ui-avatars.com/api/?name=Amanda+Davis&background=e53e3e&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T11:00:00', '2025-01-16T15:00:00', '2025-01-17T13:00:00'], 
    },
    { 
        id: 9, 
        name: 'Dr. James Wilson', 
        specialization: 'Urologist',
        experience: '17 years',
        rating: 4.6,
        image: 'https://ui-avatars.com/api/?name=James+Wilson&background=3182ce&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T14:00:00', '2025-01-17T09:00:00'], 
    },
    { 
        id: 10, 
        name: 'Dr. Maria Garcia', 
        specialization: 'Endocrinologist',
        experience: '11 years',
        rating: 4.8,
        image: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=38a169&color=fff&size=200&font-size=0.4&bold=true', 
        availability: ['2025-01-15T16:00:00', '2025-01-16T12:00:00', '2025-01-17T14:00:00'], 
    }
];

const appointments = [];

// API Routes
app.get('/api/doctors', (req, res) => { 
    res.json(doctors); 
});

app.get('/api/doctors/:id', (req, res) => { 
    const doctor = doctors.find((d) => d.id === parseInt(req.params.id)); 
    if (doctor) { 
        res.json(doctor); 
    } else { 
        res.status(404).json({ message: 'Doctor not found' }); 
    } 
});

app.post('/api/appointments', (req, res) => { 
    const { doctorId, patientName, email, dateTime } = req.body; 
    if (!doctorId || !patientName || !email || !dateTime) { 
        return res.status(400).json({ message: 'All fields are required' });
    } 
    const appointment = { id: appointments.length + 1, doctorId, patientName, email, dateTime }; 
    appointments.push(appointment); 
    res.status(201).json({ message: 'Appointment booked successfully', appointment }); 
});

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ 
        message: 'Healthcare Appointment API is running!',
        endpoints: {
            doctors: '/api/doctors',
            doctorById: '/api/doctors/:id',
            appointments: '/api/appointments'
        }
    });
});

app.listen(port, () => { 
    console.log(`Server running on http://localhost:${port}`); 
    console.log(`API available at http://localhost:${port}/api/doctors`);
});