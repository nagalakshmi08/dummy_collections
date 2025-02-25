const fs = require("fs");

const filePath = "output_part_7.json"; // JSON file to modify

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Regex to replace "Distacart" unless followed by ".com"
    const updatedData = data.replace(/\bDistacart(?!\.com)\b/g, "Distacart.com")
                            .replace(/\bdistacart(?!\.com)\b/g, "distacart.com");

    // Write back the modified data to the same file
    fs.writeFile(filePath, updatedData, "utf8", (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Successfully updated the JSON file!");
    });
});
