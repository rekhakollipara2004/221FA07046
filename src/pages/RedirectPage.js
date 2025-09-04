import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RedirectPage() {
  const { shortcode } = useParams();

  useEffect(() => {
    console.log("Redirect requested for shortcode:", shortcode);
  }, [shortcode]);

  return <div>Redirecting you, please wait...</div>;
}
