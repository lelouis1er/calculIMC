import { Component } from "react"

class ImcForm extends Component{

    state = {
        nom: '',
        poids: '',
        taille: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitForm = async() => {
        const client = this.state
        const response = await fetch('/api/submit_data', {
            method: 'POST',
            body: JSON.stringify({client}),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()
        console.log("Client" + client)
        console.log(data)
    }

    render() {
        return (
            <form className='form-horizontal' method='post' onSubmit={this.submitForm} >

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


        )
    }
}

export default ImcForm