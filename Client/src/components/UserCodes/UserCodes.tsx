// @ts-nocheck
import React from 'react';
import './UserCodes.css';
import { Code } from '../';

interface UserCodesProps {
    user: {}
}

const UserCodes: React.FC<UserCodesProps> = ({ user, load, history }) => {
    return (
        <div className="user-codes">
            <h2>My Saved Code</h2>
            {user.codes && user.codes.map((code) => <div key={code.id}><Code code={code} load={load} history={history} /></div>)} 
        </div>
    )
};

export default UserCodes;
