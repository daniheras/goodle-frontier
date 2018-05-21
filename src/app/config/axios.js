import axios from 'axios';
import { $api_URL } from "./constants";

export default axios.create({
    baseURL: $api_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer" + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nb29kbGUudGVzdFwvYXV0aFwvbG9naW4iLCJpYXQiOjE1MjY4OTM4NjAsImV4cCI6MTUyNjg5NzQ2MCwibmJmIjoxNTI2ODkzODYwLCJqdGkiOiJDMEtFRmVTMmhVZVozZGY3Iiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.qP4Ni7YQqDJB5T-DfKlWm_4n_roea_mKQVGeRSbmA5A"
    }
  });