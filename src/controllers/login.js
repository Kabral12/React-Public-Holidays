const BASE_URL = "https://react-public-holidays-backend.herokuapp.com";

const LoginUser = async (email, password) => {
    const loginDetails = {email, password};
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
    });

    const jsonResponse = await response.json();
    if (response.ok) {
        return {
            status: true,
            username: jsonResponse.username
        };
    }  else {
        return jsonResponse;
    }
}

export default LoginUser;