export interface UserInfo {
    userId: number,
    username: string,
    password?: string,
    email?: string | null,
    nickname?: string
}

export interface Project {
    projectId?: number,
    projectName: string,
    projectDescription?: string,
    projectStatus?: string,
    projectManager: number | string,
    inviteCode: string,
    projectCreatedDate: string,
    projectUpdatedDate: string,
    projectEndDate: string,
    users: any,
    tasks: any,
    isSelect: boolean
}

export interface Task {
    taskId?: number;
    taskName: string;
    status: string;
    startTime?: string;
    updateTime?: string;
    endTime?: string;
    description?: string;
    taskOwner?: any;
}