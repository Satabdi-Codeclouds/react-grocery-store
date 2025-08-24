export default function Rating({ratingScore}) {
    const generateRatingRender = (ratingScore) => {
        const ratingArr = []
        for(let i=1;i<=5;i++) {
            const starValue = Math.floor(ratingScore);
            let ratingClass = ''
            if(ratingScore !==0) {
                if(i <= ratingScore) {
                    ratingClass = 'ri-star-fill'
                }
                else if(ratingScore %1 !== 0 && i === Math.floor(ratingScore)+1) {
                    ratingClass = 'ri-star-half-fill'
                }
            } 
             
            ratingArr.push(
                (<i key={i+"-rating-icon"} className={`${ratingClass} ri-star-fill mx-[1px] text-[15px] text-[#f5885f]`}></i>)
            )
        }
        return ratingArr
    }
    return (<>
        {generateRatingRender(ratingScore)}
       
    </>)
}