export interface App {
  appId: string;
  title: string;
  timestamps: {
    createdAt: 'created_at';
    updatedAt: 'updated_at';
  };
  status: {
    type: string;
    enum: ['active', 'inactive'];
    default: 'active';
  };
}
