# Smacky's BBQ 🍖

A modern restaurant web application for Smacky's BBQ featuring online ordering, menu browsing, rewards program, and location finder.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool with HMR
- **React Router v6** - Client-side routing
- **Bootstrap 5** - UI framework
- **React Bootstrap** - Bootstrap components for React
- **SCSS** - Styling with custom Bootstrap theme
- **Context API** - Global state management

## Features

### 🛒 Shopping Cart System

- Full client-side cart functionality
- Add/remove items with quantity controls
- Automatic special pricing application
- Real-time total calculations
- Persistent cart during session

### 🍔 Menu Browsing

- Searchable menu with category filtering
- Special deals highlighting
- Lazy-loaded images with blur effect
- Detailed item views with customization options

### 📍 Location & Delivery

- Pickup or delivery options
- Location finder with Google Maps integration
- Address management

### 🎁 Rewards Program

- Browse available rewards
- Track reward eligibility

### 💳 Checkout Process

- Review cart items
- Address and payment information
- Order confirmation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/     # Feature-specific components
│   ├── about/
│   ├── checkout/
│   ├── details/
│   ├── footer/
│   ├── home/
│   ├── location/
│   ├── login/
│   ├── menu/
│   ├── modal/
│   ├── navbar/
│   ├── offcanvas/
│   └── rewards/
├── elements/       # Reusable UI components
├── pages/          # Route-level components
├── store/          # Context API & state management
│   ├── menu.jsx           # Menu data
│   ├── user-context.jsx   # Context definition
│   └── UserProvider.jsx   # State provider
└── styles/         # Global SCSS styles
```

## State Management

The app uses React Context API for global state management:

- **Cart Management**: Add, remove, update quantities, calculate totals
- **User Preferences**: Delivery type (pickup/delivery), address
- **Order Flow**: Track order status and cart state

### Available Context Methods

```javascript
const userCtx = useContext(UserContext);

// Cart operations
userCtx.addToCart({ id, quantity, customizations });
userCtx.removeFromCart(id);
userCtx.updateQuantity(id, quantity);
userCtx.clearCart();

// Helper methods
userCtx.getCartTotal(); // Returns total price
userCtx.getCartItemCount(); // Returns total items

// Settings
userCtx.setDeliveryType("pickup" | "delivery");
userCtx.updateAddress(address);
```

## Key Dependencies

- **@googlemaps/react-wrapper** - Google Maps integration
- **axios** - HTTP client
- **react-lazy-load-image-component** - Image lazy loading
- **react-helmet-async** - Dynamic document head management
- **bootstrap-icons** - Icon library

## Customization

### Adding Menu Items

Edit `src/store/menu.jsx`:

```javascript
{
  id: 14,
  title: "New Item",
  desc: "Description...",
  type: "Category", // Hamburgers, Meats, Wings, Sandwiches, Sides
  special: false,
  price: 12.99,
  specialPrice: 9.99, // Optional, if special: true
  alt: "Alt text for image"
}
```

Add corresponding image to `src/assets/` named: `new_item.png`

### Styling

- Global styles: `src/styles/`
- Bootstrap variables: `src/styles/custom.scss`
- Component styles: Co-located `.scss` files in component folders

## License

This project is for educational/portfolio purposes.
