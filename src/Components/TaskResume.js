import React from 'react'
import './TaskResume.css';
const TaskResume = (props) => {

    console.log(props);

    return (
        
                <div id="tlen">
                    
                        <div className="titre">Nom de la tâche: </div>
                        <div>{props.div1}</div>
                        <div className="titre">À exécuter par: </div>
                        <div>{props.div3}</div>
                        <div className="titre">Détails:</div>
                        <div>{props.div2}</div>
                        <div className="titre">A partir du <span class="date"> {props.div4} </span> à <span class="date"> {props.div5} </span></div>
                        <div className="titre">Jusqu'au <span class="date">{props.div6}</span> à <span class="date">{props.div7}</span></div>                   
                </div>
               
        

    )




};


export default TaskResume;