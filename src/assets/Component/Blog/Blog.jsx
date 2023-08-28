
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Pep from '../Pep/Pep';

const Blog = () => {
    const [data, setData] = useState([]);
    const [showFullText, setShowFullText] = useState(false);

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
        <div>
            <Pep></Pep>
            <Tabs
                selectedIndex={activeTab}
                onSelect={handleTabChange}
                className="bg-red-100"
            >
                <TabList className="flex flex-col border-0 shadow-xl bg-emerald-500 sm:flex-row max-w-fit">
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
                    <TabPanel key={tabIndex}>
                        <div className="grid grid-cols-1 gap-4">
                            {data
                                .slice(tabIndex * entriesPerTab, (tabIndex + 1) * entriesPerTab)
                                .map(item => (
                                    <div
                                        key={item.Id}
                                        className="p-2 border border-gray-300 shadow-md bg-cyan-50"
                                    >
                                        <h2 className="text-2xl text-cyan-500 font-semibold mb-2">{item.blogName}</h2>

                                        <p>
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
//                                         <h2 className="text-2xl text-cyan-500 font-semibold mb-2">{item.blogName}</h2>
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
