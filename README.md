# Real Estate Project

This is a full-stack web application developed to facilitate modern real estate buying, selling, and rental transactions.

## Technologies

### Backend (API)
- Node.js
- Express.js
- Prisma (ORM)
- JWT (Authentication)
- Socket.IO (Real-time communication)
- bcrypt (Encryption)

### Frontend (Client)
- React.js
- React Router DOM
- Axios
- Leaflet (Map integration)
- React Quill (Rich text editor)
- SASS (Styling)
- Zustand (State management)
- Socket.IO Client

## Project Structure

```
real-estate/
├── api/                    # Backend code
│   ├── controllers/        # API controllers
│   ├── routes/            # API routes
│   ├── middlewares/       # Middleware
│   ├── prisma/            # Database schemas
│   └── lib/               # Helper functions
│
├── client/                # Frontend code
│   ├── public/           # Static files
│   └── src/              # React source code
│
└── socket/               # Socket.IO server code
```

## Features

- User authentication and authorization
- Create and manage real estate listings
- View properties on map
- Real-time messaging
- Rich text editor for listing details
- Responsive design

## Installation

1. Clone the repository
```bash
git clone [repo-url]
```

2. Backend setup
```bash
cd api
npm install
```

3. Frontend setup
```bash
cd client
npm install
```

4. Socket setup
```bash
cd socket
npm install
```

5. Configure environment variables
- Create `.env` file for backend
- Add database connection details
- Set JWT secret key

6. Database migration
```bash
cd api
npx prisma migrate dev
```

7. Run the application
```bash
# Backend
cd api
node --watch app.js

# Frontend
cd client
npm run start

# Socket
cd socket
node --watch app.js
```

> **Note:** This project is currently under active development and is a work in progress. It's a demo/prototype version and not ready for production use.


## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

Sercan Sever - [GitHub](https://github.com/sercansever) 