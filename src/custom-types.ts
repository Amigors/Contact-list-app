export type TContact = {
    id: number;
    title: string;
};

export type TProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};