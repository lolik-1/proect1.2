import About from "./Components/About";
import CardsEg from "./Components/CardsEg";
import CardsMer from "./Components/CardsMer";
import China from "./Components/China";
import Exames from "./Components/Exames";
import HeaderContact from "./Components/HeaderContact";
import HeaderNavbar from "./Components/HeaderNavbar";
import HeroSlider from "./Components/MainHeroSlider";
import School from "./Components/School";
import Schedule from "./Components/Schedule";
import AboutFotter from "./Components/AboutFotter";
import Icons from "./Components/Icons"

function App() {

  const cardseg = [
    {
      Title:'Massa fringilla rhoncus purus gravida magnis. ', ImgUrl:'./img/CardsEG.png'
    },
    {
      Title:'Erat magna at elementum faucibus tristique lorem. ', ImgUrl:'./img/CardsEG1.png'
    },
    {
      Title:'Libero at pulvinar sagittis odio et luctus mattis.', ImgUrl:'./img/CardsEG2.png'
    },
    {
      Title:'Laoreet ut aliquam rhoncus lectus. Faucibus.', ImgUrl:'./img/CardsEG3.png'
    },
  ]

  const cardsmer = [
    {
      Title: "Sed sem vulputate habitant quis eu, vitae quis porttitor augue. " , ImgUrl:"./img/CardsMer.png" , SubTitle:"Elementum, sed viverra volutpat nam lacus egestas. Scelerisque quisque egestas maecenas fermentum semper auctor massa tincidunt. Tristique pulvinar commodo fermentum neque. Elementum tortor."
    },
    {
      Title: "Magna rhoncus facilisi aliquam odio tempus. Non felis cras." , ImgUrl:"./img/CardsMer1.png" , SubTitle:"Tempus libero commodo velit ut aliquam. Sagittis, tristique porttitor platea eu imperdiet interdum cras. Hac blandit sed integer nibh diam in lacus ac. Congue nibh id rhoncus tincidunt imperdiet."
    },
    {
      Title: "Id adipiscing aliquet erat mattis. Cursus metus malesuada congue." , ImgUrl:"./img/CardsMer2.png" , SubTitle:"Dis non mauris placerat in dictum ullamcorper adipiscing morbi dignissim. Commodo dolor ornare nibh sed pretium tellus. Urna, imperdiet id ac venenatis erat mattis risus, molestie. Felis porta."
    },

    
  ]

  const infoSchool = [
    {
      Title:"Новости"
    },
    {
      Title:"Мероприятия"
    },
    {
      Title:"Фотогалерея"
    },
    {
      Title:"Контакты"
    },
    {
      Title:"Отзывы"
    },
  ]

  const exames = [
    {
      Title:"MSK 1"
    },
    {
      Title:"OPT"
    },
    {
      Title:"YSV"
    },
    {
      Title:"NNB"
    },
    {
      Title:"Порядок регистрации на онлайн экзамен"
    },
    {
      Title:"Порядок регистрации на очный экзамен"
    },
    {
      Title:"Расписание экзаменов"
    },
  ]

  const china = [
    {
      Title:"Стипендиальные программы"
    },
    {
      Title:"Лингвистические лагеря"
    },
    {
      Title:"Оформление визы на обучение"
    }
  ]

  const schedule = [
    {
      Title:"Расписание занятий"
    },
    {
      Title:"Курсы и стоимость"
    },
    {
      Title:"Расписание работы кассы"
    }
  ]

  const aboutfotter = [
    {
      Title:"Основные сведения"
    },
    {
      Title:"Структура и органы управления образовательной организацией"
    },
    {
      Title:"Документы"
    },
    {
      Title:"Образование"
    },
    {
      Title:"Образовательные стандарты"
    },
    {
      Title:"Руководство. Педагогический (научно-педагогический) состав<"
    },
    {
      Title:"Материально-техническое обеспечение и оснащенность образовательного процесса"
    },
    {
      Title:"Доступная среда"
    },
  ]

  const icons = [
    {
      ImgUrl:"./img/Vk.svg"
    },
    {
      ImgUrl:"./img/You.svg"
    },
    {
      ImgUrl:"./img/Tg.svg"
    },
    {
      ImgUrl:"./img/Chat.svg"
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div className="m-auto xl:w-[1300px] px-5">
          <HeaderContact/>
          <div className="flex items-center justify-between h-[80px] my-10 lg:my-0">
            <img className="hidden lg:flex" src="./img/Logo.png"></img>
            <HeaderNavbar/>
          </div>
        </div>
      </header>
      <main className="w-full pb-[100px]">
        <div className="bg-hero h-[700px] flex items-center">
          <div className="m-auto xl:w-[1300px]">
            <HeroSlider/>
          </div>
        </div>  
        <div className="m-auto xl:w-[1300px] py-20">
          <About/>
        </div>
        <div className="m-auto xl:w-[1300px]">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-5xl font-extrabold text-center pt-[150px]">Курсы обучения</h2>
            <div className="flex items-center flex-wrap  justify-center gap-7">
              <button className="bg-red-500 w-[175px] h-[68px] text-white ">(учебный год с сентября по май)</button>
              <button className="bg-red-500 w-[175px] h-[68px] text-white ">(учебный год с сентября по май)</button>
              <button className="bg-red-500 w-[175px] h-[68px] text-white ">(учебный год с сентября по май)</button>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-10 sm:gap-0  justify-center sm:justify-between xl:w-[1200px]">
                  <button className="text-2xl font-bold w-[300px] hover:text-red-500">Испанский язык <br/> для детей</button>
                  <button className="text-2xl font-bold w-[300px] hover:text-red-500">Испанский язык <br/>для взрослых</button>
                  <button className="text-2xl font-bold w-[300px] hover:text-red-500">Индивидуальные занятия и минигруппы</button>
                  <button className="text-2xl font-bold w-[300px] hover:text-red-500">Подготовка к <br/> международным экзаменам</button>
              </ul>
            </nav>
          </div>
        </div>
        <div className="m-auto xl:w-[1300px]">
            <h2 className="text-5xl font-extrabold text-center py-[150px]">Экзамены</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {cardseg.map((obj) =>(
                <CardsEg
                  Title = {obj.Title}
                  ImgUrl = {obj.ImgUrl}
                />
              ))}
            </div>
        </div>
        <div className="m-auto xl:w-[1300px]">
          <h2 className="text-5xl font-extrabold text-center py-[150px]">Мероприятия</h2>
          <div className="flex flex-wrap justify-center gap-6 px-5 xl:px-0">
            {cardsmer.map((obj) =>(
              <CardsMer
              Title={obj.Title} 
              ImgUrl={obj.ImgUrl}
              SubTitle={obj.SubTitle}
              />
            ))}          
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-slate-200">
        <div className=" m-auto xl:w-[1300px] px-5 flex justify-between flex-wrap border-b-2 border-gray-300 py-14 gap-10 ">
          <div className="w-[217px] text-sm flex flex-col xl:gap-12 gap-[120px]">
            <h2 className="font-bold uppercase">ШКОЛА испанского ЯЗЫКА «ЛаВИта» в петербурге</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-8"><img src="./img/Vector.svg"></img>Лиговский пр. 133 Е</li>
              <li className="flex gap-8"><img src="./img/Vector1.svg"></img>+7 (911) 123-45-67</li>
              <li className="flex gap-8"><img src="./img/Vector2.svg"></img>lavita_school@gmail.com</li>
            </ul>
              {
                icons.map((obj) => {
                  <Icons ImgUrl = {obj.ImgUrl}/>
                })
              }
          </div>
          <div className="w-[210px] flex flex-col gap-[25px]">
            <h2 className="font-bold uppercase">О нас</h2>
            {
              aboutfotter.map((obj) =>(
                <AboutFotter Title={obj.Title}/>
              ))
            }
          </div>
          <div className="w-[200px] flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[25px]">
              <h2 className="font-bold uppercase">Расписание и оплата</h2>
              {
                schedule.map((obj) =>(
                  <Schedule Title={obj.Title}/>
                ))
              }
            </div>
            <div className="flex flex-col gap-[25px]">
              <h2 className="font-bold uppercase">Обучение в китае</h2>
              {china.map((obj) =>(
                <China Title={obj.Title}/>
              ))}
            </div>
          </div>
          <div className="w-[210px] flex flex-col gap-[25px]">
            <h2 className="font-bold uppercase">Экзамены</h2>
              {
                exames.map((obj) =>(
                  <Exames Title={obj.Title}/>
                ))
              }
          </div>
          <div className="w-[210px] flex flex-col gap-[25px]">
            <h2 className="font-bold uppercase">Школа</h2>
            {
              infoSchool.map((obj) =>(
                <School Title={obj.Title}/>
              ))
            }
          </div>
        </div>
        <div className="xl:w-[1300px] xl:px-0 px-5 m-auto flex justify-between py-[25px]">
            <h2 className="text-gray-400">© «ЛАВИТА» 2021</h2>
            <h2 className="text-gray-400">Разработано d-e-n.ru</h2>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
