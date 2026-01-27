

import React from "react";
import Link from "next/link";

 export default function HomePage() {
  
    return (
        <div style={{ minHeight: "100vh", padding: "20px", background: "#66ccff",
          display: "flex", alignItems: "center", justifyContent: "center", 
        }}>
           <section style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Welcome to the Dashboard</h1>
                <p style={{ fontSize: "1.2rem", color: "#555" }}>
                    This is the main landing page of your dashboard application. Use the sidebar to navigate through different sections such as Courses, Settings, and more.
                </p>
            </div>
            <br />
                  
          <Link href="/projects" style={{ padding: "10px 20px", fontSize: "1rem", backgroundColor: "#007bff", color: "white", border: "none", 
              borderRadius: "5px", cursor: "pointer", gap: "10px", marginTop: "20px" }}>
            Get Started
          </Link>
            </section>

         
        </div>
    );
 } 