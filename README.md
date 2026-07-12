# React H5 Shopping Cart

A mobile-friendly shopping cart demo built with React, TypeScript, and Zustand. Static frontend — no backend required.

**Live Demo:** [Project link](https://shopping-cart-order.netlify.app/ )
**Repository:** [GitHub link](https://github.com/AzizbekJumanazarov/shopping-cart)

## Tech Stack

- **React 19** + **TypeScript** — component architecture with full type safety
- **Vite** — build tool and dev server
- **Zustand** (with `persist` middleware) — cart state management, persisted to localStorage
- **React Router** — client-side routing (Product List, Cart, Checkout)
- **Tailwind CSS v4** — mobile-first styling
- **React Hook Form + Zod** — checkout form with schema-based validation
- **Vitest + Testing Library** — unit tests for cart store logic
- **Lucide React** — icons

## Features

- Browse product list with images, prices, and descriptions
- Add products to cart, adjust quantity, or remove items
- Real-time total item count and total amount
- Persistent cart (survives page refresh via localStorage)
- Simple checkout flow with form validation
- Empty cart state handling
- Mobile-first layout, centered in a phone-width frame on larger screens (this is an H5/mobile-web demo, so desktop shows the intended mobile viewport rather than a separate desktop layout)

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/AzizbekJumanazarov/shopping-cart.git
cd shopping-cart

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```


## How AI Was Used

I used Claude (Anthropic) as my main coding partner for this project — from planning the architecture to writing most of the code.

I started by asking it to break the task into a step-by-step plan (project structure, state management approach, page flow) so I understood the reasoning before writing anything. I typed the code out myself rather than copy-pasting, since that's how I stayed on top of what each part actually did — it's also how I noticed a few real bugs along the way: the bottom nav collapsing into two rows after a layout refactor, a wrong prop type (`string` instead of `number`) in the `Header` component, and a Vite/Vitest config conflict.

I also asked it to explain *why* certain decisions were made — like using functional `set()` updates in Zustand instead of `get()` + `set()`, or why the checkout page redirects if the cart is empty — so I'd be able to explain the codebase, not just submit it.

Unit tests for the cart store were also written with AI help and verified locally.

Overall, I leaned on AI heavily for writing code, but stayed responsible for testing, catching issues, and understanding the reasoning behind the implementation — which is how I'd expect to work with these tools on a real team.