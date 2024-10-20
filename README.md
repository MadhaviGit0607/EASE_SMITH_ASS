Features:

Product Listing Page: Displays a list of products with images, names, and prices.
View Product: Redirects users to a custom "Thank You" page when clicked (instead of a product details page).
Add to Cart Modal: Opens a modal displaying product details and quantity controls (+ / -).
State Management: Uses React state for managing cart count and modal visibility.
Routing: Implemented using React Router for navigation between pages.
Styled UI: Custom styles applied to match the Figma design provided.


Install dependencies:
npm install

Start the development server:
npm start

Open http://localhost:3000 in your browser to view the app.

How It Works:

Product Listing Page:

The home page lists all products fetched from the mock data.
Each product has View Product and Add to Cart buttons.
Add to Cart Modal:

Clicking Add to Cart opens a modal with product details and quantity control buttons (+ / -).
Users can adjust product quantity within the modal.

Thank You Page:

Clicking View Product redirects users to the Thank You page.
The Thank You page includes a "Continue Shopping" button to navigate back to the product list.
Routing:

"/": Product listing page.
"/thank-you": Thank You page after viewing a product.

Styling 
Custom CSS is applied to create a simple and consistent design.
The Thank You page has a light green background with dark green text to give it a pleasant look.
Hover effects are added for buttons to enhance the user experience.


Technologies Used 

React: Component-based UI library.
React Router: For page navigation.
CSS: For styling the components and pages.
JavaScript: For state management and interactivity.

Future Improvements
Add product filtering or search functionality.
Implement a shopping cart page with full cart management.
Integrate a backend or API to fetch products dynamically.
Add more comprehensive validation and error handling.

Screenshots
Product Listing Page

![ProductListingPage](https://github.com/user-attachments/assets/2226b7ee-8347-4a04-bb91-d4ea0bcdac1b)

Add to Cart Modal
![Screenshot 2024-10-20 202910](https://github.com/user-attachments/assets/93535c04-af12-40d6-bf22-0fe9816db059)

Contributors
Madhavi Surepalli


 
