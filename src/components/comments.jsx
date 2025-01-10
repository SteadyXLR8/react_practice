export default
function Comments() {
    let commenter= "Jasmine Robinson"
    let comment = "Lorem Ipsum is simply dummy typesetting industry dummy text ever since the 1500s."
    let btnText = "View All Comments";
    return (
        <>
            <div className="comment-box">
                <div className="comment-container">
                <div className="commenter-pic">
                    <img src="/Ellipse 13.svg"/>
                </div>
                <div className="comment-innerbox">
                    <div className="commenter">{commenter}</div>
                    <div className="comment-text">{comment}</div>
                </div>
                </div>
                <div className="load-comment-button"><button className="btn-load">{btnText}<img src="/arrow-down.png"/></button></div>
            </div>
        </>
    )
}