import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        await axios.get("/api/admin/check-role", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      }
    };

    if (user) {
      checkAdmin();
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start md:mt-20 mt-16">
      <header className="lg:w-1/5 sm:2/5 w-full">
        <AdminNav />
      </header>
      <main className="p-8 bg-white w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;
