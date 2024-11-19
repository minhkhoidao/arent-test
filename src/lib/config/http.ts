import axios, { AxiosInstance } from 'axios';
import { api } from './api';

class HttpClient {
    private static instance: HttpClient;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: api.apiEndpoint,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static getInstance(): HttpClient {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }
        return HttpClient.instance;
    }

    public getAxios(): AxiosInstance {
        return this.axiosInstance;
    }
}

export const http = HttpClient.getInstance().getAxios();