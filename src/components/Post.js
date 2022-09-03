import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Post = () => {
  const { userId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((posts) => {
        setTimeout(() => {
          setPost(posts[0]);
          setIsLoading(false);
        }, 1000)
      });
  }, [userId]);

  return (
    <div className="user-post">
      {!isLoading && <Link to="/">Back</Link>}

      <h2>{post.title || <Skeleton />}</h2>
      <p>{post.body || <Skeleton count={3} />}</p>
    </div>
  );
};

export default Post;
