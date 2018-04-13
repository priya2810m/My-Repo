import React from 'react';
import ReactDOM from 'react-dom';



   

class Add extends React.component{
  constructor(props){
      super(props);
  
    this.state={
        identifier:'',
        password:'',
        errors:{},
        isLoading:false,
        showMenu: false,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = this.showMenu.bind(this);
}

    showMenu(event){
        event.preventDefault();
        this.setState(
            {showMenu : true},() =>{document.addEventListener('click',this.closeMenu);}

        );
    }

    closeMenu(){
        if (!this.dropdownMenu.contains(event.target)){
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
            });
        }
      }

    onSubmit(e){
        e.preventDefault();
    }

    render(){
       
        return(
            <form onSubmit={this.onSubmit}>
             <label className="control-label">ACE Number</label>
                <div>
                    <input
                    value={this.state.ACENumber}
                    name="ACE Number"
                    className="form-control"
                    type="text"
                    onChange = {this.onChange}
                    />
                </div>  
            
                <div>    
                <label className="control-label">UserName</label>
                    <input 
                        value={this.state.password}
                        name = "Name"
                        label = "UserName"
                        onChange = {this.onChange}
                        type="text"
                            />    
                </div>   

                <div>    
                <label className="control-label">StartDate</label>
                    <input 
                        value={this.state.password}
                        name = "Name"
                        label = "UserName"
                        onChange = {this.onChange}
                        type="text"
                            />    
                </div>  

                <div >
                    <button>onClick={this.showMenu}</button>

                    {this.state.showMenu?(
                    <div className="menu" ref={(element) => {
                        this.dropdownMenu = element;
                      }}>
                        <button>Communicated</button>
                        <button>Non-Communicated</button>
                    </div>): (null)
                    }
                </div>
            </form> 
        );
    }
}
export default Add;