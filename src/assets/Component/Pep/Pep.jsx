/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState } from 'react';

// const Pep = () => {
//     const hello = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum unde nulla maiores doloribus adipisci voluptas delectus hic fugit eos odio velit, fuga commodi rerum nemo officiis voluptatem, architecto ipsum, quisquam aperiam nisi. Nihil exercitationem dolorum dolorem minus. Inventore ut itaque magni, exercitationem pariatur hic sunt consectetur eum fuga? Ex fugit quasi, corrupti expedita unde ut laborum nulla! Ducimus amet praesentium nostrum et assumenda, possimus officiis consectetur sed minima quasi aliquam ex. Blanditiis, dicta. Ad maiores exercitationem deserunt molestiae quas nobis vel cupiditate culpa. Sed aut cupiditate voluptate nesciunt voluptas repellendus quos unde vel illo id explicabo odio, odit cumque! Veniam ea error ratione asperiores. Labore iure eaque corporis temporibus, reiciendis non totam aperiam nemo explicabo reprehenderit tempora tempore consequatur natus eius dolorem facilis nisi dolorum deleniti iste et praesentium quos. Amet animi tempore ea, ex laboriosam dolores consequuntur aliquam quisquam, nulla expedita perspiciatis voluptatum itaque, mollitia nemo sequi? Magnam porro voluptate enim commodi adipisci, quidem, obcaecati, eaque ullam eveniet nam itaque aperiam facere nulla. Non aperiam provident praesentium cumque odio. Molestias maxime unde voluptas repellat et laboriosam minus soluta voluptate. Veritatis doloremque animi sequi, omnis molestiae doloribus architecto. Sed dolore perspiciatis facere nam quia neque voluptate, vel unde. Provident, maiores!";
//     const abbreviatedTextLength = 100;
//     const [showFullText, setShowFullText] = useState(false);

//     const toggleShowFullText = () => {
//         setShowFullText(!showFullText);
//     };

//     return (
//         <div>
//             <p>
//                 {showFullText ? hello : hello.slice(0, abbreviatedTextLength) + "..."}
//                 <span
//                     className="text-blue-500 cursor-pointer"
//                     onClick={toggleShowFullText}
//                 >
//                     {showFullText ? "Read Less" : "Read More"}
//                 </span>
//             </p>
//         </div>
//     );
// };

// export default Pep;

import React, { useState } from 'react';



const Pep = () => {

    const [data, showData] = useState(true)

    const toggleData = () => {
        showData(!data)
    }

    return (
        <div>
            <span
                className="text-orange-500 cursor-pointer"
                onClick={toggleData}
            >
                {data ? "Muhammad Mujahidul" : "Islam"}
            </span>


        </div>
    );
};

export default Pep;

