import styles from "./UrlShortening.module.css";
import { Button } from "../../Base";
import { useShortening } from "./UrlShortening.hooks";

const UrlShortening = () => {
  const {
    inputValue,
    onInputChange,
    loading,
    error,
    links,
    onSubmitHandler,
    onCopyHandler,
  } = useShortening();

  return (
    <>
      <section className={styles.urlShortener}>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={error ? styles.inputError : styles.input}
            value={inputValue}
            onChange={onInputChange}
          />
          <Button type="submit">Shorten it!</Button>
        </form>
        <p className={styles.errorMes}>{error.length > 0 && error}</p>
        {loading && <p className={styles.loader}>Shortening...</p>}
      </section>
      <section className={styles.list}>
        <div className={styles.url}>
          <ul>
            {Object.entries(links).map((entry) => {
              const [id, obj] = entry;
              const { longLink, shortLink, isCopied } = obj;
              return shortLink ? (
                <li className={styles.urlList} key={id}>
                  <div className={styles.currentUrl}>
                    <span>{longLink}</span>
                  </div>
                  <div className={styles.shortUrlBox}>
                    <span className={styles.shortUrl}>{shortLink}</span>
                    <Button
                      onClick={() => onCopyHandler(shortLink, id)}
                      className={
                        isCopied ? styles.copiedButton : styles.copyButton
                      }
                    >
                      {isCopied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default UrlShortening;
