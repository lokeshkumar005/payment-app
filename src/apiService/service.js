// services/apiService.js
let API_BASE_URL = 'https://13.48.251.202.nip.io/api/data';
// Update with your actual API base URL

const apiService = {
    getUser: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/view`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('Failed to fetch payment');
            }
        } catch (error) {
            throw error;
        }
    },
    getUserReceipt: async (donorInfoId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/view/${donorInfoId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('Failed to fetch payment');
            }
        } catch (error) {
            throw error;
        }
    },
    addPayment: async (userData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            return response;
        } catch (error) {
            throw error;
        }
    },
    // Add other API calls as needed
};

export default apiService;