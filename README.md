
# README CONTENT:
1. LINK SITE
2. SYSTEM DESIGN
3. FLOW WITH IMAGE EXAMPLES   

   


# 1. LINK 

https://drone-food-client.fly.dev/

<img src="https://github.com/user-attachments/assets/4c8335bc-f169-4b92-b52c-f278d3a3b6b5" alt="img_1" width="700"/>


***  

<br>

# 2. SYSTEM DESIGN 


# Drone Food Delivery App


## System Overview
This application is a platform that leverages drone technology with food delivery for faster, more efficient deliveries.
The App consists of 3 main components:
1. Frontend - Client side
2. Backend
3. Frontend - Dashboard for admins/restaurant owners

![simplified_overview_app](https://github.com/user-attachments/assets/d8a3b81d-cc02-4ecc-94c6-2ce2821a8a67)




## 1. Frontend (Client)
A responsive web application that allows users to:
- Browse cities, restaurants and menus.
- Place food orders
- Track drone deliveries in real-time
- Select delivery locations on a map
- View estimated delivery times
- Access information pages (About, Contact, FAQ)

## 2. Backend API
A server application that:
- Central API, business logic and functionality 
- Manages restaurant data and menus
- Processes orders
- Calculates drone delivery routes and times
- Handles user authentication
- Integrates with payment processing (Stripe)

## 3. Admin/Owner Dashboard
A separate interface for:
- System management including restaurants, users , manues, foods.
- Data analytics, statistics.
- Drone management via Map and order tracking in real-time.
- Ai integration (in development)


## Technology Stack
- **Frontend**: React, Vite, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB 
- **Mapping**: Mapbox
- **Deployment**: Containerized with Docker, hosted on Fly.io
- **Payment Processing**: Stripe integration 

The application is designed with a modern, decoupled architecture where the frontend and backend are separate applications that communicate via API calls, allowing for independent scaling and maintenance.


***  

<br>

# Each component in detail:
## Frontend - Client 

![client_diagram](https://github.com/user-attachments/assets/0f41e54f-14a8-4751-a939-baf2d97a77d1)


### User Journey Flow
- **Start** → **Home Page** → **City Page** → **Restaurant Page** → **Cart Page** → **Order Page** → **Confirmation**

### Core Modules

1. **Location Services**
   - City browsing and selection
   - Interactive map display
   - Geographic location detection

2. **User Authentication**
   - Login and signup functionality only

3. **City Page Features**
   - Search city functionality
   - Restaurant categories
   - Map display
   - Delivery location selection

4. **Restaurant Browsing**
   - Category-based filtering
   - Search functionality
   - Rating and distance sorting

5. **Restaurant Information**
   - Restaurant details and information

6. **Menu Management**
   - Menu item display with images
   - Detailed item information
   - Customization options
   - Add to cart functionality

7. **Cart Management**
   - Add/remove items
   - Quantity adjustment
   - Item saving for later

8. **Price Calculation**
   - Subtotal calculation
   - Delivery fees (calculated by distance of the drone route)
   - Discount/coupon application

9. **Delivery Management**
   - Address input and validation
   - Delivery information
   - Special delivery instructions
   - Map display
   - Order summary

10. **Payment Processing**
    - Stripe payment integration
    - Multiple payment methods
    - Secure transaction handling

11. **Order Confirmation**
    - Success page display
    - Order tracking information
    - Order history recording


***  

<br>

## Backend

![BACKEND_DIAGRAM](https://github.com/user-attachments/assets/97f8b04c-a6c1-4080-a174-d85ee0088ac2)

## Key Components and Functionality

### 1. Server Entry Point
- **Express Setup**: Configuration of the Express.js server in server.cjs
- **Routes Configuration**: Registration of all API routes
- **Middleware Setup**: CORS, JSON parsing, and route-specific middleware

### 2. Database Connection
- **MongoDB**: Cloud-hosted database (MongoDB Atlas)
- **Mongoose**: ODM for MongoDB interaction
- **Schema Models**: Structured data models for the application

### 3. Authentication System
- **JWT Tokens**: Secure authentication using JSON Web Tokens
- **User Roles**: Different access levels (user, restaurateur, admin)
- **Auth Middleware**: Route protection based on authentication and authorization

### 4. Data Models
- **User**: User accounts, profiles, and authentication data
- **Restaurant**: Restaurant details, location, hours, and menu structure
- **Food**: Menu items with descriptions, prices, and images
- **Order**: Customer orders with items, delivery information, and status
- **Category**: Food and restaurant categories for filtering
- **City**: Available cities for service
- **Review**: Customer reviews and ratings for restaurants
- **Option**: Customization options for food items

### 5. Controllers
- **User Controller**: User registration, login, profile management
- **Restaurant Controller**: CRUD operations for restaurants
- **Food Controller**: Menu item management
- **Order Controller**: Order processing and status management
- **Review Controller**: Customer review management
- **Category Controller**: Food category management
- **City Controller**: Service area management
- **Option Controller**: Food customization options
- **Stripe Controller**: Payment processing integration
- **Cart Controller**: Shopping cart management

### 6. Routes
- **API Endpoints**: RESTful endpoints for all resources
- **Route Protection**: Authentication and authorization middleware
- **Parameter Validation**: Input validation for API requests

### 7. Utilities
- **DB Connection**: Database connection management in db.js
- **Helper Functions**: Reusable utility functions

### 8. Data Seed Scripts
- **Import Data**: Scripts to populate the database with initial data
- **Generate Orders**: Tools to create test orders
- **Seed Cities & Categories**: Populate reference data

### 9. Payment Integration
- **Stripe API**: Integration with Stripe payment processing
- **Payment Methods**: Support for multiple payment options
- **Webhooks**: Payment event handling

### 10. Order Processing
- **Order Creation**: Customer order submission logic
- **Order Status Management**: Tracking order progress
- **Drone Delivery**: Simulated drone delivery system with coordinates and timing

## Core Functionality

1. **Restaurant Discovery**
   - Browse restaurants by city
   - Filter by food categories
   - Search functionality
   - Restaurant details and menus

2. **Menu Management**
   - Food items organized by categories
   - Item customization options
   - Popular items highlighting

3. **Order System**
   - Cart management
   - Order placement
   - Delivery address specification
   - Status tracking
   - Simulated drone delivery

4. **User Management**
   - Authentication
   - User profiles
   - Order history

5. **Restaurant Owner Features**
   - Restaurant management
   - Menu editing
   - Order fulfillment

6. **Payment Processing**
   - Secure payment handling via Stripe
   - Multiple payment methods
   - Transaction history

7. **Review System**
   - Customer ratings and reviews
   - Restaurant average rating calculation

The backend system uses a MongoDB database with Mongoose ODM, Express.js for the server framework, and includes comprehensive data models for all aspects of the food delivery service. It features robust authentication, geospatial functionality for location-based services, and Stripe integration for payments.


***  

<br>

## Frontend - Dashboard Admins/Owners

![DASHBOARD_DIAGRAM](https://github.com/user-attachments/assets/8c1a31a2-8caf-4ec6-8496-7d50a0028c0a)


## Key Components and Functionality

### 1. Authentication System
- **Login/Signup**: User authentication for admin and restaurant owners
- **JWT Tokens**: Secure authentication using JSON Web Tokens
- **Role Management**: Different access levels (admin vs restaurateur)

### 2. Core Application Structure
- **App Container**: Main application wrapper with routing
- **Layout System**: Consistent UI structure with sidebar and content area
- **Role-Based Routing**: Route protection based on user roles

### 3. Admin-Specific Features
- **Dashboard**: Overview of system metrics and quick access to functions
- **Restaurant Management**: List, search, filter, and manage restaurants
- **Add Restaurant**: Form for creating new restaurant entries
- **User Management**: Manage user accounts and permissions

### 4. Restaurateur-Specific Features
- **Dashboard**: Restaurant-specific metrics and operations
- **Food Management**: Manage menu items for a specific restaurant
- **Add Food**: Interface for adding new food items
- **Restaurant Management Owner**: Restaurant owner's management panel

### 5. Shared Features
- **Delivery Management**: Real-time tracking and management of deliveries
- **Data Analytics**: Statistical analysis and reporting
- **AI Center**: AI-powered features and insights

### 6. Delivery Management System
- **MapBox Integration**: Interactive map for visualizing deliveries
- **Delivery Tracking**: Real-time location tracking with animations
- **Order Status Management**: Monitor and update delivery status
- **Filtering Options**: Filter deliveries by status, restaurant, etc.

### 7. Data Visualization
- **Charts**: Visual representation of sales data
- **Analytics Dashboard**: Performance metrics and trends
- **Reporting Tools**: Generate business insights

### 8. Styling and Utilities
- **CSS Modules**: Organized styling approach
- **Layout Styles**: Responsive design for all screen sizes
- **Helper Functions**: Reusable utility functions

## Core Functionality

1. **Role-Based Access Control**
   - Admin users have full system access
   - Restaurant owners have limited access to their own data
   - Route protection prevents unauthorized access

2. **Restaurant Operations**
   - Add and manage restaurant information
   - Upload restaurant images
   - Set hours, delivery fees, and locations

3. **Food Menu Management**
   - Add, edit, and delete menu items
   - Add food customization options
   - Set pricing and availability

4. **Delivery Tracking**
   - Real-time map visualization of deliveries
   - Filter deliveries by status and restaurant
   - View detailed delivery information
   - Simulated drone delivery tracking

5. **Data Analytics and Reporting**
   - Sales performance tracking over time
   - Order volume analysis
   - Restaurant performance metrics
   - Delivery time analysis

6. **User Interface**
   - Responsive layout for desktop and mobile
   - Interactive components
   - Role-specific navigation and views

7. **Map Visualization**
   - Custom styled maps
   - Interactive markers for restaurants and deliveries
   - Delivery route visualization
   - Current and past delivery filtering

The admin dashboard serves as a comprehensive management system for the Drone delivery food application, providing specialized interfaces for both administrators who manage the entire platform and restaurant owners who manage their specific establishments.

***  

<br>

# FLOW WITH IMAGE EXAMPLES
# 1. Client
# 2. Admin/restaurant onwer

***  

<br>


## 1 Client

### 1. home page
![0](https://github.com/user-attachments/assets/5ed318d7-64d3-425b-9e27-c64e9bb6ddf5)

### 2. loggin
![3](https://github.com/user-attachments/assets/26e34f11-2a06-4450-9fab-d113a3a924e9)

### 3. city selection
![2](https://github.com/user-attachments/assets/0558a2a2-a8ae-44bc-a08a-dc7e4602aa7b)

### 4. user selects a restaurant and delivery location using map of that city (mapbox)
![4](https://github.com/user-attachments/assets/e90a21e7-6cfd-4233-ad76-2479e3333cfc)
-
![5](https://github.com/user-attachments/assets/279060da-cb15-4e7d-86a3-d8de45540791)

### 5. items selection
![Screenshot 2025-04-22 091103](https://github.com/user-attachments/assets/dce78fbe-3042-48e3-9b45-0aa62de60f2f)
-
![Screenshot 2025-04-22 091444](https://github.com/user-attachments/assets/947ca6df-4ee7-42a0-9f3b-315e764b326a)
-
![Screenshot 2025-04-22 091502](https://github.com/user-attachments/assets/f21f09a5-bae7-48e4-b940-1ba91a947fae)

selected items can be seen in "Your order" box
![Screenshot 2025-04-22 091535](https://github.com/user-attachments/assets/d244a547-47df-4642-ba78-f218c135f48a)


### 6. user preceed to cart
![Screenshot 2025-04-22 091859](https://github.com/user-attachments/assets/042e32d3-dc12-422e-8bf2-58d80e9f33e1)


### 7. order completion - user information, delivery information, option to change location using map.
![Screenshot 2025-04-22 092524](https://github.com/user-attachments/assets/45839d76-e594-407e-a044-5542989abfc6)

### 8. order summary
![Screenshot 2025-04-22 092607](https://github.com/user-attachments/assets/889fb8eb-f11b-428f-aea6-1567cbf89dfd)

### 9. stripe payment
![Screenshot 2025-04-22 092635](https://github.com/user-attachments/assets/4532fd5a-fc93-44a2-a720-0c3c83c9cef1)

### 10. confirmation
![Screenshot 2025-04-22 092659](https://github.com/user-attachments/assets/16400321-ec13-4940-a2dd-5d7244830946)



***  

<br>


## + Dashboard admin/owner
### 1.loggin (as admin or restaurant owner, both have their own dashboard)
![login](https://github.com/user-attachments/assets/69935b17-45d6-486a-ba88-cf3f45cf2aaa)


### 2.home page
![dash](https://github.com/user-attachments/assets/10000986-26f6-44db-b07a-9f71839af6fb)

### 3. Delivery - management - map, city selection, current/past deliveries, restaurant selection. real time deliveries shown on map and their details
![delivery-map](https://github.com/user-attachments/assets/a2fea66d-5722-4550-bd42-bd314ac551ef)
-
![map-details](https://github.com/user-attachments/assets/ae5c2594-b7fd-41bb-adaf-b3395f77aff1)

### 3.1. Restaurant Management (admin) - restaurant management, search filter, delete. 
![rest-mng](https://github.com/user-attachments/assets/a2bd5c0c-e6eb-47e2-90b0-dd7b2afd90a4)

### 3.2. Restaurant Management (restaurant owner) - restaurant selection, update information, delete items. 
![Screenshot 2025-04-20 093119](https://github.com/user-attachments/assets/2f001a27-4082-4dcd-819e-f92eba019850)



### 4.1 Add restaurant (admin)
![add-rest](https://github.com/user-attachments/assets/7f247fe4-492e-4f2c-b1f2-fbda6aee546f)
-
![add-rest2](https://github.com/user-attachments/assets/31868cca-b766-4aed-9691-1bb7b420e2b6)

### 4.1 Add food (owner)
![add-food](https://github.com/user-attachments/assets/ea8883b1-effa-47fe-a0e5-fe611202d7a3)

### 5 User management (admin)
![user-mng](https://github.com/user-attachments/assets/290a0c0b-724e-4fc6-8b37-919f4fb5ccff)

### 6.1 Data analytics (admin)
![stats](https://github.com/user-attachments/assets/6d71ae16-4f56-417b-b791-f674792e0527)

### 6.2 Data analytics (owner)
![Screenshot 2025-04-20 093102](https://github.com/user-attachments/assets/c2f0f700-4b5f-4bc2-b8b4-d47065df8618)

### 7 Ai center - currently under development, will be updated soon.



***  

<br>



# Additional Information on Fixes, Bugs, and Future Improvements
- Fixes: Several features still need attention, including reviews, ratings, AI functionality, and statistics.

- Razorpay: The current payment system is Stripe, as we initially selected the cities in the USA. However, if restaurant owners from other countries (e.g., India) want to join the platform, integrating Razorpay — a popular payment gateway in India — would be a better choice.

- Microservices: As the application scales, transitioning to a microservices architecture would be beneficial for performance and maintainability.

- Algorithm & Data Assumptions: Some of the current logic and assumptions in the code are not efficient or realistic and should be improved. For example:

Drone availability:
Restaurants currently have "unlimited" drones, and any drone can be used for any order — which is not realistic.

Drone path algorithm:
Currently, a separate drone is assigned to each order. Instead, we should implement logic to:

Group nearby orders within a specific time and location window.

Calculate the shortest path that starts at the restaurant, delivers to all grouped destinations, and returns.

- Cron jobs: Since the app simulates drone delivery and doesn't rely on real-time hardware, tools like WebSockets are not required. However, cron jobs are essential for scheduling and managing delivery-related tasks.

