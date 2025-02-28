📘 E-Learning Platform
A simple E-Learning Platform where users can register, log in, view courses, and submit contact messages. The website is built with HTML, CSS, JavaScript, and MongoDB and supports user authentication and contact form submissions.

🎯 Features
✅ User Authentication: Users must register before logging in.
✅ Login Required: Only logged-in users can access the Home page.
✅ Logout System: Users can log out at any time.
✅ Course Listing: Displays available courses on the home page.
✅ Contact Form: Users can send messages, which are saved in MongoDB.

🛠 Technology Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (MongoDB Compass)
🚀 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/memobvb2002/E-Learning-System.git
cd E-Learning-Platform
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Setup MongoDB
Install MongoDB Compass (or use MongoDB Atlas).
Create a database named e_learning.
Inside it, create two collections:
users (for storing registered users).
contacts (for storing contact form messages).
4️⃣ Configure Environment Variables
Create a .env file and add your MongoDB connection URL:

bash
Copy
Edit
MONGO_URI=mongodb://localhost:27017/e_learning
5️⃣ Run the Server
sh
Copy
Edit
node server.js
Your server will start on http://localhost:3000.

📌 Project Structure
bash
Copy
Edit
/E-Learning-Platform
│── public/
│   ├── index.html      # Home Page (Requires Login)
│   ├── login.html      # Login Page
│   ├── register.html   # Registration Page
│   ├── contact.html    # Contact Page
│   ├── script.js       # Handles authentication and contact form
│   ├── styles.css      # Styling
│── server.js           # Backend (Node.js, Express, MongoDB)
│── .env                # MongoDB Configuration
│── package.json        # Dependencies

📌 API Endpoints
Method	Endpoint	Description
POST	/register	Registers a new user
POST	/login	Logs in a user
POST	/contact	Saves a contact form message
🎯 How It Works
Registration: Users must first create an account (register.html).
Login: Users log in (login.html). If successful, they are redirected to index.html.
Access Home: Logged-in users can view courses.
Contact Form: Users can send messages (contact.html), which are saved in MongoDB.
Logout: Clicking Logout will remove session data and redirect to login.html.
💡 Future Improvements
🔹 Add course enrollment functionality.
🔹 Add quizzes and assignments for students.
🔹 Improve UI with Bootstrap or React.

💻 Contributors
👤 Mahmoud aboelnasr
👤 Amir abdelkader
