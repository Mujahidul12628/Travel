import React from 'react';

const Destination = () => {
    const [destination, setDestination] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5012/travelPlaces')
            .then(response => response.json())
            .then(data => setDestination(data))
            .catch(error => console.error('Error fetching class data:', error));
    }, []);
    return (
        <div className='my-5'>
            {/* <h2 className="mb-4 text-2xl font-bold"></h2>
            <h1 className='mb-5 text-3xl font-bold text-center text-cyan-500'>Popular Classes</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {classes.map((classData, index) => (
                    <div className="p-4 border border-gray-300 rounded-md shadowAlll bg-cyan-50" key={index}>
                        <img src={classData.Image} alt={classData.Name} className="mb-4 rounded-md" />
                        <h3 className="mb-2 text-lg font-bold">{classData.Name}</h3>
                        <p className="mb-2">Instructor: {classData["Instructor name"]}</p>
                        <p className="mb-2">Available seats: {classData["Available seats"]}</p>
                        <p>Price: {classData.Price}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Destination;