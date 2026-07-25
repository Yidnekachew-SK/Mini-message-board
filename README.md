# Mini-message-board

A simple message display web app built using Node.js and Express for routing.  
Users can see message on the homepage, open individual messages to see them separately as well as add their own message.

## Live Demo
[Live Demo](https://mini-message-board-x0tx.onrender.com/)

## Features
- Display messages on homepage
- Display message details separately
- Create message with simple form
- Validate user input for creating messages

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js (for Routes)
- **Database:** PostgreSQL
- **Validation:** express-validator
- **Template Engine:** EJS
- **Styling:** CSS 

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/Yidnekachew-SK/Mini-message-board.git
cd Mini-message-board
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Varaibles
Create **.env** file in the root directory.  
```bash
HOST=DB-host
DB=DB-name
USER=DB-user
PASSWORD=DB-password
PORT=DB-port
DB_URL=Full_connection_string_of_DB_connection
```

### 4. Populate the DB
Run the command below to create the DB tables.  
```bash
npm run populate
```

### 5. Start the server
```bash
npm run start
#or
npm run watch (like nodemon)
```
Visit **http://localhost:3000** in your browser.

