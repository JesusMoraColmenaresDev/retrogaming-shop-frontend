import axios from "axios";

const testBackendUrl = 'http://localhost:5000';

export async function test() {
    const response = await axios.get(`${testBackendUrl}`);
    console.log(response)
}