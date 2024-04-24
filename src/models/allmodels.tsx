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

interface PostsProps {
    userid: number;
}

export type { IUser, UserProps, Iuserpost, PostsProps};
