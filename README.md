
---

# Par"king"

Par"king" is a web platform designed to connect parking space owners with drivers searching for cost-effective parking solutions. The platform empowers owners to earn extra income by listing unused parking spaces while providing drivers with a seamless and affordable parking experience.

![Par"king" Banner](./Frontend/public/parking.png)

## Key Features

- **Seamless User Experience:** Easy registration, profile management, and booking processes for both parking space owners and drivers.
- **Transparent Listings:** Detailed descriptions of parking spaces, including location, availability, and pricing.
- **Advanced Search and Filter:** Drivers can find the perfect parking spot based on criteria such as price, date, time, and proximity.
- **Trusted Platform:** User reviews and ratings enhance security and promote accountability.
- **Comprehensive Admin Control:** Admin panel to manage user accounts, maintain platform health, and ensure smooth operation.

## Benefits

- **Increased Revenue:** Parking owners can monetize unused spaces.
- **Cost Savings:** Drivers can find parking options that fit their budget.
- **Improved Efficiency:** Streamlines parking allocation and reduces urban congestion.

## All-in-One Functionality

### User Management
- **User Registration and Login:** Create accounts and access the platform.
- **Profile Management:** Maintain profile information, including payment methods and parking preferences.

### Parking Management
- **Parking Spot Listing:** Owners can list available spaces with details like location, availability schedules, and pricing.
- **Parking Spot Management:** Owners can edit listings, manage bookings, and track earnings.
- **Search and Filter:** Drivers can search for parking spots based on various criteria.
- **Booking and Reservation:** Drivers can search for parking, view availability, and book spaces directly through the platform.

### Enhanced Security and Trust
- **User Review and Rating System:** Users can leave reviews and ratings for parking spaces and owners, promoting accountability.

### Admin Control
- **Admin Control Panel:** Manage user accounts, parking listings, and overall system health.

## Technology Stack

- **Backend:** Node.js, Express, JavaScript
- **Frontend:** React, CSS, Bootstrap, SCSS
- **Database:** MongoDB

## Project Structure

- **Backend:** Contains the server-side logic, including API routes, database models, and utility functions.
  ```
  ├── config
  ├── controllers
  ├── models
  ├── utils
  ├── app.js
  └── package.json
  ```

- **Frontend:** Holds the client-side code, including the React components, styles, and assets.
  ```
  ├── public
  ├── src
  ├── .gitignore
  └── package.json
  ```

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/21501a05b6/PAR-KING-.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd PAR-KING-
   ```

3. Install backend dependencies:
   ```bash
   cd Backend
   npm install
   ```

4. Install frontend dependencies:
   ```bash
   cd ../Frontend
   npm install
   ```

5. Run the backend server:
   ```bash
   cd ../Backend
   node app.js
   ```

6. Run the frontend server:
   ```bash
   cd ../Frontend
   npm start
   ```

## Screenshots

![Parking Spot Listing](./Frontend/public/owner.jpg)
![Parking Seeker Profile](./Frontend/public/seeker.jpg)
![Parking Spot Booking](./Frontend/public/book.png)

---

