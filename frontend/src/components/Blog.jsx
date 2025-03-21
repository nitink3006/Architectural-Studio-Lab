import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation";
import blogData from "./BlogData.json";
import Footer from "./Footer";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Blogs");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const categories = [
        "All Blogs",
        ...new Set(blogData.blogs.map((blog) => blog.category)),
    ];

    const filteredBlogs =
        selectedCategory === "All Blogs"
            ? blogData.blogs
            : blogData.blogs.filter(
                  (blog) => blog.category === selectedCategory
              );

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen bg-Soft_Grey">
            <Navigation />

            {/* Header Section */}
            <div className="flex h-[36vh] justify-center w-full items-center">
                <span className="text-3xl font-extralight font-sans futura_font italic md:text-6xl text_black">
                    The <strong className="not-italic">Blog</strong>
                </span>
            </div>

            {/* Blog Layout - Sidebar + Content */}
            <div className="flex flex-col b-gray-50 p-6 gap-8 md:flex-row">
                {/* Left Side - Featured Blog Image */} 
                {blogData.blogs.length > 0 && (
                    <motion.div
                        className="h-[60vh] p-4 w-full md:w-1/2 self-start sticky top-20"
                        initial={hasAnimated ? {} : { opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? {} : { opacity: 1, scale: 1 }}
                        transition={hasAnimated ? {} : { duration: 0.5 }}
                        onAnimationComplete={() => setHasAnimated(true)}
                    >
                        <img
                            src={blogData.blogs[0].image}
                            alt={blogData.blogs[0].title}
                            className="h-full shadow-md w-full object-cover"
                        />
                        <div className="flex bg-opacity-40 p-6 absolute inset-0 items-end">
                            <h2 className="text-2xl text-white font-semibold futura_font md:text-4xl px-6">
                                {blogData.blogs[0].title}
                            </h2>
                        </div>
                    </motion.div>
                )}

                {/* Right Side - Scrollable Content */}
                <div className="w-full max-h-[80vh] md:w-1/2 overflow-y-auto">
                    {/* Blog Category Buttons */}
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={` futura_font px-4 py-2 text-lg ${
                                    selectedCategory === category
                                        ? "font-bold text-orange-400"
                                        : "text-gray-600"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 p-6 gap-6 md:grid-cols-2">
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                className="bg-white shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold futura_font text_black">{blog.title}</h3>
                                    <p className="text_dark_grey text-sm avenir_font my-2">
                                        {blog.content.slice(0, 100)}...
                                    </p>
                                    <div className="flex justify-between tex-gray-500 text-xs avenir_font items-center text_dark_grey">
                                        <span >{blog.author}</span>
                                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
