export default function Post({post}){
    const {userId, id, title, body} = post;
    return(
        <div className="box">
            <h4>UserId: {userId} </h4>
            <h4>Id: {id} </h4>
            <h4>Title: {title} </h4>
            <p>Body: {body} </p>
        </div>
    )
}