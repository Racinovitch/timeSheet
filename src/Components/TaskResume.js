import React from 'react'

const TaskResume = (props) => {

    console.log(props);

    return (
        
                <div>
                    
                        <div className="taskName">Nom de la tâche: {props.div1}</div>,
                        <div className="who">À exécuter par: {props.div3}</div>,
                        <div className="taskExpl">Détails:{props.div2}</div>,
                        <div className="dateFrom">A partir du {props.div4} à {props.div5}</div>,
                        <div className="dateTo"> "Jusqu'au {props.div6} à "{props.div7}</div>
                        
                </div>
               
        

    )




};


export default TaskResume;