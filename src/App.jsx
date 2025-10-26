import React, { useState } from "react";
import { FaMapMarkerAlt, FaTwitter} from 'react-icons/fa'

export default function GitHubSearchApp() {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  async function getUserInfo() {
    if (!username) return;
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserInfo(data);
  }

  if (!userInfo) {
    return (
      <div className="text-white h-120 w-92 bg-blue-950">
        <h2 className="">GitHub Info Finder</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={getUserInfo}>Search</button>
        
      </div>
    );
  }

  return (
    <>
    <div className="text-white flex flex-col items-center justify-center gap-4 p-4">
    <div className="rounded-xl w-120 h-12 bg-blue-950">
        <input className="w-70 h-7 rounded-sm ml-10 mt-2 p-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub username..."
      />
      <button className="cursor-pointer bg-indigo-700 rounded ml-12 mt-2 w-20 h-7" onClick={getUserInfo}>Search</button>
      </div>
    <div className="relative h-110 w-170 bg-blue-950 text-white gap4 p-4 rounded-3xl">
      
      
      

      <div className="text-white">
        <img className="absolute h-25 rounded-full top-2.5" src={userInfo.avatar_url} alt="avatar" />
        <h3 className="absolute ml-30 top-2.5 text-2xl">{userInfo.login || "No name"}</h3>
        <p className="absolute text-blue-600 ml-30 top-10">@{userInfo.login}</p>
        <p className="absolute text-gray-500 top-20 ml-30">{userInfo.bio || "this profile has no bio"}</p>
        <div className="relative h-30 w-120 bg-gray-900 mt-40 ml-22 rounded-2xl">
        <p className="absolute text-gray-500 ml-5 mt-2 text-xl">Public Repos:</p><p className="absolute text-white text-lg ml-17 mt-12 ">{userInfo.public_repos}</p>
        <p className="absolute text-gray-500 ml-50 top-0 text-xl mt-2">Followers:</p>
        <p className="absolute text-white text-lg mt-12 ml-60">{userInfo.followers}</p>
        <p className="absolute text-gray-500 ml-90 top-0 text-xl mt-2">Following:</p>
        <p className="text-white absolute mt-12 ml-102 text-lg">{userInfo.following}</p>
        </div>

        <FaMapMarkerAlt className="mt-5 ml-25 text-white"/>
        <p className="absolute ml-30 bottom-26"> {userInfo.location || "Unknown"}</p>
        <p className="absolute ml-100 bottom-27">Company: {userInfo.company || "Unknown"}</p>
        <p className="absolute ml-100 top-5 text-gray-500">Joined: {new Date(userInfo.created_at).toLocaleDateString()}</p>

        <p className="absolute bottom-10 text-gray-400 ml-10"><a href={userInfo.html_url} target="_blank">{userInfo.githublink}https://github.com/{username}</a></p>
        {userInfo.blog && <p className="absolute "><a href={userInfo.blog.startsWith("http") ? userInfo.blog : `https://${userInfo.blog}`} target="_blank">Blog</a></p>}
        
        <div className="absolute flex items-center gap-2 bottom-10 ml-80">
          <FaTwitter className={userInfo.twitter_username ? "text-sky-400 text-xl " : "text-white text-xl ml-20"} />
          {userInfo.twitter_username ? (
            <a
              href={`https://twitter.com/${userInfo.twitter_username}`}
              target="_blank"
              className="hover:underline absolute ml-20"
            >
              @{userInfo.twitter_username}
            </a>
          ) : (
            <span className="text-white absolute ml-27 whitespace-nowrap">No Twitter profile</span>
          )}
        </div>


      </div>
    </div>
    </div>
    </>
  );
}