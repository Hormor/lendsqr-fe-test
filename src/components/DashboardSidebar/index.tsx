import React from 'react'
import "./index.scss"
import Briefcase from "../../assets/briefcase.svg"
import Dropdown from "../../assets/arrowdown.svg"
import SidebarLink from '../SidebarLink'

import DashboardIcon from "../../assets/sidebar-icons/home.svg"
import UsersIcon from "../../assets/sidebar-icons/user-friends.svg"
import GuarantorsIcon from "../../assets/sidebar-icons/users.svg"
import LoansIcon from "../../assets/sidebar-icons/sack.svg"
import DecisionModelsIcon from "../../assets/sidebar-icons/handshake-regular.svg"
import SavingsIcon from "../../assets/sidebar-icons/piggy-bank.svg"
import LoanRequestsIcon from "../../assets/sidebar-icons/Group 104.svg"
import WhiteListIcon from "../../assets/sidebar-icons/user-check.svg"
import KarmaIcon from "../../assets/sidebar-icons/user-times.svg"
import OrganisationsIcon from "../../assets/sidebar-icons/briefcase.svg"
import SavingsProductsIcon from "../../assets/sidebar-icons/np-bank.svg"
import FeesandChargesIcon from "../../assets/sidebar-icons/coins-solid.svg"
import TransactionsIcon from "../../assets/sidebar-icons/icon.svg"
import ServicesIcon from "../../assets/sidebar-icons/galaxy.svg"
import ServiceAccountIcon from "../../assets/sidebar-icons/user-cog.svg"
import SettlementsIcon from "../../assets/sidebar-icons/scroll.svg"
import ReportsIcon from "../../assets/sidebar-icons/chart-bar.svg"
import PreferencesIcon from "../../assets/sidebar-icons/sliders.svg"
import FeesandPricingIcon from "../../assets/sidebar-icons/badge-percent.svg"
import AuditLogsIcon from "../../assets/sidebar-icons/clipboard-list.svg"


const userLinks = [
    {
        icon: UsersIcon,
        text: "Users",
        to: "users"
    },
    {
        icon: GuarantorsIcon,
        text: "Guarantors",
    },
    {
        icon: LoansIcon,
        text: "Loans",
    },
    {
        icon: DecisionModelsIcon,
        text: "Decision Models",
    },
    {
        icon: SavingsIcon,
        text: "Savings",
    },
    {
        icon: LoanRequestsIcon,
        text: "Loan Requests",
    },
    {
        icon: WhiteListIcon,
        text: "WhiteList",
    },
    {
        icon: KarmaIcon,
        text: "Karma",
    },
]
const businessLinks = [
    {
        icon: OrganisationsIcon,
        text: "Organisations",
    },
    {
        icon: LoanRequestsIcon,
        text: "Loan Products",
    },
    {
        icon: SavingsProductsIcon,
        text: "Savings Products",
    },
    {
        icon: FeesandChargesIcon,
        text: "Fees and Charges",
    },
    {
        icon: TransactionsIcon,
        text: "Transactions",
    },
    {
        icon: ServicesIcon,
        text: "Services",
    },
    {
        icon: ServiceAccountIcon,
        text: "Service Account",
    },
    {
        icon: SettlementsIcon,
        text: "Settlements",
    },
    {
        icon: ReportsIcon,
        text: "Reports",
    },
]
const settingLinks = [
    {
        icon: PreferencesIcon,
        text: "Preferences",
    },
    {
        icon: FeesandPricingIcon,
        text: "Fees and Pricing",
    },
    {
        icon: AuditLogsIcon,
        text: "Audit Logs",
    },
]


export default function DashboardSidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={Briefcase} alt="Briefcase Icon" />
                <h3>Switch Organization</h3>
                <img src={Dropdown} alt="Dropdown Icon" />
            </div>
            <SidebarLink icon={DashboardIcon} text="Dashboard" to='' />
            <p className="sub-heading">CUSTOMERS</p>
            <ul>
                {userLinks.map((link, i) => <SidebarLink key={i} icon={link.icon} text={link.text} to={link.to} />)}
            </ul>
            <p className="sub-heading">BUSINESSES</p>
            <ul>
                {businessLinks.map((link, i) => <SidebarLink key={i} icon={link.icon} text={link.text} />)}
            </ul>
            <p className="sub-heading">SETTINGS</p>
            <ul>
                {settingLinks.map((link, i) => <SidebarLink key={i} icon={link.icon} text={link.text} />)}
            </ul>
        </div>
    )
}