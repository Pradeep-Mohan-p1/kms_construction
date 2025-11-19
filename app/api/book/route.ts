import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, location, serviceType, message } = body;

    // Validate required fields
    if (!name || !phone || !location || !serviceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send SMS notification
    // 4. Add to CRM system

    // For now, we'll just log and return success
    console.log("Booking request received:", {
      name,
      phone,
      location,
      serviceType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: "Booking request submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}



