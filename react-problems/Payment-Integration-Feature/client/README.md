# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Folder structure: 
payment-gateway/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PrivateRoute.js
│   │   │   ├── SignIn.js
│   │   │   ├── SignUp.js
│   │   │   ├── Payment.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── paymentController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Payment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── paymentRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── config/
│   │   ├── db.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
├── README.md


# Packages: 
`Frontend`:
- npm install axios react-router-dom formik yup jwt-decode.
`backend`:
- npm install express body-parser cors mongoose bcryptjs jsonwebtoken stripe dotenv.

