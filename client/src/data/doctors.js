// Static doctor data for frontend-only application
export const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "15 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    availability: [
      "2024-01-15T09:00:00Z",
      "2024-01-15T14:00:00Z",
      "2024-01-16T10:00:00Z",
      "2024-01-16T15:00:00Z",
      "2024-01-17T11:00:00Z",
      "2024-01-17T16:00:00Z"
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    experience: "12 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    availability: [
      "2024-01-15T08:00:00Z",
      "2024-01-15T13:00:00Z",
      "2024-01-16T09:00:00Z",
      "2024-01-16T14:00:00Z",
      "2024-01-18T10:00:00Z",
      "2024-01-18T15:00:00Z"
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Dermatologist",
    experience: "8 years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    availability: [
      "2024-01-15T10:00:00Z",
      "2024-01-15T15:00:00Z",
      "2024-01-17T09:00:00Z",
      "2024-01-17T14:00:00Z",
      "2024-01-19T11:00:00Z",
      "2024-01-19T16:00:00Z"
    ]
  },
  {
    id: 4,
    name: "Dr. David Thompson",
    specialization: "Orthopedic Surgeon",
    experience: "20 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    availability: [
      "2024-01-16T08:00:00Z",
      "2024-01-16T13:00:00Z",
      "2024-01-18T09:00:00Z",
      "2024-01-18T14:00:00Z",
      "2024-01-20T10:00:00Z",
      "2024-01-20T15:00:00Z"
    ]
  },
  {
    id: 5,
    name: "Dr. Lisa Wang",
    specialization: "Pediatrician",
    experience: "10 years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    availability: [
      "2024-01-15T11:00:00Z",
      "2024-01-15T16:00:00Z",
      "2024-01-17T08:00:00Z",
      "2024-01-17T13:00:00Z",
      "2024-01-19T09:00:00Z",
      "2024-01-19T14:00:00Z"
    ]
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialization: "Psychiatrist",
    experience: "18 years",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    availability: [
      "2024-01-16T10:00:00Z",
      "2024-01-16T15:00:00Z",
      "2024-01-18T11:00:00Z",
      "2024-01-18T16:00:00Z",
      "2024-01-20T09:00:00Z",
      "2024-01-20T14:00:00Z"
    ]
  }
];

// Helper function to get doctor by ID
export const getDoctorById = (id) => {
  return doctorsData.find(doctor => doctor.id === parseInt(id));
};

// Helper function to get all doctors
export const getAllDoctors = () => {
  return doctorsData;
}; 