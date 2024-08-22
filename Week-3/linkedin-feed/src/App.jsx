import { useState } from "react";
import profile from "./assets/profile.png";
import mainImg from "./assets/mainImg.png";

function App() {
  const [details, setDetails] = useState([
    {
      profileImg: profile,
      profileName: "Anish Jaiswal",
      bio: "Developer, Designer, and Creator",
      hrsAgoPost: "3h",
      caption: "I have created the card layout using react",
      mainImg: mainImg,
      likeCounts: "Anish and 544 others",
      commentCount: "89 Comments",
      rePosts: "7 reposts",
      logoLike: "Like Icon",
      logoComment: "Comment Icon",
      logoRepost: "Repost Icon",
      logoShare: "Share Icon",
    },
  ]);

  function onClickHandler() {
    setDetails([
      ...details,
      {
        profileImg: profile,
        profileName: "Another User",
        bio: "Another Bio",
        hrsAgoPost: "1h",
        caption: "Another Post Caption",
        mainImg: mainImg,
        likeCounts: "User and 100 others",
        commentCount: "10 Comments",
        rePosts: "2 reposts",
        logoLike: "Like Icon",
        logoComment: "Comment Icon",
        logoRepost: "Repost Icon",
        logoShare: "Share Icon",
      },
    ]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={onClickHandler}>Add more todo</button>

      {details.map(function (det) {
        return (
          <Post
            profileImg={det.profileImg}
            profileName={det.profileName}
            bio={det.bio}
            hrsAgoPost={det.hrsAgoPost}
            caption={det.caption}
            mainImg={det.mainImg}
            likeCounts={det.likeCounts}
            commentCount={det.commentCount}
            rePosts={det.rePosts}
            logoLike={det.logoLike}
            logoComment={det.logoComment}
            logoRepost={det.logoRepost}
            logoShare={det.logoShare}
          />
        );
      })}
    </div>
  );

  function Post(props) {
    return (
      <div
        className="container"
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          width: "25rem",
        }}
      >
        {/* Header */}
        <div
          className="header"
          style={{
            // border: "2px solid white",
            display: "grid",
            gridTemplateColumns: "3rem 1fr 1fr",
            gap: "10px",
          }}
        >
          <img
            className="profileImg"
            src={props.profileImg}
            style={{
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
              gridColumn: "1",
              gridRow: "1",
            }}
          ></img>
          <div
            className="right"
            style={{
              fontSize: "11px",
              gridColumn: "2/4",
              gridRow: "1",
            }}
          >
            <div className="profileName" style={{ fontWeight: "bold" }}>
              {props.profileName}
            </div>
            <div className="bio">{props.bio}</div>
            <div className="hrsAgoPost">{props.hrsAgoPost}</div>
          </div>

          <div className="caption" style={{gridColumn:"1/4", fontSize:"11px", fontWeight:"bold"}}>{props.caption}</div>
        </div>
        {/* body */}
        <div
          className="body"
          style={{
            // border: "2px solid white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            className="mainImg"
            src={props.mainImg}
            alt="mainImage"
            style={{
              width: "100%",
              maxHeight: "50vh",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <div
            className="bodyContent"
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
            }}
          >
            <div className="likesCount" style={{}}>
              {props.likeCounts}
            </div>
            <div className="right" style={{ display: "flex", gap: "10px" }}>
              <div className="commentCount" style={{}}>
                {props.commentCount}
              </div>
              <div className="rePost" style={{}}>
                {props.rePosts}
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* footer */}
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between", padding:"10px 0" }}
        >
          <div className="logoLike">{props.logoLike}</div>
          <div className="logoComment">{props.logoComment}</div>
          <div className="logoRepost">{props.rePosts}</div>
          <div className="logoShare">{props.logoShare}</div>
        </div>
      </div>
    );
  }
}
export default App;
