import React from 'react';

const CustomerReview = () => {
    return (
        <section className="bg-orange-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Meet Our Pet Heroes</h2>
                    <p className="text-gray-500">Real stories from our community members</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <img 
                            src="https://i.pravatar.cc/150?img=32" 
                            alt="Person" 
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow" 
                        />
                        <h4 className="font-bold text-lg">Sarah Jenkins</h4>
                        <p className="text-sm text-gray-500 mb-2">Rescued 3 Cats</p>
                        <p className="italic text-gray-600">"PawMart made it so easy to connect with shelters. My home is full of joy now!"</p>
                    </div>
                    <div className="text-center p-6">
                        <img 
                            src="https://i.pravatar.cc/150?img=11" 
                            alt="Person" 
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow" 
                        />
                        <h4 className="font-bold text-lg">Ahmed Khan</h4>
                        <p className="text-sm text-gray-500 mb-2">Adopted 'Rocky'</p>
                        <p className="italic text-gray-600">"Finding a companion was a journey. I'm glad I chose to adopt rather than shop."</p>
                    </div>
                    <div className="text-center p-6">
                        <img 
                            src="https://i.pravatar.cc/150?img=5" 
                            alt="Person" 
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow" 
                        />
                        <h4 className="font-bold text-lg">Emily Davis</h4>
                        <p className="text-sm text-gray-500 mb-2">Regular Donor</p>
                        <p className="italic text-gray-600">"I love buying supplies here because I know it supports a community of animal lovers."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;