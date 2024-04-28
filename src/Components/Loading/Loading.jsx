import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center mt-[200px] h-screen'>
      <div>
        <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
        </div>
    );
};

export default Loading;