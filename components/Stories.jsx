import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Story from "./Story";

const Stories = () => {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchProfileSuggestions = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();
        const suggestions = data.results.map((user, index) => ({
          avatar: user.picture.large,
          username: user.login.username,
          id: index,
        }));
        setSuggestions(suggestions);
      } catch (error) {
        console.error("Error fetching profile suggestions:", error);
      }
    };

    fetchProfileSuggestions();
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll
    scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
