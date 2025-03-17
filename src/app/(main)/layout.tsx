import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import React from "react"

const ServerLayout = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[48px] z-30 flex-col fixed inset-y-0">
                {/*ForSideBar */}
                <NavigationSidebar />
            </div>
            <main className="md:pl-[48px] h-full">
                {children}
            </main>
        </div>
    )
}

export default ServerLayout;