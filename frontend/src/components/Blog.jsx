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
        <div className="w-full min-h-screen flex flex-col">
            <Navigation />

            {/* Header Section */}
            <div className="w-full h-[36vh] flex items-center justify-center">
                <span className="text-3xl font-sans md:text-6xl font-extralight italic">
                    The <strong className="not-italic">Blog</strong>
                </span>
            </div>

            {/* Blog Layout - Sidebar + Content */}
            <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-50">
                {/* Left Side - Featured Blog Image */} 
                {blogData.blogs.length > 0 && (
                    <motion.div
                        className="w-full md:w-1/2 h-[60vh] p-4 sticky top-20 self-start"
                        initial={hasAnimated ? {} : { opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? {} : { opacity: 1, scale: 1 }}
                        transition={hasAnimated ? {} : { duration: 0.5 }}
                        onAnimationComplete={() => setHasAnimated(true)}
                    >
                        <img
                            src={blogData.blogs[0].image}
                            alt={blogData.blogs[0].title}
                            className="w-full h-full object-cover shadow-md"
                        />
                        <div className="absolute inset-0 bg-opacity-40 flex items-end p-6">
                            <h2 className="text-white px-6 text-2xl md:text-4xl font-semibold">
                                {blogData.blogs[0].title}
                            </h2>
                        </div>
                    </motion.div>
                )}

                {/* Right Side - Scrollable Content */}
                <div className="w-full md:w-1/2 max-h-[80vh] overflow-y-auto">
                    {/* Blog Category Buttons */}
                    <div className="flex flex-row flex-wrap gap-2 mb-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 text-lg ${
                                    selectedCategory === category
                                        ? "font-bold text-orange-200"
                                        : "text-gray-600"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
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
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                                    <p className="text-gray-600 text-sm my-2">
                                        {blog.content.slice(0, 100)}...
                                    </p>
                                    <div className="flex justify-between items-center text-gray-500 text-xs">
                                        <span>{blog.author}</span>
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
