# Study Notion

StudyNotion is a versatile and intuitive ed-tech platform that enables users to create, consume, and rate educational content. It provides a seamless and interactive learning experience for students while offering a platform for instructors to showcase their expertise and connect with learners worldwide. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

***
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

  
***
## Screenshots
![Screenshot 2024-09-08 000248](https://github.com/user-attachments/assets/9478a889-8e2a-4adc-a60f-e4457db1fdc1)
![Screenshot 2024-09-08 005431](https://github.com/user-attachments/assets/e788ba0d-0125-4fa2-a2ca-9b469343da74)
![Screenshot 2024-09-08 012111](https://github.com/user-attachments/assets/21ac6982-58f0-450c-9b41-99b1fc8d6700)
![Screenshot 2024-09-08 010517](https://github.com/user-attachments/assets/6556680e-2123-48b6-83cc-8296266f29cf)
![Screenshot 2024-09-08 010849](https://github.com/user-attachments/assets/575cbd3c-28b2-460f-a1e3-83899a82be72)
![Screenshot 2024-09-08 010724](https://github.com/user-attachments/assets/dd1d88d1-2d5d-4cc9-a208-2e238f819721)

***

## Important
* Backend is  in the server folder.
* Before uploading courses and anything create the categories e.g. web dev, Python, etc. (without categories courses cannot be added). To create categories create an Admin account and go to dashboard then admin panel.
* To create an Admin account first sign up with a student or instructor account then go to your Database under the users model and change that 'accountType' to 'Admin'.


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
