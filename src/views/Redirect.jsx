import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shorturls } from "../constants";

const Redirect = () => {
  const { shortId } = useParams();
  const navigate = useNavigate();
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem(shorturls)) || [];
    setUrls(storedUrls);
  });

  useEffect(
    () => {
      const findUrl = urls.find((url) => url.shortId == shortId);

      if (findUrl) {
        window.location.href = findUrl;
      } else {
        alert("wrong url!");
        navigate("/");
      }
    },
    shortId,
    urls,
    navigate
  );

  return <div>Redirecting...</div>;
};

export default Redirect;
