import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Header() {
    return (  
        <div className="padding-x py-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-col text-center">
                    <h1 className="font-semibold text-4xl uppercase">Трошин Вячеслав</h1>
                    <h2 className="font-semibold text-xl uppercase">Junior Frontend Developer</h2>
                </div>
                <div className="hidden lg:block">
                    <nav className="flex">
                        <a className="mx-2 hover:text-stone-400 transition-all cursor-pointer select-none font-semibold text-xl"
                        onClick={()=>{alert("Раздел временно не готов")}}>Умения</a>
                        <a className="mx-2 hover:text-stone-400 transition-all cursor-pointer select-none font-semibold text-xl"
                        onClick={()=>{alert("Раздел временно не готов")}}>Опыт работы</a>
                        <a className="mx-2 hover:text-stone-400 transition-all cursor-pointer select-none font-semibold text-xl"
                        onClick={()=>{alert("Раздел временно не готов")}}>Обо мне</a>
                        <a className="mx-2 hover:text-stone-400 transition-all cursor-pointer select-none font-semibold text-xl"
                        onClick={()=>{alert("Раздел временно не готов")}}>Почему я?</a>
                    </nav>
                </div>
                <div className="block lg:hidden">
                    <DehazeIcon className="cursor-pointer" onClick={()=>{alert("123")}}/>
                    <CloseIcon className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Header;