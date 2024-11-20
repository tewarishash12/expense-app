import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to track whether the mobile menu is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-white font-bold text-2xl">
                        <Link to="/" className="hover:opacity-80 transition-opacity">
                            Expense Tracker
                        </Link>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-white font-medium hover:text-yellow-300 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/addexpense"
                            className="text-white font-medium hover:text-yellow-300 transition-colors"
                        >
                            Add Expense
                        </Link>
                        <Link
                            to="/history"
                            className="text-white font-medium hover:text-yellow-300 transition-colors"
                        >
                            History
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 p-2 rounded-md"
                            id="mobile-menu-button"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden bg-gradient-to-b from-purple-600 to-blue-600 p-4 space-y-2"
                >
                    <Link
                        to="/"
                        className="block text-white font-medium hover:text-yellow-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    >
                        Home
                    </Link>
                    <Link
                        to="/addexpense"
                        className="block text-white font-medium hover:text-yellow-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    >
                        Add Expense
                    </Link>
                    <Link
                        to="/history"
                        className="block text-white font-medium hover:text-yellow-300 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    >
                        History
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
