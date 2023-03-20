import { useState } from 'react';
import useSWR from 'swr';
import { TweetData } from './type';
import Image from 'next/image';

function mapTweetDataToTweet(tweetData: any) {
  return {
    id: tweetData.id_str,
    text: tweetData.text,
    userName: tweetData.user.name,
    userScreenName: tweetData.user.screen_name,
    userImageUrl: tweetData.user.profile_image_url_https,
  };
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('arc browser love');
  const { data, error } = useSWR(
    searchTerm ? `/api/twitter?q=${searchTerm}` : null,
    url => fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }).then(res => res.json()),
  );

  const tweets = data?.statuses.map(mapTweetDataToTweet) || [];

  return (
    <div className="p-10" >
      <h1 className="text-3xl font-bold mb-5 center">We ❤️ Arc</h1>
      {error && <div className="text-red-500">Error fetching tweets</div>}
      <div className="grid grid-cols-3 gap-5">
        {tweets.map((tweet: TweetData) => (
          <div data-theme="dark" className="bg-gray-800 rounded shadow p-5" key={tweet.id} >
            <div key={tweet.id} className="bg-white rounded shadow p-5">
              <p className="text-gray-600 mt-2">{tweet.text}</p>
              <div className="flex items-center mt-2">
                <Image src={`/api/imageProxy?imageUrl=${encodeURIComponent(tweet.userImageUrl)}`} alt="User profile" className="w-8 h-8 rounded-full mr-2" width={32} height={32} />
                <div>
                  <p className="font-bold">{tweet.userName}</p>
                  <p className="text-gray-600">@{tweet.userScreenName}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
