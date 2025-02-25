const fs = require("fs");

const filePath = "output_part_7.json"; // JSON file to modify

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Replace all "Distacart" with "Distacart.com" but ignore "Distacart.com"
    const updatedData = data.replace(/\bDistacart\b(?!\.com)/g, "Distacart.com")
                            .replace(/\bdistacart\b(?!\.com)/g, "distacart.com");

    // Write back the modified data to the same file
    fs.writeFile(filePath, updatedData, "utf8", (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Successfully updated the JSON file!");
    });
});
