let API_URL = ""
API_URL = "http://game.tawasolmap.com"
API_URL = "http://localhost:8000"


export default async function Login(){
  let device_id = localStorage.getItem("device_id");
  console.log("device_id is ", device_id);
  if (device_id === null) {
    device_id = prompt("inter device_id")
    localStorage.setItem("device_id", device_id);
  }
  const body = {
    "email": "",
    "device_id": device_id,
    "user_login": true
  }
  const response = await fetch(`${API_URL}/auth/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  const access_token = data.access_token
  if (response.status === 200) {
    localStorage.setItem("token", access_token);
    console.log("access_token is ", access_token);

  } else {
    return data;
  }
}