import React from 'react';
// import { userService } from '../services';
import { getCookie } from '../utils/cookie';

const Profile = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [userDataLoading, setUserDataLoading] = useState(false);

  const userId = JSON.parse(getCookie('userData'));

  return (
    <div>
      <h1> My Profile!</h1>
      <p>
        User NAME :
        {userId}
      </p>
    </div>
  );
};

export default Profile;
