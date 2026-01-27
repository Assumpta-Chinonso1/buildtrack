import Sidebar from "./_components/sidebar"

export default function DashboardLayout({
    children, 
     } : {

        children: React.ReactNode
}) {
    return (
        <div style={{display: "flex", minHeight: "100vh"}} >

                   {/* SideBar */}
                    <Sidebar/>
         
            <main style={{flex: 1, padding: "20px"}}>
                {children}


            </main>

            

        </div>
    )
}