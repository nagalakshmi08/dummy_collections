const fs = require("fs");

const filePath = "output_part_7.json"; // JSON file to modify

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Replace "Distacart" but NOT when followed by ".com"
    const updatedData = data.replace(/(^|[^a-zA-Z])Distacart(?!\.com)/g, "$1Distacart.com")
                            .replace(/(^|[^a-zA-Z])distacart(?!\.com)/g, "$1distacart.com");

    // Write back the modified data to the same file
    fs.writeFile(filePath, updatedData, "utf8", (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Successfully updated the JSON file!");
    });
});
