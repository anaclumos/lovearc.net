import os
from dotenv import load_dotenv

load_dotenv()


url: str = f"https://api.twitter.com/1.1/search/tweets.json?q=love%20arc%20browser&result_type=recent&count=100"

headers: dict = {
    "Authorization": f'Bearer {os.environ["TWEET_BEARER_TOKEN"]}',
    "Accept": "application/json",
    "Content-Type": "application/json",
}


def get_tweets():
    import requests

    try:
        result = requests.get(url, headers=headers)
    except requests.exceptions.RequestException as e:
        return None
    return result


if __name__ == "__main__":
    import json

    with open("twitter.json", "r") as f:
        data = {}
        try:
            data = json.load(f)
        except json.decoder.JSONDecodeError:
            pass
        with open("twitter.json", "w") as f2:
            result = get_tweets()
            if result is not None:
                if "statuses" in data:
                    data["statuses"].extend(result.json()["statuses"])
                    data["statuses"] = list(
                        {v["id"]: v for v in data["statuses"]}.values()
                    )
                else:
                    data = result.json()
                json.dump(data, f2, indent=4)
