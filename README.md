# Vividmart
VividMart is a modern product marketplace web application designed to help users browse and filter VR avatar products seamlessly. It highlights dynamic category filtering, responsive UI, and product detail pages, making it an efficient and elegant solution for virtual product browsing.
This project demonstrates proficiency in Next.js, Tailwind CSS, and clean, scalable coding practices.

# 🚀 Features
- Dynamic Filtering: Filter products by category in real-time.
- Product Details Page: View additional information for selected products.
- Responsive Design: Ensures a great experience across devices.
- Pixel-perfect Design: Matches the provided Figma designs to the pixel.
- Secure Deployment: Password-protected live site for testing.
# 📂 Project Structure
- /components
 -  Header.tsx           // Header with category filtering
  - ProductCard.tsx      // Product card component
- /pages
-   index.tsx            // Main marketplace page
 -  product/[id].tsx     // Dynamic product details page
- /styles
 -  globals.css          // Tailwind CSS global styles
- /middleware.ts         // Password protection middleware
#  🛠️ Tech Stack
- Framework: Next.js (v14+)
- Styling: Tailwind CSS
- Programming Language: TypeScript
- Deployment: Vercel
# 🔐 Password Protection
The site uses middleware to secure the live deployment. Users must enter a password (fedev2024test) to access the application.

To modify the password:

Update the environment variable in .env or Vercel settings:
env
NEXT_PUBLIC_SITE_PASSWORD = your_new_password
# 📝 Usage Instructions
Marketplace Page:

Browse the available products.
Use the category filter in the header to narrow down the product list.
Click on a product card to view more details.
Product Details Page:

View detailed information about the selected product, including the name, price, and description.

# 👋 Acknowledgments
- This project was inspired by the Avatown Marketplace design and developed as part of a frontend developer technical assessment. Special thanks to the hiring team for providing this challenge.
- This README.md ensures that anyone can easily understand, run, and deploy the project while highlighting your attention to detail and professionalism.







