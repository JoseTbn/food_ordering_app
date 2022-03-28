import React, {useState} from 'react';

  
function Formulaire() {
    const [name , setName] = useState('');
    // const [nbRepas , setnbRepas] = useState('');
    const [rue , setRue] = useState('');
    const [numMaison , setNumMaison] = useState('');
    const [numBoite , setNumBoite] = useState('');
    const [codePostal , setCodePostal] = useState('');
    const [commune, setCommune] = useState('');
    
    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };
 
   
    // function to update state of name with 
    // value enter by user in form
    const handleNameChange =(e)=>{
      setName(e.target.value);
    }
 
    const handleNbRepasChange =(e)=>{
        setCount(e.target.value);
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
          Nombre de repas:
        </label><br/>
        <input className='font-medium
         text-base leading-4
          text-gray-600' 
          type="number" 
          value={count} 
          required 
          onChange={(e) => {handleNbRepasChange(e)}} />
          <br/>
          
        <label>
          Rue:
        </label><br/>
        <input 
        type="text" 
        value={rue} 
        required 
        onChange={(e) => {handleRueChange(e)}} />
        <br/>
         
        <label>
          Numero de Maison:
        </label><br/>
        <input type="number" 
        value={numMaison} 
        required 
        onChange={(e) => {handleNumMaisonChange(e)}} />
         <br/>
             
        <label>
          Numero de boite:
        </label><br/>
        <input type="number"
         value={numBoite}
         required onChange={(e)  => {handleNumBoiteChange(e)}} />
        <br/>


        <label>
            code Postal:
        </label> <br/>
        <input type="number" value={codePostal} required onChange={(e) => {handleCodePostalChange(e)}} /> <br/>

        <label>
          Commune:
        </label><br/>
        <input type="text" value={commune} required onChange={(e)  => {handleCommuneChange(e)}} /><br/>
               
        {/* <button type="submit" style={{background:"blue", color:"white"}}>submit</button> */}

        <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                            <div className="flex">
                                <span 
                                onClick={minusCount} 
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                    -
                                </span>
                                <input id="counter" 
                                name="quantity" 
                                aria-label="input" 
                                className="border border-gray-300 h-full text-center w-14 pb-1" type="text"
                                
          required 
          onChange={(e) => {handleNbRepasChange(e)}} 
                                value={count} 
                                onChange={(e) => e.target.value} />
                                <span 
                                onClick={addCount} 
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                    +
                                </span>
                            </div>
                        </div>
                        <hr className=" bg-gray-200 w-full my-2" />
                        <div className=" flex flex-row justify-between items-center mt-4">
                            <p className="font-medium text-base leading-4 text-gray-600">Adress</p>
                            <svg onClick={() => setRotate(!rotate)} id="rotateSVG" className={"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " + (rotate ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <hr className=" bg-gray-200 w-full mt-4" />
                        <button 
                        className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6" 
                        type="submit"
                        
                        
                        >Valider la commande</button>
                    </div>



      </form>

    </div>
  );
}
  
export default Formulaire;