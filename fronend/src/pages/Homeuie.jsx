import React, { useEffect, useState } from "react";
import { Activity, Lock, Shield, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";


const HomepageUi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState({
    tokenExpiry: "1 day",
    authType: "JWT Bearer",
    endpoint: "/api/protected",
  });
  const navigate = useNavigate();
  const loggedUser = localStorage.getItem("LoggedUser");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://mern-authentication-sable.vercel.app/products", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedUser");
    navigate("/login");
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900">
      <section className="lg:grid">
     
        <nav className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-white">TideTech 🌊</h1>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-200">Welcome, {loggedUser}!</span>
                <button
                  onClick={handleLogout}
                  className="inline-block rounded-md border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>

        
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Authentication Demo Dashboard
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This is a protected route accessible only to authenticated users.
              Your session is secured with JWT authentication and protected API
              endpoints.{" "}
              <strong>
                All passwords and sensitive information are stored in a
                bcrypt-encrypted form for enhanced security.
              </strong>
            </p>
          </div>
        </div>

   
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="h-8 w-8 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Authentication Status
                </h3>
              </div>
              <p className="text-gray-400">
                Active JWT Token with {authStatus.tokenExpiry} validity
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Protected Route
                </h3>
              </div>
              <p className="text-gray-400">
                Accessing {authStatus.endpoint} with {authStatus.authType}
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-8 w-8 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Secure Data
                </h3>
              </div>
              <p className="text-gray-400">
                Fetching protected resources with authenticated requests
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  Data Security
                </h3>
              </div>
              <p className="text-gray-400">
                All passwords and sensitive information are stored in a
                bcrypt-encrypted form for enhanced security.
              </p>
            </div>
          </div>
        </div>

      
        <div className="max-w-7xl mx-auto px-8 pb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-lg">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Activity className="h-6 w-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">
                  Protected Content
                </h2>
              </div>

              {loading ? (
                <p className="text-gray-400">Loading secure content...</p>
              ) : products.length > 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-4">
                    This content is protected and retrieved by authorization
                    from the server side using your JWT token.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.brand}
                        className="bg-gray-700 rounded-lg p-4"
                      >
                        <h3 className="font-medium text-white mb-2">
                          {product.brand}
                        </h3>
                        <p className="text-gray-400">{product.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-2">
                    No protected content available at the moment.
                  </p>
                  <p className="text-gray-500 text-sm">
                    This content is only accessible to authenticated users with
                    valid JWT tokens.
                  </p>
                  <p className="text-gray-400 mt-4">
                    Please note that this is protected content served from the
                    server side.
                  </p>
                  <p className="text-gray-400 mt-2">
                    Disclaimer: Your JWT token is valid for{" "}
                    {authStatus.tokenExpiry}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageUi;
