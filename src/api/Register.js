const API_URL = "http://localhost:8000"



export default async function Register(){
  const body = {
    "email": "",
    "username": "",
    "device_id": "str",
    "area_number": 1
  }
  const response = await fetch(`${API_URL}/users/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  if (response.status === 200) {
    console.log("data :", data);
  }
  return data;

}