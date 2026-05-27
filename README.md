# Backend Project 1 - REST API Fundamentals

This project is built using Node.js and Express.js as part of Backend Development Project 1.

## Features

- Create local backend server
- REST API implementation
- GET APIs
- POST APIs
- DELETE APIs
- Dynamic route parameters
- JSON response handling
- In-memory data storage
- Postman API testing

---

## Technologies Used

- Node.js
- Express.js
- Postman
- Git & GitHub

---

## Installation

Clone the repository:

```bash
git clone https://github.com/hetpatoliya0206/backend-project-1.git
```

Move into project folder:

```bash
cd backend-project-1
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

---

## Server Runs On

```bash
http://localhost:3000
```

---

## API Endpoints

### Home Route

```http
GET /
```

### Get All Users

```http
GET /users
```

### Get Single User

```http
GET /users/:id
```

### Add User

```http
POST /users
```

Example Request Body:

```json
{
  "name": "Het",
  "role": "Backend Intern"
}
```

### Delete User

```http
DELETE /users/:id
```

---

## Sample JSON Response

```json
{
  "message": "User added successfully!"
}
```

---

## Author

Het Patoliya