# How to Connect Your Form to Google Sheets

Since we cannot directly save to an Excel file on your server (as Vercel/Next.js are serverless and stateless), the industry standard way to capture form data for free is using Google Sheets.

Follow these exact steps to create your "backend":

### 1. Create the Google Sheet
1. Go to [Google Sheets](https://docs.google.com/spreadsheets).
2. Create a **Blank** spreadsheet.
3. Rename the sheet (in the top left) to `NextGenix Leads`.
4. In the first row (Row 1), add these headers in the exact order:
   - **A1**: `Date`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Business Name`
   - **E1**: `Website`
   - **F1**: `Project Details`

### 2. Add the Script
1. In the Google Sheet, go to **Extensions** > **Apps Script**.
2. A new tab will open with a code editor.
3. Delete any code there (like `function myFunction() {...}`) and **paste the following code**:

```javascript
const SHEET_NAME = "Sheet1"; // Make sure this matches the tab name at the bottom

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    const data = JSON.parse(e.postData.contents);
    
    const nextRow = sheet.getLastRow() + 1;
    const date = new Date();

    sheet.getRange(nextRow, 1, 1, 6).setValues([[
      date,
      data.name,
      data.email,
      data.businessName,
      data.website,
      data.message
    ]]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

4. Press **Save** (floppy disk icon).

### 3. Deploy as Web App
1. Click the blue **Deploy** button (top right) > **New deployment**.
2. Click the **Select type** gear icon (left) > **Web app**.
3. Fill in the details:
   - **Description**: `Contact Form`
   - **Execute as**: `Me` (your email)
   - **Who has access**: `Anyone` (IMPORTANT! This allows your website to send data)
4. Click **Deploy**.
5. You will be asked to **Authorize access**.
   - Click **Authorize access**.
   - Select your Google account.
   - You might see a "Google hasn't verified this app" warning (because you just wrote it).
   - Click **Advanced** > **Go to (Script Name) (unsafe)**.
   - Click **Allow**.
6. Copy the **Web app URL** (it starts with `https://script.google.com/macros/s/...`).

### 4. Provide the URL
Copy that URL and send it to me, or create a file named `.env.local` in your project root and add it like this:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_LONG_URL_HERE/exec
```
