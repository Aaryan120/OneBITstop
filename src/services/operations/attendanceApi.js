import { apiconnector } from "../apiConnector";
import { attendanceEndpoints } from "../apis";

export async function getUserAttendance(token) {
  try {
    const res = await apiconnector(
      "GET",
      attendanceEndpoints.GET_ATTENDANCE,
      null,
      { Authorization: `Bearer ${token}` }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function getSubjectAttendance(subject, token) {
  try {
    const url = attendanceEndpoints.GET_SUBJECT_ATTENDANCE.replace(":subject", subject);
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

export async function upsertAttendance(data, token) {
  try {
    const res = await apiconnector(
      "POST",
      attendanceEndpoints.UPDATE_ATTENDANCE,
      data,
      { Authorization: `Bearer ${token}` }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function deleteSubject(subject, token) {
  try {
    const url = attendanceEndpoints.DELETE_SUBJECT.replace(":subject", subject);
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

export async function clearAllAttendance(token) {
  try {
    const res = await apiconnector(
      "DELETE",
      attendanceEndpoints.CLEAR_ALL,
      null,
      { Authorization: `Bearer ${token}` }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
} 