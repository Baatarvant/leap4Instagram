export interface UpdateAppResponse {
    appId: string;
    title: string;
    timestamps: {
        createdAt: string,
        updatedAt: string
    };
    status: string
}