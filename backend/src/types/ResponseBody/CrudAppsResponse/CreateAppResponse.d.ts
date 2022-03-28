export interface CreateAppResponse {
    message: string;
    appId: string;
    title: string;
    timestamps: {
        createdAt: string;
        updatedAt: string;
    },
    status: string
}