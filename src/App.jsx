import React, { Component } from 'react';
import HomePJ from './components/HomePJ';
import { Route, Switch } from 'react-router-dom';
import GeneralCatalogo from './components/GeneralCatalogo';
import Anillo1Default from './images/anillo1Default.png';
import Anillo2Default from './images/anillo2Default.png';
import AmuletoDefault from './images/amuletoDefault.png';
import EscudoDefault from './images/escudoDefault.png';
import CinturonDefault from './images/cinturonDefault.png';
import CapaDefault from './images/capaDefault.png';
import SombreroDefault from './images/sombreroDefault.png';
import BotasDefault from './images/botasDefault.png';
import ArmaDefault from './images/armaDefault.png';
import MonturaDefault from './images/monturaDefault.png';
import TrofeoDefault from './images/trofeoDefault.png';

class App extends Component {
  constructor() {
    super();
    this.aumentos = {
      sabiduria: 5,
      fuerza: 0,
      inteligencia: 0,
      suerte: 0,
      agilidad: 0,
      vitalidad: 0
    }
    this.caracteristicasEquipo = {
      sabiduria: 5,
      fuerza: 0,
      inteligencia: 0,
      suerte: 0,
      agilidad: 0,
      vitalidad: 1050,
      daños_de_tierra: 0,
      daños_de_agua: 0,
      daños_de_aire: 0,
      daños_de_fuego: 0
    }
    this.state = {
      lvl100PA: 1,
      lvlPJ: 200,
      stats: {
        vitalidad: this.caracteristicasEquipo["vitalidad"],
        PA: 6,
        PM: 3,
        iniciativa: 1000,
        prospección: 100,
        Al: 1,
        invocaciones: 1,
        sabiduria: 0,
        fuerza: 0,
        inteligencia: 0,
        suerte: 0,
        agilidad: 0,
        potencia: 100,
        criticos: 10,
        daños_de_tierra: 0,
        daños_de_agua: 0,
        daños_de_aire: 0,
        daños_de_fuego: 0
      },
      imagenes: {
        anillo1: Anillo1Default,
        anillo2: Anillo2Default,
        amuleto: AmuletoDefault,
        cinturon: CinturonDefault,
        sombrero: SombreroDefault,
        capa: CapaDefault,
        escudo: EscudoDefault,
        botas: BotasDefault,
        arma: ArmaDefault,
        montura: MonturaDefault,
        trofeo1: TrofeoDefault,
        trofeo2: TrofeoDefault,
        trofeo3: TrofeoDefault,
        trofeo4: TrofeoDefault,
        trofeo5: TrofeoDefault,
        trofeo6: TrofeoDefault
      }
    }
    this.handleChangeState = this.handleChangeState.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  handleChangeState(isAtribute, param, event) {
    if (isAtribute) {
      let val
      if (event.target.value === "") {
        val = 0
      }
      else {
        val = parseInt(event.target.value)
      }
      this.aumentos[param] = val;
      var statsActual = this.state.stats
      statsActual[param] = this.caracteristicasEquipo[param] + this.aumentos[param]
      this.setState({ stats: statsActual });

    } else {
      this.setState({ [param]: event.target.value });
    }
  }

  changeImage (attribute ,url)
  {
    this.setState({
      [attribute] : url
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <p className="navbar-brand mb-0">Dofus sets</p>
        </nav>
        <Route exact path="/" render={(props) => <HomePJ {...props} estado={this.state} handleChangeState={this.handleChangeState} />}></Route>
        <Switch>
          <Route path="/seleccionEquipo" render={(props) => <GeneralCatalogo {...props} handleChangeState={this.handleChangeState} changeImage={this.changeImage}/>}></Route>
          <Route path="/Arma" render={(props) => <GeneralCatalogo {...props} />}></Route>
          <Route path="/Montura" render={(props) => <GeneralCatalogo {...props} />}></Route>
          <Route path="/Trofeo" render={(props) => <GeneralCatalogo {...props} />}></Route>
        </Switch>
      </div>
    )
  };
}

export default App;
