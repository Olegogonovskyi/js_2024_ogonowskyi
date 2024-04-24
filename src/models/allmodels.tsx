interface IUser {
    id: number;
    name: string;
}

interface UserProps {
    clikker: (id: number) => void;
}

export type { IUser, UserProps };
