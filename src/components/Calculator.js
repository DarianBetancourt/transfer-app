import React, {useState} from 'react';

export const Calculator = () => {
    const [tasaBase, setTasaBase] = useState("");
    const [tasaCliente, setTasaCliente] = useState("");
    const [montoCliente, setMontoCliente] = useState("");
    const [nuevoMontoCliente, setNuevoMontoCliente] = useState(0);
    const [montoClienteReceptor, setMontoClienteReceptor] = useState(0);
    const [ganancia, setGanancia] = useState(0);

    const calculate = () => {

        let tasa = stringToNumber(tasaBase);
        let monto = stringToNumber(montoCliente);
        
         
        //const montoOriginal = tasa * monto;
        const montoReceptor = stringToNumber(tasaCliente) * monto;
        const nuevoMonto = montoReceptor / tasa;
        
        setMontoClienteReceptor(montoReceptor);
        setNuevoMontoCliente(nuevoMonto);
        setGanancia(monto - nuevoMonto);

        //console.log('monto original a transferir al receptor: ' + montoOriginal);
        //console.log('monto a transferir al receptor: ' + montoReceptor);
        //console.log('monto a transferir a la casa de cambio: ' + nuevoMontoCliente);
        //console.log('ganancia: ' + ganancia);
    };

    const stringToNumber = (text) =>{
        return Number(text.replace(',', '.'));
    };

  return (
        <div className="card text-center">
            <div className="card-header">
               Calculator
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className='form-group'>
                        <label> Tasa Base </label>
                        <input 
                            className="form-input" 
                            value={tasaBase} 
                            type="text" 
                            onChange={(e) => setTasaBase(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label> tasa Cliente </label>
                        <input 
                            className="form-input" 
                            value={tasaCliente} 
                            type="text" 
                            onChange={(e) => setTasaCliente(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label> Monto Enviado</label>
                        <input 
                            className="form-input" 
                            value={montoCliente} 
                            type="text" 
                            onChange={(e) => setMontoCliente(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label> Monto Recibido</label>
                        <input 
                            className="form-input" 
                            value={montoClienteReceptor} 
                            type="number"
                            disabled
                        />
                    </div>
                   
                    <button className='btn btn-success mt-3' onClick={calculate}> Calcular </button>
                    
            </div>
            <div className="card-footer text-muted">

                <div className='form-group'>
                        <label> Monto para Casa de cambio</label>
                        <input 
                            className="form-input mx-2" 
                            value={nuevoMontoCliente} 
                            type="number"
                            disabled
                        />
                        <label> Ganancias</label>
                        <input 
                            className="form-input mx-2" 
                            value={ganancia} 
                            type="number"
                            disabled
                        />
                         R$
                </div>

                
            </div>
            
        </div>
  )
}