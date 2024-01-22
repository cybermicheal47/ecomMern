import axios from "axios";

const BACKEND_URL = "http://localhost:3500/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTY2ODBhZTIyMGYyMjc4NjcyM2IxZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY3MDk2MSwiZXhwIjoxNzA1OTMwMTYxfQ.8ebFxwT0yfCCvLMPpfWV0G05-jngK315WwdeH3QVe8w";

export const publicRequest = axios.create({
  baseURL: BACKEND_URL,
});

export const userRequest = axios.create({
  baseURL: BACKEND_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
