import "./contents.scss";

const Contents = () => {
  const contents = [
    {
      id: 112,
      title: "Add tags for solutions",
      desc: "Easier to search for soltions based on specific tasks",
      tag: "Enhancement",
      count: 2,
    },
    {
      id: 99,
      title: "Add a dark theme option",
      desc:
        "It would help people with light sensitiveness and who prefer dark mode",
      tag: "Feature",
      count: 4,
    },
    {
      id: 65,
      title: "Q&A withing the challenge hubs",
      desc: "Challemge specific Q&A would make for any reference",
      tag: "Feature",
      count: 1,
    },
    {
      id: 51,
      title: "Allow image/video upload to feedback",
      desc: "Images and screencaset can enhance comments on solutions",
      tag: "Feature",
      count: 2,
    },
    {
      id: 42,
      title: "Ability to follow others",
      desc: "Stay updated on comments and solutions other people post",
      tag: "Enhancement",
      count: 3,
    },
    {
      id: 3,
      title: "Preview images not loading",
      desc: "Challenge preview images are missing when you apply a filter",
      tag: "Enhancement",
      count: 0,
    },
  ];
  return (
    <section className="contents">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <i class="fas fa-lightbulb"></i>
          </li>
          <li>6 Suggestions</li>
          <li>
            <span className="sort__by">Sort by </span> :{" "}
            <span className="most__votes">Most upvotes</span>
          </li>
        </ul>
        <button className="btn">
          <span>&#10010;</span> Add feedback
        </button>
      </nav>
      <main className="main">
        {contents.map((content) => {
          const { id, title, desc, tag, count } = content;
          return (
            <div className="paper" key={id}>
              <div className="left__wrap">
                <span className="index">
                  <span>
                    <i className="fas fa-angle-up"></i>
                  </span>
                  <p>{id}</p>
                </span>
                <div className="details">
                  <h5 className="title">{title}</h5>
                  <p className="description">{desc}</p>
                  <span className="tag">{tag}</span>
                </div>
              </div>
              <div className="right__wrap">
                <span>
                  <i className="fas fa-comment"></i>
                </span>
                <h4
                  className="comment__count"
                  style={{ color: !count ? "#c5c9d8" : null }}
                >
                  {count}
                </h4>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Contents;
