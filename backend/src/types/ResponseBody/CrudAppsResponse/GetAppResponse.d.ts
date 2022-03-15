export interface GetAppResponse {
    appId: string;
    title: string;
    timestamps: {
        createdAt: string,
        updatedAt: string
    };
    status: string
}