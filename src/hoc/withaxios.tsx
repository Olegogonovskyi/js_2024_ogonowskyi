import React, {FC, useEffect, useState} from 'react';
import {AxiosResponse} from "axios";

const Withaxios = (Component:FC<any>, axiosins: () => Promise<AxiosResponse<any>>) => {


    const WithAxiosComponent = (props:any) => {
        const [items, setItems] = useState<any>([])

        useEffect(() => {
            axiosins().then(value => setItems(value.data))
        }, []);
        return <Component items={items} {...props}/>
    };
    return WithAxiosComponent
};

export default Withaxios;
