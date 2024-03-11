import React from 'react';
import tituloSobreLaBoda from "../../assets/imagenes/SOBRELABODA.png";

const SobreLaBoda = () => {
  return (
    <>
        <div className='sobreBoda-imagen'>
            <img src={tituloSobreLaBoda} alt="" />
        </div>
        <div className='sobreBoda-subtitulo'>
            <p>fecha y hora</p>
        </div>
        <div className='sobreBoda-fecha-hora-container'>
            <div className='sobreBoda-fecha-hora'>
                <div className='sobreBoda-fecha'>
                    <p>29</p>
                    <p>de junio</p>
                </div>
                <div className='sobreBoda-span'>
                    <span></span>
                </div>
                <div className='sobreBoda-hora'>
                    <p>3:00</p>
                    <p>de la tarde</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SobreLaBoda