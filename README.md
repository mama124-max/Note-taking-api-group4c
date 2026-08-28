# Note-Taking API

A simple Note-Taking API built with **Node.js** and **Express.js**.

This API allows users to create, view, update, and delete notes using basic CRUD operations.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman (for testing the API)

## Getting Started

### 1. Clone the project

```bash
git clone https://github.com/mama124-max/Note-taking-api-group4c.git
```

Go into the project folder:

```bash
cd Note-taking-api-group4c
```

### 2. Install the dependencies

Run:

```bash
npm install
```

This will install Express and the other packages needed for the project.

### 3. Start the server

There is currently no `start` script in `package.json`, so run the server directly with:

```bash
node server.js
```

If everything is working, you should see:

```text
Server running on port 3000
```

The API will be available at:

```text
http://localhost:3000
```

You can also visit the root URL in your browser:

```text
http://localhost:3000/
```

It should display:

```text
Note-Taking API is running!
```

# API Endpoints

The base URL for the notes endpoints is:

```text
http://localhost:3000/notes
```

## 1. Get All Notes

**Method:** `GET`

**Endpoint:**

```text
GET /notes
```

**Full URL:**

```text
http://localhost:3000/notes
```

No request body is needed.

### Example Response

```json
[
  {
    "id": 1,
    "title": "First Note",
    "content": "This is a sample note."
  },
  {
    "id": 2,
    "title": "Second Note",
    "content": "This is another sample note."
  }
]
```


## 2. Create a New Note

**Method:** `POST`

**Endpoint:**

```text
POST /notes
```

**Full URL:**

```text
http://localhost:3000/notes
```

### Postman

In Postman:

1. Select `POST`
2. Enter the URL
3. Go to **Body**
4. Select **raw**
5. Select **JSON**
6. Enter:

```json
{
  "title": "My New Note",
  "content": "This is the content of my new note."
}
```

### Example Response

```json
{
  "id": 3,
  "title": "My New Note",
  "content": "This is the content of my new note."
}
```

The API returns a `201 Created` status when the note is successfully added.


## 3. Get One Note

**Method:** `GET`

**Endpoint:**

```text
GET /notes/:id
```

Replace `:id` with the ID of the note you want.

### Example

```text
GET http://localhost:3000/notes/1
```

No request body is needed.

### Example Response

```json
{
  "id": 1,
  "title": "First Note",
  "content": "This is a sample note."
}
```

If the note does not exist, the API returns:

```json
{
  "message": "Note not found"
}
```

with a `404 Not Found` status.


## 4. Update a Note with PUT

`PUT` is used to update the whole note.

**Method:** `PUT`

**Endpoint:**

```text
PUT /notes/:id
```

### Example

```text
PUT http://localhost:3000/notes/1
```

### Postman Body

Select **Body → raw → JSON** and enter:

```json
{
  "title": "Updated Note",
  "content": "This is the updated content."
}
```

### Example Response

```json
{
  "id": 1,
  "title": "Updated Note",
  "content": "This is the updated content."
}
```

If the note does not exist:

```json
{
  "message": "Note not found"
}
```

The response will have a `404 Not Found` status.


## 5. Partially Update a Note with PATCH

`PATCH` is used when you only want to change part of a note.

**Method:** `PATCH`

**Endpoint:**

```text
PATCH /notes/:id
```

### Example

```text
PATCH http://localhost:3000/notes/1
```

For example, if you only want to change the title:

```json
{
  "title": "New Title"
}
```

The content will remain unchanged.

You can also update only the content:

```json
{
  "content": "This is the new content."
}
```

Or update both:

```json
{
  "title": "New Title",
  "content": "New content for the note."
}
```

### Example Response

```json
{
  "id": 1,
  "title": "New Title",
  "content": "New content for the note."
}
```

If the note does not exist:

```json
{
  "message": "Note not found"
}
```


## 6. Delete a Note

**Method:** `DELETE`

**Endpoint:**

```text
DELETE /notes/:id
```

### Example

```text
DELETE http://localhost:3000/notes/1
```

No request body is needed.

### Example Response

```json
{
  "message": "Note deleted successfully",
  "note": {
    "id": 1,
    "title": "First Note",
    "content": "This is a sample note."
  }
}
```

If the note does not exist:

```json
{
  "message": "Note not found"
}
```



# Testing with Postman

You can test all the endpoints using Postman.

Make sure the server is running first:

```bash
node server.js
```

Then use:

```text
http://localhost:3000
```

as the base URL.

### Suggested Testing Order

You can test the API in this order:

1. **GET** `/notes` — check the existing notes.
2. **POST** `/notes` — create a new note.
3. **GET** `/notes/:id` — view the note you just created.
4. **PUT** `/notes/:id` — completely update the note.
5. **PATCH** `/notes/:id` — change only the title or content.
6. **DELETE** `/notes/:id` — delete the note.
7. **GET** `/notes/:id` — confirm that the deleted note now returns `404`.


# Project Structure

The main files used in this project are:

```text
Note-taking-api-group4c/
│
├── server.js
├── routes/
│   └── notes.js
├── package.json
├── package-lock.json
└── README.md
```

### server.js

This is where the Express server is created and started. It also connects the notes routes to `/notes`.

### routes/notes.js

This file contains the CRUD operations for the notes.



# HTTP Status Codes Used


`200` ---> Request was successful 
`201` ---> A new note was created 
`404` ---> The requested note was not found 


# Author / Group

**Group 4C**

This project was created as a group project to practice building APIs with Express.js and implementing CRUD operations.
