import axios from "axios";

/**
 * Base URL resolved from environment variables.
 * No hardcoded domain URLs anywhere in components.
 */
const BASE_URL =
  process.env.BACKEND_BASE_URL ||
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
  "https://library-app-b8ql.onrender.com";

const API_KEY =
  process.env.LANDING_API_KEY || "nl_landing_secure_key_2026";

const APP_CLIENT_KEY =
  process.env.APP_CLIENT_KEY || "nl_mob_sec_8f92a1c4e7b0d3e5f2a1";

/**
 * Centralized Axios instance with custom headers and timeout
 */
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    "x-landing-api-key": API_KEY,
    "x-app-client-key": APP_CLIENT_KEY,
    "User-Agent": "NearestLibrary-Web/1.0",
  },
});

export interface Library {
  id: string;
  libraryName: string;
  district: string;
  state: string;
  facilities: string[];
  logoUrl: string;
  totalSeats: number;
}

export interface PublicLibrariesResponse {
  status: string;
  count: number;
  libraries: Library[];
}

let cachedLibraries: Library[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes

/**
 * Fetch active public libraries using Axios with instant in-memory cache.
 * Relative endpoint path '/tenants/public/libraries' is appended to baseURL.
 */
export async function fetchPublicLibraries(): Promise<Library[]> {
  const now = Date.now();
  if (cachedLibraries && cachedLibraries.length > 0 && (now - lastFetchTime) < CACHE_TTL_MS) {
    return cachedLibraries;
  }

  try {
    const response = await apiClient.get<PublicLibrariesResponse>(
      "/tenants/public/libraries"
    );
    if (response.data?.status === "ok" && Array.isArray(response.data?.libraries)) {
      cachedLibraries = response.data.libraries;
      lastFetchTime = now;
      return cachedLibraries;
    }
    return cachedLibraries || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error fetching public libraries:",
        error.response?.status,
        error.message
      );
    } else {
      console.error("Unexpected error fetching public libraries:", error);
    }
    return cachedLibraries || [];
  }
}
