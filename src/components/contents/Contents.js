import { contents } from "../../util/db";
import "./contents.scss";

const Contents = () => {
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
                <span className="comment-icon-wrap">
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
