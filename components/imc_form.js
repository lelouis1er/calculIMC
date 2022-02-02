import { Component } from "react"

class ImcForm extends Component{

    state = {
        nom: '',
        poids: '',
        taille: ''
    }

    result;

    inForm = true;

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    changeInform(data) {
        this.inForm = data;
        console.log ("state of form: " + this.inForm)
    }

    submitForm = async event => {
        event.preventDefault();
        
        const client = this.state
        const response = await fetch('/api/submit_data', {
            method: 'POST',
            body: JSON.stringify({client}),
            headers: {'Content-Type': 'application/json'}   
        })
        const data = await response.json()
        console.log(data)
        this.result = data
        this.changeInform(!(data != null))

        alert(
            "Salut, " + data.nom + " ton IMC est : " + data.imc + " \n Message: " + data.resultat
        )

    }

    render() {

        

        return (

            <div className="row">
                
                {this.inForm}

                {this.inForm &&(

                    <div className="col-md-12">
                    <h3>
                        Formulaire de calcul de l'imc
                    </h3>

                    <hr />

                    <form className='form-horizontal' onSubmit={this.submitForm} >

                        <div className='form-group'>
                            <label htmlFor='nom'>
                                Nom : 
                            </label>
                            <input type="text" name='nom' id='nom' className='form-control' onChange={this.handleChange} required />
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label htmlFor='poids'>
                                        Poids : 
                                    </label>
                                    <input type="text" name='poids' id='poids' className='form-control' onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label htmlFor='taille'>
                                        Taille : 
                                    </label>
                                    <input type="text" name='taille' id='taille' className='form-control' onChange={this.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-success '>
                                Calculer l'IMC
                            </button>
                        </div>

                    </form>


                    </div>

                )}

                {!this.inForm && (
                    <div className="col-md-12">
                        <h3>
                            Salut, {this.result.nom} 
                            <br/>
                            Ton IMC est : {this.result.imc}
                            <br/>
                            <alert className='alert'>
                                {this.result.resultat}
                            </alert>
                        </h3>

                        <hr />
                    </div>
                )}
                


            </div>

            

        )
    }
}

export default ImcForm