import React from "react";

const AuthLayout = ({ children }: { readonly children: React.ReactNode }) => {
    return (
        <div className="h-screen flex items-center justify-center">
            {children}
        </div>
    )
}

export default AuthLayout;