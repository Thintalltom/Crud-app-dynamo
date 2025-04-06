🚀 React + TypeScript + Vite + AWS CRUD App
This project is a simple CRUD (Create, Read, Update, Delete) application built with ReactJS, TypeScript, and Vite on the frontend, and AWS services including DynamoDB, Lambda, and API Gateway on the backend.

🛠 Tech Stack
Frontend: ReactJS, TypeScript, Vite
Backend: AWS Lambda, API Gateway, DynamoDB

🔧 Features
Store user input in DynamoDB through a form interface
Trigger AWS Lambda Functions via API Gateway
Perform CRUD operations by interacting with the database serverlessly

## Project Steps
1. Form Setup
Created a user interface using React + TypeScript for input and data display.
2. Database Integration
Used AWS DynamoDB to store form data in a structured NoSQL format.
3. Serverless Functionality
Developed an AWS Lambda function to handle backend logic.
This function performs Create, Read, Update, and Delete operations on DynamoDB.
4. API Gateway
Set up API Gateway to expose endpoints.
Every time a request is made to the API Gateway, the Lambda function is triggered, and a response is returned based on the logic (e.g., insert or fetch from DynamoDB).
5. React Query
Made use of React Query to get data and automatically updates when new data is added
Link to the backend https://github.com/Thintalltom/DynamoDb_API

