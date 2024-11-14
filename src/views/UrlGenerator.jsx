import { useEffect, useState } from "react";
import { shorturls } from "../constants";

function UrlGenerator() {
  const [longurl, setLongUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(shorturls, JSON.stringify(shortUrls));
  }, [shortUrls]);

  const handleLongUrl = (e) => {
    let value = e.target.value;
    setLongUrl(value);
  };

  const generateShortId = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const shortId = generateShortId();
    const newShortUrl = {
      longurl,
      shortUrl: `${window.location.origin}/${shortId}`,
      shortId: shortId,
    };
    setShortUrls([...shortUrls, newShortUrl]);
    setLongUrl("");
    setLoading(false);
  };

  return (
    <div>
      Short URL Dashboard
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter Long Url"
          value={longurl}
          onChange={handleLongUrl}
          style={{
            width: 300,
            padding: 10,
          }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      <div>
        Short URLS
        <ul>
          {shortUrls.map((url, i) => {
            return (
              <li>
                {url.longurl}: {url.shortUrl}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UrlGenerator;
