"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){ 


        const pathName = usePathname()

        const isActive = (path: string) => pathName === path;

        return (
            <div style={{display: "flex",padding: "20px",
              borderRight: "2px solid #555", gap: "30px" , margin: "20px", minHeight: "100vh"}} >
                

                {/* SideBar */}
                <aside style={{width: "220px", gap: "30px", padding: "20px", borderRight: "2px solid #eee", }} >
                    <h2 style={{marginBottom: "20px", border: "1px solid #eee",
                         borderRadius: "8px", padding: "10px", textAlign: "center", backgroundColor: "red"}}> Dashboard  </h2>
                         <br />

                    <nav>
                        <ul style={{listStyle: "none", padding: 0}} >
                            <li>
                              <Link href="/" 
                              style={{fontWeight: isActive("/") ? "bold" : "normal"}}>OverView</Link>
                            </li>
                            <li>
                                <Link href="/projects"
                                style={{fontWeight: isActive("/projects") ? "bold" : "normal"}}> Projects </Link>
                            </li>
                              <li>
                                <Link href="/courses"
                                style={{fontWeight: isActive("/courses") ? "bold" : "normal"}}>Courses </Link>
                            </li>
                              <li>
                                <Link href="/settings"
                                style={{fontWeight: isActive("/settings") ? "bold" : "normal"}}> Settings </Link>
                            </li>

                        </ul>
                    </nav>

                </aside>
            </div>
        )
     }