# 🛍️ FakeStore Product Dashboard

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A high-performance, aesthetically pleasing Product Dashboard built for the Frontend Developer Assignment. This application leverages the **Fake Store API** to deliver a premium e-commerce experience with advanced state management and high-fidelity UI.

---

## ✨ Key Features

### 🚀 Performance & UI
- **Glassmorphism Design**: A modern, translucent UI with smooth transitions and deep slate aesthetics.
- **Fully Responsive**: Optimized for every screen size, from mobile phones to ultra-wide monitors.
- **Micro-animations**: Subtle hover effects and interactive feedback for a premium feel.

### 🔍 Discovery & Filtering
- **Smart Search**: Real-time titling search powered by a **500ms debounce** logic to optimize API/render performance.
- **Category Navigation**: Instant filtering across multiple product categories.
- **Price Sorting**: Dynamic sorting (Low → High, High → Low) handled efficiently via Redux selectors.

### 💖 User Experience
- **Persistence Wishlist**: Add products to your favorites. State is synced with **LocalStorage** to ensure items stay saved after a refresh.
- **Robust Routing**: Seamless navigation between Product Listing, Details, and Favorites using `react-router-dom`.
- **Loading States**: Custom skeleton-style loaders for a polished initial data fetch.

---

## 🛠️ Technical Stack

- **Core**: React 19 (Hooks & Functional Components)
- **State**: Redux Toolkit (Thunks for Async, Selectors for Computed Data)
- **Styling**: Tailwind CSS v4 (Modern CSS-in-JS alternative configuration)
- **Icons**: Lucide React (Clean, consistent iconography)
- **API**: Axios with centralized service configuration
- **Testing**: Vitest & React Testing Library (TDD Approach)

---

## 🏗️ Architecture & Decisions

### Redux State Management
The application uses a modular Redux structure:
- **`productSlice`**: Manages the global product catalog, categories, and complex filtering logic. Selectors are used to compute filtered lists on the fly, ensuring high performance.
- **`favoriteSlice`**: Manages the user's wishlist with middleware-like persistence to `localStorage`.

### Modern Styling
Instead of generic utilities, the project uses a custom design system built on **Tailwind v4**, featuring:
- Custom color palettes (Primary Blues & Slate Greys).
- Unified Glassmorphism utility classes (`.glass`, `.glass-dark`).
- Advanced CSS Backdrop filters for UI depth.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0+)
- [npm](https://www.npmjs.com/) (v9.0.0+)

### Setup
1. **Clone & Enter**:
   ```bash
   git clone https://github.com/safiyaRafi/fakestore-api.git
   cd fakestore-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Development Mode**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🧪 Testing & Coverage

The project maintains a healthy test suite focusing on business logic and component reliability.

### Test Results
All implemented tests are passing:
- **Product Listing Logic**: Verified search, filter, and sort reducers.
- **Component Integrity**: Verified `ProductCard` rendering and favoriting UI.

### Running Tests
To run the tests and see the results:
```bash
npm run test
```

### Coverage Reports
I have integrated `vitest` coverage reporting. You can generate a full HTML report by running:
```bash
npm run test:coverage
```
After running, you can find the detailed report in the `coverage/` directory.

---

## 📝 Assignment Requirements Tracker

- [x] Functional Components & Hooks
- [x] Redux Toolkit for State Management
- [x] Async Data Fetching (Thunks)
- [x] Debounced Search Functionalitiy
- [x] Category Filtering & Price Sorting
- [x] Persistent Favorites System
- [x] Unit/Integration Tests
- [x] Responsive & Accessible Design

---

## 📬 Contact & Links
- **GitHub**: [github.com/safiyaRafi](https://github.com/safiyaRafi)
- **Repo**: [safiyaRafi/fakestore-api](https://github.com/safiyaRafi/fakestore-api)
