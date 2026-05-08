import React, { useState, useEffect } from 'react';

export function CatGallery() {
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then((response) => response.json())
            .then((data) => {
                setCats(data);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="p-8">
            <h2>10 cats!</h2>

            {isLoading ? (
                <p>Loading cats...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cats.map((cat) => (
                        <img key={cat.id} src={cat.url} alt="Cat"/>
                    ))}
                </div>
            )}
        </div>
    );
}