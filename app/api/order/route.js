export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, service, description } = body;

    const sheetUrl = process.env.SHEET_ACCESS;

    if (!sheetUrl) {
      return new Response(
        JSON.stringify({ success: false, error: 'Sheet URL not configured' }),
        { status: 500 }
      );
    }

    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, service, description }),
    });

    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const result = await response.json();
      return new Response(JSON.stringify({ success: true, data: result }), {
        status: 200,
      });
    } else {
      const text = await response.text();
      console.error('Non-JSON response from script:', text);
      return new Response(
        JSON.stringify({ success: false, error: 'Script did not return JSON' }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server Error' }),
      { status: 500 }
    );
  }
}
