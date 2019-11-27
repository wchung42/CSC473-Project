/* This file contains a set of a helper functions that
   gets the user's current location, watches their
   current location, and calculates their distance to 
   a certain set of coordinates  
*/

// get current coordinates
export function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            console.log(`latitude: ${lat} | longitude: ${lng}`);
            //return [lat, lng];
        })
    } else {
        console.log("Your browser doesn't support geolocation :(");
    }
}

// watching position

// calculate distance between two coordinate points
export function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    var radius = 6371; // Radius of the earth in km
    var degreesLat = deg2rad(lat2-lat1);  // deg2rad below
    var degreesLng = deg2rad(lng2-lng1); 
    var a = Math.sin(degreesLat/2) * Math.sin(degreesLat/2) + 
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(degreesLng/2) * Math.sin(degreesLng/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var dist = radius * c; // Distance in km
    return dist;
}
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

export default getDistanceFromLatLonInKm;