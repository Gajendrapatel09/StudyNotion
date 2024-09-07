# Study Notion

StudyNotion is a versatile and intuitive ed-tech platform that enables users to create, consume, and rate educational content. It provides a seamless and interactive learning experience for students while offering a platform for instructors to showcase their expertise and connect with learners worldwide. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

***

# System Architecture
The StudyNotion ed-tech platform follows a client-server architecture with the following main components:

* Front-end: Built with ReactJS, it communicates with the back end using RESTful API calls.
* Back-end: Developed with NodeJS and ExpressJS, it handles user authentication, course management, and more.
* Database: Utilizes MongoDB as a NoSQL database to store course content, user data, and other relevant information.
![system architecture studynotion](https://github.com/user-attachments/assets/48ba4378-0d66-4b0f-8ab0-6e8fe6d8c11e)

## Features

* User Authentication: Study Notion provides secure user registration and authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their 
  profiles with ease.
  
* Courses and Lessons: Instructors can create and edit created courses. Students can enroll in courses, access course materials, and track their progress.
* Progress Tracking: Study Notion allows students to track their progress in enrolled courses. They can view completed lessons, scores on quizzes and 
  assignments, and overall course progress.
  
* Payment Integration: Study Notion integrates with Razorpay for payment processing. Users can make secure payments for course enrollment and other services 
  using various payment methods supported by Razorpay.
  
* Search Functionality: Users can easily search for courses, lessons, and resources using the built-in search feature. This makes it convenient to find relevant 
  content quickly.
  
* Instructor Dashboard: Instructors have access to a comprehensive dashboard to view information about their courses, students, and income. The 
 dashboard provides charts and visualizations to present data clearly and intuitively. Instructors can monitor the total number of students enrolled in 
 each course, track course performance, and view their income generated from course sales.

# Front-end
The front end of StudyNotion is built with ReactJS, offering a dynamic and responsive user interface for students and instructors. Here are some key pages and functionalities:

For Students:

* Homepage: Introduction to the platform.
* Course List: List of available courses with descriptions and ratings.
* Wishlist: Display added courses.
* Cart Checkout: Complete course purchase using Razorpay.
* Course Content: Access course material, including videos.
* Enrolled Courses: Progress and list of enrolled courses.
* User Details: Account information.
* User Edit Details: Edit account information.

For Instructors:

* Dashboard: Overview of instructor's courses and ratings.
* Insights: Detailed course including the number of views, clicks, and other relevant metrics.
* Course Management Pages: Create, update, delete courses.
* View and Edit Profile Details: Account management.
* Front-end tools and technologies include ReactJS, CSS, Tailwind CSS, Redux for state management, and VSCode for development.Additionally, we use some npm packages to add extra functionality to the front end.
  
***
## Screenshots
![Screenshot 2024-09-08 000248](https://github.com/user-attachments/assets/9478a889-8e2a-4adc-a60f-e4457db1fdc1)
![Screenshot 2024-09-08 005431](https://github.com/user-attachments/assets/e788ba0d-0125-4fa2-a2ca-9b469343da74)
![Screenshot 2024-09-08 012111](https://github.com/user-attachments/assets/21ac6982-58f0-450c-9b41-99b1fc8d6700)
![Screenshot 2024-09-08 010517](https://github.com/user-attachments/assets/6556680e-2123-48b6-83cc-8296266f29cf)
![Screenshot 2024-09-08 010849](https://github.com/user-attachments/assets/575cbd3c-28b2-460f-a1e3-83899a82be72)
![Screenshot 2024-09-08 010724](https://github.com/user-attachments/assets/dd1d88d1-2d5d-4cc9-a208-2e238f819721)

***

# Back-end
The back end of StudyNotion is built with NodeJS and ExpressJS and uses MongoDB as its primary database. Key features and functionalities include:

* User Authentication and Authorization: Secure login, OTP verification, and forgot password functionality.
* Course Management: Instructors can create, update, delete courses, and students can view and rate them.
* Payment Integration: Razorpay integration for course purchases.
* Cloud-based Media Management: Cloudinary for storing and managing media content.
* Markdown Formatting: Course content is stored in Markdown format for rendering.
* Frameworks, libraries, and tools used: Node.js, MongoDB, Express.js, JWT for authentication and authorization, Bcrypt for password hashing, and Mongoose for database interaction.

Data Models and Database Schema

* Student Schema: Includes name, email, password, and course details.
* Instructor Schema: Includes name, email, password, and course details.
* Course Schema: Includes course name, description, instructor details, and media content.

# API Design
StudyNotion's API follows the REST architectural style, implemented using Node.js and Express.js. It uses JSON for data exchange and standard HTTP request methods. Sample API endpoints include:

* POST /api/auth/signup: Create a new user account.
* POST /api/auth/login: Log in and generate a JWT token.
* POST /api/auth/verify-otp: Verify OTP sent to the user's email.
* POST /api/auth/forgot-password: Send a password reset link.
* GET /api/courses: Get a list of all available courses.
* GET /api/courses/:id: Get details of a specific course.
* POST /api/courses: Create a new course.
* PUT /api/courses/:id: Update an existing course.
* DELETE /api/courses/:id: Delete a course.
* POST /api/courses/:id/rate: Add a course rating (out of 5).

Sample API requests and responses:

* GET /api/courses: Get all courses
* Response: A list of all courses in the database
* GET /api/courses/:id: Get a single course by ID
* Response: The course with the specified ID
* POST /api/courses: Create a new course
* Request: The course details in the request body
* Response: The newly created course
* PUT /api/courses/:id: Update an existing course by ID
* Request: The updated course details in the request body
* Response: The updated course
* DELETE /api/courses/:id: Delete a course by ID

Response: A success message indicating that the course has been deleted.


## Installation

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Gajendrapatel09/StudyNotion.git
    ```

2. Install the required packages.
    ```sh
    cd Study-Notion-master
    npm install
    
    cd server
    npm install
    ```

3. Set up the environment variables:

   Create a .env file in the root directory and /server
   Add the required environment variables, such as database connection details, JWT secret, and any other necessary configurations check .env.example files for more info.


4. Start the development server.
    ```sh
    npm run dev
    ```

5. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.
