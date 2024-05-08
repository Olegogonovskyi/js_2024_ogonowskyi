import {useRef} from "react";

export const usePrevious = <T, >(value: T): T |  undefined => {
  let curentValue = useRef<T>(value)
    let priviosValue = useRef<T |  undefined>()

    if (curentValue.current !== value) {
        priviosValue.current = value
    }


  return priviosValue.current


}