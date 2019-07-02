import React, { Component } from 'react'
// import ProgressDesafios from '../svgComp/ProgressDesafios';

import { connect } from "react-redux";

class DesafiosItem extends Component {
  render() {

    const { 
      showDesafioProgress
    } = this.props;

    return (
      <React.Fragment>
        <div id="desafio" className="w-100">
          <div id="background" className="white rounded desafios-border p-3 mt-3 mb-3">
            <div className="container">
             
              {/* {showDesafioProgress.map(el => {
              console.log(el.showDesafioProgress) */}
              {/*return*/} {showDesafioProgress ?

              <div /*key={el.id}*/ className="row align-items-center">

                <div className="col-3 p-0 previewComponent-md text-center">
                  <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

              

                <div className="col-7 p-0 pl-2 d-flex flex-column justify-content-center align-items-center">

                <span id="desafio-titulo" className="text-uppercase subtitle-2 align-self-start text-uppercase">entrega</span>
                <span id="desafio-descricao" className="subtitle-2 font-weight-bold text-desafio">Entrega 12 encomendas num mes</span>

                    <div className="progress w-100 mt-2">
                      <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>


                  <span id="XP" className="pt-1 align-self-end subtitle-2 font-weight-bold">25XP</span>

                </div>

                <div className="col-2 p-0 pt-1 pl-2 d-flex flex-column justify-content-between align-items-center font-weight-bold body-1">

                  <span id="num-progresso" className="gray-l font-weight-bold subtitle-2">
                    <span className="blue-d subtitle-1 font-weight-bold p-1">1</span>/12</span>
    
              </div>
              
              </div>
             
              :
              <div className="row align-items-center">

              <div className="col-3 pl-0">
                  <img className="badges-md" src={require(`../../imgs/pages/badge-entregas.png`)} alt="" />
                </div>

              <div className="col-7 pl-3 pr-0 d-flex flex-column justify-content-center align-items-center">

                  <span className="text-uppercase subtitle-2 align-self-start text-uppercase">entrega</span>
                  <span id="desafio" className="subtitle-1 font-weight-bold pt-1 text-desafio">Entrega 12 encomendas num mes</span>

                   
                  {/* <span id="XP" className="subtitle-2">25XP</span> */}

                </div>

                <div className="col p-0 d-flex flex-column justify-content-between align-items-end subtitle-2 font-weight-bold body-1">

                <span id="XP">25XP</span>
    
              </div>
              </div>
                
              }{/* }) */}
              }
              
            </div>
          </div>
        </div>
      </React.Fragment>
           
    )}
            
}

const DesafiosItemExp = connect(null, null)(DesafiosItem);
export default DesafiosItemExp
