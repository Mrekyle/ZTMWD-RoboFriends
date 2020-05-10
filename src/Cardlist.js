import React from 'react';
import Card from './Card';

// Each robot can be done one by one, grabbing each index item - <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />. Or you can do it in a more efficent map loop 

const Cardlist = ({ robots }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
				})
			}
	    </div>
	);
}

export default Cardlist;

//With react, and doing something like this, you will have to assign it a key! This is because otherwise the virtual DOM wont remember what it is
// if it gets deleted, and will delete everything.. By assiging the key, it will remember each indivudual component as a seperate name.

//Because of the way React works, anything that is placed inside of {} is native javascript, even if it uses different syntax which allows you to even
// Put Javascript inside of the jsx brackets () like in the above code.

// As i am returning everything on one line in the above code, I do not need to wrap what is being returned inside of () - Only done for returning multiple lined code.

//The above code allows you to add as many users (robots) as you want, as the loop will continue going until there is no more robots for it to find.