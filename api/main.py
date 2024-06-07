import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = pickle.load(open('model\model.pkl', 'rb'))


class Candidate(BaseModel):
    Headcount_ratio: int
    Intensity: int
    Population: int
    VP: int
    SP: int

@app.get("/")
def read_root():
    return {"data": "Welcome to Poverty prediction model"}

@app.post("/prediction/")
async def get_predict(data: Candidate):
    sample = [[
            data.Headcount_ratio,
            data.Intensity,
            data.Population,
            data.VP,
            data.SP
    ]]
    prediction = model.predict(sample).tolist()[0]
    return {
        "data":{
            "Prediction": prediction,
            "interpretation": "Low Poverty." if prediction <= 0.25 else "High Poverty" 
        }
    }

if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
