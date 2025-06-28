# Fisher Roads E-Commerce Storefront UI

A responsive, modern frontend-only e-commerce application built with **React**, **Redux Toolkit**, and **Material UI**. This project simulates a storefront for a fictional outdoor brand called "Fisher-BMM"

## 🚀 Features

* Product listing with filtering, sorting, and search
* Product detail page with add-to-cart functionality
* Cart management with quantity controls
* Persistent cart using `localStorage`
* Built with Redux Toolkit for scalable state management
* Clean, minimal UI inspired by outdoor brands

## 🧰 Tech Stack

* React
* Redux Toolkit + Redux Persist
* React Router DOM
* Material UI
* Vite (for development/build tooling)

## 📁 Folder Structure

```
src/
├── app/                  # Redux store
├── components/           # Reusable UI components
├── features/             # Redux slices (cart, products, filters)
├── pages/                # Page-level components
├── data/                 # Mock product data (products.json)
├── styles/               # Global styles or Tailwind config
└── App.jsx               # Routes and layout
```

## 🖼 Screens

### 🏠 Home Page

* Hero section with branding
* Featured categories or new arrivals

### 🛍 Product Listing

* Grid layout of all products
* Filters for category, price, etc.
* Search bar and sort dropdown

### 📦 Product Details

* Product image, title, price, description
* Add to Cart button

### 🛒 Cart Page

* List of items in the cart
* Quantity control, remove item
* Total price and proceed to checkout

## 🔧 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/fisher-roads-storefront.git
cd fisher-roads-storefront
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run development server:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

## 🧪 Testing

This project does not include formal testing yet. You can add unit/integration tests with tools like Vitest, React Testing Library, or Cypress.

## 📦 Future Enhancements

* Product ratings & reviews
* Wishlist functionality
* Theme toggle (dark/light mode)
* Pagination or infinite scroll

## 📝 License

MIT License

---

Made with ❤️ for frontend lovers and outdoor brands.
