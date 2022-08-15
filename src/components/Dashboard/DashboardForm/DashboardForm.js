import { useState } from "react";
import { generateDays } from "../../../util/util";
import "./DashboardForm.scss"

const DashboardForm = () => {
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('2022');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleCountry = ({target}) => {
    setCountry(target.value);
  }

  const handleYear = ({ target }) => {
    setYear(target.value);
  };

  const handleMonth = ({ target }) => {
    setMonth(target.value);
  };

  const handleDay = ({ target }) => {
    setDay(target.value);
  };

  const handleSubmit = () => {
    let queries = '';
    if (country !== "") {
      queries += `&country=${country}`;
    }
    if (year !== "") {
      queries += `&year=${year}`;
    }
    if (month !== "") {
      queries += `&month=${month}`;
    }
    if (day !== "") {
      queries += `&day=${day}`;
    }
  }

  return (
    <div className="DashboardForm">
      <div>
        <select name="country" onChange={handleCountry}>
          <option value=''>Any country</option>
          <option value="GH">Ghana</option>
          <option value="DE">Germany</option>
          <option value="RW">Rwanda</option>
        </select>
      </div>
      <div>
        <select name="year" onChange={handleYear}>
          <option value='2022'>2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div>
        <select name="month" onChange={handleMonth}>
          <option value=''>Any month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <div>
        <select name="day" onChange={handleDay}>
          {generateDays()}
        </select>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default DashboardForm;