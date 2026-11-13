import React from "react";

export function Navbar({ title = "Mi Aplicación", user }) {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#1e293b", color: "#fff" }}>
            <span style={{ fontWeight: "bold" }}>{title}</span>
            <div>
                {user ? <span>Hola, {user.name}</span> : <button>Iniciar Sesión</button>}
            </div>
        </nav>
    );
}
