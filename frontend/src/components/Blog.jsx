import React, { useState, useRef, useEffect } from "react";
import Navigation from "./Navigation";
import blogData from "./BlogData.json";
import Footer from "./Footer";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Blogs");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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

            <motion.div>
                {/* Blog Layout - Sidebar + Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50">
                    {/* Left Side - Featured Blog Image */}
                    {blogData.blogs.length > 0 && (
                        <motion.div
                            className="col-span-1 relative w-full h-[60vh] p-4 overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
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

                    {/* Right Side - Blog Category Toggle */}
                    <div className="col-span-1 flex flex-col bg-gray-50">
                        <div className="flex flex-row">
                            {categories.length >
                            (screenWidth < 640
                                ? 2
                                : screenWidth < 768
                                ? 3
                                : 5) ? (
                                <>
                                    {categories
                                        .slice(
                                            0,
                                            screenWidth < 640
                                                ? 2
                                                : screenWidth < 768
                                                ? 3
                                                : 5
                                        )
                                        .map((category, index) => (
                                            <button
                                                key={index}
                                                className={`px-4 py-2 text-lg text-left ${
                                                    selectedCategory ===
                                                    category
                                                        ? "font-bold text-orange-200"
                                                        : "text-gray-600"
                                                }`}
                                                onClick={() =>
                                                    setSelectedCategory(
                                                        category
                                                    )
                                                }
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    <div className="relative" ref={dropdownRef}>
                                        <button
                                            className="px-4 py-2 text-lg text-gray-600 hover:text-orange-200 flex items-center"
                                            onClick={toggleDropdown}
                                        >
                                            More
                                            <FaChevronDown className="ml-1" />
                                        </button>
                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                    className="absolute mt-2 bg-white rounded-md shadow-lg w-48 overflow-hidden"
                                                >
                                                    {categories
                                                        .slice(
                                                            screenWidth < 640
                                                                ? 2
                                                                : screenWidth <
                                                                  768
                                                                ? 3
                                                                : 5
                                                        )
                                                        .map(
                                                            (
                                                                category,
                                                                index
                                                            ) => (
                                                                <button
                                                                    key={
                                                                        index +
                                                                        (screenWidth <
                                                                        640
                                                                            ? 2
                                                                            : screenWidth <
                                                                              768
                                                                            ? 3
                                                                            : 5)
                                                                    }
                                                                    className={`block w-full px-4 py-2 text-left text-gray-600 hover:text-orange-200 ${
                                                                        selectedCategory ===
                                                                        category
                                                                            ? "font-bold text-orange-200"
                                                                            : ""
                                                                    }`}
                                                                    onClick={() => {
                                                                        setSelectedCategory(
                                                                            category
                                                                        );
                                                                        setIsDropdownOpen(
                                                                            false
                                                                        );
                                                                    }}
                                                                >
                                                                    {category}
                                                                </button>
                                                            )
                                                        )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </>
                            ) : (
                                categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 text-lg text-left ${
                                            selectedCategory === category
                                                ? "font-bold text-blue-500"
                                                : "text-gray-600"
                                        }`}
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                    >
                                        {category}
                                    </button>
                                ))
                            )}
                        </div>
                        {/* Blog Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                            {filteredBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    className="bg-white shadow-md overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.3,
                                    }}
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm my-2">
                                            {blog.content.slice(0, 100)}...
                                        </p>
                                        <div className="flex justify-between items-center text-gray-500 text-xs">
                                            <span>{blog.author}</span>
                                            <span>
                                                {new Date(
                                                    blog.date
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default Blog;
