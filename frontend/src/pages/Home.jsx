import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Home = () => {

    const fastFindChoicesList = [
        {
            name: 'Person',
            value: 'person'
        },
        {
            name: 'Occurrence',
            value: 'occurrence'
        },
        {
            name: 'Bus/Org',
            value: 'bus-org'
        },
        {
            name: 'Property',
            value: 'property'
        },
        {
            name: 'Vehicle',
            value: 'vehicle'
        },
        {
            name: 'Address',
            value: 'address'
        },
        {
            name: 'Telephone',
            value: 'telephone'
        },
        {
            name: 'Officer/Unit',
            value: 'officer-unit'
        }
    ]

    const detailedFindChoicesList = [
        {
            name: 'Person',
            value: 'person'
        },
        {
            name: 'Occurrence',
            value: 'occurrence'
        },
        {
            name: 'Bus/Org',
            value: 'bus-org'
        },
        {
            name: 'Property',
            value: 'property'
        },
        {
            name: 'Vehicle',
            value: 'vehicle'
        },
        {
            name: 'Address',
            value: 'address'
        }
    ]

  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate('/login');
    }
  }, [user, navigate]);

  if(!user){
    return <h3>hmm... You are not logged in...</h3>
  }else {
    return (
        <div>
            <h3 style={{marginBottom: '2rem'}}>Home</h3>
            <div style={{display: 'flex'}}>
                <div>
                    <Link style={{backgroundColor: '#DDBA2C', color: '#01244C', padding: '1rem 2rem', margin: '1rem'}} to='/fastFind/person'>Fast Find</Link>
                    <ul style={{margin: '2rem'}}>
                        {fastFindChoicesList.map((item, index) => {
                            return (<li key={index}><Link key={index} to={`/fastFind/${item.value}`}>{item.name}</Link></li>);
                        })}
                    </ul>
                </div>
                <div>
                    <Link style={{backgroundColor: '#01244C', color: '#DDBA2C', padding: '1rem 2rem', margin: '1rem'}} to='/detailedFind/person'>Detailed Find</Link>
                    <ul style={{margin: '2rem'}}>
                        {detailedFindChoicesList.map((item, index) => {
                            return (<li key={index}><Link key={index} to={`/detailedFind/${item.value}`}>{item.name}</Link></li>);
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}

export default Home