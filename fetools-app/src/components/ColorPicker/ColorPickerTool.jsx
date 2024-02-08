import { useEffect, useRef, useState } from "react";
import { getColorString } from "./ColorPickerUtils";
import CustomPicker from './CustomPicker';
import alphaBckgrnd from '../../assets/transparency_background.svg'

export default function ColorPickerTool({ 
  colorData, 
  setColorData, 
  handleQuery,
  setInputOnFocus,
  inputOnFocus,
  className 
}) {

  const parentRef = useRef();

  const handleColorChange = (newColorData) => {
    setColorData(newColorData)
  };

  useEffect(()=>{
    const backgroundColor = getColorString({...colorData.color, a: colorData.alpha},'hsl')
    const preview = parentRef.current.querySelector('#preview-container')

    preview.style.background = `
    linear-gradient(90deg, ${backgroundColor}, ${backgroundColor}), 
    url(${alphaBckgrnd}) repeat 50%/220%
    `
  },[colorData])

  return (
    <>
      <section ref={parentRef} id="color-picker-container" className={className}>
        <div id='preview-container' className="h-24 mb-3 rounded-tr-2xl">
        </div>
        <CustomPicker
        colorData={colorData}
        handleColorChange={handleColorChange}
        handleQuery={handleQuery}
        inputOnFocus={inputOnFocus}
        setInputOnFocus={setInputOnFocus}
        />
      </section>
    </>
  );

    function updateSize(){
        const currentParentWidth = parentRef.current.offsetWidth;
    }

}
