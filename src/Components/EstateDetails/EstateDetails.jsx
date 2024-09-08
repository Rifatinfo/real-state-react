import {  useParams } from "react-router-dom";


const EstateDetails = () => {
    const { id } = useParams();
  
    return (
        <div>
            { id}
        </div>
    );
};

export default EstateDetails;
