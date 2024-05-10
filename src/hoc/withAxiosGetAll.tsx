import {FC, useEffect, useState} from "react";
import {AxiosResponse} from "axios";

const WithAxiosGetAll = (Component: FC<any>, axiosinstanse: ()=> Promise<AxiosResponse<any>>) => {
  const WithAxiosGetAllComp = (props: any) => {
    const [items, setItems] = useState<any>()
      useEffect(() => {
          axiosinstanse().then(value => setItems(value.data))
      }, []);
      return <Component items={items} {...props} />
  }
  return WithAxiosGetAllComp
};

export default WithAxiosGetAll