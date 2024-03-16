// import React from 'react';

const Events = () => {
  return (
    <div>
      <div className="p-2 rounded-l-3xl border-green-600 bg-green-300 flex items-center gap-2 py-1 w-3/4 mb-5 mx-auto">
        <span className="size-3 rounded-full bg-green-600"></span>
        <span className="flex items-center justify-center">Events</span>
      </div>
      <div className="p-2 rounded-l-3xl border-red-600 bg-red-300 flex items-center gap-2 py-1 w-3/4 mb-5 mx-auto">
        <span className="size-3 rounded-full bg-red-600"></span>
        <span className="flex items-center justify-center">Assignments</span>
      </div>
      <div className="p-2 rounded-l-3xl border-purple-600 bg-purple-300 flex items-center gap-2 py-1 w-3/4 mb-5 mx-auto">
        <span className="size-3 rounded-full bg-purple-600"></span>
        <span className="flex items-center justify-center">Focus Period</span>
      </div>
      <div className="p-2 rounded-l-3xl border-yellow-600 bg-yellow-300 flex items-center gap-2 py-1 w-3/4 mb-5 mx-auto">
        <span className="size-3 rounded-full bg-yellow-600"></span>
        <span className="flex items-center justify-center">Tests</span>
      </div>
    </div>
  );
};

export default Events;
