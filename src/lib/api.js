import axios from "axios";

//for all request
export default function Httper(method, url, data, headers) {
  return axios({ method, url, data, headers })
    .then(function (response) {
      // handle success
      return response?.data?.results;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("Done!");
    });
}
