# Real Estate Project

> **Note:** This project is currently under active development and is a work in progress. It's a demo/prototype version and not ready for production use.

This is a full-stack web application developed to facilitate modern real estate buying, selling, and rental transactions.

## Technologies

### Backend (API)
- Node.js
- Express.js
- Prisma (ORM)
- JWT (Authentication)
- Socket.IO (Real-time communication)
- bcrypt (Encryption)
- Nodemailer (Email service)
- Cookie Parser
- CORS

### Frontend (Client)
- React.js
- React Router DOM
- Axios
- Leaflet (Map integration)
- React Quill (Rich text editor)
- SASS (Styling)
- Zustand (State management)
- Socket.IO Client
- React Icons
- TimeAgo.js

## Project Structure

```
real-estate/
├── api/                    # Backend code
│   ├── controllers/        # API controllers
│   │   ├── auth           # Authentication controllers
│   │   ├── post           # Property listing controllers
│   │   ├── message        # Chat message controllers
│   │   └── mail-sender    # Email service controllers
│   ├── routes/            # API routes
│   ├── middlewares/       # Middleware
│   ├── prisma/            # Database schemas
│   └── lib/               # Helper functions
│
├── client/                # Frontend code
│   ├── public/           # Static files
│   └── src/              # React source code
│       ├── components/   # Reusable components
│       ├── context/      # React context
│       ├── lib/          # Helper functions
│       ├── pages/        # Page components
│       └── styles/       # Global styles
│
└── socket/               # Socket.IO server code
```

## Features

- User authentication and authorization
- Create and manage real estate listings
- Advanced property search and filtering
- View properties on interactive map
- Real-time messaging between users
- Rich text editor for listing details
- Email notification system
- Responsive design for all devices
- User profile management
- Property image upload and management
- Real-time chat notifications


## Installation

1. Clone the repository
```bash
git clone https://github.com/SercanSever/real-estate.git
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
Create `.env` file in the api directory with the following variables:
```env
DATABASE_URL="mysql://user:password@localhost:3306/real_estate"
JWT_SECRET="your-secret-key"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-email-app-password"
CLIENT_URL="http://localhost:3000"
```

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

## Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Node.js Documentation](https://nodejs.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Socket.IO Documentation](https://socket.io/docs/) 
