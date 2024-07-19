i

const todoDetails=({id,task,taskArray,setTaskArray})=>{

    return(
        <div className="displayTask" >
            {taskArray.map((t)=>(
                <div className="list" key={t.id}>
<li>{t}</li>
                </div>

            ))}
        </div>
    )

}

export default todoDetails;