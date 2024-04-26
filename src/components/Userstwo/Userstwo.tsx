import React, {FC, memo} from 'react';
import getallusers from "../../servises/users.api";
import IUserProps from "../../models/userProps";
import Usertwo from "../Usertwo/Usertwo";
import Withaxios from "../../hoc/withaxios";
import IUsertwopropsmodel from "../../models/IUserstwoprops";

type Userstwoprop<T> = T & IUserProps;
const Userstwo:FC<Userstwoprop<IUsertwopropsmodel>> = memo(({items, hendler}) => {

    return (
        <div>
            <hr/>
            {
                items.map(({id, name, email}) => <Usertwo key={id} id={id} name={name} email={email} hendler={hendler} />)
            }
            <hr/>
        </div>
    );
});

export default Withaxios(Userstwo, getallusers)