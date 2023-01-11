import React from 'react'
import "./index.scss"

export default function SidebarLink({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="sidebar-link">
            <img src={icon} alt="Briefcase Icon" className="icon" />
            <p>{text}</p>
        </div>
    )
}