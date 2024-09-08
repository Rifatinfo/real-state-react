import {  useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const estateNews = useLoaderData();
    console.log(typeof estateNews);  // object 
    const { id } = useParams();
    const estateDetail = estateNews.find(estateDetail => estateDetail.id === parseInt(id));
    console.log(estateDetail);
    console.log(estateNews,id);
    return (
        <div>
            { id}
            {estateDetail.description}
            <img src={estateDetail.image} alt="" />
        </div>
    );
};

export default EstateDetails;
