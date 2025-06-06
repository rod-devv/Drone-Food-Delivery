import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import restaurantService from "../../services/restaurantService";
import deliveryService from "../../services/deliveryService";
import "./DataAnalyticsOwner.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const DataAnalyticsOwner = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [restaurantStats, setRestaurantStats] = useState({});
  const [salesData, setSalesData] = useState([]);
  const [deliveryTimeData, setDeliveryTimeData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user's restaurants on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await restaurantService.getUserRestaurants();
        console.log("Fetched restaurants:", data);

        if (data && data.length > 0) {
          setRestaurants(data);
          setSelectedRestaurant(data[0]._id);
        } else {
          setError("No restaurants found for this user");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setError("Failed to load restaurants");
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Fetch statistics whenever selected restaurant or month changes
  useEffect(() => {
    if (!selectedRestaurant) return;

    const fetchRestaurantStats = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("Fetching data for restaurant:", selectedRestaurant);

        // Fetch restaurant details
        const restaurantData = await restaurantService.getRestaurantById(
          selectedRestaurant
        );

        console.log("Restaurant data:", restaurantData);

        if (!restaurantData) {
          throw new Error("No restaurant data returned");
        }

        // Process restaurant stats
        const stats = {
          rating: restaurantData.rating || 0,
          priceRange: restaurantData.priceRange || 1,
          deliveryTime: restaurantData.deliveryTime || 30,
        };
        setRestaurantStats(stats);

        // Get start and end dates for selected month
        const startDate = new Date(selectedMonth);
        startDate.setDate(1);

        const endDate = new Date(selectedMonth);
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(0);

        // Format dates for API
        const formattedStartDate = startDate.toISOString().split("T")[0];
        const formattedEndDate = endDate.toISOString().split("T")[0];

        console.log(
          `Fetching orders from ${formattedStartDate} to ${formattedEndDate}`
        );
        console.log("--------------1111-----------------");
        // Fetch orders for the restaurant within the date range
        const ordersData = await deliveryService.getDeliveries({
          restaurantId: selectedRestaurant,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          skipCustomerPopulate: true, // Add this parameter
        });
        console.log("--------------2222-----------------");
        console.log("Orders data:", ordersData);

        // Process daily sales data
        const salesByDay = {};
        const deliveryTimes = [];

        // Initialize all days in month with 0 sales
        for (let day = 1; day <= endDate.getDate(); day++) {
          salesByDay[day] = 0;
        }

        // Check if ordersData has the expected structure
        if (ordersData && ordersData.data && Array.isArray(ordersData.data)) {
          // Aggregate sales data by day and collect delivery times
          ordersData.data.forEach((order) => {
            if (!order) return;

            const orderDate = new Date(order.createdAt);
            const day = orderDate.getDate();

            // Add to daily sales
            salesByDay[day] = (salesByDay[day] || 0) + (order.total || 0);

            // Collect delivery time
            if (order.estimatedDeliveryTime) {
              deliveryTimes.push({
                date: orderDate.toLocaleDateString(),
                time: order.estimatedDeliveryTime,
              });
            }
          });
        } else {
          console.warn("Orders data has unexpected structure:", ordersData);
        }

        // Convert sales by day to array format for charts
        const salesDataArray = Object.entries(salesByDay).map(
          ([day, amount]) => ({
            day: parseInt(day),
            amount: parseFloat(amount.toFixed(2)),
          })
        );

        console.log("Processed sales data:", salesDataArray);
        console.log("Processed delivery time data:", deliveryTimes);

        setSalesData(salesDataArray);
        setDeliveryTimeData(deliveryTimes);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError(`Failed to load data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantStats();
  }, [selectedRestaurant, selectedMonth]);

  // Calculate average delivery time
  const averageDeliveryTime = deliveryTimeData.length
    ? (
        deliveryTimeData.reduce((sum, item) => sum + item.time, 0) /
        deliveryTimeData.length
      ).toFixed(1)
    : 0;

  // Prepare restaurant stats for chart display
  const restaurantStatsForChart = [
    { name: "Rating", value: restaurantStats.rating || 0 },
    { name: "Price Range", value: restaurantStats.priceRange || 0 },
    { name: "Est. Delivery (min)", value: restaurantStats.deliveryTime || 0 },
  ];

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 3 }}>
        Restaurant Analytics Dashboard
      </Typography>

      {/* Restaurant Selection */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="restaurant-select-label">
                Select Restaurant
              </InputLabel>
              <Select
                labelId="restaurant-select-label"
                value={selectedRestaurant}
                onChange={(e) => setSelectedRestaurant(e.target.value)}
                label="Select Restaurant"
              >
                {restaurants.map((restaurant) => (
                  <MenuItem key={restaurant._id} value={restaurant._id}>
                    {restaurant.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["year", "month"]}
                label="Select Month"
                value={selectedMonth}
                onChange={(newDate) => setSelectedMonth(newDate)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Paper>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Typography>Loading analytics data...</Typography>
        </Box>
      ) : error ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Typography color="error">{error}</Typography>
        </Box>
      ) : (
        <>
          {/* First row with Restaurant Stats and Average Delivery Time */}
          <Grid container spacing={3}>
            {/* Restaurant Stats */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: 400 }} className="stat-card">
                <Typography variant="h6" gutterBottom>
                  Restaurant Performance Metrics
                </Typography>
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart
                    data={restaurantStatsForChart}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Average Delivery Time */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: 400 }} className="stat-card">
                <Typography variant="h6" gutterBottom>
                  Average Delivery Time: {averageDeliveryTime} minutes
                </Typography>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: "Avg. Delivery Time",
                          value: parseFloat(averageDeliveryTime) || 1, // Ensure there's a minimum value
                        },
                        {
                          name: "Remaining",
                          value:
                            Math.max(60 - parseFloat(averageDeliveryTime), 0) ||
                            59, // Ensure there's a minimum value
                        },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      className="custom-pie"
                      label={({ name, percent }) =>
                        name === "Avg. Delivery Time"
                          ? `${(percent * 100).toFixed(0)}%`
                          : ""
                      }
                    >
                      {[0, 1].map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>

          {/* Daily Sales Totals - Full Width */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Paper
              sx={{ p: 2, height: 400, width: "100%" }}
              className="stat-card"
            >
              <Typography variant="h6" gutterBottom>
                Daily Sales Totals -{" "}
                {selectedMonth.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
              <ResponsiveContainer
                width="100%"
                height="90%"
                className="chart-container"
              >
                <AreaChart
                  data={salesData.sort((a, b) => a.day - b.day)}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, "Sales"]} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    name="Daily Sales"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Box>

          {/* Delivery Time Trends - Full Width */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Paper
              sx={{ p: 2, height: 400, width: "100%" }}
              className="stat-card"
            >
              <Typography variant="h6" gutterBottom>
                Delivery Time Trends
              </Typography>
              <ResponsiveContainer
                width="100%"
                height="90%"
                className="chart-container"
              >
                {deliveryTimeData.length > 0 ? (
                  <LineChart
                    data={deliveryTimeData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      angle={-45}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [
                        `${value} minutes`,
                        "Delivery Time",
                      ]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="time"
                      stroke="#ff7300"
                      activeDot={{ r: 8 }}
                      name="Delivery Time"
                    />
                  </LineChart>
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography variant="body1">
                      No delivery time data available
                    </Typography>
                  </Box>
                )}
              </ResponsiveContainer>
            </Paper>
          </Box>
        </>
      )}
    </Container>
  );
};

export default DataAnalyticsOwner;
