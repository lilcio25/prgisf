import React from "react";
import logovdr from './../imagenes/logo2.jpg';

export default function Aside() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a  href="#" className="brand-link">
            <img src="{logovdr}" />
            <span className="brand-text font-weight-light">VDR</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
                <a className="d-block">
                Select a cliente
                </a>
            </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false">
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-dolly fa-light" />
                    <p>
                    Pedidos
                    <i className="fas fa-angle-left right" />
                    </p>
                </a>
                <ul className="nav nav-treeview">
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="far fa-eye fa-regular" />
                        <p>     Activos</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link">
                        <i className="nav-icon far fa-clock fa-thin" />
                        <p>   Pasados</p>
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link">
                        <i className="nav-icon fas fa-wine-bottle" />
                        <p>   Productos</p>
                    </a>
                    </li>
                <li className="nav-header">Mi Cuenta</li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    <i className="fas fa-address-card fa-thin" />
                    <p>   Mi Perfil</p>
                </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link">
                        <i className="nav-icon fa-light fa-gear" />
                        <p>   Ajustes</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#"
                        className="nav-link">
                        <i className="fas fa-wine-bottle" />
                        <p>   Cerrar Sesión</p>
                    </a>
                    </li>
            </ul>
            </nav>
        </div>
        </aside>
);
}
