const changeText=(event)=>{
    console.log(event.target);
    event.target.innerText = event.target.innerText + '被點了';
  }

const styleArg = {fontSize: '100px', color: 'red'};

const HelloCGU = () => {
return (<h1 style={ styleArg } onClick={ changeText }>hello CGU!!</h1>);
}

export default HelloCGU;