const imageBase = "./images_2026-02-13";
const postImages = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.png",
  "img05.jpg",
  "img06.jpg",
  "img07.jpg",
  "img08.jpg",
  "img09.jpg",
  "img10.jpg",
];

const profiles = [
  {
    name: "민수",
    handle: "minsu_dev",
    avatar: `${imageBase}/man.png`,
  },
  {
    name: "지아",
    handle: "jia_daily",
    avatar: `${imageBase}/woman.png`,
  },
];

const posts = postImages.map((file, index) => {
  const profile = profiles[index % profiles.length];
  return {
    id: `post-${index + 1}`,
    image: `${imageBase}/${file}`,
    user: profile,
    likes: 120 + index * 9,
    caption: "오늘의 감성 피드. 분위기 있는 색감이 좋아요.",
    time: `${index + 1}시간 전`,
  };
});

const suggestions = [
  {
    name: "서진",
    handle: "seojin_photo",
    avatar: `${imageBase}/woman.png`,
  },
  {
    name: "현우",
    handle: "hyunwoo_fit",
    avatar: `${imageBase}/man.png`,
  },
  {
    name: "다은",
    handle: "daeun_art",
    avatar: `${imageBase}/woman.png`,
  },
];

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="logo">Instagram</div>
        <div className="search">검색</div>
        <div className="top-actions">
          <div className="icon-btn" aria-hidden="true"></div>
          <div className="icon-btn" aria-hidden="true"></div>
          <div className="icon-btn" aria-hidden="true"></div>
        </div>
      </div>
    </header>
  );
}

function Stories() {
  return (
    <section className="card stories">
      <div className="stories-list">
        {posts.slice(0, 7).map((post) => (
          <div className="story" key={`story-${post.id}`}>
            <div className="avatar">
              <img src={post.user.avatar} alt={`${post.user.name} 프로필`} />
            </div>
            <span>{post.user.handle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  return (
    <article className="card post">
      <div className="post-header">
        <div className="post-user">
          <img src={data.user.avatar} alt={`${data.user.name} 프로필`} />
          <strong>{data.user.handle}</strong>
        </div>
        <span>···</span>
      </div>
      <div className="post-image">
        <img src={data.image} alt={`${data.user.handle} 피드`} />
      </div>
      <div className="post-actions">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="post-body">
        <div>좋아요 {data.likes.toLocaleString()}개</div>
        <div>
          <strong>{data.user.handle}</strong>
          {data.caption}
        </div>
        <div className="post-meta">{data.time}</div>
      </div>
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="card profile-card">
        <img src={profiles[0].avatar} alt="프로필 사진" />
        <div className="profile-text">
          <strong>{profiles[0].handle}</strong>
          <span>{profiles[0].name}</span>
        </div>
      </section>
      <section className="card suggestions">
        <strong>회원님을 위한 추천</strong>
        {suggestions.map((user) => (
          <div className="suggestion" key={user.handle}>
            <div className="suggestion-info">
              <img src={user.avatar} alt={`${user.name} 프로필`} />
              <div>
                <div>{user.handle}</div>
                <div className="post-meta">새로운 추천</div>
              </div>
            </div>
            <div className="follow-btn">팔로우</div>
          </div>
        ))}
        <div className="footer-text">
          소개 · 도움말 · 홍보 센터 · API · 개인정보처리방침 · 약관 · 위치 · 언어
        </div>
      </section>
    </aside>
  );
}

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="layout">
        <main>
          <Stories />
          <div className="feed">
            {posts.map((post) => (
              <Post key={post.id} data={post} />
            ))}
          </div>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
