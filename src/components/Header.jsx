import { FaHome,FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useTodo } from '../hooks/useTodo';
import { Avatar } from '@mui/material';
import UserPhoto from '../assets/user.jpg'

export function Header() {
    const {searchTodo} = useTodo();

    const [searchValue,setSearchValue] = useState('')

    const handleChange = (e) =>{
        setSearchValue(e.target.value)
        searchTodo(e.target.value)
    }
    return (
        <header className='header'>
            
            <span className='header__icon'>
                <FaHome size={25} color='white' />
            </span>
            <h1>Todoist-Krittayot</h1>
            <div className='header__search__container'>
                <span className='header__search__icon'>
                    <FaSearch/>
                </span>
                <input 
                type='text' 
                className='header__search__input' 
                placeholder='search' 
                onChange={handleChange}
                value={searchValue}
                />
            </div>
            <div>
                <Avatar src={UserPhoto} alt='user-profile' sx={{width: 45, height: 40, cursor: 'pointer'}}/>
            </div>
        </header>
    );
}
