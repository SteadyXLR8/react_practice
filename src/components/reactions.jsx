
export default function Reactions() {
    let comment = 88;
    let share_count = 88;
    let likes = 88;
    let initialValue = "Write Your Comment"
    return (
        <div className='reaction-comments'>
            <div className="reactions">
                <div><img src="/Heart.svg"/>{likes} Likes</div>
                <div><img src="/comment.svg"/>{comment}</div>
                <div><img src="/share.png"/>{share_count}</div>
            </div>
            <div className="comment-input">
                <input type="text" className="comment" value={initialValue} />
                <div className="cam-emo-container">
                <button className="camera"><img src="/Camera.svg"/></button>
                <button className="emoji"><img src="Icon.svg"/> </button>
                </div>
                
            </div>
        </div>
    )
}
