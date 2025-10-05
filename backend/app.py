from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI instance
app = FastAPI(title="StellarAid Backend")

# Root route for testing
@app.get("/")
def home():
    return {"message": "StellarAid backend is running 🚀"}

# Example endpoint for astronaut vitals
@app.get("/api/vitals")
def get_vitals():
    sample_data = {
        "heart_rate": 78,
        "oxygen_level": 96,
        "stress_level": 0.3,
        "sleep_hours": 6.5
    }
    return sample_data
