const BASE_URL = "https://react-public-holidays-backend.herokuapp.com";

const CreateUser = async (fullname, email, password) => {
    const response = await fetch(`${BASE_URL}/users?email=${email}`);
    const jsonResponse = await response.json();

    if (jsonResponse.error) {
        return jsonResponse;
    } else if (jsonResponse.length === 0){
        const newUser = {fullname, email, password}
        const response = await fetch(`${BASE_URL}/users/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });
        return await response.json();
    }
}

export default CreateUser;