import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 30 });
    setShowBanner(false);
  };

  return showBanner ? (
    <div className="fixed bottom-5 left-5 right-5 bg-gray-900 text-white p-4 rounded-lg flex justify-between items-center">
      <p>We use cookies to improve your experience. By using our site, you accept cookies.</p>
      <button onClick={acceptCookies} className="bg-blue-500 px-4 py-2 rounded-lg text-white">
        Accept
      </button>
    </div>
  ) : null;
};

export default CookieConsent;
