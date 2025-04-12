import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../app/store'
import { SignOutRequest } from '../../../features/Auth/AuthApi'
import { logout } from '../../../features/Auth/AuthSlice'
import { truncate } from '../../../utils/stringUtil'

interface UserBoxProps {
  MenuOpen: boolean;
  SetMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserBox: React.FC<UserBoxProps> = ({ MenuOpen, SetMenuOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (MenuOpen && !document.getElementById("user-box")?.contains(event.target as Node)) {
        SetMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [MenuOpen]);

  const userOptions = useMemo(() => [
    { name: 'Hesap', link: '/account' },
    {
      name: 'Çıkış',
      onclick: async () => {
        await dispatch(SignOutRequest())
        await dispatch(logout())
        window.location.reload()
      },
      customClass: '!text-red-500'
    }
  ], [dispatch])

  const handleClick = useCallback((item: { name: string; link?: string; onclick?: () => void }) => {
    if (item.onclick) return item.onclick()
    if (item.link) return navigate(item.link)
  }, [navigate])

  return (
    <div id="user-box" className="relative mt-8 w-48 bg-white dark:bg-black border dark:border-neutral-800 rounded-lg">
      <div className="flex items-center justify-center px-4 py-2 border-b dark:border-neutral-800">
        <h2 className="text-sm lowercase text-black dark:text-white">{truncate(user?.username || 'kullanıcı', 14)}</h2>
      </div>

      <ul className='flex flex-col space-y-2 mx-2 my-4'>
        {userOptions.map((item, index) => (
          <button
            key={index}
            className={`flex items-center justify-between text-black dark:text-white w-full py-3 px-4 rounded-lg text-left hover:ring-1 text-base duration-300 ${item.customClass || ''}`}
            onClick={() => handleClick(item)}
          >
            {item.name}
            <span className="text-base">&rarr;</span>
          </button>
        ))}
      </ul>


    </div>
  )
}

export default UserBox