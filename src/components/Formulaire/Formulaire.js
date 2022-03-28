import React, {useState} from 'react';

  
function Formulaire() {
    const [name , setName] = useState('');
    const [nbRepas , setnbRepas] = useState('');
    const [rue , setRue] = useState('');
    const [numMaison , setNumMaison] = useState('');
    const [numBoite , setNumBoite] = useState('');
    const [codePostal , setCodePostal] = useState('');
    const [commune, setCommune] = useState('');
   
    // function to update state of name with 
    // value enter by user in form
    const handleNameChange =(e)=>{
      setName(e.target.value);
    }
 
    const handleNbRepasChange =(e)=>{
        setnbRepas(e.target.value);
    }
    
    const handleRueChange =(e)=>{
        setRue(e.target.value);
    }
      
    const handleNumMaisonChange =(e)=>{
        setNumMaison(e.target.value);
    }
      
    const handleNumBoiteChange =(e)=>{
        setNumBoite(e.target.value);
    }
    const handleCodePostalChange =(e)=>{
        setCodePostal(e.target.value);
    }

    const handleCommuneChange =(e)=>{
        setCommune(e.target.value);
    }
    
    const handleSubmit = (e) => {
    
      e.preventDefault();

      alert(` ${name}`);    

  }
  return (
    <div >
    <form onSubmit={(e) => {handleSubmit(e)}}>
     
    
    
     <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)  => {handleNameChange(e)}} /><br/>
          { /*when user write in name input box , handleNameChange()
              function will be called. */}
        <label >
          Nombre de repas:
        </label><br/>
        <input type="number" value={nbRepas} required onChange={(e) => {handleNbRepasChange(e)}} /><br/>
          
        <label>
          Rue:
        </label><br/>
        <input type="text" value={rue} required onChange={(e) => {handleRueChange(e)}} /><br/>
         
        <label>
          Numero de Maison:
        </label><br/>
        <input type="number" value={numMaison} required onChange={(e) => {handleNumMaisonChange(e)}} /> <br/>
             
        <label>
          Numero de boite:
        </label><br/>
        <input type="number" value={numBoite} required onChange={(e)  => {handleNumBoiteChange(e)}} /><br/>


        <label>
            code Postal:
        </label> <br/>
        <input type="number" value={codePostal} required onChange={(e) => {handleCodePostalChange(e)}} /> <br/>

        <label>
          Commune:
        </label><br/>
        <input type="text" value={commune} required onChange={(e)  => {handleCommuneChange(e)}} /><br/>
               
        <button type="submit" style={{background:"blue", color:"white"}}>submit</button>
      </form>

    </div>
  );
}
  
export default Formulaire;