const RenderStar = (props) => {
    const number_of_stars = Number(props.star);
    const starwidth = props.starwidth ? props.starwidth : '';
    var stars = [];
    for (var i = 0; i < number_of_stars; i++) {
        stars.push(<span className='indent' key={i}><img width={starwidth} src={"./public/star.png"} /></span>);
    }
    return (
        <>
            {stars}
        </>);
}

export default RenderStar;