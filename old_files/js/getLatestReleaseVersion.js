async function getLatestReleaseVersion() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/reignstudios/ReignOS/releases/latest"
    );

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}`
      );
    }

    const data = await response.json();
    return data.tag_name || "latest release";
  } catch (error) {
    console.error("Error fetching latest release:", error);
    return "latest release";
  }
}
