import React from 'react';

const Subscription = () => {
    return (
        <div>
            <div className="h-screen w-full relative dark:bg-gray-800">

                <div className="relative  bottom-0 isolate overflow-hidden px-6 py-24 sm:px-24 xl:py-32">

                    <h4
                        className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                        Subscrib Box
                    </h4>

                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 dark:text-gray-300 text-gray-700">
                        Receive notifications .
                    </p>

                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label for="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required="" className="min-w-0 flex-auto rounded-md bg-gray-200/50 border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white sm:text-sm sm:leading-6" placeholder="Enter your email" />
                        <button type="submit" className="flex-none border border-primary-200/50 dark:border-none rounded-md dark:bg-white dark:text-gray-900 bg-gray-100 text-gray-900 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-100">
                            Subscrib
                        </button>
                    </form>

                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                        aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7">
                        </circle>
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                                gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                                <stop stop-color="#7775D6"></stop>
                                <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default Subscription;