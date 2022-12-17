import { computed, observable, makeObservable } from "mobx";
import { Authentication } from "./Authentication";

export class Store {
    accessToken = "";
    refreshToken = "";

    constructor() {
        makeObservable(this, {
            accessToken: observable,
            refreshToken: observable,
            isLoggedIn: computed,
        });
    }

    // START STORES
    authentication = new Authentication(this);
    // category = new Category(this);
    // company = new Company(this);
    // document = new Document(this);
    // folder = new Folder(this);
    // ui = new UI(this);

    get isLoggedIn() {
        return !!this.accessToken;
    }

    setInitialToken(accessToken, refreshToken) {
        if (accessToken === "null") {
            accessToken = null;
        }

        if (refreshToken === "null") {
            refreshToken = null;
        }

        this.setToken(accessToken, refreshToken);
    }

    setToken(accessToken, refreshToken) {
        if (accessToken === "null") {
            accessToken = null;
        }

        if (refreshToken === "null") {
            refreshToken = null;
        }

        this.accessToken = accessToken;
        this.refreshToken = refreshToken;

        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
    }
}