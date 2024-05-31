import React, {FC, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {useSearchParams} from "react-router-dom";
import ButtonsComponent from "../Componnts/ButtonsComponent/ButtonsComponent";

export const WithPagination = (Component: FC<any>, axiosService: (page: string) => Promise<any>) => {

    const WithPaginationComponent = (props: any) => {
        const [itemPaginationResp, setItemPaginationResp] = useState<any>({})
        const [qwerty, setQwerty] = useSearchParams({page: '1'})

        useEffect(() => {
            axiosService(qwerty.get('page') || '1').then(value => {
                if (value)
                    setItemPaginationResp(value)
            })
        }, [qwerty]);
        const setterPage = (page: string) => {
            switch (page) {
                case 'prev':
                    setQwerty({...itemPaginationResp.prev});
                    break;
                case 'next':
                    setQwerty({...itemPaginationResp.next});
                    break
            }
        }

        return <div><Component items={itemPaginationResp.items} {...props}/>
            <ButtonsComponent setterPage={setterPage}/></div>
    }

    return WithPaginationComponent


}