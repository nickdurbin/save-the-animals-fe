import React, { useState, useEffect } from 'react';
import { axiosWithoutAuth as axios} from '../../utils/axiosUtils';
import CampaignCard from './CampaignCard';

const Campaign = (props) => {
  const [campaign, setCampaign] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;

      axios()
      .get(`/campaigns/${id}`)
      .then(response => {
        console.log(response.data, "Gathering a single campaign id.")
        setCampaign(response.data);
      })
      .catch(error => {
        console.error(error, "There was an issue retrieving the data.");
      });

  },[props.match.params.id]);

  return (
    <div className="campaign-wrapper">
      <CampaignCard key={campaign.campaign_id} campaign={campaign} {...props} />
    </div>
  );
}

export default Campaign;