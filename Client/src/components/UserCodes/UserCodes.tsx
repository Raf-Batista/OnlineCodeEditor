// @ts-nocheck
import './UserCodes.css';
import { Code } from '../';

interface UserCodesProps {
    user: {}
}

const UserCodes: React.FC<UserCodesProps> = ({ user, load, history }) => {
    console.log(user)
    return (
        <div className="user-codes">
            {user.codes && user.codes.map((code) => <Code code={code} load={load} history={history} />)}
        </div>
    )
}

export default UserCodes;
