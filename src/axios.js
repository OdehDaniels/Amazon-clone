import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-da72d/us-central1/api'
    // baseURL: 'http://us-central1-/clone-da72d.cloudfuctions.net/api'
});

export default instance;