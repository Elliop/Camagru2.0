import { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchProfileSuggestions = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const suggestions = data.results.map((user, index) => ({
          avatar: user.picture.large,
          username: user.login.username,
          state: user.location.state,
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
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            className="w-10 h-10 rounded-full border p-[2px]"
            alt="profiles"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">From {profile.state} </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
