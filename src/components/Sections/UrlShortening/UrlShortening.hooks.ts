import { useEffect, useState } from "react";

const API_KEY = "rC73HhGUri9aW21WclUlomgETa1mkgKtgR7S7fn3s12p2nFwNRnfnoAeoJol";
const url = "https://t.ly/api/v1/link/shorten";

interface linksType {
  longLink: string;
  shortLink: string;
  isCopied: boolean;
}

const useShortening = () => {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState<Record<string, linksType>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isError = () => {
    if (!inputValue.includes("http://") && !inputValue.includes("https://")) {
      setError("Please add http:// or https:// to your URL");
      return true;
    }
    setError("");
    return false;
  };

  const fetchShortenUrl = async (id: string) => {
    if (isError()) return;

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          long_url: inputValue,
        }),
      });

      const result = await response.json();

      setLinks((prev) => ({
        ...prev,
        [id]: { ...prev[id], shortLink: result.short_url },
      }));
      setError("");
    } catch (error) {
      setError(`An error has occured while shortening URL`);
    } finally {
      setLoading(false);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Date.now().toString();

    if (!inputValue.trim().length) {
      setError(`Please add a link`);
    } else {
      if (!isError()) {
        setLinks((prev) => ({
          ...prev,
          [id]: { ...prev[id], longLink: inputValue },
        }));
      }
      fetchShortenUrl(id);
    }
    setInputValue("");
  };

  useEffect(() => {
    if (Object.entries(links).length > 0) {
      localStorage.setItem("links", JSON.stringify(links));
    }
  }, [links]);

  useEffect(() => {
    const storedLinks = localStorage.getItem("links");
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  const onCopyHandler = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url);
      const copiedUrl = await navigator.clipboard.readText();

      if (copiedUrl === url) {
        setLinks((prev) => ({
          ...prev,
          [id]: { ...prev[id], isCopied: true },
        }));
      } else {
        alert("URL was not copied! Check the console");
      }
    } catch (error) {
      console.error("Error while copying the URL:", error);
    }
  };

  return {
    inputValue,
    loading,
    error,
    links,
    onInputChange,
    onSubmitHandler,
    onCopyHandler,
  };
};

export { useShortening };
