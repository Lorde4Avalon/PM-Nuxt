export interface UserInfo {
    userId: number,
    username: string,
    password?: string,
    email?: string | null,
    nickname?: string
}