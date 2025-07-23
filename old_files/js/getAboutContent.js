async function getAboutContent() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/steff-mat/test/main/README.md"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch about content: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching about content:", error);
    return "Failed to load about content. Please try again later.";
  }
}
window.getAboutContent = getAboutContent;