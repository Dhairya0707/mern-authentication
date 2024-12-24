const router = require("express").Router();
const ensureauth = require("../Middleware/auth");
const usermodel = require("../Models/usersmodel");

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

router.get("/products", ensureauth, (req, res) => {
  res.json(protectedProducts);
});

module.exports = router;
