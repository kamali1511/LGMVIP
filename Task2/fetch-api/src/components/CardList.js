import React from 'react';
import Cardo from './Card';
import './card.css';

const CardList = props => {
   

        return (
        
            <div>
                    {
                        //Accesing the people using props which is passed as a properties
                        //Mapping through each item in the list (people) and accessing keys in the dictionaries
                        //passing the properties to the card component
                        props.people.map((n) =>
                            <Cardo
                            
                            id={n.id}
                            name={n.first_name}
                            lname={n.last_name}
                            email={n.email}
                            />
                        )
                    }
                       
                   <h5>By Kamalishree</h5>
                       </div>  
        );
    
    

};

export default CardList