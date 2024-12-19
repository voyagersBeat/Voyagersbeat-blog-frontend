import EditorJsHtml from "editorjs-html";
import { dateformatter } from "../../../utils/formetteddates";

const editorJsHtml = EditorJsHtml();

const SingleBlog = ({ Blogs }) => {
  const {
    title,
    description,
    content,
    coverImg,
    category,
    rating,
    author,
    createdAt,
  } = Blogs || {};

  const contentHtml = editorJsHtml.parse(content).join("");

  return (
    <div className="bg-white p-8">
      <div>
        <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">
          {dateformatter(createdAt)} by
          <span className="text-blue-400 cursor-pointer">
            &nbsp; {"Author" || author}
          </span>
        </p>
      </div>
      <img
        src={coverImg}
        alt="blog images voyagers beat"
        className="w-full md:h-[520px] bg-cover"
      />
      <div className="mt-8 space-y-4">
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="space-y-3 editJSDiv"
        />
        <div>
          <span className="text-lg font-medium">Rating : </span>
          <span>{rating} (based on 489 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
