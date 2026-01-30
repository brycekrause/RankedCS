# Ranked CS

Ranked CS is a web application that allows users to track and rank their LeetCode problem-solving stats. Users can register, log in, and view their coding statistics such as solved problems, wins, losses, and ELO rating. The app is built with a modern stack and JWT-based authentication.

# Tech Stack

Frontend: React + Tailwind CSS

Backend: Node.js + Express

Database: PostgreSQL (cloud or local)

Authentication: JWT (JSON Web Tokens)

Password Hashing: bcrypt

Hosting: Cloudflare (for frontend); backend can be hosted anywhere Node.js is supported

# Features

User registration and login with secure password hashing

JWT-protected endpoints for stats access

Tracks problem-solving stats: easy, medium, hard, wins, losses, elo

REST API for stats retrieval

Ready for future leaderboard implementation

# API Endpoints

POST /register – Register a new user

POST /login – Login and receive JWT token

GET /stats – Retrieve user stats (JWT protected)

GET /leaderboard – Get leaderboard (planned)
