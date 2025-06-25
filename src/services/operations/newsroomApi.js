import { apiconnector } from "../apiConnector";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const newsroomEndpoints = {
  GET_ALL: `${BASE_URL}/api/v1/newsroom/`,
  CREATE: `${BASE_URL}/api/v1/newsroom/`,
  UPDATE: `${BASE_URL}/api/v1/newsroom/:id`,
  DELETE: `${BASE_URL}/api/v1/newsroom/:id`,
  BY_USER: `${BASE_URL}/api/v1/newsroom/by-user/:email`,
};

export async function getAllNewsroomEvents() {
  try {
    const res = await apiconnector("GET", newsroomEndpoints.GET_ALL);
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function createNewsroomEvent(formData, token) {
  try {
    const res = await apiconnector(
      "POST",
      newsroomEndpoints.CREATE,
      formData,
      { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function updateNewsroomEvent(id, formData, token) {
  try {
    const url = newsroomEndpoints.UPDATE.replace(":id", id);
    const res = await apiconnector(
      "PUT",
      url,
      formData,
      { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function deleteNewsroomEvent(id, token) {
  try {
    const url = newsroomEndpoints.DELETE.replace(":id", id);
    const res = await apiconnector(
      "DELETE",
      url,
      null,
      { Authorization: `Bearer ${token}` }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function getNewsroomEventsByEmail(email, token) {
  try {
    const url = newsroomEndpoints.BY_USER.replace(":email", email);
    const res = await apiconnector(
      "GET",
      url,
      null,
      { Authorization: `Bearer ${token}` }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
} 