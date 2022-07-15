
function App() {
  return (
    <div className="main inline">
      
      <div className="left-block">
        <button onClick="" className="button-left-block">
          <a className="button-left-text">Eng</a>
        </button>
      </div>

      <div className="content">
        <div>
          <h3>Need for drive</h3>
          <div>
            <img></img>
            <p>Ульяновск</p>
          </div>
        </div>
        <div className="content-center">
          <h1>Каршеринг</h1>
          <h1>Need for drive</h1>
          <p>Поминутная аренда авто твоего города</p>
        </div>
        <button className="button-center" title="Забронировать"></button>
        <div>
          <p>© 2016-2019 «Need for drive»</p>
          <p>8 (495) 234-22-44</p>
        </div>
      </div>

      <div className="right-block">
        <h2>Бесплатная парковка</h2>
        <p>Оставляйте машину на платных городских 
           парковках и разрешенных местах, не нарушая ПДД,
           а также в аэропортах.
        </p>
        <button className="" title="Подробнее"></button>
      </div>
    </div>
  );
}

export default App;
