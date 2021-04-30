import React from 'react';
import popularDestinations from './data/popularDestinations';
import DestinationCard from './components/DestinationCard';

const App = () => {
  return (
    <div className='bg-gray-300'>
      <div className='bg-gray-100 lg:grid lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2'>
          <div className='xl:max-w-xl'>
            <img className='h-10' src='/img/logo.svg' alt='logo' />
            <img
              class='object-center mt-5 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden'
              src='/img/beach-work.jpg'
              alt='women work on beach'
            />
            <h1 className='mt-6 text-2xl font-bold text-gray-500 sm:mt-8 sm:text-4xl lg:text-3xl'>
              You can work from anywere
              <br />
              <span className='text-indigo-500'>Take adventage of it.</span>
            </h1>
            <p className='mt-2 text-grey-600 sm:mt-4 sm:text-xl'>
              Workcation helps you find work-friendly rentals in beautifull
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className='mt-4 sm:mt-6 space-x-2 space-y-4'>
              <a
                className='btn btn-primary shadow-lg hover:translate-y-0.5 transform transition'
                href='#'
              >
                Book your escape
              </a>
              <a className='btn btn-secondary' href='#'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='relative hidden lg:block 2xl:col-span-3'>
          <img
            className='absolute inset-0 object-cover object-center w-full h-full'
            src='/img/beach-work.jpg'
            alt='women work on beach'
          />
        </div>
      </div>
      <div className='px-8  mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
        {popularDestinations.map((destination) => {
          return (
            <DestinationCard key={destination.city} destination={destination} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
