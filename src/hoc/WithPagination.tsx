import React, {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

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

        return <div>
            <h1>hocPaginated</h1>
            <Component items={itemPaginationResp.items} {...props}/>
            <div>

                <button disabled={!itemPaginationResp.prev} onClick={() => {
                    setterPage('prev')
                }}>prev
                </button>
                <button disabled={!itemPaginationResp.next} onClick={() => {
                    setterPage('next')
                }}>next
                </button>

            </div>
        </div>
    }

    return WithPaginationComponent


}