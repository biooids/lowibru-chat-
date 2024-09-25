import { useEffect, useState } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";
import useShowToast from "../hooks/useShowToast";

function OnlyFollowed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
    const getFollowedPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts/followed"); // Use the new endpoint
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setPosts(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };

    getFollowedPosts();
  }, [showToast]);

  if (loading) {
    return (
      <Flex justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box>
      {posts.length === 0 ? (
        <h1>You are not following anyone or there are no posts to show</h1>
      ) : (
        posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))
      )}
    </Box>
  );
}

export default OnlyFollowed;
