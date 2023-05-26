function CardsMer ({Title, SubTitle, ImgUrl}){
    return(
        <div className="w-[416px] flex flex-col gap-4  ">
              <img src={ImgUrl}></img>
              <h3 className="font-bold text-2xl ">{Title}</h3>
              <p>{SubTitle}</p>
              <button className="w-[163px] h-[58px] bg-red-500 text-white ">Подробнее</button>
        </div>
    )
}

export default CardsMer;