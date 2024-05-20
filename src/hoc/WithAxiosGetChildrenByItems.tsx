import {FC, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {useLocation} from "react-router-dom";

export const WithAxiosGetChildrenByItems = (Component: FC<any>, axiosInstanse: (id: string) => Promise<AxiosResponse<any>>) => {

    const WithAxiosGetChildrenByItemsComponent = (props: any) => {
        const {state} = useLocation()
        const [items, setItems] = useState<any>([])
        useEffect(() => {
            axiosInstanse(state).then(value => setItems(value.data))
        }, [state]);

        return <Component items={items} {...props}/>
    }
    return WithAxiosGetChildrenByItemsComponent
};