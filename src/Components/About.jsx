function About (){
    return(
        <div className="flex items-center justify-center    xl:justify-between">
          <fieldset className="border-4  border-red-500 w-[300px]  flex justify-center   sm:w-[638px]  ">
            <legend align="center" className="text-5xl font-extrabold">Школа “Лавита”</legend>
            <div className="flex flex-col gap-4 text-lg w-[300px] p-5 my-14 leading-[140%]   sm:p-0 sm:w-[458px]">
              <p>Eleifend purus dictum nunc, aenean tincidunt massa libero. Aliquam nullam enim at ac. Imperdiet risus mi quis vitae non. Cursus scelerisque donec vulputate ante etiam libero donec ridiculus at. Phasellus at nullam dapibus ut in. Vulputate consequat purus tellus vel cras. Eu sollicitudin arcu faucibus turpis venenatis.</p>
              <p>Aliquet auctor tempus, erat at interdum eu. Sapien amet, amet sit non at sodales volutpat. Cursus et laoreet eget velit a tortor eu nibh mattis. Mi facilisi ultrices maecenas id.</p>
            </div>
          </fieldset>
          <img width={500} height={500} className="opacity-10 hidden xl:block" src="./img/Logo.png"></img>
        </div>
    )
}
export default About;