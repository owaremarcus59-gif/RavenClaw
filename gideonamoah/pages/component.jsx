export default App;

const   MyComp = (props)=>{
    return(
    // props.name.map((name)=> <h1>Hello {name}</h1>)
    <h1>Hello {props.name}</h1>
    
    )
}

export  {MyComp};
