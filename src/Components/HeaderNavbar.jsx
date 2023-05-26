function HeaderNavbar(){
    return(
        <nav>
            <ul className="flex flex-wrap items-center gap-5 justify-center ">
                <button className="font-bold text-sm uppercase hover:text-red-500">О нас</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Расписание и оплата</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Мероприятия</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Экзамены</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Обучение в испании</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Новости</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Фотогалерея</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Контакты</button>
                <button className="font-bold text-sm uppercase hover:text-red-500">Отзывы</button>
            </ul>
        </nav>
    )
}
export default HeaderNavbar;