// Array of services offered by Ghar E Garage
const services = [
    { id: 1, name: "Device Repair", description: "Comprehensive repair services for all your electronic devices.", image: "https://images.pexels.com/photos/6755137/pexels-photo-6755137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Software Update", description: "Update your device's software to the latest versions for optimal performance.", image: "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Hardware Upgrade", description: "Enhance your device with the latest hardware components.", image: "https://images.pexels.com/photos/18471565/pexels-photo-18471565/free-photo-of-a-machine-with-wires-and-electronics-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Battery Replacement", description: "Get your device's battery checked and replaced with high-quality alternatives.", image: "https://images.pexels.com/photos/6754854/pexels-photo-6754854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Screen Replacement", description: "Professional screen replacement services to fix cracked or unresponsive screens.", image: "https://images.pexels.com/photos/6755137/pexels-photo-6755137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Water Damage Repair", description: "Specialized services to deal with water-damaged devices.", image: "https://images.pexels.com/photos/4098885/pexels-photo-4098885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

// Array to store users directly in the file
let users = [
    { username: "admin", password: "password123", email: "admin@example.com" },
    { username: "user1", password: "password123", email: "user1@example.com" },
    { username: "user2", password: "password2024", email: "user2@example.com" }
];

// Array to store bookings directly in the file
let bookings = [];

let currentUser = null;


// Function to register a new user
function registerUser(username, email, password) {
    // Check if the username or email already exists
    const userExists = users.some(user => user.username === username || user.email === email);

    if (!userExists) {
        // Add the new user to the users array
        users.push({ username, email, password });
        
        // Log the newly registered user
        console.log("New user registered: ", { username, email });
        return true;
    } else {
        // If the username or email already exists
        console.log("Registration failed. Username or email already exists.");
        return false;
    }
}

// Function to validate login credentials
function validateLogin(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save the session in localStorage
    }
    return user ? true : false;
}

// Function to get the current logged-in user
function getLoggedInUser() {
    
    if (localStorage.getItem('loggedInUser')) {
        return true;
        } else {
            return false;

        }

    // return currentUser || JSON.parse(localStorage.getItem('loggedInUser')); // Get user from session
}

// Function to log out
function logout() {
    console.log("User logged out successfully.");
}


// Exporting functions if using modules (uncomment if you're using module bundlers or Node.js)
/*
module.exports = {
    services,
    users,
    validateLogin,
    registerUser,
    logout,
    createBooking,
    getBookings
};
*/
