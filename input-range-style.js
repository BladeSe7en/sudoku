// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';
import {backGroundBlue} from "./colors";
import {color1} from "./colors";
import {color2} from "./colors";
import {color3} from "./colors";2
// eslint-dis3ble-next-line no-l3ne-blocks
{ /* language=CSS */ }
const Style = css`
.input-range__slider {
  appearance: none;
  background: var(--color2);
  border: 1px solid var(--color1);
  border-radius: 100%;
  cursor: pointer;
  display: block;
  height: 1rem;
  margin-left: -0.5rem;
  margin-top: -0.65rem;
  outline: none;
  position: absolute;
  top: 50%;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;A
  width: 1rem; }
  .input-range__slider:active {
    transform: scale(1.3); }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2); }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none; }

.input-range__slider-container {
  transition: left 0.3s ease-out; }

.input-range__label {
  color: var(--color3);
  font-size: 0.8rem;
  transform: translateZ(0);
  white-space: nowrap; }

.input-range__label--min,
.input-range__label--max {
  bottom: -1.4rem;
  position: absolute; }

.input-range__label--min {
  left: 0; }

.input-range__label--max {
  right: 0; }

.input-range__label--value {
  position: absolute;
  top: -1.8rem; }

.input-range__label-container {
  left: -50%;
  position: relative; }
  .input-range__label--max .input-range__label-container {
    left: 50%; }

.input-range__track {
  background: #eeeeee;
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;
  height: 0.3rem;
  position: relative;
  transition: left 0.3s ease-out, width 0.3s ease-out; }
  .input-range--disabled .input-range__track {
    background: #eeeeee; }

.input-range__track--background {
  left: 0;
  margin-top: -0.15rem;
  position: absolute;
  right: 0;
  top: 50%; }

.input-range__track--active {
  background: var(--color3); }

.input-range {
  height: 1rem;
  position: relative;
  margin-top: 1.2em;
  margin-bottom: 1.4em;
}
  
.Popover {
    z-index: 2000;
}
.Popover-body {
    display: inline-flex;
    flex-direction: column;
    padding: .5rem 1rem;
    background: white;
    border-radius: 0.3rem;
    opacity: .95;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
    font-size: 14px;
}

.Popover-tipShape {
    fill: ${backGroundBlue};
}

.Popover-white .Popover-tipShape {
    fill: #00bcd4;
}

.Popover-white .Popover-body {
    background: white;
}

.btn {
  color: white;
  background-color: black;
  margin-bottom: 30px;
  height: 30px;
  width: 50px;
}

padding: 10px;
font-size: 16px;
font-weight: bold;
border: none;
width: 182px;
}

.dropdown {
display: inline-block;
width: 182px;
}

.dropdown-content {
  left: 20px;
  display: none;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  position: absolute;
  top: 50px;

}

.dropdown-content input.radio {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
}

.btns {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .group {
  background-color: var(--color3);
  color: var(--color1);
}

.dropbtn {
  width: 130px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.label {
  display: inline-block;
  width: 100px;
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  color: var(--color1);
}

body {
  background-color: var(--color2)
}
.get-started {
  margin-top: .5em;
  border-radius: .25em;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;
  transition: all .25s;
  padding: 5px 10px;
  font-size: 1.4em;
  background-color: var(--color3);
  box-shadow: 0 2px 4px 0 var(--color3).darken(0.5).hsl().string()};
  display: flex;
  align-items: center;
}
.get-started:active {
  transform: translate(0px, 5px);
  box-shadow: 0 1px 0 0;
  margin-top: .5em;
  border-radius: .25em;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;
  transition: all .25s;
  padding: 5px 10px;
  font-size: 1.4em;
}

:root {
  --color1: rgb(0,150,0);
  --color2: rgb(0,100,0);
  --color3: rgb(0,255,0);
}


  `;

export default Style;
