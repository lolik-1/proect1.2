function CardsEg ({Title , ImgUrl}){
    return(
        <div className="w-[306px] flex flex-col  gap-4 items-center ">
            <img src={ImgUrl}></img>
            <h3 className="font-bold text-2xl text-center">{Title}</h3>
            <ul className="flex flex-col gap-4 text-center">
                <li>Sed viverra in nulla duis elit purus urna.</li>
                <li>Enim volutpat nisi, sit eget sed consectetur consectetur.</li>
                <li>Massa turpis enim, pellentesque amet morbi sagittis. Euismod morbi</li>
            </ul>
            <button className="w-[163px] h-[58px] bg-red-500 text-white ">Подробнее</button>
        </div>
    )
}

export default CardsEg;