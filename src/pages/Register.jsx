import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const initialState = {
  groupId: '',
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember, groupId } = values;

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleMemberChange = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember, groupId } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Missing fields');
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password, groupId }));
  };
  return (
    <>
      <div className='min-h-screen min-w-screen flex items-center justify-center'>
        <div className='border-2  flex  flex-col items-center p-6'>
          <h1>{values.isMember ? 'Login' : 'Register'}</h1>
          <Logo />
          <form className='flex  flex-col gap-8' onSubmit={handleSubmit}>
            {!isMember ? (
              <label className='flex flex-col'>
                Name:
                <input
                  className='bg-gray-300 py-1 rounded-md pr-40'
                  type='text'
                  value={name}
                  name='name'
                  onChange={handleChange}
                />
              </label>
            ) : (
              ''
            )}
            <label className='flex flex-col'>
              GroupID:
              <input
                className='bg-gray-300 py-1 rounded-md pr-40 mt-2'
                type='text'
                value={groupId}
                name='groupId'
                onChange={handleChange}
              />
            </label>
            <label className='flex flex-col '>
              Email:
              <input
                className='bg-gray-300 py-1 rounded-md pr-40 mt-2'
                type='email'
                value={email}
                name='email'
                onChange={handleChange}
              />
            </label>
            <label className='flex flex-col'>
              Password:
              <input
                className='bg-gray-300 py-1 rounded-md pr-40 mt-2'
                type='password'
                value={password}
                name='password'
                onChange={handleChange}
              />
            </label>
            <button
              type='submit'
              className='border-2 border-cyan-400 mx-10 rounded-md py-1 mb-4'
              disabled={isLoading}
            >
              {isLoading ? 'Loading....' : 'Submit'}
            </button>
          </form>
          <p>
            {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
            <button className='text-cyan-400' onClick={handleMemberChange}>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
