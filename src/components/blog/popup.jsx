
import React from 'react';

const Popup = ({ onClose, blogs, onGoToClick }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white w-3/5 h-3/5 p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-black text-center">Blogs</h2>
                <div className="flex justify-end mb-4">
                    <button className="text-gray-600 hover:text-gray-900 text-2xl" onClick={onClose}>
                        <ion-icon name="backspace-outline"></ion-icon>
                    </button>
                    <div></div>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex space-x-4">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex-shrink-0 w-64">
                                <img src={blog.image} alt={blog.name} className="w-64 h-40 object-cover" />
                                <h3 className="mt-2 text-lg font-semibold">{blog.name}</h3>
                                <button
                                    className="mt-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                                    onClick={() => onGoToClick(blog.url)}
                                >
                                    Go to
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
