function HeaderContact () {
    return(
        <div className="flex items-center justify-between h-[80px] border-b">
            <h2 className="font-bold uppercase text-red-500 text-sm w-[217px] ">ШКОЛА испанского ЯЗЫКА «ЛаВИта» в петербурге</h2>
            <div>
                <ul className="gap-6 hidden lg:flex lg:items-center">
                <img src="./img/Vector.svg"></img><li className="text-sm font-normal">Лиговский пр. 133 Е</li>
                <img src="./img/Vector1.svg"></img><li className="text-sm font-normal">+7 (911) 123-45-67</li>
                <img src="./img/Vector2.svg"></img><li className="text-sm font-normal">lavita_school@gmail.com</li>
                </ul>
                <img className="hidden md:flex lg:hidden" src="./img/Logo.png"></img>
            </div>
            <button className="w-[143px] h-[40px] bg-red-500 text-white font-bold text-sm">Запись на курсы</button>
        </div>
    )
}
export default HeaderContact;