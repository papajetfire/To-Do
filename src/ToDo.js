import React,{ useState} from 'react'

function ToDo() {
    const [task,setTask] = useState("");
    const [job,setJob]=useState([])
    let removeItem = (id)=>{
        let newItem=job.filter((task)=>task.id!==id)
        setTask(newItem)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(task){
            const work={id: new Date().getTime().toString(),task:task};
            console.log(job);
            setJob((job)=>{
                return [...job,work]
            })
            setTask('');
        }
        else{
            console.log('no value')
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <lable htmlfor='Task'>Task To-Do!</lable><br></br>
                <input type='textarea' value={task} onChange={(e)=>setTask(e.target.value)}></input>
            </div>
            <button type='submit'>Add</button>
        </form>
        {job.map((work,index)=>{
            const{id,task}=work
            return(
                <div key={id}>
                    <h4>{task}</h4>
                    <button onClick={()=>removeItem(id)}>Done!</button>

                </div>
            )
        })}
        
            
        </>
    )
}

export default ToDo
