import axios from "axios";

export const loginUser = async(email: string, password: string) => {
    const res = await axios.post("/user/login", { email: email, password: password});

    if(res.status !== 200   ){
        throw new Error('Could not login');
    }
    const data = await res.data;
    return data;
};