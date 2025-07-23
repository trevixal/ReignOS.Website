async function getCompatibilityContent() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/steff-mat/test/main/Compatibility_List.md"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch compatibility content: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching compatibility content:", error);
    return "Failed to load compatibility content. Please try again later.";
  }
}
window.getCompatibilityContent = getCompatibilityContent;