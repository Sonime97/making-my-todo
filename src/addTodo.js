import React from 'react'
 export default function Add ({handleSubmit,handleChange,newtask}) {
    return (
 <div>
     <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" onChange={handleChange} value={newtask} required/> <br/>
        <input type="submit" value="submit"/>
    </form>
    
</div>
)  
}