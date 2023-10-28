
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pep from '../Pep/Pep';

const Blog = () => {
    const [data, setData] = useState([]);
    const [showFullText, setShowFullText] = useState(false);

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add your subscription logic here, e.g., sending the email to a backend server.
        console.log(`Subscribing with email: ${email}`);
    };

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5012/blog')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching API data:', error));
    };

    const toggleReadMore = (itemIndex) => {
        setData((prevData) => {
            const updatedData = [...prevData];
            updatedData[itemIndex].showFullText = !updatedData[itemIndex].showFullText;
            return updatedData;
        });
    };

    const entriesPerTab = 3;
    const totalTabs = Math.ceil(data.length / entriesPerTab);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='mx-auto max-w-7xl'>
            <Pep></Pep>
            <Tabs
                selectedIndex={activeTab}
                onSelect={handleTabChange}
                className="bg-slate-100"
            >
                <TabList className="flex flex-col border-0 shadow-xl bg-cyan-500 sm:flex-row max-w-fit">
                    {Array.from({ length: totalTabs }, (_, index) => (
                        <Tab
                            key={index}
                            className={`mx-auto px-4 py-1 ${activeTab === index ? 'bg-gray-300 justify-center' : 'bg-gray-200'
                                } cursor-pointer`}
                            onClick={() => handleTabChange(index)}
                        >
                            Page {index + 1}
                        </Tab>
                    ))}
                </TabList>

                {Array.from({ length: totalTabs }, (_, tabIndex) => (
                    <TabPanel className="grid grid-cols-1 md:grid-cols-6 g-4" key={tabIndex}>

                        <div className="grid grid-cols-1 col-span-4">
                            {data
                                .slice(tabIndex * entriesPerTab, (tabIndex + 1) * entriesPerTab)
                                .map(item => (
                                    <div
                                        key={item.Id}
                                        className="p-2 border border-gray-300 shadow-md bg-cyan-50"
                                    >
                                        <h2 className="mb-2 text-2xl font-semibold text-cyan-500">{item.blogName}</h2>
                                        <div className='flex items-center justify-start'>
                                            <img className='w-8 h-8 mr-2 rounded-full' src={item.userImage} alt="Blog Author" />
                                            <p className='mr-1' >{item.userName} </p>
                                            <p> / </p>
                                            <h2 className="ml-1">{item.date}</h2>
                                        </div>
                                        <div>
                                            <img className='w-full my-3 rounded-md' src={item.PlaceImage} alt="Blog Author" />
                                        </div>

                                        <p className='text-justify'>
                                            {showFullText ? item.detailText : `${item.detailText.slice(0, 50)}... `}
                                            <span
                                                className="text-red-500 cursor-pointer"
                                                onClick={toggleShowFullText}
                                            >
                                                {showFullText ? "Read Less" : "Read More"}
                                            </span>
                                        </p>

                                    </div>
                                ))}
                        </div>

                        <div className="grid grid-cols-1 col-span-2 bg-slate-300">

                            <div>
                                <h2>Subscribe Our Blog</h2>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        className='block w-5/6 p-2 mx-auto mb-4 bg-transparent border-b-4 border-red-500'
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center px-2 py-1 mx-auto text-2xl text-white border-2 rounded-md shadow-lg bg-cyan-500 border-cyan-500 hover:bg-transparent hover:border-2"
                                    >
                                        Subscribe Now
                                    </button>

                                </form>
                            </div>

                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default Blog;


// import React, { useState, useEffect } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Pep from '../Pep/Pep';

// const Blog = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         fetch('http://localhost:5012/blog')
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.error('Error fetching API data:', error));
//     };

//     const toggleReadMore = (tabIndex, dataIndex) => {
//         setData((prevData) => {
//             const updatedData = [...prevData];
//             const itemIndex = tabIndex * entriesPerTab + dataIndex;
//             updatedData[itemIndex].showFullText = !updatedData[itemIndex].showFullText;
//             return updatedData;
//         });
//     };

//     const entriesPerTab = 3;
//     const totalTabs = Math.ceil(data.length / entriesPerTab);

//     const [activeTab, setActiveTab] = useState(0);

//     const handleTabChange = (index) => {
//         setActiveTab(index);
//     };

//     return (
//         <div>
//             <Pep></Pep>
//             <Tabs
//                 selectedIndex={activeTab}
//                 onSelect={handleTabChange}
//                 className="bg-red-100"
//             >
//                 {/* ... TabList setup ... */}
//                 {Array.from({ length: totalTabs }, (_, tabIndex) => (
//                     <TabPanel key={tabIndex}>
//                         <div className="grid grid-cols-1 gap-4">
//                             {data
//                                 .slice(tabIndex * entriesPerTab, (tabIndex + 1) * entriesPerTab)
//                                 .map((item, dataIndex) => (
//                                     <div
//                                         key={item.Id}
//                                         className="p-2 border border-gray-300 shadow-md bg-cyan-50"
//                                     >
//                                         <h2 className="mb-2 text-2xl font-semibold text-cyan-500">{item.blogName}</h2>
//                                         <p className="text-gray-600">
//                                             {item.showFullText ? item.detailText : `${item.detailText.slice(0, 150)}... `}
//                                             <span
//                                                 className="text-blue-500 cursor-pointer"
//                                                 onClick={() => toggleReadMore(tabIndex, dataIndex)}
//                                             >
//                                                 {item.showFullText ? 'Read Less' : 'Read More'}
//                                             </span>
//                                         </p>
//                                     </div>
//                                 ))}
//                         </div>
//                     </TabPanel>
//                 ))}
//             </Tabs>
//         </div>
//     );
// };

// export default Blog;
