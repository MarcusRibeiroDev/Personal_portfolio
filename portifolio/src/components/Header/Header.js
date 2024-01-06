import React from 'react'

//CSS
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.headerContainer}>
        <h1>Esse é o cabeçalho</h1>
    </header>
  )
}

export default Header