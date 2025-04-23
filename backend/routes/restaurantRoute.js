const express = require("express");
const router = express.Router();
const {
  getRestaurants,
  getRestaurantById,
  getNearbyRestaurants,
  getCategories,
  getCities,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantsByCity,
  getMyRestaurants, // Make sure this is imported
  getRestaurantCategories,
  addCategoryToRestaurant,
} = require("../controllers/restaurantController");
const {
  protect,
  admin,
  restaurateur,
  adminOrRestaurateur,
  restaurantOwner,
} = require("../middleware/authMiddleware");

// Public routes
router.get("/", getRestaurants);
router.get("/nearby", getNearbyRestaurants);
router.get("/categories", getCategories);
router.get("/cities", getCities);

// Add the new route for getting restaurants by city
router.get("/by-city/:city", getRestaurantsByCity);

// Route for restaurateur to see their restaurants - MUST come before /:id route
router.get("/my/restaurants", protect, restaurateur, getMyRestaurants);

// Get restaurant by ID - this should come after other specific routes
router.get("/:id", getRestaurantById);

// Admin or restaurateur routes
router.post("/", protect, adminOrRestaurateur, createRestaurant);

// Routes requiring restaurant ownership
router.put("/:id", protect, restaurantOwner, updateRestaurant);
router.delete("/:id", protect, restaurantOwner, deleteRestaurant);

router.get("/:id/categories", protect, getRestaurantCategories);
router.post("/:id/categories", protect, addCategoryToRestaurant);

module.exports = router;
