import React, {FC} from 'react';

const ButtonsComponent: FC = () => {

    const buttonPaginate = (page: string) => {
        switch (page) {
            case 'prev':

        }
    }

    return (
        <div>
            <button onClick={()=> buttonPaginate('prev')}>prev</button>
            <button>next</button>
        </div>
    );
};

export default ButtonsComponent;