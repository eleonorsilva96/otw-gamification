import React, { Component } from 'react'

//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { connect } from "react-redux";
// import { fetchViagems } from "../actions/viagems";

// const mapDispatchToProps = dispatch => {
//     return {
//       fetchViagems: viagems => dispatch(fetchViagems(viagems)),
//     };
// };

class CriarViagem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataViagem: new Date(),
      horaInicio: new Date(),
      horaFim: new Date(),
      origem: "",
      destino: "",
      tamanho: "grande",
      nomeProduto: "",
      tipo_id: 1
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange3(date) {
    this.setState({
      horaInicio: date,
    });
  }

  handleChange4(date) {
    this.setState({
      horaFim: date,
    });
  }

  // handleChange(event) {
  //     this.setState({ [event.target.id]: event.target.value });
  // }

  // handleSubmit(event) {
  //     event.preventDefault();
  //     const { origem } = this.state;
  //     const { destino } = this.state;
  //     const { tamanho } = this.state;
  //     const { nomeProduto } = this.state;
  //     const { dataViagem } = this.state;
  //     const { horaInicio } = this.state;
  //     const { horaFim } = this.state;

  //     this.props.fetchViagems({ origem, destino, tamanho, nomeProduto, dataViagem, horaInicio, horaFim });
  //     this.props.history.push('/condutores',{
  //         state: { origem, destino, tamanho, nomeProduto, dataViagem, horaInicio, horaFim }
  //     });
  //     this.setState({ origem: "" , destino: "", tamanho: "", preco: "", dataViagem: "", horaInicio: "", horaFim: ""});
  // }

  handleChange2(data) {
    // console.log(data.getDate())
    this.setState({
      dataViagem: data
    });
  }

  render() {
    const { dataViagem/*origem, destino, ,tamanho, nomeProduto*/ } = this.state;

    return (
      <div id="criar-viagem">
        <div className="container">
          <div className="row">
            <div className="col ">
              <form className="mt-4" onSubmit={this.handleSubmit}>
              <label className="pl-2 subtitle-2 text-uppercase">De</label>

              <div className="form-group mr-2 ml-2">
                  <input type="text" placeholder="Origem" id="origem" /*value={origem}*/ /*onChange={this.handleChange}*/ className="w-100 form-control-lg" />
                </div>
                  <label className="pl-2 subtitle-2 text-uppercase">Para</label>
                <div className="form-group mr-2 ml-2">              
                  <input type="text" placeholder="Destino" id="destino" /*value={destino}*/ /*onChange={this.handleChange}*/ className="form-control-lg w-100" />
                </div>

                <div className="mr-2 ml-2 d-flex justify-content-around gray-text text-uppercase">
                  <label className="col-sm pl-0 subtitle-2 align-self-left">Data</label>
                  <label className="col-sm pl-5 pr-0 subtitle-2 ">Hora</label>
                </div>

                <div className="form-group d-flex flex-row justify-content-center">
                  
                  <div className="pl-2">
                    <DatePicker
                      className="pt-2 pb-2 col-11 rounded"
                      selected={dataViagem}
                      onChange={this.handleChange2}
                      onSelect={this.handleSelect}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Data"
                    />
                  </div>
                  
                  <div>
                    <DatePicker
                      className="date-time-input-size p-2 rounded"
                      selected={this.state.horaInicio}
                      onChange={this.handleChange3}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="HH:mm"
                      timeCaption="Time"
                      placeholderText="Hora"
                    />
                  </div>
                  <span className="p-1">:</span>
                  <div>
                    <DatePicker
                      className="date-time-input-size p-2 rounded"
                      selected={this.state.horaFim}
                      onChange={this.handleChange4}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="HH:mm"
                      timeCaption="Time"
                      placeholderText="Hora"
                    />
                  </div>
                </div>

                  <label className="pl-2 subtitle-2 text-uppercase align-self-center">O que posso levar</label>

                
              <div className="form-group mr-2 ml-2 d-flex flex-column align-items-center">
                  <select id="tamanho" /*value={tamanho} onChange={this.handleChange}*/ className="custom-select custom-select-lg font-weight-normal">
                    <option value="grande">Grande&nbsp;(até 50kg)</option>
                    <option value="medio">Médio&nbsp;(até 30kg)</option>
                    <option value="pequeno">Pequeno&nbsp;(até 10kg)</option>
                  </select>
                  <div className="mt-5 primary-btn primary text-center blue-btn">

                    <button type="submit" className="btn-size btn-style white-text link-no-decoration">
                      Pesquisar
              </button>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const newMarginLeft = {
  marginLeft:'1.2rem'
}

export default CriarViagem;