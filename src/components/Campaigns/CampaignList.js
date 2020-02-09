import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CampaignCard from './CampaignCard';

const CampaignList = props => {
  const [search, setSearch] = useState('');
  const inputStyle = {
    display: 'block',
    width: '20%',
    padding: '.5%',
    height: '45px',
    margin: 'auto',
    fontSize: '.8rem',
    borderRadius: '5px',
    border: '1px black solid'
  }
  const h1Style = {
    textAlign: 'center',
  }

  return (
    <>
    <h1 style={h1Style}>Search Listings: </h1><input style={inputStyle}
    placeholder='Mountain, beach, wooded area, etc.' onChange={event => 
      setSearch(event.target.value)}/>
      {props.campaigns.map((campaign, index) => (
        <Link to={`/campaigns/${campaign.id}`}><CampaignCard key={index}  campaign={campaign} {...props} />}</Link>))
        .filter(item => {       
          return item.props.children[0].props.campaign.description.toLowerCase().includes(search.toLowerCase());
        })}
    </>
  );
}

export default CampaignList;