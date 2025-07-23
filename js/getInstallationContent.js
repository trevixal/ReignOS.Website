async function getInstallationContent() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/steff-mat/test/main/Installation_Guide.md"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch installation content: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching installation content:", error);
    return "Failed to load installation content. Please try again later.";
  }
}
window.getInstallationContent = getInstallationContent;