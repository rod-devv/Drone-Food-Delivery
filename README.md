
# README CONTENT:
1. LINK SITE
2. SYSTEM DESIGN
3. FLOW WITH IMAGE EXAMPLES   

   


# 1. LINK 

https://drone-food-client.fly.dev/

![h](https://github.com/user-attachments/assets/cad08fa6-4023-439c-a602-986e339311ad)


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


![overall](https://github.com/user-attachments/assets/dacbfef7-4226-45fc-822a-1360c95a8bca)




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

![clint](https://github.com/user-attachments/assets/2536793a-7cf2-41ed-9976-2e22abdffecf)


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

![bck](https://github.com/user-attachments/assets/6b40e01e-4f84-4216-98dc-0fe1a64a5ebe)


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

![admin](https://github.com/user-attachments/assets/6945bc77-4491-4c2b-9338-738def327c85)



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

![Screenshot 2025-04-22 084319](https://github.com/user-attachments/assets/38fb7317-97e6-4810-8630-7c861c4b8317)

### 2. loggin
![Screenshot 2025-04-23 100708](https://github.com/user-attachments/assets/a748d1c0-ade9-4b38-ba98-2ee2fe53d6d5)

### 3. city selection
![Screenshot 2025-04-23 095313](https://github.com/user-attachments/assets/debc3537-8ce6-4c59-8670-c546c2fa1979)

### 4. user selects a restaurant and delivery location using map of that city (mapbox)
![Screenshot 2025-04-23 095438](https://github.com/user-attachments/assets/9b5221a8-ee82-4193-92c9-b5268175eeea)

### 5. items selection
![Screenshot 2025-04-23 095903](https://github.com/user-attachments/assets/2a674011-4eb0-4d6a-9c15-3d24678a87d2)
-
![Screenshot 2025-04-23 095920](https://github.com/user-attachments/assets/12e5c1e8-3d8f-47cf-b882-34a21ce1dd3c)
- 
selected items can be seen in "Your order" box
![Screenshot 2025-04-23 100004](https://github.com/user-attachments/assets/47f58e6d-723d-48e6-8623-7c7eac8da849)

### 6. user preceed to cart
![Screenshot 2025-04-23 100011](https://github.com/user-attachments/assets/01a372ea-c50f-4555-ad19-b84aa11315c0)

### 7. order completion - user information, delivery information, option to change location using map.
![Screenshot 2025-04-23 100053](https://github.com/user-attachments/assets/5a3f09bc-36e6-484e-b3ca-91671b5b37cc)

### 8. order summary
![Screenshot 2025-04-23 100111](https://github.com/user-attachments/assets/383241cc-e40b-4283-b379-6422aa24342a)

### 9. stripe payment
![Screenshot 2025-04-23 100148](https://github.com/user-attachments/assets/4b8af0b3-d6d0-43f6-b0d4-2ec7d46b9b87)

### 10. confirmation
![Screenshot 2025-04-23 100212](https://github.com/user-attachments/assets/463cace0-ab14-48b3-ad00-ae3761bc9594)



***  

<br>


## + Dashboard admin/owner
### 1.loggin (as admin or restaurant owner, both have their own dashboard)
![Screenshot 2025-04-19 183704](https://github.com/user-attachments/assets/ea11111a-0485-4279-b9fa-67c5497167f3)


### 2.home page

![Screenshot 2025-04-19 171008](https://github.com/user-attachments/assets/4e7f6269-bdbf-4398-9432-c31130d38cf6)


### 3. Delivery - management - map, city selection, current/past deliveries, restaurant selection. real time deliveries shown on map and their details
![Screenshot 2025-04-19 172354](https://github.com/user-attachments/assets/00a2386e-7a05-4458-b7d4-cbbdc8707305)
-
![Screenshot 2025-04-19 172417](https://github.com/user-attachments/assets/bb406cd9-0266-4d43-a281-3c51db41231b)


### 3.1. Restaurant Management (admin) - restaurant management, search filter, delete. 
![Screenshot 2025-04-19 172431](https://github.com/user-attachments/assets/21a1aab8-9480-4caf-96f5-c4c80347f183)


### 3.2. Restaurant Management (restaurant owner) - restaurant selection, update information, delete items. 
![Screenshot 2025-04-19 175548](https://github.com/user-attachments/assets/5f2c3c56-38fa-455b-a145-806e07a8cb1f)


### 4.1 Add restaurant (admin)
![Screenshot 2025-04-19 172452](https://github.com/user-attachments/assets/185ba178-94f8-402d-b2fc-5f6f8e1f38dd)
-
![Screenshot 2025-04-19 172501](https://github.com/user-attachments/assets/4fb089b3-ed82-4840-ade1-f41d97472fed)


### 4.1 Add food (owner)
![Screenshot 2025-04-20 093129](https://github.com/user-attachments/assets/18db27d4-6825-4d8e-b3cd-1e802c8d852c)

### 5 User management (admin)
![Screenshot 2025-04-20 092544](https://github.com/user-attachments/assets/795a0e6e-afdd-484d-a48c-652d2249153b)

### 6.1 Data analytics (admin)
![Screenshot 2025-04-20 092556](https://github.com/user-attachments/assets/ec683fbf-0b1c-4d85-b7c2-e1d9bb57f434)


### 6.2 Data analytics (owner)
![Screenshot 2025-04-20 093102](https://github.com/user-attachments/assets/ea5a58e2-5732-49e6-b3fb-f5c638bae07b)


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

