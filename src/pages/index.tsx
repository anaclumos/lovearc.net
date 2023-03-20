import { mapTweetDataToTweet, TweetData } from '../type';
import Image from 'next/image';
import Head from 'next/head'

export default function Home() {
  const data = require('../../twitter.json');
  let tweets = data?.statuses.map(mapTweetDataToTweet) || [];
  tweets = tweets.sort((a: TweetData, b: TweetData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return (
    <div>
      <Head>
        <title>And We Love Arc...</title>
        <meta name="description" content="And We Love Arc..." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/lovearc.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="And We Love Arc..." />
        <meta property="og:title" content="And We Love Arc..." />
        <meta property="og:description" content="And We Love Arc..." />
        <meta property="og:url" content="https://lovearc.net" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="And We Love Arc..." />
        <meta name="twitter:description" content="And We Love Arc..." />
        <meta name="twitter:image" content="/lovearc.png" />
        <meta name="twitter:image:alt" content="And We Love Arc..." />
      </Head>
      <div className="grid w-full h-96" style={{ backgroundImage: 'url(/noise.png)', backgroundAttachment: 'fixed', backgroundColor: '#fca39f' }}
      >
        <Image
          src="/arc.svg"
          alt="Arc Logo"
          width={76}
          height={76}
          className="m-auto mb-3"
        />
        <h1
          className="m-auto mt-3 items-center justify-center text-2xl md:text-5xl font-bold center text-center text-red-500 align-middle">And We Love Arc...</h1>
      </div>
      <div className='p-5 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center'
        style={{ backgroundImage: 'url(/grid.svg)', backgroundAttachment: 'fixed', backgroundColor: '#fbfbf1' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl w-full">
          {tweets.map((tweet: TweetData) => (
            <a className="relative min-h-128 bg-white border-gray-200 p-4 rounded-xl border max-w-xl" key={tweet.id} href={`https://twitter.com/${tweet.userScreenName}/status/${tweet.id}`} target="_blank" rel="noreferrer noopener">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <Image
                    src={tweet.userImageUrl}
                    alt="User profile"
                    className="w-8 h-8 rounded-full mr-2"
                    width={32}
                    height={32}
                  />
                  <div className="ml-1.5 text-sm leading-tight">
                    <span className="text-black font-bold block ">{tweet.userName}</span>
                    <span className="text-gray-500 font-normal block">{tweet.userScreenName}</span>
                  </div>
                </div>
                <svg className="text-blue-400 h-6 w-auto inline-block fill-current" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
              </div>
              <p className="text-black block text-lg leading-snug mt-3 mb-24">{tweet.text}</p>
              <div className='absolute inset-x-0 bottom-0 m-4'>
                <p className="text-gray-500 text-base py-1 my-0.5">{
                  ` ${new Date(tweet.createdAt).toLocaleTimeString('en-US')}, ${new Date(tweet.createdAt).toLocaleDateString('en-US')}`
                }</p>
                <div className="border-gray-200 border border-b-0 my-1"></div>
                <div className="text-gray-500 flex mt-3">
                  <div className="flex items-center mr-6">
                    <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>
                    <span className="ml-3">{tweet.favoriteCount}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                    <span className="ml-3">{tweet.retweetCount}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div >
  );
}
