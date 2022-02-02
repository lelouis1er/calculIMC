

export default function handler (req, res) {


    if (req.method === 'POST') {

        const client = req.body.client

        let result = ''
        const imc = (client.poids / (client.taille * client.taille))

        if (imc < 16.5)
            result = "famine"
        else if (imc >= 16.5 && imc < 18.5)
            result = "maigreur"
        else if (imc >= 18.5 && imc < 25)
            result = "corpulence normale"
        else if (imc >= 25 && imc < 30)
            result = "surpoids"
        else if (imc >= 30 && imc < 35)
            result = "obésité modéré"
        else if (imc >= 35 && imc < 40)
            result = "obésité sévère"
        else if (imc > 40)
            result = "obésité morbide ou massive"


        const newCalc = {
            nom: client.nom,
            taille: client.taille,
            poids: client.poids,
            imc: imc,
            resultat: result
        }

        res.status(200).json(newCalc)
    }

    
}

