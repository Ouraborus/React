import React from 'react';
import PropTypes from 'prop-types';

//Class Component
class App extends React.Component {
constructor(){
  super();
  this.state = {
    txt: "This is the state txt"
  }
}

update (e){
  this.setState({txt: e.target.value})
}

  render(){
    //JSX
    return (
    <div>
      <h1>{this.state.txt}</h1>
      <b>{this.props.txt}</b>
      {/* <input type="text" onChange={this.update.bind(this)} /> */}

      <Widget update={this.update.bind(this)}/>

    </div>
    )
    // return React.createElement('h1',null,'Hello World!')
  }
}
    App.propTypes = {
      txt: PropTypes.string,
      cat: PropTypes.number.isRequired
    }
    App.defaultProps = {
      txt: "This is the default text"
    }
    
    //Stateless Component
    // const App = () => <h1>Hello World!!</h1>
    const Widget = (props) => 
    <input type="text" onChange={props.update}/>
    
    Widget.propTypes = {
      onChange(props, propName, component){
        if(!(props[propName].length < 3) ){
          return new Error(`${propName} too short`) 
        }
      }
    }
    
    
export default App