import React from 'react';

const UserCard = ({user}) => {
    console.log(user);
    return (
            <div className='slide-content'>
                <div className='card-wrapper'>
                    <div className='card'>
                        <div className='image-content'>
                            <span className='overlay'></span>
                            <div className='card-image'>
                                <img src={user.imgUrl} alt="userImg" className='card-img' />
                            </div>
                        </div>
                        <div className='card-content'>
                        <h3 className='name'>{user.name}</h3>
                        <p>{user.role}</p>
                        {/* <p>{user.project}</p> */}
                        <p>projects</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default UserCard;