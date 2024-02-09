import axiosInstance from './apiConfig';

const apiRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const access_token = localStorage.getItem("access_token");
    
    if (access_token == null) {
      return {"redirect": true};
    } 

    const response = await axiosInstance({
      method,
      url: endpoint,
      data,
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    return response.data;

  } catch (error) {


    if (error.response && error.response.status == 401) {
      const refresh_token = localStorage.getItem("refresh_token");

      try {
        const response = await axiosInstance.post('/auth/token', {
          'client_id': import.meta.env.VITE_CLIENT_ID,
          'client_secret': import.meta.env.VITE_CLIENT_SECRET,
          'grant_type': 'refresh_token',
          'refresh_token': refresh_token,
        });
        
        const access_token = response.data.access_token;
        localStorage.setItem("access_token", access_token);
        
        try {
          const res = await axiosInstance({
            method,
            url: endpoint,
            data,
            headers: {
              'Authorization': `Bearer ${access_token}`
            }
          });

          return res.data;

        } catch (error) {
          throw error;
        }

      } catch (error) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.setItem("loggedIn", "false");
        return {"redirect": true};
      }

    } else {
      throw error;
    }
  }
};

export default apiRequest;