export const colourOptions = [
    "#1e3a8a", // Navy Blue
    "#2563eb", // Blue
    "#3b82f6", // Light Blue
    "#60a5fa", // Sky Blue
    "#93c5fd", // Light Sky
    "#a5b4fc", // Indigo Blue
    "#6366f1", // Indigo
    "#4f46e5", // Deep Indigo
    "#7c3aed", // Violet
    "#8b5cf6", // Medium Violet
    "#a78bfa", // Light Violet
    "#c084fc", // Lilac
    "#d8b4fe", // Pale Purple
    "#c4b5fd", // Soft Purple
    "#ede9fe"  // Lavender
  ];

export const getColourByIndex = (index: number) => colourOptions[index % colourOptions.length];
