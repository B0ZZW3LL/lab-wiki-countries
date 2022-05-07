import { Link, } from "react-router-dom"; 

function CountriesList(props) {
  
  const { countriesArray } = props
  
  return (
      <div className="list-group">
        <ul>
          {countriesArray.map((element, index) => {
            return (
              <div className="list-group-item list-group-item-action" key={element.alpha3Code}>
                <Link to={`/${element.alpha3Code}`}>{element.name.common}</Link>
              </div>
            )
          })}
        </ul>
      </div>
  )
}

export default CountriesList;