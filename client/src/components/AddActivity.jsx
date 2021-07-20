import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import { postActivity } from "../actions";
import style from './AddActivity.module.css'
import { RiErrorWarningFill } from 'react-icons/ri'
import { GrStatusGood } from 'react-icons/gr'



export default function AddActivity() {
  const countries = useSelector((state) => state.countriesLoaded);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({
    name: "",
    difficulty: 1,
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());  
  }, []);

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function handleChange(e) {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }
  function handleChangeActivity(e) {
    if(e.target.checked){
      setValues((values) => ({
        ...values,
        countries: [...values.countries, e.target.value],
      }));
    }else{
      if(values.countries.includes(e.target.value)) 
      values.countries = values.countries.filter(
        c => c !== e.target.value)
      return
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    //console.log(values.countries)
    //validate 
    console.log(values.name, values.difficulty, values.duration, values.season, values.countries)
    if(values.name === '' || values.difficulty === 1 || values.duration === '' || values.season === '' || values.countries.length === 0){
      setErrors(true);
      console.log('QUEEEEEEE', errors)
      return
    }

    setErrors(false)

    
    console.log(values)
    dispatch(postActivity(values));
    
    //clean the checkbox
    countries.map(
      c => document.querySelector(`.${c.id}`).checked= false)

    //setValues
    setValues({
      name: "",
      difficulty: 1,
      duration: "",
      season: "",
      countries: [],
    });
    document.querySelector("#name").value = "";
    document.querySelector("#duration").value = "";
    document.querySelector('#difficulty').selectedIndex = 0;
    document.querySelector('#season').selectedIndex = 0;

  }
  //sort the countries
  countries.sort(function compare(a,b){
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
    return 1;
    }
    return 0;
  })

  return (
    <div>
      <h3 className={style.title}>Add a activity!</h3>
      {
        errors? <p className={style.warning}><RiErrorWarningFill/>Todos los campos son obligatorios</p> : null 
      }
      <form onSubmit={handleSubmit} action='#section-1'>
        <div className={style.checkboxnt}>
        <div className={style.item}>
        <label className={style.label}>Name:</label>
        <input
          className={style.input}
          id="name"
          name="name"
          values={values.name}
          onChange={handleChange}
        />
        </div>
        <div className={style.item}>
        <label className={style.label}>Difficulty:</label>
        <select className={style.input} id="difficulty" name="difficulty" onChange={handleChange}>
          <option defaultValue={true}></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        </div>

        <div className={style.item}>
        <label className={style.label}>Duration:</label>
        <input
          className={style.input}
          id="duration"
          name="duration"
          value={values.duration}
          onChange={handleChange}
        />
        </div>

        <div className={style.item}>
        <label className={style.label} >Season:</label>
        <select className={style.input} id='season' name="season" onChange={handleChange}>
          <option className={style.option} defaultValue={true}></option>
          <option value="summer">summer</option>
          <option value="winter">winter</option>
          <option value="spring">spring</option>
          <option value="autumn">autumn</option>
        </select>
        </div>
        </div>
        

        <label className={style.labelCountry}>Select Country:</label>
        <ul className={style.container}>
          { countries && countries.map(c =>{
            return (
              <li key={c.id}>
                <div>
                  <input
                    className={c.id}
                    type='checkbox'
                    name={c.name}
                    value={c.id}
                    onChange={handleChangeActivity}
                  />{c.name.replace(/\b\w/g, l => l.toUpperCase())}
                </div>
              </li>
            )
          })}

        </ul>
        <div className={style.containerButton}>
        <button className={style.button} type="submit" onClick={topFunction}>Finish</button>
        </div>
      </form>
    </div>
  );
}

