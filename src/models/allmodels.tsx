interface IUser {
    id: number;
    name: string;
}

interface UserProps {
    clikker: (id: number) => void;
}

interface Iuserpost {
    title: string;
    body: string;
}

export type { IUser, UserProps, Iuserpost };
