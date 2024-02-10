import dog from '../../assets/images/dog.png'

const Requests = () => {
    const pets = [
        {
            category: 'Dog',
            age: 7,
            breed: 'German Shephard',
            description: 'A highly motivated individual with a 6+ year of experience in the biting industry.',
            invitation: true,
        },
        {
            category: 'Cat',
            age: 5,
            breed: 'Siamese',
            description: 'A highly motivated individual with a 6+ year of experience in the biting industry.',
            invitation: false,
        },
        {
            category: 'Dog',
            age: 5,
            breed: 'French Bulldog',
            description: 'A highly motivated individual with a 6+ year of experience in the biting industry.',
            invitation: true,
        }
    ];

    return (
        <div className='pt-[10rem] md:flex justify-center p-5 space-x-5 md:w-2/3 w-full'>
            {pets.map((pet, index) => (
                <div key={index} className="border-black font-primary border-2 rounded-md px-2 py-2 flex flex-col items-center m-5">
                    <img className='rounded-2xl sm:w-1/3 sm:h-1/3' src={dog} alt="Dog" />
                    <h1 className='text-5xl'>Tuffy</h1>
                    <ul className='grid grid-cols-1 md:grid-cols-3 md:space-x-3 text-center w-fit space-y-3'>
                        <li className='bg-[#27C52D] rounded-lg p-1 text-white font-primary w-full'>{pet.category}</li>
                        <li className='bg-[#27C52D] rounded-lg p-1 text-white font-primary w-full'>{pet.age} years</li>
                        <li className='bg-[#27C52D] rounded-lg p-1 text-white font-primary w-full'>{pet.breed}</li>
                    </ul>

                    <p className='font-primary mt-4 text-center'>{pet.description}</p>
                    <div className='flex justify-evenly space-x-4 mt-4'>
                        {pet.invitation ? (
                            <button className='bg-[#27C52D] p-3 rounded-lg text-white'>Accept</button>
                        ) : (
                            <button className='bg-[#27C52D] p-3 rounded-lg text-white'>Invited</button>
                        )}
                        {pet.invitation ? (
                            <button className='bg-[#DA2238] p-3 rounded-lg text-white'>Reject</button>
                            ) : (
                                ""
                            )
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Requests;
