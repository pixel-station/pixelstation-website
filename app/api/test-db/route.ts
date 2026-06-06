export async function GET() {
  try {
    // @ts-ignore
    const db = process.env.DB;

    return Response.json({
      success: true,
      dbAvailable: !!db,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}