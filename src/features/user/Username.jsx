import { useSelector } from 'react-redux';
import { userSelector } from './userSlice';

function Username() {
  const username = useSelector(userSelector).username;
  if (!username) {
    return null;
  }
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
