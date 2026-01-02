# FakeStore Product Dashboard

A modern, high-fidelity product dashboard built with React, Redux Toolkit, and Tailwind CSS. This application fetches real-time data from the Fake Store API and provides a seamless shopping experience with product filtering, searching, and a wishlist system.

## ✨ Features

- **Product Listing**: Responsive grid display of products with glassmorphism effects.
- **Advanced Search & Filter**: 
  - Real-time debounced search by title.
  - Category-based filtering.
  - Price sorting (Low to High, High to Low).
- **Product Details**: Comprehensive view of each product with detailed descriptions and ratings.
- **Wishlist System**: Add/remove products from your favorites, persisted via LocalStorage and managed by Redux.
- **Premium UI**: Dark mode aesthetic with smooth transitions and micro-animations.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop views.

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux Toolkit (Thunks & Selectors)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Testing**: Vitest & React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Fakestore-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

### Running Tests

To run the unit and integration tests:
```bash
npm run test
```

## 📂 Project Structure

- `src/components`: Reusable UI components (Layout, Product, Common).
- `src/pages`: Main application pages (Listing, Detail, Favorites).
- `src/store`: Redux Toolkit store and slices.
- `src/services`: API service layer.
- `src/test`: Testing utilities and setup.

## 🧪 Testing Coverage

- **Redux Slices**: Tested reducers for products and favorites.
- **Components**: Unit tests for core components like ProductCard.
- **Logic**: Verified filtering and sorting algorithms.

## 📝 Assignment Requirements Fulfilled

- [x] React with functional components and hooks.
- [x] Redux Toolkit for state management.
- [x] API integration with Fake Store API.
- [x] Search, Filter, and Sort functionality.
- [x] Favorites page with Redux persistence.
- [x] Responsive & Accessible UI.
- [x] Unit and Integration tests.
