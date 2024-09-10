import axios from "axios";

import { API_KEY } from "../api_keys";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, { email: email, password: password });

  console.log(response);
}

export async function createUser(email, password) {
  const response = authenticate("signUp", email, password);
}

export async function login(email, password) {
  const response = await authenticate("signInWithPassword", email, password);
}
