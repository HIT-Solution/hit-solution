"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const SocialSharing = ({ title }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  console.log(currentUrl);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(currentUrl);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`,
    email: `mailto:?subject=${shareText}&body=${shareUrl}`,
  };

  const handleShare = (platformUrl) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const popupWidth = Math.floor(screenWidth * 0.9);
    const popupHeight = Math.floor(screenHeight * 0.9);
    const left = Math.floor((screenWidth - popupWidth) / 2);
    const top = Math.floor((screenHeight - popupHeight) / 2);
    window.open(
      platformUrl,
      "_blank",
      `noopener,noreferrer,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast.success("link copied successfully");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  return (
    <div>
      <div className="text-text flex gap-7 mt-5">
        <button onClick={() => handleShare(socialLinks.twitter)}>
          {" "}
          <Image
            className="object-cover"
            alt=""
            src={"/twitter.png"}
            height={30}
            width={30}
            quality={100}
          />
        </button>

        <button onClick={() => handleShare(socialLinks.facebook)}>
          {" "}
          <Image
            className="object-cover"
            alt=""
            src={"/facebook.png"}
            height={30}
            width={30}
            quality={100}
          />
        </button>

        <button onClick={() => handleShare(socialLinks.linkedin)}>
          {" "}
          <Image
            className="object-cover"
            alt=""
            src={"/linkedin.png"}
            height={40}
            width={30}
            quality={100}
          />
        </button>

        <button onClick={() => handleShare(socialLinks.email)}>
          {" "}
          <Image
            className="object-cover"
            alt=""
            src={"/gmail.png"}
            height={40}
            width={30}
            quality={100}
          />
        </button>
      </div>
    </div>
  );
};

export default SocialSharing;
