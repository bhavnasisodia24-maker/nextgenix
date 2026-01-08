// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//     try {
//         console.log('API /contact called');

//         const data = await req.json();
//         console.log('Received data:', data);

//         const scriptUrl = process.env.GOOGLE_SHEETS_URL;
//         console.log('Google Script URL:', scriptUrl);

//         if (!scriptUrl) {
//             throw new Error('GOOGLE_SHEETS_URL is missing');
//         }

//         const params = new URLSearchParams(data);

//         const googleResponse = await fetch(scriptUrl, {
//             method: 'POST',
//             body: params,
//         });

//         console.log('Google response status:', googleResponse.status);

//         return NextResponse.json({ success: true });
//     } catch (error: any) {
//         console.error('API ERROR:', error);
//         return NextResponse.json(
//             { error: error.message },
//             { status: 500 }
//         );
//     }
// }


// Bhavna Edit This Section 
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        console.log('API /contact called');

        const data = await req.json();
        console.log('Received data:', data);

        const scriptUrl = process.env.GOOGLE_SHEETS_URL;
        console.log('Google Script URL exists:', !!scriptUrl);

        if (!scriptUrl) {
            throw new Error('GOOGLE_SHEETS_URL is missing in environment variables');
        }

        // Send as JSON to match your Google Apps Script
        const googleResponse = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseText = await googleResponse.text();
        console.log('Google Script response:', responseText);

        // Try to parse response
        let result;
        try {
            result = JSON.parse(responseText);
        } catch (e) {
            console.log('Response is not JSON:', responseText);
            result = { success: true }; // Assume success if we can't parse
        }

        if (!result.success && result.error) {
            throw new Error(result.error);
        }

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch (error: any) {
        console.error('API ERROR:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to submit form' },
            { status: 500 }
        );
    }
}