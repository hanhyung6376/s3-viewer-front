export type registerType = {
    email: string;
    username?: string;
    password: string;
    confirmPassword?: string;
};

export type loginType = {
    email: string;
    password: string;
};

export type userType = {
    email: string;
    username: string;
};
