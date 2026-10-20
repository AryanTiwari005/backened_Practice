# Mini WhatsApp (Backend Practice)

A small chat app built to practice backend fundamentals: a REST API with Express and MongoDB, plus a server-rendered page with EJS.

## Features

- REST API to create, read and delete chats (single, multiple and bulk)
- Server-rendered chat page (EJS) with a message form and a delete button on every chat
- MongoDB with Mongoose: schema validation, default timestamps
- Seed script to fill the database with sample chats
- Separate controllers for the JSON API and for the HTML pages

## Tech Stack

- Node.js (ES modules)
- Express
- MongoDB Atlas + Mongoose
- EJS
- dotenv, nodemon

## Project Structure

```
backened_Practice/
├── controllers/
│   ├── chatController.js    # JSON API logic
│   └── pageController.js    # EJS page logic
├── model/
│   └── chat.js              # Mongoose schema
├── routes/
│   ├── chat.routes.js       # /api/chats routes
│   └── page.routes.js       # page routes
├── seed/
│   └── seed.js              # sample data script
├── views/
│   └── index.ejs            # chat page
├── db.js                    # MongoDB connection
├── server.js                # app entry point
└── .env                     # secrets (not committed)
```

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd backened_Practice
npm install
```

### 2. Create a `.env` file

```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-host>/<database-name>
PORT=5000
```

Put a database name at the end of the URI. If you leave it out, MongoDB uses a database called `test`.

### 3. Run

```bash
npm run dev      # development (auto-restart with nodemon)
npm start        # production
npm run seed     # optional: insert sample chats (clears existing chats first)
```

Open `http://localhost:5000/` to see the chat page.

## Chat Schema

| Field | Type | Rules |
|---|---|---|
| `from` | String | required |
| `to` | String | required |
| `msg` | String | required, max 50 characters |
| `created_at` | Date | defaults to the current time |

## API Endpoints

Base URL: `http://localhost:5000/api/chats`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/getchat` | Get all chats |
| POST | `/addchat` | Create a chat |
| POST | `/addBulkChats` | Create many chats (send an array) |
| DELETE | `/deletechat/:id` | Delete one chat by `_id` |
| DELETE | `/deletechats` | Delete many chats (send `{ "ids": [...] }`) |

### Example: create a chat

`POST /api/chats/addchat`

```json
{
  "from": "neha",
  "to": "priya",
  "msg": "send me your exam sheets"
}
```

### Example: delete multiple chats

`DELETE /api/chats/deletechats`

```json
{
  "ids": ["6505f469acc19622bb2bb04e", "6505f387de28b7b4178080ca"]
}
```

## Page Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Show all chats |
| POST | `/chats` | Add a chat from the form, then redirect to `/` |
| POST | `/chats/:id/delete` | Delete a chat from the page, then redirect to `/` |

## Status Codes Used

- `200` OK
- `201` Created
- `400` Bad request (missing or invalid data)
- `404` Not found
- `500` Server error

## What I Learned

- Structuring an Express app with routes, controllers and models
- Connecting to MongoDB Atlas with Mongoose and environment variables
- `req.params`, `req.query` and `req.body`, and when to use each
- CRUD with Mongoose, including `insertMany`, `deleteMany` and `$in`
- Seeding a database with a script
- Server-side rendering with EJS and handling HTML form submissions
- Difference between PUT and PATCH, and between in-memory and database storage

## Roadmap

- [ ] Update (PATCH) and get-by-id endpoints
- [ ] Pagination and filtering on GET
- [ ] Centralized error-handling middleware
- [ ] User registration and login with JWT
- [ ] Protect chat routes with auth middleware
- [ ] Deploy (Render/Railway + MongoDB Atlas)

## Author

Aryan Tiwari