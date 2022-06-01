import Logo from './Logo.js'
import Name from './Name.js'
import View from './Description.js'
const Card = ()=>{
	return(
		<div style = {{color :'white',backgroundColor : 'black' , width : '500px',margin:'auto' , height:'600px'}}>

			<Logo />
			<br />
			<Name p1 ="Ahmed"/>
			<View  />

		</div>






		)

}
export default Card;