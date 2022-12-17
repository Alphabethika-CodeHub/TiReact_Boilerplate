import { makeObservable, observable } from 'mobx';
import { http } from '../common/utils/Http';
import jwtDecode from 'jwt-decode';

export class Authentication {
    constructor(context) {
        this.context = context;
        makeObservable(this, {
            baseUrl: observable,
            dataUser: observable
        })
    }

    baseUrl = "/auth"
    dataUser = {}

    get userData() {
        if (!this.context.accessToken) {
            return {
                id: "",
                role: "",
                email: "",
                fullname: "",
                phone_number: "",
            };
        }
        return JSON.parse(atob(this.context.accessToken.split(".")[1]));
    }

    async register(data) {
        const res = await http.post(`${this.baseUrl}/register`).send(data)
        return res
    }

    async login(data) {
        // Post Hit Login.
        const res = await http.post(`${this.baseUrl}/login`).send(data);

        // Set Token to LocalStorage.
        this.context.setToken(res.body.token)

        // Decoded Token Response.
        const decodedToken = jwtDecode(this.context.accessToken);

        // Set Datauser From Stringified Decoded Token.
        localStorage.setItem("userData", JSON.stringify(decodedToken));
    }

    async logout() {

    }
}