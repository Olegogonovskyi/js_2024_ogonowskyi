import {createContext} from "react";
import {IuserModel} from "../models/IuserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    usersStore: {
        allusers: IuserModel[]
    },
    postsStore: {
        allPosts: IPostModel[]
    },
    commetsStore: {
        allComments: ICommentModel[]
    }
}

const defoultValue: StoreType = {
    usersStore: {
        allusers: []
    },
    postsStore: {
        allPosts: []
    },
    commetsStore: {
        allComments: []
    }
}

const Context = createContext<StoreType>(defoultValue)

export {
    Context, defoultValue
}