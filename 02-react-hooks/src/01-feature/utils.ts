export const getQueryParam = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("query") ?? "";
};

export const syncQueryParam = (query: string) => {
  const url = new URL(window.location.href);

  if (query) {
    url.searchParams.set("query", query);
  } else {
    url.searchParams.delete("query");
  }

  window.history.replaceState(null, "", url);
};
