import axios from "axios";

let apiUrl;

const apiUrls = {
	production: 'https://velvet-blog-app.herokuapp.com/api',
	development: 'https://velvet-blog-app.herokuapp.com/api',
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
