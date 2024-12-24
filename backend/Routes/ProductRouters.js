const router = require("express").Router();
const ensureauth = require("../Middleware/auth");
const usermodel = require("../Models/usersmodel");

// router.get("/products", ensureauth, (req, res) => {
//   res.status(200).json([
//     {
//       product: "dummy product 1",
//       details: "small",
//       price: 9.99,
//       brand: "Dummy Brand",
//       category: "Electronics",
//     },
//     {
//       product: "dummy product 2",
//       details: "medium",
//       price: 19.99,
//       brand: "Another Brand",
//       category: "Fashion",
//     },
//     {
//       product: "dummy product 3",
//       details: "large",
//       price: 29.99,
//       brand: "Big Brand",
//       category: "Home Goods",
//     },
//   ]);
// });

// Sample protected data
const protectedProducts = [
  {
    brand: "TideOS",
    details: "Cloud-native operating system for modern enterprises",
    type: "Software",
    metrics: {
      users: 1200,
      rating: 4.8,
    },
  },
  {
    brand: "WaveGuard",
    details:
      "Enterprise-grade security solution with AI-powered threat detection",
    type: "Security",
    metrics: {
      activeInstalls: 500,
      threatsPrevented: "10M+",
    },
  },
  {
    brand: "OceanDB",
    details: "Scalable database solution with real-time synchronization",
    type: "Database",
    metrics: {
      dataProcessed: "5PB",
      uptime: "99.99%",
    },
  },
  {
    brand: "TideAnalytics",
    details:
      "Advanced analytics platform with predictive modeling capabilities",
    type: "Analytics",
    metrics: {
      reportsGenerated: "1M+",
      accuracy: "96%",
    },
  },
];

// Protected products endpoint
router.get("/products", ensureauth, (req, res) => {
  res.json(protectedProducts);
});

// router.get("/users", async (req, res) => {
//   try {
//     const users = await usermodel.find();
//     res.json(users);
//     // return users;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.send(error.message);
//     // throw error;
//   }
// });

module.exports = router;
