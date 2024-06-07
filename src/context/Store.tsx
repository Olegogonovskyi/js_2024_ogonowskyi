import {IuserModel} from "../models/IuserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    usersStore: {
        allUsers: IuserModel[],
        loadUsers: (users: IuserModel[]) => void,
        setFavoriteUser: (obj: IuserModel) => void,
        delFavoriteUser: () => void,
        favoriteUser: IuserModel | null
    },
    postsStore: {
        allPosts: IPostModel[],
        loadPosts: (users: IPostModel[]) => void,
        favoritePost: IPostModel | null
        setFavoritePost: (obj: IPostModel) => void
    },
    commentsStore: {
        allComments: ICommentModel[],
        loadComments: (comments:ICommentModel[] ) => void;
    }

}

export const useStore = create<StoreType>(setState => ({
    usersStore: {
        allUsers: [],
        loadUsers: (users: IuserModel[]) => setState(state=> ({...state, usersStore: {...state.usersStore, allUsers: users}})),
        favoriteUser: null,
        delFavoriteUser: () => setState(state => ({...state,usersStore: {...state.usersStore, favoriteUser: null}})),
        setFavoriteUser: (obj: IuserModel) => setState(state=> ({...state, usersStore: {...state.usersStore, favoriteUser: obj}}))
    },
    postsStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => setState(state=> ({...state,postsStore: {...state.postsStore, allPosts: posts}})),
        favoritePost: null,
        setFavoritePost: (obj: IPostModel) => setState(state=> ({...state, postsStore: {...state.postsStore, favoritePost:obj}}))},
    commentsStore: {
        allComments: [],
        loadComments: (comments: ICommentModel[]) => setState(state=> ({...state, commentsStore: {...state.commentsStore, allComments: comments}}))
    }
}));



