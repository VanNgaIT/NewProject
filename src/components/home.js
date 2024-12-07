import React, { useState } from "react";
import "../styles/home.css";
import Header from "./header";

const mockPosts = [
    {
        id: 1,
        username: "Troll Bóng Đá",
        avatar: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/452967369_870518795112078_8155978553077080929_n.jpg?stp=dst-jpg_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=OpkYuFl_hQ4Q7kNvgGVYl43&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AwLRHOJplYNvUo20BxA7pRp&oh=00_AYB-AQo4KGKskdj-0qZ1efotJaj5MoqyW-oQ-Mx0P2bCzg&oe=67589A59",
        postImage: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469353771_963142145849742_8171846262676506811_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p9hzKgOMkMYQ7kNvgGE_b_-&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AMNpUfwz9ia6txLmeNs0pjr&oh=00_AYDT7u3XKT-FbRWlrsYXY15lnnvjPmhuYHhwtx_rsEv_TQ&oe=675899D1",
        content: "Đồng đội cũ mà lạ zị 🤨",
        likes: 3000,
        comments: 120,
        shares: 15,
    },
    {
        id: 2,
        username: "Thethao247.vn",
        avatar: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/326162768_731594945055185_4112038263175586067_n.png?stp=dst-png_s100x100&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=pN2JUIYr8jUQ7kNvgGjFMpZ&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=A42hR-XAGFSKPvpUeakfoBp&oh=00_AYAdtwgKIRrSSoPFL4U6O6tsqRaEV9FiyxCB0--82_dX3g&oe=675871C8",
        postImage: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469073785_1019350880234910_7383410829767379654_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wO5J6kvcNG4Q7kNvgGhd3Z1&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AzeBpAD_c2kRD43HVht8Qp2&oh=00_AYDlE3oTY7ry2Dr3JQOaFNcsUSWrOZpm8t1npiZEqbGiKA&oe=67588355",
        content: "🚨🗣️ Khoác áo ĐT Việt Nam là cơ hội lớn nhất cuộc đời tôi 🇻🇳👏 ✅ Tiền đạo Nguyễn Xuân Son nói về cơ hội được lên đội tuyển Việt Nam tham dự AFF Cup (ASEAN Cup) 2024.Via: VTC News",
        likes: 11000,
        comments: 555,
        shares: 11,
    },
    {
        id: 3,
        username: "League of Legends Netizen Vtrans",
        avatar: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/465966926_1047108580546979_6051391302000860551_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4-yamhhSpf0Q7kNvgHyVQxe&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AJ46PX-2Bd6mCy5i34GXu6K&oh=00_AYBYRRrRV718royjkA5q0Dja_dmuenO1oPPoTN1_l_dpsQ&oe=67589C92",
        postImage: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469204691_1067373971853773_7757128773136670927_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vw8TQIR66iEQ7kNvgHDaJvE&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ALFuw8OHD3DjEJJMPxj31CH&oh=00_AYAFriE305RWf_5xij2Hwo94uJLO5Q-8s7TdodtSxNSwFA&oe=67588E49",
        content: "[Tin vắn] BLG chào đón HLV Maokai, cựu HLV EDG (2020-2023) và TES trong mùa giải 2024. Đồng thời, Easyhoon tiếp tục gắn bó với đội, LvMao sẽ từ Hỗ trợ thành HLV.",
        likes: 900,
        comments: 10,
        shares: 3,
    },
    {
        id: 4,
        username: "T1 League of Legends / T1 리그오브레전드",
        avatar: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/465406318_1088474106019744_2797425241110391544_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=YhCV1vebF00Q7kNvgHWEqg0&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AX46hSOFZyx8VtBpeBGVoKS&oh=00_AYAslRmY3lzcFq5ux05Fu9GOCprWrKemLVcpBN8XUP1wUQ&oe=67587827",
        postImage: "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/468868366_1107732287427259_739598556582576208_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mz350mvacPoQ7kNvgF7j3Df&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=A_4lAkWLvZaVfst5MyRDDAj&oh=00_AYAUCI8-_JNAEeeyENMXx583gomnre_sVfZ2rTjEVWndIQ&oe=6758921D",
        content: "[2024 #KeSPACup Group Stage Day 2]" +
            " 새로운 팀원들과 한 팀으로 나아가는 첫 걸음.👣" +
            " Taking our first step forward as one team with new teammates.👣",
        likes: 120000,
        comments: 3000,
        shares: 150,
    },
    {
        id: 5,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 6,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 7,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 8,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 9,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 10,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 11,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 12,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 13,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 14,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 15,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 16,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 17,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 18,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 19,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 20,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 24,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 21,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 22,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },
    {
        id: 23,
        username: "johndoe123",
        avatar: "https://via.placeholder.com/40",
        postImage: "https://via.placeholder.com/600x400",
        content: "This is a post about something interesting!",
        likes: 0,
        comments: 10,
        shares: 3,
    },

];

function Home() {
    const [hoveredPostId, setHoveredPostId] = useState(null); // Theo dõi bài viết được hover
    const [hoveredAction, setHoveredAction] = useState(null); // Theo dõi action được hover
    const [posts, setPosts] = useState(mockPosts);

    const handleReactionClick = (postId, reaction) => {
        setPosts(posts.map((post) =>
            post.id === postId
                ? { ...post, selectedReaction: reaction }  // Chỉ thay đổi selectedReaction
                : post
        ));
        setHoveredPostId(null);
        setHoveredAction(null);
    };

    const handleMouseEnter = (postId, action) => {
        setHoveredPostId(postId);
        setHoveredAction(action);
    };

    const handleMouseLeave = () => {
        setHoveredPostId(null);
        setHoveredAction(null);
    };

    return (
        <>
            <Header />
            <div className="home-container">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="post-header">
                            <img src={post.avatar} alt={post.username} className="avatar" />
                            <span className="username">{post.username}</span>
                        </div>

                        <p className="post-content">{post.content}</p>

                        <img
                            src={post.postImage}
                            alt="Post"
                            className="post-image"
                        />
                        <div className="reaction-bar">
                            {/* Nút Like */}
                            <div
                                className="reaction-item"
                                onMouseEnter={() => handleMouseEnter(post.id, "likes")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="reaction-btn">
                                    <span className="emoji">{post.likes || "👍"}</span>
                                    Thích
                                </button>
                                {hoveredPostId === post.id && hoveredAction === "likes" && (
                                    <div className="emoji-picker">
                                        <button onClick={() => handleReactionClick(post.id, "likes", "👍")}>👍</button>
                                        <button onClick={() => handleReactionClick(post.id, "likes", "❤️")}>❤️</button>
                                        <button onClick={() => handleReactionClick(post.id, "likes", "😂")}>😂</button>
                                        <button onClick={() => handleReactionClick(post.id, "likes", "😮")}>😮</button>
                                        <button onClick={() => handleReactionClick(post.id, "likes", "😢")}>😢</button>
                                        <button onClick={() => handleReactionClick(post.id, "likes", "😡")}>😡</button>
                                    </div>
                                )}
                            </div>

                            {/* Nút Bình luận */}
                            <div
                                className="reaction-item"
                                onMouseEnter={() => handleMouseEnter(post.id, "comments")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="reaction-btn">
                                    <span className="emoji">{post.comments || "💬"}</span>
                                    Bình luận
                                </button>
                            </div>

                            {/* Nút Chia sẻ */}
                            <div
                                className="reaction-item"
                                onMouseEnter={() => handleMouseEnter(post.id, "shares")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="reaction-btn">
                                    <span className="emoji">{post.shares || "🔄"}</span>
                                    Chia sẻ
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
