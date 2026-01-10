import { jwtDecode } from "jwt-decode";

export default function checkRole(token) {
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    return role;
}