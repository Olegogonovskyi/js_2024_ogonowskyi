import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import UserComponent from "../UserComponent/UserComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const UsersComponent: FC = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    let {users, statusLoading} = useAppSelector(state => state.userReducer)

    return (
        <div>
            {/*{*/}
            {/*    statusLoading ? users.map(user => <UserComponent user={user} key={user.id}/>) :*/}
            {/*        <h1>Looooaaadddiiing</h1>*/}
            {/*}*/}
            {/*<hr/>*/}
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}

                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
autoPlay={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {users.map(user => <UserComponent user={user} key={user.id}/>)}
            </Carousel>;

        </div>
    );
};

export default UsersComponent;