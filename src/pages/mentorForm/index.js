import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const MentorForm = () => {
    const [formData, setFormData] = useState({
        about: '',
        certification: '',
        totalCourses: '',
        exp: '',
        graduated: false,
        language: '',
        image: ''
    });

    useEffect(() => {
        const cookieValue = document.cookie
            .split("; ")
            .find(row => row.startsWith("user="))
            ?.split("=")[1];

        if (cookieValue) {
            // Decode the JWT to extract user ID
            const decodedToken = jwtDecode(cookieValue);
            console.log(decodedToken)
            const userId = decodedToken.userId;
            console.log(userId) // Assuming 'userId' is the key in the payload containing the user ID
            // setUserId(userId);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    image: reader.result
                });
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${formData.image || 'images/default-background.png'})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 flex justify-center items-center min-h-screen">
                <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
                    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Mentor Form</h2>
                    <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
                        <textarea
                            id="about"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Tell us about yourself"
                        />
                    </div>
                    <div>
                        <label htmlFor="certification" className="block text-sm font-medium text-gray-700">Certification</label>
                        <input
                            type="text"
                            id="certification"
                            name="certification"
                            value={formData.certification}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your certifications"
                        />
                    </div>
                    <div>
                        <label htmlFor="totalCourses" className="block text-sm font-medium text-gray-700">Total Courses</label>
                        <input
                            type="number"
                            id="totalCourses"
                            name="totalCourses"
                            value={formData.totalCourses}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Number of courses taught"
                        />
                    </div>
                    <div>
                        <label htmlFor="exp" className="block text-sm font-medium text-gray-700">Experience (years)</label>
                        <input
                            type="number"
                            id="exp"
                            name="exp"
                            value={formData.exp}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Years of experience"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="graduated"
                            name="graduated"
                            checked={formData.graduated}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="graduated" className="ml-2 block text-sm font-medium text-gray-700">Graduated</label>
                    </div>
                    <div>
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                        <input
                            type="text"
                            id="language"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Languages spoken"
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="mt-1 block w-full text-gray-700"
                        />
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition duration-200">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MentorForm;

// import React, { useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode'; // Note the lowercase 'jwtDecode'
// import toast, { Toaster } from 'react-hot-toast';

// const MentorForm = () => {
//     // const [formData, setFormData] = useState({
//     //     about: '',
//     //     certification: '',
//     //     totalCourses: '',
//     //     exp: '',
//     //     graduated: false,
//     //     language: '',
//     //     // image: null // For file input, store as null initially
//     // });

//     // const [userId, setUserId] = useState(5); // State to hold userId

//     useEffect(() => {
//         const cookieValue = document.cookie
//             .split("; ")
//             .find(row => row.startsWith("user="))
//             ?.split("=")[1];

//         if (cookieValue) {
//             // Decode the JWT to extract user ID
//             const decodedToken = jwtDecode(cookieValue);
//             console.log(decodedToken)
//             const userId = decodedToken.userId;
//             console.log(userId) // Assuming 'userId' is the key in the payload containing the user ID
//             // setUserId(userId);
//         }
//     }, []);

//     const handleChange = (e) => {
//         // const { name, value, type, checked, files } = e.target;
//         // if (type === 'file') {
//         //     setFormData({
//         //         ...formData,
//         //         image: files[0] // Store the file object directly
//         //     });
//         // } else {
//         //     setFormData({
//         //         ...formData,
//         //         [name]: type === 'checkbox' ? checked : value
//         //     });
//         // }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Prepare form data to send to backend
//         // const formDataToSend = new FormData();
//         // formDataToSend.append('file', formData.image);
//         // formDataToSend.append('about', formData.about);
//         // formDataToSend.append('certification', formData.certification);
//         // formDataToSend.append('totalCourses', formData.totalCourses);
//         // formDataToSend.append('exp', formData.exp);
//         // formDataToSend.append('graduated', formData.graduated);
//         // formDataToSend.append('language', formData.language);
//         // // formDataToSend.append('userId', userId); // Include userId in form data

//         // try {
//         //     const response = await fetch('http://localhost:9090/createMentor', {
//         //         method: 'POST',
//         //         body: formDataToSend,
//         //     });
//         //     const result = await response.json();
//         //     if (response.ok) {
//         //         toast.success('Mentor created successfully!');
//         //     } else {
//         //         toast.error(result.message || 'Failed to create mentor');
//         //     }
//         // } catch (error) {
//         //     console.error('Error submitting mentor form:', error);
//         //     toast.error('An error occurred while submitting the form');
//         // }
//     };

//     return (
//         <div className="relative min-h-screen bg-cover bg-center" style={{}}>
//             <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//             <div className="relative z-10 flex justify-center items-center min-h-screen">
//                 <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
//                     <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Mentor Form</h2>
//                     <div>
//                         <label htmlFor="about" className="block text-sm font-medium text-gray-700">About</label>
//                         <textarea
//                             id="about"
//                             name="about"
//                             // value={formData.about}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             placeholder="Tell us about yourself"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="certification" className="block text-sm font-medium text-gray-700">Certification</label>
//                         <input
//                             type="text"
//                             id="certification"
//                             name="certification"
//                             // value={formData.certification}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             placeholder="Your certifications"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="totalCourses" className="block text-sm font-medium text-gray-700">Total Courses</label>
//                         <input
//                             type="number"
//                             id="totalCourses"
//                             name="totalCourses"
//                             // value={formData.totalCourses}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             placeholder="Number of courses taught"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="exp" className="block text-sm font-medium text-gray-700">Experience (years)</label>
//                         <input
//                             type="number"
//                             id="exp"
//                             name="exp"
//                             // value={formData.exp}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             placeholder="Years of experience"
//                         />
//                     </div>
//                     <div className="flex items-center">
//                         <input
//                             type="checkbox"
//                             id="graduated"
//                             name="graduated"
//                             // checked={formData.graduated}
//                             onChange={handleChange}
//                             className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                         />
//                         <label htmlFor="graduated" className="ml-2 block text-sm font-medium text-gray-700">Graduated</label>
//                     </div>
//                     <div>
//                         <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
//                         <input
//                             type="text"
//                             id="language"
//                             name="language"
//                             // value={formData.language}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                             placeholder="Languages spoken"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
//                         <input
//                             type="file"
//                             id="image"
//                             name="image"
//                             accept="image/*"
//                             onChange={handleChange}
//                             className="mt-1 block w-full text-gray-700"
//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition duration-200">Submit</button>
//                 </form>
//             </div>
//             <Toaster position="top-center" reverseOrder={false} />
//         </div>
//     );
// };

// export default MentorForm;




