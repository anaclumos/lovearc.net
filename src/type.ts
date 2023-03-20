export type TweetResponse = {
  statuses: {
    created_at: string;
    id: number;
    id_str: string;
    text: string;
    truncated: boolean;
    entities: {
      hashtags: [];
      symbols: [];
      user_mentions: {
        screen_name: string;
        name: string;
        id: number;
        id_str: string;
        indices: number[];
      }[];
      urls: {
        url: string;
        expanded_url: string;
        display_url: string;
        indices: number[];
      }[];
    };
    metadata: {
      iso_language_code: string;
      result_type: string;
    };
    source: string;
    in_reply_to_status_id: number | null;
    in_reply_to_status_id_str: string | null;
    in_reply_to_user_id: number;
    in_reply_to_user_id_str: string;
    in_reply_to_screen_name: string;
    user: {
      id: number;
      id_str: string;
      name: string;
      screen_name: string;
      location: string;
      description: string;
      url: string;
      entities: {
        url: {
          urls: {
            url: string;
            expanded_url: string;
            display_url: string;
            indices: number[];
          }[];
        };
        description: {
          urls: [];
        };
      };
      protected: boolean;
      followers_count: number;
      friends_count: number;
      listed_count: number;
      created_at: string;
      favourites_count: number;
      utc_offset: number | null;
      time_zone: string | null;
      geo_enabled: boolean;
      verified: boolean;
      statuses_count: number;
      lang: string | null;
      contributors_enabled: boolean;
      is_translator: boolean;
      is_translation_enabled: boolean;
      profile_background_color: string;
      profile_background_image_url: string;
      profile_background_image_url_https: string;
      profile_background_tile: boolean;
      profile_image_url: string;
      profile_image_url_https: string;
      profile_banner_url: string;
      profile_link_color: string;
      profile_sidebar_border_color: string;
      profile_sidebar_fill_color: string;
      profile_text_color: string;
      profile_use_background_image: boolean;
      has_extended_profile: boolean;
      default_profile: boolean;
      default_profile_image: boolean;
      following: boolean | null;
      follow_request_sent: boolean | null;
      notifications: boolean | null;
      translator_type: string;
      withheld_in_countries: [];
    };
    geo: null;
    coordinates: null;
    place: null;
    contributors: null;
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    lang: string;
  }[];
  search_metadata: {
    completed_in: number;
    max_id: number;
    max_id_str: string;
    next_results: string;
    query: string;
    refresh_url: string;
    count: number;
    since_id: number;
    since_id_str: string;
  };
};

export type TweetData = {
  id: number;
  text: string;
  createdAt: string;
  userName: string;
  userScreenName: string;
  userImageUrl: string;
  retweetCount: number;
  favoriteCount: number;
};
