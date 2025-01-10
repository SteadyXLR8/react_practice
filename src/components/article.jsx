export default function Article() {
    let fact1 = "Did you know that red pandas were given the name 'panda'; first, roughly fifty years before the black and white variety. Did you know that red pandas were given the name 'panda'; first, roughly fifty years before the black and white variety.";

    let fact2 = "Did you know that red pandas were given the name 'panda' first, roughly fifty years before the black and white variety."

    let hashtagArr = ['panda', 'funfact', 'redpanda'];
    return (
        <div className='article-container'>
            <div className="article">
                <p className='fact-1'>
                    {fact1}
                </p>
                <p className="fact-2">
                  {fact2}  
                </p>
                <ul className="hashtag-container">{hashtagArr.map((item, index)=>{
                    return <li key={index}>#{item}</li>
                })}</ul>
            </div>
            <div className="corres-pic">
                <img src="/redpanda.jpg"/>
            </div>
        </div>
    )
}