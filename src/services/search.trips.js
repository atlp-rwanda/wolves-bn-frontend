import axios from 'axios';

class SearchTrips {
  getAllTrips() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
      }
    };
    const response = axios.get(`${process.env.REACT_APP_URL}/api/trips`, config);
    return response;
  }

  autoSearchTrip(departure) {
    const token = localStorage.getItem('token');

    const response = axios.get(`${process.env.REACT_APP_URL}/api/trips/search?departure=${departure}`, {
      headers: {
        token,
      },
    });
    return response;
    // .then((response) => response)
    // .catch((error) => {
    //   // let errorMessage;
    //   // if (error.response) {
    //   //   errorMessage = error.response.data.Error;
    //   //   // console.log('error 1:', errorMessage);
    //   // } else if (error.request) {
    //   //   errorMessage = error.response.request;
    //   //   console.log('error 2:', error.request);
    //   // } else {
    //   //   // console.log('error 3:', error.message);
    //   //   errorMessage = error.message;
    //   // }
    // });
  }

  autoSearchTripByDestination(destination) {
    const token = localStorage.getItem('token');

    const response = axios.get(`${process.env.REACT_APP_URL}/api/trips/search?destination=${destination}`, {
      headers: {
        token,
      },
    }
    );
    return response;
    // .then((response) => response)
    // .catch((error) => {
    //   // let errorMessage;
    //   // if (error.response) {
    //   //   // errorMessage = error.response.data.Error;
    //   //   console.log('error 1:', errorMessage);
    //   // } else if (error.request) {
    //   //   errorMessage = error.response.request;
    //   //   // console.log('error 2:', error.request);
    //   // } else {
    //   //   // console.log('error 3:', error.message);
    //   //   errorMessage = error.message;
    //   // }
    // });
  }
}

export default new SearchTrips();
