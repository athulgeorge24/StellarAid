export async function testBackendConnection(): Promise<void> {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/vitals");
    const data = await res.json();
    console.log("✅ Backend response:", data);
  } catch (err) {
    console.error("❌ Backend not reachable:", err);
  }
}