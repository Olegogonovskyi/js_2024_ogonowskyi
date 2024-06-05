
import {IuserModel} from "../models/IuserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    usersStore: {
        allUsers: IuserModel[],
        loadUsers: (users: IuserModel[]) => void,
        setFavoriteUser: (obj: IuserModel) => void,
        favoriteUser: IuserModel | null
    },
    postsStore: {
        allPosts: IPostModel[],
        loadPosts: (users: IPostModel[]) => void,
        favoritePost: IPostModel | null
        setFavoritePost: (obj: IPostModel) => void
    },
    commetsStore: {
        allComments: ICommentModel[],
        loadComments: (comments:ICommentModel[] ) => void
    }

}

export const useStore = create<StoreType>()(setState => ({
    usersStore: {
        allUsers: [],
        loadUsers: (users: IuserModel[]) => {
            return setState(state => {return {...state, usersStore: {...state.usersStore, allUsers: users}} //todo спробувати без першого return
            })
        },
        favoriteUser: null,
        setFavoriteUser: (obj: IuserModel) => {
            return setState(state => {return {...state, usersStore: {...state.usersStore, favoriteUser: obj}}})
        }
    },
    postsStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
            return setState(state => {return {...state,postsStore: {...state.postsStore, allPosts: posts}}})
        },
        favoritePost: null,
        setFavoritePost: (obj: IPostModel) => {
            return setState(state => {return{...state, postsStore: {...state.postsStore, favoritePost:obj}}})
        }
    },
    commetsStore: {
        allComments: [],
        loadComments: (comments: ICommentModel[]) => {
            return setState(state => {return{...state, commetsStore: {...state.commetsStore, allComments: comments}}})
        }
    }
}));



