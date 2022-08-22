import React from 'react';

const useGeoLocation = () => {
    const [location, setLocation] = React.useState({ lat: '', long: '' });

    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                setLocation({
                    lat: JSON.stringify(location.coords.latitude),
                    long: JSON.stringify(location.coords.longitude),
                });
            });
        }
    }, []);

    return location;
};

export default useGeoLocation;
