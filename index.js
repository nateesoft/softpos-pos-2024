const fs = require('fs');
const archiver = require('archiver');

function zipFolder(sourceFolder, zipFilePath, excludePatterns = []) {
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        console.log(`ZIP file created: ${zipFilePath} (${archive.pointer()} total bytes)`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);

    // อ่านไฟล์ทั้งหมดในโฟลเดอร์
    fs.readdirSync(sourceFolder).forEach((file) => {
        const filePath = `${sourceFolder}/${file}`;

        // เช็คว่าไฟล์หรือโฟลเดอร์อยู่ในลิสต์ที่ต้องการข้ามหรือไม่
        const shouldExclude = excludePatterns.some((pattern) => file.match(pattern));

        if (!shouldExclude) {
            if (fs.lstatSync(filePath).isDirectory()) {
                archive.directory(filePath, file);
            } else {
                archive.file(filePath, { name: file });
            }
        }
    });

    archive.finalize();
}

// ใช้งาน
const sourceFolder = '.';
const zipFilePath = 'softpos-pos-2024.zip';

// กำหนดไฟล์หรือโฟลเดอร์ที่ไม่ต้องการ ZIP (ใช้ regex ได้)
const excludePatterns = [/node_modules/,/build/, /DS_Store/, /\.git/, /excludedFile\.txt/];

zipFolder(sourceFolder, zipFilePath, excludePatterns);
