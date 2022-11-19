import { defineStore } from "pinia";
import { UserInfo } from "~~/types";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            authToken: null,
            userInfo: null as UserInfo | null
        }
    },
    persist: true
})