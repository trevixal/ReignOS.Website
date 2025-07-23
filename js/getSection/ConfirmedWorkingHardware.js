async function getSectionConfirmedWorkingHardware() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/trevixal/ReignOS.Website/main/ConfirmedWorkingHardware.md"
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
