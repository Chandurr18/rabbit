# 🐰 Rabbit — Full-Stack E-Commerce Web App 🛒🔥

> A modern, full-stack e-commerce platform built with **React, Redux Toolkit, Node.js, Express, and MongoDB**.
> Secure auth, admin dashboard, carts, orders — the whole package 💪

---

## 🚀 What is Rabbit?

**Rabbit** is a **complete e-commerce web application** that lets users:

* Browse products 🛍️
* Add items to cart
* Checkout & place orders
* Track their order history
* And lets **admins** manage products & orders from a dashboard 👑

This isn’t a demo.
This isn’t half-done.
This is a **real full-stack project**.

---

## 🧠 Tech Stack (aka the cool stuff)

### 🖥️ Frontend

* ⚛️ **React**
* 🧰 **Redux Toolkit** (global state, async thunks)
* 🔁 React Router
* 🎨 Modern component-based UI

### 🔧 Backend

* 🟢 **Node.js**
* 🚂 **Express.js**
* 🍃 **MongoDB + Mongoose**
* 🔐 **JWT Authentication**

### ☁️ Deployment Ready

* ▲ **Vercel** (backend config included)

---

## ✨ Features That Actually Matter

### 👤 User Features

* 🔐 Register & Login (JWT secured)
* 🛒 Add / Remove products from cart
* 💳 Checkout flow
* 📦 Place orders
* 🧾 View order history
* 👤 Profile management

### 🛠️ Admin Features

* ➕ Add / Edit / Delete products
* 📦 View & manage all orders
* 👑 Admin-only protected routes
* 📊 Dashboard-style management

### 💌 Extra

* 📩 Newsletter subscription support
* ⚡ Fast & responsive UI
* 🧠 Clean architecture (frontend + backend separated)

---

## 🗂️ Project Structure

```
rabbit/
├── backend/
│   ├── config/        # DB & env config
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── middleware/    # Auth & protection
│   ├── server.js      # Backend entry point
│   └── seeder.js      # Sample data seeding
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/     # Redux Toolkit slices
│   │   └── utils/
│
└── README.md
```

Clean. Scalable. Interview-friendly ✅

---

## 🧰 Redux State Management

Global state handled using **Redux Toolkit slices**:

* `authSlice`
* `productsSlice`
* `cartSlice`
* `checkoutSlice`
* `orderSlice`
* `adminSlice`
* `adminProductSlice`
* `adminOrderSlice`

Async logic handled with **createAsyncThunk** — no messy code here.

---

## 🔐 Authentication & Security

* JWT-based authentication
* Protected routes for users
* Admin-only middleware
* Secure password handling
* Role-based access control

---

## 🧪 Sample Data

You can seed the database using:

```bash
node backend/seeder.js
```

Perfect for testing & development.

---

## 🛠️ Environment Variables

Create a `.env` file inside `backend/`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## ▶️ Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Open browser 👉 `http://localhost:3000`

---

## 🎯 Why This Project?

Because it shows:

* ✅ Full-stack knowledge
* ✅ Real authentication
* ✅ Admin logic
* ✅ Scalable folder structure
* ✅ Redux Toolkit (modern React)
* ✅ Production-style thinking

Perfect for:

* 💼 Portfolio
* 🎓 Final year project
* 🚀 Startup MVP base
* 🧠 Learning real-world architecture

---

## 🛣️ Future Improvements (aka roadmap 👀)

* 💳 Payment gateway integration (Stripe)
* 📱 Mobile-first UI polish
* ⭐ Product reviews & ratings
* 📊 Admin analytics dashboard
* 🧪 Unit & integration tests

---

## 🤝 Contributing

PRs are welcome ✨
Fork it, improve it, break it, fix it — let’s build.

---

## 🚀 Behind the Code

Built with 💙, bugs, and late-night debugging.

If you liked this project:

* ⭐ Star the repo
* 🍴 Fork it
* 👀 Steal ideas (I would too)

---

## 👨‍💻 Author

Chandra Sekhar Chinthala

---

🔥 Happy Coding!
