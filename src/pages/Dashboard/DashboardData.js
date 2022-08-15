import React, {useEffect, useState} from 'react'
import dataService from '../../features/dataService'
import { useDispatch, useSelector } from 'react-redux'
import Select from "react-select";
import { PreselectedValues } from './PreselectedData';

export default function DashboardData() {
  	  //filter state
      const [filters, setFilters] = useState({
        country: "",
        year: "",
        month: "",
        day: ""
      });

      const [countri, setCountri] = useState("");
      const [yr, setYr] = useState("");
      const [mant, setMant] = useState("")
      const [dey, setDey] = useState("")
      const [arr, setArr] = useState([])

      const [hoidayname, setHolidayName] = useState("")
      const [holidaylocation, setHolidayLocation] = useState("")
      const [weekDay, setHolidayWeekDay] = useState("")
      const [weekDate, setHolidayWeekDate] = useState("")





  const myData = async (getFilters)=>{
    const data = await dataService.getData(getFilters)
    // setArr(data)
    setHolidayName(data.data[0].name)
    setHolidayLocation(data.data[0].location)
    setHolidayWeekDay(data.data[0].week_day)
    setHolidayWeekDate(data.data[0].date)
  }

  const countryFilter = (coutryvalue) => {
    filters.country = coutryvalue;
    setFilters(filters);
    setCountri(coutryvalue);
    myData(filters)
   // dispatch(fetchProductbyCategoryR(filters));
 };

  const yearFilter = (catvalue) => {
     filters.year = catvalue;
     setFilters(filters);
     setYr(catvalue);
     myData(filters)
    // dispatch(fetchProductbyCategoryR(filters));
  };

  const monthFilter = (mntvalue) => {
    filters.month = mntvalue;
    setFilters(filters);
    setMant(mntvalue);
    myData(filters)
   // dispatch(fetchProductbyCategoryR(filters));
 };

 const dayFilter = (dayvalue) => {
  filters.day = dayvalue;
  setFilters(filters);
  setDey(dayvalue);
  myData(filters)
 // dispatch(fetchProductbyCategoryR(filters));
};

useEffect(() => {
  myData(filters)
}, [])

const style = {
  control: (base) => ({
    ...base,
    cursor: "pointer",
    boxShadow: "none",
    border: "none",
    width: "100%",
    borderRadius: "20px",
  }),
};


  return (
    <div className="container">
        <div className="row">
        <div className="col-md-3">
            <Select
	              styles={style}
	              className=" w-100 border-radius-0 text-dark"
	              classNamePrefix="select"
	              name="categ"
	              options={PreselectedValues.FILTER_COUNTRY}
	              getOptionLabel={(option) => option.country}
	              getOptionValue={(option) => option.country}
	              placeholder="Country"
	              components={{ IndicatorSeparator: null }}
	              onChange={(e) => {
	                countryFilter(e.key);
	              }}
	            />
            </div>
            <div className="col-md-3">
            <Select
	              styles={style}
	              className=" w-100 border-radius-0 text-dark"
	              classNamePrefix="select"
	              name="categ"
	              options={PreselectedValues.FILTER_YEAR}
	              getOptionLabel={(option) => option.year}
	              getOptionValue={(option) => option.year}
	              placeholder="Year"
	              components={{ IndicatorSeparator: null }}
	              onChange={(e) => {
	                yearFilter(e.key);
	              }}
	            />
            </div>
            <div className="col-md-3">
            <Select
	              styles={style}
	              className=" w-100 border-radius-0 text-dark"
	              classNamePrefix="select"
	              name="categ"
	              options={PreselectedValues.FILTER_MONTH}
	              getOptionLabel={(option) => option.month}
	              getOptionValue={(option) => option.month}
	              placeholder="Month"
	              components={{ IndicatorSeparator: null }}
	              onChange={(e) => {
	                monthFilter(e.key);
	              }}
	            />
            </div>
            <div className="col-md-3">
            <Select
	              styles={style}
	              className=" w-100 border-radius-0 text-dark"
	              classNamePrefix="select"
	              name="categ"
	              options={PreselectedValues.FILTER_DAY}
	              getOptionLabel={(option) => option.day}
	              getOptionValue={(option) => option.day}
	              placeholder="Day"
	              components={{ IndicatorSeparator: null }}
	              onChange={(e) => {
	                dayFilter(e.key);
	              }}
	            />
            </div>
          </div>

          <div className='col-md-12 mt-5'>
            <div className='row'>
              <div className='col-md-3'>
                Name of Holiday <br/>
               <h6> {hoidayname}</h6>
              </div>
              <div className='col-md-3'>
                Week Day
                <h6>{weekDay}</h6>
              </div>
              <div className='col-md-3'>
                Location
                <h6> {holidaylocation}</h6>
              </div>
              <div className='col-md-3'>
                Date of Holiday
                <h6> {weekDate}</h6>
              </div>
            </div>
          </div>
      </div>
  )
}
