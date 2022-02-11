import React from "react";
class Imc extends React.Component
{
    indice="";
    remarque="";
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
        this.state={poids:Number,taille:Number}

    }
    evaluer()
    {
        let valeur=this.calculer();
        if(valeur>10)
        {
        if(valeur<20)
        {
            this.remarque="maigre";
        }
        else if(valeur<25)
        this.remarque="idéale";
                else
                this.remarque="surpoids";
                }
            }
calculer()
{
    if(this.state.poids>30 && this.state.taille> 1 )
 {   this.indice= this.state.poids/(Math.pow(this.state.taille,2));
    let valeurfinale=Math.round(parseFloat(this.indice));

    return valeurfinale;
    
}
else
{
this.indice= "";
let valeurfinale=Math.round(parseFloat(this.indice));
return valeurfinale;
}
}

    render()
    {
return(
<div>
    welcome
    <br/>
    <table>
    <tr><td>poids:</td> <td><input type="number" onChange={(e)=> this.setState({poids:e.target.value})} value={this.state.poids}/></td></tr>
        <tr><td>taille:</td> <td><input type="number" onChange={(e)=> this.setState({taille:e.target.value})} value={this.state.taille}/></td></tr>
{this.evaluer()}
    </table>

    {this.calculer()}<br/>
{this.remarque}

</div>

);
    }

}
export default Imc