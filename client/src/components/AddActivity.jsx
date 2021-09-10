import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import { postActivity } from "../actions";
import style from './AddActivity.module.css'
import { RiErrorWarningFill } from 'react-icons/ri'
import MultiSelect from 'multiselect-react-dropdown';
import Logo from '../img/mapa.png'

export default function AddActivity(props) {
  const countries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const multiselectRef = useRef()
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

 
  const options = countries.map(c => {
     return { label: c.name, value: c.id }
   })
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
  function onSelect(selectedList){
    setValues({
      ...values,
      countries: selectedList.map(c => c.value)
    })   
  }

  function onRemove(selectedList){
    setValues({
      ...values,
      countries: selectedList.map(c => c.value)
    })
  }
  function handleBack(e){
    props.history.push('/countries')
  }


  function handleSubmit(e) {
    e.preventDefault();

    
    if(values.name.trim() === '' || values.difficulty === 1 || values.duration.trim() === '' || values.season === '' || values.countries.length === 0){
      setErrors(true);
      console.log('QUEEEEEEE', errors)
      return
    }

    setErrors(false)

    console.log(values.name, values.difficulty, values.duration, values.season, values.countries)
    dispatch(postActivity(values));
    

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
    multiselectRef.current.resetSelectedValues();
    

  }
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
    <div className={style.fondito2}></div> 
    <div className={style.background}>
      <div className={style.first}>
      <div>
        <img className={style.img} onClick={handleBack} src={Logo} alt='image not found'/>
      </div>      
      {
        errors? <p className={style.warning}><RiErrorWarningFill/>All fields are required</p> : null 
      }
      </div>
      <form className={style.container} onSubmit={handleSubmit} action='#section-1'>
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
        <label className={style.labelCountry}>Select Country:</label>
        <MultiSelect
          style={{ multiselectContainer:{ width: '100%'}, searchBox:{ background: 'white' }}}
          options={options}
          displayValue="label"
          onSelect={onSelect}
          onRemove={onRemove}
          placeholder=''
          id='country'
          ref={multiselectRef}
          
        />
        </div>
        <div className={style.containerButton}>
        <button className={style.button} type="submit" onClick={topFunction}>Finish</button>
        </div>
      </form>
    </div>
    </div>
  );
}

